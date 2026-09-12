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

export type IntermediateMaterial = {
  title: string;
  marathi: string;
  devanagari: string;
  english: string;
  questions: QuickCheck[];
  productionPrompt: string;
  support: string[];
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
  intermediate?: IntermediateMaterial;
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
  {
    slug: "devanagari-basics",
    title: "Devanagari Basics",
    subtitle: "Start recognizing Marathi script through words you already know",
    unit: 4,
    unitTitle: "Read & relate",
    objective: "Recognize common Marathi letters and familiar words without depending only on romanization",
    teaching: [
      {
        title: "Read familiar words first",
        explanation: "Instead of memorizing the whole alphabet at once, connect shapes to words you already know. This makes the script feel useful immediately.",
        examples: [
          { marathi: "Aai", devanagari: "आई", english: "Mother" },
          { marathi: "Namaskar", devanagari: "नमस्कार", english: "Hello" },
          { marathi: "Nahi", devanagari: "नाही", english: "No / not" }
        ]
      },
      {
        title: "Notice repeating sounds",
        explanation: "Marathi Devanagari combines consonants and vowel marks. For now, notice repeated sound-shape links rather than trying to master every rule.",
        examples: [
          { marathi: "ma", devanagari: "म", english: "m sound" },
          { marathi: "na", devanagari: "न", english: "n sound" },
          { marathi: "aa", devanagari: "ा", english: "long aa vowel mark" }
        ]
      }
    ],
    checks: [
      {
        question: "Which script form matches Namaskar?",
        options: ["नमस्कार", "नाही", "आई"],
        answer: 0,
        explanation: "नमस्कार is Namaskar."
      },
      {
        question: "Which familiar word is written आई?",
        options: ["Aai", "Aaji", "Bahin"],
        answer: 0,
        explanation: "आई is Aai, meaning mother."
      }
    ],
    items: [
      { marathi: "Namaskar", devanagari: "नमस्कार", english: "Hello / greetings" },
      { marathi: "Aai", devanagari: "आई", english: "Mother" },
      { marathi: "Nahi", devanagari: "नाही", english: "No / not" },
      { marathi: "Ho", devanagari: "हो", english: "Yes" },
      { marathi: "Kay", devanagari: "काय", english: "What" },
      { marathi: "Kuthe", devanagari: "कुठे", english: "Where" },
      { marathi: "Paani", devanagari: "पाणी", english: "Water" },
      { marathi: "Ghar", devanagari: "घर", english: "Home / house" }
    ]
  },
  {
    slug: "pronouns-respect",
    title: "Pronouns & Respect",
    subtitle: "Use I, you, we, and respectful forms naturally",
    unit: 4,
    unitTitle: "Read & relate",
    objective: "Choose basic pronouns and recognize respectful address",
    teaching: [
      {
        title: "Tu and tumhi are not the same",
        explanation: "Tu is informal singular 'you'. Tumhi is respectful singular or plural 'you' and is safer with strangers and elders.",
        examples: [
          { marathi: "Tu kasa aahes?", devanagari: "तू कसा आहेस?", english: "How are you? (informal, to a man)" },
          { marathi: "Tumhi kase aahat?", devanagari: "तुम्ही कसे आहात?", english: "How are you? (respectful / plural)" }
        ]
      },
      {
        title: "Core pronouns",
        explanation: "Mi means I, aamhi means we, and te can mean they in many contexts. Learn these as anchors for later verb patterns.",
        examples: [
          { marathi: "Mi", devanagari: "मी", english: "I" },
          { marathi: "Aamhi", devanagari: "आम्ही", english: "We" },
          { marathi: "Tumhi", devanagari: "तुम्ही", english: "You (respectful / plural)" }
        ]
      }
    ],
    checks: [
      {
        question: "Which form is safer with an elder or stranger?",
        options: ["Tu", "Tumhi", "Mi"],
        answer: 1,
        explanation: "Tumhi is the respectful form."
      },
      {
        question: "What does Aamhi mean?",
        options: ["We", "They", "You"],
        answer: 0,
        explanation: "Aamhi means we."
      }
    ],
    items: [
      { marathi: "Mi", devanagari: "मी", english: "I" },
      { marathi: "Tu", devanagari: "तू", english: "You (informal singular)" },
      { marathi: "Tumhi", devanagari: "तुम्ही", english: "You (respectful / plural)" },
      { marathi: "Aamhi", devanagari: "आम्ही", english: "We" },
      { marathi: "To", devanagari: "तो", english: "He / that (masculine)" },
      { marathi: "Ti", devanagari: "ती", english: "She / that (feminine)" },
      { marathi: "Te", devanagari: "ते", english: "They / that (neuter or plural, context dependent)" },
      { marathi: "Tumhi kase aahat?", devanagari: "तुम्ही कसे आहात?", english: "How are you? (respectful / plural)" }
    ]
  },
  {
    slug: "possession",
    title: "Possession",
    subtitle: "Say my, your, and talk about things that belong to people",
    unit: 4,
    unitTitle: "Read & relate",
    objective: "Recognize common possessive patterns in simple conversation",
    teaching: [
      {
        title: "Possessives can change form",
        explanation: "Marathi possessives often change to match the noun. At this stage, learn common whole phrases first.",
        examples: [
          { marathi: "Majha bhau", devanagari: "माझा भाऊ", english: "My brother" },
          { marathi: "Majhi bahin", devanagari: "माझी बहीण", english: "My sister" },
          { marathi: "Majhe ghar", devanagari: "माझं घर", english: "My house" }
        ]
      }
    ],
    checks: [
      {
        question: "Which phrase means 'my sister'?",
        options: ["Majhi bahin", "Majha bhau", "Tujhe ghar"],
        answer: 0,
        explanation: "Majhi bahin means my sister."
      },
      {
        question: "Which phrase means 'my house'?",
        options: ["Majhe ghar", "Majha bhau", "Majhi aai"],
        answer: 0,
        explanation: "Majhe ghar means my house."
      }
    ],
    items: [
      { marathi: "Majha bhau", devanagari: "माझा भाऊ", english: "My brother" },
      { marathi: "Majhi bahin", devanagari: "माझी बहीण", english: "My sister" },
      { marathi: "Majhe ghar", devanagari: "माझं घर", english: "My house" },
      { marathi: "Tujha mitra", devanagari: "तुझा मित्र", english: "Your friend (male)" },
      { marathi: "Tujhi maitrin", devanagari: "तुझी मैत्रीण", english: "Your friend (female)" },
      { marathi: "Tumcha naav", devanagari: "तुमचं नाव", english: "Your name (respectful)" },
      { marathi: "He majhe aahe", devanagari: "हे माझं आहे", english: "This is mine" },
      { marathi: "He tumche aahe ka?", devanagari: "हे तुमचं आहे का?", english: "Is this yours?" }
    ]
  },
  {
    slug: "places-location",
    title: "Places & Location",
    subtitle: "Say where things are and understand simple location phrases",
    unit: 5,
    unitTitle: "Everyday life",
    objective: "Describe basic locations using common Marathi place words",
    teaching: [
      {
        title: "Aahe often closes a location sentence",
        explanation: "A useful beginner pattern is place or thing + location phrase + aahe.",
        examples: [
          { marathi: "Ghar ithe aahe", devanagari: "घर इथे आहे", english: "The house is here" },
          { marathi: "Station tithe aahe", devanagari: "स्टेशन तिथे आहे", english: "The station is there" }
        ]
      },
      {
        title: "High-value location words",
        explanation: "Ithe means here, tithe means there, aat means inside, and baaher means outside.",
        examples: [
          { marathi: "Ithe", devanagari: "इथे", english: "Here" },
          { marathi: "Tithe", devanagari: "तिथे", english: "There" }
        ]
      }
    ],
    checks: [
      {
        question: "What does Ithe mean?",
        options: ["Here", "There", "Outside"],
        answer: 0,
        explanation: "Ithe means here."
      },
      {
        question: "Which phrase means 'The station is there'?",
        options: ["Station tithe aahe", "Station ithe aahe", "Station kuthe aahe?"],
        answer: 0,
        explanation: "Station tithe aahe means the station is there."
      }
    ],
    items: [
      { marathi: "Ithe", devanagari: "इथे", english: "Here" },
      { marathi: "Tithe", devanagari: "तिथे", english: "There" },
      { marathi: "Aat", devanagari: "आत", english: "Inside" },
      { marathi: "Baaher", devanagari: "बाहेर", english: "Outside" },
      { marathi: "Ghar", devanagari: "घर", english: "House / home" },
      { marathi: "Dukaan", devanagari: "दुकान", english: "Shop" },
      { marathi: "Station kuthe aahe?", devanagari: "स्टेशन कुठे आहे?", english: "Where is the station?" },
      { marathi: "Ghar ithe aahe", devanagari: "घर इथे आहे", english: "The house is here" }
    ]
  },
  {
    slug: "daily-routine",
    title: "Daily Routine",
    subtitle: "Talk about common actions in your day",
    unit: 5,
    unitTitle: "Everyday life",
    objective: "Recognize common verbs and present-progressive patterns",
    teaching: [
      {
        title: "The -at aahe pattern",
        explanation: "Many present-progressive phrases use a verb form plus aahe. Learn them as chunks before studying full conjugation tables.",
        examples: [
          { marathi: "Mi khat aahe", devanagari: "मी खात आहे", english: "I am eating" },
          { marathi: "Mi shikat aahe", devanagari: "मी शिकत आहे", english: "I am learning" },
          { marathi: "Mi jaat aahe", devanagari: "मी जात आहे", english: "I am going" }
        ]
      }
    ],
    checks: [
      {
        question: "Which phrase means 'I am going'?",
        options: ["Mi jaat aahe", "Mi khat aahe", "Mi zhopat aahe"],
        answer: 0,
        explanation: "Mi jaat aahe means I am going."
      },
      {
        question: "Which word is connected with learning?",
        options: ["Shikat", "Khat", "Zhopat"],
        answer: 0,
        explanation: "Shikat appears in the phrase for 'am learning'."
      }
    ],
    items: [
      { marathi: "Mi uthto / uthte", devanagari: "मी उठतो / उठते", english: "I get up (male / female)" },
      { marathi: "Mi khat aahe", devanagari: "मी खात आहे", english: "I am eating" },
      { marathi: "Mi pit aahe", devanagari: "मी पीत आहे", english: "I am drinking" },
      { marathi: "Mi jaat aahe", devanagari: "मी जात आहे", english: "I am going" },
      { marathi: "Mi yet aahe", devanagari: "मी येत आहे", english: "I am coming" },
      { marathi: "Mi shikat aahe", devanagari: "मी शिकत आहे", english: "I am learning" },
      { marathi: "Mi kaam karat aahe", devanagari: "मी काम करत आहे", english: "I am working" },
      { marathi: "Mi zhopat aahe", devanagari: "मी झोपत आहे", english: "I am sleeping" }
    ]
  },
  {
    slug: "time-plans",
    title: "Time & Plans",
    subtitle: "Talk about today, tomorrow, and simple plans",
    unit: 5,
    unitTitle: "Everyday life",
    objective: "Use basic time words and understand simple future-oriented phrases",
    teaching: [
      {
        title: "Time words carry a lot of meaning",
        explanation: "Aaj, udya, and kaal are extremely common. Context helps distinguish kaal as yesterday or tomorrow in some usage, so beginners should listen to the full sentence.",
        examples: [
          { marathi: "Aaj", devanagari: "आज", english: "Today" },
          { marathi: "Udya", devanagari: "उद्या", english: "Tomorrow" },
          { marathi: "Aata", devanagari: "आता", english: "Now" }
        ]
      },
      {
        title: "Simple future awareness",
        explanation: "You will hear forms like jaeen (I will go) and yeen (I will come). For now, recognize them as future forms.",
        examples: [
          { marathi: "Mi udya jaeen", devanagari: "मी उद्या जाईन", english: "I will go tomorrow" },
          { marathi: "Mi nantar yeen", devanagari: "मी नंतर येईन", english: "I will come later" }
        ]
      }
    ],
    checks: [
      {
        question: "What does Udya mean?",
        options: ["Tomorrow", "Today", "Now"],
        answer: 0,
        explanation: "Udya means tomorrow."
      },
      {
        question: "Which phrase is future-oriented?",
        options: ["Mi udya jaeen", "Mi jaat aahe", "Mi khat aahe"],
        answer: 0,
        explanation: "Mi udya jaeen means I will go tomorrow."
      }
    ],
    items: [
      { marathi: "Aaj", devanagari: "आज", english: "Today" },
      { marathi: "Udya", devanagari: "उद्या", english: "Tomorrow" },
      { marathi: "Aata", devanagari: "आता", english: "Now" },
      { marathi: "Nantar", devanagari: "नंतर", english: "Later / after" },
      { marathi: "Sakali", devanagari: "सकाळी", english: "In the morning" },
      { marathi: "Sandhyakali", devanagari: "संध्याकाळी", english: "In the evening" },
      { marathi: "Mi udya jaeen", devanagari: "मी उद्या जाईन", english: "I will go tomorrow" },
      { marathi: "Mi nantar yeen", devanagari: "मी नंतर येईन", english: "I will come later" }
    ]
  },
  {
    slug: "food-ordering",
    title: "Food & Ordering",
    subtitle: "Order simple food and drinks politely",
    unit: 6,
    unitTitle: "Real-world Marathi",
    objective: "Handle a basic food or café interaction",
    teaching: [
      {
        title: "Mala ... pahije is a powerful request pattern",
        explanation: "Use Mala + item + pahije for 'I want ...'. It is one of the most useful beginner structures in shops and food settings.",
        examples: [
          { marathi: "Mala paani pahije", devanagari: "मला पाणी पाहिजे", english: "I want water" },
          { marathi: "Mala chaha pahije", devanagari: "मला चहा पाहिजे", english: "I want tea" }
        ]
      }
    ],
    checks: [
      {
        question: "How do you say 'I want water'?",
        options: ["Mala paani pahije", "Paani kuthe aahe?", "Paani nahi"],
        answer: 0,
        explanation: "Mala paani pahije means I want water."
      },
      {
        question: "Which word means tea?",
        options: ["Chaha", "Paani", "Jevan"],
        answer: 0,
        explanation: "Chaha means tea."
      }
    ],
    items: [
      { marathi: "Paani", devanagari: "पाणी", english: "Water" },
      { marathi: "Chaha", devanagari: "चहा", english: "Tea" },
      { marathi: "Jevan", devanagari: "जेवण", english: "Meal / food" },
      { marathi: "Mala paani pahije", devanagari: "मला पाणी पाहिजे", english: "I want water" },
      { marathi: "Mala chaha pahije", devanagari: "मला चहा पाहिजे", english: "I want tea" },
      { marathi: "Tikhat nako", devanagari: "तिखट नको", english: "Not spicy / I do not want it spicy" },
      { marathi: "Khup chhaan aahe", devanagari: "खूप छान आहे", english: "It is very good" },
      { marathi: "Bill dya", devanagari: "बिल द्या", english: "Please give the bill" }
    ]
  },
  {
    slug: "shopping-prices",
    title: "Shopping & Prices",
    subtitle: "Ask prices, quantities, and make simple purchases",
    unit: 6,
    unitTitle: "Real-world Marathi",
    objective: "Manage a basic shopping interaction",
    teaching: [
      {
        title: "Kiti is your price-and-quantity word",
        explanation: "Kiti asks how much or how many. Pair it with aahe for many simple price questions.",
        examples: [
          { marathi: "He kiti aahe?", devanagari: "हे किती आहे?", english: "How much is this?" },
          { marathi: "Kiti pahije?", devanagari: "किती पाहिजे?", english: "How much / how many do you want?" }
        ]
      }
    ],
    checks: [
      {
        question: "Which phrase asks the price of something?",
        options: ["He kiti aahe?", "He kuthe aahe?", "He majhe aahe"],
        answer: 0,
        explanation: "He kiti aahe? asks how much this is."
      },
      {
        question: "What does Swasta mean?",
        options: ["Cheap / inexpensive", "Expensive", "Large"],
        answer: 0,
        explanation: "Swasta means inexpensive."
      }
    ],
    items: [
      { marathi: "He kiti aahe?", devanagari: "हे किती आहे?", english: "How much is this?" },
      { marathi: "Khup mahag aahe", devanagari: "खूप महाग आहे", english: "It is very expensive" },
      { marathi: "Swasta aahe", devanagari: "स्वस्त आहे", english: "It is inexpensive" },
      { marathi: "Ek dya", devanagari: "एक द्या", english: "Please give me one" },
      { marathi: "Don dya", devanagari: "दोन द्या", english: "Please give me two" },
      { marathi: "Mala he pahije", devanagari: "मला हे पाहिजे", english: "I want this" },
      { marathi: "Dusra aahe ka?", devanagari: "दुसरा आहे का?", english: "Is there another one?" },
      { marathi: "Bas, dhanyavaad", devanagari: "बस, धन्यवाद", english: "That's enough, thank you" }
    ]
  },
  {
    slug: "directions-travel",
    title: "Directions & Travel",
    subtitle: "Ask where to go and understand basic directions",
    unit: 6,
    unitTitle: "Real-world Marathi",
    objective: "Navigate a simple travel or street interaction",
    teaching: [
      {
        title: "Direction words work well as chunks",
        explanation: "Learn saral, davikade, ujvikade, and javal as practical navigation chunks before worrying about deeper grammar.",
        examples: [
          { marathi: "Saral ja", devanagari: "सरळ जा", english: "Go straight" },
          { marathi: "Davikade vala", devanagari: "डावीकडे वळा", english: "Turn left" },
          { marathi: "Ujvikade vala", devanagari: "उजवीकडे वळा", english: "Turn right" }
        ]
      }
    ],
    checks: [
      {
        question: "Which phrase means 'Go straight'?",
        options: ["Saral ja", "Davikade vala", "Ithe thamba"],
        answer: 0,
        explanation: "Saral ja means go straight."
      },
      {
        question: "What does Javal mean?",
        options: ["Near", "Far", "Inside"],
        answer: 0,
        explanation: "Javal means near."
      }
    ],
    items: [
      { marathi: "Saral ja", devanagari: "सरळ जा", english: "Go straight" },
      { marathi: "Davikade vala", devanagari: "डावीकडे वळा", english: "Turn left" },
      { marathi: "Ujvikade vala", devanagari: "उजवीकडे वळा", english: "Turn right" },
      { marathi: "Javal", devanagari: "जवळ", english: "Near" },
      { marathi: "Door", devanagari: "दूर", english: "Far" },
      { marathi: "Bus stop kuthe aahe?", devanagari: "बस स्टॉप कुठे आहे?", english: "Where is the bus stop?" },
      { marathi: "Ithe thamba", devanagari: "इथे थांबा", english: "Stop here" },
      { marathi: "Mala tithe jaycha aahe", devanagari: "मला तिथे जायचं आहे", english: "I want / need to go there" }
    ]
  },
  {
    slug: "past-events",
    title: "Talking About the Past",
    subtitle: "Understand and describe simple completed events",
    unit: 7,
    unitTitle: "Control time",
    objective: "Recognize common past-time patterns and describe what happened",
    teaching: [
      {
        title: "Completed actions often change form",
        explanation: "Marathi past forms can change with gender and sentence structure. At this stage, focus on high-frequency complete sentences and notice the endings rather than memorizing a full table.",
        examples: [
          { marathi: "Mi ghari gelo", devanagari: "मी घरी गेलो", english: "I went home (male speaker)" },
          { marathi: "Mi ghari gele", devanagari: "मी घरी गेले", english: "I went home (female speaker)" },
          { marathi: "Mi jevlo", devanagari: "मी जेवलो", english: "I ate / had a meal (male speaker)" }
        ]
      },
      {
        title: "Time words anchor the event",
        explanation: "Words such as kaal and sakali make it easier to understand when an action happened, even if the verb form is still new.",
        examples: [
          { marathi: "Kaal", devanagari: "काल", english: "Yesterday / past-time word by context" },
          { marathi: "Kal sakali", devanagari: "काल सकाळी", english: "Yesterday morning" }
        ]
      }
    ],
    checks: [
      {
        question: "Which sentence clearly describes a completed past action?",
        options: ["Mi ghari gelo", "Mi ghari jaat aahe", "Mi ghari jaeen"],
        answer: 0,
        explanation: "Mi ghari gelo means 'I went home' for a male speaker."
      },
      {
        question: "Which phrase means 'yesterday morning'?",
        options: ["Kal sakali", "Aaj sakali", "Udya sakali"],
        answer: 0,
        explanation: "Kal sakali means yesterday morning."
      }
    ],
    intermediate: {
      title: "A short day recap",
      marathi: "Kal mi lavkar uthlo. Sakali mi chaha pyalo ani nantar college-la gelo. Sandhyakali mi mitrala bhetlo. Ratri mi ghari alo ani abhyas kela.",
      devanagari: "काल मी लवकर उठलो. सकाळी मी चहा प्यायलो आणि नंतर कॉलेजला गेलो. संध्याकाळी मी मित्राला भेटलो. रात्री मी घरी आलो आणि अभ्यास केला.",
      english: "Yesterday I got up early. In the morning I drank tea and then went to college. In the evening I met a friend. At night I came home and studied.",
      questions: [
        {
          question: "Where did the speaker go after tea?",
          options: ["College", "Home", "A shop"],
          answer: 0,
          explanation: "The speaker says they went to college after tea."
        },
        {
          question: "What happened in the evening?",
          options: ["They met a friend", "They studied", "They drank tea"],
          answer: 0,
          explanation: "Sandhyakali mi mitrala bhetlo means 'In the evening I met a friend.'"
        }
      ],
      productionPrompt: "Write 2–3 simple Marathi sentences about what you did yesterday.",
      support: ["Kal mi ...", "Sakali mi ...", "Sandhyakali mi ...", "Ratri mi ..."]
    },
    items: [
      { marathi: "Mi ghari gelo", devanagari: "मी घरी गेलो", english: "I went home (male speaker)" },
      { marathi: "Mi ghari gele", devanagari: "मी घरी गेले", english: "I went home (female speaker)" },
      { marathi: "Mi chaha pyalo", devanagari: "मी चहा प्यायलो", english: "I drank tea (male speaker)" },
      { marathi: "Mi mitrala bhetlo", devanagari: "मी मित्राला भेटलो", english: "I met a friend (male speaker)" },
      { marathi: "Mi abhyas kela", devanagari: "मी अभ्यास केला", english: "I studied" },
      { marathi: "Mi ghari alo", devanagari: "मी घरी आलो", english: "I came home (male speaker)" },
      { marathi: "Kal sakali", devanagari: "काल सकाळी", english: "Yesterday morning" },
      { marathi: "Kal ratri", devanagari: "काल रात्री", english: "Last night" }
    ]
  },
  {
    slug: "future-intentions",
    title: "Future & Intentions",
    subtitle: "Talk about what you will do and what you plan to do",
    unit: 7,
    unitTitle: "Control time",
    objective: "Understand simple future forms and express basic intentions",
    teaching: [
      {
        title: "Future forms signal what will happen",
        explanation: "Forms such as jaeen, kareen, and bheteen often carry a future meaning for 'I'. Learn the whole pattern first.",
        examples: [
          { marathi: "Mi udya jaeen", devanagari: "मी उद्या जाईन", english: "I will go tomorrow" },
          { marathi: "Mi abhyas kareen", devanagari: "मी अभ्यास करीन", english: "I will study" },
          { marathi: "Mi tula bheteen", devanagari: "मी तुला भेटीन", english: "I will meet you" }
        ]
      }
    ],
    checks: [
      {
        question: "Which sentence means 'I will study'?",
        options: ["Mi abhyas kareen", "Mi abhyas karat aahe", "Mi abhyas kela"],
        answer: 0,
        explanation: "Mi abhyas kareen is future-oriented."
      },
      {
        question: "Which word best anchors a plan for tomorrow?",
        options: ["Udya", "Kal", "Aata"],
        answer: 0,
        explanation: "Udya means tomorrow."
      }
    ],
    intermediate: {
      title: "Weekend plan",
      marathi: "Udya mi sakali abhyas kareen. Dupari mi ghari jeveen. Sandhyakali mi mitranna bheteen. Vel milala tar amhi baher jau.",
      devanagari: "उद्या मी सकाळी अभ्यास करीन. दुपारी मी घरी जेवीन. संध्याकाळी मी मित्रांना भेटीन. वेळ मिळाला तर आम्ही बाहेर जाऊ.",
      english: "Tomorrow I will study in the morning. In the afternoon I will eat at home. In the evening I will meet friends. If we get time, we will go out.",
      questions: [
        {
          question: "When will the speaker meet friends?",
          options: ["In the evening", "In the morning", "At night"],
          answer: 0,
          explanation: "The passage says Sandhyakali mi mitranna bheteen."
        },
        {
          question: "What may happen if there is time?",
          options: ["They may go out", "They may study", "They may sleep"],
          answer: 0,
          explanation: "Vel milala tar amhi baher jau means 'If we get time, we will go out.'"
        }
      ],
      productionPrompt: "Write 2–3 sentences about your plan for tomorrow.",
      support: ["Udya mi ...", "Sakali mi ...", "Sandhyakali mi ...", "Vel milala tar ..."]
    },
    items: [
      { marathi: "Mi jaeen", devanagari: "मी जाईन", english: "I will go" },
      { marathi: "Mi yeen", devanagari: "मी येईन", english: "I will come" },
      { marathi: "Mi kareen", devanagari: "मी करीन", english: "I will do" },
      { marathi: "Mi bheteen", devanagari: "मी भेटीन", english: "I will meet" },
      { marathi: "Mi abhyas kareen", devanagari: "मी अभ्यास करीन", english: "I will study" },
      { marathi: "Udya mi ghari asen", devanagari: "उद्या मी घरी असेन", english: "Tomorrow I will be at home" },
      { marathi: "Vel milala tar", devanagari: "वेळ मिळाला तर", english: "If there is time" },
      { marathi: "Nantar baghu", devanagari: "नंतर बघू", english: "We'll see later" }
    ]
  },
  {
    slug: "postpositions-relations",
    title: "Postpositions & Relations",
    subtitle: "Understand forms like to, from, with, in, and near",
    unit: 8,
    unitTitle: "Connect ideas",
    objective: "Recognize high-frequency relationship markers in real sentences",
    teaching: [
      {
        title: "Marathi often marks relationships after the noun",
        explanation: "Instead of relying on English-style prepositions, Marathi frequently uses endings or postposition-like forms attached to or following nouns.",
        examples: [
          { marathi: "Mitrala", devanagari: "मित्राला", english: "To the friend / friend as recipient" },
          { marathi: "Gharatun", devanagari: "घरातून", english: "From the house" },
          { marathi: "Mitrabarobar", devanagari: "मित्राबरोबर", english: "With a friend" }
        ]
      },
      {
        title: "Learn them through contrasts",
        explanation: "Compare one noun across several relationship patterns to notice how meaning changes.",
        examples: [
          { marathi: "Gharat", devanagari: "घरात", english: "In the house" },
          { marathi: "Gharatun", devanagari: "घरातून", english: "From the house" },
          { marathi: "Gharajaval", devanagari: "घराजवळ", english: "Near the house" }
        ]
      }
    ],
    checks: [
      {
        question: "Which form means 'from the house'?",
        options: ["Gharatun", "Gharat", "Gharajaval"],
        answer: 0,
        explanation: "Gharatun means from the house."
      },
      {
        question: "Which form means 'with a friend'?",
        options: ["Mitrabarobar", "Mitrala", "Mitrakade"],
        answer: 0,
        explanation: "Mitrabarobar means with a friend."
      }
    ],
    intermediate: {
      title: "Where everyone is",
      marathi: "Aai gharat aahe. Baba kamavar gele aahet. Mi mitrabarobar library-madhe aahe. Library gharajaval aahe, mhanun mi ghari lavkar yeu shakto.",
      devanagari: "आई घरात आहे. बाबा कामावर गेले आहेत. मी मित्राबरोबर लायब्ररीमध्ये आहे. लायब्ररी घराजवळ आहे, म्हणून मी घरी लवकर येऊ शकतो.",
      english: "Mother is at home. Father has gone to work. I am in the library with a friend. The library is near home, so I can come home early.",
      questions: [
        {
          question: "Who is the speaker with?",
          options: ["A friend", "Mother", "Father"],
          answer: 0,
          explanation: "Mitrabarobar means with a friend."
        },
        {
          question: "Why can the speaker return home early?",
          options: ["The library is near home", "Work finished early", "There is no class"],
          answer: 0,
          explanation: "The passage says the library is near home."
        }
      ],
      productionPrompt: "Describe where two people are using at least two location/relationship forms.",
      support: ["... gharat aahe", "... barobar ...", "... javal aahe", "... tun ..."]
    },
    items: [
      { marathi: "Gharat", devanagari: "घरात", english: "In the house" },
      { marathi: "Gharatun", devanagari: "घरातून", english: "From the house" },
      { marathi: "Gharajaval", devanagari: "घराजवळ", english: "Near the house" },
      { marathi: "Mitrala", devanagari: "मित्राला", english: "To the friend" },
      { marathi: "Mitrabarobar", devanagari: "मित्राबरोबर", english: "With a friend" },
      { marathi: "Kamavar", devanagari: "कामावर", english: "At / to work" },
      { marathi: "Library-madhe", devanagari: "लायब्ररीमध्ये", english: "In the library" },
      { marathi: "Majhyakade", devanagari: "माझ्याकडे", english: "With me / at my place / I have, by context" }
    ]
  },
  {
    slug: "connectors-reasons",
    title: "Connectors & Reasons",
    subtitle: "Join thoughts with because, but, so, and then",
    unit: 8,
    unitTitle: "Connect ideas",
    objective: "Build longer sentences and explain reasons",
    teaching: [
      {
        title: "Connectors make speech sound less fragmented",
        explanation: "Use pan for 'but', mhanun for 'so/therefore', karan for 'because/reason', and nantar for 'then/after'.",
        examples: [
          { marathi: "Mala jaycha hota, pan vel navhta", devanagari: "मला जायचं होतं, पण वेळ नव्हता", english: "I wanted to go, but there was no time" },
          { marathi: "Paus hota, mhanun mi ghari rahilo", devanagari: "पाऊस होता, म्हणून मी घरी राहिलो", english: "It was raining, so I stayed home" }
        ]
      }
    ],
    checks: [
      {
        question: "Which connector means 'but'?",
        options: ["Pan", "Mhanun", "Nantar"],
        answer: 0,
        explanation: "Pan means but."
      },
      {
        question: "Which connector introduces a result such as 'so / therefore'?",
        options: ["Mhanun", "Pan", "Karan"],
        answer: 0,
        explanation: "Mhanun commonly marks a result."
      }
    ],
    intermediate: {
      title: "Why I changed my plan",
      marathi: "Aaj mala baher jaycha hota, pan paus khup hota. Mhanun mi ghari rahilo. Ghari vel hota, mhanun mi thoda abhyas kela ani nantar cinema pahila.",
      devanagari: "आज मला बाहेर जायचं होतं, पण पाऊस खूप होता. म्हणून मी घरी राहिलो. घरी वेळ होता, म्हणून मी थोडा अभ्यास केला आणि नंतर सिनेमा पाहिला.",
      english: "Today I wanted to go out, but it was raining heavily. So I stayed home. I had time at home, so I studied a little and then watched a movie.",
      questions: [
        {
          question: "Why did the speaker stay home?",
          options: ["Because of heavy rain", "Because of work", "Because of a visitor"],
          answer: 0,
          explanation: "The passage contrasts wanting to go out with heavy rain."
        },
        {
          question: "What did the speaker do after studying?",
          options: ["Watched a movie", "Went out", "Met a friend"],
          answer: 0,
          explanation: "Nantar cinema pahila means 'then watched a movie.'"
        }
      ],
      productionPrompt: "Write two connected Marathi sentences using pan or mhanun.",
      support: ["..., pan ...", "..., mhanun ...", "Karan ...", "Nantar ..."]
    },
    items: [
      { marathi: "Pan", devanagari: "पण", english: "But" },
      { marathi: "Mhanun", devanagari: "म्हणून", english: "So / therefore" },
      { marathi: "Karan", devanagari: "कारण", english: "Because / reason" },
      { marathi: "Nantar", devanagari: "नंतर", english: "Then / after" },
      { marathi: "Ani", devanagari: "आणि", english: "And" },
      { marathi: "Mala jaycha hota", devanagari: "मला जायचं होतं", english: "I wanted to go" },
      { marathi: "Vel navhta", devanagari: "वेळ नव्हता", english: "There was no time" },
      { marathi: "Mi ghari rahilo", devanagari: "मी घरी राहिलो", english: "I stayed home (male speaker)" }
    ]
  },
  {
    slug: "opinions-preferences",
    title: "Opinions & Preferences",
    subtitle: "Say what you like, think, and prefer",
    unit: 9,
    unitTitle: "Speak with more freedom",
    objective: "Express a simple opinion and support it with a reason",
    teaching: [
      {
        title: "Mala ... avadte expresses liking",
        explanation: "Mala ... avadte is a high-frequency way to say you like something. Different nouns can affect the exact form, so learn common complete examples.",
        examples: [
          { marathi: "Mala Marathi avadte", devanagari: "मला मराठी आवडते", english: "I like Marathi" },
          { marathi: "Mala chaha avadto", devanagari: "मला चहा आवडतो", english: "I like tea" }
        ]
      },
      {
        title: "Mala vatate means 'I think / I feel'",
        explanation: "Use mala vatate to introduce an opinion rather than a hard fact.",
        examples: [
          { marathi: "Mala vatate he changle aahe", devanagari: "मला वाटतं हे चांगलं आहे", english: "I think this is good" }
        ]
      }
    ],
    checks: [
      {
        question: "Which phrase introduces an opinion?",
        options: ["Mala vatate", "Mala mahit aahe", "Mala pahije"],
        answer: 0,
        explanation: "Mala vatate means 'I think / I feel'."
      },
      {
        question: "Which phrase says 'I like Marathi'?",
        options: ["Mala Marathi avadte", "Mala Marathi pahije", "Mi Marathi aahe"],
        answer: 0,
        explanation: "Mala Marathi avadte means I like Marathi."
      }
    ],
    intermediate: {
      title: "A small opinion",
      marathi: "Mala Marathi shikayla avadte karan ti khup sundar bhasha aahe. Suruvatila kahi shabda kathin vatle, pan ata mala adhik samajate. Mala vatate roj thoda sarav karane changle aahe.",
      devanagari: "मला मराठी शिकायला आवडते कारण ती खूप सुंदर भाषा आहे. सुरुवातीला काही शब्द कठीण वाटले, पण आता मला अधिक समजते. मला वाटतं रोज थोडा सराव करणे चांगले आहे.",
      english: "I like learning Marathi because it is a very beautiful language. At first some words felt difficult, but now I understand more. I think practicing a little every day is good.",
      questions: [
        {
          question: "Why does the speaker like learning Marathi?",
          options: ["They think it is beautiful", "It is required for work", "It is very easy"],
          answer: 0,
          explanation: "The speaker says it is a very beautiful language."
        },
        {
          question: "What does the speaker recommend?",
          options: ["A little daily practice", "Only reading", "Studying once a week"],
          answer: 0,
          explanation: "The final sentence supports daily practice."
        }
      ],
      productionPrompt: "Give your opinion about learning Marathi and one reason.",
      support: ["Mala ... avadte", "Mala vatate ...", "Karan ...", "Pan ..."]
    },
    items: [
      { marathi: "Mala Marathi avadte", devanagari: "मला मराठी आवडते", english: "I like Marathi" },
      { marathi: "Mala chaha avadto", devanagari: "मला चहा आवडतो", english: "I like tea" },
      { marathi: "Mala vatate", devanagari: "मला वाटतं", english: "I think / I feel" },
      { marathi: "Majhya mate", devanagari: "माझ्या मते", english: "In my opinion" },
      { marathi: "He changle aahe", devanagari: "हे चांगलं आहे", english: "This is good" },
      { marathi: "He kathin aahe", devanagari: "हे कठीण आहे", english: "This is difficult" },
      { marathi: "Mala he jast avadte", devanagari: "मला हे जास्त आवडते", english: "I like this more" },
      { marathi: "Karan ...", devanagari: "कारण ...", english: "Because ..." }
    ]
  },
  {
    slug: "clarify-conversation",
    title: "Clarify & Keep Talking",
    subtitle: "Repair misunderstandings and keep a conversation going",
    unit: 9,
    unitTitle: "Speak with more freedom",
    objective: "Ask for clarification, repetition, examples, and confirmation",
    teaching: [
      {
        title: "Conversation repair is an intermediate superpower",
        explanation: "You do not need to understand every word. Strong learners know how to ask for repetition, a slower pace, or a different explanation.",
        examples: [
          { marathi: "Punha sanga", devanagari: "पुन्हा सांगा", english: "Please say it again" },
          { marathi: "Thoda halu bola", devanagari: "थोडं हळू बोला", english: "Please speak a little slowly" },
          { marathi: "Yacha arth kay?", devanagari: "याचा अर्थ काय?", english: "What does this mean?" }
        ]
      }
    ],
    checks: [
      {
        question: "What should you ask if you do not know the meaning of something?",
        options: ["Yacha arth kay?", "He kiti aahe?", "Kuthe jaat aahat?"],
        answer: 0,
        explanation: "Yacha arth kay? means 'What does this mean?'"
      },
      {
        question: "Which phrase asks someone to speak more slowly?",
        options: ["Thoda halu bola", "Punha bhetu", "Lavkar bola"],
        answer: 0,
        explanation: "Thoda halu bola asks the person to slow down."
      }
    ],
    intermediate: {
      title: "A real learner conversation",
      marathi: "A: Tumhala samajla ka? B: Thoda samajla, pan ek shabda samajla nahi. A: Konta shabda? B: 'Nirnay'. Yacha arth kay? A: Nirnay mhanje decision. B: Achha, ata samajla. Dhanyavaad.",
      devanagari: "अ: तुम्हाला समजलं का? ब: थोडं समजलं, पण एक शब्द समजला नाही. अ: कोणता शब्द? ब: 'निर्णय'. याचा अर्थ काय? अ: निर्णय म्हणजे decision. ब: अच्छा, आता समजलं. धन्यवाद.",
      english: "A: Did you understand? B: I understood a little, but I did not understand one word. A: Which word? B: 'Nirnay'. What does it mean? A: Nirnay means decision. B: Oh, now I understand. Thank you.",
      questions: [
        {
          question: "What problem did learner B have?",
          options: ["One word was unclear", "They could not hear anything", "They wanted to leave"],
          answer: 0,
          explanation: "B says one word was not understood."
        },
        {
          question: "What did B ask?",
          options: ["What does this mean?", "How much is this?", "Where are you going?"],
          answer: 0,
          explanation: "Yacha arth kay? asks for the meaning."
        }
      ],
      productionPrompt: "Write a two-line mini-dialogue where you ask someone to clarify something.",
      support: ["Punha sanga", "Thoda halu bola", "Yacha arth kay?", "Mala samajla nahi"]
    },
    items: [
      { marathi: "Yacha arth kay?", devanagari: "याचा अर्थ काय?", english: "What does this mean?" },
      { marathi: "Punha sanga", devanagari: "पुन्हा सांगा", english: "Please say it again" },
      { marathi: "Thoda halu bola", devanagari: "थोडं हळू बोला", english: "Please speak a little slowly" },
      { marathi: "Udaharan dya", devanagari: "उदाहरण द्या", english: "Please give an example" },
      { marathi: "Mhanje kay?", devanagari: "म्हणजे काय?", english: "What do you mean?" },
      { marathi: "Barobar ka?", devanagari: "बरोबर का?", english: "Is that correct?" },
      { marathi: "Ata samajla", devanagari: "आता समजलं", english: "Now I understand" },
      { marathi: "Mala ajun spashta nahi", devanagari: "मला अजून स्पष्ट नाही", english: "It is still not clear to me" }
    ]
  }
];

export function getLesson(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}
