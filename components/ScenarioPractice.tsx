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
  const [customReply, setCustomReply] = useState("");
  const step = steps.get(stepId);

  if (!step) return null;

  function advance(nextStep?: string) {
    window.setTimeout(() => {
      if (nextStep) {
        setStepId(nextStep);
        setFeedback(null);
        setCustomReply("");
      } else {
        setFinished(true);
      }
    }, 650);
  }

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
    advance(option.nextStep);
  }

  function useCustomReply() {
    if (!customReply.trim() || feedback || finished || !step) return;
    const currentStep = step;
    const nextStep =
      currentStep.options.find((option) => option.acceptable && option.nextStep)?.nextStep ||
      currentStep.options.find((option) => option.nextStep)?.nextStep;

    setHistory((current) => [
      ...current,
      { speaker: currentStep.speaker, line: currentStep.line },
      { speaker: "You", line: customReply.trim() },
    ]);
    setFeedback(
      "Your own reply is kept as production practice. Compare it with the acceptable examples above rather than treating this as automatic grammar grading."
    );
    advance(nextStep);
  }

  function restart() {
    setStepId(scenario.startStep);
    setHistory([]);
    setFeedback(null);
    setFinished(false);
    setCustomReply("");
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

          <div className="mt-4 border-t border-black/5 pt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Or answer in your own Marathi</p>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <input
                value={customReply}
                onChange={(event) => setCustomReply(event.target.value)}
                disabled={Boolean(feedback)}
                placeholder="Type your reply..."
                className="min-w-0 flex-1 rounded-lg border border-black/10 bg-offwhite px-3 py-2 text-sm text-ink outline-none focus:border-primary/40"
              />
              <button
                onClick={useCustomReply}
                disabled={!customReply.trim() || Boolean(feedback)}
                className="rounded-lg border border-primary/20 px-3 py-2 text-sm font-semibold text-primary disabled:opacity-40"
              >
                Use my reply
              </button>
            </div>
          </div>

          {feedback && <p className="mt-3 rounded-lg bg-offwhite p-3 text-sm text-muted">{feedback}</p>}
        </div>
      )}

      {finished && (
        <div className="mt-4 rounded-lg bg-primary/5 p-4">
          <p className="text-sm font-semibold text-primary">Scenario complete</p>
          <p className="mt-1 text-sm text-muted">Try it again and choose or write a different response.</p>
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
