var title = 'ENG | 101-150'; 
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
                    question: "\ufeffJapan _____ many high mountains.",
                    answer: "has",
                    options: ["has","is having","have","are having","were having"]
                }
                ,
                {
                    numb: 2,
                    question: "That\u2019s the house _____ I was born.",
                    answer: "where",
                    options: ["where","when","that","which","-"]
                }
                ,
                {
                    numb: 3,
                    question: "\u201c It\u2019s very noisy\u201d \u201c Suzy ______ to rock music.\u201d",
                    answer: "is listening",
                    options: ["is listening","listen","listens","listened","are listening"]
                }
                ,
                {
                    numb: 4,
                    question: "Many birds ______ south every winter.",
                    answer: "fly",
                    options: ["fly","flew","are flying","will fly","are flied"]
                }
                ,
                {
                    numb: 5,
                    question: "He\u2019s _____ boy in the class.",
                    answer: "the funniest",
                    options: ["the funniest","funnier","the funnier","funniest","more funniest"]
                }
                ,
                {
                    numb: 6,
                    question: "The hotel ______ we stayed was very comfortable.",
                    answer: "where",
                    options: ["where","which","when","that","-"]
                }
                ,
                {
                    numb: 7,
                    question: "Barbara\u2019s ________ than Sarah.",
                    answer: "more intelligent",
                    options: ["more intelligent","much intelligent","intelligenter","intelligent","the more intelligent"]
                }
                ,
                {
                    numb: 8,
                    question: "\u201c Who\u2019s shoes are these?\u201d \u201c They are _____.\u201d",
                    answer: "Ali\u2019s",
                    options: ["Ali\u2019s","of Ali\u2019s","belonging to Ali","belong to Ali","to Ali"]
                }
                ,
                {
                    numb: 9,
                    question: "Most of the students ______ these days.",
                    answer: "don\u2019t smoke",
                    options: ["don\u2019t smoke","isn\u2019t smoking","didn\u2019t smoke","won\u2019t smoke","smokes"]
                }
                ,
                {
                    numb: 10,
                    question: "My wife and I ate starting _____ we should stay at home.",
                    answer: "to think",
                    options: ["to think","thinking","thought","thinks","will think"]
                }
                ,
                {
                    numb: 11,
                    question: "A woman from a travel agency helped us ________ a nice house.",
                    answer: "choose",
                    options: ["choose","choosing","to choose","chooses","will choose"]
                }
                ,
                {
                    numb: 12,
                    question: "Dave ______ a student with her work now.",
                    answer: "is helping",
                    options: ["is helping","helped","helping","help","will help"]
                }
                ,
                {
                    numb: 13,
                    question: "Look what Pat _______ me for my birthday! A bike!",
                    answer: "has given",
                    options: ["has given","gave","have been giving","gives","will give"]
                }
                ,
                {
                    numb: 14,
                    question: "Two years ago I \u2026 my old aunt in a small town.",
                    answer: "visited",
                    options: ["visited","visit","do visitted","didn't visited","don\u2019t visit"]
                }
                ,
                {
                    numb: 15,
                    question: "It \u2026 a long visit as my aunt \u2026 well.",
                    answer: "was\u2026didn't feel",
                    options: ["was\u2026didn't feel","was\u2026didn't fall","was\u2026wasn't feel","did\u2026didn't felt","were\u2026didn\u2019t felt"]
                }
                ,
                {
                    numb: 16,
                    question: "I \u2026 to \u2026 medicine and food.",
                    answer: "had\u2026buy",
                    options: ["had\u2026buy","had\u2026bought","have\u2026buyed","haved\u2026buyed","haves buy"]
                }
                ,
                {
                    numb: 17,
                    question: "I also \u2026 dinner and \u2026 about the house.",
                    answer: "cooked\u2026helped",
                    options: ["cooked\u2026helped","cook\u2026helped","cook\u2026held","cooked\u2026help","cook\u2026helps"]
                }
                ,
                {
                    numb: 18,
                    question: "One day my aunt asked me: \" \u2026 the flowers in the garden yesterday?\"",
                    answer: "Did you water",
                    options: ["Did you water","You watered","Did you watered","You did water","You didn\u2019t water"]
                }
                ,
                {
                    numb: 19,
                    question: "I \u2026 very susprised as she usually \u2026 it herself.",
                    answer: "was\u2026did",
                    options: ["was\u2026did","were\u2026did","was\u2026doed","was\u2026does","were\u2026does"]
                }
                ,
                {
                    numb: 20,
                    question: "But in those days my aunt was so weak, that she \u2026 any work in the garden.",
                    answer: "couldn't do",
                    options: ["couldn't do","cannot do","couldn't did","cannot did","could did"]
                }
                ,
                {
                    numb: 21,
                    question: "So I \u2026 to take care of her flowers too.",
                    answer: "tried",
                    options: ["tried","tryed","try","trew","trying"]
                }
                ,
                {
                    numb: 22,
                    question: "Fortunately in three weeks my aunt \u2026 better.",
                    answer: "got",
                    options: ["got","to get","get","gotten","getting"]
                }
                ,
                {
                    numb: 23,
                    question: "And I \u2026 some free time and \u2026 sightseeing",
                    answer: "had\u2026enjoyed",
                    options: ["had\u2026enjoyed","had\u2026enjoied","had\u2026enjoy","haved\u2026enjoyed","have\u2026enjoys"]
                }
                ,
                {
                    numb: 24,
                    question: "The guests \u2026 in time.",
                    answer: "came",
                    options: ["came","come","comed","camed","comes"]
                }
                ,
                {
                    numb: 25,
                    question: "She \u2026 sorry for her little brother when he \u2026 down and hurt his leg.",
                    answer: "felt\u2026fell",
                    options: ["felt\u2026fell","feel\u2026fell","fell\u2026felt","felt\u2026fall","feel\u2026felt"]
                }
                ,
                {
                    numb: 26,
                    question: "Bob \u2026 his work a month ago.",
                    answer: "began",
                    options: ["began","begin","begun","begon","begins"]
                }
                ,
                {
                    numb: 27,
                    question: "His mom \u2026 about all his troubles.",
                    answer: "knew",
                    options: ["knew","know","known","knowed","knows"]
                }
                ,
                {
                    numb: 28,
                    question: "Last week he \u2026 cold.",
                    answer: "caught",
                    options: ["caught","catched","catch","cought","coughing"]
                }
                ,
                {
                    numb: 29,
                    question: "Nobody \u2026 surprised when he left.",
                    answer: "was",
                    options: ["was","were","is","be","are"]
                }
                ,
                {
                    numb: 30,
                    question: "When I \u2026 my keys at last, I was very happy",
                    answer: "found",
                    options: ["found","finded","founded","find","founds"]
                }
                ,
                {
                    numb: 31,
                    question: "He \u2026 too much coffee last night and \u2026",
                    answer: "drank\u2026couldn't sleep",
                    options: ["drank\u2026couldn't sleep","drank\u2026can't slept","drunk\u2026couldn't sleep","drink\u2026can't sleep","drink\u2026can\u2019t sleeps"]
                }
                ,
                {
                    numb: 32,
                    question: "We \u2026 breakfast at 9 o'clock today. It's 2 p.m. and we are really hungry.",
                    answer: "had",
                    options: ["had","has","have","haved","haves"]
                }
                ,
                {
                    numb: 33,
                    question: "He \u2026 a house at the seaside two years ago.",
                    answer: "built",
                    options: ["built","build","builded","builed","building"]
                }
                ,
                {
                    numb: 34,
                    question: "We ... a picture.",
                    answer: "are drawing",
                    options: ["are drawing","is drawing","are draw","are going","is going"]
                }
                ,
                {
                    numb: 35,
                    question: "Whales ... in the oceans.",
                    answer: "are living",
                    options: ["are living","can living","is living","am living","the living"]
                }
                ,
                {
                    numb: 36,
                    question: "A cat ... breakfast.",
                    answer: "is eating",
                    options: ["is eating","are writing","can reading","am singing","am eating"]
                }
                ,
                {
                    numb: 37,
                    question: "She ... to Moscow.",
                    answer: "is going",
                    options: ["is going","are going","as going","is eating","the going"]
                }
                ,
                {
                    numb: 38,
                    question: "Students ... to play games.",
                    answer: "like",
                    options: ["like","are liking","is liking","am liking","the living"]
                }
                ,
                {
                    numb: 39,
                    question: "Sue ... with Sammy.",
                    answer: "is talking",
                    options: ["is talking","are talking","can talking","am talking","the talking"]
                }
                ,
                {
                    numb: 40,
                    question: "They ... .",
                    answer: "are playing",
                    options: ["are playing","am singing","can reading","is writing","the playing"]
                }
                ,
                {
                    numb: 41,
                    question: "He ... a picture.",
                    answer: "is drawing",
                    options: ["is drawing","are going","is going","is draw","are draw"]
                }
                ,
                {
                    numb: 42,
                    question: "You ... football.",
                    answer: "are playing",
                    options: ["are playing","are trying","is playing","is sitting","as sitting"]
                }
                ,
                {
                    numb: 43,
                    question: "I ... an intresting book.",
                    answer: "am reading",
                    options: ["am reading","are reading","can reading","is reading","the reading"]
                }
                ,
                {
                    numb: 44,
                    question: "Do you \u2026 chocolate? \u2013 Sure! I love it!",
                    answer: "like",
                    options: ["like","live","give","catch","leave"]
                }
                ,
                {
                    numb: 45,
                    question: "Give me a lamp, \u2026 . \u2013 Here you are!",
                    answer: "please",
                    options: ["please","sorry","welcome","you are welcome","excuse"]
                }
                ,
                {
                    numb: 46,
                    question: "You \u2026my best friend!",
                    answer: "are",
                    options: ["are","is","am","be","the"]
                }
                ,
                {
                    numb: 47,
                    question: "What is your \u2026? \u2013 Pushkin street, 10.",
                    answer: "address",
                    options: ["address","home","living","flat","house"]
                }
                ,
                {
                    numb: 48,
                    question: "What\u2019s your Granny\u2019s name? - \u2026 name is Lina.",
                    answer: "Her",
                    options: ["Her","He","She","Our","We"]
                }
                ,
                {
                    numb: 49,
                    question: "I have no time. I will call you \u2026 .",
                    answer: "later",
                    options: ["later","before","after","sooner","year"]
                }
                ,
                {
                    numb: 50,
                    question: "Buy \u2026 oranges. We have no fruit.",
                    answer: "some",
                    options: ["some","any","little","much","many"]
                }
                ,
];
showqa();
