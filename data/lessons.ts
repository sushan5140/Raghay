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
  }
];

export function getLesson(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}
