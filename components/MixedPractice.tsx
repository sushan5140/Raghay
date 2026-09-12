"use client";

import { useMemo, useState } from "react";
import type { VocabItem } from "@/data/lessons";

type Mode = "marathi-to-english" | "english-to-marathi" | "build" | "listen";

type Exercise = {
  mode: Mode;
  item: VocabItem;
  options?: string[];
  tokens?: string[];
};

function rotate<T>(items: T[], amount: number) {
  if (!items.length) return [];
  const shift = ((amount % items.length) + items.length) % items.length;
  return [...items.slice(shift), ...items.slice(0, shift)];
}

function mixTokens(tokens: string[], round: number) {
  if (tokens.length < 2) return tokens;
  const rotated = rotate(tokens, round + 1);
  return round % 2 === 0 ? [...rotated].reverse() : rotated;
}

function makeOptions(
  items: VocabItem[],
  item: VocabItem,
  field: "english" | "marathi",
  round: number
) {
  const candidates = rotate(
    items.filter((candidate) => candidate !== item),
    round + 1
  );
  return rotate(
    [item[field], ...candidates.slice(0, 2).map((candidate) => candidate[field])],
    round % 3
  );
}

function buildExercises(items: VocabItem[], round: number): Exercise[] {
  if (!items.length) return [];

  const pool = rotate(items, round);
  const first = pool[0] || items[0];
  const second = pool[1] || items[0];
  const buildItem =
    pool.find((item) => item.marathi.trim().split(/\s+/).length >= 2) || first;
  const listenItem = pool[3] || pool[2] || second;

  return [
    {
      mode: "marathi-to-english",
      item: first,
      options: makeOptions(items, first, "english", round),
    },
    {
      mode: "english-to-marathi",
      item: second,
      options: makeOptions(items, second, "marathi", round + 1),
    },
    {
      mode: "build",
      item: buildItem,
      tokens: mixTokens(buildItem.marathi.trim().split(/\s+/), round),
    },
    {
      mode: "listen",
      item: listenItem,
      options: makeOptions(items, listenItem, "english", round + 2),
    },
  ];
}

async function playMarathi(devanagari: string, fallback: string) {
  try {
    const response = await fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: devanagari }),
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const audio = new Audio(url);
      audio.onended = () => URL.revokeObjectURL(url);
      await audio.play();
      return;
    }
  } catch {}

  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(fallback);
    utterance.rate = 0.85;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }
}

export default function MixedPractice({ items }: { items: VocabItem[] }) {
  const [round, setRound] = useState(0);
  const exercises = useMemo(() => buildExercises(items, round), [items, round]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [built, setBuilt] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [done, setDone] = useState(false);

  const current = exercises[index];

  if (!current) return null;

  const builtAnswer = built.join(" ");
  const isCorrect =
    current.mode === "build"
      ? builtAnswer === current.item.marathi
      : current.mode === "english-to-marathi"
        ? selected === current.item.marathi
        : selected === current.item.english;

  function answer(option: string) {
    if (answered) return;
    setSelected(option);
    setAnswered(true);
    const correct =
      current.mode === "english-to-marathi"
        ? option === current.item.marathi
        : option === current.item.english;
    if (correct) setScore((value) => value + 1);
  }

  function submitBuild() {
    if (answered || !built.length) return;
    setAnswered(true);
    if (builtAnswer === current.item.marathi) setScore((value) => value + 1);
  }

  function next() {
    if (index + 1 >= exercises.length) {
      setDone(true);
      return;
    }
    setIndex((value) => value + 1);
    setSelected(null);
    setBuilt([]);
    setAnswered(false);
  }

  function restart() {
    setRound((value) => value + 1);
    setIndex(0);
    setSelected(null);
    setBuilt([]);
    setScore(0);
    setAnswered(false);
    setDone(false);
  }

  const modeLabel = {
    "marathi-to-english": "Marathi → English",
    "english-to-marathi": "English → Marathi",
    build: "Build the sentence",
    listen: "Listening",
  }[current.mode];

  if (done) {
    return (
      <div className="rounded-xl border border-black/5 bg-white p-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Practice lab complete
        </p>
        <p className="mt-2 font-display text-3xl font-semibold text-ink">
          {score} / {exercises.length}
        </p>
        <p className="mt-2 text-sm text-muted">
          {score === exercises.length
            ? "Great recall across all four exercise types."
            : "Good run — repeat it once and the app will generate a fresh mix."}
        </p>
        <button
          onClick={restart}
          className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white"
        >
          New mixed round
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-black/5 bg-white p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          {modeLabel}
        </p>
        <span className="text-xs text-muted">
          {index + 1} of {exercises.length}
        </span>
      </div>

      {current.mode === "marathi-to-english" && (
        <>
          <p className="mt-4 text-sm text-muted">What does this mean?</p>
          <p className="mt-2 font-display text-2xl font-semibold text-ink">
            {current.item.marathi}
          </p>
          <p className="mt-1 text-base text-ink/70">{current.item.devanagari}</p>
        </>
      )}

      {current.mode === "english-to-marathi" && (
        <>
          <p className="mt-4 text-sm text-muted">Choose the Marathi phrase.</p>
          <p className="mt-2 font-display text-2xl font-semibold text-ink">
            {current.item.english}
          </p>
        </>
      )}

      {current.mode === "listen" && (
        <>
          <p className="mt-4 text-sm text-muted">Listen, then choose the meaning.</p>
          <button
            onClick={() => playMarathi(current.item.devanagari, current.item.marathi)}
            className="mt-3 rounded-lg border border-black/10 px-4 py-2 text-sm font-semibold text-ink"
          >
            ▶ Play Marathi
          </button>
        </>
      )}

      {current.mode === "build" ? (
        <div className="mt-5">
          <p className="text-sm text-muted">Build this sentence:</p>
          <p className="mt-1 font-display text-xl font-semibold text-ink">
            {current.item.english}
          </p>

          <div className="mt-4 min-h-14 rounded-lg bg-offwhite p-3">
            {built.length ? (
              <div className="flex flex-wrap gap-2">
                {built.map((token, tokenIndex) => (
                  <button
                    key={`${token}-${tokenIndex}`}
                    disabled={answered}
                    onClick={() =>
                      setBuilt((value) => value.filter((_, i) => i !== tokenIndex))
                    }
                    className="rounded-md bg-white px-3 py-2 text-sm font-medium text-ink"
                  >
                    {token}
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted">Tap words below to build the answer.</p>
            )}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {current.tokens?.map((token, tokenIndex) => {
              const usedCount = built.filter((word) => word === token).length;
              const beforeCount = current.tokens
                ?.slice(0, tokenIndex + 1)
                .filter((word) => word === token).length;
              const used = usedCount >= (beforeCount || 0);

              return (
                <button
                  key={`${token}-source-${tokenIndex}`}
                  disabled={answered || used}
                  onClick={() => setBuilt((value) => [...value, token])}
                  className="rounded-md border border-black/10 px-3 py-2 text-sm font-medium text-ink disabled:opacity-30"
                >
                  {token}
                </button>
              );
            })}
          </div>

          {!answered && (
            <button
              onClick={submitBuild}
              disabled={!built.length}
              className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
            >
              Check sentence
            </button>
          )}
        </div>
      ) : (
        <div className="mt-5 grid gap-2">
          {current.options?.map((option) => {
            const correctValue =
              current.mode === "english-to-marathi"
                ? current.item.marathi
                : current.item.english;
            const isAnswer = answered && option === correctValue;
            const isSelected = answered && option === selected;

            let classes = "border-black/10 bg-white text-ink hover:border-primary/30";
            if (isAnswer) classes = "border-primary/30 bg-primary/10 text-primary";
            else if (isSelected) classes = "border-terracotta/30 bg-terracotta/10 text-ink";

            return (
              <button
                key={option}
                onClick={() => answer(option)}
                className={`rounded-lg border px-4 py-3 text-left text-sm font-medium transition ${classes}`}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}

      {answered && (
        <div className="mt-4 rounded-lg bg-offwhite p-4">
          <p className={`text-sm font-semibold ${isCorrect ? "text-primary" : "text-terracotta"}`}>
            {isCorrect ? "Correct" : "Not quite"}
          </p>
          {!isCorrect && (
            <p className="mt-1 text-sm text-muted">
              Answer: <span className="font-medium text-ink">{current.item.marathi}</span>
              {" — "}
              {current.item.english}
            </p>
          )}
          <button
            onClick={next}
            className="mt-3 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white"
          >
            {index + 1 === exercises.length ? "See result" : "Next exercise"}
          </button>
        </div>
      )}
    </div>
  );
}
