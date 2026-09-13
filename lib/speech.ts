"use client";

const audioCache = new Map<string, string>();

export function normalizeMarathi(text: string) {
  return text
    .normalize("NFC")
    .toLowerCase()
    .replace(/[.,!?;:'"“”‘’()[\]{}।॥\-–—]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function bigrams(text: string) {
  const clean = normalizeMarathi(text).replace(/\s/g, "");
  const set = new Set<string>();
  for (let i = 0; i < clean.length - 1; i += 1) set.add(clean.slice(i, i + 2));
  return set;
}

export function recognitionMatch(expected: string, actual: string, keywords: string[] = []) {
  const expectedTokens = new Set(normalizeMarathi(expected).split(" ").filter(Boolean));
  const actualTokens = new Set(normalizeMarathi(actual).split(" ").filter(Boolean));
  const shared = [...expectedTokens].filter((token) => actualTokens.has(token)).length;
  const tokenScore = expectedTokens.size ? shared / expectedTokens.size : 0;

  const expectedBigrams = bigrams(expected);
  const actualBigrams = bigrams(actual);
  const sharedBigrams = [...expectedBigrams].filter((gram) => actualBigrams.has(gram)).length;
  const bigramScore = expectedBigrams.size ? sharedBigrams / expectedBigrams.size : 0;

  const keywordScore = keywords.length
    ? keywords.filter((keyword) => normalizeMarathi(actual).includes(normalizeMarathi(keyword))).length /
      keywords.length
    : tokenScore;

  return Math.max(0, Math.min(100, Math.round((tokenScore * 0.4 + bigramScore * 0.35 + keywordScore * 0.25) * 100)));
}

export function responseQuality(text: string, keywords: string[]) {
  const normalized = normalizeMarathi(text);
  const words = normalized.split(" ").filter(Boolean);
  const keywordHits = keywords.filter((keyword) => normalized.includes(normalizeMarathi(keyword))).length;
  const coverage = keywords.length ? keywordHits / keywords.length : 0;
  const lengthScore = Math.min(1, words.length / 10);
  const devanagariChars = (text.match(/[\u0900-\u097F]/g) || []).length;
  const scriptScore = text.length ? Math.min(1, devanagariChars / Math.max(1, text.replace(/\s/g, "").length) * 1.5) : 0;
  return Math.round((coverage * 0.55 + lengthScore * 0.25 + scriptScore * 0.2) * 100);
}

export function supportsSpeechRecognition() {
  if (typeof window === "undefined") return false;
  const w = window as typeof window & {
    SpeechRecognition?: new () => any;
    webkitSpeechRecognition?: new () => any;
  };
  return Boolean(w.SpeechRecognition || w.webkitSpeechRecognition);
}

export function startMarathiRecognition({
  onResult,
  onInterim,
  onError,
  onEnd,
}: {
  onResult: (text: string) => void;
  onInterim?: (text: string) => void;
  onError?: (message: string) => void;
  onEnd?: () => void;
}) {
  if (typeof window === "undefined") return null;
  const w = window as typeof window & {
    SpeechRecognition?: new () => any;
    webkitSpeechRecognition?: new () => any;
  };
  const Recognition = w.SpeechRecognition || w.webkitSpeechRecognition;
  if (!Recognition) return null;

  const recognition = new Recognition();
  recognition.lang = "mr-IN";
  recognition.interimResults = true;
  recognition.continuous = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event: any) => {
    let finalText = "";
    let interimText = "";
    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const text = event.results[i][0]?.transcript || "";
      if (event.results[i].isFinal) finalText += text;
      else interimText += text;
    }
    if (interimText && onInterim) onInterim(interimText.trim());
    if (finalText.trim()) onResult(finalText.trim());
  };

  recognition.onerror = (event: any) => {
    onError?.(event.error || "Speech recognition failed");
  };
  recognition.onend = () => onEnd?.();
  recognition.start();

  return {
    stop: () => recognition.stop(),
    abort: () => recognition.abort(),
  };
}

export async function playMarathi(text: string, voice: "female" | "male" = "female", rate = 0.86) {
  const voiceName = voice === "male" ? "mr-IN-ManoharNeural" : "mr-IN-AarohiNeural";
  const key = `${voiceName}::${text}`;
  try {
    let url = audioCache.get(key);
    if (!url) {
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, voice: voiceName }),
      });
      if (response.ok) {
        const blob = await response.blob();
        url = URL.createObjectURL(blob);
        audioCache.set(key, url);
      }
    }
    if (url) {
      const audio = new Audio(url);
      await audio.play();
      await new Promise<void>((resolve) => {
        audio.onended = () => resolve();
        audio.onerror = () => resolve();
      });
      return;
    }
  } catch {}

  if ("speechSynthesis" in window) {
    await new Promise<void>((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "mr-IN";
      utterance.rate = rate;
      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    });
  }
}
