var title = 'ENG | 201-246'; 
var questionCount = 46; 
var timeValue = 99;
var answerMixing = true;
var deadLine = false;
var about = true;
let syllabus = '.';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: "\ufeffYou looked very busy when I ____ you last night. What ____?",
                    answer: "saw,were you doing",
                    options: ["saw,were you doing","see were you doing","see,do you do",".saw, were you do",".saw, were you do"]
                }
                ,
                {
                    numb: 2,
                    question: "I ____ a new house last year, but I ____ my old house yet, so at the moment I have two houses.",
                    answer: "bought,haven\u2019t sold",
                    options: ["bought,haven\u2019t sold","were you do. buy,don\u2019t sell","have bought, sold","had bought, didn\u2019t sell","has bought, didn\u2019t sell"]
                }
                ,
                {
                    numb: 3,
                    question: "After failing his driving test four times, he finally ____ trying to pass.",
                    answer: "gave up",
                    options: ["gave up","gave off","gave away","gave in","given up"]
                }
                ,
                {
                    numb: 4,
                    question: "I ____ all of the questions correctly since I began this grammar exercise.",
                    answer: "have answered",
                    options: ["have answered","answer","am answering","had answered","answering"]
                }
                ,
                {
                    numb: 5,
                    question: "I was late. The teacher ____ the test when I ____ to class.",
                    answer: "had already given, got",
                    options: ["had already given, got","has already given, got","has already given, get","was already giving, get","is already give get"]
                }
                ,
                {
                    numb: 6,
                    question: "They can\u2019t have ____ more strawberries. I want ____ to make jam.",
                    answer: "any,some",
                    options: ["any,some","no, some","any, any","some,any",".any, where"]
                }
                ,
                {
                    numb: 7,
                    question: "We all ____ his story as a joke.",
                    answer: "treated",
                    options: ["treated","intended","thought","found","made"]
                }
                ,
                {
                    numb: 8,
                    question: "Nothing was stolen, ____?",
                    answer: "was it",
                    options: ["was it","wasn\u2019t anything","wasn\u2019t it","was anything","were not"]
                }
                ,
                {
                    numb: 9,
                    question: "You are always ____ excuses for not ____ your homework on time.",
                    answer: "making, doing",
                    options: ["making, doing","doing, doing","making, making","doing, making","do make"]
                }
                ,
                {
                    numb: 10,
                    question: "When I ____ for my passport, I ____ this old photograph.",
                    answer: "was looking, found",
                    options: ["was looking, found","look,found","will look, will find","looked, found","look ,find"]
                }
                ,
                {
                    numb: 11,
                    question: "I____ to the theatre for ages.",
                    answer: "haven\u2019t been",
                    options: ["haven\u2019t been","hadn\u2019t been","won\u2019t be","wasn\u2019t","was"]
                }
                ,
                {
                    numb: 12,
                    question: "Did you notice Nick ____ another student\u2019s paper during the exam?",
                    answer: "looking at",
                    options: ["looking at","to look at","has looked at","looked at","looks at"]
                }
                ,
                {
                    numb: 13,
                    question: "I ____ to live with my family, but now I live alone.",
                    answer: "used",
                    options: ["used","am used","am accustomed","were used","is used"]
                }
                ,
                {
                    numb: 14,
                    question: "She said that she ____ her present flat and ____ to find another.",
                    answer: "didn\u2019t like,was trying",
                    options: ["didn\u2019t like,was trying","doesn\u2019t like, was trying","doesn\u2019t like.tried","doesn\u2019t like, will try","do not like"]
                }
                ,
                {
                    numb: 15,
                    question: "If it ____ raining yesterday, we ____ the game.",
                    answer: "hadn\u2019t been, would have finished",
                    options: ["hadn\u2019t been, would have finished","wasn\u2019t, will finish","weren\u2019t, would have finished","weren\u2019t, would finish","have, would"]
                }
                ,
                {
                    numb: 16,
                    question: "The new highway ____ sometime next month.",
                    answer: "will be completed",
                    options: ["will be completed","completes","will complete","has been","was been"]
                }
                ,
                {
                    numb: 17,
                    question: "I have always enjoyed travelling. My sister, ____, prefers to stay home.",
                    answer: "however",
                    options: ["however","though","although","but","to"]
                }
                ,
                {
                    numb: 18,
                    question: "What is the ____ important invention in the twentieth century?",
                    answer: "most",
                    options: ["most","more","much","much more","many"]
                }
                ,
                {
                    numb: 19,
                    question: "This bank of the river isn\u2019t ____ that one.",
                    answer: "as beautiful as",
                    options: ["as beautiful as","beautiful","so beautiful","more beautiful","much beautiful"]
                }
                ,
                {
                    numb: 20,
                    question: "What is Benjamin Britten?",
                    answer: "a composer",
                    options: ["a composer","an architect","a writer","a politician","an artist"]
                }
                ,
                {
                    numb: 21,
                    question: "If I _____ time, I\u2019d take up sport.",
                    answer: "had",
                    options: ["had","had had","have","am having","having"]
                }
                ,
                {
                    numb: 22,
                    question: "If he _________ the fine, he will go to prison.",
                    answer: "doesn\u2019t pay",
                    options: ["doesn\u2019t pay","won\u2019t pay","hadn\u2019t paid","wouldn\u2019t pay","paying"]
                }
                ,
                {
                    numb: 23,
                    question: "If she had studied harder, she ______ the test.",
                    answer: "would have passed",
                    options: ["would have passed","would pass","would passed","passed","passing"]
                }
                ,
                {
                    numb: 24,
                    question: "If I hadn\u2019t been rude to her, she _______ upset now.",
                    answer: "wouldn\u2019t be",
                    options: ["wouldn\u2019t be","would not have been","will not be","isn\u2019t","being"]
                }
                ,
                {
                    numb: 25,
                    question: "If I were you, I _________ to your mother.",
                    answer: "would listen",
                    options: ["would listen","had listened","will listen","listen","listening"]
                }
                ,
                {
                    numb: 26,
                    question: "If you ____________ your work, we can have a rest.",
                    answer: "have finished",
                    options: ["have finished","finished","had finished","will finish","finishing"]
                }
                ,
                {
                    numb: 27,
                    question: "If you add sugar to a cup of tea, it ___________sweeter.",
                    answer: "tastes",
                    options: ["tastes","tasted","taste","will taste","tasting"]
                }
                ,
                {
                    numb: 28,
                    question: "If he hadn\u2019t been acting so foolishly, he ... punished.",
                    answer: "wouldn\u2019t have been",
                    options: ["wouldn\u2019t have been","would be","would have not been","would be not","being"]
                }
                ,
                {
                    numb: 29,
                    question: "If you __________ever in our town, you should come and visit us.",
                    answer: "are will be",
                    options: ["are will be","were","will be","be","being"]
                }
                ,
                {
                    numb: 30,
                    question: "If you need help, __________ to me.",
                    answer: "come",
                    options: ["come","would come","comes","will come","coming"]
                }
                ,
                {
                    numb: 31,
                    question: "If my father returns, we ____________ TV together.",
                    answer: "will watch",
                    options: ["will watch","would watch","would have watched","would watching","watchng"]
                }
                ,
                {
                    numb: 32,
                    question: "If I ... a lottery, I ___________ a yacht.",
                    answer: "won \/ would buy",
                    options: ["won \/ would buy","has won \/ would buy","win \/ would have bought","win \/ would buy","winning\/ buying"]
                }
                ,
                {
                    numb: 33,
                    question: "If the weather ___________ tomorrow, we\u2019ll go for a walk.",
                    answer: "is fine",
                    options: ["is fine","will be fine","was fine","fine","be fine"]
                }
                ,
                {
                    numb: 34,
                    question: "If the weather were fine, we __________ outside.",
                    answer: "would play",
                    options: ["would play","will play","play","playing","played"]
                }
                ,
                {
                    numb: 35,
                    question: "If I _______ in a bigger house, I would invite a lot of friends to my party.",
                    answer: "lived",
                    options: ["lived","had lived","live","had been living","living"]
                }
                ,
                {
                    numb: 36,
                    question: "If I do my homework, the teacher __________ happy.",
                    answer: "will be",
                    options: ["will be","is","were","was","being"]
                }
                ,
                {
                    numb: 37,
                    question: "If you heat water up to 100 \u00b0C, it ______ .",
                    answer: "boils",
                    options: ["boils","boiled","will boil","had boiled","boiling"]
                }
                ,
                {
                    numb: 38,
                    question: "If he had had money, he _____________ her a gift.",
                    answer: "would have bought",
                    options: ["would have bought","would buy","will buy","would not have bought","buying"]
                }
                ,
                {
                    numb: 39,
                    question: "Emma ... a card if she had remembered it was their anniversary.",
                    answer: "would have sent",
                    options: ["would have sent","would sent","sends","sent","sending"]
                }
                ,
                {
                    numb: 40,
                    question: "If I had known you were in hospital, I ____________ you.",
                    answer: "would have visited",
                    options: ["would have visited","will visit","would visit","wouldn't visit","visiting"]
                }
                ,
                {
                    numb: 41,
                    question: "Were I you, I _____________ to your sister.",
                    answer: "would talk",
                    options: ["would talk","would talked","had talked","talked","talking"]
                }
                ,
                {
                    numb: 42,
                    question: "If you ... that plate, you\u2019ll burn your fingers.",
                    answer: "touch",
                    options: ["touch","will touch","touched","had touched","touching"]
                }
                ,
                {
                    numb: 43,
                    question: "At least 2,000 domestic and international flights were disrupted by the storm, when it knocked out electricity and ____________ roofs, towers, fences and other equipment.",
                    answer: "destroyed",
                    options: ["destroyed","declared","interrupted","contributed","eliminated"]
                }
                ,
                {
                    numb: 44,
                    question: "They would have helped us if we___________ them.",
                    answer: "had asked",
                    options: ["had asked","hadn\u2019t asked","would asked","asked","asking"]
                }
                ,
                {
                    numb: 45,
                    question: "She will join us later unless she ____________ a lot of work to do.",
                    answer: "has",
                    options: ["has","won\u2019t have","doesn\u2019t have","isn\u2019t have","having"]
                }
                ,
                {
                    numb: 46,
                    question: "If you don\u2019t works systematically, you__________ the exam.",
                    answer: "will fail",
                    options: ["will fail","would fail","will be fail","would had been fail","failing"]
                }
                ,
];
showqa();
