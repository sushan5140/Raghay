import Link from "next/link";
import ReviewDashboard from "@/components/ReviewDashboard";
import { lessons } from "@/data/lessons";

export default function ReviewPage() {
  const items = lessons.flatMap((lesson) =>
    lesson.items.map((item) => ({
      ...item,
      lessonTitle: lesson.title,
    }))
  );

  return (
    <div>
      <Link href="/" className="text-sm font-medium text-primary">
        ← Learning path
      </Link>
      <div className="mt-5">
        <ReviewDashboard items={items} />
      </div>
    </div>
  );
}
