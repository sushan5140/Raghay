"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Lesson } from "@/data/lessons";

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

  useEffect(() => {
    setCompleted(readCompleted());

    const refresh = () => setCompleted(readCompleted());
    window.addEventListener("storage", refresh);
    window.addEventListener("marathi-mate-progress", refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("marathi-mate-progress", refresh);
    };
  }, []);

  const units = useMemo(() => {
    return lessons.reduce<Record<number, Lesson[]>>((groups, lesson) => {
      groups[lesson.unit] = [...(groups[lesson.unit] || []), lesson];
      return groups;
    }, {});
  }, [lessons]);

  const percent = lessons.length ? Math.round((completed.length / lessons.length) * 100) : 0;

  return (
    <div>
      <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Beginner → true intermediate
            </p>
            <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
              Build from survival Marathi to connected speech
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
              Learn useful Marathi in small steps: hear it, understand it, then practice it.
              Romanized Marathi stays first, with Devanagari alongside.
            </p>
          </div>

          <div className="min-w-36 rounded-xl bg-offwhite px-4 py-3">
            <div className="flex items-end justify-between gap-4">
              <span className="text-xs font-medium text-muted">Your progress</span>
              <span className="font-display text-xl font-semibold text-ink">{percent}%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/5">
              <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${percent}%` }} />
            </div>
          </div>
        </div>
      </section>

      <div className="mt-9 space-y-10">
        {Object.entries(units).map(([unitNumber, unitLessons]) => {
          const first = unitLessons[0];
          return (
            <section key={unitNumber}>
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
                  Unit {unitNumber}
                </p>
                <h2 className="mt-1 font-display text-xl font-semibold text-ink">
                  {first.unitTitle}
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {unitLessons.map((lesson, index) => {
                  const isDone = completed.includes(lesson.slug);
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
                      <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                        {lesson.title}
                      </h3>
                      <p className="mt-1 text-sm leading-5 text-muted">{lesson.subtitle}</p>
                      <p className="mt-4 text-xs font-medium text-primary">
                        {lesson.items.length} phrases · Start lesson →
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
