"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Lesson } from "@/data/lessons";
import { assessments } from "@/data/assessments";
import { isDue, readLastLesson, readPhraseProgress, readSkillProgress } from "@/lib/progress";

const STORAGE_KEY = "marathi-mate-completed-lessons";

function readCompleted() {
  if (typeof window === "undefined") return [] as string[];
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

export default function LearningPath({ lessons }: { lessons: Lesson[] }) {
  const [completed, setCompleted] = useState<string[]>([]);
  const [lastLesson, setLastLessonState] = useState<string | null>(null);
  const [dueCount, setDueCount] = useState(0);

  useEffect(() => {
    const refresh = () => {
      setCompleted(readCompleted());
      setLastLessonState(readLastLesson());
      const phraseDue = Object.values(readPhraseProgress()).filter(isDue).length;
      const skillDue = Object.values(readSkillProgress()).filter(isDue).length;
      setDueCount(phraseDue + skillDue);
    };
    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener("marathi-mate-progress", refresh);
    window.addEventListener("marathi-mate-phrase-progress", refresh);
    window.addEventListener("marathi-mate-skill-progress", refresh);
    window.addEventListener("marathi-mate-last-lesson", refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("marathi-mate-progress", refresh);
      window.removeEventListener("marathi-mate-phrase-progress", refresh);
      window.removeEventListener("marathi-mate-skill-progress", refresh);
      window.removeEventListener("marathi-mate-last-lesson", refresh);
    };
  }, []);

  const units = useMemo(
    () =>
      lessons.reduce<Record<number, Lesson[]>>((groups, lesson) => {
        groups[lesson.unit] = [...(groups[lesson.unit] || []), lesson];
        return groups;
      }, {}),
    [lessons]
  );

  const validCompleted = completed.filter((slug) => lessons.some((lesson) => lesson.slug === slug));
  const percent = lessons.length ? Math.round((validCompleted.length / lessons.length) * 100) : 0;
  const continueLesson =
    lessons.find((lesson) => lesson.slug === lastLesson) ||
    lessons.find((lesson) => !validCompleted.includes(lesson.slug)) ||
    lessons[lessons.length - 1];

  return (
    <div>
      <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Zero → conversational independence
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
              Build Marathi from first phrases to independent conversation
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
              Move from structured lessons into speaking, longer listening, free conversation, Devanagari-first reading, and evidence-based mastery.
            </p>
          </div>

          <div className="min-w-36 rounded-xl bg-offwhite px-4 py-3">
            <div className="flex items-end justify-between gap-4">
              <span className="text-xs font-medium text-muted">Course progress</span>
              <span className="font-display text-xl font-semibold text-ink">{percent}%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/5">
              <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${percent}%` }} />
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {continueLesson && (
            <Link
              href={`/lessons/${continueLesson.slug}`}
              className="rounded-xl bg-primary p-4 text-white transition hover:opacity-95"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-white/70">Continue learning</p>
              <p className="mt-1 font-display text-lg font-semibold">{continueLesson.title}</p>
              <p className="mt-1 text-sm text-white/80">Unit {continueLesson.unit} · Continue →</p>
            </Link>
          )}
          <Link
            href="/review"
            className="rounded-xl border border-black/5 bg-offwhite p-4 transition hover:border-primary/20"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Adaptive review</p>
            <p className="mt-1 font-display text-lg font-semibold text-ink">
              {dueCount ? `${dueCount} items due` : "Review is clear"}
            </p>
            <p className="mt-1 text-sm text-muted">Phrases + grammar + reading + listening →</p>
          </Link>
        </div>
      </section>

      <section className="mt-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Conversational independence</p>
        <h2 className="mt-1 font-display text-2xl font-semibold text-ink">Use the Marathi you have learned</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/speaking" className="rounded-xl border border-black/5 bg-white p-4 transition hover:border-primary/25">
            <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Speak</p>
            <p className="mt-2 font-display text-lg font-semibold text-ink">Speaking Lab</p>
            <p className="mt-1 text-sm leading-5 text-muted">Shadow, use the microphone, compare recognition, then adapt the pattern.</p>
          </Link>
          <Link href="/listening" className="rounded-xl border border-black/5 bg-white p-4 transition hover:border-primary/25">
            <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Listen</p>
            <p className="mt-2 font-display text-lg font-semibold text-ink">Natural Listening</p>
            <p className="mt-1 text-sm leading-5 text-muted">2–4 minute learner tracks with gist before transcript and detail after.</p>
          </Link>
          <Link href="/conversation" className="rounded-xl border border-black/5 bg-white p-4 transition hover:border-primary/25">
            <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Respond</p>
            <p className="mt-2 font-display text-lg font-semibold text-ink">Conversation Mode</p>
            <p className="mt-1 text-sm leading-5 text-muted">5–10 minute guided conversations with voice or free typed replies.</p>
          </Link>
          <Link href="/mastery" className="rounded-xl border border-primary/15 bg-primary/5 p-4 transition hover:border-primary/30">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">Measure</p>
            <p className="mt-2 font-display text-lg font-semibold text-ink">Mastery</p>
            <p className="mt-1 text-sm leading-5 text-muted">Vocabulary, grammar, reading, listening, speaking, and conversation.</p>
          </Link>
        </div>
      </section>

      <div className="mt-9 space-y-10">
        {Object.entries(units).map(([unitNumber, unitLessons]) => {
          const unit = Number(unitNumber);
          const first = unitLessons[0];
          const checkpoints = assessments.filter((assessment) => assessment.afterUnit === unit);
          return (
            <section key={unitNumber}>
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
                  Unit {unitNumber}
                </p>
                <h2 className="mt-1 font-display text-xl font-semibold text-ink">{first.unitTitle}</h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {unitLessons.map((lesson, index) => {
                  const isDone = validCompleted.includes(lesson.slug);
                  return (
                    <Link
                      key={lesson.slug}
                      href={`/lessons/${lesson.slug}`}
                      className="group rounded-xl border border-black/5 bg-white p-5 transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                          {index + 1}
                        </span>
                        {isDone && (
                          <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                            Completed
                          </span>
                        )}
                      </div>
                      <h3 className="mt-4 font-display text-lg font-semibold text-ink">{lesson.title}</h3>
                      <p className="mt-1 text-sm leading-5 text-muted">{lesson.subtitle}</p>
                      <p className="mt-4 text-xs font-medium text-primary">
                        {lesson.items.length} core items · Open lesson →
                      </p>
                    </Link>
                  );
                })}
              </div>

              {checkpoints.length ? (
                <div className="mt-4 grid gap-3">
                  {checkpoints.map((checkpoint) => (
                    <Link
                      key={checkpoint.slug}
                      href={`/checkpoints/${checkpoint.slug}`}
                      className={`rounded-xl border p-4 transition hover:-translate-y-0.5 ${checkpoint.final ? "border-primary/25 bg-primary/5" : "border-terracotta/20 bg-terracotta/5"}`}
                    >
                      <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${checkpoint.final ? "text-primary" : "text-terracotta"}`}>
                        {checkpoint.final ? "Final assessment" : "Checkpoint"}
                      </p>
                      <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="font-display text-lg font-semibold text-ink">{checkpoint.title}</p>
                          <p className="mt-1 text-sm text-muted">{checkpoint.subtitle}</p>
                        </div>
                        <span className="text-sm font-semibold text-primary">Start →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : null}
            </section>
          );
        })}
      </div>
    </div>
  );
}
