export type VocabItem = {
  marathi: string;
  devanagari: string;
  english: string;
  notes?: string;
};

export type Lesson = {
  slug: string;
  title: string;
  subtitle: string;
  unit: number;
  unitTitle: string;
  objective: string;
  items: VocabItem[];
};

export const lessons: Lesson[] = [
  {
    slug: "greetings",
    title: "Greetings",
    subtitle: "Say hello, thank you, and introduce yourself",
    unit: 1,
    unitTitle: "Start speaking",
    objective: "Handle your first simple Marathi interaction",
    items: [
      { marathi: "Namaskar", devanagari: "नमस्कार", english: "Hello / greetings", notes: "Polite and works in most situations" },
      { marathi: "Kasa aahes?", devanagari: "कसा आहेस?", english: "How are you? (to a man)" },
      { marathi: "Kashi aahes?", devanagari: "कशी आहेस?", english: "How are you? (to a woman)" },
      { marathi: "Mi bara aahe", devanagari: "मी बरा आहे", english: "I am fine (male speaker)" },
      { marathi: "Mi bari aahe", devanagari: "मी बरी आहे", english: "I am fine (female speaker)" },
      { marathi: "Dhanyavaad", devanagari: "धन्यवाद", english: "Thank you" },
      { marathi: "Maaf kara", devanagari: "माफ करा", english: "Sorry / excuse me" },
      { marathi: "Tujha naav kay aahe?", devanagari: "तुझं नाव काय आहे?", english: "What is your name?" },
      { marathi: "Majha naav ... aahe", devanagari: "माझं नाव ... आहे", english: "My name is ..." },
      { marathi: "Bhetun aanand jhala", devanagari: "भेटून आनंद झाला", english: "Nice to meet you" },
    ],
  },
  {
    slug: "everyday-basics",
    title: "Everyday Basics",
    subtitle: "Yes, no, please, okay, and other survival words",
    unit: 1,
    unitTitle: "Start speaking",
    objective: "React naturally in simple everyday situations",
    items: [
      { marathi: "Ho", devanagari: "हो", english: "Yes" },
      { marathi: "Nahi", devanagari: "नाही", english: "No" },
      { marathi: "Kripaya", devanagari: "कृपया", english: "Please" },
      { marathi: "Thik aahe", devanagari: "ठीक आहे", english: "Okay / alright" },
      { marathi: "Chalel", devanagari: "चालेल", english: "That works / okay" },
      { marathi: "Thamba", devanagari: "थांबा", english: "Wait / stop", notes: "Polite or plural form" },
      { marathi: "Ya", devanagari: "या", english: "Come" },
      { marathi: "Chala", devanagari: "चला", english: "Let's go / come on" },
      { marathi: "Punha sanga", devanagari: "पुन्हा सांगा", english: "Please say it again" },
      { marathi: "Samajla nahi", devanagari: "समजलं नाही", english: "I didn't understand" },
    ],
  },
  {
    slug: "numbers",
    title: "Numbers 1–10",
    subtitle: "Count from one to ten",
    unit: 2,
    unitTitle: "Build your basics",
    objective: "Recognize and say the first ten Marathi numbers",
    items: [
      { marathi: "Ek", devanagari: "एक", english: "One" },
      { marathi: "Don", devanagari: "दोन", english: "Two" },
      { marathi: "Teen", devanagari: "तीन", english: "Three" },
      { marathi: "Chaar", devanagari: "चार", english: "Four" },
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
    subtitle: "Talk about close family members",
    unit: 2,
    unitTitle: "Build your basics",
    objective: "Name common family relationships",
    items: [
      { marathi: "Aai", devanagari: "आई", english: "Mother" },
      { marathi: "Baba / Vadil", devanagari: "बाबा / वडील", english: "Father" },
      { marathi: "Bhau", devanagari: "भाऊ", english: "Brother" },
      { marathi: "Bahin", devanagari: "बहीण", english: "Sister" },
      { marathi: "Aajoba", devanagari: "आजोबा", english: "Grandfather" },
      { marathi: "Aaji", devanagari: "आजी", english: "Grandmother" },
      { marathi: "Mulga", devanagari: "मुलगा", english: "Son / boy" },
      { marathi: "Mulgi", devanagari: "मुलगी", english: "Daughter / girl" },
      { marathi: "Pati", devanagari: "पती", english: "Husband" },
      { marathi: "Patni", devanagari: "पत्नी", english: "Wife" },
    ],
  },
  {
    slug: "question-words",
    title: "Question Words",
    subtitle: "Ask who, what, where, when, and why",
    unit: 3,
    unitTitle: "Make real sentences",
    objective: "Understand the building blocks of common questions",
    items: [
      { marathi: "Kay?", devanagari: "काय?", english: "What?" },
      { marathi: "Kon?", devanagari: "कोण?", english: "Who?" },
      { marathi: "Kuthe?", devanagari: "कुठे?", english: "Where?" },
      { marathi: "Kadhi?", devanagari: "कधी?", english: "When?" },
      { marathi: "Ka?", devanagari: "का?", english: "Why?" },
      { marathi: "Kasa?", devanagari: "कसा?", english: "How? (masculine context)" },
      { marathi: "Kiti?", devanagari: "किती?", english: "How much / how many?" },
      { marathi: "Kontaa?", devanagari: "कोणता?", english: "Which? (masculine)" },
    ],
  },
  {
    slug: "useful-sentences",
    title: "Useful Sentences",
    subtitle: "Put your first Marathi phrases together",
    unit: 3,
    unitTitle: "Make real sentences",
    objective: "Use short practical sentences outside the app",
    items: [
      { marathi: "Mala Marathi thodi yete", devanagari: "मला मराठी थोडी येते", english: "I know a little Marathi" },
      { marathi: "Mala mahit nahi", devanagari: "मला माहित नाही", english: "I don't know" },
      { marathi: "Mala he pahije", devanagari: "मला हे पाहिजे", english: "I want this" },
      { marathi: "He kiti aahe?", devanagari: "हे किती आहे?", english: "How much is this?" },
      { marathi: "Tumhi Marathi bolta ka?", devanagari: "तुम्ही मराठी बोलता का?", english: "Do you speak Marathi?" },
      { marathi: "Halu bola", devanagari: "हळू बोला", english: "Please speak slowly" },
      { marathi: "He kuthe aahe?", devanagari: "हे कुठे आहे?", english: "Where is this?" },
      { marathi: "Mala madat kara", devanagari: "मला मदत करा", english: "Please help me" },
      { marathi: "Mi shikat aahe", devanagari: "मी शिकत आहे", english: "I am learning" },
      { marathi: "Punha bhetu", devanagari: "पुन्हा भेटू", english: "See you again" },
    ],
  },
];

export function getLesson(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}
