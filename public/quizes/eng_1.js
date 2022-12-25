var title = 'ENG | 1-50'; 
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
                    question: "National feelings, like the national language and history belong _____ the people.",
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
];
showqa();