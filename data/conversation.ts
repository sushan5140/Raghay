export type ConversationTurn = {
  id: string;
  speakerLine: string;
  englishHint: string;
  goal: string;
  keywords: string[];
  support: string[];
  repairLine?: string;
};

export type ConversationScenario = {
  slug: string;
  title: string;
  context: string;
  targetMinutes: string;
  opening: string;
  turns: ConversationTurn[];
};

export const conversationScenarios: ConversationScenario[] = [
  {
    slug: "college-day",
    title: "A Day at College",
    context: "Talk with a classmate about classes, workload, and plans after college.",
    targetMinutes: "5–8 min",
    opening: "आजचा दिवस कसा गेला?",
    turns: [
      {
        id: "day",
        speakerLine: "आजचा दिवस कसा गेला?",
        englishHint: "How did your day go?",
        goal: "Give a short past recap with at least two details.",
        keywords: ["आज", "वर्ग", "अभ्यास", "गेला"],
        support: ["आज ...", "सकाळी ...", "नंतर ..."]
      },
      {
        id: "class",
        speakerLine: "आज कोणता वर्ग जास्त आवडला? का?",
        englishHint: "Which class did you like most today? Why?",
        goal: "Give a preference and a reason.",
        keywords: ["आवडला", "कारण", "मला", "वर्ग"],
        support: ["मला ... आवडला", "कारण ..."]
      },
      {
        id: "difficulty",
        speakerLine: "काही गोष्ट कठीण वाटली का?",
        englishHint: "Did anything feel difficult?",
        goal: "Describe one difficulty or say nothing was difficult.",
        keywords: ["कठीण", "समजलं", "नाही", "प्रश्न"],
        support: ["हो, ... कठीण होतं", "मला ... समजलं नाही", "नाही, आज ..."]
      },
      {
        id: "help",
        speakerLine: "समजलं नाही तर तू काय करतोस?",
        englishHint: "What do you do if you don't understand?",
        goal: "Explain a repair or help strategy.",
        keywords: ["विचारतो", "पुन्हा", "शिक्षक", "मित्र"],
        support: ["मी ... विचारतो/विचारते", "मी पुन्हा ...", "जर ... तर ..."]
      },
      {
        id: "after",
        speakerLine: "कॉलेजनंतर काय करणार आहेस?",
        englishHint: "What are you going to do after college?",
        goal: "Give a future plan.",
        keywords: ["नंतर", "करणार", "जाईन", "भेटेन"],
        support: ["कॉलेजनंतर मी ...", "नंतर ... जाईन"]
      },
      {
        id: "advice",
        speakerLine: "अभ्यासाचा ताण कमी करण्यासाठी काय उपयोगी पडतं?",
        englishHint: "What helps reduce study stress?",
        goal: "Give practical advice using an opinion or recommendation.",
        keywords: ["मते", "उपयोगी", "सराव", "विश्रांती"],
        support: ["माझ्या मते ...", "... उपयोगी पडतं", "मी सुचवेन की ..."]
      }
    ]
  },
  {
    slug: "weekend-plan",
    title: "Plan the Weekend",
    context: "Make a plan with a friend, compare options, and adapt if the weather changes.",
    targetMinutes: "5–8 min",
    opening: "या शनिवार-रविवारी काय करायचं?",
    turns: [
      {
        id: "idea",
        speakerLine: "या शनिवार-रविवारी काय करायचं?",
        englishHint: "What should we do this weekend?",
        goal: "Suggest one activity.",
        keywords: ["जाऊ", "भेटू", "पाहू", "करू"],
        support: ["आपण ... जाऊ या", "... करू या"]
      },
      {
        id: "compare",
        speakerLine: "किल्ला आणि संग्रहालय यापैकी कोणता पर्याय चांगला वाटतो?",
        englishHint: "Which option seems better: the fort or the museum?",
        goal: "Compare two choices and choose one.",
        keywords: ["पेक्षा", "जास्त", "पण", "आवडतो"],
        support: ["... पेक्षा ...", "मला ... जास्त आवडतो", "पण ..."]
      },
      {
        id: "reason",
        speakerLine: "तो पर्याय का निवडशील?",
        englishHint: "Why would you choose that option?",
        goal: "Give at least one reason.",
        keywords: ["कारण", "म्हणून", "मला", "चांगला"],
        support: ["कारण ...", "... म्हणून ..."]
      },
      {
        id: "weather",
        speakerLine: "जर पाऊस आला तर काय करू?",
        englishHint: "What will we do if it rains?",
        goal: "Give a conditional Plan B.",
        keywords: ["जर", "तर", "पाऊस", "जाऊ"],
        support: ["जर पाऊस आला तर ...", "... ऐवजी ..."]
      },
      {
        id: "time",
        speakerLine: "किती वाजता भेटायचं?",
        englishHint: "What time should we meet?",
        goal: "Choose a time and check whether it works.",
        keywords: ["वाजता", "चालेल", "भेटू"],
        support: ["... वाजता भेटू या", "... चालेल का?"]
      },
      {
        id: "confirm",
        speakerLine: "ठीक आहे. मग आपला अंतिम प्लॅन सांग.",
        englishHint: "Okay. Summarize the final plan.",
        goal: "Summarize place, time, and condition in connected speech.",
        keywords: ["भेटू", "जाऊ", "जर", "तर"],
        support: ["आपण ... वाजता ...", "नंतर ...", "जर ... तर ..."]
      }
    ]
  },
  {
    slug: "travel-problem",
    title: "Solve a Travel Problem",
    context: "Your connection is delayed. Ask for information and work out another route.",
    targetMinutes: "6–9 min",
    opening: "काय अडचण झाली आहे?",
    turns: [
      {
        id: "problem",
        speakerLine: "काय अडचण झाली आहे?",
        englishHint: "What problem happened?",
        goal: "Explain the delay or missed connection.",
        keywords: ["उशिरा", "चुकली", "ट्रेन", "बस"],
        support: ["माझी ... उशिरा आली", "त्यामुळे ... चुकली"]
      },
      {
        id: "destination",
        speakerLine: "तुला कुठे पोहोचायचं आहे?",
        englishHint: "Where do you need to reach?",
        goal: "State the destination and timing.",
        keywords: ["पोहोचायचं", "वाजेपर्यंत", "स्टेशन", "शहर"],
        support: ["मला ... पोहोचायचं आहे", "... वाजेपर्यंत"]
      },
      {
        id: "alternative",
        speakerLine: "दुसरा पर्याय विचारायचा असेल तर काय म्हणशील?",
        englishHint: "How would you ask for another option?",
        goal: "Ask for an alternative politely.",
        keywords: ["दुसरा", "पर्याय", "आहे", "का"],
        support: ["दुसरा पर्याय आहे का?", "पुढची ... कधी आहे?"]
      },
      {
        id: "ticket",
        speakerLine: "जुनं तिकीट वापरता येईल का, हे कसं विचारशील?",
        englishHint: "Ask whether the old ticket can be used.",
        goal: "Ask a permission/possibility question.",
        keywords: ["तिकीट", "वापरता", "येईल", "का"],
        support: ["हे तिकीट ... वापरता येईल का?"]
      },
      {
        id: "choice",
        speakerLine: "बस स्वस्त आहे, पण ट्रेन वेगवान आहे. तू काय निवडशील?",
        englishHint: "Bus is cheaper, train is faster. What do you choose?",
        goal: "Compare and choose based on your priority.",
        keywords: ["पेक्षा", "पण", "निवडेन", "कारण"],
        support: ["मी ... निवडेन", "कारण ..."]
      },
      {
        id: "retell",
        speakerLine: "आता सुरुवातीपासून शेवटपर्यंत काय झालं ते सांग.",
        englishHint: "Retell the whole problem and solution.",
        goal: "Give a connected 4–6 sentence retelling.",
        keywords: ["सुरुवातीला", "त्यामुळे", "नंतर", "शेवटी"],
        support: ["सुरुवातीला ...", "त्यामुळे ...", "नंतर ...", "शेवटी ..."]
      }
    ]
  },
  {
    slug: "cafe-service",
    title: "Café Conversation",
    context: "Order, change part of the order, ask a question, and close naturally.",
    targetMinutes: "5–7 min",
    opening: "नमस्कार. काय घेणार?",
    turns: [
      {
        id: "order",
        speakerLine: "नमस्कार. काय घेणार?",
        englishHint: "What would you like?",
        goal: "Place an order politely.",
        keywords: ["मला", "द्या", "चहा", "कॉफी"],
        support: ["मला ... द्या", "कृपया ..."]
      },
      {
        id: "modify",
        speakerLine: "साखर आणि दूध नेहमीसारखं चालेल का?",
        englishHint: "Are normal sugar and milk okay?",
        goal: "Modify at least one detail.",
        keywords: ["कमी", "नको", "चालेल", "साखर"],
        support: ["साखर कमी ठेवा", "दूध नको", "... चालेल"]
      },
      {
        id: "food",
        speakerLine: "खायला काही हवं आहे का?",
        englishHint: "Would you like something to eat?",
        goal: "Add or decline food naturally.",
        keywords: ["हवं", "नको", "द्या", "एक"],
        support: ["हो, एक ... द्या", "नको, धन्यवाद"]
      },
      {
        id: "preference",
        speakerLine: "तुला तिखट खायला आवडतं का?",
        englishHint: "Do you like spicy food?",
        goal: "Give a preference and degree.",
        keywords: ["आवडतं", "थोडं", "खूप", "नाही"],
        support: ["मला ... आवडतं", "थोडं ...", "खूप ... नको"]
      },
      {
        id: "problem",
        speakerLine: "समजा ऑर्डर चुकीची आली. तू काय सांगशील?",
        englishHint: "Imagine the order came wrong. What would you say?",
        goal: "Explain the problem and request a correction.",
        keywords: ["चुकीची", "मागितलं", "बदलता", "कृपया"],
        support: ["माफ करा, मी ... मागितलं होतं", "कृपया ... बदलता येईल का?"]
      },
      {
        id: "close",
        speakerLine: "जेवण झालं. संभाषण कसं संपवशील?",
        englishHint: "How would you close the interaction?",
        goal: "Ask for the bill and close politely.",
        keywords: ["बिल", "द्या", "धन्यवाद"],
        support: ["कृपया बिल द्या", "धन्यवाद"]
      }
    ]
  },
  {
    slug: "shopping-exchange",
    title: "Shopping & Exchange",
    context: "Compare products, ask about size, and request an exchange.",
    targetMinutes: "5–8 min",
    opening: "तुम्हाला काय पाहिजे?",
    turns: [
      {
        id: "need",
        speakerLine: "तुम्हाला काय पाहिजे?",
        englishHint: "What do you need?",
        goal: "Describe the item you want.",
        keywords: ["मला", "पाहिजे", "रंग", "साइज"],
        support: ["मला ... पाहिजे", "... रंगाचा/रंगाची"]
      },
      {
        id: "compare",
        speakerLine: "हे दोन पर्याय आहेत. कोणता जास्त चांगला वाटतो?",
        englishHint: "Which of these two options seems better?",
        goal: "Compare price, size, or quality.",
        keywords: ["पेक्षा", "जास्त", "कमी", "चांगला"],
        support: ["हा ... पेक्षा ...", "मला हा जास्त ..."]
      },
      {
        id: "price",
        speakerLine: "किंमत विचारायची असेल तर काय म्हणशील?",
        englishHint: "Ask the price.",
        goal: "Ask price and react.",
        keywords: ["किती", "किंमत", "महाग", "स्वस्त"],
        support: ["हे किती आहे?", "किंमत किती आहे?"]
      },
      {
        id: "return",
        speakerLine: "समजा घरी गेल्यावर साइज चुकीचा निघाला. परत आल्यावर काय सांगशील?",
        englishHint: "Explain that the size was wrong.",
        goal: "State purchase + problem.",
        keywords: ["काल", "घेतला", "साइज", "लहान"],
        support: ["मी हे काल घेतलं", "पण साइज ... आहे"]
      },
      {
        id: "exchange",
        speakerLine: "आता बदल किंवा दुसरा पर्याय माग.",
        englishHint: "Ask for an exchange or alternative.",
        goal: "Ask for another size/exchange.",
        keywords: ["दुसरा", "बदलता", "मिळेल", "का"],
        support: ["दुसरा साइज मिळेल का?", "हे बदलता येईल का?"]
      },
      {
        id: "policy",
        speakerLine: "दुकानदार म्हणतो बिल आवश्यक आहे. तू काय उत्तर देशील?",
        englishHint: "The shopkeeper says the bill is required.",
        goal: "Confirm whether you have the bill and close the request.",
        keywords: ["बिल", "माझ्याकडे", "आहे", "धन्यवाद"],
        support: ["हो, बिल माझ्याकडे आहे", "धन्यवाद"]
      }
    ]
  },
  {
    slug: "new-person",
    title: "Meet Someone New",
    context: "Sustain a first conversation beyond names and greetings.",
    targetMinutes: "5–8 min",
    opening: "नमस्कार. तुमचं नाव काय?",
    turns: [
      {
        id: "intro",
        speakerLine: "नमस्कार. तुमचं नाव काय?",
        englishHint: "What is your name?",
        goal: "Introduce yourself and greet politely.",
        keywords: ["नाव", "नमस्कार", "आहे"],
        support: ["माझं नाव ... आहे", "भेटून आनंद झाला"]
      },
      {
        id: "study",
        speakerLine: "तुम्ही काय शिकता किंवा काय करता?",
        englishHint: "What do you study or do?",
        goal: "Describe study/work.",
        keywords: ["शिकतो", "शिकते", "काम", "क्षेत्र"],
        support: ["मी ... शिकतो/शिकते", "मी ... मध्ये काम करतो/करते"]
      },
      {
        id: "interest",
        speakerLine: "तुम्हाला कोणत्या गोष्टींमध्ये रस आहे?",
        englishHint: "What are you interested in?",
        goal: "Talk about two interests.",
        keywords: ["रस", "आवडतं", "मला", "आणि"],
        support: ["मला ... मध्ये रस आहे", "मला ... आवडतं"]
      },
      {
        id: "place",
        speakerLine: "तुम्ही कुठे राहता? त्या ठिकाणाबद्दल एक गोष्ट सांगा.",
        englishHint: "Where do you live? Say one thing about it.",
        goal: "Describe a place briefly.",
        keywords: ["राहतो", "राहते", "शहर", "चांगलं"],
        support: ["मी ... राहतो/राहते", "तिथे ... आहे"]
      },
      {
        id: "shared",
        speakerLine: "आपल्या दोघांमध्ये काही समान आवड आहे का?",
        englishHint: "Do we share an interest?",
        goal: "React and identify a shared interest.",
        keywords: ["दोघांना", "आवडतं", "समान", "मलाही"],
        support: ["मलाही ... आवडतं", "आपल्या दोघांना ..."]
      },
      {
        id: "close",
        speakerLine: "छान. आता संभाषण नैसर्गिकपणे संपव.",
        englishHint: "Close the conversation naturally.",
        goal: "Close politely without abrupt English.",
        keywords: ["भेटून", "आनंद", "पुन्हा", "भेटू"],
        support: ["भेटून आनंद झाला", "पुन्हा भेटू"]
      }
    ]
  },
  {
    slug: "delay-problem",
    title: "Explain a Delay",
    context: "Explain why something is late, apologize, and offer a solution.",
    targetMinutes: "5–8 min",
    opening: "काम वेळेवर का झालं नाही?",
    turns: [
      {
        id: "reason",
        speakerLine: "काम वेळेवर का झालं नाही?",
        englishHint: "Why wasn't the work completed on time?",
        goal: "Give a reason and result.",
        keywords: ["कारण", "त्यामुळे", "पूर्ण", "नाही"],
        support: ["कारण ...", "त्यामुळे ... शक्लो/शकले नाही"]
      },
      {
        id: "status",
        speakerLine: "आत्ता किती काम पूर्ण झालं आहे?",
        englishHint: "How much is complete now?",
        goal: "Describe current status with quantity/degree.",
        keywords: ["जवळजवळ", "अर्धं", "पूर्ण", "बाकी"],
        support: ["जवळजवळ ... पूर्ण आहे", "आता फक्त ... बाकी आहे"]
      },
      {
        id: "request",
        speakerLine: "अजून वेळ हवा असेल तर कसं विचारशील?",
        englishHint: "Ask for more time politely.",
        goal: "Make a respectful request.",
        keywords: ["वेळ", "मिळेल", "का", "कृपया"],
        support: ["मला ... पर्यंत वेळ मिळेल का?"]
      },
      {
        id: "commit",
        speakerLine: "नवीन वेळ मिळाली तर काय वचन देशील?",
        englishHint: "What will you promise if you get more time?",
        goal: "Give a future commitment.",
        keywords: ["पूर्ण", "पाठवेन", "करीन", "नक्की"],
        support: ["मी ... पूर्ण करीन", "मी नक्की ... पाठवेन"]
      },
      {
        id: "clarify",
        speakerLine: "समोरच्याला तुझं कारण समजलं नाही तर काय करशील?",
        englishHint: "What will you do if they don't understand your reason?",
        goal: "Use clarification/repair language.",
        keywords: ["पुन्हा", "समजावून", "सांगतो", "उदाहरण"],
        support: ["मी पुन्हा समजावून सांगेन", "मी स्पष्टपणे ..."]
      },
      {
        id: "summary",
        speakerLine: "आता पूर्ण स्पष्टीकरण ४–५ वाक्यांत दे.",
        englishHint: "Give the full explanation in 4–5 sentences.",
        goal: "Combine apology, reason, status, request, and commitment.",
        keywords: ["माफ", "कारण", "वेळ", "पूर्ण", "पाठवेन"],
        support: ["माफ करा ...", "कारण ...", "सध्या ...", "मला ... मिळेल का?", "मी ..."]
      }
    ]
  },
  {
    slug: "recommend-opinion",
    title: "Opinion & Recommendation",
    context: "Discuss two options, disagree politely, and make a recommendation.",
    targetMinutes: "6–9 min",
    opening: "ऑनलाइन शिकणं चांगलं की वर्गात शिकणं?",
    turns: [
      {
        id: "position",
        speakerLine: "ऑनलाइन शिकणं चांगलं की वर्गात शिकणं?",
        englishHint: "Is online learning better or classroom learning?",
        goal: "Choose a position.",
        keywords: ["मते", "जास्त", "चांगलं", "मला"],
        support: ["माझ्या मते ...", "मला ... जास्त चांगलं वाटतं"]
      },
      {
        id: "reason",
        speakerLine: "तसं का वाटतं?",
        englishHint: "Why do you think so?",
        goal: "Give two reasons.",
        keywords: ["कारण", "आणि", "उपयोगी", "सोयीचं"],
        support: ["पहिलं कारण ...", "दुसरं ..."]
      },
      {
        id: "counter",
        speakerLine: "पण दुसऱ्या पर्यायाचाही एक फायदा आहे. तो कोणता?",
        englishHint: "Give one advantage of the other option.",
        goal: "Acknowledge the other side.",
        keywords: ["पण", "फायदा", "जरी", "तरी"],
        support: ["पण ... चा फायदा असा की ...", "जरी ... तरी ..."]
      },
      {
        id: "disagree",
        speakerLine: "मी म्हणतो की ऑनलाइन शिकणं नेहमीच चांगलं असतं. तू सहमत आहेस का?",
        englishHint: "Politely agree or disagree.",
        goal: "Use polite stance language.",
        keywords: ["मुद्दा", "मत", "सहमत", "पण"],
        support: ["तुमचा मुद्दा समजतो, पण ...", "मी पूर्णपणे सहमत नाही कारण ..."]
      },
      {
        id: "recommend",
        speakerLine: "नवीन विद्यार्थ्याला तू काय सुचवशील?",
        englishHint: "What would you recommend to a new student?",
        goal: "Give advice with a condition.",
        keywords: ["सुचवेन", "असेल", "तर", "सराव"],
        support: ["मी सुचवेन की ...", "जर ... असेल तर ..."]
      },
      {
        id: "summary",
        speakerLine: "शेवटी तुझं मत एका छोट्या परिच्छेदात सांग.",
        englishHint: "Summarize your view in a short paragraph.",
        goal: "Produce a connected opinion with contrast and recommendation.",
        keywords: ["मते", "कारण", "पण", "सुचवेन"],
        support: ["माझ्या मते ...", "कारण ...", "पण ...", "म्हणून मी सुचवेन ..."]
      }
    ]
  }
];

export function getConversationScenario(slug: string) {
  return conversationScenarios.find((scenario) => scenario.slug === slug);
}
