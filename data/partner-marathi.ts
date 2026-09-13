export type PartnerPhrase = {
  marathi: string;
  devanagari: string;
  english: string;
  note?: string;
};

export type PartnerCategory = {
  id: string;
  title: string;
  description: string;
  phrases: PartnerPhrase[];
};

export type PartnerDialogue = {
  title: string;
  situation: string;
  lines: { speaker: "A" | "B"; devanagari: string; romanized: string; english: string }[];
};

export const partnerCategories: PartnerCategory[] = [
  {
    id: "check-ins",
    title: "Daily check-ins",
    description: "Simple messages you can use throughout the day.",
    phrases: [
      { marathi: "Kay kartoyes?", devanagari: "काय करतोयस?", english: "What are you doing? (to a male)" },
      { marathi: "Kay karteyes?", devanagari: "काय करतेयस?", english: "What are you doing? (to a female)" },
      { marathi: "Kuthe aahes?", devanagari: "कुठे आहेस?", english: "Where are you?" },
      { marathi: "Gharii pohachlaas ka?", devanagari: "घरी पोहोचलास का?", english: "Did you reach home? (to a male)" },
      { marathi: "Gharii pohachlis ka?", devanagari: "घरी पोहोचलीस का?", english: "Did you reach home? (to a female)" },
      { marathi: "Jevlaas ka?", devanagari: "जेवलास का?", english: "Did you eat? / Had lunch or dinner? (to a male)" },
      { marathi: "Jevlis ka?", devanagari: "जेवलीस का?", english: "Did you eat? / Had lunch or dinner? (to a female)" },
      { marathi: "Dupaarcha jevan jhala ka?", devanagari: "दुपारचं जेवण झालं का?", english: "Did you have lunch?" },
      { marathi: "Ratricha jevan jhala ka?", devanagari: "रात्रीचं जेवण झालं का?", english: "Did you have dinner?" },
      { marathi: "Aajcha divas kasa gela?", devanagari: "आजचा दिवस कसा गेला?", english: "How was your day?" },
      { marathi: "Thaklaas ka?", devanagari: "थकलास का?", english: "Are you tired? (to a male)" },
      { marathi: "Thaklis ka?", devanagari: "थकलीस का?", english: "Are you tired? (to a female)" }
    ]
  },
  {
    id: "affection",
    title: "Affection",
    description: "Warm relationship phrases without needing long sentences.",
    phrases: [
      { marathi: "Mala tujhi aathavan yete", devanagari: "मला तुझी आठवण येते", english: "I miss you" },
      { marathi: "Mala tujhi khup aathavan yete", devanagari: "मला तुझी खूप आठवण येते", english: "I miss you a lot" },
      { marathi: "Aaj divasbhar tujhi aathavan aali", devanagari: "आज दिवसभर तुझी आठवण आली", english: "I missed you / thought of you all day" },
      { marathi: "Mi tuzha vichar karat hoto / hote", devanagari: "मी तुझा विचार करत होतो / होते", english: "I was thinking about you (male / female speaker)" },
      { marathi: "Mala tu khup avadtos", devanagari: "मला तू खूप आवडतोस", english: "I like you a lot (to a male)" },
      { marathi: "Mala tu khup avadtes", devanagari: "मला तू खूप आवडतेस", english: "I like you a lot (to a female)" },
      { marathi: "Mi tuzhyavar prem karto", devanagari: "मी तुझ्यावर प्रेम करतो", english: "I love you (male speaker)" },
      { marathi: "Mi tuzhyavar prem karte", devanagari: "मी तुझ्यावर प्रेम करते", english: "I love you (female speaker)" },
      { marathi: "Majha tuzhyavar khup prem aahe", devanagari: "माझं तुझ्यावर खूप प्रेम आहे", english: "I love you so much / I have a lot of love for you", note: "Natural and speaker-gender neutral." },
      { marathi: "Mihi tuzhyavar prem karto / karte", devanagari: "मीही तुझ्यावर प्रेम करतो / करते", english: "I love you too (male / female speaker)" },
      { marathi: "Tu majhyasathi khup khaas aahes", devanagari: "तू माझ्यासाठी खूप खास आहेस", english: "You are very special to me" },
      { marathi: "Tu majhyasathi khup mahatvacha / mahatvachi aahes", devanagari: "तू माझ्यासाठी खूप महत्त्वाचा / महत्त्वाची आहेस", english: "You are very important to me (to a male / female)" },
      { marathi: "Tuzhyashi bolun mala anand hoto", devanagari: "तुझ्याशी बोलून मला आनंद होतो", english: "Talking to you makes me happy" },
      { marathi: "Tuzhyashi bolun changla vatata", devanagari: "तुझ्याशी बोलून चांगलं वाटतं", english: "I feel good after talking to you" },
      { marathi: "Mala tuzhyashi bolaycha aahe", devanagari: "मला तुझ्याशी बोलायचं आहे", english: "I want to talk to you" },
      { marathi: "Mala tula bhetaycha aahe", devanagari: "मला तुला भेटायचं आहे", english: "I want to see / meet you" },
      { marathi: "Mi tuzhya messagechi vaat paahat hoto / hote", devanagari: "मी तुझ्या मेसेजची वाट पाहत होतो / होते", english: "I was waiting for your message (male / female speaker)" },
      { marathi: "Tuzha message aala ki changla vatata", devanagari: "तुझा मेसेज आला की चांगलं वाटतं", english: "I feel happy when your message comes" },
      { marathi: "Tu bolala / bolalis ki majha mood changla hoto", devanagari: "तू बोललास / बोललीस की माझा मूड चांगला होतो", english: "My mood gets better when you talk to me (to a male / female)" },
      { marathi: "Tu aahes mhanun divas changla jato", devanagari: "तू आहेस म्हणून दिवस चांगला जातो", english: "My day goes better because you're there", note: "Warm and affectionate rather than formal." },
      { marathi: "Aapan bollo ki mala shaant vatata", devanagari: "आपण बोललो की मला शांत वाटतं", english: "I feel calmer when we talk" }
    ]
  },
  {
    id: "care",
    title: "Care & reassurance",
    description: "Checking on each other and showing concern.",
    phrases: [
      { marathi: "Kalji ghe", devanagari: "काळजी घे", english: "Take care" },
      { marathi: "Nit jev", devanagari: "नीट जेव", english: "Eat properly" },
      { marathi: "Thoda aaram kar", devanagari: "थोडा आराम कर", english: "Get some rest" },
      { marathi: "Tula bara vatataay ka?", devanagari: "तुला बरं वाटतंय का?", english: "Are you feeling okay?" },
      { marathi: "Kahi zhala tar mala sang", devanagari: "काही झालं तर मला सांग", english: "Tell me if something happens" },
      { marathi: "Mi ithech aahe", devanagari: "मी इथेच आहे", english: "I'm right here / I'm here" },
      { marathi: "Tension gheu nakos", devanagari: "टेन्शन घेऊ नकोस", english: "Don't stress" },
      { marathi: "Sagla thik hoil", devanagari: "सगळं ठीक होईल", english: "Everything will be okay" }
    ]
  },
  {
    id: "teasing-annoyance",
    title: "Teasing & annoyance",
    description: "Playful or frustrated phrases you may hear between close people.",
    phrases: [
      { marathi: "Mi tuzha raag karte / karto", devanagari: "मी तुझ्यावर रागावलोय / रागावलेय", english: "I'm angry with you", note: "More natural than literally saying 'I hate you' in many everyday arguments." },
      { marathi: "Mala tu avadt nahis aata", devanagari: "मला तू आवडत नाहीस आता", english: "I don't like you right now" },
      { marathi: "Mi tuzha tiraskar karto / karte", devanagari: "मी तुझा तिरस्कार करतो / करते", english: "I hate you", note: "Very strong and serious. In everyday close relationships, Marathi speakers are more likely to express anger with raag/annoyance phrases instead." },
      { marathi: "Mala tuzha raag yetoy", devanagari: "मला तुझा राग येतोय", english: "I'm getting annoyed with you" },
      { marathi: "Tu khup irritate kartos", devanagari: "तू खूप इरिटेट करतोस", english: "You annoy me a lot (to a male)" },
      { marathi: "Tu khup irritate kartes", devanagari: "तू खूप इरिटेट करतेस", english: "You annoy me a lot (to a female)" },
      { marathi: "Bas na aata", devanagari: "बस ना आता", english: "Enough now / stop it now" },
      { marathi: "Majak karat hoto / hote", devanagari: "मजाक करत होतो / होते", english: "I was joking" },
      { marathi: "Raagavu nakos", devanagari: "रागावू नकोस", english: "Don't be upset / angry" }
    ]
  },
  {
    id: "apologies",
    title: "Apologies & making up",
    description: "Useful lines after a misunderstanding or argument.",
    phrases: [
      { marathi: "Sorry, majhi chuk zali", devanagari: "सॉरी, माझी चूक झाली", english: "Sorry, I made a mistake" },
      { marathi: "Mala maaf kar", devanagari: "मला माफ कर", english: "Forgive me / I'm sorry" },
      { marathi: "Tula vait vatla asel tar sorry", devanagari: "तुला वाईट वाटलं असेल तर सॉरी", english: "Sorry if that hurt/upset you" },
      { marathi: "Maza tasa arth navhta", devanagari: "माझा तसा अर्थ नव्हता", english: "I didn't mean it that way" },
      { marathi: "Aapan shantpane bolu ya", devanagari: "आपण शांतपणे बोलू या", english: "Let's talk calmly" },
      { marathi: "Aata thik aahes ka?", devanagari: "आता ठीक आहेस का?", english: "Are you okay now?" },
      { marathi: "Chal, visru ya", devanagari: "चल, विसरू या", english: "Come on, let's forget it / move on" }
    ]
  },
  {
    id: "plans",
    title: "Plans together",
    description: "Making small plans and checking availability.",
    phrases: [
      { marathi: "Aaj bhetu ya ka?", devanagari: "आज भेटू या का?", english: "Shall we meet today?" },
      { marathi: "Tu kadhi mokla / mokli aahes?", devanagari: "तू कधी मोकळा / मोकळी आहेस?", english: "When are you free?" },
      { marathi: "Sandhyakaali call karu ya?", devanagari: "संध्याकाळी कॉल करू या?", english: "Shall we call in the evening?" },
      { marathi: "Weekend-la kay plan aahe?", devanagari: "वीकेंडला काय प्लॅन आहे?", english: "What's the plan for the weekend?" },
      { marathi: "Kuthe jau ya?", devanagari: "कुठे जाऊ या?", english: "Where should we go?" },
      { marathi: "Tu sang, mala chalel", devanagari: "तू सांग, मला चालेल", english: "You decide, I'm okay with it" },
      { marathi: "Mala tuzhyabarobar vel ghalvayla avadto", devanagari: "मला तुझ्याबरोबर वेळ घालवायला आवडतो", english: "I like spending time with you" }
    ]
  },
  {
    id: "relationship-words",
    title: "Relationship words",
    description: "Useful labels and terms you may see or hear when talking about a relationship.",
    phrases: [
      { marathi: "Jodidar", devanagari: "जोडीदार", english: "Partner / life partner" },
      { marathi: "Priyakar", devanagari: "प्रियकर", english: "Boyfriend / male romantic partner", note: "A Marathi word; everyday speakers also commonly use the English word boyfriend." },
      { marathi: "Preyasi", devanagari: "प्रेयसी", english: "Girlfriend / female romantic partner", note: "A literary/formal Marathi word; everyday speakers also commonly use the English word girlfriend." },
      { marathi: "Boyfriend", devanagari: "बॉयफ्रेंड", english: "Boyfriend" },
      { marathi: "Girlfriend", devanagari: "गर्लफ्रेंड", english: "Girlfriend" },
      { marathi: "Aapla naata", devanagari: "आपलं नातं", english: "Our relationship" },
      { marathi: "Naata", devanagari: "नातं", english: "Relationship / bond" },
      { marathi: "Khaas vyakti", devanagari: "खास व्यक्ती", english: "Special person" }
    ]
  },
  {
    id: "good-morning-night",
    title: "Morning & night",
    description: "Short messages that are easy to reuse every day.",
    phrases: [
      { marathi: "Good morning, changla divas jaau de", devanagari: "गुड मॉर्निंग, चांगला दिवस जाऊ दे", english: "Good morning, have a good day" },
      { marathi: "Uthlaas / uthlis ka?", devanagari: "उठलास / उठलीस का?", english: "Did you wake up?" },
      { marathi: "Lavkar jev ani aaram kar", devanagari: "लवकर जेव आणि आराम कर", english: "Eat soon and get some rest" },
      { marathi: "Good night, nit zop", devanagari: "गुड नाईट, नीट झोप", english: "Good night, sleep well" },
      { marathi: "Sweet dreams", devanagari: "स्वीट ड्रीम्स", english: "Sweet dreams" },
      { marathi: "Udya bolu ya", devanagari: "उद्या बोलू या", english: "Let's talk tomorrow" }
    ]
  }
];

export const partnerDialogues: PartnerDialogue[] = [
  {
    title: "Lunch check-in",
    situation: "A simple midday conversation.",
    lines: [
      { speaker: "A", devanagari: "काय करतेयस?", romanized: "Kay karteyes?", english: "What are you doing?" },
      { speaker: "B", devanagari: "काम करतेय. तू?", romanized: "Kaam kartey. Tu?", english: "Working. You?" },
      { speaker: "A", devanagari: "मी थोडा फ्री आहे. जेवलीस का?", romanized: "Mi thoda free aahe. Jevlis ka?", english: "I'm a little free. Did you eat?" },
      { speaker: "B", devanagari: "नाही अजून. तू जेवलास का?", romanized: "Nahi ajun. Tu jevlaas ka?", english: "Not yet. Did you eat?" }
    ]
  },
  {
    title: "Miss you",
    situation: "A short affectionate check-in.",
    lines: [
      { speaker: "A", devanagari: "आज तुझी खूप आठवण येतेय.", romanized: "Aaj tujhi khup aathavan yetey.", english: "I miss you a lot today." },
      { speaker: "B", devanagari: "मलाही तुझी आठवण येतेय.", romanized: "Malaahi tujhi aathavan yetey.", english: "I miss you too." },
      { speaker: "A", devanagari: "संध्याकाळी कॉल करू या?", romanized: "Sandhyakaali call karu ya?", english: "Shall we call in the evening?" },
      { speaker: "B", devanagari: "हो, नक्की.", romanized: "Ho, nakki.", english: "Yes, definitely." }
    ]
  },
  {
    title: "Small argument",
    situation: "A disagreement that stays respectful.",
    lines: [
      { speaker: "A", devanagari: "मला तुझा राग येतोय आत्ता.", romanized: "Mala tujha raag yetoy aata.", english: "I'm annoyed with you right now." },
      { speaker: "B", devanagari: "सॉरी. माझी चूक झाली.", romanized: "Sorry. Majhi chuk zali.", english: "Sorry. I made a mistake." },
      { speaker: "A", devanagari: "माझा तसा अर्थ नव्हता असं तू आधी सांगितलं असतंस तर बरं झालं असतं.", romanized: "Maza tasa arth navhta asa tu aadhi saangitla astaas tar bara jhala asta.", english: "It would've been better if you'd explained earlier that you didn't mean it that way." },
      { speaker: "B", devanagari: "चल, शांतपणे बोलू या.", romanized: "Chal, shantpane bolu ya.", english: "Let's talk calmly." }
    ]
  },
  {
    title: "Evening plan",
    situation: "Making a simple plan together.",
    lines: [
      { speaker: "A", devanagari: "आज संध्याकाळी मोकळी आहेस का?", romanized: "Aaj sandhyakaali mokli aahes ka?", english: "Are you free this evening?" },
      { speaker: "B", devanagari: "सातनंतर मोकळी आहे.", romanized: "Saatnantar mokli aahe.", english: "I'm free after seven." },
      { speaker: "A", devanagari: "मग भेटू या का?", romanized: "Mag bhetu ya ka?", english: "Then shall we meet?" },
      { speaker: "B", devanagari: "हो. तू ठिकाण सांग.", romanized: "Ho. Tu thikaan saang.", english: "Yes. You choose the place." }
    ]
  },
  {
    title: "Good night",
    situation: "A short end-of-day conversation.",
    lines: [
      { speaker: "A", devanagari: "आजचा दिवस कसा गेला?", romanized: "Aajcha divas kasa gela?", english: "How was your day?" },
      { speaker: "B", devanagari: "थोडा थकवणारा होता.", romanized: "Thoda thakavanaara hota.", english: "It was a little tiring." },
      { speaker: "A", devanagari: "मग लवकर आराम कर. नीट झोप.", romanized: "Mag lavkar aaram kar. Nit zop.", english: "Then rest early. Sleep well." },
      { speaker: "B", devanagari: "गुड नाईट. उद्या बोलू या.", romanized: "Good night. Udya bolu ya.", english: "Good night. Let's talk tomorrow." }
    ]
  }
];
