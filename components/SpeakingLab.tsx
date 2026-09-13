"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { speakingDrills } from "@/data/speaking";
import {
  playMarathi,
  recognitionMatch,
  startMarathiRecognition,
  supportsSpeechRecognition,
} from "@/lib/speech";
import { recordSpeakingAttempt } from "@/lib/progress";

export default function SpeakingLab() {
  const [selectedId, setSelectedId] = useState(speakingDrills[0].id);
  const [transcript, setTranscript] = useState("");
  const [interim, setInterim] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const [listening, setListening] = useState(false);
  const [recording, setRecording] = useState(false);
  const [showRomanization, setShowRomanization] = useState(false);
  const [showEnglish, setShowEnglish] = useState(false);
  const [customAnswer, setCustomAnswer] = useState("");
  const [speechError, setSpeechError] = useState<string | null>(null);
  const [speechSupported, setSpeechSupported] = useState(false);
  const recognitionRef = useRef<{ stop: () => void; abort: () => void } | null>(null);

  useEffect(() => {
    setSpeechSupported(supportsSpeechRecognition());
  }, []);

  const drill = useMemo(
    () => speakingDrills.find((item) => item.id === selectedId) || speakingDrills[0],
    [selectedId]
  );

  function changeDrill(id: string) {
    recognitionRef.current?.abort();
    setSelectedId(id);
    setTranscript("");
    setInterim("");
    setScore(null);
    setCustomAnswer("");
    setSpeechError(null);
    setRecording(false);
  }

  async function hearModel() {
    if (listening) return;
    setListening(true);
    try {
      await playMarathi(drill.devanagari);
    } finally {
      setListening(false);
    }
  }

  function grade(text: string) {
    const value = recognitionMatch(drill.devanagari, text, drill.keywords);
    setScore(value);
    recordSpeakingAttempt(drill.id, value);
  }

  function startMic() {
    setSpeechError(null);
    setTranscript("");
    setInterim("");
    setScore(null);

    const recognition = startMarathiRecognition({
      onResult: (text) => {
        setTranscript(text);
        setInterim("");
        grade(text);
      },
      onInterim: (text) => setInterim(text),
      onError: (message) => {
        setSpeechError(
          message === "not-allowed"
            ? "Microphone permission was not granted. You can still type what you said."
            : "Speech recognition was unavailable for this attempt. Typed fallback is ready."
        );
      },
      onEnd: () => setRecording(false),
    });

    if (!recognition) {
      setSpeechError("This browser does not expose Marathi speech recognition. Use the typed fallback below.");
      return;
    }

    recognitionRef.current = recognition;
    setRecording(true);
  }

  function gradeTyped() {
    if (!transcript.trim()) return;
    grade(transcript.trim());
  }

  const scoreLabel =
    score === null
      ? null
      : score >= 85
        ? "Very close recognition match"
        : score >= 70
          ? "Good recognition match"
          : score >= 50
            ? "Partly matched — shadow once more"
            : "Low match — listen again and retry";

  return (
    <div>
      <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Speaking Lab</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Listen → shadow → compare → adapt</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          Use Marathi speech recognition where your browser supports it, or type what you said. The score measures how closely speech recognition matched the model text — it is not a phonetic pronunciation certificate.
        </p>
      </section>

      <div className="mt-6 grid gap-5 lg:grid-cols-[220px_1fr]">
        <aside className="rounded-xl border border-black/5 bg-white p-3">
          <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-muted">12 drills</p>
          <div className="mt-2 space-y-1">
            {speakingDrills.map((item, index) => (
              <button
                key={item.id}
                onClick={() => changeDrill(item.id)}
                className={`w-full rounded-lg px-3 py-2 text-left transition ${selectedId === item.id ? "bg-primary text-white" : "text-ink hover:bg-offwhite"}`}
              >
                <span className="block text-[11px] opacity-70">Drill {index + 1} · {item.focus}</span>
                <span className="mt-0.5 block text-sm font-semibold">{item.title}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className="space-y-5">
          <section className="rounded-xl border border-black/5 bg-white p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">{drill.focus}</p>
                <h2 className="mt-1 font-display text-2xl font-semibold text-ink">{drill.title}</h2>
              </div>
              <button
                onClick={hearModel}
                disabled={listening}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
              >
                {listening ? "Playing…" : "▶ Hear model"}
              </button>
            </div>

            <div className="mt-5 rounded-xl bg-offwhite p-4">
              <p className="text-xl leading-8 text-ink">{drill.devanagari}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  onClick={() => setShowRomanization((value) => !value)}
                  className="rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-ink"
                >
                  {showRomanization ? "Hide romanization" : "Show romanization"}
                </button>
                <button
                  onClick={() => setShowEnglish((value) => !value)}
                  className="rounded-lg border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-ink"
                >
                  {showEnglish ? "Hide English" : "Show English"}
                </button>
              </div>
              {showRomanization && <p className="mt-3 text-sm leading-6 text-muted">{drill.romanized}</p>}
              {showEnglish && <p className="mt-2 text-sm leading-6 text-muted">{drill.english}</p>}
            </div>
          </section>

          <section className="rounded-xl border border-black/5 bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Shadow attempt</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-ink">Say the model sentence aloud</h3>
              </div>
              <button
                onClick={recording ? () => recognitionRef.current?.stop() : startMic}
                disabled={!speechSupported && !recording}
                className={`rounded-lg px-4 py-2 text-sm font-semibold ${recording ? "bg-terracotta text-white" : "border border-primary/20 text-primary"}`}
              >
                {recording ? "■ Stop" : speechSupported ? "🎙 Start microphone" : "🎙 Mic unavailable"}
              </button>
            </div>

            {interim && (
              <div className="mt-4 rounded-lg bg-primary/5 p-3 text-sm text-muted">
                Hearing: {interim}
              </div>
            )}

            {speechError && (
              <div className="mt-4 rounded-lg bg-terracotta/10 p-3 text-sm text-ink">{speechError}</div>
            )}

            <label className="mt-4 block text-xs font-semibold uppercase tracking-wide text-muted">
              Recognized text or typed fallback
            </label>
            <textarea
              value={transcript}
              onChange={(event) => {
                setTranscript(event.target.value);
                setScore(null);
              }}
              rows={4}
              placeholder="Your Marathi transcript appears here — or type what you said."
              className="mt-2 w-full rounded-lg border border-black/10 bg-offwhite p-3 text-sm leading-6 text-ink outline-none focus:border-primary/40"
            />
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={gradeTyped}
                disabled={!transcript.trim()}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
              >
                Compare with model
              </button>
              {score !== null && (
                <div className="rounded-lg bg-offwhite px-3 py-2">
                  <span className="font-display text-lg font-semibold text-ink">{score}%</span>
                  <span className="ml-2 text-xs text-muted">{scoreLabel}</span>
                </div>
              )}
            </div>
          </section>

          <section className="rounded-xl border border-black/5 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Transfer the pattern</p>
            <h3 className="mt-1 font-display text-lg font-semibold text-ink">{drill.challenge}</h3>
            <p className="mt-1 text-sm text-muted">Now stop copying the model and make the structure yours.</p>
            <textarea
              value={customAnswer}
              onChange={(event) => setCustomAnswer(event.target.value)}
              rows={4}
              placeholder="Write your adapted Marathi here, then say it aloud without reading if you can."
              className="mt-4 w-full rounded-lg border border-black/10 bg-offwhite p-3 text-sm leading-6 text-ink outline-none focus:border-primary/40"
            />
            <p className="mt-2 text-xs text-muted">
              This free answer is intentionally not auto-graded. Use the model structure and keep speaking rather than chasing a fake perfect score.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
