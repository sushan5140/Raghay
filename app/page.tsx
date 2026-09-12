import { lessons } from "@/data/lessons";
import LessonCard from "@/components/LessonCard";

export default function HomePage() {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold text-ink">Start learning</h1>
      <p className="mt-2 text-muted">
        Pick a lesson, review the words, then practice with flashcards.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.slug} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
