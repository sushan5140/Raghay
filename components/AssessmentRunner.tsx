"use client";

import { useMemo, useState } from "react";
import type { Assessment } from "@/data/assessments";
import ProductionTask from "@/components/ProductionTask";
import { recordSkillResult } from "@/lib/progress";

type Section = "usage" | "reading" | "listening" | "writing" | "results";

export default function AssessmentRunner({ assessment }: { assessment: Assessment }) {
  const sections = useMemo(() => {
    const list: Section[] = ["usage"];
    if (assessment.reading) list.push("reading");
    if (assessment.listening) list.push("listening");
    if (assessment.production) list.push("writing");
    list.push("results");
    return list;
  }, [assessment]);

  const [section, setSection] = useState<Section>("usage");
  const [usageAnswers, setUsageAnswers] = useState<Record<number, number>>({});
  const [readingAnswers, setReadingAnswers] = useState<Record<number, number>>({});
  const [listeningAnswers, setListeningAnswers] = useState<Record<number, number>>({});
  const [plays, setPlays] = useState(0);
  const [showReadingRoman, setShowReadingRoman] = useState(false);
  const [showListeningTranscript, setShowListeningTranscript] = useState(false);

  const usageScore = Object.entries(usageAnswers).filter(
    ([index, answer]) => assessment.questions[Number(index)]?.answer === answer
  ).length;
  const readingScore = assessment.reading
    ? Object.entries(readingAnswers).filter(
        ([index, answer]) => assessment.reading?.questions[Number(index)]?.answer === answer
      ).length
    : 0;
  const listeningScore = assessment.listening
    ? Object.entries(listeningAnswers).filter(
        ([index, answer]) => assessment.listening?.questions[Number(index)]?.answer === answer
      ).length
    : 0;

  function answerUsage(index: number, answer: number) {
    if (usageAnswers[index] !== undefined) return;
    const q = assessment.questions[index];
    setUsageAnswers((current) => ({ ...current, [index]: answer }));
    recordSkillResult(q.skill || "assessment-usage", answer === q.answer, "assessment");
  }

  function answerReading(index: number, answer: number) {
    if (!assessment.reading || readingAnswers[index] !== undefined) return;
    const q = assessment.reading.questions[index];
    setReadingAnswers((current) => ({ ...current, [index]: answer }));
    recordSkillResult(q.skill || "reading-assessment", answer === q.answer, "reading");
  }

  function answerListening(index: number, answer: number) {
    if (!assessment.listening || listeningAnswers[index] !== undefined) return;
    const q = assessment.listening.questions[index];
    setListeningAnswers((current) => ({ ...current, [index]: answer }));
    recordSkillResult(q.skill || "listening-assessment", answer === q.answer, "listening");
  }

  async function playListening() {
    if (!assessment.listening) return;
    const max = assessment.listening.maxReplays || 2;
    if (plays >= max) return;
    setPlays((value) => value + 1);
    try {
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: assessment.listening.devanagari }),
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
      const utterance = new SpeechSynthesisUtterance(assessment.listening.romanized);
      utterance.rate = 0.82;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    }
  }

  function QuestionList({
    questions,
    answers,
    onAnswer,
  }: {
    questions: Assessment["questions"];
    answers: Record<number, number>;
    onAnswer: (index: number, answer: number) => void;
  }) {
    return (
      <div className="space-y-6">
        {questions.map((q, index) => {
          const selected = answers[index];
          return (
            <div key={q.question} className="rounded-xl border border-black/5 bg-white p-5">
              <p className="font-medium text-ink">{q.question}</p>
              <div className="mt-3 grid gap-2">
                {q.options.map((option, optionIndex) => {
                  const answered = selected !== undefined;
                  const isAnswer = answered && optionIndex === q.answer;
                  const isSelected = answered && selected === optionIndex;
                  let classes = "border-black/10 bg-white text-ink";
                  if (isAnswer) classes = "border-primary/30 bg-primary/10 text-primary";
                  else if (isSelected) classes = "border-terracotta/30 bg-terracotta/10 text-ink";
                  return (
                    <button
                      key={option}
                      onClick={() => onAnswer(index, optionIndex)}
                      disabled={answered}
                      className={`rounded-lg border px-3 py-2 text-left text-sm font-medium ${classes}`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {selected !== undefined && <p className="mt-3 text-sm text-muted">{q.explanation}</p>}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-x-auto pb-2">
        <div className="flex min-w-max gap-2">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => setSection(item)}
              className={`rounded-full px-3 py-2 text-xs font-semibold capitalize ${section === item ? "bg-primary text-white" : "border border-black/10 bg-white text-muted"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {section === "usage" && (
        <div className="mt-5">
          <h2 className="font-display text-xl font-semibold text-ink">Grammar & usage</h2>
          <p className="mt-1 text-sm text-muted">Choose the form that best fits the meaning.</p>
          <div className="mt-4">
            <QuestionList questions={assessment.questions} answers={usageAnswers} onAnswer={answerUsage} />
          </div>
        </div>
      )}

      {section === "reading" && assessment.reading && (
        <div className="mt-5">
          <h2 className="font-display text-xl font-semibold text-ink">{assessment.reading.title}</h2>
          <div className="mt-4 rounded-xl border border-black/5 bg-white p-5">
            <p className="text-lg leading-8 text-ink">{assessment.reading.devanagari}</p>
            <button
              onClick={() => setShowReadingRoman((value) => !value)}
              className="mt-3 rounded-lg border border-black/10 px-3 py-2 text-xs font-semibold text-ink"
            >
              {showReadingRoman ? "Hide support" : "Show romanization"}
            </button>
            {showReadingRoman && <p className="mt-3 text-sm leading-6 text-muted">{assessment.reading.romanized}</p>}
          </div>
          <div className="mt-4">
            <QuestionList questions={assessment.reading.questions} answers={readingAnswers} onAnswer={answerReading} />
          </div>
        </div>
      )}

      {section === "listening" && assessment.listening && (
        <div className="mt-5">
          <h2 className="font-display text-xl font-semibold text-ink">{assessment.listening.title}</h2>
          <div className="mt-4 rounded-xl border border-black/5 bg-white p-5">
            <button
              onClick={playListening}
              disabled={plays >= (assessment.listening.maxReplays || 2)}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
            >
              ▶ Play audio
            </button>
            <p className="mt-2 text-xs text-muted">{plays} / {assessment.listening.maxReplays || 2} plays used</p>
          </div>
          <div className="mt-4">
            <QuestionList questions={assessment.listening.questions} answers={listeningAnswers} onAnswer={answerListening} />
          </div>
          {Object.keys(listeningAnswers).length > 0 && (
            <button
              onClick={() => setShowListeningTranscript((value) => !value)}
              className="mt-4 rounded-lg border border-black/10 px-3 py-2 text-xs font-semibold text-ink"
            >
              {showListeningTranscript ? "Hide transcript" : "Show transcript"}
            </button>
          )}
          {showListeningTranscript && (
            <div className="mt-3 rounded-lg bg-offwhite p-4">
              <p className="leading-7 text-ink">{assessment.listening.devanagari}</p>
              <p className="mt-2 text-sm text-muted">{assessment.listening.romanized}</p>
            </div>
          )}
        </div>
      )}

      {section === "writing" && assessment.production && (
        <div className="mt-5">
          <ProductionTask task={assessment.production} lessonSlug={`assessment-${assessment.slug}`} />
        </div>
      )}

      {section === "results" && (
        <div className="mt-5 rounded-2xl border border-black/5 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Skill breakdown</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink">Checkpoint results</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-offwhite p-4">
              <p className="text-xs text-muted">Grammar / usage</p>
              <p className="mt-1 font-display text-xl font-semibold text-ink">{usageScore} / {assessment.questions.length}</p>
            </div>
            {assessment.reading && (
              <div className="rounded-xl bg-offwhite p-4">
                <p className="text-xs text-muted">Reading</p>
                <p className="mt-1 font-display text-xl font-semibold text-ink">{readingScore} / {assessment.reading.questions.length}</p>
              </div>
            )}
            {assessment.listening && (
              <div className="rounded-xl bg-offwhite p-4">
                <p className="text-xs text-muted">Listening</p>
                <p className="mt-1 font-display text-xl font-semibold text-ink">{listeningScore} / {assessment.listening.questions.length}</p>
              </div>
            )}
          </div>
          {assessment.production && (
            <p className="mt-4 text-sm text-muted">
              Writing is intentionally self-checked with the required-pattern checklist and model comparison rather than fake automatic scoring.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
