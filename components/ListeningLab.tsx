"use client";

import { useState } from "react";
import type { ListeningMaterial, ListeningSegment } from "@/data/lessons";
import { recordSkillResult } from "@/lib/progress";

const audioCache = new Map<string, string>();

async function playAzure(text: string, voice: "female" | "male" = "female") {
  const voiceName = voice === "male" ? "mr-IN-ManoharNeural" : "mr-IN-AarohiNeural";
  const key = `${voiceName}::${text}`;
  const cached = audioCache.get(key);

  if (cached) {
    const audio = new Audio(cached);
    await audio.play();
    await new Promise<void>((resolve) => {
      audio.onended = () => resolve();
      audio.onerror = () => resolve();
    });
    return true;
  }

  const response = await fetch("/api/tts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, voice: voiceName }),
  });
  if (!response.ok) return false;

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  audioCache.set(key, url);
  const audio = new Audio(url);
  await audio.play();
  await new Promise<void>((resolve) => {
    audio.onended = () => resolve();
    audio.onerror = () => resolve();
  });
  return true;
}

async function speakFallback(text: string) {
  if (!("speechSynthesis" in window)) return;
  await new Promise<void>((resolve) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.82;
    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();
    window.speechSynthesis.speak(utterance);
  });
}

async function playSegments(segments: ListeningSegment[]) {
  window.speechSynthesis?.cancel();
  for (const segment of segments) {
    try {
      const played = await playAzure(segment.text, segment.voice || "female");
      if (!played) await speakFallback(segment.text);
    } catch {
      await speakFallback(segment.text);
    }
  }
}

export default function ListeningLab({ listening }: { listening: ListeningMaterial }) {
  const [plays, setPlays] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showTranscript, setShowTranscript] = useState(false);
  const [showEnglish, setShowEnglish] = useState(false);
  const [playing, setPlaying] = useState(false);
  const max = listening.maxReplays || 3;

  async function play() {
    if (plays >= max || playing) return;
    setPlays((value) => value + 1);
    setPlaying(true);

    try {
      if (listening.segments?.length) {
        await playSegments(listening.segments);
      } else {
        const played = await playAzure(listening.devanagari);
        if (!played) await speakFallback(listening.devanagari);
      }
    } catch {
      await speakFallback(listening.devanagari);
    } finally {
      setPlaying(false);
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
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Listening</p>
          <h3 className="mt-1 font-display text-lg font-semibold text-ink">{listening.title}</h3>
          <p className="mt-1 text-xs text-muted">{plays} / {max} plays used</p>
        </div>
        <button
          onClick={play}
          disabled={plays >= max || playing}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
        >
          {playing ? "Playing…" : "▶ Play passage"}
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
              {selected !== undefined && <p className="mt-2 text-sm text-muted">{question.explanation}</p>}
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
