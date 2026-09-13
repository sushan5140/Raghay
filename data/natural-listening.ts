import type { QuickCheck, ListeningSegment } from "./lessons";

export type NaturalListeningTrack = {
  slug: string;
  title: string;
  context: string;
  targetMinutes: string;
  segments: ListeningSegment[];
  transcript: string;
  englishSummary: string;
  gist: QuickCheck;
  details: QuickCheck[];
};

export const naturalListeningTracks: NaturalListeningTrack[] = [
  {
    slug: "weekend-plan-changed",
    title: "The Weekend Plan That Changed",
    context: "Two friends describe how a fort trip turned into a completely different day.",
    targetMinutes: "2–3 min",
    segments: [
      {
        text: "शनिवारी मी आणि रोहन जवळच्या किल्ल्यावर जायचं ठरवलं होतं. आम्ही सकाळी सात वाजता भेटलो आणि बसस्टॉपकडे निघालो.",
        voice: "female"
      },
      {
        text: "बस वेळेवर आली, पण अर्ध्या रस्त्यात खूप पाऊस सुरू झाला. चालकाने सांगितलं की पुढचा रस्ता काही वेळासाठी बंद असू शकतो.",
        voice: "male"
      },
      {
        text: "सुरुवातीला आम्ही थांबून परिस्थिती पाहू या असं ठरवलं. पण पाऊस वाढत गेला आणि किल्ल्यावर गेलो तरी फिरणं कठीण होईल असं वाटलं.",
        voice: "female"
      },
      {
        text: "रोहनने शहरातल्या जुन्या संग्रहालयात जाऊ या असं सुचवलं. ते बसच्या पुढच्या स्टॉपपासून फार दूर नव्हतं, म्हणून आम्ही तिथे जाण्याचा निर्णय घेतला.",
        voice: "male"
      },
      {
        text: "संग्रहालय आमच्या अपेक्षेपेक्षा जास्त मनोरंजक होतं. आम्ही तिथे दोन तास घालवले आणि महाराष्ट्राच्या इतिहासाबद्दल एक छोटं प्रदर्शनही पाहिलं.",
        voice: "female"
      },
      {
        text: "बाहेर आलो तेव्हा पाऊस थोडा कमी झाला होता. आम्ही जवळच्या कॅफेत चहा घेतला आणि पुढच्या आठवड्याचा प्लॅन केला.",
        voice: "male"
      },
      {
        text: "दिवस आमच्या मूळ योजनेप्रमाणे गेला नाही, तरीही आम्हाला निराश वाटलं नाही. उलट, अचानक बदलामुळे आम्ही एक नवीन ठिकाण पाहिलं.",
        voice: "female"
      },
      {
        text: "शेवटी आम्ही ठरवलं की पुढच्या वेळी किल्ल्यावर जाण्याआधी हवामान आणि रस्त्यांची माहिती आधीच तपासायची.",
        voice: "male"
      }
    ],
    transcript: "शनिवारी मी आणि रोहन जवळच्या किल्ल्यावर जायचं ठरवलं होतं. आम्ही सकाळी सात वाजता भेटलो आणि बसस्टॉपकडे निघालो. बस वेळेवर आली, पण अर्ध्या रस्त्यात खूप पाऊस सुरू झाला. चालकाने सांगितलं की पुढचा रस्ता काही वेळासाठी बंद असू शकतो. सुरुवातीला आम्ही थांबून परिस्थिती पाहू या असं ठरवलं. पण पाऊस वाढत गेला आणि किल्ल्यावर गेलो तरी फिरणं कठीण होईल असं वाटलं. रोहनने शहरातल्या जुन्या संग्रहालयात जाऊ या असं सुचवलं. ते बसच्या पुढच्या स्टॉपपासून फार दूर नव्हतं, म्हणून आम्ही तिथे जाण्याचा निर्णय घेतला. संग्रहालय आमच्या अपेक्षेपेक्षा जास्त मनोरंजक होतं. आम्ही तिथे दोन तास घालवले आणि महाराष्ट्राच्या इतिहासाबद्दल एक छोटं प्रदर्शनही पाहिलं. बाहेर आलो तेव्हा पाऊस थोडा कमी झाला होता. आम्ही जवळच्या कॅफेत चहा घेतला आणि पुढच्या आठवड्याचा प्लॅन केला. दिवस आमच्या मूळ योजनेप्रमाणे गेला नाही, तरीही आम्हाला निराश वाटलं नाही. उलट, अचानक बदलामुळे आम्ही एक नवीन ठिकाण पाहिलं. शेवटी आम्ही ठरवलं की पुढच्या वेळी किल्ल्यावर जाण्याआधी हवामान आणि रस्त्यांची माहिती आधीच तपासायची.",
    englishSummary: "A fort trip is disrupted by heavy rain, so two friends visit a museum instead, enjoy the unexpected change, and decide to check weather and road conditions next time.",
    gist: {
      question: "What is the main point of the story?",
      options: [
        "A trip changed because of rain, but the new plan still went well",
        "The friends missed every bus and went home",
        "The museum was closed so they visited the fort"
      ],
      answer: 0,
      explanation: "The weather changed the plan, but the alternative became a good experience.",
      skill: "natural-listening-gist"
    },
    details: [
      {
        question: "Why did they avoid continuing to the fort?",
        options: ["Rain and possible road closure", "They forgot the tickets", "The fort was too expensive"],
        answer: 0,
        explanation: "The rain increased and the road might be closed.",
        skill: "natural-listening-detail"
      },
      {
        question: "What surprised them about the museum?",
        options: ["It was more interesting than expected", "It was empty", "It was free"],
        answer: 0,
        explanation: "The speaker says it was more interesting than they expected.",
        skill: "natural-listening-inference"
      },
      {
        question: "What will they do differently next time?",
        options: ["Check weather and roads first", "Leave much later", "Avoid buses completely"],
        answer: 0,
        explanation: "That is the final decision in the story.",
        skill: "natural-listening-sequence"
      }
    ]
  },
  {
    slug: "group-project",
    title: "The Group Project Meeting",
    context: "Three students discuss an unfinished project, divide the remaining work, and solve a timing problem.",
    targetMinutes: "2–4 min",
    segments: [
      {
        text: "स्नेहा: आपल्या प्रोजेक्टची प्रेझेंटेशन सोमवारी आहे. स्लाइड्स जवळजवळ तयार आहेत, पण डेटा विश्लेषणाचा भाग अजून पूर्ण झालेला नाही.",
        voice: "female"
      },
      {
        text: "अमोल: मी काल तो भाग करायचा प्रयत्न केला, पण दोन ग्राफमध्ये आकडे जुळत नव्हते. त्यामुळे मी निष्कर्ष लिहायला सुरुवात केली नाही.",
        voice: "male"
      },
      {
        text: "रिया: मग आधी ग्राफ तपासू या. मला दुपारी दोन तास मोकळे आहेत. मी मूळ फाइल आणि नवीन फाइलची तुलना करू शकते.",
        voice: "female"
      },
      {
        text: "स्नेहा: छान. मी त्या वेळेत प्रेझेंटेशनची भाषा सोपी करते. काही स्लाइड्सवर खूप मजकूर आहे, म्हणून बोलताना वेळ जास्त लागतो.",
        voice: "female"
      },
      {
        text: "अमोल: माझा एक प्रश्न आहे. जर डेटा आज पूर्ण झाला नाही तर आपण निष्कर्षाची स्लाइड तात्पुरती ठेवायची का, की उद्या सगळं पुन्हा अपडेट करायचं?",
        voice: "male"
      },
      {
        text: "रिया: माझ्या मते आज संध्याकाळपर्यंत अचूक डेटा मिळाला तरच निष्कर्ष लिहू या. अंदाजाने काही लिहिण्यापेक्षा थोडं उशिरा करणं चांगलं.",
        voice: "female"
      },
      {
        text: "स्नेहा: बरोबर. मग काम वाटून घेऊ. रिया डेटा तपासेल, अमोल निष्कर्षाचा मसुदा तयार ठेवेल, आणि मी स्लाइड्स छोट्या करेन.",
        voice: "female"
      },
      {
        text: "अमोल: आणि रात्री आठ वाजता पुन्हा दहा मिनिटांची कॉल करू या. तेव्हा कोणती गोष्ट बाकी आहे ते ठरवू.",
        voice: "male"
      }
    ],
    transcript: "स्नेहा: आपल्या प्रोजेक्टची प्रेझेंटेशन सोमवारी आहे. स्लाइड्स जवळजवळ तयार आहेत, पण डेटा विश्लेषणाचा भाग अजून पूर्ण झालेला नाही. अमोल: मी काल तो भाग करायचा प्रयत्न केला, पण दोन ग्राफमध्ये आकडे जुळत नव्हते. त्यामुळे मी निष्कर्ष लिहायला सुरुवात केली नाही. रिया: मग आधी ग्राफ तपासू या. मला दुपारी दोन तास मोकळे आहेत. मी मूळ फाइल आणि नवीन फाइलची तुलना करू शकते. स्नेहा: छान. मी त्या वेळेत प्रेझेंटेशनची भाषा सोपी करते. काही स्लाइड्सवर खूप मजकूर आहे, म्हणून बोलताना वेळ जास्त लागतो. अमोल: माझा एक प्रश्न आहे. जर डेटा आज पूर्ण झाला नाही तर आपण निष्कर्षाची स्लाइड तात्पुरती ठेवायची का, की उद्या सगळं पुन्हा अपडेट करायचं? रिया: माझ्या मते आज संध्याकाळपर्यंत अचूक डेटा मिळाला तरच निष्कर्ष लिहू या. अंदाजाने काही लिहिण्यापेक्षा थोडं उशिरा करणं चांगलं. स्नेहा: बरोबर. मग काम वाटून घेऊ. रिया डेटा तपासेल, अमोल निष्कर्षाचा मसुदा तयार ठेवेल, आणि मी स्लाइड्स छोट्या करेन. अमोल: आणि रात्री आठ वाजता पुन्हा दहा मिनिटांची कॉल करू या. तेव्हा कोणती गोष्ट बाकी आहे ते ठरवू.",
    englishSummary: "Three students diagnose a data problem, avoid writing unsupported conclusions, divide the remaining work, and schedule a short follow-up call.",
    gist: {
      question: "What is the group mainly trying to do?",
      options: [
        "Finish a project accurately before the presentation",
        "Cancel the presentation",
        "Choose a new project topic"
      ],
      answer: 0,
      explanation: "They are solving unfinished work while protecting accuracy.",
      skill: "natural-listening-gist"
    },
    details: [
      {
        question: "Why did Amol not start writing the conclusion?",
        options: ["Two graphs did not match", "He lost the slides", "He had no internet"],
        answer: 0,
        explanation: "The mismatch made the data uncertain.",
        skill: "natural-listening-detail"
      },
      {
        question: "What principle does Riya prefer?",
        options: ["Accurate data before conclusions", "Finish quickly even if uncertain", "Remove all graphs"],
        answer: 0,
        explanation: "She says it is better to be slightly late than write a guess.",
        skill: "natural-listening-inference"
      },
      {
        question: "What happens at 8 PM?",
        options: ["A short follow-up call", "The presentation", "The final upload deadline"],
        answer: 0,
        explanation: "They schedule a ten-minute call.",
        skill: "natural-listening-sequence"
      }
    ]
  },
  {
    slug: "station-delay",
    title: "A Complicated Station Delay",
    context: "A traveller misses a connection and talks with station staff about realistic alternatives.",
    targetMinutes: "2–3 min",
    segments: [
      {
        text: "प्रवासी: माफ करा, माझी पुण्याहून येणारी ट्रेन जवळजवळ चाळीस मिनिटं उशिरा आली. त्यामुळे माझी सात वाजताची बस चुकली.",
        voice: "male"
      },
      {
        text: "कर्मचारी: तुम्हाला कुठे जायचं आहे आणि तिथे किती वाजेपर्यंत पोहोचणं आवश्यक आहे?",
        voice: "female"
      },
      {
        text: "प्रवासी: मला रात्री दहा वाजेपर्यंत सांगलीला पोहोचायचं आहे. उद्या सकाळी लवकर एक कार्यक्रम आहे.",
        voice: "male"
      },
      {
        text: "कर्मचारी: आठ वाजता दुसरी बस आहे, पण ती थोडी हळू जाते. दुसरा पर्याय म्हणजे साडेसातची ट्रेन घेऊन पुढच्या स्टेशनवर बस बदलणं.",
        voice: "female"
      },
      {
        text: "प्रवासी: ट्रेनचा पर्याय वेगवान आहे का? माझ्याकडे आधीच बसचं तिकीट आहे. ते वापरता येईल का?",
        voice: "male"
      },
      {
        text: "कर्मचारी: बसचं तिकीट ट्रेनसाठी वापरता येणार नाही. पण जर तुम्ही आठची बस घेतली तर जुनं तिकीट बदलून देता येईल.",
        voice: "female"
      },
      {
        text: "प्रवासी: मला वाटतं बसचा पर्याय सोपा आहे. थोडा उशीर झाला तरी चालेल, पण मध्ये पुन्हा बदल करायचा नाही.",
        voice: "male"
      },
      {
        text: "कर्मचारी: ठीक आहे. या काउंटरवर तिकीट बदलून घ्या आणि प्लॅटफॉर्म तीनवर जा. बस सुटण्याच्या दहा मिनिटं आधी तिथे रहा.",
        voice: "female"
      }
    ],
    transcript: "प्रवासी: माफ करा, माझी पुण्याहून येणारी ट्रेन जवळजवळ चाळीस मिनिटं उशिरा आली. त्यामुळे माझी सात वाजताची बस चुकली. कर्मचारी: तुम्हाला कुठे जायचं आहे आणि तिथे किती वाजेपर्यंत पोहोचणं आवश्यक आहे? प्रवासी: मला रात्री दहा वाजेपर्यंत सांगलीला पोहोचायचं आहे. उद्या सकाळी लवकर एक कार्यक्रम आहे. कर्मचारी: आठ वाजता दुसरी बस आहे, पण ती थोडी हळू जाते. दुसरा पर्याय म्हणजे साडेसातची ट्रेन घेऊन पुढच्या स्टेशनवर बस बदलणं. प्रवासी: ट्रेनचा पर्याय वेगवान आहे का? माझ्याकडे आधीच बसचं तिकीट आहे. ते वापरता येईल का? कर्मचारी: बसचं तिकीट ट्रेनसाठी वापरता येणार नाही. पण जर तुम्ही आठची बस घेतली तर जुनं तिकीट बदलून देता येईल. प्रवासी: मला वाटतं बसचा पर्याय सोपा आहे. थोडा उशीर झाला तरी चालेल, पण मध्ये पुन्हा बदल करायचा नाही. कर्मचारी: ठीक आहे. या काउंटरवर तिकीट बदलून घ्या आणि प्लॅटफॉर्म तीनवर जा. बस सुटण्याच्या दहा मिनिटं आधी तिथे रहा.",
    englishSummary: "A traveller misses a bus connection, compares a faster but more complex train route with a slower direct bus, and chooses the simpler bus option.",
    gist: {
      question: "Why does the traveller choose the bus?",
      options: [
        "It is simpler and avoids another transfer",
        "It is faster than every other option",
        "The train is cancelled"
      ],
      answer: 0,
      explanation: "The traveller accepts a small delay to avoid another transfer.",
      skill: "natural-listening-gist"
    },
    details: [
      {
        question: "What caused the missed bus?",
        options: ["The incoming train was about 40 minutes late", "The traveller overslept", "The bus left early"],
        answer: 0,
        explanation: "The delayed train caused the missed connection.",
        skill: "natural-listening-detail"
      },
      {
        question: "Can the bus ticket be used directly on the train?",
        options: ["No", "Yes", "Only after 9 PM"],
        answer: 0,
        explanation: "The staff explicitly says it cannot be used for the train.",
        skill: "natural-listening-detail"
      },
      {
        question: "What must the traveller do before boarding?",
        options: ["Exchange the ticket and go to platform 3", "Buy a taxi voucher", "Call the driver"],
        answer: 0,
        explanation: "Those are the final instructions.",
        skill: "natural-listening-sequence"
      }
    ]
  },
  {
    slug: "learning-advice",
    title: "How to Become More Comfortable in Marathi",
    context: "A learner gives a short talk about moving from understanding Marathi to actually using it.",
    targetMinutes: "2–4 min",
    segments: [
      {
        text: "बर्‍याच विद्यार्थ्यांना एक मजेशीर अनुभव येतो. त्यांना मराठी वाचताना किंवा ऐकताना बऱ्यापैकी समजते, पण बोलायची वेळ आली की शब्द लगेच आठवत नाहीत.",
        voice: "female"
      },
      {
        text: "याचं एक कारण म्हणजे आपण भाषा ओळखण्याचा सराव जास्त करतो आणि स्वतः वाक्य तयार करण्याचा सराव कमी करतो. उत्तर पाहिल्यावर सगळं सोपं वाटतं, पण उत्तर स्वतः तयार करणं वेगळं कौशल्य आहे.",
        voice: "female"
      },
      {
        text: "माझ्या मते बोलणं सुधारण्यासाठी तीन गोष्टी उपयोगी आहेत. पहिली म्हणजे छोट्या वाक्यांनी सुरुवात करणं. सुरुवातीपासून परिपूर्ण मराठी बोलण्याचा प्रयत्न केला तर बोलण्याचा वेग कमी होतो.",
        voice: "female"
      },
      {
        text: "दुसरी गोष्ट म्हणजे ऐकलेल्या वाक्यांची नक्कल करणं. एखादं नैसर्गिक वाक्य दोन-तीन वेळा ऐका, मोठ्याने बोला आणि मग त्याच रचनेत स्वतःचं नवीन वाक्य तयार करा.",
        voice: "female"
      },
      {
        text: "तिसरी गोष्ट म्हणजे संभाषण थांबू न देणं. एखादा शब्द समजला नाही तर इंग्रजीत जाण्याऐवजी 'याचा अर्थ काय?', 'पुन्हा सांगाल का?' किंवा 'थोडं हळू बोला' असं विचारता येतं.",
        voice: "female"
      },
      {
        text: "चुका होणं हे अपयश नाही. उलट, कोणत्या जागी अडचण येते हे चुकांमुळे स्पष्ट होतं. जर तुम्ही प्रत्येक चुकीनंतर तोच प्रकार पुन्हा वापरलात तर हळूहळू उत्तर देण्याचा वेग वाढतो.",
        voice: "female"
      },
      {
        text: "फक्त शब्दसंग्रह वाढवणं पुरेसं नाही. त्या शब्दांना कारण, तुलना, मत, वेळ आणि अनुभव यांच्यासोबत जोडता आलं पाहिजे. तेव्हाच भाषा स्वतंत्रपणे वापरता येते.",
        voice: "female"
      },
      {
        text: "म्हणून रोज दहा मिनिटांचा सरावही उपयोगी ठरू शकतो: दोन मिनिटं ऐका, दोन मिनिटं मोठ्याने बोला, तीन मिनिटं स्वतः उत्तर द्या आणि शेवटी चुकीच्या गोष्टी पुन्हा करा.",
        voice: "female"
      }
    ],
    transcript: "बर्‍याच विद्यार्थ्यांना एक मजेशीर अनुभव येतो. त्यांना मराठी वाचताना किंवा ऐकताना बऱ्यापैकी समजते, पण बोलायची वेळ आली की शब्द लगेच आठवत नाहीत. याचं एक कारण म्हणजे आपण भाषा ओळखण्याचा सराव जास्त करतो आणि स्वतः वाक्य तयार करण्याचा सराव कमी करतो. उत्तर पाहिल्यावर सगळं सोपं वाटतं, पण उत्तर स्वतः तयार करणं वेगळं कौशल्य आहे. माझ्या मते बोलणं सुधारण्यासाठी तीन गोष्टी उपयोगी आहेत. पहिली म्हणजे छोट्या वाक्यांनी सुरुवात करणं. सुरुवातीपासून परिपूर्ण मराठी बोलण्याचा प्रयत्न केला तर बोलण्याचा वेग कमी होतो. दुसरी गोष्ट म्हणजे ऐकलेल्या वाक्यांची नक्कल करणं. एखादं नैसर्गिक वाक्य दोन-तीन वेळा ऐका, मोठ्याने बोला आणि मग त्याच रचनेत स्वतःचं नवीन वाक्य तयार करा. तिसरी गोष्ट म्हणजे संभाषण थांबू न देणं. एखादा शब्द समजला नाही तर इंग्रजीत जाण्याऐवजी 'याचा अर्थ काय?', 'पुन्हा सांगाल का?' किंवा 'थोडं हळू बोला' असं विचारता येतं. चुका होणं हे अपयश नाही. उलट, कोणत्या जागी अडचण येते हे चुकांमुळे स्पष्ट होतं. जर तुम्ही प्रत्येक चुकीनंतर तोच प्रकार पुन्हा वापरलात तर हळूहळू उत्तर देण्याचा वेग वाढतो. फक्त शब्दसंग्रह वाढवणं पुरेसं नाही. त्या शब्दांना कारण, तुलना, मत, वेळ आणि अनुभव यांच्यासोबत जोडता आलं पाहिजे. तेव्हाच भाषा स्वतंत्रपणे वापरता येते. म्हणून रोज दहा मिनिटांचा सरावही उपयोगी ठरू शकतो: दोन मिनिटं ऐका, दोन मिनिटं मोठ्याने बोला, तीन मिनिटं स्वतः उत्तर द्या आणि शेवटी चुकीच्या गोष्टी पुन्हा करा.",
    englishSummary: "The talk argues that conversational independence comes from producing language, shadowing natural sentences, using repair strategies, and turning mistakes into repeated practice—not just memorizing vocabulary.",
    gist: {
      question: "What is the main recommendation?",
      options: [
        "Practice producing and repairing real Marathi, not only recognizing it",
        "Memorize as many isolated words as possible",
        "Avoid speaking until grammar is perfect"
      ],
      answer: 0,
      explanation: "The whole talk focuses on active production and conversation repair.",
      skill: "natural-listening-gist"
    },
    details: [
      {
        question: "Why can recognition feel easier than speaking?",
        options: ["Creating an answer is a different skill", "Reading has no grammar", "Speaking uses fewer words"],
        answer: 0,
        explanation: "The speaker explicitly distinguishes recognition from self-generated production.",
        skill: "natural-listening-inference"
      },
      {
        question: "What should you do with a useful sentence you hear?",
        options: ["Repeat it and build a new sentence with the same pattern", "Translate it once and move on", "Only write it down"],
        answer: 0,
        explanation: "Shadowing plus pattern transfer is the recommended method.",
        skill: "natural-listening-detail"
      },
      {
        question: "What is the suggested ten-minute routine?",
        options: ["Listen, speak aloud, answer independently, then review mistakes", "Only read grammar rules", "Only watch videos"],
        answer: 0,
        explanation: "That four-part routine is given in the final segment.",
        skill: "natural-listening-sequence"
      }
    ]
  }
];

export function getNaturalListeningTrack(slug: string) {
  return naturalListeningTracks.find((track) => track.slug === slug);
}
