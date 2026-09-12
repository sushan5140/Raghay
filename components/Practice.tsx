"use client";

import { useMemo, useState } from "react";
import type { VocabItem } from "@/data/lessons";

function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.85;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

export default function Practice({ items }: { items: VocabItem[] }) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState({ correct: 0, seen: 0 });
  const [done, setDone] = useState(false);

  const order = useMemo(
    () => [...items.keys()].sort(() => Math.random() - 0.5),
    [items]
  );
  const current = items[order[index]];

  function next(wasCorrect: boolean) {
    setScore((s) => ({ correct: s.correct + (wasCorrect ? 1 : 0), seen: s.seen + 1 }));
    setRevealed(false);
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
        {revealed && (
          <p className="mt-2 text-terracotta">{current.english}</p>
        )}
        {current.notes && revealed && (
          <p className="mt-1 text-xs text-muted">{current.notes}</p>
        )}
      </div>

      <div className="mt-4 flex justify-center gap-3">
        <button
          onClick={() => speak(current.marathi)}
          className="rounded-lg border border-black/10 px-4 py-2 text-sm text-ink"
        >
          Hear it
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

      <p className="mt-4 text-center text-xs text-muted">
        Pronunciation uses your browser's built-in voice — it's a placeholder, not tuned for
        Marathi. Native audio clips are the next step.
      </p>
    </div>
  );
}
