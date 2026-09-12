import { notFound } from "next/navigation";
import Link from "next/link";
import { getLesson, lessons } from "@/data/lessons";
import LessonFlow from "@/components/LessonFlow";

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = getLesson(params.slug);
  if (!lesson) return notFound();

  return (
    <div>
      <Link href="/" className="text-sm font-medium text-primary">
        ← Learning path
      </Link>

      <div className="mt-5 rounded-2xl border border-black/5 bg-white p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">
          Unit {lesson.unit} · {lesson.unitTitle}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">{lesson.title}</h1>
        <p className="mt-2 text-muted">{lesson.subtitle}</p>
        <div className="mt-5 rounded-xl bg-offwhite p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Goal</p>
          <p className="mt-1 text-sm font-medium text-ink">{lesson.objective}</p>
        </div>
      </div>

      <LessonFlow lesson={lesson} />
    </div>
  );
}
