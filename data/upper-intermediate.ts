import type { Lesson } from "./lessons";

export const upperIntermediateLessons: Lesson[] = [
  {
    slug: "reported-speech",
    title: "Report What Someone Said",
    subtitle: "Retell information instead of repeating every sentence directly",
    unit: 17,
    unitTitle: "Report & retell",
    objective: "Report simple statements, instructions, and information from another person",
    grammarSkills: ["reported-speech", "retelling"],
    teaching: [
      {
        title: "Use सांगितलं की ... to report information",
        explanation: "A practical way to report a statement is to introduce it with सांगितलं की / म्हणाला की and then give the message.",
        examples: [
          { marathi: "Shikshakanni saangitla ki udya test aahe", devanagari: "शिक्षकांनी सांगितलं की उद्या टेस्ट आहे", english: "The teacher said that there is a test tomorrow" },
          { marathi: "To mhanala ki to ushira yeil", devanagari: "तो म्हणाला की तो उशिरा येईल", english: "He said that he would come late" }
        ]
      },
      {
        title: "Report the useful meaning, not every original word",
        explanation: "In real conversation, reporting usually summarizes the important information rather than copying the exact sentence.",
        examples: [
          { marathi: "Tine mala lavkar yaayla saangitla", devanagari: "तिने मला लवकर यायला सांगितलं", english: "She told me to come early" }
        ]
      }
    ],
    checks: [
      {
        question: "Which sentence reports what the teacher said?",
        options: ["Shikshakanni saangitla ki udya test aahe", "Udya test aahe ka?", "Mi test lihito"],
        answer: 0,
        explanation: "Saangitla ki introduces reported information.",
        skill: "reported-speech"
      }
    ],
    reading: {
      title: "After the meeting",
      devanagari: "मी मिटिंगला उशिरा पोहोचलो, म्हणून नंतर मित्राला काय झालं ते विचारलं. त्याने सांगितलं की प्रोजेक्टची अंतिम तारीख दोन दिवसांनी पुढे ढकलली आहे. शिक्षकांनी सगळ्यांना डेटा पुन्हा तपासायला सांगितलं आणि शुक्रवारी छोटा अपडेट द्यायला सांगितलं.",
      romanized: "Mi meeting-la ushira pohachlo, mhanun nantar mitraala kay jhala te vicharla. Tyaane saangitla ki projectchi antim taarikh don divsanni pudhe dhakalli aahe. Shikshakanni saglyanna data punha tapaasaayla saangitla ani shukravaari chhota update dyaayla saangitla.",
      english: "I reached the meeting late, so afterward I asked a friend what happened. He said that the project deadline had been moved two days later. The teacher told everyone to check the data again and give a short update on Friday.",
      questions: [
        {
          question: "What changed after the meeting?",
          options: ["The deadline moved two days later", "The project was cancelled", "Friday became a holiday"],
          answer: 0,
          explanation: "That is the main reported change.",
          skill: "reading-reported"
        }
      ]
    },
    production: {
      prompt: "Write 5 sentences reporting what a teacher, friend, or family member told you recently.",
      minSentences: 5,
      support: ["... saangitla ki ...", "... mhanala/mhanali ki ...", "Mala ... karayla saangitla", "Nantar ..."],
      requiredPatterns: ["two reported statements", "one reported instruction"],
      modelAnswer: {
        romanized: "Aaj shikshakanni saangitla ki somvaari quiz aahe. Tyaanni aamhaala chapter punha vaachaayla saangitla. Majha mitra mhanala ki to sandhyakaali abhyas karnaar aahe. Tyaane malaahi join vhaayla saangitla. Mhanun mi sandhyakaali tyachyabarobar abhyas kareen.",
        devanagari: "आज शिक्षकांनी सांगितलं की सोमवारी क्विझ आहे. त्यांनी आम्हाला चॅप्टर पुन्हा वाचायला सांगितलं. माझा मित्र म्हणाला की तो संध्याकाळी अभ्यास करणार आहे. त्याने मलाही जॉइन व्हायला सांगितलं. म्हणून मी संध्याकाळी त्याच्याबरोबर अभ्यास करीन.",
        english: "Today the teacher said there is a quiz on Monday. They told us to read the chapter again. My friend said he will study in the evening. He asked me to join too. So I will study with him in the evening."
      }
    },
    items: [
      { marathi: "Saangitla ki", devanagari: "सांगितलं की", english: "Said/told that ..." },
      { marathi: "Mhanala ki", devanagari: "म्हणाला की", english: "He said that ..." },
      { marathi: "Mhanali ki", devanagari: "म्हणाली की", english: "She said that ..." },
      { marathi: "... karayla saangitla", devanagari: "... करायला सांगितलं", english: "Told someone to do ..." },
      { marathi: "Kay jhala te", devanagari: "काय झालं ते", english: "What happened" },
      { marathi: "Update dya", devanagari: "अपडेट द्या", english: "Give an update" }
    ]
  },
  {
    slug: "habitual-past",
    title: "Talk About Past Habits",
    subtitle: "Describe what used to happen regularly",
    unit: 17,
    unitTitle: "Report & retell",
    objective: "Contrast old routines with what happens now",
    grammarSkills: ["habitual-past", "past-present-contrast"],
    teaching: [
      {
        title: "Use regular-time context + past routine forms",
        explanation: "Marathi can express past habits in several ways. At this level, focus on common routine chunks such as जायचो / जायचे and करायचो / करायचे in context.",
        examples: [
          { marathi: "Mi roj cycle-ne shaaleet jaaycho", devanagari: "मी रोज सायकलने शाळेत जायचो", english: "I used to go to school by bicycle every day (male speaker)" },
          { marathi: "Mi roj sakali vaachaayche", devanagari: "मी रोज सकाळी वाचायचे", english: "I used to read every morning (female speaker, common learner pattern)" }
        ]
      }
    ],
    checks: [
      {
        question: "Which sentence describes a repeated past habit?",
        options: ["Mi roj cycle-ne shaaleet jaaycho", "Mi udya cycle-ne jaeen", "Mi aata cycle-ne jaat aahe"],
        answer: 0,
        explanation: "Roj + jaaycho gives a habitual past reading.",
        skill: "habitual-past"
      }
    ],
    reading: {
      title: "Then and now",
      devanagari: "मी लहान असताना रोज संध्याकाळी मैदानावर खेळायला जायचो. घरी आल्यावर टीव्ही पाहायचो आणि मग गृहपाठ करायचो. आता माझं वेळापत्रक वेगळं आहे. मी बहुतेक वेळा संध्याकाळी अभ्यास करतो आणि आठवड्यातून दोनदा व्यायाम करतो.",
      romanized: "Mi lahan astaana roj sandhyakaali maidaanavar khelaayla jaaycho. Ghari aalyavar TV pahaaycho ani mag gruhpaath karaaycho. Aata majha velapatrak vegla aahe. Mi bahutek vela sandhyakaali abhyas karto ani aathavdyatun donda vyaayaam karto.",
      english: "When I was young, I used to go play on the ground every evening. After coming home, I used to watch TV and then do homework. Now my schedule is different. I mostly study in the evening and exercise twice a week.",
      questions: [
        {
          question: "What changed in the speaker's evening routine?",
          options: ["Now evenings are mostly for study", "Now the speaker never studies", "Now the speaker plays every day"],
          answer: 0,
          explanation: "The passage contrasts past play with current study.",
          skill: "reading-past-present"
        }
      ]
    },
    production: {
      prompt: "Write 6 sentences comparing one old habit with your routine now.",
      minSentences: 6,
      support: ["Lahan astaana ...", "Roj ... jaaycho/jaayche", "Aadhi ...", "Pan aata ...", "Aata mi ..."],
      requiredPatterns: ["past habit", "present contrast", "time expression"],
      modelAnswer: {
        romanized: "Aadhi mi roj ushira uthaycho. Sakali ghai asaychi. Mi naashta lavkar karaaycho ani college-la dhaavat jaaycho. Pan aata mi lavkar uthto. Mi shaantpane naashta karto. Mhanun majhi sakal aata jast changli jaate.",
        devanagari: "आधी मी रोज उशिरा उठायचो. सकाळी घाई असायची. मी नाश्ता लवकर करायचो आणि कॉलेजला धावत जायचो. पण आता मी लवकर उठतो. मी शांतपणे नाश्ता करतो. म्हणून माझी सकाळ आता जास्त चांगली जाते.",
        english: "I used to get up late every day. Mornings used to be rushed. I would eat breakfast quickly and rush to college. But now I get up early. I eat breakfast calmly. So my mornings go better now."
      }
    },
    items: [
      { marathi: "Jaaycho / jaayche", devanagari: "जायचो / जायचे", english: "Used to go (forms by speaker/context)" },
      { marathi: "Karaaycho / karaayche", devanagari: "करायचो / करायचे", english: "Used to do" },
      { marathi: "Lahan astaana", devanagari: "लहान असताना", english: "When I was young" },
      { marathi: "Aadhi", devanagari: "आधी", english: "Earlier / before" },
      { marathi: "Pan aata", devanagari: "पण आता", english: "But now" },
      { marathi: "Bahutek vela", devanagari: "बहुतेक वेळा", english: "Most of the time" }
    ]
  },
  {
    slug: "certainty-possibility",
    title: "Certainty, Doubt & Possibility",
    subtitle: "Sound less absolute when you are not completely sure",
    unit: 18,
    unitTitle: "Nuance & stance",
    objective: "Express certainty, possibility, and uncertainty appropriately",
    grammarSkills: ["certainty", "possibility", "doubt"],
    teaching: [
      {
        title: "Not every statement needs to sound certain",
        explanation: "Words like कदाचित, बहुतेक, नक्की, and वाटतं help show how certain you are.",
        examples: [
          { marathi: "Kadaachit paus yeil", devanagari: "कदाचित पाऊस येईल", english: "Maybe it will rain" },
          { marathi: "Bahutek to ushira yeil", devanagari: "बहुतेक तो उशिरा येईल", english: "He will probably come late" },
          { marathi: "To nakki yeil", devanagari: "तो नक्की येईल", english: "He will definitely come" }
        ]
      }
    ],
    checks: [
      {
        question: "Which word means “maybe / perhaps”?",
        options: ["Kadaachit", "Nakki", "Shevti"],
        answer: 0,
        explanation: "Kadaachit marks possibility.",
        skill: "possibility"
      },
      {
        question: "Which word expresses the strongest certainty?",
        options: ["Nakki", "Bahutek", "Kadaachit"],
        answer: 0,
        explanation: "Nakki means definitely/certainly.",
        skill: "certainty"
      }
    ],
    listening: {
      title: "Uncertain weather plan",
      devanagari: "बहुतेक उद्या सकाळी पाऊस येईल, पण दुपारी हवामान साफ होईल असं वाटतं. त्यामुळे आपण प्लॅन रद्द करू नये. कदाचित दुपारनंतर बाहेर जाता येईल.",
      romanized: "Bahutek udya sakali paus yeil, pan dupari havaamaan saaf hoil asa vaatta. Tyamule aapan plan radd karu naye. Kadaachit duparnantar baaher jaata yeil.",
      english: "It will probably rain tomorrow morning, but it seems the weather will clear in the afternoon. So we should not cancel the plan. Maybe we can go out after noon.",
      maxReplays: 2,
      questions: [
        {
          question: "How certain is the speaker that the weather will improve?",
          options: ["Not completely certain", "Completely certain", "Certain it will get worse"],
          answer: 0,
          explanation: "Asa vaatta and kadaachit both reduce certainty.",
          skill: "listening-stance"
        }
      ]
    },
    production: {
      prompt: "Write 5 sentences about plans or predictions using three different certainty levels.",
      minSentences: 5,
      support: ["Kadaachit ...", "Bahutek ...", "Mala vaatta ...", "Nakki ..."],
      requiredPatterns: ["maybe", "probably", "definitely"],
      modelAnswer: {
        romanized: "Kadaachit udya paus yeil. Bahutek mi sakali ghari asen. Mala vaatta dupari havaamaan changla hoil. Mi sandhyakaali nakki abhyas kareen. Vel milala tar kadaachit mitraala bheteen.",
        devanagari: "कदाचित उद्या पाऊस येईल. बहुतेक मी सकाळी घरी असेन. मला वाटतं दुपारी हवामान चांगलं होईल. मी संध्याकाळी नक्की अभ्यास करीन. वेळ मिळाला तर कदाचित मित्राला भेटीन.",
        english: "Maybe it will rain tomorrow. I will probably be home in the morning. I think the weather will improve in the afternoon. I will definitely study in the evening. If there is time, maybe I will meet a friend."
      }
    },
    items: [
      { marathi: "Kadaachit", devanagari: "कदाचित", english: "Maybe / perhaps" },
      { marathi: "Bahutek", devanagari: "बहुतेक", english: "Probably / mostly" },
      { marathi: "Nakki", devanagari: "नक्की", english: "Definitely / certainly" },
      { marathi: "Mala vaatta", devanagari: "मला वाटतं", english: "I think / it seems to me" },
      { marathi: "Asa vaatta", devanagari: "असं वाटतं", english: "It seems" },
      { marathi: "Khaatri nahi", devanagari: "खात्री नाही", english: "Not sure" }
    ]
  },
  {
    slug: "advice-disagreement",
    title: "Advice & Polite Disagreement",
    subtitle: "Recommend something without sounding too absolute",
    unit: 18,
    unitTitle: "Nuance & stance",
    objective: "Give advice, acknowledge another view, and disagree politely",
    grammarSkills: ["advice", "polite-disagreement"],
    teaching: [
      {
        title: "Advice can be softer than a command",
        explanation: "Use मला वाटतं..., मी सुचवेन की..., or ... केलं तर चांगलं to sound helpful rather than commanding.",
        examples: [
          { marathi: "Mi suchaven ki tu aadhi saraav kar", devanagari: "मी सुचवेन की तू आधी सराव कर", english: "I would suggest that you practice first" },
          { marathi: "Thoda lavkar nighalas tar changla", devanagari: "थोडं लवकर निघालास तर चांगलं", english: "It would be good if you left a little earlier" }
        ]
      },
      {
        title: "Acknowledge before disagreeing",
        explanation: "Phrases such as तुमचा मुद्दा समजतो, पण... help keep disagreement polite.",
        examples: [
          { marathi: "Tumcha mudda samajto, pan majha mat vegla aahe", devanagari: "तुमचा मुद्दा समजतो, पण माझं मत वेगळं आहे", english: "I understand your point, but my opinion is different" }
        ]
      }
    ],
    checks: [
      {
        question: "Which is the most polite disagreement?",
        options: ["Tumcha mudda samajto, pan majha mat vegla aahe", "Tumhi chukicha aahat", "Nahi, bas"],
        answer: 0,
        explanation: "It acknowledges the other person's view before disagreeing.",
        skill: "polite-disagreement"
      }
    ],
    reading: {
      title: "Two study styles",
      devanagari: "माझा मित्र म्हणतो की परीक्षेच्या आधी एकाच दिवशी खूप अभ्यास करणं पुरेसं आहे. त्याचा मुद्दा मला समजतो, कारण काही लोकांना दबावाखाली चांगलं काम करता येतं. पण माझ्या मते रोज थोडा सराव करणं जास्त उपयोगी आहे. मी त्याला अभ्यास छोट्या भागांत विभागायला सुचवेन.",
      romanized: "Majha mitra mhanto ki parikshechya aadhi ekaach divshi khup abhyas karna puresa aahe. Tyacha mudda mala samajto, karan kahi lokaanna dabaavakhali changla kaam karta yeta. Pan majhya mate roj thoda saraav karna jast upayogi aahe. Mi tyaala abhyas chhotya bhaagaat vibhaagaayla suchaven.",
      english: "My friend says studying a lot on one day before an exam is enough. I understand his point because some people work well under pressure. But in my opinion, a little practice every day is more useful. I would suggest dividing study into smaller parts.",
      questions: [
        {
          question: "Does the writer completely reject the friend's view?",
          options: ["No, the writer acknowledges it before disagreeing", "Yes, immediately", "The writer agrees fully"],
          answer: 0,
          explanation: "The passage explicitly acknowledges the point first.",
          skill: "reading-stance"
        }
      ]
    },
    production: {
      prompt: "Write 6 sentences giving advice on a familiar topic and politely disagreeing with one alternative view.",
      minSentences: 6,
      support: ["Mi suchaven ki ...", "... kelat tar changla", "Tumcha mudda samajto, pan ...", "Majhya mate ..."],
      requiredPatterns: ["advice", "acknowledgement", "polite disagreement"],
      modelAnswer: {
        romanized: "Majhya mate Marathi sudhaaraaychi asel tar roj aikayla hava. Mi suchaven ki darroj daha minita mothyaane bola. Kahi loka mhantaat ki fakta vocabulary puresi aahe. Tyanchaa mudda samajto, pan mi purnapane sahamat nahi. Shabda mahit asne upayogi aahe, pan vaakyata vaparna jast mahatvacha aahe. Mhanun aikne ani bolne donhi kara.",
        devanagari: "माझ्या मते मराठी सुधारायची असेल तर रोज ऐकायला हवं. मी सुचवेन की दररोज दहा मिनिटं मोठ्याने बोला. काही लोक म्हणतात की फक्त vocabulary पुरेशी आहे. त्यांचा मुद्दा समजतो, पण मी पूर्णपणे सहमत नाही. शब्द माहित असणं उपयोगी आहे, पण वाक्यात वापरणं जास्त महत्त्वाचं आहे. म्हणून ऐकणं आणि बोलणं दोन्ही करा.",
        english: "In my opinion, if you want to improve Marathi, you should listen every day. I would suggest speaking aloud for ten minutes daily. Some people say vocabulary alone is enough. I understand their point, but I do not fully agree. Knowing words is useful, but using them in sentences is more important. So do both listening and speaking."
      }
    },
    items: [
      { marathi: "Mi suchaven ki", devanagari: "मी सुचवेन की", english: "I would suggest that ..." },
      { marathi: "... kelat tar changla", devanagari: "... केलंत तर चांगलं", english: "It would be good if you ..." },
      { marathi: "Tumcha mudda samajto", devanagari: "तुमचा मुद्दा समजतो", english: "I understand your point" },
      { marathi: "Majha mat vegla aahe", devanagari: "माझं मत वेगळं आहे", english: "My opinion is different" },
      { marathi: "Purnapane sahamat nahi", devanagari: "पूर्णपणे सहमत नाही", english: "Do not completely agree" },
      { marathi: "Upayogi", devanagari: "उपयोगी", english: "Useful" }
    ]
  },
  {
    slug: "linked-actions",
    title: "Link Actions Naturally",
    subtitle: "Use -ऊन / -ल्यावर style patterns to avoid choppy speech",
    unit: 19,
    unitTitle: "Connected expression",
    objective: "Link sequential actions in smoother connected Marathi",
    grammarSkills: ["linked-actions", "sequence"],
    teaching: [
      {
        title: "Use करून / येऊन / पाहून to link actions",
        explanation: "Instead of repeating आणि in every sentence, Marathi often links actions with forms like करून, येऊन, पाहून, घेऊन.",
        examples: [
          { marathi: "Ghari yeun mi abhyas kela", devanagari: "घरी येऊन मी अभ्यास केला", english: "After coming home, I studied" },
          { marathi: "Chaha gheun aamhi nighalo", devanagari: "चहा घेऊन आम्ही निघालो", english: "After having/taking tea, we left" }
        ]
      },
      {
        title: "-ल्यावर gives a clear 'after doing' relation",
        explanation: "Forms like पोहोचल्यावर and संपल्यावर make sequence explicit.",
        examples: [
          { marathi: "Stationla pohachlyavar phone kar", devanagari: "स्टेशनला पोहोचल्यावर फोन कर", english: "Call after reaching the station" }
        ]
      }
    ],
    checks: [
      {
        question: "Which sentence links actions naturally?",
        options: ["Ghari yeun mi abhyas kela", "Ghari ani mi ani abhyas", "Mi ghari, pan abhyas"],
        answer: 0,
        explanation: "Yeun links coming home to the next action.",
        skill: "linked-actions"
      }
    ],
    reading: {
      title: "A smooth morning routine",
      devanagari: "सकाळी उठून मी आधी पाणी पितो. मग तयार होऊन नाश्ता करतो. घरातून निघण्याआधी बॅग तपासतो. कॉलेजला पोहोचल्यावर मित्रांना मेसेज करतो आणि वर्ग सुरू होण्यापूर्वी नोट्स पाहतो.",
      romanized: "Sakali uthun mi aadhi paani pito. Mag tayaar houn naashta karto. Gharatun nighnyaaadhi bag tapaasto. College-la pohachlyavar mitranna message karto ani varg suru honyapurvi notes paahato.",
      english: "After getting up in the morning, I drink water first. Then after getting ready, I eat breakfast. Before leaving home, I check my bag. After reaching college, I message friends and look at notes before class begins.",
      questions: [
        {
          question: "When does the speaker message friends?",
          options: ["After reaching college", "Before getting up", "After coming home"],
          answer: 0,
          explanation: "College-la pohachlyavar gives the sequence.",
          skill: "reading-sequence"
        }
      ]
    },
    production: {
      prompt: "Write a 7-sentence routine or event using at least three linked-action forms.",
      minSentences: 7,
      support: ["... karun ...", "... yeun ...", "... gheun ...", "... pohachlyavar ...", "... nighnyaaadhi ..."],
      requiredPatterns: ["three linked-action forms", "clear sequence"],
      modelAnswer: {
        romanized: "Sakali uthun mi paani pito. Tayaar houn mi naashta karto. Naashta karun gharatun nighato. Busstopla pohachlyavar ticket tapaasto. Busmadhye basun mi thoda vaachto. College-la pohachun mitraala bheto. Varg samplyavar ghari parat yeto.",
        devanagari: "सकाळी उठून मी पाणी पितो. तयार होऊन मी नाश्ता करतो. नाश्ता करून घरातून निघतो. बसस्टॉपला पोहोचल्यावर तिकीट तपासतो. बसमध्ये बसून मी थोडं वाचतो. कॉलेजला पोहोचून मित्राला भेटतो. वर्ग संपल्यावर घरी परत येतो.",
        english: "After getting up I drink water. After getting ready I eat breakfast. After breakfast I leave home. After reaching the bus stop I check the ticket. Sitting on the bus, I read a little. After reaching college I meet a friend. After class ends I return home."
      }
    },
    items: [
      { marathi: "Karun", devanagari: "करून", english: "Doing / after doing" },
      { marathi: "Yeun", devanagari: "येऊन", english: "Coming / after coming" },
      { marathi: "Gheun", devanagari: "घेऊन", english: "Taking / after taking" },
      { marathi: "Pohachlyavar", devanagari: "पोहोचल्यावर", english: "After reaching" },
      { marathi: "Nighnyaaadhi", devanagari: "निघण्याआधी", english: "Before leaving" },
      { marathi: "Samplyavar", devanagari: "संपल्यावर", english: "After finishing" }
    ]
  },
  {
    slug: "paragraph-connectors",
    title: "Build a Real Paragraph",
    subtitle: "Organize longer answers with richer connectors",
    unit: 19,
    unitTitle: "Connected expression",
    objective: "Structure a longer answer with opening, development, contrast, and conclusion",
    grammarSkills: ["paragraph-organisation", "connectors-advanced"],
    teaching: [
      {
        title: "Use signposts to organize ideas",
        explanation: "Longer Marathi becomes easier to follow when you use सुरुवातीला, उदाहरणार्थ, दुसरीकडे, त्यामुळे, शेवटी and similar signposts.",
        examples: [
          { marathi: "Suruvatila mala kathin vaatla", devanagari: "सुरुवातीला मला कठीण वाटलं", english: "At first it felt difficult" },
          { marathi: "Udaharanaarth, roj aikne upayogi aahe", devanagari: "उदाहरणार्थ, रोज ऐकणं उपयोगी आहे", english: "For example, listening every day is useful" },
          { marathi: "Shevti, niyamit saraav mahatvacha aahe", devanagari: "शेवटी, नियमित सराव महत्त्वाचा आहे", english: "Finally, regular practice is important" }
        ]
      }
    ],
    checks: [
      {
        question: "Which connector is best for introducing an example?",
        options: ["Udaharanaarth", "Shevti", "Tyamule"],
        answer: 0,
        explanation: "Udaharanaarth means for example.",
        skill: "connectors-advanced"
      }
    ],
    reading: {
      title: "Why speaking practice matters",
      devanagari: "मराठी शिकताना शब्दसंग्रह महत्त्वाचा आहे, पण फक्त शब्द लक्षात ठेवून संभाषण सहज होत नाही. उदाहरणार्थ, एखाद्या विद्यार्थ्याला शंभर शब्द माहित असू शकतात, तरीही प्रश्नाचं उत्तर लगेच तयार करता येत नाही. दुसरीकडे, कमी शब्द माहित असलेला विद्यार्थी जर तेच शब्द अनेक वाक्यांत वापरत असेल तर तो जास्त सहज बोलू शकतो. त्यामुळे शब्द शिकण्याबरोबरच त्यांचा वापर करणं आवश्यक आहे. शेवटी, भाषेचं उद्दिष्ट फक्त ओळखणं नसून अर्थपूर्णपणे वापरणं आहे.",
      romanized: "Marathi shiktaana shabdasangrah mahatvacha aahe, pan fakta shabda lakshat thevun sambhaashan sahaj hot nahi. Udaharanaarth, ekhaadya vidyarthyaala shambhar shabda mahit asu shaktaat, tarihi prashnaach uttar lagech tayaar karta yet nahi. Dusarikade, kami shabda mahit aslela vidyarthi jar tech shabda anek vaakyaat vaaparat asel tar to jast sahaj bolu shakto. Tyamule shabda shiknyabarobarach tyancha vaapar karna aavashyak aahe. Shevti, bhaashech uddisht fakta olakhna nasun arthapurnapane vaaparna aahe.",
      english: "Vocabulary matters, but memorizing words alone does not create fluent conversation. A learner with fewer words but more active use may speak more easily. Therefore words must be practiced in context; the goal is meaningful use, not recognition alone.",
      questions: [
        {
          question: "What is the central argument?",
          options: ["Words must be actively used, not only memorized", "Vocabulary is unnecessary", "Reading is the only useful practice"],
          answer: 0,
          explanation: "The paragraph develops that claim from example to conclusion.",
          skill: "reading-paragraph"
        }
      ]
    },
    production: {
      prompt: "Write 8–10 sentences on a familiar topic with an opening, example, contrast, result, and conclusion.",
      minSentences: 8,
      support: ["Suruvatila ...", "Udaharanaarth ...", "Dusarikaade ...", "Tyamule ...", "Shevti ..."],
      requiredPatterns: ["example", "contrast", "result", "conclusion"],
      modelAnswer: {
        romanized: "Marathi shikne suruvatila mala kathin vaatla. Visheshata boltaana shabda lagech aathavat navhte. Udaharanaarth, mala uttar mahit asaycha pan vaakya tayaar karta yet navhta. Mag mi roj thoda shadowing suru kela. Dusarikade, fakta vocabulary vaachlyane farak kami padla. Tyamule mi aikne ani bolne donhi ekatra kele. Halu halu majha confidence vaadhla. Aata mi chuklo tari sambhaashan thambavat nahi. Shevti, niyamit chhota saraav mala jast upayogi vaatla.",
        devanagari: "मराठी शिकणं सुरुवातीला मला कठीण वाटलं. विशेषतः बोलताना शब्द लगेच आठवत नव्हते. उदाहरणार्थ, मला उत्तर माहित असायचं पण वाक्य तयार करता येत नव्हतं. मग मी रोज थोडं shadowing सुरू केलं. दुसरीकडे, फक्त vocabulary वाचल्याने फरक कमी पडला. त्यामुळे मी ऐकणं आणि बोलणं दोन्ही एकत्र केलं. हळूहळू माझा confidence वाढला. आता मी चुकलो तरी संभाषण थांबवत नाही. शेवटी, नियमित छोटा सराव मला जास्त उपयोगी वाटला.",
        english: "At first learning Marathi felt difficult, especially producing sentences. I began shadowing daily, found vocabulary-only study less effective, combined listening and speaking, and gradually became more confident. In the end, small regular practice helped most."
      }
    },
    items: [
      { marathi: "Suruvatila", devanagari: "सुरुवातीला", english: "At first" },
      { marathi: "Udaharanaarth", devanagari: "उदाहरणार्थ", english: "For example" },
      { marathi: "Dusarikaade", devanagari: "दुसरीकडे", english: "On the other hand" },
      { marathi: "Tyamule", devanagari: "त्यामुळे", english: "Therefore / because of that" },
      { marathi: "Visheshata", devanagari: "विशेषतः", english: "Especially" },
      { marathi: "Shevti", devanagari: "शेवटी", english: "Finally / in the end" }
    ]
  },
  {
    slug: "register-control",
    title: "Informal, Neutral & Respectful Marathi",
    subtitle: "Choose the right level of politeness for the situation",
    unit: 20,
    unitTitle: "Conversational independence",
    objective: "Recognize and select informal versus respectful forms in everyday conversation",
    grammarSkills: ["register", "respectful-speech"],
    teaching: [
      {
        title: "The same goal can sound different by relationship",
        explanation: "Marathi changes pronouns and verb forms depending on familiarity, number, age, and respect. Learn situational pairs rather than one universal sentence.",
        examples: [
          { marathi: "Tu kuthe jaatos?", devanagari: "तू कुठे जातोस?", english: "Where are you going? (informal, to male)" },
          { marathi: "Tumhi kuthe jaata?", devanagari: "तुम्ही कुठे जाता?", english: "Where are you going? (respectful/plural)" },
          { marathi: "Punha saang", devanagari: "पुन्हा सांग", english: "Say it again (informal)" },
          { marathi: "Punha saanga", devanagari: "पुन्हा सांगा", english: "Please say it again (respectful/plural)" }
        ]
      }
    ],
    checks: [
      {
        question: "Which form is safer with an unfamiliar adult?",
        options: ["Tumhi kuthe jaata?", "Tu kuthe jaatos?", "Kuthe?"],
        answer: 0,
        explanation: "Tumhi is the respectful/plural form and is safer in that situation.",
        skill: "register"
      }
    ],
    listening: {
      title: "Same request, different register",
      devanagari: "मित्राला: थांब, मीही येतो. शिक्षकांना: एक मिनिट थांबा, मला एक प्रश्न विचारायचा आहे. मित्राला: पुन्हा सांग ना. शिक्षकांना: कृपया पुन्हा सांगाल का?",
      romanized: "Mitraala: Thaamb, mihi yeto. Shikshakaanna: Ek minit thaamba, mala ek prashna vichaaraaycha aahe. Mitraala: Punha saang na. Shikshakaanna: Kripaya punha saangaal ka?",
      english: "To a friend: Wait, I'm coming too. To a teacher: Please wait a minute, I have a question. To a friend: Say it again. To a teacher: Could you please say it again?",
      maxReplays: 2,
      questions: [
        {
          question: "What changes between the friend and teacher versions?",
          options: ["Level of respect and verb forms", "The basic meaning", "The language changes to English"],
          answer: 0,
          explanation: "The communicative goal stays similar while register changes.",
          skill: "listening-register"
        }
      ]
    },
    production: {
      prompt: "Write three pairs of sentences: one version to a close friend and one respectful version to an unfamiliar adult or teacher.",
      minSentences: 6,
      support: ["Tu / Tumhi", "Saang / Saanga", "Thaamb / Thaamba", "Karu shakto ka? / Karu shakto ka? Kripaya ..."],
      requiredPatterns: ["three informal/respectful contrasts"],
      modelAnswer: {
        romanized: "Mitra: Punha saang na. Shikshak: Kripaya punha saangaal ka? Mitra: Thaamb, mi yeto. Adarniya vyakti: Ek minit thaamba, mi yeto. Mitra: Tu udya yenaar ka? Shikshak: Tumhi udya yenaar aahat ka?",
        devanagari: "मित्र: पुन्हा सांग ना. शिक्षक: कृपया पुन्हा सांगाल का? मित्र: थांब, मी येतो. आदरणीय व्यक्ती: एक मिनिट थांबा, मी येतो. मित्र: तू उद्या येणार का? शिक्षक: तुम्ही उद्या येणार आहात का?",
        english: "Three pairs contrasting informal and respectful requests/questions."
      }
    },
    items: [
      { marathi: "Tu / Tumhi", devanagari: "तू / तुम्ही", english: "You (informal / respectful-plural)" },
      { marathi: "Saang / Saanga", devanagari: "सांग / सांगा", english: "Say (informal / respectful)" },
      { marathi: "Thaamb / Thaamba", devanagari: "थांब / थांबा", english: "Wait (informal / respectful)" },
      { marathi: "Yenaaar ka? / Yenaaar aahat ka?", devanagari: "येणार का? / येणार आहात का?", english: "Are you coming? informal / respectful" },
      { marathi: "Kripaya", devanagari: "कृपया", english: "Please" },
      { marathi: "Na", devanagari: "ना", english: "Softening particle often used informally" }
    ]
  },
  {
    slug: "independent-response",
    title: "Speak Without a Script",
    subtitle: "Build a longer response from ideas instead of copying a model",
    unit: 20,
    unitTitle: "Conversational independence",
    objective: "Produce a coherent 80–150 word response on a familiar topic with minimal scaffolding",
    grammarSkills: ["independent-production", "conversation-repair"],
    teaching: [
      {
        title: "Plan meaning before grammar",
        explanation: "For a longer answer, decide the four things you want to communicate: main point, detail/example, contrast/problem, and conclusion. Then choose language.",
        examples: [
          { marathi: "Mukhya mudda", devanagari: "मुख्य मुद्दा", english: "Main point" },
          { marathi: "Udaharan", devanagari: "उदाहरण", english: "Example" },
          { marathi: "Nishkarsh", devanagari: "निष्कर्ष", english: "Conclusion" }
        ]
      },
      {
        title: "Keep going when one word is missing",
        explanation: "Paraphrase, describe the idea, or ask for the word. Conversational independence means staying in Marathi even when your vocabulary is incomplete.",
        examples: [
          { marathi: "Mala nemka shabda aathavat nahi, pan ...", devanagari: "मला नेमका शब्द आठवत नाही, पण ...", english: "I can't remember the exact word, but ..." },
          { marathi: "Mhanje asa ki ...", devanagari: "म्हणजे असं की ...", english: "What I mean is ..." }
        ]
      }
    ],
    checks: [
      {
        question: "What is the best strategy when one word is missing?",
        options: ["Paraphrase and keep the conversation going", "Stop the answer immediately", "Switch every sentence to English"],
        answer: 0,
        explanation: "Repair and paraphrase are central independence skills.",
        skill: "conversation-repair"
      }
    ],
    reading: {
      title: "A learner's reflection",
      devanagari: "माझ्यासाठी मराठी शिकण्याचा सर्वात मोठा बदल तेव्हा झाला जेव्हा मी प्रत्येक वाक्य आधी इंग्रजीत विचारणं कमी केलं. सुरुवातीला माझी वाक्यं छोटी आणि साधी होती, पण मी ती लगेच बोलू शकत होतो. एखादा शब्द आठवत नसेल तर मी दुसऱ्या शब्दांत अर्थ सांगायचा प्रयत्न करायचो. त्यामुळे संभाषण थांबत नव्हतं. हळूहळू मी जास्त लांब उत्तरं द्यायला शिकलो. अजूनही चुका होतात, पण आता चुका झाल्या की मी त्या संभाषणाचा शेवट समजत नाही.",
      romanized: "Majhyaasathi Marathi shiknyacha sarvaat motha badal tevha jhala jevha mi pratyek vaakya aadhi English-madhe vichaarna kami kela. Suruvatila majhi vaakya chhoti ani saadhi hoti, pan mi ti lagech bolu shakat hoto. Ekhaada shabda aathavat nasel tar mi dusrya shabdaat arth saangaaycha prayatna karaaycho. Tyamule sambhaashan thaambat navhta. Haluhalu mi jast laamb uttara dyaayla shiklo. Ajunhi chuka hotaat, pan aata chuka jhalya ki mi tya sambhaashanacha shevat samajat nahi.",
      english: "The learner became more independent by thinking less through English, using short immediate sentences, paraphrasing missing words, and treating mistakes as part of conversation rather than its end.",
      questions: [
        {
          question: "What changed the learner's speaking most?",
          options: ["Thinking less through English and continuing despite missing words", "Memorizing only grammar tables", "Avoiding conversation"],
          answer: 0,
          explanation: "That is the central reflection.",
          skill: "reading-independent"
        }
      ]
    },
    production: {
      prompt: "Write 8–12 sentences (roughly 80–150 words) on one topic: a recent experience, a plan that changed, your study method, or a recommendation. Use only the checklist as support.",
      minSentences: 8,
      requiredPatterns: ["clear main point", "at least one reason", "one example/detail", "one contrast or problem", "conclusion"],
      modelAnswer: {
        romanized: "Majha abhyas karanyacha paddhat gelya kahi mahinyat badalla aahe. Aadhi mi ekach divshi khup abhyas karaaycho, pan tyamule mala khup taan yaaycha. Aata mi kaam chhotya bhaagaat vibhagto. Udaharanaarth, ek divas vaachan karto ani dusrya divshi practice questions karto. Kahi vela plan badalto, karan college-cha kaam jast asta. Tarihi mi darroj kamit kami thoda vel abhyas karaaycha prayatna karto. Mala vaatta hi paddhat jast practical aahe. Shevti, niyamitpana ekach divsachya mothya abhyasaapeksha mala jast upayogi padto.",
        devanagari: "माझी अभ्यास करण्याची पद्धत गेल्या काही महिन्यांत बदलली आहे. आधी मी एकाच दिवशी खूप अभ्यास करायचो, पण त्यामुळे मला खूप ताण यायचा. आता मी काम छोट्या भागांत विभागतो. उदाहरणार्थ, एक दिवस वाचन करतो आणि दुसऱ्या दिवशी practice questions करतो. काही वेळा प्लॅन बदलतो, कारण कॉलेजचं काम जास्त असतं. तरीही मी दररोज कमीत कमी थोडा वेळ अभ्यास करायचा प्रयत्न करतो. मला वाटतं ही पद्धत जास्त practical आहे. शेवटी, नियमितपणा एकाच दिवसाच्या मोठ्या अभ्यासापेक्षा मला जास्त उपयोगी पडतो.",
        english: "A connected reflection on changing from one-day cramming to a more regular study method, with example, problem, contrast, opinion, and conclusion."
      }
    },
    items: [
      { marathi: "Mukhya mudda", devanagari: "मुख्य मुद्दा", english: "Main point" },
      { marathi: "Udaharan", devanagari: "उदाहरण", english: "Example" },
      { marathi: "Nishkarsh", devanagari: "निष्कर्ष", english: "Conclusion" },
      { marathi: "Nemka shabda", devanagari: "नेमका शब्द", english: "Exact word" },
      { marathi: "Mhanje asa ki", devanagari: "म्हणजे असं की", english: "What I mean is ..." },
      { marathi: "Dusrya shabdaat", devanagari: "दुसऱ्या शब्दांत", english: "In other words" }
    ]
  }
];
