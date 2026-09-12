import Link from "next/link";
import type { Lesson } from "@/data/lessons";

export default function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <Link
      href={`/lessons/${lesson.slug}`}
      className="block rounded-xl border border-black/5 bg-white p-5 transition hover:border-primary/40"
    >
      <p className="font-display text-lg font-semibold text-ink">{lesson.title}</p>
      <p className="mt-1 text-sm text-muted">{lesson.subtitle}</p>
      <p className="mt-3 text-xs font-medium text-primary">{lesson.items.length} words →</p>
    </Link>
  );
}
