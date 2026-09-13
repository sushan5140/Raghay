import type { VocabItem } from "@/data/lessons";

export type SkillKind = "grammar" | "reading" | "listening" | "scenario" | "assessment" | "speaking" | "conversation";

export type PhraseStat = {
  correct: number;
  incorrect: number;
  lastSeen: number;
  streak: number;
  intervalLevel?: number;
  dueAt?: number;
};

export type SkillStat = {
  kind: SkillKind;
  correct: number;
  incorrect: number;
  lastSeen: number;
  streak: number;
  dueAt: number;
};

export type AssessmentAttempt = {
  attempts: number;
  lastAttempt: number;
  usageCorrect: number;
  usageTotal: number;
  readingCorrect?: number;
  readingTotal?: number;
  listeningCorrect?: number;
  listeningTotal?: number;
};

export type ProgressMap = Record<string, PhraseStat>;
export type SkillProgressMap = Record<string, SkillStat>;
export type SpeakingAttempt = {
  attempts: number;
  totalScore: number;
  bestScore: number;
  lastAttempt: number;
};

export type ConversationStat = {
  sessions: number;
  turns: number;
  successfulTurns: number;
  totalQuality: number;
  lastSession: number;
};

export type AssessmentProgressMap = Record<string, AssessmentAttempt>;
export type SpeakingProgressMap = Record<string, SpeakingAttempt>;
export type ConversationProgressMap = Record<string, ConversationStat>;

const PHRASE_KEY = "marathi-mate-phrase-progress";
const SKILL_KEY = "marathi-mate-skill-progress";
const ASSESSMENT_KEY = "marathi-mate-assessment-progress";
const SPEAKING_KEY = "marathi-mate-speaking-progress";
const CONVERSATION_KEY = "marathi-mate-conversation-progress";
const LAST_LESSON_KEY = "marathi-mate-last-lesson";

const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;

function nextDue(correct: boolean, streak: number, intervalLevel = 0) {
  if (!correct) return { dueAt: Date.now() + HOUR, intervalLevel: 0 };
  const nextLevel = Math.min(intervalLevel + 1, 4);
  const intervals = [6 * HOUR, DAY, 3 * DAY, 7 * DAY, 14 * DAY];
  const streakBoost = streak >= 3 ? 1 : 0;
  return {
    dueAt: Date.now() + intervals[Math.min(nextLevel + streakBoost, intervals.length - 1)],
    intervalLevel: nextLevel,
  };
}

export function phraseKey(item: Pick<VocabItem, "devanagari" | "english">) {
  return `${item.devanagari}::${item.english}`;
}

export function readPhraseProgress(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const parsed = JSON.parse(localStorage.getItem(PHRASE_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function readSkillProgress(): SkillProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const parsed = JSON.parse(localStorage.getItem(SKILL_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}



export function readSpeakingProgress(): SpeakingProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const parsed = JSON.parse(localStorage.getItem(SPEAKING_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function recordSpeakingAttempt(id: string, score: number) {
  if (typeof window === "undefined") return;
  const progress = readSpeakingProgress();
  const current = progress[id] || { attempts: 0, totalScore: 0, bestScore: 0, lastAttempt: 0 };
  progress[id] = {
    attempts: current.attempts + 1,
    totalScore: current.totalScore + score,
    bestScore: Math.max(current.bestScore, score),
    lastAttempt: Date.now(),
  };
  localStorage.setItem(SPEAKING_KEY, JSON.stringify(progress));
  window.dispatchEvent(new Event("marathi-mate-speaking-progress"));
  recordSkillResult("speech-recognition-match", score >= 70, "speaking");
}

export function readConversationProgress(): ConversationProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const parsed = JSON.parse(localStorage.getItem(CONVERSATION_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function recordConversationTurn(slug: string, quality: number) {
  if (typeof window === "undefined") return;
  const progress = readConversationProgress();
  const current = progress[slug] || {
    sessions: 0,
    turns: 0,
    successfulTurns: 0,
    totalQuality: 0,
    lastSession: 0,
  };
  progress[slug] = {
    ...current,
    turns: current.turns + 1,
    successfulTurns: current.successfulTurns + (quality >= 60 ? 1 : 0),
    totalQuality: current.totalQuality + quality,
    lastSession: Date.now(),
  };
  localStorage.setItem(CONVERSATION_KEY, JSON.stringify(progress));
  window.dispatchEvent(new Event("marathi-mate-conversation-progress"));
  recordSkillResult("guided-conversation", quality >= 60, "conversation");
}

export function recordConversationSession(slug: string) {
  if (typeof window === "undefined") return;
  const progress = readConversationProgress();
  const current = progress[slug] || {
    sessions: 0,
    turns: 0,
    successfulTurns: 0,
    totalQuality: 0,
    lastSession: 0,
  };
  progress[slug] = {
    ...current,
    sessions: current.sessions + 1,
    lastSession: Date.now(),
  };
  localStorage.setItem(CONVERSATION_KEY, JSON.stringify(progress));
  window.dispatchEvent(new Event("marathi-mate-conversation-progress"));
}

export function readAssessmentProgress(): AssessmentProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const parsed = JSON.parse(localStorage.getItem(ASSESSMENT_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function recordAssessmentAttempt(
  slug: string,
  result: Omit<AssessmentAttempt, "attempts" | "lastAttempt">
) {
  if (typeof window === "undefined") return;
  const progress = readAssessmentProgress();
  const current = progress[slug];
  progress[slug] = {
    attempts: (current?.attempts || 0) + 1,
    lastAttempt: Date.now(),
    ...result,
  };
  localStorage.setItem(ASSESSMENT_KEY, JSON.stringify(progress));
  window.dispatchEvent(new Event("marathi-mate-assessment-progress"));
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
    intervalLevel: 0,
    dueAt: 0,
  };
  const streak = correct ? current.streak + 1 : 0;
  const spacing = nextDue(correct, streak, current.intervalLevel || 0);

  progress[key] = {
    correct: current.correct + (correct ? 1 : 0),
    incorrect: current.incorrect + (correct ? 0 : 1),
    lastSeen: Date.now(),
    streak,
    ...spacing,
  };

  localStorage.setItem(PHRASE_KEY, JSON.stringify(progress));
  window.dispatchEvent(new Event("marathi-mate-phrase-progress"));
}

export function recordSkillResult(skill: string, correct: boolean, kind: SkillKind) {
  if (typeof window === "undefined" || !skill) return;
  const progress = readSkillProgress();
  const key = `${kind}:${skill}`;
  const current = progress[key] || {
    kind,
    correct: 0,
    incorrect: 0,
    lastSeen: 0,
    streak: 0,
    dueAt: 0,
  };
  const streak = correct ? current.streak + 1 : 0;
  const spacing = nextDue(correct, streak, Math.min(current.streak, 4));

  progress[key] = {
    kind,
    correct: current.correct + (correct ? 1 : 0),
    incorrect: current.incorrect + (correct ? 0 : 1),
    lastSeen: Date.now(),
    streak,
    dueAt: spacing.dueAt,
  };

  localStorage.setItem(SKILL_KEY, JSON.stringify(progress));
  window.dispatchEvent(new Event("marathi-mate-skill-progress"));
}

export function setLastLesson(slug: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LAST_LESSON_KEY, slug);
  window.dispatchEvent(new Event("marathi-mate-last-lesson"));
}

export function readLastLesson() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(LAST_LESSON_KEY);
}

export function weaknessScore(stat?: PhraseStat | SkillStat) {
  if (!stat) return 0;
  return stat.incorrect * 2 - stat.correct - stat.streak;
}

export function needsReview(stat?: PhraseStat | SkillStat) {
  if (!stat) return false;
  const due = !stat.dueAt || stat.dueAt <= Date.now();
  return due && stat.incorrect > 0 && (stat.incorrect >= stat.correct || stat.streak < 2);
}

export function isDue(stat?: PhraseStat | SkillStat) {
  if (!stat) return false;
  return Boolean(stat.dueAt && stat.dueAt <= Date.now());
}
