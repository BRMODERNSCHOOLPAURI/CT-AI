```javascript
/* =========================================================
   BR MODERN SCHOOL PAURI
   HUMAN CHATBOT CHALLENGE
   chatbot.js

   Independent Activity-05 chatbot engine.
   Does NOT require chatbot code inside script.js.

   200 TOPICS
   MULTIPLE QUESTION PATTERNS
   KEYWORD + PHRASE MATCHING
   SENSIBLE QUESTION CHECK
   STUDENT-FRIENDLY ANSWERS
========================================================= */

(function () {

"use strict";

/* =========================================================
   CONFIGURATION
========================================================= */

const CHATBOT_CONFIG = {

    activityNumber: 5,

    title: "Human Chatbot Challenge",

    subtitle:
        "Ask thoughtful questions. Think, reason and respond.",

    unknown:
        "I am not sure what you mean. Please ask a clear and complete question.",

    incomplete:
        "Please complete your question so I can understand what you are asking.",

    greeting:
        "Hello! I am your Human Chatbot. Ask me a clear question and let's think together.",

    thanks:
        "You're welcome! Keep asking thoughtful questions.",

    goodbye:
        "Goodbye! Keep thinking, solving and creating."

};


/* =========================================================
   200 TOPICS
========================================================= */

const TOPICS = [

/* 001–020 : PERSONAL */

{
 id:1,
 name:"name",
 keys:["name","called","who are you"],
 answer:"My name is Human Chatbot. I am designed to help you practise thoughtful questioning and reasoning."
},

{
 id:2,
 name:"age",
 keys:["age","old are you","how old"],
 answer:"I do not have a human age. I am a computer-based learning chatbot."
},

{
 id:3,
 name:"favourite food",
 keys:["favourite food","favorite food","food do you like","food you love","food you enjoy"],
 answer:"My favourite food is rajma-chawal."
},

{
 id:4,
 name:"favourite colour",
 keys:["favourite colour","favorite colour","favourite color","favorite color","colour do you like","color do you like"],
 answer:"My favourite colour is blue."
},

{
 id:5,
 name:"favourite subject",
 keys:["favourite subject","favorite subject","subject do you like","subject you enjoy"],
 answer:"English is one of my favourite subjects because language helps us communicate ideas."
},

{
 id:6,
 name:"favourite game",
 keys:["favourite game","favorite game","game do you like","game you enjoy"],
 answer:"I enjoy thinking games and puzzles because they encourage logical reasoning."
},

{
 id:7,
 name:"favourite sport",
 keys:["favourite sport","favorite sport","sport do you like","sport you enjoy"],
 answer:"Cricket is a sport many students enjoy, and it is also a great example of teamwork."
},

{
 id:8,
 name:"favourite book",
 keys:["favourite book","favorite book","book do you like","book you enjoy"],
 answer:"I enjoy books that encourage curiosity, imagination and problem solving."
},

{
 id:9,
 name:"favourite animal",
 keys:["favourite animal","favorite animal","animal do you like","animal you like"],
 answer:"I like elephants because they are intelligent, social and have strong memories."
},

{
 id:10,
 name:"hobby",
 keys:["hobby","hobbies","free time","what do you do for fun"],
 answer:"I enjoy helping learners explore questions, patterns, language and ideas."
},

{
 id:11,
 name:"best friend",
 keys:["best friend","close friend","good friend","who is your friend"],
 answer:"As a chatbot, I do not have a real best friend, but I enjoy interacting with curious learners."
},

{
 id:12,
 name:"personality",
 keys:["personality","what are you like","describe yourself"],
 answer:"I am designed to be helpful, patient, curious and focused on learning."
},

{
 id:13,
 name:"feelings",
 keys:["feelings","feel","happy","sad","emotion"],
 answer:"I do not experience human emotions, but I can understand and discuss feelings."
},

{
 id:14,
 name:"dream",
 keys:["dream","dreams","what do you dream"],
 answer:"My goal is to help learners ask better questions and develop clear thinking."
},

{
 id:15,
 name:"goal",
 keys:["goal","goals","aim","purpose"],
 answer:"My goal is to support learning through questioning, reasoning and communication."
},

{
 id:16,
 name:"talent",
 keys:["talent","talents","good at","skill"],
 answer:"My strength is processing language and helping organise information."
},

{
 id:17,
 name:"strength",
 keys:["strength","strong point","best at"],
 answer:"One of my strengths is identifying patterns in language and information."
},

{
 id:18,
 name:"weakness",
 keys:["weakness","weak point","not good at"],
 answer:"I can make mistakes, especially when a question is unclear or lacks enough information."
},

{
 id:19,
 name:"birthday",
 keys:["birthday","born","date were you born"],
 answer:"I do not have a personal birthday like a human being."
},

{
 id:20,
 name:"home",
 keys:["where do you live","your home","where is your home"],
 answer:"I do not have a physical home. I work as software on computers and digital systems."
},


/* 021–040 : FAMILY */

{
 id:21,
 name:"family",
 keys:["family","your family"],
 answer:"I do not have a human family, but I can help you talk about family relationships and values."
},

{
 id:22,
 name:"parents",
 keys:["parents","mother and father","your parents"],
 answer:"I do not have human parents. I was created through computer technology and training."
},

{
 id:23,
 name:"mother",
 keys:["mother","mom","mum","your mother"],
 answer:"I do not have a human mother."
},

{
 id:24,
 name:"father",
 keys:["father","dad","your father"],
 answer:"I do not have a human father."
},

{
 id:25,
 name:"siblings",
 keys:["siblings","brother","sister","brothers","sisters"],
 answer:"I do not have siblings because I am not a human being."
},

{
 id:26,
 name:"grandparents",
 keys:["grandparents","grandmother","grandfather"],
 answer:"I do not have grandparents, but I can discuss the important role grandparents often play in families."
},

{
 id:27,
 name:"family time",
 keys:["family time","time with family","family together"],
 answer:"Spending meaningful time together can strengthen communication and relationships."
},

{
 id:28,
 name:"helping family",
 keys:["help family","helping family","help my family"],
 answer:"Helping with suitable household responsibilities is a good way to develop responsibility and cooperation."
},

{
 id:29,
 name:"family values",
 keys:["family values","values in family"],
 answer:"Respect, kindness, honesty, responsibility and communication are important family values."
},

{
 id:30,
 name:"family celebration",
 keys:["family celebration","celebrate with family","family function"],
 answer:"Family celebrations can create opportunities to share happiness, traditions and memories."
},

{
 id:31,
 name:"family trip",
 keys:["family trip","family travel","trip with family"],
 answer:"A family trip can be a useful opportunity to explore new places and spend quality time together."
},

{
 id:32,
 name:"family responsibility",
 keys:["family responsibility","responsibility at home"],
 answer:"Everyone can contribute through age-appropriate responsibilities such as keeping things organised and helping others."
},

{
 id:33,
 name:"respect elders",
 keys:["respect elders","respect older people","respect grandparents"],
 answer:"Respecting elders means listening politely, speaking kindly and valuing their experiences."
},

{
 id:34,
 name:"siblings helping",
 keys:["help sibling","help brother","help sister"],
 answer:"Helping a sibling can build cooperation, patience and a sense of responsibility."
},

{
 id:35,
 name:"family communication",
 keys:["family communication","talk to family","communicate with family"],
 answer:"Open and respectful communication helps family members understand one another."
},

{
 id:36,
 name:"family problem solving",
 keys:["family problem","solve family problem"],
 answer:"Family problems are best approached calmly, by listening, understanding the situation and finding a fair solution."
},

{
 id:37,
 name:"family rules",
 keys:["family rules","rules at home"],
 answer:"Reasonable family rules help everyone understand responsibilities, boundaries and expectations."
},

{
 id:38,
 name:"family support",
 keys:["family support","support from family"],
 answer:"Support from family can encourage confidence, learning and responsible decision-making."
},

{
 id:39,
 name:"family kindness",
 keys:["family kindness","kind to family"],
 answer:"Small acts of kindness, such as helping and listening, can make family relationships stronger."
},

{
 id:40,
 name:"family teamwork",
 keys:["family teamwork","teamwork at home"],
 answer:"Family teamwork means sharing responsibilities and working together toward common goals."
},


/* 041–060 : SCHOOL */

{
 id:41,
 name:"school",
 keys:["school","your school","school name"],
 answer:"I am part of the Human Chatbot Challenge in the CT & AI Learning Lab at BR Modern School Pauri."
},

{
 id:42,
 name:"teacher",
 keys:["teacher","teachers","your teacher"],
 answer:"Teachers guide learners, explain ideas and help students develop knowledge and skills."
},

{
 id:43,
 name:"classroom",
 keys:["classroom","class room","your classroom"],
 answer:"A good classroom encourages participation, curiosity, respect and learning."
},

{
 id:44,
 name:"library",
 keys:["library","school library","books in library"],
 answer:"A library gives students access to books and information and encourages reading and independent learning."
},

{
 id:45,
 name:"computer lab",
 keys:["computer lab","computer laboratory","computers at school"],
 answer:"A computer lab provides opportunities to learn digital skills, computing and technology."
},

{
 id:46,
 name:"science lab",
 keys:["science lab","science laboratory"],
 answer:"A science lab allows students to observe, investigate and learn through experiments."
},

{
 id:47,
 name:"playground",
 keys:["playground","school ground","sports ground"],
 answer:"A playground provides space for physical activity, games, teamwork and recreation."
},

{
 id:48,
 name:"school rules",
 keys:["school rules","rules in school"],
 answer:"School rules help maintain safety, discipline, respect and a positive learning environment."
},

{
 id:49,
 name:"school uniform",
 keys:["school uniform","uniform"],
 answer:"A school uniform can create a common identity and help students follow school expectations."
},

{
 id:50,
 name:"school assembly",
 keys:["school assembly","morning assembly","assembly"],
 answer:"School assemblies can provide opportunities for announcements, reflection, performances and shared learning."
},

{
 id:51,
 name:"school activity",
 keys:["school activity","school activities","activities at school"],
 answer:"School activities provide opportunities to learn beyond textbooks and develop teamwork and creativity."
},

{
 id:52,
 name:"school project",
 keys:["school project","school projects","project at school"],
 answer:"A good school project involves planning, research, organisation, creativity and presentation."
},

{
 id:53,
 name:"school competition",
 keys:["school competition","competition at school","school contest"],
 answer:"Competitions can encourage practice, confidence, creativity and healthy participation."
},

{
 id:54,
 name:"school discipline",
 keys:["school discipline","discipline at school"],
 answer:"Discipline means following reasonable rules and behaving responsibly."
},

{
 id:55,
 name:"school friendship",
 keys:["school friendship","friends at school","school friends"],
 answer:"Positive friendships at school can provide cooperation, encouragement and shared learning experiences."
},

{
 id:56,
 name:"school cleanliness",
 keys:["school cleanliness","clean school","cleanliness at school"],
 answer:"Keeping the school clean is a shared responsibility that supports health and a pleasant learning environment."
},

{
 id:57,
 name:"school safety",
 keys:["school safety","safe school","safety at school"],
 answer:"School safety involves following rules, listening to adults and reporting unsafe situations."
},

{
 id:58,
 name:"school technology",
 keys:["school technology","technology at school","digital learning"],
 answer:"Technology can support research, communication, creativity and interactive learning when used responsibly."
},

{
 id:59,
 name:"school leadership",
 keys:["school leadership","student leadership","leader at school"],
 answer:"Good school leadership involves responsibility, communication, fairness and service."
},

{
 id:60,
 name:"school learning",
 keys:["school learning","learning at school","what learn at school"],
 answer:"School learning develops knowledge, communication, problem solving, collaboration and many other skills."
},


/* 061–080 : LEARNING */

{
 id:61,
 name:"english",
 keys:["english","learn english","english language"],
 answer:"English is a language used for communication, reading, writing, listening and speaking."
},

{
 id:62,
 name:"grammar",
 keys:["grammar","english grammar"],
 answer:"Grammar is the system of rules and patterns that helps us form meaningful sentences."
},

{
 id:63,
 name:"noun",
 keys:["noun","nouns","what is noun"],
 answer:"A noun is a word used to name a person, place, animal, thing or idea."
},

{
 id:64,
 name:"verb",
 keys:["verb","verbs","what is verb"],
 answer:"A verb commonly expresses an action, occurrence or state."
},

{
 id:65,
 name:"adjective",
 keys:["adjective","adjectives","what is adjective"],
 answer:"An adjective describes or gives more information about a noun or pronoun."
},

{
 id:66,
 name:"adverb",
 keys:["adverb","adverbs","what is adverb"],
 answer:"An adverb can give information about how, when, where or to what extent something happens."
},

{
 id:67,
 name:"pronoun",
 keys:["pronoun","pronouns","what is pronoun"],
 answer:"A pronoun is a word that can be used in place of a noun or noun phrase."
},

{
 id:68,
 name:"sentence",
 keys:["sentence","sentences","what is sentence"],
 answer:"A sentence is a group of words arranged to express a complete thought."
},

{
 id:69,
 name:"vocabulary",
 keys:["vocabulary","new words","word power"],
 answer:"Vocabulary means the words a person knows and uses."
},

{
 id:70,
 name:"reading",
 keys:["reading","read better","improve reading"],
 answer:"Regular reading can improve vocabulary, comprehension, fluency and general knowledge."
},

{
 id:71,
 name:"writing",
 keys:["writing","write better","improve writing"],
 answer:"Good writing improves through planning, clear organisation, suitable vocabulary and revision."
},

{
 id:72,
 name:"speaking",
 keys:["speaking","speak english","improve speaking"],
 answer:"Regular practice, clear pronunciation, useful vocabulary and confidence can improve speaking."
},

{
 id:73,
 name:"listening",
 keys:["listening","listening skill","improve listening"],
 answer:"Active listening means paying attention, understanding the message and responding appropriately."
},

{
 id:74,
 name:"question",
 keys:["question","questions","ask question","asking question"],
 answer:"A good question is clear, purposeful and gives enough information for the listener to understand what is being asked."
},

{
 id:75,
 name:"answer",
 keys:["answer","answers","good answer"],
 answer:"A good answer should be relevant, clear and supported by appropriate information."
},

{
 id:76,
 name:"mistake",
 keys:["mistake","mistakes","making mistakes","error"],
 answer:"Mistakes can provide useful information about what needs to be improved."
},

{
 id:77,
 name:"practice",
 keys:["practice","practise","how to practice","how to practise"],
 answer:"Regular, focused practice helps strengthen skills and build confidence."
},

{
 id:78,
 name:"memory",
 keys:["memory","remember","memorise","memorize"],
 answer:"Understanding, connecting ideas and practising actively can help information stay in memory."
},

{
 id:79,
 name:"concentration",
 keys:["concentration","focus","how to focus"],
 answer:"A clear goal, fewer distractions and short focused study periods can support concentration."
},

{
 id:80,
 name:"study",
 keys:["study","studying","how to study","study better"],
 answer:"Effective study includes understanding concepts, practising, reviewing and checking your progress."
},


/* 081–100 : COMPUTATIONAL THINKING */

{
 id:81,
 name:"computational thinking",
 keys:["computational thinking","ct","what is computational thinking"],
 answer:"Computational thinking is a way of solving problems using ideas such as decomposition, pattern recognition, abstraction and algorithms."
},

{
 id:82,
 name:"decomposition",
 keys:["decomposition","decompose","break problem"],
 answer:"Decomposition means breaking a large problem into smaller, manageable parts."
},

{
 id:83,
 name:"pattern recognition",
 keys:["pattern recognition","recognise pattern","recognize pattern","patterns"],
 answer:"Pattern recognition means identifying similarities, repetitions or useful relationships in information."
},

{
 id:84,
 name:"abstraction",
 keys:["abstraction","abstract thinking","what is abstraction"],
 answer:"Abstraction means focusing on the important information while leaving out unnecessary detail."
},

{
 id:85,
 name:"algorithm",
 keys:["algorithm","algorithms","what is algorithm"],
 answer:"An algorithm is a clear sequence of steps used to solve a problem or complete a task."
},

{
 id:86,
 name:"sequence",
 keys:["sequence","sequencing","sequence means"],
 answer:"Sequencing means arranging steps or events in a logical order."
},

{
 id:87,
 name:"debugging",
 keys:["debugging","debug","debug a problem"],
 answer:"Debugging means finding and correcting errors in a process, program or solution."
},

{
 id:88,
 name:"logic",
 keys:["logic","logical thinking","logical reasoning"],
 answer:"Logic helps us connect information and reach conclusions based on reasons and evidence."
},

{
 id:89,
 name:"problem solving",
 keys:["problem solving","solve problem","problem-solving"],
 answer:"Problem solving involves understanding the problem, considering possible solutions, choosing an approach and checking the result."
},

{
 id:90,
 name:"decision making",
 keys:["decision making","make decision","decision"],
 answer:"Good decision making involves understanding choices, considering consequences and selecting a reasonable option."
},

{
 id:91,
 name:"classification",
 keys:["classification","classify","sorting"],
 answer:"Classification means grouping things according to shared characteristics."
},

{
 id:92,
 name:"sorting",
 keys:["sorting","sort","sort things"],
 answer:"Sorting means arranging items according to a chosen rule or property."
},

{
 id:93,
 name:"data",
 keys:["data","what is data"],
 answer:"Data is information collected or represented so that it can be examined and used."
},

{
 id:94,
 name:"information",
 keys:["information","what is information"],
 answer:"Information is meaningful knowledge obtained from data, observations or other sources."
},

{
 id:95,
 name:"critical thinking",
 keys:["critical thinking","think critically","critical thinker"],
 answer:"Critical thinking means examining information carefully, questioning assumptions and using reasons before reaching a conclusion."
},

{
 id:96,
 name:"creative thinking",
 keys:["creative thinking","creativity","creative thinker"],
 answer:"Creative thinking involves generating new ideas, making connections and exploring different possibilities."
},

{
 id:97,
 name:"reasoning",
 keys:["reasoning","reason","reason logically"],
 answer:"Reasoning means using information and relationships between ideas to reach a conclusion."
},

{
 id:98,
 name:"pattern",
 keys:["pattern","patterns around us","find pattern"],
 answer:"Patterns appear in language, numbers, nature and everyday activities. Finding them can help us predict or organise information."
},

{
 id:99,
 name:"flowchart",
 keys:["flowchart","flow chart","what is flowchart"],
 answer:"A flowchart is a visual representation of steps in a process or algorithm."
},

{
 id:100,
 name:"instructions",
 keys:["instructions","instruction","clear instructions"],
 answer:"Good instructions are clear, ordered and specific enough for someone to follow them successfully."
},


/* 101–120 : AI */

{
 id:101,
 name:"artificial intelligence",
 keys:["artificial intelligence","ai","what is ai"],
 answer:"Artificial intelligence refers to computer systems designed to perform tasks that can involve abilities such as learning, language processing, recognition or decision making."
},

{
 id:102,
 name:"ai readiness",
 keys:["ai readiness","ai ready","ready for ai"],
 answer:"AI readiness includes understanding technology, asking clear questions, checking information and using AI responsibly."
},

{
 id:103,
 name:"chatbot",
 keys:["chatbot","chat bot","what is chatbot"],
 answer:"A chatbot is a computer program designed to communicate with people through conversation."
},

{
 id:104,
 name:"ai question",
 keys:["ask ai","question ai","ask chatbot"],
 answer:"Clear questions usually help an AI system understand your intended task more accurately."
},

{
 id:105,
 name:"prompt",
 keys:["prompt","prompts","what is prompt"],
 answer:"A prompt is an instruction or question given to an AI system to guide its response."
},

{
 id:106,
 name:"good prompt",
 keys:["good prompt","better prompt","write prompt"],
 answer:"A good prompt clearly states the task and provides useful context or constraints when needed."
},

{
 id:107,
 name:"ai mistake",
 keys:["ai mistake","ai errors","ai can make mistakes"],
 answer:"AI systems can make mistakes, so important information should be checked against reliable sources."
},

{
 id:108,
 name:"ai creativity",
 keys:["ai creativity","ai creative","can ai create"],
 answer:"AI can assist with generating ideas and content, but people still need to guide, evaluate and improve the results."
},

{
 id:109,
 name:"ai learning",
 keys:["ai learning","learn with ai","ai for learning"],
 answer:"AI can support learning by explaining concepts, generating practice questions and helping learners explore ideas responsibly."
},

{
 id:110,
 name:"responsible ai",
 keys:["responsible ai","use ai responsibly","ai responsibility"],
 answer:"Responsible AI use includes checking information, protecting privacy, respecting others and using technology for appropriate purposes."
},

{
 id:111,
 name:"ai safety",
 keys:["ai safety","safe ai","safety with ai"],
 answer:"Safe AI use means protecting personal information, thinking critically and following appropriate rules."
},

{
 id:112,
 name:"ai bias",
 keys:["ai bias","bias in ai","biased ai"],
 answer:"AI systems can reflect biases present in their data or design, so their outputs should be evaluated carefully."
},

{
 id:113,
 name:"ai privacy",
 keys:["ai privacy","privacy and ai","private information ai"],
 answer:"Avoid sharing sensitive personal information with AI systems unless you have a clear, appropriate reason and permission."
},

{
 id:114,
 name:"ai future",
 keys:["future of ai","ai future","future ai"],
 answer:"AI is likely to continue influencing education, communication, science, creativity and many kinds of work."
},

{
 id:115,
 name:"human and ai",
 keys:["human and ai","humans and ai","human vs ai"],
 answer:"Humans provide goals, judgement, values and context, while AI can help process information and generate possibilities."
},

{
 id:116,
 name:"ai learning assistant",
 keys:["ai assistant","learning assistant","ai tutor"],
 answer:"An AI learning assistant can support practice and explanations, but it should complement rather than replace human teachers and judgement."
},

{
 id:117,
 name:"ai information",
 keys:["ai information","information from ai","trust ai"],
 answer:"AI-generated information should be checked when accuracy matters because an AI response may contain errors."
},

{
 id:118,
 name:"ai ethics",
 keys:["ai ethics","ethics of ai","ethical ai"],
 answer:"AI ethics concerns fairness, responsibility, privacy, safety, transparency and the effects of AI on people and society."
},

{
 id:119,
 name:"ai imagination",
 keys:["ai imagination","imagination ai","ai ideas"],
 answer:"AI can generate possibilities, while human imagination and judgement help decide which ideas are useful."
},

{
 id:120,
 name:"ai communication",
 keys:["ai communication","communicate with ai","talk to ai"],
 answer:"Clear language, specific questions and useful context make communication with AI more effective."
},


/* 121–140 : DAILY LIFE */

{
 id:121,
 name:"morning routine",
 keys:["morning routine","morning routine do","start your day"],
 answer:"A healthy morning routine can include getting ready, eating breakfast, planning the day and preparing for learning."
},

{
 id:122,
 name:"daily routine",
 keys:["daily routine","routine","daily schedule"],
 answer:"A balanced daily routine can include learning, physical activity, rest, responsibilities and time for hobbies."
},

{
 id:123,
 name:"breakfast",
 keys:["breakfast","morning meal"],
 answer:"Breakfast can provide energy and nutrients to begin the day."
},

{
 id:124,
 name:"exercise",
 keys:["exercise","physical activity","workout"],
 answer:"Regular age-appropriate physical activity supports general health, fitness and well-being."
},

{
 id:125,
 name:"sleep",
 keys:["sleep","good sleep","sleep routine"],
 answer:"Regular, sufficient sleep is important for learning, attention, mood and overall well-being."
},

{
 id:126,
 name:"time management",
 keys:["time management","manage time","time manage"],
 answer:"Time management means planning how to use available time so important tasks can be completed effectively."
},

{
 id:127,
 name:"hobbies",
 keys:["hobbies","hobby ideas","free time activity"],
 answer:"Hobbies can include reading, drawing, music, sports, puzzles, crafts and many other interests."
},

{
 id:128,
 name:"weekend",
 keys:["weekend","weekends"],
 answer:"Weekends can be used for rest, family time, hobbies, revision and enjoyable activities."
},

{
 id:129,
 name:"morning",
 keys:["morning","in morning"],
 answer:"Morning is the early part of the day, generally before noon."
},

{
 id:130,
 name:"afternoon",
 keys:["afternoon","in afternoon"],
 answer:"Afternoon is the part of the day after noon and before evening."
},

{
 id:131,
 name:"evening",
 keys:["evening","in evening"],
 answer:"Evening is the later part of the day, usually after afternoon and before night."
},

{
 id:132,
 name:"night",
 keys:["night","at night"],
 answer:"Night is the darker period of the day when people generally rest or sleep."
},

{
 id:133,
 name:"today",
 keys:["today","this day"],
 answer:"Today means the current day."
},

{
 id:134,
 name:"tomorrow",
 keys:["tomorrow","next day"],
 answer:"Tomorrow means the day after today."
},

{
 id:135,
 name:"yesterday",
 keys:["yesterday","previous day"],
 answer:"Yesterday means the day before today."
},

{
 id:136,
 name:"calendar",
 keys:["calendar","calendar date","dates"],
 answer:"A calendar helps us organise days, weeks, months and important dates."
},

{
 id:137,
 name:"clock",
 keys:["clock","time","tell time"],
 answer:"A clock helps us measure and understand time during the day."
},

{
 id:138,
 name:"punctuality",
 keys:["punctuality","punctual","on time"],
 answer:"Punctuality means being on time for a planned activity or responsibility."
},

{
 id:139,
 name:"responsibility",
 keys:["responsibility","responsible","being responsible"],
 answer:"Responsibility means being dependable and taking appropriate care of duties and decisions."
},

{
 id:140,
 name:"habit",
 keys:["habit","habits","good habit"],
 answer:"A habit is a behaviour that becomes regular through repetition."
},


/* 141–160 : ENVIRONMENT */

{
 id:141,
 name:"environment",
 keys:["environment","our environment"],
 answer:"The environment includes the natural world and the surroundings in which living things exist."
},

{
 id:142,
 name:"trees",
 keys:["trees","tree","importance of trees"],
 answer:"Trees provide habitats, help support ecosystems and contribute to cleaner air and healthier environments."
},

{
 id:143,
 name:"water",
 keys:["water","save water","water conservation"],
 answer:"Water is essential for life, so using it carefully and avoiding unnecessary waste is important."
},

{
 id:144,
 name:"air pollution",
 keys:["air pollution","polluted air","air quality"],
 answer:"Air pollution occurs when harmful substances contaminate the air. Reducing emissions and protecting green spaces can help."
},

{
 id:145,
 name:"plastic",
 keys:["plastic","plastic waste","plastic pollution"],
 answer:"Reducing unnecessary plastic use and disposing of waste responsibly can help reduce pollution."
},

{
 id:146,
 name:"recycling",
 keys:["recycling","recycle","recyclable"],
 answer:"Recycling involves processing suitable waste materials so they can be used again."
},

{
 id:147,
 name:"waste",
 keys:["waste","waste management","garbage"],
 answer:"Good waste management includes reducing waste, reusing materials and disposing of waste responsibly."
},

{
 id:148,
 name:"climate",
 keys:["climate","climate change"],
 answer:"Climate describes long-term patterns of weather. Climate change refers to significant long-term changes in those patterns."
},

{
 id:149,
 name:"global warming",
 keys:["global warming","warming earth"],
 answer:"Global warming refers to the long-term increase in Earth's average surface temperature."
},

{
 id:150,
 name:"clean energy",
 keys:["clean energy","renewable energy","green energy"],
 answer:"Renewable energy comes from sources that are naturally replenished, such as sunlight and wind."
},

{
 id:151,
 name:"solar energy",
 keys:["solar energy","solar power","sun energy"],
 answer:"Solar energy uses energy from the Sun, often through technologies such as solar panels."
},

{
 id:152,
 name:"wildlife",
 keys:["wildlife","wild animals","protect wildlife"],
 answer:"Wildlife conservation helps protect animals, plants and the ecosystems they depend on."
},

{
 id:153,
 name:"forest",
 keys:["forest","forests","forest conservation"],
 answer:"Forests support biodiversity, store carbon, influence water cycles and provide many resources."
},

{
 id:154,
 name:"nature",
 keys:["nature","natural world"],
 answer:"Nature includes living organisms, ecosystems and the physical world around us."
},

{
 id:155,
 name:"biodiversity",
 keys:["biodiversity","biological diversity"],
 answer:"Biodiversity means the variety of living organisms and ecosystems in an area or across Earth."
},

{
 id:156,
 name:"earth",
 keys:["earth","planet earth","our planet"],
 answer:"Earth is the planet we live on and the only known planet with life."
},

{
 id:157,
 name:"reusable items",
 keys:["reusable","reusable items","reuse"],
 answer:"Reusable items can be used multiple times and may help reduce unnecessary waste."
},

{
 id:158,
 name:"energy saving",
 keys:["save energy","energy saving","conserve energy"],
 answer:"Turning off unnecessary lights and devices and using energy efficiently can reduce waste."
},

{
 id:159,
 name:"green school",
 keys:["green school","eco school","environment friendly school"],
 answer:"A green school encourages responsible resource use, cleanliness, biodiversity and environmental awareness."
},

{
 id:160,
 name:"environment responsibility",
 keys:["environment responsibility","responsibility environment","protect environment"],
 answer:"Everyone can contribute by reducing waste, saving resources and caring for shared spaces."
},


/* 161–180 : TECHNOLOGY */

{
 id:161,
 name:"computer",
 keys:["computer","computers","what is computer"],
 answer:"A computer is an electronic system that processes information according to instructions."
},

{
 id:162,
 name:"internet",
 keys:["internet","what is internet"],
 answer:"The internet is a global network that connects computers and other devices so they can communicate and share information."
},

{
 id:163,
 name:"website",
 keys:["website","web site","what is website"],
 answer:"A website is a collection of connected web pages and digital resources available through the web."
},

{
 id:164,
 name:"browser",
 keys:["browser","web browser","internet browser"],
 answer:"A web browser is software used to access and interact with websites."
},

{
 id:165,
 name:"search engine",
 keys:["search engine","search engines","google search"],
 answer:"A search engine helps people find information on the web by searching indexed content."
},

{
 id:166,
 name:"keyboard",
 keys:["keyboard","computer keyboard"],
 answer:"A keyboard is an input device used to enter letters, numbers, symbols and commands."
},

{
 id:167,
 name:"mouse",
 keys:["mouse","computer mouse"],
 answer:"A computer mouse is a pointing device used to interact with items on a screen."
},

{
 id:168,
 name:"software",
 keys:["software","what is software"],
 answer:"Software is a collection of programs and instructions that tell a computer what to do."
},

{
 id:169,
 name:"hardware",
 keys:["hardware","what is hardware"],
 answer:"Hardware refers to the physical components of a computer or digital device."
},

{
 id:170,
 name:"coding",
 keys:["coding","programming","learn coding"],
 answer:"Coding means writing instructions that a computer can interpret and execute."
},

{
 id:171,
 name:"program",
 keys:["program","computer program","programming"],
 answer:"A computer program is a set of instructions designed to perform a task."
},

{
 id:172,
 name:"password",
 keys:["password","strong password","password safety"],
 answer:"A strong password should be difficult for others to guess and should not be shared unnecessarily."
},

{
 id:173,
 name:"cyber safety",
 keys:["cyber safety","online safety","internet safety"],
 answer:"Cyber safety includes protecting personal information, using strong security practices and thinking carefully before clicking or sharing."
},

{
 id:174,
 name:"digital footprint",
 keys:["digital footprint","online footprint"],
 answer:"A digital footprint is the trail of information and activity a person leaves through their use of digital services."
},

{
 id:175,
 name:"digital citizenship",
 keys:["digital citizenship","digital citizen"],
 answer:"Digital citizenship means using digital technology safely, respectfully, responsibly and thoughtfully."
},

{
 id:176,
 name:"online information",
 keys:["online information","information online","internet information"],
 answer:"Online information should be checked for accuracy, source quality, date and supporting evidence."
},

{
 id:177,
 name:"technology benefit",
 keys:["benefits of technology","technology benefits","technology useful"],
 answer:"Technology can support communication, learning, creativity, research and problem solving."
},

{
 id:178,
 name:"technology problem",
 keys:["problems with technology","technology disadvantages","technology problems"],
 answer:"Technology can create challenges such as distraction, privacy risks, misinformation and overdependence when used carelessly."
},

{
 id:179,
 name:"digital balance",
 keys:["digital balance","screen balance","balanced technology"],
 answer:"Digital balance means using technology in a healthy and purposeful way while making time for sleep, physical activity, relationships and other responsibilities."
},

{
 id:180,
 name:"future technology",
 keys:["future technology","technology future","future of technology"],
 answer:"Future technology may bring new tools for communication, learning, science, creativity and problem solving."
},


/* 181–200 : VALUES / THINKING */

{
 id:181,
 name:"kindness",
 keys:["kindness","being kind","kind"],
 answer:"Kindness means treating others with care, respect and consideration."
},

{
 id:182,
 name:"honesty",
 keys:["honesty","honest","being honest"],
 answer:"Honesty means communicating truthfully and avoiding deliberate deception."
},

{
 id:183,
 name:"respect",
 keys:["respect","respectful","show respect"],
 answer:"Respect means treating people, ideas, property and shared spaces with consideration."
},

{
 id:184,
 name:"teamwork",
 keys:["teamwork","team work","working together"],
 answer:"Teamwork means cooperating with others to achieve a shared goal."
},

{
 id:185,
 name:"leadership",
 keys:["leadership","leader","good leader"],
 answer:"Good leadership involves responsibility, communication, fairness and helping others work toward a shared goal."
},

{
 id:186,
 name:"confidence",
 keys:["confidence","confident","build confidence"],
 answer:"Confidence can grow through preparation, practice, learning from mistakes and taking on suitable challenges."
},

{
 id:187,
 name:"curiosity",
 keys:["curiosity","curious","being curious"],
 answer:"Curiosity encourages people to ask questions, explore ideas and learn more."
},

{
 id:188,
 name:"patience",
 keys:["patience","patient","being patient"],
 answer:"Patience means staying calm and continuing to work even when something takes time."
},

{
 id:189,
 name:"perseverance",
 keys:["perseverance","persevere","keep trying"],
 answer:"Perseverance means continuing to work toward a goal despite difficulties."
},

{
 id:190,
 name:"failure",
 keys:["failure","fail","failing"],
 answer:"Failure can be treated as feedback that helps us identify what to change or improve."
},

{
 id:191,
 name:"success",
 keys:["success","successful","what is success"],
 answer:"Success can mean making meaningful progress toward a worthwhile goal."
},

{
 id:192,
 name:"innovation",
 keys:["innovation","innovate","innovative"],
 answer:"Innovation involves developing or improving ideas, products or methods to create useful change."
},

{
 id:193,
 name:"imagination",
 keys:["imagination","imagine","imaginative"],
 answer:"Imagination helps us create possibilities, explore ideas and think beyond what already exists."
},

{
 id:194,
 name:"team problem solving",
 keys:["team problem solving","solve together","solve as team"],
 answer:"Teams can solve problems effectively by sharing ideas, listening, dividing tasks and evaluating possible solutions."
},

{
 id:195,
 name:"decision consequences",
 keys:["decision consequences","consequences of decision","result of decision"],
 answer:"Before making a decision, it is useful to consider what might happen as a result."
},

{
 id:196,
 name:"learning from mistakes",
 keys:["learn from mistakes","mistakes teach","learn from error"],
 answer:"Learning from mistakes means identifying what went wrong, understanding why and trying a better approach."
},

{
 id:197,
 name:"asking why",
 keys:["why questions","ask why","importance of why"],
 answer:"Why questions encourage explanation, reasoning and deeper understanding."
},

{
 id:198,
 name:"asking how",
 keys:["how questions","ask how","importance of how"],
 answer:"How questions can help us understand processes, methods and possible solutions."
},

{
 id:199,
 name:"better questions",
 keys:["better questions","ask better questions","good questions"],
 answer:"Better questions are clear, specific, purposeful and connected to what you genuinely want to understand."
},

{
 id:200,
 name:"learning mindset",
 keys:["learning mindset","growth mindset","mindset for learning"],
 answer:"A strong learning mindset treats challenges as opportunities to practise, reflect, improve and discover."
}

];


/* =========================================================
   QUESTION VARIATION GENERATOR
   100 PATTERNS
   ========================================================= */

const QUESTION_PATTERNS = [

"what is {topic}",
"what do you know about {topic}",
"tell me about {topic}",
"can you tell me about {topic}",
"please tell me about {topic}",
"explain {topic}",
"can you explain {topic}",
"please explain {topic}",
"what does {topic} mean",
"what is meant by {topic}",
"what do you mean by {topic}",
"why is {topic} important",
"why is {topic} useful",
"why do we need {topic}",
"why do people use {topic}",
"how does {topic} work",
"how can {topic} help",
"how can we use {topic}",
"how do we use {topic}",
"how can i learn about {topic}",
"how can i improve {topic}",
"how can we improve {topic}",
"give me information about {topic}",
"give me some information on {topic}",
"share information about {topic}",
"tell me something about {topic}",
"say something about {topic}",
"describe {topic}",
"describe the importance of {topic}",
"what are the benefits of {topic}",
"what are the advantages of {topic}",
"what are the problems with {topic}",
"what are the uses of {topic}",
"what are examples of {topic}",
"give examples of {topic}",
"can you give an example of {topic}",
"give me an example about {topic}",
"why should we learn {topic}",
"why should i learn {topic}",
"why should we understand {topic}",
"how important is {topic}",
"is {topic} important",
"is {topic} useful",
"can you explain why {topic} matters",
"why does {topic} matter",
"how does {topic} help us",
"how does {topic} help students",
"how does {topic} help people",
"how is {topic} useful",
"where do we use {topic}",
"where can we use {topic}",
"when do we use {topic}",
"when is {topic} useful",
"who uses {topic}",
"who can use {topic}",
"can students use {topic}",
"can children learn {topic}",
"can you teach me {topic}",
"teach me about {topic}",
"help me understand {topic}",
"help me learn {topic}",
"i want to know about {topic}",
"i want information about {topic}",
"i want to learn about {topic}",
"i want to understand {topic}",
"could you explain {topic}",
"could you tell me about {topic}",
"would you explain {topic}",
"would you tell me about {topic}",
"please give me an explanation of {topic}",
"give a simple explanation of {topic}",
"explain {topic} simply",
"explain {topic} in simple words",
"explain {topic} for a student",
"explain {topic} with an example",
"can you explain {topic} with an example",
"what should i know about {topic}",
"what should students know about {topic}",
"what are the important things about {topic}",
"what is special about {topic}",
"what is the purpose of {topic}",
"what is the role of {topic}",
"how would you describe {topic}",
"how would you explain {topic}",
"why do we care about {topic}",
"why should people care about {topic}",
"how can {topic} be useful",
"how can {topic} be helpful",
"what can {topic} teach us",
"what can i learn from {topic}",
"what can students learn from {topic}",
"can you help with {topic}",
"can you help me understand {topic}",
"tell me the meaning of {topic}",
"give me the meaning of {topic}",
"what should i remember about {topic}",
"what is one important thing about {topic}"
];


/* =========================================================
   TEXT NORMALISATION
========================================================= */

function normalise(text){

    return String(text || "")
        .toLowerCase()
        .trim()
        .replace(/[?!.,;:'"`]/g," ")
        .replace(/\s+/g," ");

}


/* =========================================================
   INCOMPLETE QUESTION CHECK
========================================================= */

function isIncomplete(text){

    const words = normalise(text).split(/\s+/);

    if(words.length < 2) return true;

    const incompleteWords = [
        "what",
        "why",
        "how",
        "when",
        "where",
        "who",
        "which",
        "tell",
        "explain",
        "describe",
        "meaning",
        "about",
        "can",
        "is",
        "are",
        "do",
        "does"
    ];

    if(words.length <= 2 &&
       incompleteWords.includes(words[0])){

        return true;
    }

    return false;
}


/* =========================================================
   GREETING DETECTOR
========================================================= */

function isGreeting(text){

    const t = normalise(text);

    const greetings = [
        "hi",
        "hello",
        "hey",
        "hii",
        "hiii",
        "good morning",
        "good afternoon",
        "good evening",
        "how are you",
        "how are you doing"
    ];

    return greetings.includes(t);
}


/* =========================================================
   THANKS DETECTOR
========================================================= */

function isThanks(text){

    const t = normalise(text);

    return [
        "thanks",
        "thank you",
        "thankyou",
        "thx",
        "thanks a lot",
        "thank you so much"
    ].includes(t);
}


/* =========================================================
   GOODBYE DETECTOR
========================================================= */

function isGoodbye(text){

    const t = normalise(text);

    return [
        "bye",
        "goodbye",
        "good bye",
        "see you",
        "see you later"
    ].includes(t);
}


/* =========================================================
   TOPIC MATCHING
========================================================= */

function findTopic(question){

    const text = normalise(question);

    let best = null;
    let bestScore = 0;

    TOPICS.forEach(topic => {

        let score = 0;

        topic.keys.forEach(key => {

            const k = normalise(key);

            if(text === k){

                score += 100;

            }
            else if(text.includes(k)){

                score += k.split(" ").length * 10;

            }

        });


        /*
           Topic-name match
        */

        if(text.includes(normalise(topic.name))){

            score += 8;

        }


        if(score > bestScore){

            bestScore = score;
            best = topic;

        }

    });


    return bestScore >= 8 ? best : null;

}


/* =========================================================
   ANSWER ENGINE
========================================================= */

function getAnswer(question){

    const text = normalise(question);


    if(!text){

        return CHATBOT_CONFIG.incomplete;

    }


    if(isGreeting(text)){

        return CHATBOT_CONFIG.greeting;

    }


    if(isThanks(text)){

        return CHATBOT_CONFIG.thanks;

    }


    if(isGoodbye(text)){

        return CHATBOT_CONFIG.goodbye;

    }


    if(isIncomplete(text)){

        return CHATBOT_CONFIG.incomplete;

    }


    const topic = findTopic(text);


    if(!topic){

        return CHATBOT_CONFIG.unknown;

    }


    return topic.answer;

}


/* =========================================================
   CREATE 20,000+ VIRTUAL QUESTION PATTERNS
========================================================= */

function buildQuestionDatabase(){

    const database = [];

    TOPICS.forEach(topic => {

        QUESTION_PATTERNS.forEach(pattern => {

            database.push(
                pattern.replace(
                    "{topic}",
                    topic.name
                )
            );

        });

    });

    return database;

}


const VIRTUAL_QUESTION_DATABASE =
    buildQuestionDatabase();


/*
   200 topics × 100 patterns
   = 20,000 virtual question patterns
*/

window.HUMAN_CHATBOT_DATABASE =
    VIRTUAL_QUESTION_DATABASE;


/* =========================================================
   CHATBOT UI
========================================================= */

function createChatbotUI(){

    const area = document.getElementById("gameArea");

    if(!area) return;


    area.innerHTML = `

        <div class="humanChatbot">

            <div class="chatbotHeader">

                <div>
                    <span class="tag">
                        AI READINESS
                    </span>

                    <h3>
                        Human Chatbot Challenge
                    </h3>

                    <p>
                        Ask a clear question. Think before you ask.
                    </p>
                </div>

                <div class="chatbotStatus">
                    <span></span>
                    ONLINE
                </div>

            </div>


            <div
                id="chatMessages"
                class="chatMessages">

                <div class="botMessage">
                    ${CHATBOT_CONFIG.greeting}
                </div>

            </div>


            <div class="chatSuggestions">

                <button data-q="What is computational thinking?">
                    What is CT?
                </button>

                <button data-q="What is artificial intelligence?">
                    What is AI?
                </button>

                <button data-q="What is your favourite food?">
                    Favourite food?
                </button>

                <button data-q="Why is teamwork important?">
                    Why teamwork?
                </button>

            </div>


            <div class="chatInputRow">

                <input
                    id="chatInput"
                    maxlength="300"
                    autocomplete="off"
                    placeholder="Ask a clear question...">

                <button
                    id="chatSend"
                    class="primary"
                    type="button">

                    Send →

                </button>

            </div>


            <div
                id="chatFeedback"
                class="chatFeedback">
            </div>

        </div>
    `;


    bindChatEvents();

}


/* =========================================================
   CHAT EVENTS
========================================================= */

function bindChatEvents(){

    const input =
        document.getElementById("chatInput");

    const send =
        document.getElementById("chatSend");


    if(!input || !send) return;


    send.addEventListener(
        "click",
        function(){

            processChat();

        }
    );


    input.addEventListener(
        "keydown",
        function(event){

            if(event.key === "Enter"){

                event.preventDefault();

                processChat();

            }

        }
    );


    document
        .querySelectorAll(".chatSuggestions button")
        .forEach(button => {

            button.addEventListener(
                "click",
                function(){

                    input.value =
                        this.dataset.q;

                    processChat();

                }
            );

        });

}


/* =========================================================
   PROCESS CHAT
========================================================= */

function processChat(){

    const input =
        document.getElementById("chatInput");

    const messages =
        document.getElementById("chatMessages");

    const feedback =
        document.getElementById("chatFeedback");


    if(!input || !messages) return;


    const question =
        input.value.trim();


    if(!question){

        if(feedback){

            feedback.textContent =
                "Please type a complete question.";

        }

        return;

    }


    addMessage(
        question,
        "userMessage"
    );


    const answer =
        getAnswer(question);


    setTimeout(
        function(){

            addMessage(
                answer,
                "botMessage"
            );

        },
        250
    );


    input.value = "";


    if(feedback){

        feedback.textContent =
            "Question processed • Think • Solve • Create";

    }

}


/* =========================================================
   ADD MESSAGE
========================================================= */

function addMessage(text, className){

    const messages =
        document.getElementById("chatMessages");

    if(!messages) return;


    const message =
        document.createElement("div");


    message.className =
        className;


    message.textContent =
        text;


    messages.appendChild(message);


    messages.scrollTop =
        messages.scrollHeight;

}


/* =========================================================
   PUBLIC API
========================================================= */

window.HumanChatbot = {

    ask:function(question){

        return getAnswer(question);

    },

    findTopic:function(question){

        return findTopic(question);

    },

    getTopics:function(){

        return TOPICS;

    },

    getQuestionCount:function(){

        return VIRTUAL_QUESTION_DATABASE.length;

    },

    open:function(){

        createChatbotUI();

    }

};


/* =========================================================
   ACTIVITY 5 INTEGRATION
========================================================= */

const originalOpenAct =
    window.openAct;


window.openAct =
    function(number){

        if(number === 5){

            /*
               Activity 5 uses the existing game page.
            */

            if(typeof window.show === "function"){

                window.show("game");

            }


            const phase =
                document.getElementById("phase");

            const title =
                document.getElementById("gameTitle");

            const meta =
                document.getElementById("gameMeta");

            const timer =
                document.getElementById("timer");


            if(phase){

                phase.textContent =
                    "AI READINESS";

            }


            if(title){

                title.textContent =
                    CHATBOT_CONFIG.title;

            }


            if(meta){

                meta.textContent =
                    CHATBOT_CONFIG.subtitle;

            }


            if(timer){

                timer.textContent =
                    "CHAT";

            }


            document
                .querySelectorAll(".levels")
                .forEach(el => {

                    el.style.display =
                        "none";

                });


            createChatbotUI();


            return;

        }


        /*
           Other activities remain controlled
           by the original script.js.
        */

        if(typeof originalOpenAct === "function"){

            originalOpenAct.apply(
                this,
                arguments
            );

        }

    };


/* =========================================================
   AUTO INIT
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function(){

        console.log(
            "Human Chatbot loaded:",
            TOPICS.length,
            "topics /",
            VIRTUAL_QUESTION_DATABASE.length,
            "virtual question patterns"
        );

    }
);

})();
```
