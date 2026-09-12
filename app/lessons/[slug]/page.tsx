import { notFound } from "next/navigation";
import Link from "next/link";
import { getLesson, lessons } from "@/data/lessons";
import Practice from "@/components/Practice";
import CompleteLessonButton from "@/components/CompleteLessonButton";

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

      <div className="mt-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">Learn the phrases</h2>
            <p className="mt-1 text-sm text-muted">Read the romanization first, then notice the Marathi script.</p>
          </div>
          <span className="text-xs font-medium text-muted">{lesson.items.length} items</span>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {lesson.items.map((item) => (
            <div key={item.marathi} className="rounded-xl border border-black/5 bg-white p-4">
              <p className="font-display text-lg font-semibold text-ink">{item.marathi}</p>
              <p className="mt-1 text-base text-ink/75">{item.devanagari}</p>
              <p className="mt-2 text-sm text-muted">{item.english}</p>
              {item.notes && <p className="mt-2 text-xs leading-5 text-muted">{item.notes}</p>}
            </div>
          ))}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold text-ink">Practice</h2>
        <p className="mt-1 text-sm text-muted">Test yourself without looking at the English meaning first.</p>
        <div className="mt-4">
          <Practice items={lesson.items} />
        </div>
      </section>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-black/5 bg-white p-4">
        <p className="text-sm text-muted">Finished learning and practicing this lesson?</p>
        <CompleteLessonButton slug={lesson.slug} />
      </div>
    </div>
  );
}
