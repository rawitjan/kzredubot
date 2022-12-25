var title = 'ENG | 151-200'; 
var questionCount = 50; 
var timeValue = 99;
var answerMixing = true;
var deadLine = false;
var about = true;
let syllabus = '.';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: "\ufeffThis cat is very old. \u2013 Yes, he is \u2026 of our animals.",
                    answer: "the oldest",
                    options: ["the oldest","the older","oldest","older","a older"]
                }
                ,
                {
                    numb: 2,
                    question: "I don\u2019t like this coat. I want to see \u2026 one.",
                    answer: "another",
                    options: ["another","other","the other","the others","is other"]
                }
                ,
                {
                    numb: 3,
                    question: "I\u2019d like to have some \u2026 coffee. \u2013 OK, I\u2019ll bring it to you.",
                    answer: "more",
                    options: ["more","many","much","less","some"]
                }
                ,
                {
                    numb: 4,
                    question: "How can I \u2026 to the railway station?",
                    answer: "get",
                    options: ["get","go","come","come","came"]
                }
                ,
                {
                    numb: 5,
                    question: "Can I \u2026 your flip-flops? \u2013 Hmm Yes, but bring them back tomorrow.",
                    answer: "borrow",
                    options: ["borrow","buy","take","lend","visit"]
                }
                ,
                {
                    numb: 6,
                    question: "Good bye! Write me as soon as \u2026 .",
                    answer: "possible",
                    options: ["possible","difficult","wonderful","successful","important"]
                }
                ,
                {
                    numb: 7,
                    question: "Calm down. Don\u2019t \u2026! Everything will be OK.",
                    answer: "worry",
                    options: ["worry","clean","refresh","swim","work"]
                }
                ,
                {
                    numb: 8,
                    question: "We will invite all our \u2026 . It\u2019s a family holiday!",
                    answer: "relatives",
                    options: ["relatives","friends","neighbours","co-workers","boyfriends"]
                }
                ,
                {
                    numb: 9,
                    question: "He is very \u2026 . He never greets anybody.",
                    answer: "impolite",
                    options: ["impolite","sensitive","aggressive","generous","adventure"]
                }
                ,
                {
                    numb: 10,
                    question: "I don\u2019t like Japanese \u2026 . Seafood is not my favorite.",
                    answer: "cuisine",
                    options: ["cuisine","furniture","art","design","picture"]
                }
                ,
                {
                    numb: 11,
                    question: "This hotel has a lot of \u2026 . For example, it\u2019s not expensive. And I like it!",
                    answer: "advantages",
                    options: ["advantages","complications","reclamations","advertisements","nationalist"]
                }
                ,
                {
                    numb: 12,
                    question: "I chose this resort \u2026 some negative comments. It gives me memories of my childhood.",
                    answer: "in spite of",
                    options: ["in spite of","however","according to","nevertheless","currently"]
                }
                ,
                {
                    numb: 13,
                    question: "Carol and I are old friends. I \u2026 her since we studied in high school together.",
                    answer: "have known",
                    options: ["have known","have been knowing","are knowing","know","is know"]
                }
                ,
                {
                    numb: 14,
                    question: "I am tired. We \u2026 for more than an hour. Let's stop and rest for a while.",
                    answer: "have been walking",
                    options: ["have been walking","walk","have walked","are walking","is walking"]
                }
                ,
                {
                    numb: 15,
                    question: "I have read this chapter in my chemistry text three times, and still I \u2026 it.",
                    answer: "don't understand",
                    options: ["don't understand","haven't understood","have understood","understand","do understand"]
                }
                ,
                {
                    numb: 16,
                    question: "How long has Professor \u2026 a course of lectures on Medieval History?",
                    answer: "has Professor Donaldson been delivering",
                    options: ["has Professor Donaldson been delivering","has Professor Donaldson delivered","is Professor Donaldson delivering","does Professor Donaldson deliver","is Professor Donaldson been deliver"]
                }
                ,
                {
                    numb: 17,
                    question: "Linda's apartment looks nice and tidy because she \u2026 it every two years.",
                    answer: "redecorates",
                    options: ["redecorates","has been redecorating","is redecorating","has redecorated","at redecorate"]
                }
                ,
                {
                    numb: 18,
                    question: "A group of scientists are travelling around Africa. How many countries \u2026 so far, I wonder?",
                    answer: "have they visited",
                    options: ["have they visited","have they been visiting","do they visit","they have visited","they have visit"]
                }
                ,
                {
                    numb: 19,
                    question: "Jerry promised to come to work in time. He is not here, and he even\u2026 .",
                    answer: "hasn't called",
                    options: ["hasn't called","hasn't been calling","isn't calling","doesn't call","isn\u2019t call"]
                }
                ,
                {
                    numb: 20,
                    question: "Be careful with paint. It \u2026 a certain amount of lead.",
                    answer: "contains",
                    options: ["contains","contained","is containing","has contained","a container"]
                }
                ,
                {
                    numb: 21,
                    question: "I think you \u2026 very weak. Don't get out of bed. You'll only make your temperature go up again.",
                    answer: "are being",
                    options: ["are being","have been","are","were","was"]
                }
                ,
                {
                    numb: 22,
                    question: "What are you looking for? - I \u2026 my umbrella somewhere, and now I don't know where it is.",
                    answer: "have left",
                    options: ["have left","have been leaving","has left","leave","My daughter is a bit _______ me."]
                }
                ,
                {
                    numb: 23,
                    question: "My daughter is a bit _______ me.",
                    answer: "taller than",
                    options: ["taller than","tallest","tall","taller","more talle"]
                }
                ,
                {
                    numb: 24,
                    question: "London is ___________ Edinburgh.",
                    answer: "more expensive than",
                    options: ["more expensive than","expensive","expensiver","most expensive","more expensive"]
                }
                ,
                {
                    numb: 25,
                    question: "It\u2019s the best beach _________ England.",
                    answer: "in",
                    options: ["in","at","of","on","\u043cby"]
                }
                ,
                {
                    numb: 26,
                    question: "That\u2019s the worst we\u2019ve ever played.",
                    answer: "the worst",
                    options: ["the worst","worst","worse","baddest","more bad"]
                }
                ,
                {
                    numb: 27,
                    question: "I don\u2019t earn as ______ my boss.",
                    answer: "much as",
                    options: ["much as","many as","most as","much so","many than"]
                }
                ,
                {
                    numb: 28,
                    question: "I saw __ old man with ___dog.",
                    answer: "an\/a",
                    options: ["an\/a","a\/a","an\/an","a\/an","__\/___"]
                }
                ,
                {
                    numb: 29,
                    question: "What ____ awful day!",
                    answer: "an",
                    options: ["an","___","a","the","at"]
                }
                ,
                {
                    numb: 30,
                    question: "____ Women usually talk more than ______men.",
                    answer: "____\/____",
                    options: ["____\/____","a\/ a","the\/ the","a\/ the","the\/a."]
                }
                ,
                {
                    numb: 31,
                    question: "____Love is more important than _______money.",
                    answer: "____\/____",
                    options: ["____\/____","a\/ a","the\/ the","a\/ the","the\/a."]
                }
                ,
                {
                    numb: 32,
                    question: "I got back from ___ work.",
                    answer: "____",
                    options: ["____","a","an","the","at"]
                }
                ,
                {
                    numb: 33,
                    question: "Let\u2019s invite some friends for _____lunch.",
                    answer: "____",
                    options: ["____","a","an","the","at"]
                }
                ,
                {
                    numb: 34,
                    question: "A person who has finished university and hasba degree is called ___________",
                    answer: "a graduate",
                    options: ["a graduate","a pupil","a student","a junior","a head"]
                }
                ,
                {
                    numb: 35,
                    question: "What time ____ you get up yesterday morning?",
                    answer: "did",
                    options: ["did","do","does","doing","done"]
                }
                ,
                {
                    numb: 36,
                    question: "The accident happened when they ____________home. (drive)",
                    answer: "were driving",
                    options: ["were driving","is driving","was driving","will be driving","drove"]
                }
                ,
                {
                    numb: 37,
                    question: "Mike had an accident while he (cycle) to work.",
                    answer: "was cycling",
                    options: ["was cycling","cycled","were cycling","had been cycled","was being cycled"]
                }
                ,
                {
                    numb: 38,
                    question: "When they turned on the TV, the match (to have) already(to finish).",
                    answer: "had \/finished",
                    options: ["had \/finished","has \/ finished","have finish","have finished","had finish"]
                }
                ,
                {
                    numb: 39,
                    question: "The college (built) in the16th century.",
                    answer: "was built",
                    options: ["was built","were build","was building","build","built"]
                }
                ,
                {
                    numb: 40,
                    question: "The castle has been owned _____ the Carnarvon family since 1679.",
                    answer: "by",
                    options: ["by","with","at","on","____"]
                }
                ,
                {
                    numb: 41,
                    question: "We painted the kitchen _________.",
                    answer: "ourselves",
                    options: ["ourselves","themselves","himself","yourself","itself"]
                }
                ,
                {
                    numb: 42,
                    question: "I don\u2019t want __________ for the first lesson so I come a few minutes before the bell.",
                    answer: "to be late;",
                    options: ["to be late;","to be fond;","to be ill;","to be interested;","to be proud."]
                }
                ,
                {
                    numb: 43,
                    question: "I _____ a friend while I _____ the shopping.",
                    answer: "met \/ was doing",
                    options: ["met \/ was doing","was meeting \/ did","meet \/ do","met \/ did","meet\/was doing"]
                }
                ,
                {
                    numb: 44,
                    question: "I _____ for my things when I ____ someone call my name.",
                    answer: "was paying \/ heard",
                    options: ["was paying \/ heard","pay \/ heard","was paying \/ hear","paid \/ was hearing","paid\/heard"]
                }
                ,
                {
                    numb: 45,
                    question: "When I _____ I _____ the knife.",
                    answer: "was cooking \/ dropped",
                    options: ["was cooking \/ dropped","cook \/ drop","cooked \/ was dropping","cooked \/ dropped","cooked\/drop"]
                }
                ,
                {
                    numb: 46,
                    question: "What _____ at 8.00 last night?",
                    answer: "were you doing",
                    options: ["were you doing","you did","did you","are you doing","do you do"]
                }
                ,
                {
                    numb: 47,
                    question: "While I _____ this morning, I _____ my money. I don\u2019t know how.",
                    answer: "was shopping \/ lost",
                    options: ["was shopping \/ lost","lost shopped \/ lose","shopped \/ was losing","shop \/ lose","shop\/lost"]
                }
                ,
                {
                    numb: 48,
                    question: "I ... not ... him since June.",
                    answer: "have \/ seen",
                    options: ["have \/ seen","did \/ seen","have \/ saw","did \/ see","has\/seen"]
                }
                ,
                {
                    numb: 49,
                    question: "Anel ______ Paris for London in 2013.",
                    answer: "left",
                    options: ["left","have left","has left","leaved","has leave"]
                }
                ,
                {
                    numb: 50,
                    question: "When the fog ____, we ____ to see where we are.",
                    answer: "lifts, will be able",
                    options: ["lifts, will be able","will lift, will be able","lifts, may","lifts, must",".lift, must"]
                }
                ,
];
showqa();
