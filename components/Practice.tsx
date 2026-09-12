"use client";

import { useMemo, useRef, useState } from "react";
import type { VocabItem } from "@/data/lessons";
import { recordPhraseResult } from "@/lib/progress";

type SpeakStatus = "idle" | "loading" | "playing" | "fallback" | "error";

function speakWithBrowser(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.85;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

// Client-side cache so repeat plays of the same word don't refetch audio.
const audioCache = new Map<string, string>();

async function speakWithAzure(devanagari: string): Promise<"played" | "unconfigured" | "error"> {
  const cached = audioCache.get(devanagari);
  if (cached) {
    const audio = new Audio(cached);
    await audio.play();
    return "played";
  }

  const res = await fetch("/api/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: devanagari }),
  });

  if (res.status === 501) return "unconfigured";
  if (!res.ok) return "error";

  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  audioCache.set(devanagari, url);
  const audio = new Audio(url);
  await audio.play();
  return "played";
}

export default function Practice({ items }: { items: VocabItem[] }) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState({ correct: 0, seen: 0 });
  const [done, setDone] = useState(false);
  const [speakStatus, setSpeakStatus] = useState<SpeakStatus>("idle");
  const warnedFallback = useRef(false);

  const order = useMemo(
    () => [...items.keys()].sort(() => Math.random() - 0.5),
    [items]
  );
  const current = items[order[index]];

  async function handleSpeak() {
    setSpeakStatus("loading");
    try {
      const result = await speakWithAzure(current.devanagari);
      if (result === "played") {
        setSpeakStatus("playing");
        return;
      }
      if (result === "unconfigured") {
        warnedFallback.current = true;
        speakWithBrowser(current.marathi);
        setSpeakStatus("fallback");
        return;
      }
      throw new Error("azure error");
    } catch {
      // Fall back to the browser voice rather than leaving the button dead.
      speakWithBrowser(current.marathi);
      setSpeakStatus("fallback");
    }
  }

  function next(wasCorrect: boolean) {
    recordPhraseResult(current, wasCorrect);
    setScore((s) => ({ correct: s.correct + (wasCorrect ? 1 : 0), seen: s.seen + 1 }));
    setRevealed(false);
    setSpeakStatus("idle");
    if (index + 1 >= order.length) {
      setDone(true);
    } else {
      setIndex(index + 1);
    }
  }

  function restart() {
    setIndex(0);
    setRevealed(false);
    setScore({ correct: 0, seen: 0 });
    setDone(false);
    setSpeakStatus("idle");
  }

  if (!items.length) return null;

  if (done) {
    return (
      <div className="rounded-xl border border-black/5 bg-white p-6 text-center">
        <p className="font-display text-lg font-semibold text-ink">Practice complete</p>
        <p className="mt-1 text-muted">
          {score.correct} of {score.seen} correct
        </p>
        <button
          onClick={restart}
          className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white"
        >
          Practice again
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-black/5 bg-white p-6">
      <p className="text-xs font-medium text-muted">
        Card {index + 1} of {order.length}
      </p>

      <div className="mt-4 rounded-lg bg-offwhite p-8 text-center">
        <p className="font-display text-2xl font-semibold text-ink">{current.marathi}</p>
        <p className="mt-1 text-lg text-muted">{current.devanagari}</p>
        {revealed && <p className="mt-3 text-terracotta">{current.english}</p>}
        {current.notes && revealed && (
          <p className="mt-1 text-xs text-muted">{current.notes}</p>
        )}
      </div>

      <div className="mt-4 flex justify-center gap-3">
        <button
          onClick={handleSpeak}
          disabled={speakStatus === "loading"}
          className="rounded-lg border border-black/10 px-4 py-2 text-sm text-ink disabled:opacity-50"
        >
          {speakStatus === "loading" ? "Loading…" : "Hear it"}
        </button>
        {!revealed && (
          <button
            onClick={() => setRevealed(true)}
            className="rounded-lg border border-black/10 px-4 py-2 text-sm text-ink"
          >
            Show meaning
          </button>
        )}
      </div>

      {revealed && (
        <div className="mt-5 flex justify-center gap-3">
          <button
            onClick={() => next(false)}
            className="rounded-lg border border-black/10 px-4 py-2 text-sm font-medium text-ink"
          >
            Didn't know it
          </button>
          <button
            onClick={() => next(true)}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white"
          >
            Knew it
          </button>
        </div>
      )}

      {speakStatus === "fallback" && (
        <p className="mt-4 text-center text-xs text-muted">
          Using your browser's voice as a placeholder — a Marathi-tuned voice isn't configured
          yet for this deployment (see README: AZURE_SPEECH_KEY).
        </p>
      )}
      {speakStatus === "playing" && (
        <p className="mt-4 text-center text-xs text-muted">
          Played with a native Marathi neural voice.
        </p>
      )}
    </div>
  );
}
