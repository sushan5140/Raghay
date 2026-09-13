"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Practice from "@/components/Practice";
import type { Lesson, VocabItem } from "@/data/lessons";
import {
  isDue,
  needsReview,
  phraseKey,
  readPhraseProgress,
  readSkillProgress,
  weaknessScore,
  type ProgressMap,
  type SkillProgressMap,
} from "@/lib/progress";

type ReviewItem = VocabItem & { lessonTitle: string };

function lessonForSkill(lessons: Lesson[], skillKey: string) {
  const skill = skillKey.split(":").slice(1).join(":");
  return lessons.find((lesson) => {
    if (lesson.grammarSkills?.includes(skill)) return true;
    if (lesson.checks?.some((q) => q.skill === skill)) return true;
    if (lesson.reading?.questions.some((q) => q.skill === skill)) return true;
    if (lesson.listening?.questions.some((q) => q.skill === skill)) return true;
    return false;
  });
}

export default function ReviewDashboard({
  items,
  lessons,
}: {
  items: ReviewItem[];
  lessons: Lesson[];
}) {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [skills, setSkills] = useState<SkillProgressMap>({});

  useEffect(() => {
    const refresh = () => {
      setProgress(readPhraseProgress());
      setSkills(readSkillProgress());
    };
    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener("marathi-mate-phrase-progress", refresh);
    window.addEventListener("marathi-mate-skill-progress", refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("marathi-mate-phrase-progress", refresh);
      window.removeEventListener("marathi-mate-skill-progress", refresh);
    };
  }, []);

  const weak = useMemo(
    () =>
      items
        .filter((item) => needsReview(progress[phraseKey(item)]))
        .sort((a, b) => weaknessScore(progress[phraseKey(b)]) - weaknessScore(progress[phraseKey(a)])),
    [items, progress]
  );

  const duePhrases = useMemo(
    () => items.filter((item) => isDue(progress[phraseKey(item)])),
    [items, progress]
  );

  const weakSkills = useMemo(
    () =>
      Object.entries(skills)
        .filter(([, stat]) => needsReview(stat))
        .sort(([, a], [, b]) => weaknessScore(b) - weaknessScore(a)),
    [skills]
  );

  const dueSkills = useMemo(
    () => Object.entries(skills).filter(([, stat]) => isDue(stat)),
    [skills]
  );

  const practiced = Object.keys(progress).length;
  const totalCorrect = Object.values(progress).reduce((sum, stat) => sum + stat.correct, 0);

  const labels: Record<string, string> = {
    grammar: "Grammar",
    reading: "Reading",
    listening: "Listening",
    scenario: "Conversation",
    assessment: "Assessment",
    speaking: "Speaking",
    conversation: "Conversation",
  };

  return (
    <div>
      <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Adaptive review</p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">Review what actually needs work</h1>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
          Phrase recall, grammar, reading, listening, and conversation mistakes are tracked locally on this device and resurfaced with simple spacing.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl bg-offwhite p-3">
            <p className="text-xs text-muted">Phrases practiced</p>
            <p className="mt-1 font-display text-xl font-semibold text-ink">{practiced}</p>
          </div>
          <div className="rounded-xl bg-offwhite p-3">
            <p className="text-xs text-muted">Correct recalls</p>
            <p className="mt-1 font-display text-xl font-semibold text-ink">{totalCorrect}</p>
          </div>
          <div className="rounded-xl bg-offwhite p-3">
            <p className="text-xs text-muted">Due phrases</p>
            <p className="mt-1 font-display text-xl font-semibold text-ink">{duePhrases.length}</p>
          </div>
          <div className="rounded-xl bg-offwhite p-3">
            <p className="text-xs text-muted">Due skills</p>
            <p className="mt-1 font-display text-xl font-semibold text-ink">{dueSkills.length}</p>
          </div>
        </div>
      </section>

      <section className="mt-9">
        <h2 className="font-display text-xl font-semibold text-ink">Today’s review</h2>
        <p className="mt-1 text-sm text-muted">Due items return sooner after mistakes and spread out after repeated success.</p>
        {duePhrases.length || dueSkills.length ? (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {duePhrases.slice(0, 4).map((item) => (
              <div key={phraseKey(item)} className="rounded-xl border border-black/5 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">Phrase</p>
                <p className="mt-2 font-display text-lg font-semibold text-ink">{item.devanagari}</p>
                <p className="mt-1 text-sm text-muted">{item.marathi} · {item.english}</p>
              </div>
            ))}
            {dueSkills.slice(0, 4).map(([key, stat]) => {
              const lesson = lessonForSkill(lessons, key);
              const skill = key.split(":").slice(1).join(":").replaceAll("-", " ");
              return (
                <div key={key} className="rounded-xl border border-black/5 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">{labels[stat.kind] || stat.kind}</p>
                  <p className="mt-2 font-display text-lg font-semibold capitalize text-ink">{skill}</p>
                  <p className="mt-1 text-sm text-muted">{stat.correct} correct · {stat.incorrect} missed</p>
                  {lesson && (
                    <Link href={`/lessons/${lesson.slug}`} className="mt-3 inline-block text-sm font-semibold text-primary">
                      Revisit {lesson.title} →
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-black/5 bg-white p-5 text-sm text-muted">
            Nothing is due yet. Keep learning and this queue will build from your actual mistakes.
          </div>
        )}
      </section>

      {weakSkills.length ? (
        <section className="mt-10">
          <h2 className="font-display text-xl font-semibold text-ink">Weak skills</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {weakSkills.slice(0, 8).map(([key, stat]) => {
              const lesson = lessonForSkill(lessons, key);
              const skill = key.split(":").slice(1).join(":").replaceAll("-", " ");
              return (
                <div key={key} className="rounded-xl border border-black/5 bg-white p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                      {labels[stat.kind] || stat.kind}
                    </span>
                    <span className="text-xs text-muted">{stat.incorrect} misses</span>
                  </div>
                  <p className="mt-3 font-display text-lg font-semibold capitalize text-ink">{skill}</p>
                  {lesson && (
                    <Link href={`/lessons/${lesson.slug}`} className="mt-3 inline-block text-sm font-semibold text-primary">
                      Practice in {lesson.title} →
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      {weak.length ? (
        <>
          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold text-ink">Weak phrases</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {weak.slice(0, 8).map((item) => {
                const stat = progress[phraseKey(item)];
                return (
                  <div key={phraseKey(item)} className="rounded-xl border border-black/5 bg-white p-4">
                    <p className="text-xs font-medium text-terracotta">{item.lessonTitle}</p>
                    <p className="mt-2 font-display text-lg font-semibold text-ink">{item.devanagari}</p>
                    <p className="mt-1 text-sm text-ink/70">{item.marathi}</p>
                    <p className="mt-2 text-sm text-muted">{item.english}</p>
                    <p className="mt-3 text-xs text-muted">{stat?.correct || 0} correct · {stat?.incorrect || 0} missed</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold text-ink">Focused phrase review</h2>
            <div className="mt-4">
              <Practice items={weak.slice(0, 12)} />
            </div>
          </section>
        </>
      ) : null}
    </div>
  );
}
