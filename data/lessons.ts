export type VocabItem = {
  marathi: string;
  devanagari: string;
  english: string;
  notes?: string;
};

export type TeachingPoint = {
  title: string;
  explanation: string;
  examples: { marathi: string; devanagari: string; english: string }[];
};

export type QuickCheck = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type Lesson = {
  slug: string;
  title: string;
  subtitle: string;
  unit: number;
  unitTitle: string;
  objective: string;
  teaching?: TeachingPoint[];
  checks?: QuickCheck[];
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
    teaching: [
      {
        title: "Mi means “I”",
        explanation: "A very common beginner pattern is Mi + description + aahe. Aahe works like “am / is” in many simple sentences.",
        examples: [
          { marathi: "Mi bara aahe", devanagari: "मी बरा आहे", english: "I am fine (male speaker)" },
          { marathi: "Mi bari aahe", devanagari: "मी बरी आहे", english: "I am fine (female speaker)" },
        ],
      },
      {
        title: "Some forms change with gender",
        explanation: "Words such as bara / bari and kasa / kashi can change depending on gender. You do not need to memorize every rule yet — just start noticing the pattern.",
        examples: [
          { marathi: "Kasa aahes?", devanagari: "कसा आहेस?", english: "How are you? (to a man)" },
          { marathi: "Kashi aahes?", devanagari: "कशी आहेस?", english: "How are you? (to a woman)" },
        ],
      },
    ],
    checks: [
      {
        question: "Which phrase means “My name is ...”?",
        options: ["Majha naav ... aahe", "Maaf kara", "Punha bhetu"],
        answer: 0,
        explanation: "Majha naav ... aahe means “My name is ...”.",
      },
      {
        question: "Which form would you use for “How are you?” when speaking to a woman?",
        options: ["Kasa aahes?", "Kashi aahes?", "Mi bari aahe"],
        answer: 1,
        explanation: "Kashi aahes? is the feminine form used here.",
      },
    ],
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
    teaching: [
      {
        title: "Polite forms matter",
        explanation: "Marathi often uses respectful verb forms with strangers, elders, or groups. Forms such as sanga, thamba, and bola are useful polite forms to learn as complete phrases.",
        examples: [
          { marathi: "Punha sanga", devanagari: "पुन्हा सांगा", english: "Please say it again" },
          { marathi: "Thamba", devanagari: "थांबा", english: "Please wait / stop" },
        ],
      },
      {
        title: "Nahi makes things negative",
        explanation: "Nahi means “no / not” and appears in many beginner sentences.",
        examples: [
          { marathi: "Nahi", devanagari: "नाही", english: "No" },
          { marathi: "Samajla nahi", devanagari: "समजलं नाही", english: "I did not understand" },
        ],
      },
    ],
    checks: [
      {
        question: "You did not understand something. What should you say?",
        options: ["Samajla nahi", "Chalel", "Ho"],
        answer: 0,
        explanation: "Samajla nahi means “I didn’t understand.”",
      },
      {
        question: "Which phrase asks someone to repeat what they said?",
        options: ["Punha sanga", "Thik aahe", "Chala"],
        answer: 0,
        explanation: "Punha sanga means “Please say it again.”",
      },
    ],
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
    teaching: [
      {
        title: "Learn numbers by sound first",
        explanation: "For now, focus on hearing and saying the number correctly. Marathi numbers become especially useful later for prices, time, age, and quantities.",
        examples: [
          { marathi: "Ek", devanagari: "एक", english: "One" },
          { marathi: "Daha", devanagari: "दहा", english: "Ten" },
        ],
      },
    ],
    checks: [
      {
        question: "Which Marathi number means “five”?",
        options: ["Paach", "Saat", "Don"],
        answer: 0,
        explanation: "Paach means five.",
      },
      {
        question: "What comes after Aath?",
        options: ["Saat", "Nau", "Daha"],
        answer: 1,
        explanation: "Aath is eight, so Nau is nine.",
      },
    ],
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
    teaching: [
      {
        title: "Family words appear constantly",
        explanation: "Many Marathi conversations use relationship words directly. Learning these early makes introductions and everyday conversation much easier.",
        examples: [
          { marathi: "Aai", devanagari: "आई", english: "Mother" },
          { marathi: "Bhau", devanagari: "भाऊ", english: "Brother" },
        ],
      },
    ],
    checks: [
      {
        question: "What does Aaji mean?",
        options: ["Mother", "Grandmother", "Sister"],
        answer: 1,
        explanation: "Aaji means grandmother.",
      },
      {
        question: "Which word means brother?",
        options: ["Bhau", "Bahin", "Mulgi"],
        answer: 0,
        explanation: "Bhau means brother.",
      },
    ],
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
    teaching: [
      {
        title: "Question words can slot into simple sentences",
        explanation: "Once you know words like kay, kuthe, and kiti, you can recognize the purpose of many questions even before you understand every word.",
        examples: [
          { marathi: "He kay aahe?", devanagari: "हे काय आहे?", english: "What is this?" },
          { marathi: "He kuthe aahe?", devanagari: "हे कुठे आहे?", english: "Where is this?" },
        ],
      },
      {
        title: "Ka can also mark a yes/no question",
        explanation: "At the end of some sentences, ka can turn a statement into a yes/no question.",
        examples: [
          { marathi: "Tumhi Marathi bolta ka?", devanagari: "तुम्ही मराठी बोलता का?", english: "Do you speak Marathi?" },
        ],
      },
    ],
    checks: [
      {
        question: "Which word means “where”?",
        options: ["Kay", "Kuthe", "Kadhi"],
        answer: 1,
        explanation: "Kuthe means where.",
      },
      {
        question: "Which word asks “how much / how many”?",
        options: ["Kiti", "Kon", "Ka"],
        answer: 0,
        explanation: "Kiti is used for how much or how many.",
      },
    ],
    items: [
      { marathi: "Kay?", devanagari: "काय?", english: "What?" },
      { marathi: "Kon?", devanagari: "कोण?", english: "Who?" },
      { marathi: "Kuthe?", devanagari: "कुठे?", english: "Where?" },
      { marathi: "Kadhi?", devanagari: "कधी?", english: "When?" },
      { marathi: "Ka?", devanagari: "का?", english: "Why? / question marker" },
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
    teaching: [
      {
        title: "Mala is a high-value word",
        explanation: "Mala literally works like “to me” and appears in many everyday expressions. For beginners, it is best learned through full useful patterns.",
        examples: [
          { marathi: "Mala he pahije", devanagari: "मला हे पाहिजे", english: "I want this" },
          { marathi: "Mala mahit nahi", devanagari: "मला माहित नाही", english: "I don't know" },
          { marathi: "Mala madat kara", devanagari: "मला मदत करा", english: "Please help me" },
        ],
      },
      {
        title: "He means “this / it” in these patterns",
        explanation: "You will often see he in simple beginner phrases when referring to something nearby or already being discussed.",
        examples: [
          { marathi: "He kiti aahe?", devanagari: "हे किती आहे?", english: "How much is this?" },
          { marathi: "He kuthe aahe?", devanagari: "हे कुठे आहे?", english: "Where is this?" },
        ],
      },
    ],
    checks: [
      {
        question: "How do you say “I want this”?",
        options: ["Mala he pahije", "Mi shikat aahe", "He kuthe aahe?"],
        answer: 0,
        explanation: "Mala he pahije means “I want this.”",
      },
      {
        question: "Which phrase asks someone to speak slowly?",
        options: ["Halu bola", "Punha bhetu", "Mala mahit nahi"],
        answer: 0,
        explanation: "Halu bola means “Please speak slowly.”",
      },
    ],
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
