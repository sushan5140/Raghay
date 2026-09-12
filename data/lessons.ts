export type VocabItem = {
  marathi: string; // romanized
  devanagari: string; // native script, used for accurate TTS pronunciation
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
      { marathi: "Namaskar", devanagari: "नमस्कार", english: "Hello / greetings", notes: "Formal, works any time of day" },
      { marathi: "Kasa aahes? (to a man)", devanagari: "कसा आहेस?", english: "How are you?" },
      { marathi: "Kashi aahes? (to a woman)", devanagari: "कशी आहेस?", english: "How are you?" },
      { marathi: "Mi bara aahe", devanagari: "मी बरा आहे", english: "I am fine" },
      { marathi: "Dhanyavad", devanagari: "धन्यवाद", english: "Thank you" },
      { marathi: "Maaf kara", devanagari: "माफ करा", english: "Sorry / excuse me" },
      { marathi: "Tujhe naav kay aahe?", devanagari: "तुझं नाव काय आहे?", english: "What is your name?" },
      { marathi: "Majhe naav ... aahe", devanagari: "माझं नाव ... आहे", english: "My name is ..." },
      { marathi: "Bhet un aanand zaala", devanagari: "भेटून आनंद झाला", english: "Nice to meet you" },
      { marathi: "Punha bhetu", devanagari: "पुन्हा भेटू", english: "See you again" },
    ],
  },
  {
    slug: "numbers",
    title: "Numbers 1-10",
    subtitle: "Count from one to ten",
    items: [
      { marathi: "Ek", devanagari: "एक", english: "One" },
      { marathi: "Don", devanagari: "दोन", english: "Two" },
      { marathi: "Teen", devanagari: "तीन", english: "Three" },
      { marathi: "Char", devanagari: "चार", english: "Four" },
      { marathi: "Paach", devanagari: "पाच", english: "Five" },
      { marathi: "Saha", devanagari: "सहा", english: "Six" },
      { marathi: "Saat", devanagari: "सात", english: "Seven" },
      { marathi: "Aath", devanagari: "आठ", english: "Eight" },
      { marathi: "Nau", devanagari: "नऊ", english: "Nine" },
      { marathi: "Daha", devanagari: "दहा", english: "Ten" },
    ],
  },
  {
    slug: "family",
    title: "Family",
    subtitle: "Words for family members",
    items: [
      { marathi: "Aai", devanagari: "आई", english: "Mother" },
      { marathi: "Baba / Vadil", devanagari: "बाबा / वडील", english: "Father" },
      { marathi: "Bhau", devanagari: "भाऊ", english: "Brother" },
      { marathi: "Bahin", devanagari: "बहीण", english: "Sister" },
      { marathi: "Aajoba", devanagari: "आजोबा", english: "Grandfather" },
      { marathi: "Aaji", devanagari: "आजी", english: "Grandmother" },
      { marathi: "Mulga", devanagari: "मुलगा", english: "Son" },
      { marathi: "Mulgi", devanagari: "मुलगी", english: "Daughter" },
      { marathi: "Pati", devanagari: "पती", english: "Husband" },
      { marathi: "Patni", devanagari: "पत्नी", english: "Wife" },
    ],
  },
];

export function getLesson(slug: string) {
  return lessons.find((l) => l.slug === slug);
}
