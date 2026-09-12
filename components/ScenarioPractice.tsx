"use client";

import { useMemo, useState } from "react";
import type { Scenario } from "@/data/lessons";
import { recordSkillResult } from "@/lib/progress";

export default function ScenarioPractice({
  scenario,
  lessonSlug,
}: {
  scenario: Scenario;
  lessonSlug: string;
}) {
  const steps = useMemo(() => new Map(scenario.steps.map((step) => [step.id, step])), [scenario.steps]);
  const [stepId, setStepId] = useState(scenario.startStep);
  const [history, setHistory] = useState<{ speaker: string; line: string }[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);
  const step = steps.get(stepId);

  if (!step) return null;

  function choose(index: number) {
    if (feedback || finished || !step) return;
    const currentStep = step;
    const option = currentStep.options[index];
    setHistory((current) => [
      ...current,
      { speaker: currentStep.speaker, line: currentStep.line },
      { speaker: "You", line: option.text },
    ]);
    setFeedback(option.feedback);
    recordSkillResult(`scenario-${lessonSlug}`, option.acceptable, "scenario");

    window.setTimeout(() => {
      if (option.nextStep) {
        setStepId(option.nextStep);
        setFeedback(null);
      } else {
        setFinished(true);
      }
    }, 650);
  }

  function restart() {
    setStepId(scenario.startStep);
    setHistory([]);
    setFeedback(null);
    setFinished(false);
  }

  return (
    <div className="rounded-xl border border-black/5 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Scenario</p>
      <h3 className="mt-1 font-display text-lg font-semibold text-ink">{scenario.title}</h3>
      <p className="mt-1 text-sm text-muted">{scenario.context}</p>

      <div className="mt-4 space-y-2">
        {history.map((entry, index) => (
          <div
            key={index}
            className={`rounded-lg p-3 text-sm ${entry.speaker === "You" ? "ml-8 bg-primary/10 text-ink" : "mr-8 bg-offwhite text-ink"}`}
          >
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">{entry.speaker}</p>
            <p className="mt-1">{entry.line}</p>
          </div>
        ))}

        {!finished && (
          <div className="mr-8 rounded-lg bg-offwhite p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">{step.speaker}</p>
            <p className="mt-1 text-sm text-ink">{step.line}</p>
          </div>
        )}
      </div>

      {!finished && (
        <div className="mt-4">
          <p className="text-sm font-semibold text-ink">{step.prompt}</p>
          <div className="mt-2 grid gap-2">
            {step.options.map((option, index) => (
              <button
                key={option.text}
                onClick={() => choose(index)}
                disabled={Boolean(feedback)}
                className="rounded-lg border border-black/10 px-3 py-2 text-left text-sm font-medium text-ink transition hover:border-primary/30 disabled:opacity-60"
              >
                {option.text}
              </button>
            ))}
          </div>
          {feedback && <p className="mt-3 rounded-lg bg-offwhite p-3 text-sm text-muted">{feedback}</p>}
        </div>
      )}

      {finished && (
        <div className="mt-4 rounded-lg bg-primary/5 p-4">
          <p className="text-sm font-semibold text-primary">Scenario complete</p>
          <p className="mt-1 text-sm text-muted">Try it again and choose a different response where possible.</p>
          <button
            onClick={restart}
            className="mt-3 rounded-lg border border-black/10 px-3 py-2 text-sm font-semibold text-ink"
          >
            Try another way
          </button>
        </div>
      )}
    </div>
  );
}
