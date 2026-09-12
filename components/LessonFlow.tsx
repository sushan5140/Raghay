"use client";

import { useEffect, useMemo, useState } from "react";
import type { Lesson } from "@/data/lessons";
import QuickCheck from "@/components/QuickCheck";
import MixedPractice from "@/components/MixedPractice";
import Practice from "@/components/Practice";
import CompleteLessonButton from "@/components/CompleteLessonButton";
import IntermediateLab from "@/components/IntermediateLab";
import ReadingLab from "@/components/ReadingLab";
import ListeningLab from "@/components/ListeningLab";
import ProductionTask from "@/components/ProductionTask";
import ScenarioPractice from "@/components/ScenarioPractice";
import { setLastLesson } from "@/lib/progress";

type StepId = "learn" | "understand" | "input" | "practice" | "produce" | "review";

function PhraseCard({ lesson, item }: { lesson: Lesson; item: Lesson["items"][number] }) {
  if (lesson.unit >= 13) {
    return (
      <div className="rounded-xl border border-black/5 bg-white p-4">
        <p className="font-display text-xl font-semibold text-ink">{item.devanagari}</p>
        <p className="mt-2 text-sm text-muted">{item.english}</p>
        <details className="mt-3">
          <summary className="cursor-pointer text-xs font-semibold text-primary">Show romanization</summary>
          <p className="mt-2 text-sm text-ink/75">{item.marathi}</p>
        </details>
        {item.notes && <p className="mt-2 text-xs leading-5 text-muted">{item.notes}</p>}
      </div>
    );
  }

  if (lesson.unit >= 9) {
    return (
      <div className="rounded-xl border border-black/5 bg-white p-4">
        <p className="font-display text-xl font-semibold text-ink">{item.devanagari}</p>
        <p className="mt-1 text-sm text-ink/65">{item.marathi}</p>
        <p className="mt-2 text-sm text-muted">{item.english}</p>
        {item.notes && <p className="mt-2 text-xs leading-5 text-muted">{item.notes}</p>}
      </div>
    );
  }

  if (lesson.unit >= 5) {
    return (
      <div className="rounded-xl border border-black/5 bg-white p-4">
        <p className="font-display text-lg font-semibold text-ink">{item.marathi}</p>
        <p className="mt-1 font-display text-lg font-semibold text-ink/80">{item.devanagari}</p>
        <p className="mt-2 text-sm text-muted">{item.english}</p>
        {item.notes && <p className="mt-2 text-xs leading-5 text-muted">{item.notes}</p>}
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-black/5 bg-white p-4">
      <p className="font-display text-lg font-semibold text-ink">{item.marathi}</p>
      <p className="mt-1 text-base text-ink/75">{item.devanagari}</p>
      <p className="mt-2 text-sm text-muted">{item.english}</p>
      {item.notes && <p className="mt-2 text-xs leading-5 text-muted">{item.notes}</p>}
    </div>
  );
}

export default function LessonFlow({ lesson }: { lesson: Lesson }) {
  const steps = useMemo(() => {
    const list: { id: StepId; label: string }[] = [{ id: "learn", label: "Learn" }];
    if (lesson.checks?.length) list.push({ id: "understand", label: "Understand" });
    if (lesson.reading || lesson.listening || lesson.intermediate) list.push({ id: "input", label: "Read & Listen" });
    list.push({ id: "practice", label: "Practice" });
    if (lesson.production || lesson.scenario) list.push({ id: "produce", label: "Produce" });
    list.push({ id: "review", label: "Review" });
    return list;
  }, [lesson]);

  const [active, setActive] = useState<StepId>("learn");

  useEffect(() => {
    setLastLesson(lesson.slug);
  }, [lesson.slug]);

  const activeIndex = steps.findIndex((step) => step.id === active);

  function goNext() {
    const next = steps[activeIndex + 1];
    if (next) {
      setActive(next.id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function goBack() {
    const previous = steps[activeIndex - 1];
    if (previous) {
      setActive(previous.id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="mt-6">
      <div className="overflow-x-auto pb-2">
        <div className="flex min-w-max gap-2">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActive(step.id)}
              className={`rounded-full px-3 py-2 text-xs font-semibold transition ${active === step.id ? "bg-primary text-white" : "border border-black/10 bg-white text-muted hover:text-ink"}`}
            >
              {index + 1}. {step.label}
            </button>
          ))}
        </div>
      </div>

      {active === "learn" && (
        <section className="mt-5">
          {lesson.teaching?.length ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">How it works</p>
              <h2 className="mt-1 font-display text-xl font-semibold text-ink">Understand the pattern</h2>
              <div className="mt-4 space-y-4">
                {lesson.teaching.map((point) => (
                  <div key={point.title} className="rounded-xl border border-black/5 bg-white p-5">
                    <h3 className="font-display text-lg font-semibold text-ink">{point.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{point.explanation}</p>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {point.examples.map((example) => (
                        <div key={example.marathi} className="rounded-lg bg-offwhite p-3">
                          <p className={`font-semibold text-ink ${lesson.unit >= 9 ? "text-base" : "text-sm"}`}>
                            {lesson.unit >= 9 ? example.devanagari : example.marathi}
                          </p>
                          <p className="mt-1 text-sm text-ink/70">
                            {lesson.unit >= 9 ? example.marathi : example.devanagari}
                          </p>
                          <p className="mt-1 text-xs text-muted">{example.english}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className={lesson.teaching?.length ? "mt-9" : ""}>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-xl font-semibold text-ink">Core language</h2>
                <p className="mt-1 text-sm text-muted">
                  {lesson.unit >= 13
                    ? "Read Devanagari first. Reveal romanization only when you need it."
                    : lesson.unit >= 9
                      ? "Devanagari is now primary, with romanization as support."
                      : lesson.unit >= 5
                        ? "Romanization and Devanagari now carry equal visual weight."
                        : "Use romanization while you build familiarity with Devanagari."}
                </p>
              </div>
              <span className="text-xs font-medium text-muted">{lesson.items.length} items</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {lesson.items.map((item) => (
                <PhraseCard key={item.devanagari + item.english} lesson={lesson} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      {active === "understand" && lesson.checks?.length ? (
        <section className="mt-5">
          <h2 className="font-display text-xl font-semibold text-ink">Check the grammar idea</h2>
          <p className="mt-1 text-sm text-muted">These answers also help Marathi Mate identify weak grammar skills.</p>
          <div className="mt-4">
            <QuickCheck checks={lesson.checks} />
          </div>
        </section>
      ) : null}

      {active === "input" && (
        <section className="mt-5 space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Connected input</p>
            <h2 className="mt-1 font-display text-xl font-semibold text-ink">Understand Marathi beyond one sentence</h2>
          </div>
          {lesson.reading ? <ReadingLab reading={lesson.reading} unit={lesson.unit} /> : null}
          {lesson.listening ? <ListeningLab listening={lesson.listening} /> : null}
          {lesson.intermediate ? <IntermediateLab material={lesson.intermediate} /> : null}
        </section>
      )}

      {active === "practice" && (
        <section className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Practice lab</p>
          <h2 className="mt-1 font-display text-xl font-semibold text-ink">Recall it in different ways</h2>
          <p className="mt-1 text-sm text-muted">Translation, sentence building, and listening prevent one-format memorization.</p>
          <div className="mt-4">
            <MixedPractice items={lesson.items} />
          </div>
        </section>
      )}

      {active === "produce" && (
        <section className="mt-5 space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Independent use</p>
            <h2 className="mt-1 font-display text-xl font-semibold text-ink">Turn the lesson into your own Marathi</h2>
          </div>
          {lesson.scenario ? <ScenarioPractice scenario={lesson.scenario} lessonSlug={lesson.slug} /> : null}
          {lesson.production ? <ProductionTask task={lesson.production} lessonSlug={lesson.slug} /> : null}
        </section>
      )}

      {active === "review" && (
        <section className="mt-5">
          <h2 className="font-display text-xl font-semibold text-ink">Final recall</h2>
          <p className="mt-1 text-sm text-muted">Finish with flashcards, then mark the lesson complete.</p>
          <div className="mt-4">
            <Practice items={lesson.items} />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-black/5 bg-white p-4">
            <p className="text-sm text-muted">Finished this lesson's learning, input, practice, and production?</p>
            <CompleteLessonButton slug={lesson.slug} />
          </div>
        </section>
      )}

      <div className="mt-8 flex items-center justify-between gap-3 border-t border-black/5 pt-5">
        <button
          onClick={goBack}
          disabled={activeIndex === 0}
          className="rounded-lg border border-black/10 px-4 py-2 text-sm font-semibold text-ink disabled:opacity-30"
        >
          ← Previous
        </button>
        <span className="text-xs text-muted">{activeIndex + 1} / {steps.length}</span>
        <button
          onClick={goNext}
          disabled={activeIndex === steps.length - 1}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white disabled:opacity-30"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
