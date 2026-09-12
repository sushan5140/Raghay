import type { Lesson } from "./lessons";

const L = (lesson: Lesson) => lesson;

export const intermediateCompletionLessons: Lesson[] = [
  L({
    slug: "completed-actions-control",
    title: "Completed Actions",
    subtitle: "Control common past forms instead of only recognizing them",
    unit: 10,
    unitTitle: "Past with control",
    objective: "Describe a short sequence of completed actions with common gender-aware forms",
    grammarSkills: ["past-completed", "gender-agreement"],
    teaching: [
      {
        title: "Past forms can reflect the speaker or noun",
        explanation: "In many common completed-action sentences, Marathi changes the verb form. Learn high-frequency pairs first, then notice the ending.",
        examples: [
          { marathi: "Mi ghari gelo", devanagari: "मी घरी गेलो", english: "I went home (male speaker)" },
          { marathi: "Mi ghari gele", devanagari: "मी घरी गेले", english: "I went home (female speaker)" },
          { marathi: "Mi pustak vachle", devanagari: "मी पुस्तक वाचले", english: "I read the book" }
        ]
      }
    ],
    checks: [
      {
        question: "A female speaker says “I went home.” Which form fits?",
        options: ["Mi ghari gele", "Mi ghari gelo", "Mi ghari jaat aahe"],
        answer: 0,
        explanation: "Gele is the common feminine form in this pattern.",
        skill: "past-completed"
      },
      {
        question: "Which sentence describes a completed action?",
        options: ["Mi pustak vachle", "Mi pustak vachat aahe", "Mi pustak vachen"],
        answer: 0,
        explanation: "Vachle here presents the reading as completed.",
        skill: "past-completed"
      }
    ],
    reading: {
      title: "Yesterday after class",
      devanagari: "काल वर्ग संपल्यानंतर मी मित्राला भेटलो. आम्ही जवळच्या कॅफेत गेलो. तिथे मी चहा घेतला आणि थोडा अभ्यास केला. नंतर मी घरी आलो.",
      romanized: "Kaal varg samplyanantar mi mitraala bhetlo. Aamhi javalchya cafe-t gelo. Tithe mi chaha ghetla ani thoda abhyas kela. Nantar mi ghari aalo.",
      english: "Yesterday after class I met a friend. We went to a nearby café. There I had tea and studied a little. Then I came home.",
      glossary: [
        { term: "संपल्यानंतर", meaning: "after finishing" },
        { term: "जवळच्या", meaning: "nearby" }
      ],
      questions: [
        {
          question: "What did the speaker do at the café?",
          options: ["Had tea and studied", "Bought clothes", "Met a teacher"],
          answer: 0,
          explanation: "The passage says the speaker had tea and studied a little.",
          skill: "reading-detail"
        },
        {
          question: "What happened last?",
          options: ["The speaker came home", "Class ended", "The friend arrived"],
          answer: 0,
          explanation: "Nantar mi ghari aalo means “Then I came home.”",
          skill: "reading-sequence"
        }
      ]
    },
    listening: {
      title: "A quick past recap",
      devanagari: "काल मी सकाळी लवकर उठलो. नाश्ता केला, बसने कॉलेजला गेलो आणि संध्याकाळी घरी परत आलो.",
      romanized: "Kaal mi sakaali lavkar uthlo. Naashta kela, basne college-la gelo ani sandhyaakaali ghari parat aalo.",
      english: "Yesterday I got up early, had breakfast, went to college by bus, and returned home in the evening.",
      maxReplays: 3,
      questions: [
        {
          question: "How did the speaker go to college?",
          options: ["By bus", "By train", "On foot"],
          answer: 0,
          explanation: "Basne means “by bus.”",
          skill: "listening-detail"
        }
      ]
    },
    production: {
      prompt: "Write 4 sentences about what you did yesterday.",
      minSentences: 4,
      support: ["Kaal mi ...", "Nantar mi ...", "Sandhyaakaali mi ...", "Shevti mi ..."],
      requiredPatterns: ["one past-time word", "at least two completed actions"],
      modelAnswer: {
        romanized: "Kaal mi lavkar uthlo. Mi naashta kela. Nantar mi college-la gelo. Sandhyaakaali mi ghari aalo.",
        devanagari: "काल मी लवकर उठलो. मी नाश्ता केला. नंतर मी कॉलेजला गेलो. संध्याकाळी मी घरी आलो.",
        english: "Yesterday I got up early. I had breakfast. Then I went to college. In the evening I came home."
      }
    },
    scenario: {
      title: "Tell a friend about yesterday",
      context: "A friend asks what you did after class yesterday.",
      startStep: "s1",
      steps: [
        {
          id: "s1",
          speaker: "Friend",
          line: "काल वर्गानंतर काय केलंस?",
          prompt: "Choose a natural past-tense reply.",
          options: [
            { text: "मी मित्राला भेटलो आणि कॅफेत गेलो.", feedback: "Good — two completed actions are linked naturally.", acceptable: true, nextStep: "s2" },
            { text: "मी उद्या मित्राला भेटेन.", feedback: "That is future, not a reply about yesterday.", acceptable: false, nextStep: "s2" },
            { text: "मी मित्राला भेटत आहे.", feedback: "That means you are meeting the friend now.", acceptable: false, nextStep: "s2" }
          ]
        },
        {
          id: "s2",
          speaker: "Friend",
          line: "मग नंतर काय केलंस?",
          prompt: "Continue the sequence.",
          options: [
            { text: "नंतर मी घरी आलो.", feedback: "Good — nantar keeps the past sequence clear.", acceptable: true },
            { text: "आता मी घरी आहे.", feedback: "This is possible information, but it does not answer what happened next.", acceptable: false },
            { text: "उद्या मी घरी असेन.", feedback: "That shifts to the future.", acceptable: false }
          ]
        }
      ]
    },
    items: [
      { marathi: "Mi gelo / gele", devanagari: "मी गेलो / गेले", english: "I went (male / female)" },
      { marathi: "Mi aalo / aale", devanagari: "मी आलो / आले", english: "I came (male / female)" },
      { marathi: "Mi bhetlo / bhetle", devanagari: "मी भेटलो / भेटले", english: "I met (male / female)" },
      { marathi: "Mi abhyas kela", devanagari: "मी अभ्यास केला", english: "I studied" },
      { marathi: "Nantar", devanagari: "नंतर", english: "Then / afterward" },
      { marathi: "Shevti", devanagari: "शेवटी", english: "Finally" }
    ]
  }),

  L({
    slug: "past-experiences",
    title: "Past Experiences",
    subtitle: "Ask and answer about things someone did",
    unit: 10,
    unitTitle: "Past with control",
    objective: "Ask follow-up questions and give connected answers about a recent experience",
    grammarSkills: ["past-questions", "past-narration"],
    teaching: [
      {
        title: "Past questions often use context + काय केलंस / केलं?",
        explanation: "For informal conversation, useful chunks like kay kelas? / kay kela? help you ask what someone did. Respectful forms differ, so the lesson focuses on common conversational chunks.",
        examples: [
          { marathi: "Tu kaal kay kelas?", devanagari: "तू काल काय केलंस?", english: "What did you do yesterday? (informal)" },
          { marathi: "Tumhi kaal kay kelat?", devanagari: "तुम्ही काल काय केलंत?", english: "What did you do yesterday? (respectful/plural)" }
        ]
      }
    ],
    checks: [
      {
        question: "Which question is respectful/plural?",
        options: ["Tumhi kaal kay kelat?", "Tu kaal kay kelas?", "Mi kaal kay kela?"],
        answer: 0,
        explanation: "Tumhi ... kelat is the respectful/plural pattern here.",
        skill: "past-questions"
      },
      {
        question: "Which reply gives an experience plus a detail?",
        options: ["Mi Pune-la gelo ani Sinhagad pahila.", "Ho.", "Udya jaain."],
        answer: 0,
        explanation: "It answers with two connected past details.",
        skill: "past-narration"
      }
    ],
    reading: {
      title: "A weekend trip",
      devanagari: "गेल्या रविवारी मी पुण्याला गेलो. सकाळी मी शनिवारवाडा पाहिला. दुपारी मित्रांसोबत जेवलो आणि संध्याकाळी परत आलो. दिवस थकवणारा होता, पण खूप छान गेला.",
      romanized: "Gelya ravivaari mi Pune-la gelo. Sakaali mi Shaniwarwada pahila. Dupari mitransobat jevlo ani sandhyaakaali parat aalo. Divas thakavanaara hota, pan khup chhaan gela.",
      english: "Last Sunday I went to Pune. In the morning I saw Shaniwar Wada. In the afternoon I ate with friends and returned in the evening. The day was tiring, but it went very well.",
      questions: [
        {
          question: "What contrast appears in the last sentence?",
          options: ["The day was tiring but enjoyable", "The trip was short but expensive", "The food was good but cold"],
          answer: 0,
          explanation: "Pan contrasts “tiring” with “very good/enjoyable.”",
          skill: "reading-contrast"
        }
      ]
    },
    listening: {
      title: "What did she do?",
      devanagari: "रिया काल बाजारात गेली. तिने एक पुस्तक आणि दोन वह्या घेतल्या. मग ती मैत्रिणीला भेटली.",
      romanized: "Riya kaal bazaarat geli. Tine ek pustak ani don vahya ghetlya. Mag ti maitrinila bhetli.",
      english: "Riya went to the market yesterday. She bought one book and two notebooks. Then she met her friend.",
      maxReplays: 2,
      questions: [
        {
          question: "What did Riya buy?",
          options: ["A book and two notebooks", "Two books", "Tea and snacks"],
          answer: 0,
          explanation: "The passage says ek pustak ani don vahya.",
          skill: "listening-detail"
        }
      ]
    },
    production: {
      prompt: "Describe a recent outing in 4–5 sentences.",
      minSentences: 4,
      support: ["Gelya ... mi ...", "Sakaali ...", "Mag ...", "Pan ..."],
      requiredPatterns: ["past event", "sequence word", "one opinion"],
      modelAnswer: {
        romanized: "Gelya shanivaari mi bazaarat gelo. Mi kahi pustake ghetli. Mag mi mitraala bhetlo. Aamhi chaha ghetla. Divas khup chhaan gela.",
        devanagari: "गेल्या शनिवारी मी बाजारात गेलो. मी काही पुस्तके घेतली. मग मी मित्राला भेटलो. आम्ही चहा घेतला. दिवस खूप छान गेला.",
        english: "Last Saturday I went to the market. I bought some books. Then I met a friend. We had tea. The day went very well."
      }
    },
    scenario: {
      title: "Weekend follow-up",
      context: "Someone tells you they went to Pune last weekend. Keep the conversation going.",
      startStep: "s1",
      steps: [
        {
          id: "s1",
          speaker: "Friend",
          line: "मी गेल्या रविवारी पुण्याला गेलो.",
          prompt: "Ask a useful follow-up.",
          options: [
            { text: "तिथे काय केलंस?", feedback: "Good — it asks what they did there.", acceptable: true, nextStep: "s2" },
            { text: "उद्या कुठे जाणार?", feedback: "That changes topic to tomorrow.", acceptable: false, nextStep: "s2" },
            { text: "किती वाजले?", feedback: "That asks the time, not about the trip.", acceptable: false, nextStep: "s2" }
          ]
        },
        {
          id: "s2",
          speaker: "Friend",
          line: "मी शनिवारवाडा पाहिला आणि मित्रांसोबत जेवलो.",
          prompt: "React naturally.",
          options: [
            { text: "वा, मजा आली का?", feedback: "Good — a natural follow-up about the experience.", acceptable: true },
            { text: "बिल द्या.", feedback: "That belongs in a restaurant interaction.", acceptable: false },
            { text: "सरळ जा.", feedback: "That is a direction.", acceptable: false }
          ]
        }
      ]
    },
    items: [
      { marathi: "Tu kaal kay kelas?", devanagari: "तू काल काय केलंस?", english: "What did you do yesterday? (informal)" },
      { marathi: "Tumhi kaal kay kelat?", devanagari: "तुम्ही काल काय केलंत?", english: "What did you do yesterday? (respectful/plural)" },
      { marathi: "Mi pahila / pahile", devanagari: "मी पाहिला / पाहिले", english: "I saw (form depends on context)" },
      { marathi: "Mi ghetla / ghetli", devanagari: "मी घेतला / घेतली", english: "I took/bought (form depends on noun)" },
      { marathi: "Mag", devanagari: "मग", english: "Then" },
      { marathi: "Maja aali ka?", devanagari: "मजा आली का?", english: "Did you enjoy it?" }
    ]
  }),

  L({
    slug: "negative-past",
    title: "Negative Past",
    subtitle: "Say what did not happen and what was not true",
    unit: 10,
    unitTitle: "Past with control",
    objective: "Contrast completed past events with common negative past expressions",
    grammarSkills: ["past-negative", "contrast"],
    teaching: [
      {
        title: "Negative past often uses नाही / नव्हता-family forms",
        explanation: "Marathi has several negative patterns. For practical conversation, learn frequent complete chunks such as gelo nahi and vel navhta.",
        examples: [
          { marathi: "Mi gelo nahi", devanagari: "मी गेलो नाही", english: "I did not go (male speaker)" },
          { marathi: "Mi gele nahi", devanagari: "मी गेले नाही", english: "I did not go (female speaker)" },
          { marathi: "Vel navhta", devanagari: "वेळ नव्हता", english: "There was no time" }
        ]
      }
    ],
    checks: [
      {
        question: "Which sentence means “I did not go” for a male speaker?",
        options: ["Mi gelo nahi", "Mi jaat nahi", "Mi jaanar nahi"],
        answer: 0,
        explanation: "Gelo nahi is the past negative chunk here.",
        skill: "past-negative"
      },
      {
        question: "What does “vel navhta” mean?",
        options: ["There was no time", "There is no time", "There will be no time"],
        answer: 0,
        explanation: "Navhta puts the state in the past.",
        skill: "past-negative"
      }
    ],
    reading: {
      title: "A changed plan",
      devanagari: "काल मी चित्रपटाला जाणार होतो, पण माझ्याकडे वेळ नव्हता. म्हणून मी गेलो नाही. त्याऐवजी मी घरी राहिलो आणि अभ्यास केला.",
      romanized: "Kaal mi chitrapataala jaanar hoto, pan maajhyaakade vel navhta. Mhanun mi gelo nahi. Tyaaaivaji mi ghari rahilo ani abhyas kela.",
      english: "Yesterday I was going to go to a movie, but I did not have time. So I did not go. Instead, I stayed home and studied.",
      questions: [
        {
          question: "Why did the speaker not go to the movie?",
          options: ["There was no time", "The movie was full", "It was too expensive"],
          answer: 0,
          explanation: "The text says maajhyaakade vel navhta.",
          skill: "reading-reason"
        }
      ]
    },
    listening: {
      title: "What did not happen?",
      devanagari: "आज सकाळी बस उशिरा आली. त्यामुळे मी पहिल्या वर्गाला वेळेवर पोहोचलो नाही.",
      romanized: "Aaj sakaali bas ushira aali. Tyamule mi pahilya vargaala velevar pohachlo nahi.",
      english: "The bus came late this morning. Because of that, I did not reach the first class on time.",
      maxReplays: 2,
      questions: [
        {
          question: "What did the speaker fail to do?",
          options: ["Reach class on time", "Catch the train", "Finish homework"],
          answer: 0,
          explanation: "Pohachlo nahi means the speaker did not arrive/reach.",
          skill: "listening-cause"
        }
      ]
    },
    production: {
      prompt: "Write 4 sentences about a plan that did not happen.",
      minSentences: 4,
      support: ["Mi ... jaanar hoto/hote", "Pan ...", "Mhanun ... nahi", "Tyaaaivaji ..."],
      requiredPatterns: ["negative past", "reason or contrast"],
      modelAnswer: {
        romanized: "Mi bazaarat jaanar hoto, pan paus hota. Mhanun mi gelo nahi. Tyaaaivaji mi ghari rahilo. Mi online kharedi keli.",
        devanagari: "मी बाजारात जाणार होतो, पण पाऊस होता. म्हणून मी गेलो नाही. त्याऐवजी मी घरी राहिलो. मी ऑनलाइन खरेदी केली.",
        english: "I was going to go to the market, but it was raining. So I did not go. Instead I stayed home. I shopped online."
      }
    },
    items: [
      { marathi: "Mi gelo nahi", devanagari: "मी गेलो नाही", english: "I did not go (male speaker)" },
      { marathi: "Mi gele nahi", devanagari: "मी गेले नाही", english: "I did not go (female speaker)" },
      { marathi: "Vel navhta", devanagari: "वेळ नव्हता", english: "There was no time" },
      { marathi: "Mi pohachlo nahi", devanagari: "मी पोहोचलो नाही", english: "I did not arrive (male speaker)" },
      { marathi: "Tyaaaivaji", devanagari: "त्याऐवजी", english: "Instead" },
      { marathi: "Mhanun", devanagari: "म्हणून", english: "So / therefore" }
    ]
  }),

  L({
    slug: "future-plans-control",
    title: "Future Plans",
    subtitle: "Move from isolated future forms to connected plans",
    unit: 11,
    unitTitle: "Future, intention & obligation",
    objective: "Describe a future plan with time, sequence, and alternatives",
    grammarSkills: ["future", "planning"],
    teaching: [
      {
        title: "Future forms become useful when chained",
        explanation: "Rather than memorizing one future verb at a time, practice a short plan with jaain, karin, bhetein, and asen.",
        examples: [
          { marathi: "Mi udya jaain", devanagari: "मी उद्या जाईन", english: "I will go tomorrow" },
          { marathi: "Mi abhyas karin", devanagari: "मी अभ्यास करीन", english: "I will study" },
          { marathi: "Mi ghari asen", devanagari: "मी घरी असेन", english: "I will be at home" }
        ]
      }
    ],
    checks: [
      {
        question: "Which sentence means “I will study”?",
        options: ["Mi abhyas karin", "Mi abhyas kela", "Mi abhyas karat aahe"],
        answer: 0,
        explanation: "Karin is a future form in this pattern.",
        skill: "future"
      },
      {
        question: "Which phrase gives an alternative condition?",
        options: ["Vel milala tar", "Kaal sakali", "Aata lagech"],
        answer: 0,
        explanation: "Vel milala tar means “if there is time.”",
        skill: "planning"
      }
    ],
    reading: {
      title: "Tomorrow's schedule",
      devanagari: "उद्या मी सकाळी दोन तास अभ्यास करीन. दुपारी मी कॉलेजला जाईन. वर्गानंतर मित्राला भेटीन. वेळ मिळाला तर आम्ही बाहेर जेवायला जाऊ.",
      romanized: "Udya mi sakaali don taas abhyas karin. Dupari mi college-la jaain. Vargaanantar mitraala bhetein. Vel milala tar aamhi baaher jevaayla jaau.",
      english: "Tomorrow I will study for two hours in the morning. In the afternoon I will go to college. After class I will meet a friend. If there is time, we will go out to eat.",
      questions: [
        {
          question: "What depends on having enough time?",
          options: ["Going out to eat", "Going to college", "Studying in the morning"],
          answer: 0,
          explanation: "The last sentence begins Vel milala tar.",
          skill: "reading-condition"
        }
      ]
    },
    listening: {
      title: "A changed evening plan",
      devanagari: "आज संध्याकाळी मी जिमला जाईन. पण जर पाऊस आला तर मी घरी व्यायाम करीन.",
      romanized: "Aaj sandhyaakaali mi gym-la jaain. Pan jar paus aala tar mi ghari vyaayaam karin.",
      english: "This evening I will go to the gym. But if it rains, I will exercise at home.",
      maxReplays: 2,
      questions: [
        {
          question: "What will happen if it rains?",
          options: ["The speaker will exercise at home", "The speaker will go shopping", "The speaker will cancel all exercise"],
          answer: 0,
          explanation: "The condition changes the location of the exercise.",
          skill: "listening-condition"
        }
      ]
    },
    production: {
      prompt: "Write a 4–5 sentence plan for tomorrow.",
      minSentences: 4,
      support: ["Udya mi ...", "Nantar ...", "Vargaanantar ...", "Vel milala tar ..."],
      requiredPatterns: ["future form", "time expression", "one condition"],
      modelAnswer: {
        romanized: "Udya mi lavkar uthain. Sakaali mi abhyas karin. Dupari mi college-la jaain. Vargaanantar mi mitraala bhetein. Vel milala tar aamhi chaha gheu.",
        devanagari: "उद्या मी लवकर उठेन. सकाळी मी अभ्यास करीन. दुपारी मी कॉलेजला जाईन. वर्गानंतर मी मित्राला भेटीन. वेळ मिळाला तर आम्ही चहा घेऊ.",
        english: "Tomorrow I will get up early. In the morning I will study. In the afternoon I will go to college. After class I will meet a friend. If there is time, we will have tea."
      }
    },
    scenario: {
      title: "Make weekend plans",
      context: "A friend asks whether you are free on Saturday.",
      startStep: "s1",
      steps: [
        {
          id: "s1",
          speaker: "Friend",
          line: "शनिवारी मोकळा आहेस का?",
          prompt: "Reply with a future plan.",
          options: [
            { text: "सकाळी अभ्यास करीन, पण संध्याकाळी मोकळा असेन.", feedback: "Good — it gives a plan and availability.", acceptable: true, nextStep: "s2" },
            { text: "काल मी अभ्यास केला.", feedback: "That is about the past.", acceptable: false, nextStep: "s2" },
            { text: "मी आत्ता जेवत आहे.", feedback: "That describes the present.", acceptable: false, nextStep: "s2" }
          ]
        },
        {
          id: "s2",
          speaker: "Friend",
          line: "मग संध्याकाळी चित्रपटाला जाऊ या?",
          prompt: "Accept with a condition.",
          options: [
            { text: "हो, वेळ मिळाला तर जाऊ या.", feedback: "Natural acceptance with a condition.", acceptable: true },
            { text: "मी काल गेलो नाही.", feedback: "Past negative; it does not answer the invitation.", acceptable: false },
            { text: "बिल द्या.", feedback: "Wrong context.", acceptable: false }
          ]
        }
      ]
    },
    items: [
      { marathi: "Mi jaain", devanagari: "मी जाईन", english: "I will go" },
      { marathi: "Mi karin", devanagari: "मी करीन", english: "I will do" },
      { marathi: "Mi bhetein", devanagari: "मी भेटीन", english: "I will meet" },
      { marathi: "Mi asen", devanagari: "मी असेन", english: "I will be" },
      { marathi: "Vel milala tar", devanagari: "वेळ मिळाला तर", english: "If there is time" },
      { marathi: "Vargaanantar", devanagari: "वर्गानंतर", english: "After class" }
    ]
  }),

  L({
    slug: "wants-needs-obligation",
    title: "Want, Need & Have To",
    subtitle: "Separate preference from necessity",
    unit: 11,
    unitTitle: "Future, intention & obligation",
    objective: "Express what you want, need, and have to do",
    grammarSkills: ["desire", "obligation"],
    teaching: [
      {
        title: "Want and need are not the same",
        explanation: "Mala ... pahije often expresses wanting/needing a thing. For actions, mala ... karaycha aahe is a useful intention/need pattern, while mala ... karav lagel expresses stronger necessity.",
        examples: [
          { marathi: "Mala paani pahije", devanagari: "मला पाणी पाहिजे", english: "I want / need water" },
          { marathi: "Mala abhyas karaycha aahe", devanagari: "मला अभ्यास करायचा आहे", english: "I want / need to study" },
          { marathi: "Mala lavkar nighav lagel", devanagari: "मला लवकर निघावं लागेल", english: "I will have to leave early" }
        ]
      }
    ],
    checks: [
      {
        question: "Which phrase expresses stronger necessity?",
        options: ["Mala lavkar nighav lagel", "Mala chaha avadto", "Mi ghari aahe"],
        answer: 0,
        explanation: "Lagel here expresses “will have to.”",
        skill: "obligation"
      },
      {
        question: "Which sentence means “I want/need to study”?",
        options: ["Mala abhyas karaycha aahe", "Mi abhyas kela", "Mi abhyas karin"],
        answer: 0,
        explanation: "Karaycha aahe is the target intention/need pattern here.",
        skill: "desire"
      }
    ],
    reading: {
      title: "A busy day",
      devanagari: "आज मला अनेक गोष्टी करायच्या आहेत. सकाळी मला प्रोजेक्ट पूर्ण करायचा आहे. दुपारी मला बँकेत जायचं आहे. संध्याकाळी मला लवकर घरी यावं लागेल कारण पाहुणे येणार आहेत.",
      romanized: "Aaj mala anek goshti karaychya aahet. Sakaali mala project purna karaycha aahe. Dupari mala banket jaaycha aahe. Sandhyaakaali mala lavkar ghari yaav lagel kaaran pahune yenaar aahet.",
      english: "Today I have many things to do. In the morning I need to finish a project. In the afternoon I need to go to the bank. In the evening I will have to come home early because guests are coming.",
      questions: [
        {
          question: "Why must the speaker come home early?",
          options: ["Guests are coming", "The bank closes", "There is an exam"],
          answer: 0,
          explanation: "The reason is given with kaaran.",
          skill: "reading-reason"
        }
      ]
    },
    listening: {
      title: "What must be done first?",
      devanagari: "मला आज आधी असाइनमेंट पूर्ण करावी लागेल. त्यानंतर मी मित्रांना भेटू शकतो.",
      romanized: "Mala aaj aadhi assignment purna karaavi lagel. Tyanantar mi mitranna bhetu shakto.",
      english: "Today I first have to finish the assignment. After that I can meet my friends.",
      maxReplays: 2,
      questions: [
        {
          question: "What must happen before meeting friends?",
          options: ["Finish the assignment", "Eat dinner", "Go shopping"],
          answer: 0,
          explanation: "The assignment comes first.",
          skill: "listening-sequence"
        }
      ]
    },
    production: {
      prompt: "Write 4 sentences about things you want, need, or have to do this week.",
      minSentences: 4,
      support: ["Mala ... pahije", "Mala ... karaycha aahe", "Mala ... karav lagel", "Tyanantar ..."],
      requiredPatterns: ["one desire", "one obligation"],
      modelAnswer: {
        romanized: "Mala ya aathavdyat project purna karaycha aahe. Mala navin notebook pahije. Shukravaari mala lavkar uthav lagel. Tyanantar mi mitranna bhetein.",
        devanagari: "मला या आठवड्यात प्रोजेक्ट पूर्ण करायचा आहे. मला नवीन नोटबुक पाहिजे. शुक्रवारी मला लवकर उठावं लागेल. त्यानंतर मी मित्रांना भेटीन.",
        english: "This week I need to finish a project. I want a new notebook. On Friday I will have to get up early. After that I will meet friends."
      }
    },
    scenario: {
      title: "Explain a schedule conflict",
      context: "A friend invites you out, but you have work to finish.",
      startStep: "s1",
      steps: [
        {
          id: "s1",
          speaker: "Friend",
          line: "आज संध्याकाळी बाहेर येणार का?",
          prompt: "Decline with a reason.",
          options: [
            { text: "आज मला प्रोजेक्ट पूर्ण करावा लागेल, त्यामुळे येता येणार नाही.", feedback: "Good — necessity plus consequence.", acceptable: true, nextStep: "s2" },
            { text: "मला चहा आवडतो.", feedback: "That does not answer the invitation.", acceptable: false, nextStep: "s2" },
            { text: "काल मी बाहेर गेलो.", feedback: "That only describes yesterday.", acceptable: false, nextStep: "s2" }
          ]
        },
        {
          id: "s2",
          speaker: "Friend",
          line: "मग उद्या भेटू?",
          prompt: "Accept with a plan.",
          options: [
            { text: "हो, उद्या संध्याकाळी भेटू.", feedback: "Good — clear future arrangement.", acceptable: true },
            { text: "मला पुस्तक पाहिजे.", feedback: "Unrelated.", acceptable: false },
            { text: "मी गेलो नाही.", feedback: "Past negative.", acceptable: false }
          ]
        }
      ]
    },
    items: [
      { marathi: "Mala ... pahije", devanagari: "मला ... पाहिजे", english: "I want / need ..." },
      { marathi: "Mala ... karaycha aahe", devanagari: "मला ... करायचा आहे", english: "I want / need to do ..." },
      { marathi: "Mala ... karav lagel", devanagari: "मला ... करावं लागेल", english: "I will have to do ..." },
      { marathi: "Aadhi", devanagari: "आधी", english: "First / before" },
      { marathi: "Tyanantar", devanagari: "त्यानंतर", english: "After that" },
      { marathi: "Mala vel nahi", devanagari: "मला वेळ नाही", english: "I do not have time" }
    ]
  }),

  L({
    slug: "ability-permission",
    title: "Ability & Permission",
    subtitle: "Say what you can do and ask what is allowed",
    unit: 11,
    unitTitle: "Future, intention & obligation",
    objective: "Use practical can/cannot and permission patterns",
    grammarSkills: ["ability", "permission"],
    teaching: [
      {
        title: "Shakto / shakte expresses ability",
        explanation: "A common pattern is verb + shakto/shakte for “can,” with the form changing with the speaker.",
        examples: [
          { marathi: "Mi Marathi bolu shakto", devanagari: "मी मराठी बोलू शकतो", english: "I can speak Marathi (male speaker)" },
          { marathi: "Mi Marathi bolu shakte", devanagari: "मी मराठी बोलू शकते", english: "I can speak Marathi (female speaker)" }
        ]
      },
      {
        title: "Permission can use chalel ka? or ... ka?",
        explanation: "In everyday speech, chalel ka? is a useful way to ask whether something is okay/allowed.",
        examples: [
          { marathi: "Ithe baslo tar chalel ka?", devanagari: "इथे बसलो तर चालेल का?", english: "Is it okay if I sit here?" },
          { marathi: "Photo kadhla tar chalel ka?", devanagari: "फोटो काढला तर चालेल का?", english: "Is it okay if I take a photo?" }
        ]
      }
    ],
    checks: [
      {
        question: "Which phrase means “I can speak Marathi” for a female speaker?",
        options: ["Mi Marathi bolu shakte", "Mi Marathi bolu shakto", "Mi Marathi bolle"],
        answer: 0,
        explanation: "Shakte is the feminine speaker form here.",
        skill: "ability"
      },
      {
        question: "Which phrase asks permission?",
        options: ["Photo kadhla tar chalel ka?", "Photo kuthla aahe?", "Photo mahag aahe"],
        answer: 0,
        explanation: "Chalel ka? asks whether it is okay.",
        skill: "permission"
      }
    ],
    reading: {
      title: "At a library",
      devanagari: "या लायब्ररीत तुम्ही शांतपणे अभ्यास करू शकता. पाणी आत आणू शकता, पण अन्न खाता येत नाही. फोटो काढायचा असेल तर आधी परवानगी घ्या.",
      romanized: "Ya libraryt tumhi shaantpane abhyas karu shakta. Paani aat aanu shakta, pan anna khaata yet nahi. Photo kadhaaycha asel tar aadhi parvaangi ghya.",
      english: "In this library you can study quietly. You may bring water inside, but eating food is not allowed. If you want to take a photo, get permission first.",
      questions: [
        {
          question: "What is not allowed?",
          options: ["Eating food", "Studying", "Bringing water"],
          answer: 0,
          explanation: "Anna khaata yet nahi says food cannot be eaten there.",
          skill: "reading-rule"
        }
      ]
    },
    listening: {
      title: "Ask before taking a photo",
      devanagari: "माफ करा, इथे फोटो काढला तर चालेल का? हो, पण फ्लॅश वापरू नका.",
      romanized: "Maaf kara, ithe photo kadhla tar chalel ka? Ho, pan flash vaapru naka.",
      english: "Excuse me, is it okay if I take a photo here? Yes, but please do not use flash.",
      maxReplays: 2,
      questions: [
        {
          question: "What restriction is given?",
          options: ["Do not use flash", "Do not take any photo", "Do not enter"],
          answer: 0,
          explanation: "The reply allows the photo but forbids flash.",
          skill: "listening-rule"
        }
      ]
    },
    production: {
      prompt: "Write 4 sentences about things you can do, cannot do, or need permission to do.",
      minSentences: 4,
      support: ["Mi ... karu shakto/shakte", "... karta yet nahi", "... tar chalel ka?", "Parvaangi ..."],
      requiredPatterns: ["ability", "one restriction or permission"],
      modelAnswer: {
        romanized: "Mi Marathi vaachu shakto. Mi thoda bolu shakto. Class-madhe mothya aavaazaat bolta yet nahi. Photo kadhla tar chalel ka, asa mi vicharen.",
        devanagari: "मी मराठी वाचू शकतो. मी थोडं बोलू शकतो. क्लासमध्ये मोठ्या आवाजात बोलता येत नाही. फोटो काढला तर चालेल का, असं मी विचारेन.",
        english: "I can read Marathi. I can speak a little. You cannot speak loudly in class. I would ask whether it is okay to take a photo."
      }
    },
    scenario: {
      title: "Museum permission",
      context: "You are at a museum and want to take a photo.",
      startStep: "s1",
      steps: [
        {
          id: "s1",
          speaker: "Staff",
          line: "नमस्कार. काही मदत हवी आहे का?",
          prompt: "Ask permission to take a photo.",
          options: [
            { text: "इथे फोटो काढला तर चालेल का?", feedback: "Good — clear and polite permission request.", acceptable: true, nextStep: "s2" },
            { text: "फोटो किती आहे?", feedback: "That asks a price.", acceptable: false, nextStep: "s2" },
            { text: "मी काल फोटो काढला.", feedback: "Past statement, not a request.", acceptable: false, nextStep: "s2" }
          ]
        },
        {
          id: "s2",
          speaker: "Staff",
          line: "हो, पण फ्लॅश वापरू नका.",
          prompt: "Acknowledge the restriction.",
          options: [
            { text: "ठीक आहे, फ्लॅश वापरणार नाही.", feedback: "Good — you confirm the restriction.", acceptable: true },
            { text: "मला चहा पाहिजे.", feedback: "Unrelated.", acceptable: false },
            { text: "सरळ जा.", feedback: "A direction, not an acknowledgement.", acceptable: false }
          ]
        }
      ]
    },
    items: [
      { marathi: "Mi ... karu shakto", devanagari: "मी ... करू शकतो", english: "I can do ... (male speaker)" },
      { marathi: "Mi ... karu shakte", devanagari: "मी ... करू शकते", english: "I can do ... (female speaker)" },
      { marathi: "... karta yet nahi", devanagari: "... करता येत नाही", english: "It cannot be done / one cannot do it" },
      { marathi: "Chalel ka?", devanagari: "चालेल का?", english: "Is it okay?" },
      { marathi: "Parvaangi", devanagari: "परवानगी", english: "Permission" },
      { marathi: "Vaapru naka", devanagari: "वापरू नका", english: "Please do not use" }
    ]
  }),

  L({
    slug: "core-postpositions-system",
    title: "Core Postpositions",
    subtitle: "Build a system for in, from, to, with, near, and about",
    unit: 12,
    unitTitle: "Relationships between words",
    objective: "Recognize and use high-frequency relationship markers across familiar nouns",
    grammarSkills: ["postpositions", "location-relations"],
    teaching: [
      {
        title: "One noun can appear in several relationship forms",
        explanation: "Compare gharat, gharatun, gharajaval, and gharakade. Learning contrast sets is more useful than memorizing a single translation.",
        examples: [
          { marathi: "Gharat", devanagari: "घरात", english: "In the house" },
          { marathi: "Gharatun", devanagari: "घरातून", english: "From the house" },
          { marathi: "Gharajaval", devanagari: "घराजवळ", english: "Near the house" }
        ]
      }
    ],
    checks: [
      {
        question: "Which form means “from the house”?",
        options: ["Gharatun", "Gharat", "Gharajaval"],
        answer: 0,
        explanation: "The -tun form marks movement/source from the house here.",
        skill: "postpositions"
      },
      {
        question: "Which phrase means “with a friend”?",
        options: ["Mitrabarobar", "Mitrala", "Mitrajaval"],
        answer: 0,
        explanation: "Barobar expresses “with” in this phrase.",
        skill: "postpositions"
      }
    ],
    reading: {
      title: "Getting to class",
      devanagari: "मी घरातून आठ वाजता निघतो. बसस्टॉप घराजवळ आहे. मी बसने कॉलेजकडे जातो आणि मित्राबरोबर वर्गात बसतो.",
      romanized: "Mi gharatun aath vaajta nighato. Busstop gharajaval aahe. Mi basne college-kade jaato ani mitrabarobar vargaat basto.",
      english: "I leave from home at eight. The bus stop is near the house. I go toward college by bus and sit in class with a friend.",
      questions: [
        {
          question: "Where is the bus stop?",
          options: ["Near the house", "Inside the college", "Far from home"],
          answer: 0,
          explanation: "Gharajaval means near the house.",
          skill: "reading-location"
        }
      ]
    },
    listening: {
      title: "Where should I come?",
      devanagari: "तू स्टेशनजवळ ये. मी कॅफेसमोर थांबेन. तिथून आपण एकत्र जाऊ.",
      romanized: "Tu stationjaval ye. Mi cafe-samor thaamben. Tithun aapan ekatra jaau.",
      english: "Come near the station. I will wait in front of the café. From there we will go together.",
      maxReplays: 2,
      questions: [
        {
          question: "Where will the speaker wait?",
          options: ["In front of the café", "Inside the station", "At home"],
          answer: 0,
          explanation: "Cafe-samor means in front of the café.",
          skill: "listening-location"
        }
      ]
    },
    production: {
      prompt: "Describe how you travel from home to a familiar place in 4–5 sentences.",
      minSentences: 4,
      support: ["Gharatun ...", "... javal aahe", "... kade jaato/jaate", "... barobar ..."],
      requiredPatterns: ["source/from", "near or in", "with or toward"],
      modelAnswer: {
        romanized: "Mi gharatun sakaali nighato. Busstop gharajaval aahe. Mi basne college-kade jaato. College-madhe mi mitrabarobar vargaat jaato.",
        devanagari: "मी घरातून सकाळी निघतो. बसस्टॉप घराजवळ आहे. मी बसने कॉलेजकडे जातो. कॉलेजमध्ये मी मित्राबरोबर वर्गात जातो.",
        english: "I leave home in the morning. The bus stop is near my house. I go toward college by bus. At college I go to class with a friend."
      }
    },
    scenario: {
      title: "Meet near the station",
      context: "You are arranging where to meet someone.",
      startStep: "s1",
      steps: [
        {
          id: "s1",
          speaker: "Friend",
          line: "कुठे भेटायचं?",
          prompt: "Choose a location phrase.",
          options: [
            { text: "स्टेशनजवळ भेटू या.", feedback: "Good — javal gives a clear meeting location.", acceptable: true, nextStep: "s2" },
            { text: "स्टेशनातून भेटू या.", feedback: "Tun means “from,” so it does not fit the meeting location.", acceptable: false, nextStep: "s2" },
            { text: "स्टेशनला काल गेलो.", feedback: "That describes a past trip.", acceptable: false, nextStep: "s2" }
          ]
        },
        {
          id: "s2",
          speaker: "Friend",
          line: "ठीक आहे. तिथून कॅफेकडे जाऊ.",
          prompt: "Confirm the plan.",
          options: [
            { text: "हो, तिथून एकत्र जाऊ.", feedback: "Good confirmation using source + together.", acceptable: true },
            { text: "मला पाणी पाहिजे.", feedback: "Unrelated.", acceptable: false },
            { text: "काल पाऊस होता.", feedback: "Unrelated past information.", acceptable: false }
          ]
        }
      ]
    },
    items: [
      { marathi: "Gharat", devanagari: "घरात", english: "In the house" },
      { marathi: "Gharatun", devanagari: "घरातून", english: "From the house" },
      { marathi: "Gharajaval", devanagari: "घराजवळ", english: "Near the house" },
      { marathi: "College-kade", devanagari: "कॉलेजकडे", english: "Toward / to the college" },
      { marathi: "Mitrabarobar", devanagari: "मित्राबरोबर", english: "With a friend" },
      { marathi: "Cafe-samor", devanagari: "कॅफेसमोर", english: "In front of the café" }
    ]
  }),

  L({
    slug: "recipient-experiencer-patterns",
    title: "Recipient & Experiencer Patterns",
    subtitle: "Use मला, तुला, त्याला, तिला, आम्हाला, तुम्हाला",
    unit: 12,
    unitTitle: "Relationships between words",
    objective: "Use common recipient/experiencer forms in wants, feelings, and giving",
    grammarSkills: ["dative-patterns", "recipient"],
    teaching: [
      {
        title: "The -la forms are everywhere",
        explanation: "Marathi often uses forms such as mala, tula, tyaala, tila, aamhaala, and tumhaala for recipients and experiencers.",
        examples: [
          { marathi: "Mala samajla", devanagari: "मला समजलं", english: "I understood / it became clear to me" },
          { marathi: "Tula chaha pahije ka?", devanagari: "तुला चहा पाहिजे का?", english: "Do you want tea?" },
          { marathi: "Tila pustak dya", devanagari: "तिला पुस्तक द्या", english: "Give her the book" }
        ]
      }
    ],
    checks: [
      {
        question: "Which form means “to her / for her”?",
        options: ["Tila", "Tyaala", "Tumhaala"],
        answer: 0,
        explanation: "Tila is the feminine recipient/experiencer form here.",
        skill: "dative-patterns"
      },
      {
        question: "Which sentence asks “Do you want tea?” informally?",
        options: ["Tula chaha pahije ka?", "Mala chaha pahije", "Tila chaha dya"],
        answer: 0,
        explanation: "Tula marks the informal “to you” experiencer.",
        skill: "dative-patterns"
      }
    ],
    reading: {
      title: "Sharing things",
      devanagari: "माझ्याकडे दोन पेन आहेत. मला एकच पेन पाहिजे, म्हणून मी दुसरं पेन मित्राला दिलं. त्याला ते आवडलं. नंतर त्याने मला एक नोटबुक दिलं.",
      romanized: "Maajhyaakade don pen aahet. Mala ekach pen pahije, mhanun mi dusra pen mitraala dila. Tyaala te aavdla. Nantar tyaane mala ek notebook dila.",
      english: "I have two pens. I only need one pen, so I gave the other pen to a friend. He liked it. Later he gave me a notebook.",
      questions: [
        {
          question: "Who received the second pen?",
          options: ["The friend", "The speaker", "A teacher"],
          answer: 0,
          explanation: "Mitraala marks the friend as recipient.",
          skill: "reading-recipient"
        }
      ]
    },
    listening: {
      title: "Who needs what?",
      devanagari: "मला पाणी पाहिजे. तिला चहा पाहिजे आणि त्याला कॉफी पाहिजे.",
      romanized: "Mala paani pahije. Tila chaha pahije ani tyaala coffee pahije.",
      english: "I want water. She wants tea and he wants coffee.",
      maxReplays: 2,
      questions: [
        {
          question: "Who wants tea?",
          options: ["She", "He", "The speaker"],
          answer: 0,
          explanation: "Tila chaha pahije means she wants tea.",
          skill: "listening-recipient"
        }
      ]
    },
    production: {
      prompt: "Write 4 sentences using at least three different -la forms.",
      minSentences: 4,
      support: ["Mala ...", "Tula ...", "Tyaala ...", "Tila ...", "Tumhaala ..."],
      requiredPatterns: ["three recipient/experiencer forms"],
      modelAnswer: {
        romanized: "Mala chaha pahije. Tula coffee pahije ka? Tila pustak dya. Tyaala ha cinema aavadto.",
        devanagari: "मला चहा पाहिजे. तुला कॉफी पाहिजे का? तिला पुस्तक द्या. त्याला हा सिनेमा आवडतो.",
        english: "I want tea. Do you want coffee? Give her the book. He likes this movie."
      }
    },
    items: [
      { marathi: "Mala", devanagari: "मला", english: "To me / for me" },
      { marathi: "Tula", devanagari: "तुला", english: "To you (informal)" },
      { marathi: "Tyaala", devanagari: "त्याला", english: "To him" },
      { marathi: "Tila", devanagari: "तिला", english: "To her" },
      { marathi: "Aamhaala", devanagari: "आम्हाला", english: "To us" },
      { marathi: "Tumhaala", devanagari: "तुम्हाला", english: "To you (respectful/plural)" }
    ]
  }),

  L({
    slug: "possession-having",
    title: "Possession & Having",
    subtitle: "Use possessives and माझ्याकडे-style having patterns",
    unit: 12,
    unitTitle: "Relationships between words",
    objective: "Distinguish possessive agreement from having/availability patterns",
    grammarSkills: ["possession", "having"],
    teaching: [
      {
        title: "Possessive words agree with the noun",
        explanation: "Majha, majhi, and majhe/majha forms change with the noun. Learn frequent sets instead of one English word “my.”",
        examples: [
          { marathi: "Majha mitra", devanagari: "माझा मित्र", english: "My male friend" },
          { marathi: "Majhi bahin", devanagari: "माझी बहीण", english: "My sister" },
          { marathi: "Majha ghar", devanagari: "माझं घर", english: "My house" }
        ]
      },
      {
        title: "Majhyaakade often expresses having",
        explanation: "Majhyaakade ... aahe/aahet is a common way to say you have something available or in your possession.",
        examples: [
          { marathi: "Majhyaakade vel aahe", devanagari: "माझ्याकडे वेळ आहे", english: "I have time" },
          { marathi: "Majhyaakade don tikite aahet", devanagari: "माझ्याकडे दोन तिकिटे आहेत", english: "I have two tickets" }
        ]
      }
    ],
    checks: [
      {
        question: "Which phrase means “I have time”?",
        options: ["Majhyaakade vel aahe", "Majha vel aahe", "Mala vel gelo"],
        answer: 0,
        explanation: "Majhyaakade ... aahe is the having pattern here.",
        skill: "having"
      },
      {
        question: "Which possessive form fits bahin?",
        options: ["Majhi bahin", "Majha bahin", "Majhe bahin"],
        answer: 0,
        explanation: "Majhi agrees with bahin in this common phrase.",
        skill: "possession"
      }
    ],
    reading: {
      title: "What I have with me",
      devanagari: "माझ्याकडे आज दोन पुस्तके, एक पेन आणि एक नोटबुक आहे. माझं मोठं पुस्तक घरी आहे, पण माझी छोटी वही बॅगेत आहे.",
      romanized: "Maajhyaakade aaj don pustake, ek pen ani ek notebook aahe. Maajha motha pustak ghari aahe, pan maajhi chhoti vahi baget aahe.",
      english: "Today I have two books, a pen, and a notebook with me. My big book is at home, but my small notebook is in the bag.",
      questions: [
        {
          question: "Where is the small notebook?",
          options: ["In the bag", "At home", "At school"],
          answer: 0,
          explanation: "The last phrase says baget aahe.",
          skill: "reading-possession"
        }
      ]
    },
    listening: {
      title: "Do you have a charger?",
      devanagari: "तुझ्याकडे चार्जर आहे का? हो, माझ्याकडे एक अतिरिक्त चार्जर आहे.",
      romanized: "Tujhyaakade charger aahe ka? Ho, maajhyaakade ek atirikt charger aahe.",
      english: "Do you have a charger? Yes, I have an extra charger.",
      maxReplays: 2,
      questions: [
        {
          question: "What extra item does the speaker have?",
          options: ["A charger", "A phone", "A notebook"],
          answer: 0,
          explanation: "The speaker says atirikt charger.",
          skill: "listening-possession"
        }
      ]
    },
    production: {
      prompt: "Describe 4 things you have or where your things are.",
      minSentences: 4,
      support: ["Maajhyaakade ... aahe", "Maajha ...", "Maajhi ...", "... ghari aahe", "... baget aahe"],
      requiredPatterns: ["having pattern", "possessive agreement"],
      modelAnswer: {
        romanized: "Maajhyaakade ek laptop aahe. Maajha phone tablevar aahe. Maajhi notebook baget aahe. Maajhyaakade aaj thoda vel aahe.",
        devanagari: "माझ्याकडे एक लॅपटॉप आहे. माझा फोन टेबलवर आहे. माझी नोटबुक बॅगेत आहे. माझ्याकडे आज थोडा वेळ आहे.",
        english: "I have a laptop. My phone is on the table. My notebook is in the bag. I have a little time today."
      }
    },
    scenario: {
      title: "Borrow a charger",
      context: "Your phone battery is low and you need a charger.",
      startStep: "s1",
      steps: [
        {
          id: "s1",
          speaker: "You",
          line: "तुझ्याकडे चार्जर आहे का?",
          prompt: "Your friend says yes. Ask to borrow it politely.",
          options: [
            { text: "मला थोड्या वेळासाठी देऊ शकशील का?", feedback: "Good — polite request using ability.", acceptable: true, nextStep: "s2" },
            { text: "चार्जर महाग आहे.", feedback: "That comments on price, not borrowing.", acceptable: false, nextStep: "s2" },
            { text: "मी काल चार्जर घेतला.", feedback: "Past statement, not a request.", acceptable: false, nextStep: "s2" }
          ]
        },
        {
          id: "s2",
          speaker: "Friend",
          line: "हो, घे.",
          prompt: "Respond naturally.",
          options: [
            { text: "धन्यवाद, लगेच परत देईन.", feedback: "Good — thanks plus future promise.", acceptable: true },
            { text: "सरळ जा.", feedback: "Wrong context.", acceptable: false },
            { text: "कुठे आहे स्टेशन?", feedback: "Wrong context.", acceptable: false }
          ]
        }
      ]
    },
    items: [
      { marathi: "Majhyaakade ... aahe", devanagari: "माझ्याकडे ... आहे", english: "I have ..." },
      { marathi: "Tujhyaakade ... aahe ka?", devanagari: "तुझ्याकडे ... आहे का?", english: "Do you have ...? (informal)" },
      { marathi: "Majha", devanagari: "माझा", english: "My (common masculine agreement)" },
      { marathi: "Majhi", devanagari: "माझी", english: "My (common feminine agreement)" },
      { marathi: "Majha / majhe", devanagari: "माझं / माझे", english: "My (neuter/plural forms by context)" },
      { marathi: "Atirikt", devanagari: "अतिरिक्त", english: "Extra / additional" }
    ]
  }),

  L({
    slug: "adjectives-comparison",
    title: "Description & Comparison",
    subtitle: "Compare people, places, products, and choices",
    unit: 13,
    unitTitle: "Comparison, description & quantity",
    objective: "Use common descriptive words and practical comparison patterns",
    grammarSkills: ["adjectives", "comparison"],
    teaching: [
      {
        title: "Comparison often uses peksha",
        explanation: "X peksha Y ... is a practical pattern for saying Y is more/less than X.",
        examples: [
          { marathi: "Ha phone tya phonepeksha swasta aahe", devanagari: "हा फोन त्या फोनपेक्षा स्वस्त आहे", english: "This phone is cheaper than that phone" },
          { marathi: "Pune Mumbaipeksha lahan aahe", devanagari: "पुणे मुंबईपेक्षा लहान आहे", english: "Pune is smaller than Mumbai" }
        ]
      },
      {
        title: "Jast and kami express degree",
        explanation: "Jast means more, kami means less/fewer. They combine naturally with comparisons and quantities.",
        examples: [
          { marathi: "Ha jast changla aahe", devanagari: "हा जास्त चांगला आहे", english: "This one is better" },
          { marathi: "He kami mahag aahe", devanagari: "हे कमी महाग आहे", english: "This is less expensive" }
        ]
      }
    ],
    checks: [
      {
        question: "Which word marks the comparison “than” in these patterns?",
        options: ["Peksha", "Mhanun", "Nantar"],
        answer: 0,
        explanation: "Peksha introduces the comparison standard.",
        skill: "comparison"
      },
      {
        question: "Which phrase means “less expensive”?",
        options: ["Kami mahag", "Jast mahag", "Khup motha"],
        answer: 0,
        explanation: "Kami means less.",
        skill: "comparison"
      }
    ],
    reading: {
      title: "Choosing a phone",
      devanagari: "दुकानात दोन फोन होते. पहिला फोन स्वस्त होता, पण त्याची बॅटरी छोटी होती. दुसरा फोन महाग होता, पण बॅटरी जास्त चांगली होती. मला दुसरा फोन जास्त आवडला.",
      romanized: "Dukanaat don phone hote. Pahila phone swasta hota, pan tyaachi battery chhoti hoti. Dusra phone mahag hota, pan battery jast changli hoti. Mala dusra phone jast aavadla.",
      english: "There were two phones in the shop. The first was cheaper, but its battery was smaller. The second was expensive, but the battery was better. I preferred the second phone.",
      questions: [
        {
          question: "Why did the speaker prefer the second phone?",
          options: ["Its battery was better", "It was cheaper", "It was smaller"],
          answer: 0,
          explanation: "The second phone had the better battery.",
          skill: "reading-comparison"
        }
      ]
    },
    listening: {
      title: "Two travel options",
      devanagari: "बस ट्रेनपेक्षा स्वस्त आहे, पण ट्रेन जास्त वेगवान आहे. मला वेळ कमी असेल तर मी ट्रेनने जाईन.",
      romanized: "Bas trainpeksha swasta aahe, pan train jast vegvaan aahe. Mala vel kami asel tar mi trainne jaain.",
      english: "The bus is cheaper than the train, but the train is faster. If I have less time, I will go by train.",
      maxReplays: 2,
      questions: [
        {
          question: "When will the speaker choose the train?",
          options: ["When time is limited", "When money is limited", "When the bus is empty"],
          answer: 0,
          explanation: "The final condition is about having little time.",
          skill: "listening-comparison"
        }
      ]
    },
    production: {
      prompt: "Compare two phones, places, foods, or travel options in 5 sentences.",
      minSentences: 5,
      support: ["... peksha ...", "Jast ...", "Kami ...", "Pan ...", "Mala ... jast avadte"],
      requiredPatterns: ["one peksha comparison", "one contrast", "one preference"],
      modelAnswer: {
        romanized: "Train baspeksha vegvaan aahe. Bas kami mahag aahe. Pan train jast aaraamdaayak aahe. Mala train jast aavadte. Vel kami asel tar mi train nivaden.",
        devanagari: "ट्रेन बसपेक्षा वेगवान आहे. बस कमी महाग आहे. पण ट्रेन जास्त आरामदायक आहे. मला ट्रेन जास्त आवडते. वेळ कमी असेल तर मी ट्रेन निवडेन.",
        english: "The train is faster than the bus. The bus is less expensive. But the train is more comfortable. I prefer the train. If time is limited, I will choose the train."
      }
    },
    scenario: {
      title: "Choose between two products",
      context: "A shopkeeper shows you two bags.",
      startStep: "s1",
      steps: [
        {
          id: "s1",
          speaker: "Shopkeeper",
          line: "ही बॅग स्वस्त आहे. ती दुसरी बॅग थोडी महाग आहे.",
          prompt: "Ask which is better for travel.",
          options: [
            { text: "प्रवासासाठी कोणती जास्त चांगली आहे?", feedback: "Good — natural comparison question.", acceptable: true, nextStep: "s2" },
            { text: "काल कुठे गेला?", feedback: "Wrong context.", acceptable: false, nextStep: "s2" },
            { text: "मला पाणी पाहिजे.", feedback: "Unrelated.", acceptable: false, nextStep: "s2" }
          ]
        },
        {
          id: "s2",
          speaker: "Shopkeeper",
          line: "दुसरी बॅग जास्त मजबूत आहे.",
          prompt: "State your preference.",
          options: [
            { text: "मग मला दुसरी बॅग जास्त आवडते.", feedback: "Good — preference follows the comparison.", acceptable: true },
            { text: "मी घरी गेलो नाही.", feedback: "Wrong topic.", acceptable: false },
            { text: "उद्या पाऊस येईल.", feedback: "Wrong topic.", acceptable: false }
          ]
        }
      ]
    },
    items: [
      { marathi: "Peksha", devanagari: "पेक्षा", english: "Than (comparison)" },
      { marathi: "Jast", devanagari: "जास्त", english: "More" },
      { marathi: "Kami", devanagari: "कमी", english: "Less / fewer" },
      { marathi: "Swasta", devanagari: "स्वस्त", english: "Cheap / inexpensive" },
      { marathi: "Mahag", devanagari: "महाग", english: "Expensive" },
      { marathi: "Vegvaan", devanagari: "वेगवान", english: "Fast" }
    ]
  }),

  L({
    slug: "quantity-degree",
    title: "Quantity & Degree",
    subtitle: "Say too much, enough, a little, many, and few",
    unit: 13,
    unitTitle: "Comparison, description & quantity",
    objective: "Control useful quantity and degree expressions in daily situations",
    grammarSkills: ["quantity", "degree"],
    teaching: [
      {
        title: "Khup, thoda, puresa, jast, kami",
        explanation: "These words help you move beyond exact numbers and speak naturally about approximate amount and degree.",
        examples: [
          { marathi: "Khup paani", devanagari: "खूप पाणी", english: "A lot of water" },
          { marathi: "Thoda vel", devanagari: "थोडा वेळ", english: "A little time" },
          { marathi: "Puresa vel", devanagari: "पुरेसा वेळ", english: "Enough time" }
        ]
      }
    ],
    checks: [
      {
        question: "Which phrase means “enough time”?",
        options: ["Puresa vel", "Khup vel", "Kami vel"],
        answer: 0,
        explanation: "Puresa means enough in this phrase.",
        skill: "quantity"
      },
      {
        question: "Which word means “a little”?",
        options: ["Thoda", "Khup", "Jast"],
        answer: 0,
        explanation: "Thoda means a little/some.",
        skill: "degree"
      }
    ],
    reading: {
      title: "Preparing for guests",
      devanagari: "आज घरी पाच पाहुणे येणार आहेत. आमच्याकडे पुरेसा चहा आहे, पण साखर कमी आहे. म्हणून मला थोडी साखर आणावी लागेल. खूप काही घ्यायची गरज नाही.",
      romanized: "Aaj ghari paach pahune yenaar aahet. Aamchyaakade puresa chaha aahe, pan saakhar kami aahe. Mhanun mala thodi saakhar aanavi lagel. Khup kahi ghyaaychi garaj nahi.",
      english: "Five guests are coming home today. We have enough tea, but little sugar. So I need to bring some sugar. There is no need to buy a lot.",
      questions: [
        {
          question: "What is lacking?",
          options: ["Sugar", "Tea", "Guests"],
          answer: 0,
          explanation: "Saakhar kami aahe means there is little sugar.",
          skill: "reading-quantity"
        }
      ]
    },
    listening: {
      title: "How much is enough?",
      devanagari: "दोन कप चहा पुरेसा आहे. मला जास्त नको. थोडं पाणी मात्र आणा.",
      romanized: "Don cup chaha puresa aahe. Mala jast nako. Thoda paani maatra aana.",
      english: "Two cups of tea are enough. I do not want more. Please bring a little water though.",
      maxReplays: 2,
      questions: [
        {
          question: "What does the speaker want a little of?",
          options: ["Water", "Tea", "Sugar"],
          answer: 0,
          explanation: "Thoda paani means a little water.",
          skill: "listening-quantity"
        }
      ]
    },
    production: {
      prompt: "Write 4–5 sentences about what you have enough of, too much of, or too little of today.",
      minSentences: 4,
      support: ["Puresa ...", "Khup ...", "Thoda/thodi ...", "Kami ...", "Jast nako"],
      requiredPatterns: ["at least three quantity words"],
      modelAnswer: {
        romanized: "Maajhyaakade aaj puresa vel aahe. Maajhyaakade khup kaam nahi. Mala thoda abhyas karaycha aahe. Coffee jast nako. Thoda chaha puresa aahe.",
        devanagari: "माझ्याकडे आज पुरेसा वेळ आहे. माझ्याकडे खूप काम नाही. मला थोडा अभ्यास करायचा आहे. कॉफी जास्त नको. थोडा चहा पुरेसा आहे.",
        english: "I have enough time today. I do not have a lot of work. I need to study a little. I do not want too much coffee. A little tea is enough."
      }
    },
    scenario: {
      title: "Adjust a food order",
      context: "You are ordering food and want to control quantity/spice.",
      startStep: "s1",
      steps: [
        {
          id: "s1",
          speaker: "Server",
          line: "किती तिखट हवं?",
          prompt: "Ask for only a little spice.",
          options: [
            { text: "थोडं तिखट चालेल.", feedback: "Good — clear degree request.", acceptable: true, nextStep: "s2" },
            { text: "खूप तिखट नको.", feedback: "Also natural — it rejects excessive spice.", acceptable: true, nextStep: "s2" },
            { text: "काल मी जेवलो.", feedback: "Past statement, not an order adjustment.", acceptable: false, nextStep: "s2" }
          ]
        },
        {
          id: "s2",
          speaker: "Server",
          line: "आणखी भात हवा का?",
          prompt: "Say you already have enough.",
          options: [
            { text: "नको, पुरेसा आहे.", feedback: "Good — enough quantity.", acceptable: true },
            { text: "मला स्टेशनला जायचं आहे.", feedback: "Wrong context.", acceptable: false },
            { text: "उद्या येईन.", feedback: "Wrong context.", acceptable: false }
          ]
        }
      ]
    },
    items: [
      { marathi: "Khup", devanagari: "खूप", english: "A lot / very" },
      { marathi: "Thoda / thodi", devanagari: "थोडा / थोडी", english: "A little / some" },
      { marathi: "Puresa / pureshi", devanagari: "पुरेसा / पुरेशी", english: "Enough" },
      { marathi: "Jast", devanagari: "जास्त", english: "More / too much by context" },
      { marathi: "Kami", devanagari: "कमी", english: "Less / few" },
      { marathi: "Garaj nahi", devanagari: "गरज नाही", english: "There is no need" }
    ]
  }),

  L({
    slug: "cause-result-contrast",
    title: "Cause, Result & Contrast",
    subtitle: "Connect ideas with कारण, म्हणून, त्यामुळे, पण",
    unit: 14,
    unitTitle: "Linking ideas",
    objective: "Explain why something happened and contrast two ideas in connected speech",
    grammarSkills: ["cause-result", "contrast"],
    teaching: [
      {
        title: "Cause and result use different connectors",
        explanation: "Kaaran introduces a reason. Mhanun and tyamule introduce a result/consequence. Pan introduces contrast.",
        examples: [
          { marathi: "Mi ghari rahilo kaaran paus hota", devanagari: "मी घरी राहिलो कारण पाऊस होता", english: "I stayed home because it was raining" },
          { marathi: "Paus hota, mhanun mi ghari rahilo", devanagari: "पाऊस होता, म्हणून मी घरी राहिलो", english: "It was raining, so I stayed home" },
          { marathi: "Thaklo hoto, pan abhyas kela", devanagari: "थकलो होतो, पण अभ्यास केला", english: "I was tired, but I studied" }
        ]
      }
    ],
    checks: [
      {
        question: "Which connector introduces a reason?",
        options: ["Kaaran", "Mhanun", "Pan"],
        answer: 0,
        explanation: "Kaaran introduces the reason/cause.",
        skill: "cause-result"
      },
      {
        question: "Which connector marks contrast?",
        options: ["Pan", "Tyamule", "Kaaran"],
        answer: 0,
        explanation: "Pan means but.",
        skill: "contrast"
      }
    ],
    reading: {
      title: "Late for class",
      devanagari: "आज बस उशिरा आली, त्यामुळे मी वर्गाला उशिरा पोहोचलो. शिक्षक नाराज होते, पण मी कारण सांगितलं. त्यांनी समजून घेतलं कारण वाहतूक खूप होती.",
      romanized: "Aaj bas ushira aali, tyamule mi vargaala ushira pohachlo. Shikshak naaraaj hote, pan mi kaaran saangitla. Tyaanni samjun ghetla kaaran vaahatuk khup hoti.",
      english: "The bus came late today, so I reached class late. The teacher was upset, but I explained the reason. They understood because traffic was heavy.",
      questions: [
        {
          question: "What caused the speaker to be late?",
          options: ["The bus was late", "The alarm failed", "Class started early"],
          answer: 0,
          explanation: "The first sentence links the late bus to the late arrival.",
          skill: "reading-cause"
        }
      ]
    },
    listening: {
      title: "Why plans changed",
      devanagari: "मला बाहेर जायचं होतं, पण पाऊस सुरू झाला. म्हणून मी घरीच राहिलो आणि चित्रपट पाहिला.",
      romanized: "Mala baaher jaaycha hota, pan paus suru jhala. Mhanun mi gharich rahilo ani chitrapat pahila.",
      english: "I wanted to go out, but it started raining. So I stayed home and watched a movie.",
      maxReplays: 2,
      questions: [
        {
          question: "What changed the plan?",
          options: ["Rain started", "A friend arrived", "The movie ended"],
          answer: 0,
          explanation: "The rain creates the contrast and result.",
          skill: "listening-cause"
        }
      ]
    },
    production: {
      prompt: "Write 5 connected sentences explaining a problem, its reason, and what happened next.",
      minSentences: 5,
      support: ["Kaaran ...", "Mhanun ...", "Tyamule ...", "Pan ...", "Nantar ..."],
      requiredPatterns: ["reason", "result", "contrast"],
      modelAnswer: {
        romanized: "Aaj mi ushira uthlo. Tyamule mi bas chukavli. Mala taxi ghyaavi lagli, pan traffic khup hota. Mhanun mi class-la ushira pohachlo. Shikshakaanna mi kaaran saangitla.",
        devanagari: "आज मी उशिरा उठलो. त्यामुळे मी बस चुकवली. मला टॅक्सी घ्यावी लागली, पण ट्रॅफिक खूप होतं. म्हणून मी क्लासला उशिरा पोहोचलो. शिक्षकांना मी कारण सांगितलं.",
        english: "Today I woke up late. Because of that I missed the bus. I had to take a taxi, but traffic was heavy. So I reached class late. I explained the reason to the teacher."
      }
    },
    scenario: {
      title: "Explain why you are late",
      context: "You arrive late and need to explain the reason.",
      startStep: "s1",
      steps: [
        {
          id: "s1",
          speaker: "Teacher",
          line: "तुला उशीर का झाला?",
          prompt: "Give a cause.",
          options: [
            { text: "बस उशिरा आली, त्यामुळे मला उशीर झाला.", feedback: "Good — clear cause and result.", acceptable: true, nextStep: "s2" },
            { text: "मला चहा आवडतो.", feedback: "Unrelated.", acceptable: false, nextStep: "s2" },
            { text: "उद्या मी येईन.", feedback: "Future, not an explanation.", acceptable: false, nextStep: "s2" }
          ]
        },
        {
          id: "s2",
          speaker: "Teacher",
          line: "ठीक आहे. पुढच्या वेळी थोडं लवकर निघ.",
          prompt: "Respond appropriately.",
          options: [
            { text: "हो, पुढच्या वेळी लवकर निघेन.", feedback: "Good — acknowledges and gives a future commitment.", acceptable: true },
            { text: "किती पैसे?", feedback: "Wrong context.", acceptable: false },
            { text: "सरळ जा.", feedback: "Wrong context.", acceptable: false }
          ]
        }
      ]
    },
    items: [
      { marathi: "Kaaran", devanagari: "कारण", english: "Because / reason" },
      { marathi: "Mhanun", devanagari: "म्हणून", english: "So / therefore" },
      { marathi: "Tyamule", devanagari: "त्यामुळे", english: "Because of that / therefore" },
      { marathi: "Pan", devanagari: "पण", english: "But" },
      { marathi: "Kaaran saangne", devanagari: "कारण सांगणे", english: "To explain the reason" },
      { marathi: "Samjun ghene", devanagari: "समजून घेणे", english: "To understand / be understanding" }
    ]
  }),

  L({
    slug: "contrast-concession",
    title: "Contrast & Concession",
    subtitle: "Use पण, तरी, तरीही to express a stronger contrast",
    unit: 14,
    unitTitle: "Linking ideas",
    objective: "Understand and produce contrast beyond a simple “but”",
    grammarSkills: ["contrast", "concession"],
    teaching: [
      {
        title: "Tari / tarihi adds “even so / nevertheless”",
        explanation: "Pan gives a basic contrast. Tari or tarihi can show that the second idea happens despite the first.",
        examples: [
          { marathi: "Paus hota, tarihi aamhi gelo", devanagari: "पाऊस होता, तरीही आम्ही गेलो", english: "It was raining; nevertheless, we went" },
          { marathi: "To thakla hota, tari kaam kela", devanagari: "तो थकला होता, तरी काम केलं", english: "He was tired, yet he worked" }
        ]
      }
    ],
    checks: [
      {
        question: "Which word best matches “nevertheless / even so”?",
        options: ["Tarihi", "Kaaran", "Mhanun"],
        answer: 0,
        explanation: "Tarihi expresses a stronger concessive contrast.",
        skill: "concession"
      }
    ],
    reading: {
      title: "A difficult test",
      devanagari: "परीक्षा कठीण होती. काही प्रश्न मला समजले नाहीत, तरीही मी शांत राहिलो. वेळ कमी होता, पण मी शेवटपर्यंत प्रयत्न केला.",
      romanized: "Pariksha kathin hoti. Kahi prashna mala samajle nahit, tarihi mi shaant rahilo. Vel kami hota, pan mi shevatparyant prayatna kela.",
      english: "The exam was difficult. I did not understand some questions, but I still stayed calm. Time was short, but I kept trying until the end.",
      questions: [
        {
          question: "What did the speaker do despite not understanding some questions?",
          options: ["Stayed calm", "Left the exam", "Asked for a refund"],
          answer: 0,
          explanation: "Tarihi introduces what happened despite the difficulty.",
          skill: "reading-concession"
        }
      ]
    },
    listening: {
      title: "Still going",
      devanagari: "मी खूप थकलो आहे, तरीही मी आजचा अभ्यास पूर्ण करेन.",
      romanized: "Mi khup thaklo aahe, tarihi mi aajcha abhyas purna karen.",
      english: "I am very tired; nevertheless, I will finish today's study.",
      maxReplays: 2,
      questions: [
        {
          question: "What will the speaker do despite being tired?",
          options: ["Finish today's study", "Go to sleep immediately", "Cancel the plan"],
          answer: 0,
          explanation: "Tarihi shows the action continues despite tiredness.",
          skill: "listening-concession"
        }
      ]
    },
    production: {
      prompt: "Write 4–5 sentences about something difficult that you did anyway.",
      minSentences: 4,
      support: ["... hota/hoti", "Pan ...", "Tari ...", "Tarihi ..."],
      requiredPatterns: ["one basic contrast", "one concession"],
      modelAnswer: {
        romanized: "Aaj mi thaklo hoto. Abhyas kathin hota, pan mi suru thevla. Kahi prashna avghad hote, tarihi mi prayatna kela. Shevti mi kaam purna kela.",
        devanagari: "आज मी थकलो होतो. अभ्यास कठीण होता, पण मी सुरू ठेवला. काही प्रश्न अवघड होते, तरीही मी प्रयत्न केला. शेवटी मी काम पूर्ण केलं.",
        english: "Today I was tired. Studying was difficult, but I continued. Some questions were hard, but I still tried. Finally I finished the work."
      }
    },
    items: [
      { marathi: "Tari", devanagari: "तरी", english: "Yet / even so" },
      { marathi: "Tarihi", devanagari: "तरीही", english: "Nevertheless / even so" },
      { marathi: "Pan", devanagari: "पण", english: "But" },
      { marathi: "Shevatparyant", devanagari: "शेवटपर्यंत", english: "Until the end" },
      { marathi: "Prayatna karne", devanagari: "प्रयत्न करणे", english: "To try / make an effort" },
      { marathi: "Suru thevne", devanagari: "सुरू ठेवणे", english: "To continue" }
    ]
  }),

  L({
    slug: "conditions",
    title: "Conditions",
    subtitle: "Use जर ... तर ... and practical if/then patterns",
    unit: 14,
    unitTitle: "Linking ideas",
    objective: "Understand and create simple conditions about plans and consequences",
    grammarSkills: ["conditionals"],
    teaching: [
      {
        title: "Jar ... tar ... gives a clear if/then frame",
        explanation: "Jar introduces the condition and tar introduces the result. In everyday speech, one side may sometimes be omitted when context is clear.",
        examples: [
          { marathi: "Jar paus aala tar mi ghari rahin", devanagari: "जर पाऊस आला तर मी घरी राहीन", english: "If it rains, I will stay home" },
          { marathi: "Vel milala tar phone kar", devanagari: "वेळ मिळाला तर फोन कर", english: "If you get time, call" }
        ]
      }
    ],
    checks: [
      {
        question: "Which pair forms the clearest if/then frame?",
        options: ["Jar ... tar ...", "Kaaran ... mhanun ...", "Pan ... tarihi ..."],
        answer: 0,
        explanation: "Jar ... tar ... is the target condition pattern.",
        skill: "conditionals"
      }
    ],
    reading: {
      title: "Plan B",
      devanagari: "जर उद्या हवामान चांगलं असेल तर आम्ही किल्ल्यावर जाऊ. जर पाऊस आला तर आम्ही शहरातल्या संग्रहालयात जाऊ. वेळ कमी असेल तर फक्त कॅफेत भेटू.",
      romanized: "Jar udya havaamaan changla asel tar aamhi killyavar jaau. Jar paus aala tar aamhi shaharaatlya sangrahaalayaat jaau. Vel kami asel tar fakta cafe-t bhetu.",
      english: "If the weather is good tomorrow, we will go to the fort. If it rains, we will go to the city museum. If time is short, we will only meet at a café.",
      questions: [
        {
          question: "What is the rainy-weather plan?",
          options: ["Go to the museum", "Go to the fort", "Stay home"],
          answer: 0,
          explanation: "The second condition sends them to the museum.",
          skill: "reading-condition"
        }
      ]
    },
    listening: {
      title: "Conditional invitation",
      devanagari: "तुला वेळ असेल तर संध्याकाळी ये. आपण एकत्र जेवू.",
      romanized: "Tula vel asel tar sandhyaakaali ye. Aapan ekatra jevu.",
      english: "If you have time, come in the evening. We will eat together.",
      maxReplays: 2,
      questions: [
        {
          question: "When should the listener come?",
          options: ["If they have time", "Only in the morning", "After an exam"],
          answer: 0,
          explanation: "Tula vel asel tar sets the condition.",
          skill: "listening-condition"
        }
      ]
    },
    production: {
      prompt: "Write 5 sentences with at least two different if/then conditions.",
      minSentences: 5,
      support: ["Jar ... tar ...", "Vel milala tar ...", "Paus aala tar ...", "... asel tar ..."],
      requiredPatterns: ["two conditions", "future/result clause"],
      modelAnswer: {
        romanized: "Jar mala vel milala tar mi gym-la jaain. Jar paus aala tar mi ghari vyaayaam karin. Mitra mokla asel tar aamhi chaha gheu. Vel kami asel tar mi lavkar parat yein. Jar sagla purna jhala tar mi cinema pahin.",
        devanagari: "जर मला वेळ मिळाला तर मी जिमला जाईन. जर पाऊस आला तर मी घरी व्यायाम करीन. मित्र मोकळा असेल तर आम्ही चहा घेऊ. वेळ कमी असेल तर मी लवकर परत येईन. जर सगळं पूर्ण झालं तर मी सिनेमा पाहीन.",
        english: "If I get time, I will go to the gym. If it rains, I will exercise at home. If my friend is free, we will have tea. If time is short, I will return early. If everything is finished, I will watch a movie."
      }
    },
    scenario: {
      title: "Plan around the weather",
      context: "You are planning an outing but the forecast is uncertain.",
      startStep: "s1",
      steps: [
        {
          id: "s1",
          speaker: "Friend",
          line: "उद्या पाऊस आला तर काय करू?",
          prompt: "Give a conditional alternative.",
          options: [
            { text: "पाऊस आला तर संग्रहालयात जाऊ.", feedback: "Good — condition plus alternative plan.", acceptable: true, nextStep: "s2" },
            { text: "काल आम्ही गेलो.", feedback: "Past statement, not a plan.", acceptable: false, nextStep: "s2" },
            { text: "मला चहा आवडतो.", feedback: "Unrelated.", acceptable: false, nextStep: "s2" }
          ]
        },
        {
          id: "s2",
          speaker: "Friend",
          line: "आणि हवामान चांगलं असेल तर?",
          prompt: "Give the other branch.",
          options: [
            { text: "हवामान चांगलं असेल तर किल्ल्यावर जाऊ.", feedback: "Good — second condition branch.", acceptable: true },
            { text: "मी गेलो नाही.", feedback: "Past negative.", acceptable: false },
            { text: "बिल द्या.", feedback: "Wrong context.", acceptable: false }
          ]
        }
      ]
    },
    items: [
      { marathi: "Jar", devanagari: "जर", english: "If" },
      { marathi: "Tar", devanagari: "तर", english: "Then / if-result marker" },
      { marathi: "Asel tar", devanagari: "असेल तर", english: "If it is / if there is" },
      { marathi: "Aala tar", devanagari: "आला तर", english: "If it comes/happens" },
      { marathi: "Vel milala tar", devanagari: "वेळ मिळाला तर", english: "If there is time" },
      { marathi: "Fakta", devanagari: "फक्त", english: "Only / just" }
    ]
  }),

  L({
    slug: "relative-correlative",
    title: "Relative & Correlative Patterns",
    subtitle: "Recognize जो ... तो ..., जे ... ते ..., जिथे ... तिथे ...",
    unit: 14,
    unitTitle: "Linking ideas",
    objective: "Understand common relative/correlative structures and use a few guided patterns",
    grammarSkills: ["relative-correlative"],
    teaching: [
      {
        title: "Marathi often pairs question-like relatives with matching correlatives",
        explanation: "Patterns such as jo...to, je...te, and jithe...tithe connect two clauses. At intermediate level, recognition matters first; production can stay controlled.",
        examples: [
          { marathi: "Jo mehnat karto, to shikto", devanagari: "जो मेहनत करतो, तो शिकतो", english: "The one who works hard learns" },
          { marathi: "Je pahije, te ghe", devanagari: "जे पाहिजे, ते घे", english: "Take what you want" },
          { marathi: "Jithe bus thambte, tithe thaamb", devanagari: "जिथे बस थांबते, तिथे थांब", english: "Wait where the bus stops" }
        ]
      }
    ],
    checks: [
      {
        question: "Which pair means roughly “where ... there ...”?",
        options: ["Jithe ... tithe ...", "Jar ... tar ...", "Kaaran ... mhanun ..."],
        answer: 0,
        explanation: "Jithe ... tithe ... links a place to the corresponding place/result.",
        skill: "relative-correlative"
      },
      {
        question: "Which pattern means “what ... that ...”?",
        options: ["Je ... te ...", "Jo ... to ...", "Jithe ... tithe ..."],
        answer: 0,
        explanation: "Je ... te ... is the target neuter/thing pattern here.",
        skill: "relative-correlative"
      }
    ],
    reading: {
      title: "Choose what works",
      devanagari: "जे तुला सोपं वाटतं, ते आधी कर. जिथे अडचण येते, तिथे शिक्षकांना विचार. जो नियमित सराव करतो, तो हळूहळू सुधारतो.",
      romanized: "Je tula sopa vaatata, te aadhi kar. Jithe adchan yete, tithe shikshakaanna vichaar. Jo niyamit saraav karto, to haluhalu sudhaarto.",
      english: "Do first what feels easy to you. Where you have difficulty, ask the teacher. The person who practices regularly gradually improves.",
      questions: [
        {
          question: "What should you do where there is difficulty?",
          options: ["Ask the teacher", "Stop studying", "Skip everything"],
          answer: 0,
          explanation: "Jithe adchan yete, tithe shikshakaanna vichaar.",
          skill: "reading-relative"
        }
      ]
    },
    listening: {
      title: "Where to wait",
      devanagari: "जिथे मुख्य गेट आहे, तिथे थांब. जो आधी पोहोचेल, तो दुसऱ्याला फोन करेल.",
      romanized: "Jithe mukhya gate aahe, tithe thaamb. Jo aadhi pohochel, to dusryaala phone karel.",
      english: "Wait where the main gate is. Whoever arrives first will call the other person.",
      maxReplays: 2,
      questions: [
        {
          question: "Who will make the phone call?",
          options: ["Whoever arrives first", "Whoever arrives last", "The security guard"],
          answer: 0,
          explanation: "Jo aadhi pohochel, to ... means whoever arrives first will ...",
          skill: "listening-relative"
        }
      ]
    },
    production: {
      prompt: "Write 4–5 sentences using one je...te or jithe...tithe pattern and one jo...to pattern.",
      minSentences: 4,
      support: ["Je ... te ...", "Jithe ... tithe ...", "Jo ... to ..."],
      requiredPatterns: ["one relative/correlative pair"],
      modelAnswer: {
        romanized: "Je mala samajat nahi, te mi punha vaachto. Jithe shaantata aste, tithe mi abhyas karto. Jo roj saraav karto, to lavkar sudhaarto. Mala hi paddhat aavadte.",
        devanagari: "जे मला समजत नाही, ते मी पुन्हा वाचतो. जिथे शांतता असते, तिथे मी अभ्यास करतो. जो रोज सराव करतो, तो लवकर सुधारतो. मला ही पद्धत आवडते.",
        english: "What I do not understand, I read again. Where it is quiet, I study. Whoever practices daily improves quickly. I like this method."
      }
    },
    scenario: {
      title: "Follow a meeting instruction",
      context: "A friend gives you a location using a relative/correlative pattern.",
      startStep: "s1",
      steps: [
        {
          id: "s1",
          speaker: "Friend",
          line: "जिथे मोठं घड्याळ आहे, तिथे थांब.",
          prompt: "Show that you understood the location.",
          options: [
            { text: "ठीक आहे, मोठं घड्याळ जिथे आहे तिथे थांबेन.", feedback: "Good — you restate the relative location.", acceptable: true, nextStep: "s2" },
            { text: "मी काल घड्याळ घेतलं.", feedback: "Unrelated past information.", acceptable: false, nextStep: "s2" },
            { text: "किती पैसे?", feedback: "Wrong context.", acceptable: false, nextStep: "s2" }
          ]
        },
        {
          id: "s2",
          speaker: "Friend",
          line: "जो आधी पोहोचेल, तो फोन करेल.",
          prompt: "Confirm the rule.",
          options: [
            { text: "हो, जो आधी पोहोचेल तो फोन करेल.", feedback: "Good — correct confirmation.", acceptable: true },
            { text: "मी चहा घेईन.", feedback: "Unrelated.", acceptable: false },
            { text: "सरळ जा.", feedback: "Wrong context.", acceptable: false }
          ]
        }
      ]
    },
    items: [
      { marathi: "Jo ... to ...", devanagari: "जो ... तो ...", english: "The one who ... that/he ..." },
      { marathi: "Je ... te ...", devanagari: "जे ... ते ...", english: "What/that which ... that ..." },
      { marathi: "Jithe ... tithe ...", devanagari: "जिथे ... तिथे ...", english: "Where ... there ..." },
      { marathi: "Aadhi", devanagari: "आधी", english: "First / before" },
      { marathi: "Niyamit", devanagari: "नियमित", english: "Regular" },
      { marathi: "Adchan", devanagari: "अडचण", english: "Difficulty / problem" }
    ]
  })
];
