var title = 'ENG | 51-100'; 
var questionCount = 50; 
var timeValue = 99;
var answerMixing = true;
var deadLine = false;
var about = true;
let syllabus = '';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: "\ufeffI\u2019m _______ the subway right now. The train is too loud, I\u2019ll call you later",
                    answer: "on",
                    options: ["on","at","from","in","out off"]
                }
                ,
                {
                    numb: 2,
                    question: "I was surprised when the neighbor said he _____ the police if we _____ another party",
                    answer: "would call, had",
                    options: ["would call, had","would call, would have","called, had","will call, have","will call,has"]
                }
                ,
                {
                    numb: 3,
                    question: "Thank god we have a dog! If he ..., we \u2026 someone was trying to break into the house",
                    answer: "hadn\u2019t barked, wouldn\u2019t have known",
                    options: ["hadn\u2019t barked, wouldn\u2019t have known","doesn\u2019t bark, don\u2019t know","didn\u2019t bark, wouldn\u2019t know","hasn\u2019t barked, won\u2019t know","have barked, won\u2019t know"]
                }
                ,
                {
                    numb: 4,
                    question: "He bought himself a ________ truck.",
                    answer: "big new",
                    options: ["big new","huge","small","smart","tall"]
                }
                ,
                {
                    numb: 5,
                    question: "We've gone the wrong way. We _______ left at the traffic lights",
                    answer: "shouldn\u2019t have turned",
                    options: ["shouldn\u2019t have turned","can\u2019t have turned","must have turned","had to have turned","have to have turned"]
                }
                ,
                {
                    numb: 6,
                    question: "I come to ______ school by _____ bus.",
                    answer: "- \/ -",
                    options: ["- \/ -","-\/using","walking\/-","to\/-","a\/-"]
                }
                ,
                {
                    numb: 7,
                    question: "He was sent to ______ prison for participating in a money laundering scam",
                    answer: "-",
                    options: ["-","an","the","a","then"]
                }
                ,
                {
                    numb: 8,
                    question: "Why don\u2019t you drop \u2026 on your way home? I\u2019ve just made some cookies",
                    answer: "by",
                    options: ["by","along","into","down","for"]
                }
                ,
                {
                    numb: 9,
                    question: "My wife, she ______ things out, and then I can\u2019t find my collectables. That\u2019s so annoying",
                    answer: "is always throwing",
                    options: ["is always throwing","always threw","had always thrown","always throws","always threws"]
                }
                ,
                {
                    numb: 10,
                    question: "Can you just draw the curtains? I have this weird feeling that we _______ .",
                    answer: "are being watched",
                    options: ["are being watched","are be watched","are been watching","are watching","is watcing"]
                }
                ,
                {
                    numb: 11,
                    question: "Sorry, guys, but I'm exhausted! I don't fancy ________ out tonight",
                    answer: "going",
                    options: ["going","to go","go","to going","am going"]
                }
                ,
                {
                    numb: 12,
                    question: "I was surprised when the neighbor said he _______ the police if we _______ another party",
                    answer: "would call, had",
                    options: ["would call, had","will call, have","would call, would have","called, had","calls,have"]
                }
                ,
                {
                    numb: 13,
                    question: "It smells as if _______ . Are you sure you switched off the oven?",
                    answer: "something is burning",
                    options: ["something is burning","burnt","burnt food","to burn","is burn"]
                }
                ,
                {
                    numb: 14,
                    question: "What did you eat for ...... lunch?",
                    answer: "-",
                    options: ["-","a","the","an","is"]
                }
                ,
                {
                    numb: 15,
                    question: "This is the bank __ was robbed yesterday.",
                    answer: "which",
                    options: ["which","who","whose","where","when"]
                }
                ,
                {
                    numb: 16,
                    question: "\u041c\u044b \u0441\u0434\u0430\u0434\u0438\u043c \u044d\u0442\u043e\u0442 \u044d\u043a\u0437\u0430\u043c\u0435\u043d",
                    answer: "We will pass this exam",
                    options: ["We will pass this exam","We will conduct this exam","We will pass this is exam","We will take this exam","We are will take this exam"]
                }
                ,
                {
                    numb: 17,
                    question: "I think he (to be) glad to see you",
                    answer: "Will be",
                    options: ["Will be","will be not","will been","were","won't be"]
                }
                ,
                {
                    numb: 18,
                    question: "My working day (to begin) at seven o'clock.",
                    answer: "begins",
                    options: ["begins","began","begun","will begin","to begin"]
                }
                ,
                {
                    numb: 19,
                    question: "Has he been to school _____________?",
                    answer: ".yet",
                    options: [".yet","hasn't","already","has","have"]
                }
                ,
                {
                    numb: 20,
                    question: "He \/ not finish his essay (yet) _____________________________________",
                    answer: ".he hasn't finished his essay yet",
                    options: [".he hasn't finished his essay yet","he doesn\u2019t finished his essay yet","he haven\u2019t finishing essay","he didn\u2019t finish his essay yet","he have not finished his essay yet"]
                }
                ,
                {
                    numb: 21,
                    question: "I\u2019m afraid of _____ mistakes.",
                    answer: "making",
                    options: ["making","make","made","to make","maked"]
                }
                ,
                {
                    numb: 22,
                    question: "The business letter ___ just ___ .",
                    answer: "has \/ been written",
                    options: ["has \/ been written","is \/ written","was \/ written","were \/ written","is \/ going to write"]
                }
                ,
                {
                    numb: 23,
                    question: "It is winter. Everything ___ with snow.",
                    answer: "is covered",
                    options: ["is covered","covered","were covered","will cover","are covered"]
                }
                ,
                {
                    numb: 24,
                    question: "\u201c\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u0433\u0440\u0430\u0431\u0438\u0442\u0435\u043b\u044c \u0431\u044b\u043b \u043f\u043e\u0439\u043c\u0430\u043d \u043f\u043e\u043b\u0438\u0446\u0438\u0435\u0439 \u043f\u0440\u043e\u0448\u043b\u043e\u0439 \u043d\u043e\u0447\u044c\u044e.\u201d",
                    answer: "A bank robber was caught by the police last night.",
                    options: ["A bank robber was caught by the police last night.","The bank guard was caught by the police last night.","A bank robber was caught by the police last month","A bank robber was not caught by the police last night.","A bank was robbed last night"]
                }
                ,
                {
                    numb: 25,
                    question: "'I work in a bank.' \u21d2 He said that he ______ in a bank.",
                    answer: "worked",
                    options: ["worked","work","works","working","won't work"]
                }
                ,
                {
                    numb: 26,
                    question: "Don't come in here with those muddy shoes!! I have ________ cleaned this floor!!!",
                    answer: "Just",
                    options: ["Just","Yet","never","ever","Already"]
                }
                ,
                {
                    numb: 27,
                    question: "A: Do you know where Julia is? B: Yes, I ---- her. (just \/ see)",
                    answer: "have just seen",
                    options: ["have just seen","has just see","have just see","just seen","just see"]
                }
                ,
                {
                    numb: 28,
                    question: "You are eating in a restaurant. The waiter thinks you have finished and wants to take your plate away.You say: Wait a minute! I ----. (not \/ finish)",
                    answer: "haven't finished yet",
                    options: ["haven't finished yet","not finish","not finished","have finished","finish"]
                }
                ,
                {
                    numb: 29,
                    question: "Is, on March 22, when, celebrated, are identical, Nauryz, night and day.",
                    answer: "Nauryz is celebrated on March 22 when night and day are identical.",
                    options: ["Nauryz is celebrated on March 22 when night and day are identical.","Nauryz is on March 22 when celebrated are identical night and day.","When celebrated is on March 22 Nauryz night and day are identical.","On March 22 when celebrated are identical Nauryz night and day.","Nauryz is celebrated night and day on March 22 when are identical."]
                }
                ,
                {
                    numb: 30,
                    question: "Can you open the door? Oh, it is ... open.",
                    answer: "Already",
                    options: ["Already","ever","never","just","yet"]
                }
                ,
                {
                    numb: 31,
                    question: "\u201cWhat _____ to do tonight?\u201d \u201cWhat about going out for a meal?\u201d",
                    answer: "would you like",
                    options: ["would you like","do you like","are liking","will you like","like"]
                }
                ,
                {
                    numb: 32,
                    question: "\u201cWhat ______ to do after university?\u201d \u201cI\u2019d like to get a job in publishing.\u201d",
                    answer: "do you hope",
                    options: ["do you hope","will you hope","are you going to hope","are you hope","hoping"]
                }
                ,
                {
                    numb: 33,
                    question: "This apple has _______ exceptionally sweet taste.",
                    answer: "an",
                    options: ["an","the","never","not","is"]
                }
                ,
                {
                    numb: 34,
                    question: "She didn\u2019t want _________ anything that would influence his decision.",
                    answer: "to say",
                    options: ["to say","in order to say","saying","having said","said"]
                }
                ,
                {
                    numb: 35,
                    question: "\u201c I want you _______ on the picture,\u201d said the teacher.",
                    answer: "to concentrate",
                    options: ["to concentrate","concentrating","being concentrated","in order to concentrate","concentrates"]
                }
                ,
                {
                    numb: 36,
                    question: "Why is she sitting there all _______ herself in the dark?",
                    answer: "by",
                    options: ["by","with","lonely","alone","together"]
                }
                ,
                {
                    numb: 37,
                    question: "You can come with me if you like, but really you ______ if you don\u2019t want to.",
                    answer: "don\u2019t have to",
                    options: ["don\u2019t have to","would not","could not","dare not to","don\u2019t"]
                }
                ,
                {
                    numb: 38,
                    question: "Michelle has gone to the market ______ some eggs.",
                    answer: "to buy",
                    options: ["to buy","for buying","for to buy","to be bought","buys"]
                }
                ,
                {
                    numb: 39,
                    question: "What is the weather _____ in January?",
                    answer: "like",
                    options: ["like","liked","likes","don\u2019t like","aren\u2019t like"]
                }
                ,
                {
                    numb: 40,
                    question: "Anne was upset because she didn\u2019t ________ in the race. She really wanted to win.",
                    answer: "come first",
                    options: ["come first","come last","go up","turn out","put on"]
                }
                ,
                {
                    numb: 41,
                    question: "I _____ English food. It\u2019s wonderful!",
                    answer: "love",
                    options: ["love","loved","loves","am loving","are love"]
                }
                ,
                {
                    numb: 42,
                    question: "this is a great party! Everyone _______.",
                    answer: "is dancing",
                    options: ["is dancing","are dancing","dances","dance","will dance"]
                }
                ,
                {
                    numb: 43,
                    question: "What ______ in your free time?",
                    answer: "do you do",
                    options: ["do you do","are you doing","you do","are you do","did do"]
                }
                ,
                {
                    numb: 44,
                    question: "That\u2019s the palace _______ the King lives.",
                    answer: "where",
                    options: ["where","who","when","which","-"]
                }
                ,
                {
                    numb: 45,
                    question: "I ______ swim when I was three.",
                    answer: "could",
                    options: ["could","can","have to","must","will"]
                }
                ,
                {
                    numb: 46,
                    question: "I ______ a shower every morning.",
                    answer: "have",
                    options: ["have","have got","has","had","am having"]
                }
                ,
                {
                    numb: 47,
                    question: "Was Joan\u2019s party better ____ Maria\u2019s?",
                    answer: "than",
                    options: ["than","much","like","as","more"]
                }
                ,
                {
                    numb: 48,
                    question: "They are the policemen _______ caught the thief.",
                    answer: "who",
                    options: ["who","where","when","-","which"]
                }
                ,
                {
                    numb: 49,
                    question: "Usually Jim ______ to work on Sundays.",
                    answer: "goes",
                    options: ["goes","go","is going","went","gone"]
                }
                ,
                {
                    numb: 50,
                    question: "A present! For me? You\u2019re _____ kind!",
                    answer: "so",
                    options: ["so","such","such a","so many","much more"]
                }
                ,
];
showqa();