"use client";

import { useEffect, useMemo, useState } from "react";
import type { ProductionTask as ProductionTaskType } from "@/data/lessons";

export default function ProductionTask({
  task,
  lessonSlug,
}: {
  task: ProductionTaskType;
  lessonSlug: string;
}) {
  const storageKey = `marathi-mate-draft:${lessonSlug}`;
  const [draft, setDraft] = useState("");
  const [showSupport, setShowSupport] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setDraft(localStorage.getItem(storageKey) || "");
  }, [storageKey]);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem(storageKey, draft);
  }, [draft, storageKey]);

  const sentenceCount = useMemo(
    () => draft.split(/[.!?।]+/).map((part) => part.trim()).filter(Boolean).length,
    [draft]
  );

  return (
    <div className="rounded-xl border border-black/5 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
        Production
      </p>
      <h3 className="mt-2 font-display text-lg font-semibold text-ink">{task.prompt}</h3>
      <p className="mt-1 text-sm text-muted">
        Target: at least {task.minSentences} connected sentences. This is self-check practice, not fake automatic grading.
      </p>

      <textarea
        value={draft}
        onChange={(event) => setDraft(event.target.value)}
        rows={6}
        placeholder="Write in Marathi or Devanagari..."
        className="mt-4 w-full rounded-lg border border-black/10 bg-offwhite p-3 text-sm leading-6 text-ink outline-none focus:border-primary/40"
      />

      <div className="mt-2 flex items-center justify-between gap-3 text-xs text-muted">
        <span>{sentenceCount} sentences detected</span>
        <span>{sentenceCount >= task.minSentences ? "Length target reached" : "Keep connecting your ideas"}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {task.support?.length ? (
          <button
            onClick={() => setShowSupport((value) => !value)}
            className="rounded-lg border border-black/10 px-3 py-2 text-xs font-semibold text-ink"
          >
            {showSupport ? "Hide support" : "Show support"}
          </button>
        ) : null}
        {task.modelAnswer ? (
          <button
            onClick={() => setShowModel((value) => !value)}
            className="rounded-lg border border-black/10 px-3 py-2 text-xs font-semibold text-ink"
          >
            {showModel ? "Hide model" : "Compare with model"}
          </button>
        ) : null}
      </div>

      {showSupport && task.support?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {task.support.map((item) => (
            <span key={item} className="rounded-md bg-primary/5 px-2.5 py-1.5 text-sm text-ink">
              {item}
            </span>
          ))}
        </div>
      ) : null}

      {task.requiredPatterns?.length ? (
        <div className="mt-5 rounded-lg bg-offwhite p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Self-check</p>
          <div className="mt-3 space-y-2">
            {task.requiredPatterns.map((pattern) => (
              <label key={pattern} className="flex items-center gap-2 text-sm text-ink">
                <input
                  type="checkbox"
                  checked={Boolean(checked[pattern])}
                  onChange={(event) =>
                    setChecked((current) => ({ ...current, [pattern]: event.target.checked }))
                  }
                />
                I used {pattern}
              </label>
            ))}
          </div>
        </div>
      ) : null}

      {showModel && task.modelAnswer ? (
        <div className="mt-4 rounded-lg border border-primary/10 bg-primary/5 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Model answer</p>
          <p className="mt-2 leading-7 text-ink">{task.modelAnswer.devanagari}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{task.modelAnswer.romanized}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{task.modelAnswer.english}</p>
        </div>
      ) : null}
    </div>
  );
}
