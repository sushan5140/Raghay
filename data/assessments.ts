import type { ListeningMaterial, ProductionTask, QuickCheck, ReadingMaterial } from "./lessons";

export type Assessment = {
  slug: string;
  title: string;
  subtitle: string;
  afterUnit: number;
  final?: boolean;
  questions: QuickCheck[];
  reading?: ReadingMaterial;
  listening?: ListeningMaterial;
  production?: ProductionTask;
};

export const assessments: Assessment[] = [
  {
    slug: "foundation-checkpoint",
    title: "Foundation Checkpoint",
    subtitle: "Review practical Marathi through Unit 6",
    afterUnit: 6,
    questions: [
      {
        question: "Which phrase politely asks someone to repeat?",
        options: ["Punha sanga", "Saral ja", "Bill dya"],
        answer: 0,
        explanation: "Punha sanga means “Please say it again.”",
        skill: "foundation-communication"
      },
      {
        question: "Which question asks a price?",
        options: ["He kiti aahe?", "He kuthe aahe?", "Yacha arth kay?"],
        answer: 0,
        explanation: "He kiti aahe? asks “How much is this?”",
        skill: "foundation-shopping"
      },
      {
        question: "Which phrase means “I want water”?",
        options: ["Mala paani pahije", "Mi paani aahe", "Paani kuthe?"],
        answer: 0,
        explanation: "Mala paani pahije is the useful request pattern.",
        skill: "foundation-request"
      }
    ]
  },
  {
    slug: "connected-speech-checkpoint",
    title: "Connected Speech Checkpoint",
    subtitle: "Check Units 7–9: time, reasons, opinions, and repair",
    afterUnit: 9,
    questions: [
      {
        question: "Which connector means “so / therefore”?",
        options: ["Mhanun", "Pan", "Nantar"],
        answer: 0,
        explanation: "Mhanun expresses a result.",
        skill: "connectors"
      },
      {
        question: "Which phrase introduces an opinion?",
        options: ["Mala vatate", "Mala pahije", "Mi gelo"],
        answer: 0,
        explanation: "Mala vatate means “I think / I feel.”",
        skill: "opinions"
      },
      {
        question: "What should you say when one word is unclear?",
        options: ["Yacha arth kay?", "He kiti aahe?", "Saral ja"],
        answer: 0,
        explanation: "Yacha arth kay? asks for the meaning.",
        skill: "repair"
      }
    ],
    reading: {
      title: "A changed plan",
      devanagari: "आज मला मित्रांना भेटायचं होतं, पण पाऊस सुरू झाला. म्हणून मी घरी राहिलो. संध्याकाळी आम्ही फोनवर बोललो आणि पुढच्या आठवड्यात भेटायचं ठरवलं.",
      romanized: "Aaj mala mitranna bhetaaycha hota, pan paus suru jhala. Mhanun mi ghari rahilo. Sandhyaakaali aamhi phonevar bollo ani pudhchya aathavdyat bhetaaycha tharavla.",
      english: "Today I wanted to meet friends, but it started raining. So I stayed home. In the evening we spoke on the phone and decided to meet next week.",
      questions: [
        {
          question: "Why did the speaker stay home?",
          options: ["It started raining", "Friends cancelled", "There was homework"],
          answer: 0,
          explanation: "The rain caused the change.",
          skill: "reading-reason"
        }
      ]
    }
  },
  {
    slug: "time-control-checkpoint",
    title: "Time Control Checkpoint",
    subtitle: "Check Units 10–11: past, future, ability, and obligation",
    afterUnit: 11,
    questions: [
      {
        question: "Which sentence is clearly past?",
        options: ["Mi ghari gelo", "Mi ghari jaain", "Mi ghari jaat aahe"],
        answer: 0,
        explanation: "Gelo presents a completed past action.",
        skill: "past-completed"
      },
      {
        question: "Which phrase expresses obligation?",
        options: ["Mala lavkar nighav lagel", "Mala chaha avadto", "Mi ghari aahe"],
        answer: 0,
        explanation: "Lagel expresses “will have to.”",
        skill: "obligation"
      },
      {
        question: "Which form asks permission?",
        options: ["Ithe baslo tar chalel ka?", "Ithe baslo", "Ithe basen"],
        answer: 0,
        explanation: "Chalel ka? checks whether something is okay.",
        skill: "permission"
      }
    ],
    listening: {
      title: "A busy tomorrow",
      devanagari: "उद्या मला सकाळी प्रोजेक्ट पूर्ण करावा लागेल. दुपारी मी कॉलेजला जाईन. वेळ मिळाला तर संध्याकाळी मित्राला भेटीन.",
      romanized: "Udya mala sakaali project purna karaava lagel. Dupari mi college-la jaain. Vel milala tar sandhyaakaali mitraala bhetein.",
      english: "Tomorrow I will have to finish a project in the morning. In the afternoon I will go to college. If there is time, I will meet a friend in the evening.",
      maxReplays: 2,
      questions: [
        {
          question: "What is required in the morning?",
          options: ["Finish a project", "Meet a friend", "Go shopping"],
          answer: 0,
          explanation: "The project is the obligation.",
          skill: "listening-obligation"
        }
      ]
    }
  },
  {
    slug: "relationships-comparison-checkpoint",
    title: "Relations & Comparison Checkpoint",
    subtitle: "Check Units 12–13: postpositions, possession, comparison, and quantity",
    afterUnit: 13,
    questions: [
      {
        question: "Which phrase means “with a friend”?",
        options: ["Mitrabarobar", "Mitrala", "Mitraatun"],
        answer: 0,
        explanation: "Barobar expresses “with.”",
        skill: "postpositions"
      },
      {
        question: "Which phrase means “I have time”?",
        options: ["Majhyaakade vel aahe", "Majha vel aahe", "Mala vel gelo"],
        answer: 0,
        explanation: "Majhyaakade ... aahe is the having pattern.",
        skill: "having"
      },
      {
        question: "Which word is used for “than” in comparisons?",
        options: ["Peksha", "Kaaran", "Tar"],
        answer: 0,
        explanation: "Peksha marks the comparison standard.",
        skill: "comparison"
      },
      {
        question: "Which phrase means “enough time”?",
        options: ["Puresa vel", "Kami vel", "Khup vel"],
        answer: 0,
        explanation: "Puresa means enough.",
        skill: "quantity"
      }
    ],
    reading: {
      title: "Choosing how to travel",
      devanagari: "बस ट्रेनपेक्षा स्वस्त आहे, पण ट्रेन जास्त वेगवान आहे. माझ्याकडे आज वेळ कमी आहे, म्हणून मी ट्रेनने जाईन. स्टेशन घराजवळ आहे, त्यामुळे तिथे पोहोचणं सोपं आहे.",
      romanized: "Bas trainpeksha swasta aahe, pan train jast vegvaan aahe. Maajhyaakade aaj vel kami aahe, mhanun mi trainne jaain. Station gharajaval aahe, tyamule tithe pohachna sopa aahe.",
      english: "The bus is cheaper than the train, but the train is faster. I have little time today, so I will go by train. The station is near home, so getting there is easy.",
      questions: [
        {
          question: "Why does the speaker choose the train?",
          options: ["Time is limited", "The train is cheaper", "The station is far away"],
          answer: 0,
          explanation: "The speaker has little time and the train is faster.",
          skill: "reading-comparison"
        }
      ]
    }
  },
  {
    slug: "linking-ideas-checkpoint",
    title: "Linking Ideas Checkpoint",
    subtitle: "Check Unit 14: cause, contrast, conditions, and relative patterns",
    afterUnit: 14,
    questions: [
      {
        question: "Which pair expresses a condition?",
        options: ["Jar ... tar ...", "Jo ... to ...", "Kaaran ... mhanun ..."],
        answer: 0,
        explanation: "Jar ... tar ... is the if/then frame.",
        skill: "conditionals"
      },
      {
        question: "Which word means “nevertheless / even so”?",
        options: ["Tarihi", "Tyamule", "Aadhi"],
        answer: 0,
        explanation: "Tarihi expresses concession.",
        skill: "concession"
      },
      {
        question: "Which pair means roughly “where ... there ...”?",
        options: ["Jithe ... tithe ...", "Je ... te ...", "Jo ... to ..."],
        answer: 0,
        explanation: "Jithe ... tithe ... is the location relative/correlative pair.",
        skill: "relative-correlative"
      }
    ]
  },
  {
    slug: "independent-comprehension-checkpoint",
    title: "Independent Comprehension Checkpoint",
    subtitle: "Check Unit 15: longer listening and Devanagari-first reading",
    afterUnit: 15,
    questions: [
      {
        question: "What is the best strategy for a longer passage?",
        options: ["Track anchors and overall meaning", "Stop at every unknown word", "Ignore connectors"],
        answer: 0,
        explanation: "Time words, connectors, and repeated ideas keep the message coherent.",
        skill: "listening-long-form"
      },
      {
        question: "In later units, what should come first when reading?",
        options: ["Devanagari", "English", "Romanization only"],
        answer: 0,
        explanation: "Later units deliberately make Devanagari primary.",
        skill: "written-marathi"
      }
    ],
    listening: {
      title: "Long-form checkpoint",
      devanagari: "आज सकाळी माझी योजना खूप सोपी होती: लायब्ररीत जाऊन दोन तास अभ्यास करायचा आणि मग मित्राला भेटायचं. पण लायब्ररी बंद होती. त्यामुळे मी जवळच्या कॅफेत बसलो. तिथे सुरुवातीला खूप आवाज होता, तरीही थोड्या वेळाने मला शांत जागा मिळाली. मी एक तास अभ्यास केला आणि उरलेलं काम घरी पूर्ण करायचं ठरवलं. मित्राला मेसेज करून मी भेटण्याची वेळही थोडी पुढे ढकलली.",
      romanized: "Aaj sakaali maajhi yojana khup sopi hoti: libraryt jaaun don taas abhyas karaaycha ani mag mitraala bhetaaycha. Pan library band hoti. Tyamule mi javalchya cafe-t baslo. Tithe suruvatila khup aavaaz hota, tarihi thodya velaane mala shaant jaaga milaali. Mi ek taas abhyas kela ani urlela kaam ghari purna karaaycha tharavla. Mitraala message karun mi bhetnyaachi velhi thodi pudhe dhakalli.",
      english: "This morning my plan was simple: study for two hours at the library and then meet a friend. But the library was closed. So I sat in a nearby café. At first it was noisy, but after a while I found a quiet place. I studied for an hour and decided to finish the remaining work at home. I also messaged my friend and pushed the meeting time a little later.",
      maxReplays: 2,
      questions: [
        {
          question: "Why did the speaker go to a café?",
          options: ["The library was closed", "The friend suggested it", "The bus was late"],
          answer: 0,
          explanation: "The closed library caused the change.",
          skill: "listening-cause"
        },
        {
          question: "What else changed besides the study location?",
          options: ["The meeting time", "The subject being studied", "The weather"],
          answer: 0,
          explanation: "The speaker moved the meeting later.",
          skill: "listening-detail"
        }
      ]
    }
  },
  {
    slug: "functional-independence-checkpoint",
    title: "Functional Independence Checkpoint",
    subtitle: "Check Unit 16: study, travel, messages, and everyday service language",
    afterUnit: 16,
    questions: [
      {
        question: "Which phrase asks for another option?",
        options: ["Dusra paryaay aahe ka?", "Mala chaha avadto", "Mi ghari gelo"],
        answer: 0,
        explanation: "Paryaay means option or alternative.",
        skill: "alternative"
      },
      {
        question: "Which reply reschedules naturally?",
        options: ["Mala sahala jamnar nahi. Saat vajta chalel ka?", "Nahi.", "Kal mi gelo."],
        answer: 0,
        explanation: "It declines and proposes another time.",
        skill: "invitation"
      },
      {
        question: "Which phrase asks for clarification?",
        options: ["Mhanje nemka kasa?", "He kiti aahe?", "Saral ja"],
        answer: 0,
        explanation: "It asks what exactly is meant.",
        skill: "polite-request"
      }
    ]
  },
  {
    slug: "final-intermediate",
    title: "Final Intermediate Assessment",
    subtitle: "Reading, listening, grammar, and connected production",
    afterUnit: 16,
    final: true,
    questions: [
      {
        question: "Which sentence combines a reason and result correctly?",
        options: [
          "Paus hota, mhanun mi ghari rahilo.",
          "Paus hota, pan mi mhanun.",
          "Kaaran mi ghari, tar paus."
        ],
        answer: 0,
        explanation: "The first sentence gives cause then result naturally.",
        skill: "cause-result"
      },
      {
        question: "Which sentence expresses ability?",
        options: ["Mi Marathi bolu shakto", "Mi Marathi bollo", "Mi Marathi bolen"],
        answer: 0,
        explanation: "Shakto expresses ability for a male speaker.",
        skill: "ability"
      },
      {
        question: "Which sentence has a clear comparison?",
        options: [
          "Train baspeksha vegvaan aahe.",
          "Train basbarobar aahe.",
          "Train basatun aahe."
        ],
        answer: 0,
        explanation: "Peksha marks the comparison.",
        skill: "comparison"
      },
      {
        question: "Which sentence uses a relative/correlative pattern?",
        options: [
          "Jithe bus thambte, tithe thaamb.",
          "Jar bus aali tar thaamb.",
          "Bus aali mhanun thaamb."
        ],
        answer: 0,
        explanation: "Jithe ... tithe ... links location clauses.",
        skill: "relative-correlative"
      }
    ],
    reading: {
      title: "A decision about the weekend",
      devanagari: "या शनिवार-रविवारी मला बाहेर जायचं होतं. माझ्या मित्राने दोन पर्याय सुचवले: जवळचा किल्ला किंवा शहरातलं संग्रहालय. किल्ला संग्रहालयापेक्षा दूर आहे, पण मला निसर्ग जास्त आवडतो. जर हवामान चांगलं असेल तर आम्ही किल्ल्यावर जाऊ. पाऊस आला तर संग्रहालयात जाऊ. जे ठरवू, ते सकाळी लवकर ठरवू कारण वेळ वाया घालवायचा नाही.",
      romanized: "Ya shanivaar-ravivaari mala baaher jaaycha hota. Maajhya mitraane don paryaay suchavle: javalcha killa kiwa shaharaatla sangrahaalay. Killa sangrahaalayaapeksha dur aahe, pan mala nisarg jast aavadto. Jar havaamaan changla asel tar aamhi killyavar jaau. Paus aala tar sangrahaalayaat jaau. Je tharavu, te sakaali lavkar tharavu kaaran vel vaaya ghaalavaaycha nahi.",
      english: "This weekend I wanted to go out. My friend suggested two options: a nearby fort or a city museum. The fort is farther than the museum, but I prefer nature. If the weather is good, we will go to the fort. If it rains, we will go to the museum. Whatever we decide, we will decide early in the morning because we do not want to waste time.",
      glossary: [
        { term: "पर्याय", meaning: "option" },
        { term: "सुचवले", meaning: "suggested" },
        { term: "वाया घालवायचा", meaning: "to waste" }
      ],
      questions: [
        {
          question: "Why does the speaker prefer the fort?",
          options: ["They like nature more", "It is cheaper", "It is closer"],
          answer: 0,
          explanation: "The text says mala nisarg jast aavadto.",
          skill: "reading-reason"
        },
        {
          question: "What is the rain plan?",
          options: ["Go to the museum", "Stay home", "Go to the fort"],
          answer: 0,
          explanation: "The condition sends them to the museum.",
          skill: "reading-condition"
        }
      ]
    },
    listening: {
      title: "A travel problem",
      devanagari: "मी स्टेशनला वेळेवर पोहोचलो, पण ट्रेन उशिरा होती. त्यामुळे मला पुढची बस मिळणार नव्हती. मी माहिती केंद्रात विचारलं. त्यांनी सांगितलं की दुसरी ट्रेन अर्ध्या तासाने येईल. म्हणून मी तिथेच थांबायचं ठरवलं.",
      romanized: "Mi stationla velevar pohachlo, pan train ushira hoti. Tyamule mala pudhchi bas milnaar navhti. Mi maahiti kendraat vicharla. Tyaanni saangitla ki dusri train ardhya taasane yeil. Mhanun mi tithech thaambaaycha tharavla.",
      english: "I reached the station on time, but the train was late. Because of that I was not going to get the next bus. I asked at the information center. They said another train would come in half an hour. So I decided to wait there.",
      maxReplays: 2,
      questions: [
        {
          question: "What caused the travel problem?",
          options: ["The train was late", "The station was closed", "The bus was early"],
          answer: 0,
          explanation: "The late train caused the connection problem.",
          skill: "listening-cause"
        },
        {
          question: "What did the speaker finally decide?",
          options: ["Wait for the next train", "Take a taxi", "Go home"],
          answer: 0,
          explanation: "The final sentence says the speaker decided to wait there.",
          skill: "listening-decision"
        }
      ]
    },
    production: {
      prompt: "Write 6–8 connected sentences about a plan that changed because of a problem. Include what you originally wanted, what happened, what you decided, and one opinion.",
      minSentences: 6,
      support: ["Mala ... karaycha hota", "Pan ...", "Tyamule ...", "Jar ... tar ...", "Shevti ...", "Mala vatate ..."],
      requiredPatterns: ["past or original intention", "cause/result", "condition or alternative", "opinion"],
      modelAnswer: {
        romanized: "Mala shanivaari mitranna bhetaaycha hota. Pan sakaalpasun paus hota. Tyamule aamhi baaher gelo nahi. Jar paus thambla asta tar aamhi cafe-t gelo asto, pan to thambla nahi. Shevti aamhi online bollo ani cinema pahila. Mala vatate plan badalla tari divas changla gela.",
        devanagari: "मला शनिवारी मित्रांना भेटायचं होतं. पण सकाळपासून पाऊस होता. त्यामुळे आम्ही बाहेर गेलो नाही. जर पाऊस थांबला असता तर आम्ही कॅफेत गेलो असतो, पण तो थांबला नाही. शेवटी आम्ही ऑनलाइन बोललो आणि सिनेमा पाहिला. मला वाटतं प्लॅन बदलला तरी दिवस चांगला गेला.",
        english: "I wanted to meet friends on Saturday. But it had been raining since morning. So we did not go out. If the rain had stopped, we would have gone to a café, but it did not stop. Finally we talked online and watched a movie. I think the day still went well even though the plan changed."
      }
    }
  },
  {
    slug: "conversational-independence",
    title: "Conversational Independence Checkpoint",
    subtitle: "Upper-intermediate stance, retelling, connected listening, and independent writing",
    afterUnit: 20,
    final: true,
    questions: [
      {
        question: "Which sentence reports information from another person?",
        options: [
          "Shikshakanni saangitla ki udya test aahe.",
          "Udya test aahe ka?",
          "Mi udya test lihito."
        ],
        answer: 0,
        explanation: "Saangitla ki introduces reported information.",
        skill: "reported-speech"
      },
      {
        question: "Which sentence expresses uncertainty rather than certainty?",
        options: ["Kadaachit paus yeil.", "Paus nakki yeil.", "Paus aala."],
        answer: 0,
        explanation: "Kadaachit means maybe/perhaps.",
        skill: "possibility"
      },
      {
        question: "Which response disagrees politely?",
        options: [
          "Tumcha mudda samajto, pan majha mat vegla aahe.",
          "Tumhi chukicha aahat.",
          "Nahi. Bas."
        ],
        answer: 0,
        explanation: "It acknowledges the other view before disagreeing.",
        skill: "polite-disagreement"
      },
      {
        question: "Which form links two actions naturally?",
        options: ["Ghari yeun mi abhyas kela.", "Ghari ani mi ani abhyas.", "Mi ghari pan abhyas."],
        answer: 0,
        explanation: "Yeun links the completed action to what followed.",
        skill: "linked-actions"
      }
    ],
    reading: {
      title: "Learning to stay in the conversation",
      devanagari: "मराठी शिकताना मला आधी प्रत्येक वाक्य अचूक बोलायचं असायचं. त्यामुळे बोलण्याआधी मी खूप विचार करायचो आणि संभाषणाचा वेग कमी व्हायचा. नंतर एका शिक्षकाने सांगितलं की चुका झाल्या तरी आधी अर्थ पोहोचवणं महत्त्वाचं आहे. तेव्हापासून मी शब्द अडला तर दुसऱ्या शब्दांत सांगण्याचा प्रयत्न करतो. कदाचित माझी प्रत्येक वाक्यरचना परिपूर्ण नसते, पण आता मी संभाषण थांबवत नाही. माझ्या मते हा बदल vocabulary वाढण्यापेक्षा जास्त महत्त्वाचा होता.",
      romanized: "Marathi shiktaana mala aadhi pratyek vaakya achuk bolaaycha asaaycha. Tyamule bolnyaaadhi mi khup vichaar karaaycho ani sambhaashanacha veg kami vhaycha. Nantar eka shikshakaane saangitla ki chuka jhalya tari aadhi arth pohachavna mahatvacha aahe. Tevhaapasun mi shabda adla tar dusrya shabdaat saangaaycha prayatna karto. Kadaachit majhi pratyek vaakyarachana paripurna naste, pan aata mi sambhaashan thaambavat nahi. Majhya mate ha badal vocabulary vaadhnyaapeksha jast mahatvacha hota.",
      english: "The learner used to overthink perfect sentences. A teacher encouraged prioritizing meaning, so the learner began paraphrasing missing words and staying in the conversation. The learner considers this change more important than simply growing vocabulary.",
      questions: [
        {
          question: "What changed the learner's behavior most?",
          options: [
            "Prioritizing meaning and paraphrasing instead of stopping",
            "Memorizing a dictionary",
            "Avoiding conversation until grammar was perfect"
          ],
          answer: 0,
          explanation: "The learner now keeps the conversation moving even with imperfect language.",
          skill: "reading-independent"
        },
        {
          question: "How certain is the learner that every sentence is perfect?",
          options: ["Not completely certain", "Completely certain", "The text never mentions it"],
          answer: 0,
          explanation: "Kadaachit and the following contrast explicitly reduce certainty.",
          skill: "reading-stance"
        }
      ]
    },
    listening: {
      title: "A recommendation with nuance",
      devanagari: "माझ्या मते नवीन भाषा शिकताना रोज थोडं बोलणं खूप उपयोगी आहे. काही लोक म्हणतात की आधी पूर्ण grammar शिकली पाहिजे आणि मग बोलायला सुरुवात करावी. त्यांचा मुद्दा समजतो, कारण basic grammar माहित असेल तर चुका कमी होऊ शकतात. पण मी पूर्णपणे सहमत नाही. जर आपण बोलायला खूप उशीर केला तर उत्तर तयार करण्याचा सरावच होत नाही. म्हणून मी सुचवेन की grammar शिकत असतानाच छोटे बोलण्याचे सराव सुरू ठेवा. कदाचित सुरुवातीला वाक्यं साधी असतील, पण हळूहळू confidence वाढेल.",
      romanized: "Majhya mate navin bhaasha shiktaana roj thoda bolna khup upayogi aahe. Kahi lok mhantaat ki aadhi purna grammar shikli paahije ani mag bolaayla suruvaat karaavi. Tyancha mudda samajto, karan basic grammar mahit asel tar chuka kami hou shaktaat. Pan mi purnapane sahamat nahi. Jar aapan bolaayla khup ushir kela tar uttar tayaar karanyacha saraavach hot nahi. Mhanun mi suchaven ki grammar shikat astaanaach chhote bolnyache saraav suru theva. Kadaachit suruvatila vaakya saadhi astil, pan haluhalu confidence vaadhel.",
      english: "The speaker recommends speaking while learning grammar, acknowledging the opposing view but arguing that delayed speaking prevents response-building practice.",
      maxReplays: 2,
      questions: [
        {
          question: "Does the speaker reject grammar study?",
          options: ["No, the speaker recommends combining grammar with speaking", "Yes, completely", "The speaker only recommends reading"],
          answer: 0,
          explanation: "The argument is for combination, not rejection.",
          skill: "listening-stance"
        },
        {
          question: "What risk comes from delaying speaking too long?",
          options: ["You do not practice building answers", "You forget the alphabet", "You become too formal"],
          answer: 0,
          explanation: "That is the main reason for starting small speaking practice early.",
          skill: "listening-inference"
        }
      ]
    },
    production: {
      prompt: "Write 8–12 sentences giving your opinion on the best way to improve Marathi. Include one reported idea, one point of uncertainty, one polite disagreement, one recommendation, and a conclusion.",
      minSentences: 8,
      support: ["... saangitla ki ...", "Kadaachit ...", "Tumcha mudda samajto, pan ...", "Mi suchaven ki ...", "Shevti ..."],
      requiredPatterns: ["reported idea", "uncertainty", "polite disagreement", "recommendation", "conclusion"],
      modelAnswer: {
        romanized: "Majhya mate Marathi sudhaaraayla fakta ekach paddhat puresi nahi. Eka shikshakaane mala saangitla ki roj bhaasha aikli tar patterns lavkar lakshaat yetaat. Mala vaatta te barobar aahe. Kahi loka mhantaat ki grammar purna jhalyavarach bolayla hava. Tyancha mudda samajto, pan mi purnapane sahamat nahi. Kadaachit suruvatila jast chuka hotil, pan bolnyacha saraav lavkar suru kela tar response speed vaadhte. Mi suchaven ki roj thoda aikava, don-teen vaakya shadow karaavi, ani mag swatah uttar dyaava. Chukla tar punha saanga. Shevti, regular active use mala vocabulary-only abhyasaapeksha jast upayogi vaatto.",
        devanagari: "माझ्या मते मराठी सुधारायला फक्त एकच पद्धत पुरेशी नाही. एका शिक्षकाने मला सांगितलं की रोज भाषा ऐकली तर patterns लवकर लक्षात येतात. मला वाटतं ते बरोबर आहे. काही लोक म्हणतात की grammar पूर्ण झाल्यावरच बोलायला हवं. त्यांचा मुद्दा समजतो, पण मी पूर्णपणे सहमत नाही. कदाचित सुरुवातीला जास्त चुका होतील, पण बोलण्याचा सराव लवकर सुरू केला तर response speed वाढते. मी सुचवेन की रोज थोडं ऐकावं, दोन-तीन वाक्यं shadow करावी, आणि मग स्वतः उत्तर द्यावं. चुकलं तर पुन्हा सांगा. शेवटी, regular active use मला vocabulary-only अभ्यासापेक्षा जास्त उपयोगी वाटतो.",
        english: "A connected recommendation that reports another idea, expresses uncertainty, politely disagrees, recommends an active routine, and concludes."
      }
    }
  }
];

export function getAssessment(slug: string) {
  return assessments.find((assessment) => assessment.slug === slug);
}
