var title = 'Қазақ тілі | Дауысты дыбыстар';
var questionCount = 50;
var timeValue = 20;
var answerMixing = false;
var deadLine = false;
var about = true;
let syllabus = "<p>Айтылу кезінде ауа өкпеден кедергісіз шығып, үннен ғана тұратын дыбыстарды дауысты дыбыстар дейміз. <\/p><p>Дауысты дыбыстар тілдің қатысу қалпына қарай: <i>жуан және жіңішке<\/i>; жақтың ашылу қалпына қарай: <i>ашық және қысаң<\/i>; еріннің қатысу қалпына қарай: <i>еріндік және езулік дауысты дыбыстар <i>болып табылады.<\/i><\/i><\/p><table class=\"table table-bordered\"><tbody><tr><td>Жуан дауыстылар<br><\/td><td>а, о, ұ, ы, у<br><\/td><\/tr><tr><td>Жіңішке дауыстылар<br><\/td><td>ә, е, ө, ү, і, и<br><\/td><\/tr><tr><td>Ашық дауыстылар<br><\/td><td>а, ә, о, ө, е<br><\/td><\/tr><tr><td>Қысаң дауыстылар<br><\/td><td>ұ, ү, ы, і, и<br><\/td><\/tr><tr><td>Еріндік дауыстылар<br><\/td><td>о, ө, ұ, ү, у<br><\/td><\/tr><tr><td>Езулік дауыстылар<br><\/td><td>а, ә, е, ы, і, и<br><\/td><\/tr><\/tbody><\/table><p>Ы,і әріптері сөздің барлық буындарында жазылады. Мысалы: тыныштық, іс, кісілік.<\/p><p>Ы, І сөздің барлық буындарында жазыла тұра, төмендегідей жағдайларда түсіп қалады:<\/p><p>а) Кейбір сөздерге тәуелдік жалғауы жалғанса: <i>халық-халқым, әріп-әрпі<\/i> т.б.<\/p>"

let questions = [
    {
        numb: "1",
        question: "Жіңішке дауысты дыбысты көрсетіңіз",
        options: ["ы","а","о","у","ә"],
        answer: "ә"
    },
    {         
        numb: "2",
        question: "Жуан дыбыстарды көрсетіңіз",
        options: ["І, Ы,Е, И","Е,И,У,О","А,О,Ұ,Ы","А,Ғ,Ө,Ұ","О,Ө,Ұ,Ү"],
        answer: "А,О,Ұ,Ы"
    },
    {         
        numb: "3",
        question: "Жіңішке буынды дәм атауын көрсетіңіз",
        options: ["Күшті, үлкен","Ащы, қышқыл","Семіз, ерен", "Тәтті, дәмді","Тұзды, қатты"],
        answer: "Тәтті, дәмді"
    },
    {         
        numb: "4",
        question: "Дауысты дыбыстардың жақтың қатысына қарай жіктелетін түрлерін көрсетіңіз",
        options: ["жуан, жіңішке","еріндік, езулік","ұяң, қатаң","ашық, қысаң","үнді, жуан"],
        answer: "ашық, қысаң"
    },
    {   
        numb: "5",
        question: "Дауысты дыбыстардың еріннің қатысына қарай жіктелетін түрлерін көрсетіңіз",
        options: ["жуан, жіңішке","қысаң, ашық","үнді, ұяң","еріндік, езулік","қатаң, ұяң"],
        answer: "еріндік, езулік"
    },
    {
        numb: "6",
        question: "Ашық дауысты дыбыстарды көрсетіңіз",
        options: ["а, ұ,ү","у, и, і","у, і, ы","а, о, е","е, ө, й"],
        answer: "а, о, е"
    },
    {
        numb: "7",
        question: "«Ы» дыбысы қойылатын сөзді көрсетіңіз",
        options: ["Жазғ...","Кәр...","Бөр...к","М...нез","Д...мді"],
        answer: "Жазғ..."
    },
    {
        numb: "8",
        question: "Бірыңғай жіңішке дауыстылардан тұратын сөздерді көрсетіңіз",
        options: ["Қиық","Береке","Сынып","Қиғызу","Кітап"],
        answer: "Береке"
    },
    {
        numb: "9",
        question: "Жіңішке буынды сөздер қатарын көрсетіңіз",
        options: ["сынып, парта","дәптер, қалам","мереке, білім","қыркүйек, қоңырау","кітап, оқушы"],
        answer: "мереке, білім"
    },
    {
        numb: "10",
        question: "Дауысты дыбыстар тілдің қатысына қарай қандай түрлерге бөлінетінін белгілеңіз",
        options: ["Үнді, қатаң","Езулік, еріндік","Жуан, жіңішке","Қатаң, ұяң","Ашық, қысаң"],
        answer: "Жуан, жіңішке"
    },
    {
        numb: "11",
        question: "Жіңішке дауыстылар қатарын көрсетіңіз",
        options: ["ы, ұ, и","а, ү, о","ұ, е, ө","ө, і, е","о, э, у"],
        answer: "ө, і, е"
    },
    {
        numb: "12",
        question: "Жуан дауысты сөзді табыңыз",
        options: ["Кезең","Куәлік","Көне","Ғұлама","Билік"],
        answer: "Ғұлама"
    },
    {
        numb: "13",
        question: "Жіңішке дауысты дыбысты көрсетіңіз",
        options: ["у","о","а","ө","ұ"],
        answer: "ө"
    },
    {
        numb: "14",
        question: "Барлық буында жазылатын дауысты дыбыстарды көрсетіңіз",
        options: ["а, ы, і","э, ә, и","о, ө, ұ","у, ұ, ө","ә, ү, у"],
        answer: "а, ы, і"
    },
    {
        numb: "15",
        question: "Қазақ тіліне тән дауысты дыбыстары бар сөзді көрсетіңіз",
        options: ["мемлекет","отан","саудагер","көзілдірік","достар"],
        answer: "көзілдірік"
    },
    {
        numb: "16",
        question: "Қай дауысты дыбыс әрі жуан, әрі жіңішке дауыстыға жататынын анықтаңыз",
        options: ["е","и","о","а","ү"],
        answer: "и"
    },
    {
        numb: "17",
        question: "Жуан да жіңішке де болатын дыбысты табыңыз",
        options: ["О","Е","У","А","Ө"],
        answer: "У"
    },
    {
        numb: "18",
        question: "Тек жуан дауысты дыбыстан тұрған қатарды көрсетіңіз",
        options: ["Кінәлі, дүдәмәл","Ботагөз, Өмірзақ","Ақтөбе, тарихи","Су, бауырмал","Ушығу, қабілет"],
        answer: "Су, бауырмал"
    },
    {
        numb: "19",
        question: "Жіңішке дауысты сөзді табыңыз",
        options: ["Базар","Қора","Қауырсын","Кілем","Сауысқан"],
        answer: "Кілем"
    },
    {
        numb: "20",
        question: "Жіңішке әрі ашық дауысты дыбысты көрсетіңіз",
        options: ["О, И","Ү,І","Ә, Е","А,Ұ","Е, Ы"],
        answer: "Ә, Е"
    },
    {
        numb: "21",
        question: "Тек жуан дауысты дыбысты сөздер қатарын көрсетіңіз",
        options: ["Кенесары, өнерпаз","Ұлытау, қуғыншы","Емхана, арбакеш","Игілік, ержүрек","Қыстыгүні, кітаптар"],
        answer: "Ұлытау, қуғыншы"
    },
    {
        numb: "22",
        question: "Жуан дауысты дыбыстары бар сөзді белгілеңіз",
        options: ["Кеңес","Күндіз","Сабыр","Екеуі","Келуші"],
        answer: "Сабыр"
    },
    {
        numb: "23",
        question: "Қазақ тіліне тән дауысты дыбыстарын белгілеңіз",
        options: ["о, е","а, и","и, у","ө, ү","ы, э"],
        answer: "ө, ү"
    },
    {
        numb: "24",
        question: "Тек жіңішке дауысты дыбыстар қатарын анықтаңыз",
        options: ["О, ө, у","А, ә, е","Ы, і, и","Ә, ө, і","Э, о, ү"],
        answer: "Ә, ө, і"
    },
    {
        numb: "25",
        question: "Дыбыстар неше топқа бөлінетінін көрсетіңіз",
        options: ["5","2","3","6","4"],
        answer: "2"
    },
    {
        numb: "26",
        question: "Фонетика нені зерттейтінін көрсетіңіз",
        options: ["Сөз таптарын","Тіл дыбыстарының жүйесін","Сөз тіркесінің байланысу тәсілін","Сөз құрамын","Сөз мағыналарын"],
        answer: "Тіл дыбыстарының жүйесін"
    },
    {
        numb: "27",
        question: "А, О, Ұ, Ы қандай дыбыстар екенін көрсетіңіз",
        options: ["Езулік","Қысаң","Еріндік","Жуан","Ашық"],
        answer: "Жуан"
    },
    {
        numb: "28",
        question: "Бірыңғай жіңішке дауысты дыбыстарды көрсетіңіз",
        options: ["Ы,И,Ү,У...","О,У,Е,І...","Ә,І,Е,Ө...","Ә,А,О,Ү...","И,Е,А,Ө..."],
        answer: "Ә,І,Е,Ө..."
    },
    {
        numb: "29",
        question: "Жуан дауысты дыбыстар қатарын көрсетіңіз:",
        options: ["ә, и","ү, і","а, о","ө, ә","у, і"],
        answer: "а, о"
    },
    {
        numb: "30",
        question: "Жіңішке дауысты дыбысты көрсетіңіз",
        options: ["ы","ү","ұ","о","у"],
        answer: "ү"
    },
    {
        numb: "31",
        question: "Жуан дауысты дыбыстар қатарын анықтаңыз",
        options: ["Е, і, о","И, ө, ы","Ұ, о, а","Я, ә, е","Ү, е, у"],
        answer: "Ұ, о, а"
    },
    {
        numb: "32",
        question: "«О» қандай дыбыс екенін анықтаңыз",
        options: ["Жуан","Қысаң","Езулік","Дауыссыз","Жіңішке"],
        answer: "Жуан"
    },
    {
        numb: "33",
        question: "Жуан әрі еріндік дауысты дыбыстарды көрсетіңіз",
        options: ["е, а","ә, а","о, ұ","и, ө","ү, і"],
        answer: "о, ұ"
    },
    {
        numb: "34",
        question: "Езулік дауыстылардың саны қанша екенін белгілеңіз",
        options: ["8","6","10","7","12"],
        answer: "7"
    },
    {
        numb: "35",
        question: "«У» дыбысы жуан болып тұрған сөзді көрсетіңіз",
        options: ["Кету","Жүру","Жету","Секіру","Қайту"],
        answer: "Қайту"
    },
    {
        numb: "36",
        question: "Қысаң дауыстылар қатарын толықтырыңыз: Ы, і, у, ү, ұ, ...",
        options: ["А","И","О","Ә","Е"],
        answer: "И"
    },
    {
        numb: "37",
        question: "«Ұ» дыбысына талдау жасаңыз",
        options: ["Жіңішке дауысты","Ұяң дауыссыз","Үнді дауыссыз","Жуан дауысты","Қатаң дауыссыз"],
        answer: "Жуан дауысты"
    },
    {
        numb: "38",
        question: "Тек жуан дауысты дыбыстан құралған сөзді табыңыз",
        options: ["Арбакеш","Өнерпаз","Екілік","Аққу","Биыл"],
        answer: "Аққу"
    },
    {
        numb: "39",
        question: "Қазақтың төл сөздерінде сөз соңында келмейтін дыбысты белгілеңіз",
        options: ["А","І","О","Е","Ы"],
        answer: "О"
    },
    {
        numb: "40",
        question: "«а» дыбысы жақтың ашылуына қарай қай дауыстыға жататынын белгілеңіз",
        options: ["Қысаң","Ашық","Еріндік","Жуан","Жіңішке"],
        answer: "Ашық"
    },
    {
        numb: "41",
        question: "Бірыңғай қысаң дауыстыдан болған сөзді көрсетіңіз",
        options: ["Іні","Немере","Ана","Бала","Шөпшек"],
        answer: "Іні"
    },
    {
        numb: "42",
        question: "Бірыңғай езулік жіңішке дауыстылардан болған сөзді белгілеңіз",
        options: ["Жоңышқа","Еріншек","Мүсәпір","Бүлдіршін","Бүлдірген"],
        answer: "Еріншек"
    },
    {
        numb: "43",
        question: "«У» дыбысы екі рет дауысты болған сөзді белгілеңіз",
        options: ["Жауласу","Таулық","Қауышу","Татуласу","Баулық"],
        answer: "Татуласу"
    },
    {
        numb: "44",
        question: "Қысаң дауыстылардың саны қанша екенін белгілеңіз",
        options: ["7","10","4","6","8"],
        answer: "6"
    },
    {
        numb: "45",
        question: "Тек қана жіңішке дауысты дыбыстары бар сөзді белгілеңіз",
        options: ["Оқушы","Сынақ","Кітап","Күнтізбе","Сынып"],
        answer: "Күнтізбе"
    },
    {
        numb: "46",
        question: "Бірыңғай қысаң дауысты сөзді көрсетіңіз",
        options: ["Баста","Қонақ","Іңір","Тағалы","Қаза"],
        answer: "Іңір"
    },
    {
        numb: "47",
        question: "Қысаң, езулік дыбысты көрсетіңіз",
        options: ["и","у","ө","а","о"],
        answer: "и"
    },
    {
        numb: "48",
        question: "Қазақ тілінде неше дауысты дыбыс бар екенін белгілеңіз",
        options: ["13","16","15","42","20"],
        answer: "15"
    },
    {
        numb: "49",
        question: "Бірыңғай еріндік дыбысты сөзді ажыратыңыз",
        options: ["Метр","Әңгіме","Көну","Білімді","Жеміс"],
        answer: "Көну"
    },
    {
        numb: "50",
        question: "Қай дауысты дыбыс әрі жуан, әрі ашық , әрі еріндік болатынын белгілеңіз",
        options: ["и","у","а","о","ы"],
        answer: "о"
    }
];