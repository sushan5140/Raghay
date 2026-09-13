export type SpeakingDrill = {
  id: string;
  title: string;
  focus: string;
  devanagari: string;
  romanized: string;
  english: string;
  keywords: string[];
  challenge?: string;
};

export const speakingDrills: SpeakingDrill[] = [
  {
    id: "intro-name-study",
    title: "Introduce yourself",
    focus: "Clear introduction",
    devanagari: "नमस्कार. माझं नाव अमित आहे. मी संगणकशास्त्र शिकतो आणि मला तंत्रज्ञानात रस आहे.",
    romanized: "Namaskaar. Majha naav Amit aahe. Mi sanganakshaastra shikto ani mala tantradnyaanat ras aahe.",
    english: "Hello. My name is Amit. I study computer science and I am interested in technology.",
    keywords: ["नमस्कार", "नाव", "शिकतो", "रस"],
    challenge: "Say the same pattern with your own name and interest."
  },
  {
    id: "yesterday-recap",
    title: "Yesterday recap",
    focus: "Past sequence",
    devanagari: "काल मी कॉलेजला गेलो, मित्राला भेटलो आणि संध्याकाळी घरी येऊन अभ्यास केला.",
    romanized: "Kaal mi college-la gelo, mitraala bhetlo ani sandhyakaali ghari yeun abhyas kela.",
    english: "Yesterday I went to college, met a friend, and came home in the evening and studied.",
    keywords: ["काल", "गेलो", "भेटलो", "अभ्यास"],
    challenge: "Replace the actions with three things you actually did yesterday."
  },
  {
    id: "future-plan",
    title: "Tomorrow plan",
    focus: "Future sequence",
    devanagari: "उद्या मी सकाळी अभ्यास करीन. दुपारी कॉलेजला जाईन आणि वेळ मिळाला तर मित्रांना भेटीन.",
    romanized: "Udya mi sakali abhyas kareen. Dupari college-la jaeen ani vel milala tar mitranna bheteen.",
    english: "Tomorrow I will study in the morning. I will go to college in the afternoon and, if there is time, meet friends.",
    keywords: ["उद्या", "करीन", "जाईन", "वेळ"],
    challenge: "Add one more future plan."
  },
  {
    id: "reason-result",
    title: "Explain a reason",
    focus: "Cause and result",
    devanagari: "बस उशिरा आली, त्यामुळे मी वर्गाला उशिरा पोहोचलो. मी शिक्षकांना कारण सांगितलं.",
    romanized: "Bas ushira aali, tyamule mi vargaala ushira pohachlo. Mi shikshakaanna karan saangitla.",
    english: "The bus came late, so I reached class late. I explained the reason to the teacher.",
    keywords: ["उशिरा", "त्यामुळे", "पोहोचलो", "कारण"],
    challenge: "Give a different reason for being late."
  },
  {
    id: "opinion",
    title: "Give an opinion",
    focus: "Opinion + reason",
    devanagari: "माझ्या मते रोज थोडा सराव करणं चांगलं आहे, कारण त्यामुळे भाषा हळूहळू नैसर्गिक वाटायला लागते.",
    romanized: "Majhya mate roj thoda saraav karna changla aahe, karan tyamule bhaasha haluhalu naisargik vaataayla laagte.",
    english: "In my opinion, practicing a little every day is good because the language gradually starts to feel natural.",
    keywords: ["मते", "सराव", "कारण", "नैसर्गिक"],
    challenge: "Give your own opinion about learning Marathi."
  },
  {
    id: "comparison",
    title: "Compare two choices",
    focus: "Comparison",
    devanagari: "ट्रेन बसपेक्षा वेगवान आहे, पण बस स्वस्त आहे. वेळ कमी असेल तर मी ट्रेन निवडेन.",
    romanized: "Train baspeksha vegvaan aahe, pan bas swasta aahe. Vel kami asel tar mi train nivaden.",
    english: "The train is faster than the bus, but the bus is cheaper. If time is limited, I will choose the train.",
    keywords: ["पेक्षा", "पण", "स्वस्त", "निवडेन"],
    challenge: "Compare two foods, apps, or places."
  },
  {
    id: "permission",
    title: "Ask permission politely",
    focus: "Permission and register",
    devanagari: "माफ करा, इथे फोटो काढला तर चालेल का? नसेल चालत तर मी फोटो काढणार नाही.",
    romanized: "Maaf kara, ithe photo kadhla tar chalel ka? Nasel chalat tar mi photo kadhnaar nahi.",
    english: "Excuse me, is it okay if I take a photo here? If it is not allowed, I will not take one.",
    keywords: ["माफ", "चालेल", "नसेल", "नाही"],
    challenge: "Ask permission for a different action."
  },
  {
    id: "clarification",
    title: "Repair the conversation",
    focus: "Clarification",
    devanagari: "माफ करा, शेवटचं वाक्य मला नीट समजलं नाही. कृपया थोडं हळू बोलून पुन्हा सांगाल का?",
    romanized: "Maaf kara, shevatcha vaakya mala nit samajla nahi. Kripaya thoda halu bolun punha saangaal ka?",
    english: "Sorry, I did not understand the last sentence clearly. Could you please say it again a little more slowly?",
    keywords: ["समजलं", "कृपया", "हळू", "पुन्हा"],
    challenge: "Say the same request in your own words."
  },
  {
    id: "decline-reschedule",
    title: "Decline and reschedule",
    focus: "Social planning",
    devanagari: "आज सात वाजता मला जमणार नाही, कारण माझा क्लास आहे. आपण आठ वाजता भेटू शकतो का?",
    romanized: "Aaj saat vaajta mala jamnaar nahi, karan majha class aahe. Aapan aath vaajta bhetu shakto ka?",
    english: "Seven today will not work for me because I have class. Can we meet at eight?",
    keywords: ["जमणार", "कारण", "भेटू", "शकतो"],
    challenge: "Change the time and reason."
  },
  {
    id: "service-problem",
    title: "Explain a service problem",
    focus: "Problem + solution request",
    devanagari: "मी हा शर्ट काल घेतला, पण हा साइज लहान आहे. बिल माझ्याकडे आहे. दुसरा साइज मिळेल का?",
    romanized: "Mi ha shirt kaal ghetla, pan ha size lahan aahe. Bil majhyaakade aahe. Dusra size milel ka?",
    english: "I bought this shirt yesterday, but this size is small. I have the bill. Can I get another size?",
    keywords: ["काल", "पण", "बिल", "दुसरा"],
    challenge: "Change the item and the problem."
  },
  {
    id: "recommendation",
    title: "Make a recommendation",
    focus: "Advice",
    devanagari: "तुला मराठी सुधारायची असेल तर रोज थोडं ऐक आणि मोठ्याने बोलण्याचा सराव कर. सुरुवातीला चुका झाल्या तरी चालतील.",
    romanized: "Tula Marathi sudhaaraaychi asel tar roj thoda aik ani mothyaane bolnyacha saraav kar. Suruvatila chuka jhalya tari chaaltil.",
    english: "If you want to improve your Marathi, listen a little every day and practice speaking aloud. It is okay to make mistakes at first.",
    keywords: ["असेल", "ऐक", "सराव", "चुका"],
    challenge: "Give one piece of study advice."
  },
  {
    id: "polite-disagreement",
    title: "Disagree politely",
    focus: "Nuance and stance",
    devanagari: "तुमचा मुद्दा समजतो, पण माझं मत थोडं वेगळं आहे. मला वाटतं दुसरा पर्याय जास्त सोयीचा आहे.",
    romanized: "Tumcha mudda samajto, pan majha mat thoda vegla aahe. Mala vaatta dusra paryaay jast soyicha aahe.",
    english: "I understand your point, but my opinion is a little different. I think the other option is more convenient.",
    keywords: ["मुद्दा", "पण", "मत", "पर्याय"],
    challenge: "Disagree politely about a different choice."
  }
];
