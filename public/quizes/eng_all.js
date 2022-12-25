var title = 'ENG | 1-246'; 
var questionCount = 246; 
var timeValue = 99;
var answerMixing = true;
var deadLine = false;
var about = true;
let syllabus = '.';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: "\ufeffNational feelings, like the national language and history belong _____ the people.",
                    answer: "to",
                    options: ["to","at","in","for","off"]
                }
                ,
                {
                    numb: 2,
                    question: "_____ summer months the lake in the Hyde Park is a fantastic place to swim.",
                    answer: "in",
                    options: ["in","at","to","on","off"]
                }
                ,
                {
                    numb: 3,
                    question: "Liverpudlians are proud _____ their birth place.",
                    answer: "of",
                    options: ["of","for","with","by","at"]
                }
                ,
                {
                    numb: 4,
                    question: "Colleagues are more likely to agree with you if they think that you have _______ in common.",
                    answer: "something",
                    options: ["something","nothing","anything","anywhere","anybody"]
                }
                ,
                {
                    numb: 5,
                    question: "Lent, in the Christian tradition, is usually a time to think of someone _______ than yourself.",
                    answer: "other",
                    options: ["other","another","the other","others","than other"]
                }
                ,
                {
                    numb: 6,
                    question: "In ______ Old _____ New Testament of the Bible we read about people whose dreams foretold the future.",
                    answer: "both \u2026 and",
                    options: ["both \u2026 and","either \u2026 or","neither \u2026 nor","both","nor-both"]
                }
                ,
                {
                    numb: 7,
                    question: "In the Middle Ages, the Vikings ______ farm in Greenland fields.",
                    answer: "used to",
                    options: ["used to","used","had to","were to","use"]
                }
                ,
                {
                    numb: 8,
                    question: "A human skeleton renews _______ every seven years.",
                    answer: "itself",
                    options: ["itself","oneself","himself","themselves","herself"]
                }
                ,
                {
                    numb: 9,
                    question: "Celebrities, if they don\u2019t do _______ positive in society but take drugs and get arrested, are negative role models for people.",
                    answer: "anything",
                    options: ["anything","nothing","something","everything","anyone"]
                }
                ,
                {
                    numb: 10,
                    question: "Britain has a proportionally _______ prison population than most of other European countries.",
                    answer: "higher",
                    options: ["higher","the higher","highest","the highest","high"]
                }
                ,
                {
                    numb: 11,
                    question: "A report in a medical journal shows that today\u2019s children are the first in British history to be _______ than their parents.",
                    answer: "less healthy",
                    options: ["less healthy","least healthy","the least healthy","the less healthy","healthy"]
                }
                ,
                {
                    numb: 12,
                    question: "The Church of England considers that Britain\u2019s richest men and women ______ start sharing their wealth to save their souls.",
                    answer: "should",
                    options: ["should","may","can","need","could"]
                }
                ,
                {
                    numb: 13,
                    question: "Being cold or hungry hardly brings a smile to one\u2019s face, _______ ?",
                    answer: "does it",
                    options: ["does it","is it","isn\u2019t it","doesn\u2019t it","don`t it"]
                }
                ,
                {
                    numb: 14,
                    question: "If you _______ as a happy person, then wealth or lack of it won\u2019t matter much.",
                    answer: "are born",
                    options: ["are born","born","will born","will be born","is born"]
                }
                ,
                {
                    numb: 15,
                    question: "Research shows that people are more likely to help you, if you _______ something for them first.",
                    answer: "have done",
                    options: ["have done","do","are doing","were doing","is doing"]
                }
                ,
                {
                    numb: 16,
                    question: "The Olympic Stadium in London holds 25 000 permanent seats surrounded by 50 000 removable seats that _______ away after the 2012 Summer Games.",
                    answer: "had been taken",
                    options: ["had been taken","took","had taken","would be taken","has taken"]
                }
                ,
                {
                    numb: 17,
                    question: "We met when we were _____ dinner.",
                    answer: "eating",
                    options: ["eating","doing","cooking","making","going"]
                }
                ,
                {
                    numb: 18,
                    question: "I suddenly noticed that she was _____ my black suit.",
                    answer: "wearing",
                    options: ["wearing","drinking","shaking","putting on","going"]
                }
                ,
                {
                    numb: 19,
                    question: "We were very exhausted, but we _____ time for a break.",
                    answer: "didn't have",
                    options: ["didn't have","hadn't","had not","hadn't got","has not got"]
                }
                ,
                {
                    numb: 20,
                    question: "Real couples always talk to _____.",
                    answer: "each other",
                    options: ["each other","one and the other","themselves","them","their"]
                }
                ,
                {
                    numb: 21,
                    question: "I think I _____ my toe. I can't move it!",
                    answer: "might have broken",
                    options: ["might have broken","\\'m likely to break","\\'m bound to break","might break","may break"]
                }
                ,
                {
                    numb: 22,
                    question: "We ask parents not to leave home _____ it\u2019s strictly necessary.",
                    answer: "unless",
                    options: ["unless","even if","provided","supposing","even yet"]
                }
                ,
                {
                    numb: 23,
                    question: "After the storm and rain, the place looked ______ it had been the stage for weeks of brutal fighting.",
                    answer: "as though",
                    options: ["as though","as","like if","who","what"]
                }
                ,
                {
                    numb: 24,
                    question: "This is _____.",
                    answer: "a friend of Maria's",
                    options: ["a friend of Maria's","a Maria's friend","a Maria friend","a friend of Maria","friends of Maria"]
                }
                ,
                {
                    numb: 25,
                    question: "He _____ us that he would be here soon.",
                    answer: "told",
                    options: ["told","said","speak","tell","telling"]
                }
                ,
                {
                    numb: 26,
                    question: "I wish I ______ buy this amazing branded car next time, but I have no enough money. It's too expensive.",
                    answer: "could",
                    options: ["could","would","can","must","may"]
                }
                ,
                {
                    numb: 27,
                    question: "Alex, please, take your new camera and take a shot now, just ______ mine fails to do it \u2013 the memory is full.",
                    answer: "because",
                    options: ["because","in spite","while","due to","of course"]
                }
                ,
                {
                    numb: 28,
                    question: "In many Muslim countries, all girls should be ready to get married ____ a rather early age of 8-10 years old.",
                    answer: "at",
                    options: ["at","on","in","ago","for"]
                }
                ,
                {
                    numb: 29,
                    question: "Nancy\u2019s car is ____than mine, but Ben\u2019s car is ____ car.",
                    answer: "more expensive \/ the most expensive",
                    options: ["more expensive \/ the most expensive","expensive \/ expensive","the most expensive \/ more expensive","more expensive \/ most expensive","expensiver\/expensiver"]
                }
                ,
                {
                    numb: 30,
                    question: "She's married and she has three _____.",
                    answer: "children",
                    options: ["children","child","childs","childrens","child`s"]
                }
                ,
                {
                    numb: 31,
                    question: "She is usually in bed by _______ (11.30).",
                    answer: "half past eleven",
                    options: ["half past eleven","thirty past eleven","eleven past thirty","eleven past half","past eleven half"]
                }
                ,
                {
                    numb: 32,
                    question: "We always have snow ______ January.",
                    answer: "in",
                    options: ["in","at","on","the","a"]
                }
                ,
                {
                    numb: 33,
                    question: "There isn't ______ sugar in this coffee!",
                    answer: "any",
                    options: ["any","some","no","a","the"]
                }
                ,
                {
                    numb: 34,
                    question: "I __________ to be picking Tom up at the station but I\u2019ve lost my keys.",
                    answer: "am supposed",
                    options: ["am supposed","am requested","am intended","am obliged","am interested"]
                }
                ,
                {
                    numb: 35,
                    question: "By the age of 18,I __________ not to go to university.",
                    answer: "had decided",
                    options: ["had decided","decided","have decided","was deciding","am desided"]
                }
                ,
                {
                    numb: 36,
                    question: "You may borrow my laptop __________ you promise to look after it.",
                    answer: "as long as",
                    options: ["as long as","unless","in case","although","trough"]
                }
                ,
                {
                    numb: 37,
                    question: "It\u2019s a huge painting. It __________ taken ages to complete.",
                    answer: "must have",
                    options: ["must have","can\u2019t have","should have","won\u2019t have","need have"]
                }
                ,
                {
                    numb: 38,
                    question: "My mother\u2019s Italian, so __________ the language has been quite easy for me.",
                    answer: "learning",
                    options: ["learning","learn","to learn","having learned","learns"]
                }
                ,
                {
                    numb: 39,
                    question: "The factory workers threatened __________ on strike if they didn\u2019t get a pay rise.",
                    answer: "to go",
                    options: ["to go","going","that they go","to have gone","have going"]
                }
                ,
                {
                    numb: 40,
                    question: "This is a photo of my little sister __________ ice cream on the beach.",
                    answer: "eating",
                    options: ["eating","eats","was eating","having eaten","eat"]
                }
                ,
                {
                    numb: 41,
                    question: "We met ________ people at the conference.",
                    answer: "two very smart",
                    options: ["two very smart","very smart","smart","to smart","smart to"]
                }
                ,
                {
                    numb: 42,
                    question: "Ria was _____ delighted with the birthday present.",
                    answer: "absolutely",
                    options: ["absolutely","very","fairly","completely","well"]
                }
                ,
                {
                    numb: 43,
                    question: "_________ I had the talent, I still wouldn\u2019t want to be a movie star.",
                    answer: "even if",
                    options: ["even if","in case","provided that","however much","not even"]
                }
                ,
                {
                    numb: 44,
                    question: "We were already at the passport control when we realized that we ________ one of the suitcases in the taxi",
                    answer: "had left",
                    options: ["had left","left","have left","would leave","has left"]
                }
                ,
                {
                    numb: 45,
                    question: "Politicians are more worried about reelection ______ truly improving the economy",
                    answer: "than",
                    options: ["than","then","that","us","the"]
                }
                ,
                {
                    numb: 46,
                    question: "I felt so stupid that you didn\u2019t come. _______ husband was there",
                    answer: "everyone else\u2019s",
                    options: ["everyone else\u2019s","every one","everyone\u2019s else","everyone\u2019s else\u2019s","every"]
                }
                ,
                {
                    numb: 47,
                    question: "_______ home from work feeling tired?",
                    answer: "Do you often come",
                    options: ["Do you often come","Do often you come","Do you come often","Often do you come","Come you often"]
                }
                ,
                {
                    numb: 48,
                    question: "My wife, she ______ things out, and then I can\u2019t find my collectables. That\u2019s so annoying",
                    answer: "is always throwing",
                    options: ["is always throwing","always throws","had always thrown","always threw","always threws"]
                }
                ,
                {
                    numb: 49,
                    question: "______ of these shirts are dry yet. So you\u2019ll have to wear something different to the dinner",
                    answer: "neither",
                    options: ["neither","either","nor","both","as as"]
                }
                ,
                {
                    numb: 50,
                    question: "Surprisingly, I \u2026 broccoli as a kid, but I hate it now",
                    answer: "used to like",
                    options: ["used to like","would like","used to liked","am used to like","is used to like"]
                }
                ,
                {
                    numb: 51,
                    question: "\ufeffI\u2019m _______ the subway right now. The train is too loud, I\u2019ll call you later",
                    answer: "on",
                    options: ["on","at","from","in","out off"]
                }
                ,
                {
                    numb: 52,
                    question: "I was surprised when the neighbor said he _____ the police if we _____ another party",
                    answer: "would call, had",
                    options: ["would call, had","would call, would have","called, had","will call, have","will call,has"]
                }
                ,
                {
                    numb: 53,
                    question: "Thank god we have a dog! If he ..., we \u2026 someone was trying to break into the house",
                    answer: "hadn\u2019t barked, wouldn\u2019t have known",
                    options: ["hadn\u2019t barked, wouldn\u2019t have known","doesn\u2019t bark, don\u2019t know","didn\u2019t bark, wouldn\u2019t know","hasn\u2019t barked, won\u2019t know","have barked, won\u2019t know"]
                }
                ,
                {
                    numb: 54,
                    question: "He bought himself a ________ truck.",
                    answer: "big new",
                    options: ["big new","huge","small","smart","tall"]
                }
                ,
                {
                    numb: 55,
                    question: "We've gone the wrong way. We _______ left at the traffic lights",
                    answer: "shouldn\u2019t have turned",
                    options: ["shouldn\u2019t have turned","can\u2019t have turned","must have turned","had to have turned","have to have turned"]
                }
                ,
                {
                    numb: 56,
                    question: "I come to ______ school by _____ bus.",
                    answer: "- \/ -",
                    options: ["- \/ -","-\/using","walking\/-","to\/-","a\/-"]
                }
                ,
                {
                    numb: 57,
                    question: "He was sent to ______ prison for participating in a money laundering scam",
                    answer: "-",
                    options: ["-","an","the","a","then"]
                }
                ,
                {
                    numb: 58,
                    question: "Why don\u2019t you drop \u2026 on your way home? I\u2019ve just made some cookies",
                    answer: "by",
                    options: ["by","along","into","down","for"]
                }
                ,
                {
                    numb: 59,
                    question: "My wife, she ______ things out, and then I can\u2019t find my collectables. That\u2019s so annoying",
                    answer: "is always throwing",
                    options: ["is always throwing","always threw","had always thrown","always throws","always threws"]
                }
                ,
                {
                    numb: 60,
                    question: "Can you just draw the curtains? I have this weird feeling that we _______ .",
                    answer: "are being watched",
                    options: ["are being watched","are be watched","are been watching","are watching","is watcing"]
                }
                ,
                {
                    numb: 61,
                    question: "Sorry, guys, but I'm exhausted! I don't fancy ________ out tonight",
                    answer: "going",
                    options: ["going","to go","go","to going","am going"]
                }
                ,
                {
                    numb: 62,
                    question: "I was surprised when the neighbor said he _______ the police if we _______ another party",
                    answer: "would call, had",
                    options: ["would call, had","will call, have","would call, would have","called, had","calls,have"]
                }
                ,
                {
                    numb: 63,
                    question: "It smells as if _______ . Are you sure you switched off the oven?",
                    answer: "something is burning",
                    options: ["something is burning","burnt","burnt food","to burn","is burn"]
                }
                ,
                {
                    numb: 64,
                    question: "What did you eat for ...... lunch?",
                    answer: "-",
                    options: ["-","a","the","an","is"]
                }
                ,
                {
                    numb: 65,
                    question: "This is the bank __ was robbed yesterday.",
                    answer: "which",
                    options: ["which","who","whose","where","when"]
                }
                ,
                {
                    numb: 66,
                    question: "\u041c\u044b \u0441\u0434\u0430\u0434\u0438\u043c \u044d\u0442\u043e\u0442 \u044d\u043a\u0437\u0430\u043c\u0435\u043d",
                    answer: "We will pass this exam",
                    options: ["We will pass this exam","We will conduct this exam","We will pass this is exam","We will take this exam","We are will take this exam"]
                }
                ,
                {
                    numb: 67,
                    question: "I think he (to be) glad to see you",
                    answer: "Will be",
                    options: ["Will be","will be not","will been","were","won't be"]
                }
                ,
                {
                    numb: 68,
                    question: "My working day (to begin) at seven o'clock.",
                    answer: "begins",
                    options: ["begins","began","begun","will begin","to begin"]
                }
                ,
                {
                    numb: 69,
                    question: "Has he been to school _____________?",
                    answer: ".yet",
                    options: [".yet","hasn't","already","has","have"]
                }
                ,
                {
                    numb: 70,
                    question: "He \/ not finish his essay (yet) _____________________________________",
                    answer: ".he hasn't finished his essay yet",
                    options: [".he hasn't finished his essay yet","he doesn\u2019t finished his essay yet","he haven\u2019t finishing essay","he didn\u2019t finish his essay yet","he have not finished his essay yet"]
                }
                ,
                {
                    numb: 71,
                    question: "I\u2019m afraid of _____ mistakes.",
                    answer: "making",
                    options: ["making","make","made","to make","maked"]
                }
                ,
                {
                    numb: 72,
                    question: "The business letter ___ just ___ .",
                    answer: "has \/ been written",
                    options: ["has \/ been written","is \/ written","was \/ written","were \/ written","is \/ going to write"]
                }
                ,
                {
                    numb: 73,
                    question: "It is winter. Everything ___ with snow.",
                    answer: "is covered",
                    options: ["is covered","covered","were covered","will cover","are covered"]
                }
                ,
                {
                    numb: 74,
                    question: "\u201c\u0411\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0439 \u0433\u0440\u0430\u0431\u0438\u0442\u0435\u043b\u044c \u0431\u044b\u043b \u043f\u043e\u0439\u043c\u0430\u043d \u043f\u043e\u043b\u0438\u0446\u0438\u0435\u0439 \u043f\u0440\u043e\u0448\u043b\u043e\u0439 \u043d\u043e\u0447\u044c\u044e.\u201d",
                    answer: "A bank robber was caught by the police last night.",
                    options: ["A bank robber was caught by the police last night.","The bank guard was caught by the police last night.","A bank robber was caught by the police last month","A bank robber was not caught by the police last night.","A bank was robbed last night"]
                }
                ,
                {
                    numb: 75,
                    question: "'I work in a bank.' \u21d2 He said that he ______ in a bank.",
                    answer: "worked",
                    options: ["worked","work","works","working","won't work"]
                }
                ,
                {
                    numb: 76,
                    question: "Don't come in here with those muddy shoes!! I have ________ cleaned this floor!!!",
                    answer: "Just",
                    options: ["Just","Yet","never","ever","Already"]
                }
                ,
                {
                    numb: 77,
                    question: "A: Do you know where Julia is? B: Yes, I ---- her. (just \/ see)",
                    answer: "have just seen",
                    options: ["have just seen","has just see","have just see","just seen","just see"]
                }
                ,
                {
                    numb: 78,
                    question: "You are eating in a restaurant. The waiter thinks you have finished and wants to take your plate away.You say: Wait a minute! I ----. (not \/ finish)",
                    answer: "haven't finished yet",
                    options: ["haven't finished yet","not finish","not finished","have finished","finish"]
                }
                ,
                {
                    numb: 79,
                    question: "Is, on March 22, when, celebrated, are identical, Nauryz, night and day.",
                    answer: "Nauryz is celebrated on March 22 when night and day are identical.",
                    options: ["Nauryz is celebrated on March 22 when night and day are identical.","Nauryz is on March 22 when celebrated are identical night and day.","When celebrated is on March 22 Nauryz night and day are identical.","On March 22 when celebrated are identical Nauryz night and day.","Nauryz is celebrated night and day on March 22 when are identical."]
                }
                ,
                {
                    numb: 80,
                    question: "Can you open the door? Oh, it is ... open.",
                    answer: "Already",
                    options: ["Already","ever","never","just","yet"]
                }
                ,
                {
                    numb: 81,
                    question: "\u201cWhat _____ to do tonight?\u201d \u201cWhat about going out for a meal?\u201d",
                    answer: "would you like",
                    options: ["would you like","do you like","are liking","will you like","like"]
                }
                ,
                {
                    numb: 82,
                    question: "\u201cWhat ______ to do after university?\u201d \u201cI\u2019d like to get a job in publishing.\u201d",
                    answer: "do you hope",
                    options: ["do you hope","will you hope","are you going to hope","are you hope","hoping"]
                }
                ,
                {
                    numb: 83,
                    question: "This apple has _______ exceptionally sweet taste.",
                    answer: "an",
                    options: ["an","the","never","not","is"]
                }
                ,
                {
                    numb: 84,
                    question: "She didn\u2019t want _________ anything that would influence his decision.",
                    answer: "to say",
                    options: ["to say","in order to say","saying","having said","said"]
                }
                ,
                {
                    numb: 85,
                    question: "\u201c I want you _______ on the picture,\u201d said the teacher.",
                    answer: "to concentrate",
                    options: ["to concentrate","concentrating","being concentrated","in order to concentrate","concentrates"]
                }
                ,
                {
                    numb: 86,
                    question: "Why is she sitting there all _______ herself in the dark?",
                    answer: "by",
                    options: ["by","with","lonely","alone","together"]
                }
                ,
                {
                    numb: 87,
                    question: "You can come with me if you like, but really you ______ if you don\u2019t want to.",
                    answer: "don\u2019t have to",
                    options: ["don\u2019t have to","would not","could not","dare not to","don\u2019t"]
                }
                ,
                {
                    numb: 88,
                    question: "Michelle has gone to the market ______ some eggs.",
                    answer: "to buy",
                    options: ["to buy","for buying","for to buy","to be bought","buys"]
                }
                ,
                {
                    numb: 89,
                    question: "What is the weather _____ in January?",
                    answer: "like",
                    options: ["like","liked","likes","don\u2019t like","aren\u2019t like"]
                }
                ,
                {
                    numb: 90,
                    question: "Anne was upset because she didn\u2019t ________ in the race. She really wanted to win.",
                    answer: "come first",
                    options: ["come first","come last","go up","turn out","put on"]
                }
                ,
                {
                    numb: 91,
                    question: "I _____ English food. It\u2019s wonderful!",
                    answer: "love",
                    options: ["love","loved","loves","am loving","are love"]
                }
                ,
                {
                    numb: 92,
                    question: "this is a great party! Everyone _______.",
                    answer: "is dancing",
                    options: ["is dancing","are dancing","dances","dance","will dance"]
                }
                ,
                {
                    numb: 93,
                    question: "What ______ in your free time?",
                    answer: "do you do",
                    options: ["do you do","are you doing","you do","are you do","did do"]
                }
                ,
                {
                    numb: 94,
                    question: "That\u2019s the palace _______ the King lives.",
                    answer: "where",
                    options: ["where","who","when","which","-"]
                }
                ,
                {
                    numb: 95,
                    question: "I ______ swim when I was three.",
                    answer: "could",
                    options: ["could","can","have to","must","will"]
                }
                ,
                {
                    numb: 96,
                    question: "I ______ a shower every morning.",
                    answer: "have",
                    options: ["have","have got","has","had","am having"]
                }
                ,
                {
                    numb: 97,
                    question: "Was Joan\u2019s party better ____ Maria\u2019s?",
                    answer: "than",
                    options: ["than","much","like","as","more"]
                }
                ,
                {
                    numb: 98,
                    question: "They are the policemen _______ caught the thief.",
                    answer: "who",
                    options: ["who","where","when","-","which"]
                }
                ,
                {
                    numb: 99,
                    question: "Usually Jim ______ to work on Sundays.",
                    answer: "goes",
                    options: ["goes","go","is going","went","gone"]
                }
                ,
                {
                    numb: 100,
                    question: "A present! For me? You\u2019re _____ kind!",
                    answer: "so",
                    options: ["so","such","such a","so many","much more"]
                }
                ,
                {
                    numb: 101,
                    question: "\ufeffJapan _____ many high mountains.",
                    answer: "has",
                    options: ["has","is having","have","are having","were having"]
                }
                ,
                {
                    numb: 102,
                    question: "That\u2019s the house _____ I was born.",
                    answer: "where",
                    options: ["where","when","that","which","-"]
                }
                ,
                {
                    numb: 103,
                    question: "\u201c It\u2019s very noisy\u201d \u201c Suzy ______ to rock music.\u201d",
                    answer: "is listening",
                    options: ["is listening","listen","listens","listened","are listening"]
                }
                ,
                {
                    numb: 104,
                    question: "Many birds ______ south every winter.",
                    answer: "fly",
                    options: ["fly","flew","are flying","will fly","are flied"]
                }
                ,
                {
                    numb: 105,
                    question: "He\u2019s _____ boy in the class.",
                    answer: "the funniest",
                    options: ["the funniest","funnier","the funnier","funniest","more funniest"]
                }
                ,
                {
                    numb: 106,
                    question: "The hotel ______ we stayed was very comfortable.",
                    answer: "where",
                    options: ["where","which","when","that","-"]
                }
                ,
                {
                    numb: 107,
                    question: "Barbara\u2019s ________ than Sarah.",
                    answer: "more intelligent",
                    options: ["more intelligent","much intelligent","intelligenter","intelligent","the more intelligent"]
                }
                ,
                {
                    numb: 108,
                    question: "\u201c Who\u2019s shoes are these?\u201d \u201c They are _____.\u201d",
                    answer: "Ali\u2019s",
                    options: ["Ali\u2019s","of Ali\u2019s","belonging to Ali","belong to Ali","to Ali"]
                }
                ,
                {
                    numb: 109,
                    question: "Most of the students ______ these days.",
                    answer: "don\u2019t smoke",
                    options: ["don\u2019t smoke","isn\u2019t smoking","didn\u2019t smoke","won\u2019t smoke","smokes"]
                }
                ,
                {
                    numb: 110,
                    question: "My wife and I ate starting _____ we should stay at home.",
                    answer: "to think",
                    options: ["to think","thinking","thought","thinks","will think"]
                }
                ,
                {
                    numb: 111,
                    question: "A woman from a travel agency helped us ________ a nice house.",
                    answer: "choose",
                    options: ["choose","choosing","to choose","chooses","will choose"]
                }
                ,
                {
                    numb: 112,
                    question: "Dave ______ a student with her work now.",
                    answer: "is helping",
                    options: ["is helping","helped","helping","help","will help"]
                }
                ,
                {
                    numb: 113,
                    question: "Look what Pat _______ me for my birthday! A bike!",
                    answer: "has given",
                    options: ["has given","gave","have been giving","gives","will give"]
                }
                ,
                {
                    numb: 114,
                    question: "Two years ago I \u2026 my old aunt in a small town.",
                    answer: "visited",
                    options: ["visited","visit","do visitted","didn't visited","don\u2019t visit"]
                }
                ,
                {
                    numb: 115,
                    question: "It \u2026 a long visit as my aunt \u2026 well.",
                    answer: "was\u2026didn't feel",
                    options: ["was\u2026didn't feel","was\u2026didn't fall","was\u2026wasn't feel","did\u2026didn't felt","were\u2026didn\u2019t felt"]
                }
                ,
                {
                    numb: 116,
                    question: "I \u2026 to \u2026 medicine and food.",
                    answer: "had\u2026buy",
                    options: ["had\u2026buy","had\u2026bought","have\u2026buyed","haved\u2026buyed","haves buy"]
                }
                ,
                {
                    numb: 117,
                    question: "I also \u2026 dinner and \u2026 about the house.",
                    answer: "cooked\u2026helped",
                    options: ["cooked\u2026helped","cook\u2026helped","cook\u2026held","cooked\u2026help","cook\u2026helps"]
                }
                ,
                {
                    numb: 118,
                    question: "One day my aunt asked me: \" \u2026 the flowers in the garden yesterday?\"",
                    answer: "Did you water",
                    options: ["Did you water","You watered","Did you watered","You did water","You didn\u2019t water"]
                }
                ,
                {
                    numb: 119,
                    question: "I \u2026 very susprised as she usually \u2026 it herself.",
                    answer: "was\u2026did",
                    options: ["was\u2026did","were\u2026did","was\u2026doed","was\u2026does","were\u2026does"]
                }
                ,
                {
                    numb: 120,
                    question: "But in those days my aunt was so weak, that she \u2026 any work in the garden.",
                    answer: "couldn't do",
                    options: ["couldn't do","cannot do","couldn't did","cannot did","could did"]
                }
                ,
                {
                    numb: 121,
                    question: "So I \u2026 to take care of her flowers too.",
                    answer: "tried",
                    options: ["tried","tryed","try","trew","trying"]
                }
                ,
                {
                    numb: 122,
                    question: "Fortunately in three weeks my aunt \u2026 better.",
                    answer: "got",
                    options: ["got","to get","get","gotten","getting"]
                }
                ,
                {
                    numb: 123,
                    question: "And I \u2026 some free time and \u2026 sightseeing",
                    answer: "had\u2026enjoyed",
                    options: ["had\u2026enjoyed","had\u2026enjoied","had\u2026enjoy","haved\u2026enjoyed","have\u2026enjoys"]
                }
                ,
                {
                    numb: 124,
                    question: "The guests \u2026 in time.",
                    answer: "came",
                    options: ["came","come","comed","camed","comes"]
                }
                ,
                {
                    numb: 125,
                    question: "She \u2026 sorry for her little brother when he \u2026 down and hurt his leg.",
                    answer: "felt\u2026fell",
                    options: ["felt\u2026fell","feel\u2026fell","fell\u2026felt","felt\u2026fall","feel\u2026felt"]
                }
                ,
                {
                    numb: 126,
                    question: "Bob \u2026 his work a month ago.",
                    answer: "began",
                    options: ["began","begin","begun","begon","begins"]
                }
                ,
                {
                    numb: 127,
                    question: "His mom \u2026 about all his troubles.",
                    answer: "knew",
                    options: ["knew","know","known","knowed","knows"]
                }
                ,
                {
                    numb: 128,
                    question: "Last week he \u2026 cold.",
                    answer: "caught",
                    options: ["caught","catched","catch","cought","coughing"]
                }
                ,
                {
                    numb: 129,
                    question: "Nobody \u2026 surprised when he left.",
                    answer: "was",
                    options: ["was","were","is","be","are"]
                }
                ,
                {
                    numb: 130,
                    question: "When I \u2026 my keys at last, I was very happy",
                    answer: "found",
                    options: ["found","finded","founded","find","founds"]
                }
                ,
                {
                    numb: 131,
                    question: "He \u2026 too much coffee last night and \u2026",
                    answer: "drank\u2026couldn't sleep",
                    options: ["drank\u2026couldn't sleep","drank\u2026can't slept","drunk\u2026couldn't sleep","drink\u2026can't sleep","drink\u2026can\u2019t sleeps"]
                }
                ,
                {
                    numb: 132,
                    question: "We \u2026 breakfast at 9 o'clock today. It's 2 p.m. and we are really hungry.",
                    answer: "had",
                    options: ["had","has","have","haved","haves"]
                }
                ,
                {
                    numb: 133,
                    question: "He \u2026 a house at the seaside two years ago.",
                    answer: "built",
                    options: ["built","build","builded","builed","building"]
                }
                ,
                {
                    numb: 134,
                    question: "We ... a picture.",
                    answer: "are drawing",
                    options: ["are drawing","is drawing","are draw","are going","is going"]
                }
                ,
                {
                    numb: 135,
                    question: "Whales ... in the oceans.",
                    answer: "are living",
                    options: ["are living","can living","is living","am living","the living"]
                }
                ,
                {
                    numb: 136,
                    question: "A cat ... breakfast.",
                    answer: "is eating",
                    options: ["is eating","are writing","can reading","am singing","am eating"]
                }
                ,
                {
                    numb: 137,
                    question: "She ... to Moscow.",
                    answer: "is going",
                    options: ["is going","are going","as going","is eating","the going"]
                }
                ,
                {
                    numb: 138,
                    question: "Students ... to play games.",
                    answer: "like",
                    options: ["like","are liking","is liking","am liking","the living"]
                }
                ,
                {
                    numb: 139,
                    question: "Sue ... with Sammy.",
                    answer: "is talking",
                    options: ["is talking","are talking","can talking","am talking","the talking"]
                }
                ,
                {
                    numb: 140,
                    question: "They ... .",
                    answer: "are playing",
                    options: ["are playing","am singing","can reading","is writing","the playing"]
                }
                ,
                {
                    numb: 141,
                    question: "He ... a picture.",
                    answer: "is drawing",
                    options: ["is drawing","are going","is going","is draw","are draw"]
                }
                ,
                {
                    numb: 142,
                    question: "You ... football.",
                    answer: "are playing",
                    options: ["are playing","are trying","is playing","is sitting","as sitting"]
                }
                ,
                {
                    numb: 143,
                    question: "I ... an intresting book.",
                    answer: "am reading",
                    options: ["am reading","are reading","can reading","is reading","the reading"]
                }
                ,
                {
                    numb: 144,
                    question: "Do you \u2026 chocolate? \u2013 Sure! I love it!",
                    answer: "like",
                    options: ["like","live","give","catch","leave"]
                }
                ,
                {
                    numb: 145,
                    question: "Give me a lamp, \u2026 . \u2013 Here you are!",
                    answer: "please",
                    options: ["please","sorry","welcome","you are welcome","excuse"]
                }
                ,
                {
                    numb: 146,
                    question: "You \u2026my best friend!",
                    answer: "are",
                    options: ["are","is","am","be","the"]
                }
                ,
                {
                    numb: 147,
                    question: "What is your \u2026? \u2013 Pushkin street, 10.",
                    answer: "address",
                    options: ["address","home","living","flat","house"]
                }
                ,
                {
                    numb: 148,
                    question: "What\u2019s your Granny\u2019s name? - \u2026 name is Lina.",
                    answer: "Her",
                    options: ["Her","He","She","Our","We"]
                }
                ,
                {
                    numb: 149,
                    question: "I have no time. I will call you \u2026 .",
                    answer: "later",
                    options: ["later","before","after","sooner","year"]
                }
                ,
                {
                    numb: 150,
                    question: "Buy \u2026 oranges. We have no fruit.",
                    answer: "some",
                    options: ["some","any","little","much","many"]
                }
                ,
                {
                    numb: 151,
                    question: "\ufeffThis cat is very old. \u2013 Yes, he is \u2026 of our animals.",
                    answer: "the oldest",
                    options: ["the oldest","the older","oldest","older","a older"]
                }
                ,
                {
                    numb: 152,
                    question: "I don\u2019t like this coat. I want to see \u2026 one.",
                    answer: "another",
                    options: ["another","other","the other","the others","is other"]
                }
                ,
                {
                    numb: 153,
                    question: "I\u2019d like to have some \u2026 coffee. \u2013 OK, I\u2019ll bring it to you.",
                    answer: "more",
                    options: ["more","many","much","less","some"]
                }
                ,
                {
                    numb: 154,
                    question: "How can I \u2026 to the railway station?",
                    answer: "get",
                    options: ["get","go","come","come","came"]
                }
                ,
                {
                    numb: 155,
                    question: "Can I \u2026 your flip-flops? \u2013 Hmm Yes, but bring them back tomorrow.",
                    answer: "borrow",
                    options: ["borrow","buy","take","lend","visit"]
                }
                ,
                {
                    numb: 156,
                    question: "Good bye! Write me as soon as \u2026 .",
                    answer: "possible",
                    options: ["possible","difficult","wonderful","successful","important"]
                }
                ,
                {
                    numb: 157,
                    question: "Calm down. Don\u2019t \u2026! Everything will be OK.",
                    answer: "worry",
                    options: ["worry","clean","refresh","swim","work"]
                }
                ,
                {
                    numb: 158,
                    question: "We will invite all our \u2026 . It\u2019s a family holiday!",
                    answer: "relatives",
                    options: ["relatives","friends","neighbours","co-workers","boyfriends"]
                }
                ,
                {
                    numb: 159,
                    question: "He is very \u2026 . He never greets anybody.",
                    answer: "impolite",
                    options: ["impolite","sensitive","aggressive","generous","adventure"]
                }
                ,
                {
                    numb: 160,
                    question: "I don\u2019t like Japanese \u2026 . Seafood is not my favorite.",
                    answer: "cuisine",
                    options: ["cuisine","furniture","art","design","picture"]
                }
                ,
                {
                    numb: 161,
                    question: "This hotel has a lot of \u2026 . For example, it\u2019s not expensive. And I like it!",
                    answer: "advantages",
                    options: ["advantages","complications","reclamations","advertisements","nationalist"]
                }
                ,
                {
                    numb: 162,
                    question: "I chose this resort \u2026 some negative comments. It gives me memories of my childhood.",
                    answer: "in spite of",
                    options: ["in spite of","however","according to","nevertheless","currently"]
                }
                ,
                {
                    numb: 163,
                    question: "Carol and I are old friends. I \u2026 her since we studied in high school together.",
                    answer: "have known",
                    options: ["have known","have been knowing","are knowing","know","is know"]
                }
                ,
                {
                    numb: 164,
                    question: "I am tired. We \u2026 for more than an hour. Let's stop and rest for a while.",
                    answer: "have been walking",
                    options: ["have been walking","walk","have walked","are walking","is walking"]
                }
                ,
                {
                    numb: 165,
                    question: "I have read this chapter in my chemistry text three times, and still I \u2026 it.",
                    answer: "don't understand",
                    options: ["don't understand","haven't understood","have understood","understand","do understand"]
                }
                ,
                {
                    numb: 166,
                    question: "How long has Professor \u2026 a course of lectures on Medieval History?",
                    answer: "has Professor Donaldson been delivering",
                    options: ["has Professor Donaldson been delivering","has Professor Donaldson delivered","is Professor Donaldson delivering","does Professor Donaldson deliver","is Professor Donaldson been deliver"]
                }
                ,
                {
                    numb: 167,
                    question: "Linda's apartment looks nice and tidy because she \u2026 it every two years.",
                    answer: "redecorates",
                    options: ["redecorates","has been redecorating","is redecorating","has redecorated","at redecorate"]
                }
                ,
                {
                    numb: 168,
                    question: "A group of scientists are travelling around Africa. How many countries \u2026 so far, I wonder?",
                    answer: "have they visited",
                    options: ["have they visited","have they been visiting","do they visit","they have visited","they have visit"]
                }
                ,
                {
                    numb: 169,
                    question: "Jerry promised to come to work in time. He is not here, and he even\u2026 .",
                    answer: "hasn't called",
                    options: ["hasn't called","hasn't been calling","isn't calling","doesn't call","isn\u2019t call"]
                }
                ,
                {
                    numb: 170,
                    question: "Be careful with paint. It \u2026 a certain amount of lead.",
                    answer: "contains",
                    options: ["contains","contained","is containing","has contained","a container"]
                }
                ,
                {
                    numb: 171,
                    question: "I think you \u2026 very weak. Don't get out of bed. You'll only make your temperature go up again.",
                    answer: "are being",
                    options: ["are being","have been","are","were","was"]
                }
                ,
                {
                    numb: 172,
                    question: "What are you looking for? - I \u2026 my umbrella somewhere, and now I don't know where it is.",
                    answer: "have left",
                    options: ["have left","have been leaving","has left","leave","My daughter is a bit _______ me."]
                }
                ,
                {
                    numb: 173,
                    question: "My daughter is a bit _______ me.",
                    answer: "taller than",
                    options: ["taller than","tallest","tall","taller","more talle"]
                }
                ,
                {
                    numb: 174,
                    question: "London is ___________ Edinburgh.",
                    answer: "more expensive than",
                    options: ["more expensive than","expensive","expensiver","most expensive","more expensive"]
                }
                ,
                {
                    numb: 175,
                    question: "It\u2019s the best beach _________ England.",
                    answer: "in",
                    options: ["in","at","of","on","\u043cby"]
                }
                ,
                {
                    numb: 176,
                    question: "That\u2019s the worst we\u2019ve ever played.",
                    answer: "the worst",
                    options: ["the worst","worst","worse","baddest","more bad"]
                }
                ,
                {
                    numb: 177,
                    question: "I don\u2019t earn as ______ my boss.",
                    answer: "much as",
                    options: ["much as","many as","most as","much so","many than"]
                }
                ,
                {
                    numb: 178,
                    question: "I saw __ old man with ___dog.",
                    answer: "an\/a",
                    options: ["an\/a","a\/a","an\/an","a\/an","__\/___"]
                }
                ,
                {
                    numb: 179,
                    question: "What ____ awful day!",
                    answer: "an",
                    options: ["an","___","a","the","at"]
                }
                ,
                {
                    numb: 180,
                    question: "____ Women usually talk more than ______men.",
                    answer: "____\/____",
                    options: ["____\/____","a\/ a","the\/ the","a\/ the","the\/a."]
                }
                ,
                {
                    numb: 181,
                    question: "____Love is more important than _______money.",
                    answer: "____\/____",
                    options: ["____\/____","a\/ a","the\/ the","a\/ the","the\/a."]
                }
                ,
                {
                    numb: 182,
                    question: "I got back from ___ work.",
                    answer: "____",
                    options: ["____","a","an","the","at"]
                }
                ,
                {
                    numb: 183,
                    question: "Let\u2019s invite some friends for _____lunch.",
                    answer: "____",
                    options: ["____","a","an","the","at"]
                }
                ,
                {
                    numb: 184,
                    question: "A person who has finished university and hasba degree is called ___________",
                    answer: "a graduate",
                    options: ["a graduate","a pupil","a student","a junior","a head"]
                }
                ,
                {
                    numb: 185,
                    question: "What time ____ you get up yesterday morning?",
                    answer: "did",
                    options: ["did","do","does","doing","done"]
                }
                ,
                {
                    numb: 186,
                    question: "The accident happened when they ____________home. (drive)",
                    answer: "were driving",
                    options: ["were driving","is driving","was driving","will be driving","drove"]
                }
                ,
                {
                    numb: 187,
                    question: "Mike had an accident while he (cycle) to work.",
                    answer: "was cycling",
                    options: ["was cycling","cycled","were cycling","had been cycled","was being cycled"]
                }
                ,
                {
                    numb: 188,
                    question: "When they turned on the TV, the match (to have) already(to finish).",
                    answer: "had \/finished",
                    options: ["had \/finished","has \/ finished","have finish","have finished","had finish"]
                }
                ,
                {
                    numb: 189,
                    question: "The college (built) in the16th century.",
                    answer: "was built",
                    options: ["was built","were build","was building","build","built"]
                }
                ,
                {
                    numb: 190,
                    question: "The castle has been owned _____ the Carnarvon family since 1679.",
                    answer: "by",
                    options: ["by","with","at","on","____"]
                }
                ,
                {
                    numb: 191,
                    question: "We painted the kitchen _________.",
                    answer: "ourselves",
                    options: ["ourselves","themselves","himself","yourself","itself"]
                }
                ,
                {
                    numb: 192,
                    question: "I don\u2019t want __________ for the first lesson so I come a few minutes before the bell.",
                    answer: "to be late;",
                    options: ["to be late;","to be fond;","to be ill;","to be interested;","to be proud."]
                }
                ,
                {
                    numb: 193,
                    question: "I _____ a friend while I _____ the shopping.",
                    answer: "met \/ was doing",
                    options: ["met \/ was doing","was meeting \/ did","meet \/ do","met \/ did","meet\/was doing"]
                }
                ,
                {
                    numb: 194,
                    question: "I _____ for my things when I ____ someone call my name.",
                    answer: "was paying \/ heard",
                    options: ["was paying \/ heard","pay \/ heard","was paying \/ hear","paid \/ was hearing","paid\/heard"]
                }
                ,
                {
                    numb: 195,
                    question: "When I _____ I _____ the knife.",
                    answer: "was cooking \/ dropped",
                    options: ["was cooking \/ dropped","cook \/ drop","cooked \/ was dropping","cooked \/ dropped","cooked\/drop"]
                }
                ,
                {
                    numb: 196,
                    question: "What _____ at 8.00 last night?",
                    answer: "were you doing",
                    options: ["were you doing","you did","did you","are you doing","do you do"]
                }
                ,
                {
                    numb: 197,
                    question: "While I _____ this morning, I _____ my money. I don\u2019t know how.",
                    answer: "was shopping \/ lost",
                    options: ["was shopping \/ lost","lost shopped \/ lose","shopped \/ was losing","shop \/ lose","shop\/lost"]
                }
                ,
                {
                    numb: 198,
                    question: "I ... not ... him since June.",
                    answer: "have \/ seen",
                    options: ["have \/ seen","did \/ seen","have \/ saw","did \/ see","has\/seen"]
                }
                ,
                {
                    numb: 199,
                    question: "Anel ______ Paris for London in 2013.",
                    answer: "left",
                    options: ["left","have left","has left","leaved","has leave"]
                }
                ,
                {
                    numb: 200,
                    question: "When the fog ____, we ____ to see where we are.",
                    answer: "lifts, will be able",
                    options: ["lifts, will be able","will lift, will be able","lifts, may","lifts, must",".lift, must"]
                }
                ,
                {
                    numb: 201,
                    question: "\ufeffYou looked very busy when I ____ you last night. What ____?",
                    answer: "saw,were you doing",
                    options: ["saw,were you doing","see were you doing","see,do you do",".saw, were you do",".saw, were you do"]
                }
                ,
                {
                    numb: 202,
                    question: "I ____ a new house last year, but I ____ my old house yet, so at the moment I have two houses.",
                    answer: "bought,haven\u2019t sold",
                    options: ["bought,haven\u2019t sold","were you do. buy,don\u2019t sell","have bought, sold","had bought, didn\u2019t sell","has bought, didn\u2019t sell"]
                }
                ,
                {
                    numb: 203,
                    question: "After failing his driving test four times, he finally ____ trying to pass.",
                    answer: "gave up",
                    options: ["gave up","gave off","gave away","gave in","given up"]
                }
                ,
                {
                    numb: 204,
                    question: "I ____ all of the questions correctly since I began this grammar exercise.",
                    answer: "have answered",
                    options: ["have answered","answer","am answering","had answered","answering"]
                }
                ,
                {
                    numb: 205,
                    question: "I was late. The teacher ____ the test when I ____ to class.",
                    answer: "had already given, got",
                    options: ["had already given, got","has already given, got","has already given, get","was already giving, get","is already give get"]
                }
                ,
                {
                    numb: 206,
                    question: "They can\u2019t have ____ more strawberries. I want ____ to make jam.",
                    answer: "any,some",
                    options: ["any,some","no, some","any, any","some,any",".any, where"]
                }
                ,
                {
                    numb: 207,
                    question: "We all ____ his story as a joke.",
                    answer: "treated",
                    options: ["treated","intended","thought","found","made"]
                }
                ,
                {
                    numb: 208,
                    question: "Nothing was stolen, ____?",
                    answer: "was it",
                    options: ["was it","wasn\u2019t anything","wasn\u2019t it","was anything","were not"]
                }
                ,
                {
                    numb: 209,
                    question: "You are always ____ excuses for not ____ your homework on time.",
                    answer: "making, doing",
                    options: ["making, doing","doing, doing","making, making","doing, making","do make"]
                }
                ,
                {
                    numb: 210,
                    question: "When I ____ for my passport, I ____ this old photograph.",
                    answer: "was looking, found",
                    options: ["was looking, found","look,found","will look, will find","looked, found","look ,find"]
                }
                ,
                {
                    numb: 211,
                    question: "I____ to the theatre for ages.",
                    answer: "haven\u2019t been",
                    options: ["haven\u2019t been","hadn\u2019t been","won\u2019t be","wasn\u2019t","was"]
                }
                ,
                {
                    numb: 212,
                    question: "Did you notice Nick ____ another student\u2019s paper during the exam?",
                    answer: "looking at",
                    options: ["looking at","to look at","has looked at","looked at","looks at"]
                }
                ,
                {
                    numb: 213,
                    question: "I ____ to live with my family, but now I live alone.",
                    answer: "used",
                    options: ["used","am used","am accustomed","were used","is used"]
                }
                ,
                {
                    numb: 214,
                    question: "She said that she ____ her present flat and ____ to find another.",
                    answer: "didn\u2019t like,was trying",
                    options: ["didn\u2019t like,was trying","doesn\u2019t like, was trying","doesn\u2019t like.tried","doesn\u2019t like, will try","do not like"]
                }
                ,
                {
                    numb: 215,
                    question: "If it ____ raining yesterday, we ____ the game.",
                    answer: "hadn\u2019t been, would have finished",
                    options: ["hadn\u2019t been, would have finished","wasn\u2019t, will finish","weren\u2019t, would have finished","weren\u2019t, would finish","have, would"]
                }
                ,
                {
                    numb: 216,
                    question: "The new highway ____ sometime next month.",
                    answer: "will be completed",
                    options: ["will be completed","completes","will complete","has been","was been"]
                }
                ,
                {
                    numb: 217,
                    question: "I have always enjoyed travelling. My sister, ____, prefers to stay home.",
                    answer: "however",
                    options: ["however","though","although","but","to"]
                }
                ,
                {
                    numb: 218,
                    question: "What is the ____ important invention in the twentieth century?",
                    answer: "most",
                    options: ["most","more","much","much more","many"]
                }
                ,
                {
                    numb: 219,
                    question: "This bank of the river isn\u2019t ____ that one.",
                    answer: "as beautiful as",
                    options: ["as beautiful as","beautiful","so beautiful","more beautiful","much beautiful"]
                }
                ,
                {
                    numb: 220,
                    question: "What is Benjamin Britten?",
                    answer: "a composer",
                    options: ["a composer","an architect","a writer","a politician","an artist"]
                }
                ,
                {
                    numb: 221,
                    question: "If I _____ time, I\u2019d take up sport.",
                    answer: "had",
                    options: ["had","had had","have","am having","having"]
                }
                ,
                {
                    numb: 222,
                    question: "If he _________ the fine, he will go to prison.",
                    answer: "doesn\u2019t pay",
                    options: ["doesn\u2019t pay","won\u2019t pay","hadn\u2019t paid","wouldn\u2019t pay","paying"]
                }
                ,
                {
                    numb: 223,
                    question: "If she had studied harder, she ______ the test.",
                    answer: "would have passed",
                    options: ["would have passed","would pass","would passed","passed","passing"]
                }
                ,
                {
                    numb: 224,
                    question: "If I hadn\u2019t been rude to her, she _______ upset now.",
                    answer: "wouldn\u2019t be",
                    options: ["wouldn\u2019t be","would not have been","will not be","isn\u2019t","being"]
                }
                ,
                {
                    numb: 225,
                    question: "If I were you, I _________ to your mother.",
                    answer: "would listen",
                    options: ["would listen","had listened","will listen","listen","listening"]
                }
                ,
                {
                    numb: 226,
                    question: "If you ____________ your work, we can have a rest.",
                    answer: "have finished",
                    options: ["have finished","finished","had finished","will finish","finishing"]
                }
                ,
                {
                    numb: 227,
                    question: "If you add sugar to a cup of tea, it ___________sweeter.",
                    answer: "tastes",
                    options: ["tastes","tasted","taste","will taste","tasting"]
                }
                ,
                {
                    numb: 228,
                    question: "If he hadn\u2019t been acting so foolishly, he ... punished.",
                    answer: "wouldn\u2019t have been",
                    options: ["wouldn\u2019t have been","would be","would have not been","would be not","being"]
                }
                ,
                {
                    numb: 229,
                    question: "If you __________ever in our town, you should come and visit us.",
                    answer: "are will be",
                    options: ["are will be","were","will be","be","being"]
                }
                ,
                {
                    numb: 230,
                    question: "If you need help, __________ to me.",
                    answer: "come",
                    options: ["come","would come","comes","will come","coming"]
                }
                ,
                {
                    numb: 231,
                    question: "If my father returns, we ____________ TV together.",
                    answer: "will watch",
                    options: ["will watch","would watch","would have watched","would watching","watchng"]
                }
                ,
                {
                    numb: 232,
                    question: "If I ... a lottery, I ___________ a yacht.",
                    answer: "won \/ would buy",
                    options: ["won \/ would buy","has won \/ would buy","win \/ would have bought","win \/ would buy","winning\/ buying"]
                }
                ,
                {
                    numb: 233,
                    question: "If the weather ___________ tomorrow, we\u2019ll go for a walk.",
                    answer: "is fine",
                    options: ["is fine","will be fine","was fine","fine","be fine"]
                }
                ,
                {
                    numb: 234,
                    question: "If the weather were fine, we __________ outside.",
                    answer: "would play",
                    options: ["would play","will play","play","playing","played"]
                }
                ,
                {
                    numb: 235,
                    question: "If I _______ in a bigger house, I would invite a lot of friends to my party.",
                    answer: "lived",
                    options: ["lived","had lived","live","had been living","living"]
                }
                ,
                {
                    numb: 236,
                    question: "If I do my homework, the teacher __________ happy.",
                    answer: "will be",
                    options: ["will be","is","were","was","being"]
                }
                ,
                {
                    numb: 237,
                    question: "If you heat water up to 100 \u00b0C, it ______ .",
                    answer: "boils",
                    options: ["boils","boiled","will boil","had boiled","boiling"]
                }
                ,
                {
                    numb: 238,
                    question: "If he had had money, he _____________ her a gift.",
                    answer: "would have bought",
                    options: ["would have bought","would buy","will buy","would not have bought","buying"]
                }
                ,
                {
                    numb: 239,
                    question: "Emma ... a card if she had remembered it was their anniversary.",
                    answer: "would have sent",
                    options: ["would have sent","would sent","sends","sent","sending"]
                }
                ,
                {
                    numb: 240,
                    question: "If I had known you were in hospital, I ____________ you.",
                    answer: "would have visited",
                    options: ["would have visited","will visit","would visit","wouldn't visit","visiting"]
                }
                ,
                {
                    numb: 241,
                    question: "Were I you, I _____________ to your sister.",
                    answer: "would talk",
                    options: ["would talk","would talked","had talked","talked","talking"]
                }
                ,
                {
                    numb: 242,
                    question: "If you ... that plate, you\u2019ll burn your fingers.",
                    answer: "touch",
                    options: ["touch","will touch","touched","had touched","touching"]
                }
                ,
                {
                    numb: 243,
                    question: "At least 2,000 domestic and international flights were disrupted by the storm, when it knocked out electricity and ____________ roofs, towers, fences and other equipment.",
                    answer: "destroyed",
                    options: ["destroyed","declared","interrupted","contributed","eliminated"]
                }
                ,
                {
                    numb: 244,
                    question: "They would have helped us if we___________ them.",
                    answer: "had asked",
                    options: ["had asked","hadn\u2019t asked","would asked","asked","asking"]
                }
                ,
                {
                    numb: 245,
                    question: "She will join us later unless she ____________ a lot of work to do.",
                    answer: "has",
                    options: ["has","won\u2019t have","doesn\u2019t have","isn\u2019t have","having"]
                }
                ,
                {
                    numb: 246,
                    question: "If you don\u2019t works systematically, you__________ the exam.",
                    answer: "will fail",
                    options: ["will fail","would fail","will be fail","would had been fail","failing"]
                }
                ,
];
showqa();
