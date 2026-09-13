"use client";

import { useMemo, useRef, useState } from "react";
import { conversationScenarios } from "@/data/conversation";
import {
  playMarathi,
  responseQuality,
  startMarathiRecognition,
  supportsSpeechRecognition,
} from "@/lib/speech";
import { recordConversationSession, recordConversationTurn } from "@/lib/progress";

type HistoryItem = {
  speaker: "Partner" | "You";
  text: string;
  quality?: number;
};

const repairPatterns = ["पुन्हा", "हळू", "अर्थ", "समजलं नाही", "स्पष्ट", "म्हणजे काय"];

export default function ConversationCoach() {
  const [selectedSlug, setSelectedSlug] = useState(conversationScenarios[0].slug);
  const [turnIndex, setTurnIndex] = useState(0);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [reply, setReply] = useState("");
  const [interim, setInterim] = useState("");
  const [recording, setRecording] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [lastQuality, setLastQuality] = useState<number | null>(null);
  const [showSupport, setShowSupport] = useState(true);
  const [showEnglish, setShowEnglish] = useState(false);
  const [finished, setFinished] = useState(false);
  const [speechError, setSpeechError] = useState<string | null>(null);
  const recognitionRef = useRef<{ stop: () => void; abort: () => void } | null>(null);

  const scenario = useMemo(
    () => conversationScenarios.find((item) => item.slug === selectedSlug) || conversationScenarios[0],
    [selectedSlug]
  );
  const turn = scenario.turns[turnIndex];

  function resetScenario(slug = selectedSlug) {
    recognitionRef.current?.abort();
    setSelectedSlug(slug);
    setTurnIndex(0);
    setHistory([]);
    setReply("");
    setInterim("");
    setRecording(false);
    setFeedback(null);
    setLastQuality(null);
    setShowSupport(true);
    setShowEnglish(false);
    setFinished(false);
    setSpeechError(null);
  }

  async function playPrompt() {
    if (!turn) return;
    await playMarathi(turn.speakerLine, turnIndex % 2 === 0 ? "female" : "male");
  }

  function startMic() {
    setSpeechError(null);
    setInterim("");
    const recognition = startMarathiRecognition({
      onResult: (text) => {
        setReply((current) => (current.trim() ? `${current.trim()} ${text}` : text));
        setInterim("");
      },
      onInterim: setInterim,
      onError: (message) => {
        setSpeechError(
          message === "not-allowed"
            ? "Microphone permission was not granted. Continue by typing your Marathi response."
            : "Speech recognition was unavailable for this attempt. Typed conversation still works."
        );
      },
      onEnd: () => setRecording(false),
    });

    if (!recognition) {
      setSpeechError("This browser does not expose Marathi speech recognition. Use the text box instead.");
      return;
    }
    recognitionRef.current = recognition;
    setRecording(true);
  }

  function submitReply() {
    if (!turn || !reply.trim() || feedback) return;
    const text = reply.trim();
    const usedRepair = repairPatterns.some((pattern) => text.includes(pattern));
    const rawQuality = responseQuality(text, turn.keywords);
    const quality = usedRepair ? Math.max(rawQuality, 72) : rawQuality;

    const note = usedRepair
      ? "Good conversation repair. You stayed in Marathi instead of abandoning the interaction."
      : quality >= 80
        ? "Strong response — enough detail and target language to keep the conversation moving naturally."
        : quality >= 60
          ? "Good functional response. On the next turn, try adding one more detail or connector."
          : quality >= 40
            ? "The core idea is partly there. The next turn will show more support so you can build a fuller answer."
            : "This response may be too short or miss the target function. Use the support patterns and keep the answer in Marathi.";

    setHistory((current) => [
      ...current,
      { speaker: "Partner", text: turn.speakerLine },
      { speaker: "You", text, quality },
    ]);
    setLastQuality(quality);
    setFeedback(note);
    recordConversationTurn(scenario.slug, quality);
  }

  function nextTurn() {
    if (!feedback) return;
    if (turnIndex + 1 >= scenario.turns.length) {
      setFinished(true);
      recordConversationSession(scenario.slug);
      return;
    }
    const nextNeedsSupport = (lastQuality ?? 0) < 60;
    setTurnIndex((value) => value + 1);
    setReply("");
    setInterim("");
    setFeedback(null);
    setShowEnglish(false);
    setShowSupport(nextNeedsSupport);
  }

  const averageQuality = history.filter((item) => item.speaker === "You" && item.quality !== undefined);
  const average = averageQuality.length
    ? Math.round(averageQuality.reduce((sum, item) => sum + (item.quality || 0), 0) / averageQuality.length)
    : 0;

  return (
    <div>
      <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Guided conversation</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Stay in Marathi for more than one answer</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          Choose a real-life conversation and answer freely by voice or text. The coach remembers the session, checks whether you handled the communicative goal, and reduces or increases support as you go.
        </p>
      </section>

      <section className="mt-6">
        <div className="flex gap-3 overflow-x-auto pb-2">
          {conversationScenarios.map((item) => (
            <button
              key={item.slug}
              onClick={() => resetScenario(item.slug)}
              className={`min-w-48 rounded-xl border p-4 text-left transition ${selectedSlug === item.slug ? "border-primary/30 bg-primary/5" : "border-black/5 bg-white"}`}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">{item.targetMinutes}</p>
              <p className="mt-1 font-display text-base font-semibold text-ink">{item.title}</p>
              <p className="mt-1 text-xs leading-5 text-muted">{item.context}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="mt-5 rounded-2xl border border-black/5 bg-white p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">{scenario.targetMinutes}</p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-ink">{scenario.title}</h2>
            <p className="mt-1 text-sm text-muted">{scenario.context}</p>
          </div>
          {!finished && (
            <span className="rounded-full bg-offwhite px-3 py-2 text-xs font-semibold text-muted">
              Turn {turnIndex + 1} / {scenario.turns.length}
            </span>
          )}
        </div>

        <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-black/5">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${finished ? 100 : Math.round((turnIndex / scenario.turns.length) * 100)}%` }}
          />
        </div>

        <div className="mt-5 max-h-[430px] space-y-3 overflow-y-auto rounded-xl bg-offwhite p-4">
          {history.length === 0 && (
            <p className="text-sm text-muted">
              Start with the partner's first question. Longer answers give the coach more evidence to reduce support.
            </p>
          )}
          {history.map((item, index) => (
            <div
              key={index}
              className={`max-w-[88%] rounded-xl p-3 ${item.speaker === "You" ? "ml-auto bg-primary text-white" : "mr-auto bg-white text-ink"}`}
            >
              <p className={`text-[11px] font-semibold uppercase tracking-wide ${item.speaker === "You" ? "text-white/70" : "text-muted"}`}>
                {item.speaker}
              </p>
              <p className="mt-1 text-sm leading-6">{item.text}</p>
              {item.quality !== undefined && (
                <p className="mt-1 text-[11px] opacity-70">Functional response match: {item.quality}%</p>
              )}
            </div>
          ))}

          {!finished && turn && !feedback && (
            <div className="mr-auto max-w-[88%] rounded-xl bg-white p-3 text-ink">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">Partner</p>
              <p className="mt-1 text-base leading-7">{turn.speakerLine}</p>
            </div>
          )}
        </div>

        {!finished && turn ? (
          <div className="mt-5">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={playPrompt}
                className="rounded-lg border border-black/10 px-3 py-2 text-xs font-semibold text-ink"
              >
                ▶ Hear prompt
              </button>
              <button
                onClick={() => setShowEnglish((value) => !value)}
                className="rounded-lg border border-black/10 px-3 py-2 text-xs font-semibold text-ink"
              >
                {showEnglish ? "Hide English" : "English hint"}
              </button>
              <button
                onClick={() => setShowSupport((value) => !value)}
                className="rounded-lg border border-black/10 px-3 py-2 text-xs font-semibold text-ink"
              >
                {showSupport ? "Hide support" : "Need support"}
              </button>
            </div>

            {showEnglish && (
              <p className="mt-3 rounded-lg bg-offwhite p-3 text-sm text-muted">{turn.englishHint}</p>
            )}

            {showSupport && (
              <div className="mt-3 rounded-lg bg-primary/5 p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Goal: {turn.goal}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {turn.support.map((item) => (
                    <span key={item} className="rounded-md bg-white px-2.5 py-1.5 text-sm text-ink">{item}</span>
                  ))}
                </div>
              </div>
            )}

            {speechError && <p className="mt-3 rounded-lg bg-terracotta/10 p-3 text-sm text-ink">{speechError}</p>}
            {interim && <p className="mt-3 rounded-lg bg-primary/5 p-3 text-sm text-muted">Hearing: {interim}</p>}

            <textarea
              value={reply}
              onChange={(event) => setReply(event.target.value)}
              disabled={Boolean(feedback)}
              rows={5}
              placeholder="Answer in Marathi. Aim for more than one short phrase when the question allows it."
              className="mt-4 w-full rounded-xl border border-black/10 bg-offwhite p-3 text-sm leading-6 text-ink outline-none focus:border-primary/40 disabled:opacity-70"
            />

            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={recording ? () => recognitionRef.current?.stop() : startMic}
                disabled={Boolean(feedback)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold ${recording ? "bg-terracotta text-white" : "border border-primary/20 text-primary"} disabled:opacity-40`}
              >
                {recording ? "■ Stop" : supportsSpeechRecognition() ? "🎙 Speak response" : "🎙 Mic unavailable"}
              </button>
              <button
                onClick={submitReply}
                disabled={!reply.trim() || Boolean(feedback)}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
              >
                Send response
              </button>
            </div>

            {feedback && (
              <div className="mt-4 rounded-xl border border-primary/10 bg-primary/5 p-4">
                <p className="text-sm font-semibold text-primary">Coach note</p>
                <p className="mt-1 text-sm leading-6 text-muted">{feedback}</p>
                <button
                  onClick={nextTurn}
                  className="mt-3 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white"
                >
                  {turnIndex + 1 === scenario.turns.length ? "Finish conversation" : "Continue →"}
                </button>
              </div>
            )}
          </div>
        ) : null}

        {finished && (
          <div className="mt-5 rounded-xl bg-primary/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Session complete</p>
            <h3 className="mt-1 font-display text-2xl font-semibold text-ink">{average}% average functional match</h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              This score checks whether your replies carried the target meaning, used enough language, and stayed in Marathi. It is not a native-speaker fluency certificate.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => resetScenario()}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white"
              >
                Repeat this conversation
              </button>
              <button
                onClick={() => {
                  const current = conversationScenarios.findIndex((item) => item.slug === selectedSlug);
                  const next = conversationScenarios[(current + 1) % conversationScenarios.length];
                  resetScenario(next.slug);
                }}
                className="rounded-lg border border-black/10 px-4 py-2 text-sm font-semibold text-ink"
              >
                Try another scenario
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
