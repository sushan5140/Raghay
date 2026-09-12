import { notFound } from "next/navigation";
import Link from "next/link";
import { getLesson, lessons } from "@/data/lessons";
import Practice from "@/components/Practice";

export function generateStaticParams() {
  return lessons.map((l) => ({ slug: l.slug }));
}

export default function LessonPage({ params }: { params: { slug: string } }) {
  const lesson = getLesson(params.slug);
  if (!lesson) return notFound();

  return (
    <div>
      <Link href="/" className="text-sm text-primary">
        ← All lessons
      </Link>
      <h1 className="mt-3 font-display text-2xl font-semibold text-ink">{lesson.title}</h1>
      <p className="mt-1 text-muted">{lesson.subtitle}</p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {lesson.items.map((item) => (
          <div
            key={item.marathi}
            className="rounded-lg border border-black/5 bg-white p-4"
          >
            <p className="font-medium text-ink">{item.marathi}</p>
            <p className="text-sm text-muted">{item.english}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-10 font-display text-lg font-semibold text-ink">Practice</h2>
      <div className="mt-4">
        <Practice items={lesson.items} />
      </div>
    </div>
  );
}
