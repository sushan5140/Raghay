"use client";

import { useMemo, useState } from "react";
import { naturalListeningTracks } from "@/data/natural-listening";
import { playMarathi } from "@/lib/speech";
import { recordSkillResult } from "@/lib/progress";

export default function NaturalListeningLab() {
  const [selectedSlug, setSelectedSlug] = useState(naturalListeningTracks[0].slug);
  const [plays, setPlays] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [gistAnswer, setGistAnswer] = useState<number | null>(null);
  const [detailAnswers, setDetailAnswers] = useState<Record<number, number>>({});
  const [showTranscript, setShowTranscript] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const track = useMemo(
    () => naturalListeningTracks.find((item) => item.slug === selectedSlug) || naturalListeningTracks[0],
    [selectedSlug]
  );

  function selectTrack(slug: string) {
    setSelectedSlug(slug);
    setPlays(0);
    setPlaying(false);
    setGistAnswer(null);
    setDetailAnswers({});
    setShowTranscript(false);
    setShowSummary(false);
  }

  async function playTrack() {
    if (playing || plays >= 2) return;
    setPlaying(true);
    setPlays((value) => value + 1);
    try {
      for (let i = 0; i < track.segments.length; i += 1) {
        const segment = track.segments[i];
        await playMarathi(segment.text, segment.voice || (i % 2 === 0 ? "female" : "male"), 0.92);
      }
    } finally {
      setPlaying(false);
    }
  }

  function answerGist(index: number) {
    if (gistAnswer !== null) return;
    setGistAnswer(index);
    recordSkillResult(
      track.gist.skill || "natural-listening-gist",
      index === track.gist.answer,
      "listening"
    );
  }

  function answerDetail(questionIndex: number, optionIndex: number) {
    if (detailAnswers[questionIndex] !== undefined) return;
    setDetailAnswers((current) => ({ ...current, [questionIndex]: optionIndex }));
    const q = track.details[questionIndex];
    recordSkillResult(q.skill || "natural-listening-detail", optionIndex === q.answer, "listening");
  }

  const detailComplete = Object.keys(detailAnswers).length === track.details.length;

  return (
    <div>
      <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Natural Listening</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Understand the message before seeing the text</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          These are longer learner-oriented tracks designed for gist, detail, sequence, and inference. You get two full plays. The transcript stays hidden until you attempt the main idea.
        </p>
      </section>

      <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
        {naturalListeningTracks.map((item) => (
          <button
            key={item.slug}
            onClick={() => selectTrack(item.slug)}
            className={`min-w-56 rounded-xl border p-4 text-left transition ${selectedSlug === item.slug ? "border-primary/30 bg-primary/5" : "border-black/5 bg-white"}`}
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">{item.targetMinutes}</p>
            <p className="mt-1 font-display text-base font-semibold text-ink">{item.title}</p>
            <p className="mt-1 text-xs leading-5 text-muted">{item.context}</p>
          </button>
        ))}
      </div>

      <section className="mt-5 rounded-2xl border border-black/5 bg-white p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">{track.targetMinutes}</p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-ink">{track.title}</h2>
            <p className="mt-1 text-sm text-muted">{track.context}</p>
          </div>
          <div className="text-right">
            <button
              onClick={playTrack}
              disabled={playing || plays >= 2}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
            >
              {playing ? "Playing…" : "▶ Play full track"}
            </button>
            <p className="mt-2 text-xs text-muted">{plays} / 2 full plays used</p>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-offwhite p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">First pass · gist</p>
          <h3 className="mt-2 font-display text-lg font-semibold text-ink">{track.gist.question}</h3>
          <div className="mt-3 grid gap-2">
            {track.gist.options.map((option, index) => {
              const answered = gistAnswer !== null;
              const isAnswer = answered && index === track.gist.answer;
              const isSelected = answered && index === gistAnswer;
              let classes = "border-black/10 bg-white text-ink";
              if (isAnswer) classes = "border-primary/30 bg-primary/10 text-primary";
              else if (isSelected) classes = "border-terracotta/30 bg-terracotta/10 text-ink";
              return (
                <button
                  key={option}
                  onClick={() => answerGist(index)}
                  disabled={answered}
                  className={`rounded-lg border px-3 py-2 text-left text-sm font-medium ${classes}`}
                >
                  {option}
                </button>
              );
            })}
          </div>
          {gistAnswer !== null && (
            <p className="mt-3 text-sm leading-6 text-muted">{track.gist.explanation}</p>
          )}
        </div>

        {gistAnswer !== null && (
          <>
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                onClick={() => setShowTranscript((value) => !value)}
                className="rounded-lg border border-black/10 px-3 py-2 text-xs font-semibold text-ink"
              >
                {showTranscript ? "Hide transcript" : "Reveal transcript"}
              </button>
              <button
                onClick={() => setShowSummary((value) => !value)}
                className="rounded-lg border border-black/10 px-3 py-2 text-xs font-semibold text-ink"
              >
                {showSummary ? "Hide English summary" : "English summary"}
              </button>
            </div>

            {showTranscript && (
              <div className="mt-4 rounded-xl border border-black/5 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Transcript</p>
                <p className="mt-3 text-base leading-8 text-ink">{track.transcript}</p>
              </div>
            )}

            {showSummary && (
              <div className="mt-4 rounded-xl bg-offwhite p-4 text-sm leading-6 text-muted">
                {track.englishSummary}
              </div>
            )}

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Second pass · detail & inference</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-ink">What did you actually catch?</h3>
              <div className="mt-4 space-y-5">
                {track.details.map((question, questionIndex) => {
                  const selected = detailAnswers[questionIndex];
                  return (
                    <div key={question.question} className="rounded-xl border border-black/5 bg-white p-4">
                      <p className="font-medium text-ink">{question.question}</p>
                      <div className="mt-3 grid gap-2">
                        {question.options.map((option, optionIndex) => {
                          const answered = selected !== undefined;
                          const isAnswer = answered && optionIndex === question.answer;
                          const isSelected = answered && optionIndex === selected;
                          let classes = "border-black/10 bg-white text-ink";
                          if (isAnswer) classes = "border-primary/30 bg-primary/10 text-primary";
                          else if (isSelected) classes = "border-terracotta/30 bg-terracotta/10 text-ink";
                          return (
                            <button
                              key={option}
                              onClick={() => answerDetail(questionIndex, optionIndex)}
                              disabled={answered}
                              className={`rounded-lg border px-3 py-2 text-left text-sm font-medium ${classes}`}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                      {selected !== undefined && (
                        <p className="mt-3 text-sm leading-6 text-muted">{question.explanation}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {detailComplete && (
              <div className="mt-5 rounded-xl bg-primary/5 p-4">
                <p className="text-sm font-semibold text-primary">Track complete</p>
                <p className="mt-1 text-sm text-muted">
                  Replay once more only if you still have a play left, then try another track without reading the transcript first.
                </p>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
