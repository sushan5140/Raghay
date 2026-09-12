"use client";

import { useState } from "react";
import type { QuickCheck as QuickCheckType } from "@/data/lessons";

export default function QuickCheck({ checks }: { checks: QuickCheckType[] }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  if (!checks.length) return null;

  const current = checks[index];
  const correct = selected === current.answer;

  function choose(optionIndex: number) {
    if (selected !== null) return;
    setSelected(optionIndex);
    if (optionIndex === current.answer) setScore((value) => value + 1);
  }

  function next() {
    if (index + 1 >= checks.length) {
      setDone(true);
      return;
    }
    setIndex((value) => value + 1);
    setSelected(null);
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  }

  if (done) {
    return (
      <div className="rounded-xl border border-black/5 bg-white p-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Quick check complete</p>
        <p className="mt-2 font-display text-2xl font-semibold text-ink">
          {score} / {checks.length}
        </p>
        <p className="mt-2 text-sm text-muted">
          {score === checks.length ? "Nice — you caught the key ideas." : "Review the lesson once more, then try again."}
        </p>
        <button onClick={restart} className="mt-4 rounded-lg border border-black/10 px-4 py-2 text-sm font-semibold text-ink">
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-black/5 bg-white p-6">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Quick check</p>
        <span className="text-xs text-muted">{index + 1} of {checks.length}</span>
      </div>

      <p className="mt-4 font-display text-lg font-semibold text-ink">{current.question}</p>

      <div className="mt-4 grid gap-2">
        {current.options.map((option, optionIndex) => {
          const isSelected = selected === optionIndex;
          const isAnswer = selected !== null && optionIndex === current.answer;
          let classes = "border-black/10 bg-white text-ink hover:border-primary/30";
          if (isAnswer) classes = "border-primary/30 bg-primary/10 text-primary";
          else if (isSelected) classes = "border-terracotta/30 bg-terracotta/10 text-ink";

          return (
            <button
              key={option}
              onClick={() => choose(optionIndex)}
              className={`rounded-lg border px-4 py-3 text-left text-sm font-medium transition ${classes}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className="mt-4 rounded-lg bg-offwhite p-4">
          <p className={`text-sm font-semibold ${correct ? "text-primary" : "text-terracotta"}`}>
            {correct ? "Correct" : "Not quite"}
          </p>
          <p className="mt-1 text-sm leading-5 text-muted">{current.explanation}</p>
          <button onClick={next} className="mt-3 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white">
            {index + 1 === checks.length ? "See result" : "Next question"}
          </button>
        </div>
      )}
    </div>
  );
}
