"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "marathi-mate-completed-lessons";

function getCompleted(): string[] {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function CompleteLessonButton({ slug }: { slug: string }) {
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(getCompleted().includes(slug));
  }, [slug]);

  function toggle() {
    const current = getCompleted();
    const next = current.includes(slug)
      ? current.filter((item) => item !== slug)
      : [...current, slug];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setCompleted(!completed);
    window.dispatchEvent(new Event("marathi-mate-progress"));
  }

  return (
    <button
      onClick={toggle}
      className={
        completed
          ? "rounded-lg border border-primary/20 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary"
          : "rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
      }
    >
      {completed ? "✓ Lesson completed" : "Mark lesson complete"}
    </button>
  );
}
