import Link from "next/link";
import { notFound } from "next/navigation";
import { assessments, getAssessment } from "@/data/assessments";
import AssessmentRunner from "@/components/AssessmentRunner";

export function generateStaticParams() {
  return assessments.map((assessment) => ({ slug: assessment.slug }));
}

export default function CheckpointPage({ params }: { params: { slug: string } }) {
  const assessment = getAssessment(params.slug);
  if (!assessment) return notFound();

  return (
    <div>
      <Link href="/" className="text-sm font-medium text-primary">← Learning path</Link>
      <section className="mt-5 rounded-2xl border border-black/5 bg-white p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
          {assessment.final ? "Final intermediate assessment" : "Course checkpoint"}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold text-ink">{assessment.title}</h1>
        <p className="mt-2 text-muted">{assessment.subtitle}</p>
      </section>
      <div className="mt-6">
        <AssessmentRunner assessment={assessment} />
      </div>
    </div>
  );
}
