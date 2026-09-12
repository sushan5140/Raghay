"use client";

import { useState } from "react";
import type { IntermediateMaterial } from "@/data/lessons";

async function playText(devanagari: string, fallback: string) {
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
    utterance.rate = 0.82;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }
}

export default function IntermediateLab({ material }: { material: IntermediateMaterial }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [draft, setDraft] = useState("");
  const [showSupport, setShowSupport] = useState(false);

  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-black/5 bg-white p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Connected input
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold text-ink">
              {material.title}
            </h3>
          </div>
          <button
            onClick={() => playText(material.devanagari, material.marathi)}
            className="rounded-lg border border-black/10 px-3 py-2 text-sm font-semibold text-ink"
          >
            ▶ Listen
          </button>
        </div>

        <p className="mt-4 leading-7 text-ink">{material.marathi}</p>
        <p className="mt-2 text-base leading-7 text-ink/70">{material.devanagari}</p>
        <details className="mt-4 rounded-lg bg-offwhite p-3">
          <summary className="cursor-pointer text-sm font-semibold text-ink">
            Show English meaning
          </summary>
          <p className="mt-2 text-sm leading-6 text-muted">{material.english}</p>
        </details>
      </div>

      <div className="rounded-xl border border-black/5 bg-white p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
          Context check
        </p>
        <div className="mt-4 space-y-5">
          {material.questions.map((question, questionIndex) => {
            const selected = answers[questionIndex];
            return (
              <div key={question.question}>
                <p className="font-medium text-ink">{question.question}</p>
                <div className="mt-2 grid gap-2">
                  {question.options.map((option, optionIndex) => {
                    const answered = selected !== undefined;
                    const isCorrect = optionIndex === question.answer;
                    const isSelected = selected === optionIndex;
                    let classes = "border-black/10 bg-white text-ink";
                    if (answered && isCorrect) classes = "border-primary/30 bg-primary/10 text-primary";
                    else if (answered && isSelected) classes = "border-terracotta/30 bg-terracotta/10 text-ink";

                    return (
                      <button
                        key={option}
                        disabled={answered}
                        onClick={() =>
                          setAnswers((current) => ({
                            ...current,
                            [questionIndex]: optionIndex,
                          }))
                        }
                        className={`rounded-lg border px-3 py-2 text-left text-sm font-medium ${classes}`}
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

      <div className="rounded-xl border border-black/5 bg-white p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Produce your own Marathi
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold text-ink">
          {material.productionPrompt}
        </h3>
        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          rows={4}
          placeholder="Write your answer here..."
          className="mt-4 w-full rounded-lg border border-black/10 bg-offwhite p-3 text-sm text-ink outline-none focus:border-primary/40"
        />

        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={() => setShowSupport((value) => !value)}
            className="rounded-lg border border-black/10 px-3 py-2 text-sm font-semibold text-ink"
          >
            {showSupport ? "Hide support" : "Show support"}
          </button>
          {draft.trim() && (
            <span className="rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
              Written — compare with the patterns, then say it aloud.
            </span>
          )}
        </div>

        {showSupport && (
          <div className="mt-3 rounded-lg bg-offwhite p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Useful patterns
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {material.support.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
