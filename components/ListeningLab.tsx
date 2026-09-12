"use client";

import { useState } from "react";
import type { ListeningMaterial } from "@/data/lessons";
import { recordSkillResult } from "@/lib/progress";

export default function ListeningLab({ listening }: { listening: ListeningMaterial }) {
  const [plays, setPlays] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showTranscript, setShowTranscript] = useState(false);
  const [showEnglish, setShowEnglish] = useState(false);
  const max = listening.maxReplays || 3;

  async function play() {
    if (plays >= max) return;
    setPlays((value) => value + 1);
    try {
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: listening.devanagari }),
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
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(listening.romanized);
      utterance.rate = 0.82;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  }

  function answer(questionIndex: number, optionIndex: number) {
    if (answers[questionIndex] !== undefined) return;
    setAnswers((current) => ({ ...current, [questionIndex]: optionIndex }));
    const question = listening.questions[questionIndex];
    recordSkillResult(
      question.skill || "listening-comprehension",
      optionIndex === question.answer,
      "listening"
    );
  }

  const attempted = Object.keys(answers).length > 0;

  return (
    <div className="rounded-xl border border-black/5 bg-white p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            Listening
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold text-ink">{listening.title}</h3>
          <p className="mt-1 text-xs text-muted">{plays} / {max} plays used</p>
        </div>
        <button
          onClick={play}
          disabled={plays >= max}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
        >
          ▶ Play passage
        </button>
      </div>

      <div className="mt-5 space-y-5">
        {listening.questions.map((question, questionIndex) => {
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

      {attempted && (
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            onClick={() => setShowTranscript((value) => !value)}
            className="rounded-lg border border-black/10 px-3 py-2 text-xs font-semibold text-ink"
          >
            {showTranscript ? "Hide transcript" : "Show transcript"}
          </button>
          {listening.english && (
            <button
              onClick={() => setShowEnglish((value) => !value)}
              className="rounded-lg border border-black/10 px-3 py-2 text-xs font-semibold text-ink"
            >
              {showEnglish ? "Hide English" : "Show English"}
            </button>
          )}
        </div>
      )}

      {showTranscript && (
        <div className="mt-3 rounded-lg bg-offwhite p-4">
          <p className="leading-7 text-ink">{listening.devanagari}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{listening.romanized}</p>
          {showEnglish && listening.english && (
            <p className="mt-3 border-t border-black/5 pt-3 text-sm text-muted">{listening.english}</p>
          )}
        </div>
      )}
    </div>
  );
}
