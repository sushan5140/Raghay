"use client";

import { useState } from "react";
import type { ReadingMaterial } from "@/data/lessons";
import { recordSkillResult } from "@/lib/progress";

export default function ReadingLab({
  reading,
  unit,
}: {
  reading: ReadingMaterial;
  unit: number;
}) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showRomanization, setShowRomanization] = useState(unit < 13);
  const [showEnglish, setShowEnglish] = useState(false);

  function answer(questionIndex: number, optionIndex: number) {
    if (answers[questionIndex] !== undefined) return;
    setAnswers((current) => ({ ...current, [questionIndex]: optionIndex }));
    const question = reading.questions[questionIndex];
    recordSkillResult(
      question.skill || "reading-comprehension",
      optionIndex === question.answer,
      "reading"
    );
  }

  return (
    <div className="rounded-xl border border-black/5 bg-white p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Reading
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold text-ink">{reading.title}</h3>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowRomanization((value) => !value)}
            className="rounded-lg border border-black/10 px-3 py-2 text-xs font-semibold text-ink"
          >
            {showRomanization ? "Hide romanization" : "Show romanization"}
          </button>
          <button
            onClick={() => setShowEnglish((value) => !value)}
            className="rounded-lg border border-black/10 px-3 py-2 text-xs font-semibold text-ink"
          >
            {showEnglish ? "Hide English" : "Show English"}
          </button>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-offwhite p-4">
        <p className="text-lg leading-8 text-ink">{reading.devanagari}</p>
        {showRomanization && (
          <p className="mt-3 text-sm leading-6 text-muted">{reading.romanized}</p>
        )}
        {showEnglish && (
          <p className="mt-3 border-t border-black/5 pt-3 text-sm leading-6 text-muted">
            {reading.english}
          </p>
        )}
      </div>

      {reading.glossary?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {reading.glossary.map((entry) => (
            <span key={entry.term} className="rounded-md bg-primary/5 px-2.5 py-1.5 text-xs text-ink">
              <strong>{entry.term}</strong> · {entry.meaning}
            </span>
          ))}
        </div>
      ) : null}

      <div className="mt-5 space-y-5">
        {reading.questions.map((question, questionIndex) => {
          const selected = answers[questionIndex];
          return (
            <div key={question.question}>
              <p className="text-sm font-semibold text-ink">{question.question}</p>
              <div className="mt-2 grid gap-2">
                {question.options.map((option, optionIndex) => {
                  const answered = selected !== undefined;
                  const isAnswer = answered && optionIndex === question.answer;
                  const isSelected = answered && selected === optionIndex;
                  let classes = "border-black/10 bg-white text-ink hover:border-primary/30";
                  if (isAnswer) classes = "border-primary/30 bg-primary/10 text-primary";
                  else if (isSelected) classes = "border-terracotta/30 bg-terracotta/10 text-ink";
                  return (
                    <button
                      key={option}
                      onClick={() => answer(questionIndex, optionIndex)}
                      disabled={answered}
                      className={`rounded-lg border px-3 py-2 text-left text-sm font-medium transition ${classes}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {selected !== undefined && (
                <p className="mt-2 text-sm text-muted">{question.explanation}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
