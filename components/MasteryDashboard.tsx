"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  readConversationProgress,
  readPhraseProgress,
  readSkillProgress,
  readSpeakingProgress,
  type SkillKind,
} from "@/lib/progress";

type Domain = {
  key: string;
  label: string;
  score: number | null;
  attempts: number;
  href: string;
  description: string;
};

function ratio(correct: number, incorrect: number) {
  const total = correct + incorrect;
  return total ? Math.round((correct / total) * 100) : null;
}

function skillDomain(kind: SkillKind, progress: ReturnType<typeof readSkillProgress>) {
  const entries = Object.values(progress).filter((stat) => stat.kind === kind);
  const correct = entries.reduce((sum, stat) => sum + stat.correct, 0);
  const incorrect = entries.reduce((sum, stat) => sum + stat.incorrect, 0);
  return { score: ratio(correct, incorrect), attempts: correct + incorrect };
}

export default function MasteryDashboard() {
  const [tick, setTick] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const refresh = () => setTick((value) => value + 1);
    const events = [
      "storage",
      "marathi-mate-phrase-progress",
      "marathi-mate-skill-progress",
      "marathi-mate-speaking-progress",
      "marathi-mate-conversation-progress",
      "marathi-mate-assessment-progress",
    ];
    events.forEach((event) => window.addEventListener(event, refresh));
    return () => events.forEach((event) => window.removeEventListener(event, refresh));
  }, []);

  const domains = useMemo<Domain[]>(() => {
    void tick;
    if (!mounted) {
      return [
        { key: "vocabulary", label: "Vocabulary", score: null, attempts: 0, href: "/review", description: "Phrase recall and useful chunks" },
        { key: "grammar", label: "Grammar", score: null, attempts: 0, href: "/", description: "Tense, relations, connectors, nuance" },
        { key: "reading", label: "Reading", score: null, attempts: 0, href: "/", description: "Devanagari comprehension" },
        { key: "listening", label: "Listening", score: null, attempts: 0, href: "/listening", description: "Gist, detail, sequence, inference" },
        { key: "speaking", label: "Speaking", score: null, attempts: 0, href: "/speaking", description: "Shadowing and recognition match" },
        { key: "conversation", label: "Conversation", score: null, attempts: 0, href: "/conversation", description: "Free response and staying in Marathi" },
      ];
    }
    const phrases = readPhraseProgress();
    const skills = readSkillProgress();
    const speaking = readSpeakingProgress();
    const conversations = readConversationProgress();

    const phraseValues = Object.values(phrases);
    const vocabCorrect = phraseValues.reduce((sum, stat) => sum + stat.correct, 0);
    const vocabIncorrect = phraseValues.reduce((sum, stat) => sum + stat.incorrect, 0);

    const grammar = skillDomain("grammar", skills);
    const reading = skillDomain("reading", skills);
    const listening = skillDomain("listening", skills);

    const speakingValues = Object.values(speaking);
    const speakingAttempts = speakingValues.reduce((sum, stat) => sum + stat.attempts, 0);
    const speakingScore = speakingAttempts
      ? Math.round(speakingValues.reduce((sum, stat) => sum + stat.totalScore, 0) / speakingAttempts)
      : null;

    const conversationValues = Object.values(conversations);
    const conversationTurns = conversationValues.reduce((sum, stat) => sum + stat.turns, 0);
    const conversationScore = conversationTurns
      ? Math.round(conversationValues.reduce((sum, stat) => sum + stat.totalQuality, 0) / conversationTurns)
      : null;

    return [
      {
        key: "vocabulary",
        label: "Vocabulary",
        score: ratio(vocabCorrect, vocabIncorrect),
        attempts: vocabCorrect + vocabIncorrect,
        href: "/review",
        description: "Phrase recall and useful chunks",
      },
      {
        key: "grammar",
        label: "Grammar",
        score: grammar.score,
        attempts: grammar.attempts,
        href: "/",
        description: "Tense, relations, connectors, nuance",
      },
      {
        key: "reading",
        label: "Reading",
        score: reading.score,
        attempts: reading.attempts,
        href: "/",
        description: "Devanagari comprehension",
      },
      {
        key: "listening",
        label: "Listening",
        score: listening.score,
        attempts: listening.attempts,
        href: "/listening",
        description: "Gist, detail, sequence, inference",
      },
      {
        key: "speaking",
        label: "Speaking",
        score: speakingScore,
        attempts: speakingAttempts,
        href: "/speaking",
        description: "Shadowing and recognition match",
      },
      {
        key: "conversation",
        label: "Conversation",
        score: conversationScore,
        attempts: conversationTurns,
        href: "/conversation",
        description: "Free response and staying in Marathi",
      },
    ];
  }, [tick, mounted]);

  const weakest = domains
    .filter((domain) => domain.score !== null && domain.attempts >= 2)
    .sort((a, b) => (a.score || 0) - (b.score || 0))[0];

  const measured = domains.filter((domain) => domain.score !== null);
  const overall = measured.length
    ? Math.round(measured.reduce((sum, domain) => sum + (domain.score || 0), 0) / measured.length)
    : null;

  const session = [
    { minutes: 2, title: "Listen", detail: "One gist-first track", href: "/listening", domain: "Listening" },
    { minutes: 2, title: "Shadow", detail: "Two speaking drills", href: "/speaking", domain: "Speaking" },
    { minutes: 3, title: "Respond", detail: "One conversation scenario", href: "/conversation", domain: "Conversation" },
    { minutes: 3, title: "Repair", detail: "Review due weaknesses", href: "/review", domain: "Review" },
  ];

  return (
    <div>
      <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-7">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Mastery</p>
            <h1 className="mt-2 font-display text-3xl font-semibold text-ink">See what your Marathi can actually do</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
              This profile combines real attempts across vocabulary, grammar, reading, listening, speaking, and conversation. Scores only appear once you create evidence by practicing.
            </p>
          </div>
          <div className="rounded-xl bg-offwhite px-5 py-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Measured average</p>
            <p className="mt-1 font-display text-3xl font-semibold text-ink">{overall === null ? "—" : `${overall}%`}</p>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {domains.map((domain) => (
          <Link
            key={domain.key}
            href={domain.href}
            className={`rounded-xl border bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm ${weakest?.key === domain.key ? "border-terracotta/30" : "border-black/5"}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-lg font-semibold text-ink">{domain.label}</p>
                <p className="mt-1 text-xs text-muted">{domain.description}</p>
              </div>
              {weakest?.key === domain.key && (
                <span className="rounded-full bg-terracotta/10 px-2 py-1 text-[10px] font-semibold uppercase text-terracotta">
                  Focus
                </span>
              )}
            </div>
            <p className="mt-5 font-display text-3xl font-semibold text-ink">
              {domain.score === null ? "—" : `${domain.score}%`}
            </p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/5">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${domain.score || 0}%` }}
              />
            </div>
            <p className="mt-3 text-xs text-muted">
              {domain.attempts ? `${domain.attempts} evidence points` : "Practice this domain to create a score"} · Open →
            </p>
          </Link>
        ))}
      </section>

      {weakest && (
        <section className="mt-7 rounded-xl border border-terracotta/20 bg-terracotta/5 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">Current priority</p>
          <h2 className="mt-1 font-display text-xl font-semibold text-ink">{weakest.label} is your weakest measured domain</h2>
          <p className="mt-2 text-sm text-muted">
            Start there first, but keep the other skills active. The goal is balanced conversational independence, not one perfect score.
          </p>
          <Link href={weakest.href} className="mt-3 inline-block text-sm font-semibold text-primary">
            Practice {weakest.label.toLowerCase()} →
          </Link>
        </section>
      )}

      <section className="mt-9">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Today’s 10-minute Marathi session</p>
        <h2 className="mt-1 font-display text-2xl font-semibold text-ink">Short enough to repeat every day</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {session.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-xl border border-black/5 bg-white p-4 transition hover:border-primary/25"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {index + 1}
                </span>
                <span className="text-xs font-semibold text-muted">{item.minutes} min</span>
              </div>
              <p className="mt-3 font-display text-lg font-semibold text-ink">{item.title}</p>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
              <p className="mt-3 text-xs font-semibold text-primary">{item.domain} →</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-xl bg-offwhite p-5">
        <p className="text-sm leading-6 text-muted">
          Mastery is local to this device for now. It is evidence-based practice feedback, not an official CEFR score or language certification.
        </p>
      </section>
    </div>
  );
}
