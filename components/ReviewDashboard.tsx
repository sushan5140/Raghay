"use client";

import { useEffect, useMemo, useState } from "react";
import Practice from "@/components/Practice";
import type { VocabItem } from "@/data/lessons";
import {
  needsReview,
  phraseKey,
  readPhraseProgress,
  weaknessScore,
  type ProgressMap,
} from "@/lib/progress";

type ReviewItem = VocabItem & {
  lessonTitle: string;
};

export default function ReviewDashboard({ items }: { items: ReviewItem[] }) {
  const [progress, setProgress] = useState<ProgressMap>({});

  useEffect(() => {
    const refresh = () => setProgress(readPhraseProgress());
    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener("marathi-mate-phrase-progress", refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener("marathi-mate-phrase-progress", refresh);
    };
  }, []);

  const weak = useMemo(
    () =>
      items
        .filter((item) => needsReview(progress[phraseKey(item)]))
        .sort(
          (a, b) =>
            weaknessScore(progress[phraseKey(b)]) -
            weaknessScore(progress[phraseKey(a)])
        ),
    [items, progress]
  );

  const practiced = Object.keys(progress).length;
  const totalCorrect = Object.values(progress).reduce(
    (sum, stat) => sum + stat.correct,
    0
  );
  const totalIncorrect = Object.values(progress).reduce(
    (sum, stat) => sum + stat.incorrect,
    0
  );

  return (
    <div>
      <section className="rounded-2xl border border-black/5 bg-white p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          Personalized review
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">
          Strengthen weak phrases
        </h1>
        <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
          Marathi Mate tracks practice on this device and brings back phrases you miss.
          A couple of correct recalls in a row will move a phrase out of this queue.
        </p>

        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-offwhite p-3">
            <p className="text-xs text-muted">Practiced</p>
            <p className="mt-1 font-display text-xl font-semibold text-ink">{practiced}</p>
          </div>
          <div className="rounded-xl bg-offwhite p-3">
            <p className="text-xs text-muted">Correct</p>
            <p className="mt-1 font-display text-xl font-semibold text-ink">{totalCorrect}</p>
          </div>
          <div className="rounded-xl bg-offwhite p-3">
            <p className="text-xs text-muted">To review</p>
            <p className="mt-1 font-display text-xl font-semibold text-ink">{weak.length}</p>
          </div>
        </div>
      </section>

      {weak.length ? (
        <>
          <section className="mt-9">
            <h2 className="font-display text-xl font-semibold text-ink">Review queue</h2>
            <p className="mt-1 text-sm text-muted">
              Highest-priority phrases appear first.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {weak.slice(0, 8).map((item) => {
                const stat = progress[phraseKey(item)];
                return (
                  <div
                    key={phraseKey(item)}
                    className="rounded-xl border border-black/5 bg-white p-4"
                  >
                    <p className="text-xs font-medium text-terracotta">{item.lessonTitle}</p>
                    <p className="mt-2 font-display text-lg font-semibold text-ink">
                      {item.marathi}
                    </p>
                    <p className="mt-1 text-sm text-ink/70">{item.devanagari}</p>
                    <p className="mt-2 text-sm text-muted">{item.english}</p>
                    <p className="mt-3 text-xs text-muted">
                      {stat?.correct || 0} correct · {stat?.incorrect || 0} missed
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl font-semibold text-ink">Focused review</h2>
            <p className="mt-1 text-sm text-muted">
              Practice only the phrases currently giving you trouble.
            </p>
            <div className="mt-4">
              <Practice items={weak.slice(0, 12)} />
            </div>
          </section>
        </>
      ) : (
        <section className="mt-9 rounded-xl border border-black/5 bg-white p-6">
          <h2 className="font-display text-xl font-semibold text-ink">
            Nothing weak yet
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Complete practice inside a few lessons. Phrases you miss will automatically
            appear here, while consistently correct phrases stay out of the way.
          </p>
        </section>
      )}
    </div>
  );
}
