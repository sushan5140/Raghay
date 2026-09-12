import { lessons } from "@/data/lessons";
import LearningPath from "@/components/LearningPath";

export default function HomePage() {
  return <LearningPath lessons={lessons} />;
}
