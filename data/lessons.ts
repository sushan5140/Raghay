export type VocabItem = {
  marathi: string; // romanized
  english: string;
  notes?: string;
};

export type Lesson = {
  slug: string;
  title: string;
  subtitle: string;
  items: VocabItem[];
};

export const lessons: Lesson[] = [
  {
    slug: "greetings",
    title: "Greetings",
    subtitle: "Say hello, thank you, and introduce yourself",
    items: [
      { marathi: "Namaskar", english: "Hello / greetings", notes: "Formal, works any time of day" },
      { marathi: "Kasa aahes? (to a man)", english: "How are you?" },
      { marathi: "Kashi aahes? (to a woman)", english: "How are you?" },
      { marathi: "Mi bara aahe", english: "I am fine" },
      { marathi: "Dhanyavad", english: "Thank you" },
      { marathi: "Maaf kara", english: "Sorry / excuse me" },
      { marathi: "Tujhe naav kay aahe?", english: "What is your name?" },
      { marathi: "Majhe naav ... aahe", english: "My name is ..." },
      { marathi: "Bhet un aanand zaala", english: "Nice to meet you" },
      { marathi: "Punha bhetu", english: "See you again" },
    ],
  },
  {
    slug: "numbers",
    title: "Numbers 1-10",
    subtitle: "Count from one to ten",
    items: [
      { marathi: "Ek", english: "One" },
      { marathi: "Don", english: "Two" },
      { marathi: "Teen", english: "Three" },
      { marathi: "Char", english: "Four" },
      { marathi: "Paach", english: "Five" },
      { marathi: "Saha", english: "Six" },
      { marathi: "Saat", english: "Seven" },
      { marathi: "Aath", english: "Eight" },
      { marathi: "Nau", english: "Nine" },
      { marathi: "Daha", english: "Ten" },
    ],
  },
  {
    slug: "family",
    title: "Family",
    subtitle: "Words for family members",
    items: [
      { marathi: "Aai", english: "Mother" },
      { marathi: "Baba / Vadil", english: "Father" },
      { marathi: "Bhau", english: "Brother" },
      { marathi: "Bahin", english: "Sister" },
      { marathi: "Aajoba", english: "Grandfather" },
      { marathi: "Aaji", english: "Grandmother" },
      { marathi: "Mulga", english: "Son" },
      { marathi: "Mulgi", english: "Daughter" },
      { marathi: "Pati", english: "Husband" },
      { marathi: "Patni", english: "Wife" },
    ],
  },
];

export function getLesson(slug: string) {
  return lessons.find((l) => l.slug === slug);
}
