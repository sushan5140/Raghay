import type { VocabItem } from "@/data/lessons";

export type PhraseStat = {
  correct: number;
  incorrect: number;
  lastSeen: number;
  streak: number;
};

export type ProgressMap = Record<string, PhraseStat>;

const KEY = "marathi-mate-phrase-progress";

export function phraseKey(item: Pick<VocabItem, "devanagari" | "english">) {
  return `${item.devanagari}::${item.english}`;
}

export function readPhraseProgress(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function recordPhraseResult(item: VocabItem, correct: boolean) {
  if (typeof window === "undefined") return;

  const progress = readPhraseProgress();
  const key = phraseKey(item);
  const current = progress[key] || {
    correct: 0,
    incorrect: 0,
    lastSeen: 0,
    streak: 0,
  };

  progress[key] = {
    correct: current.correct + (correct ? 1 : 0),
    incorrect: current.incorrect + (correct ? 0 : 1),
    lastSeen: Date.now(),
    streak: correct ? current.streak + 1 : 0,
  };

  localStorage.setItem(KEY, JSON.stringify(progress));
  window.dispatchEvent(new Event("marathi-mate-phrase-progress"));
}

export function weaknessScore(stat?: PhraseStat) {
  if (!stat) return 0;
  return stat.incorrect * 2 - stat.correct - stat.streak;
}

export function needsReview(stat?: PhraseStat) {
  if (!stat) return false;
  return stat.incorrect > 0 && (stat.incorrect >= stat.correct || stat.streak < 2);
}
