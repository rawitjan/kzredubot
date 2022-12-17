var title = 'Мәдениеттану / 101-140'; 
var questionCount = 40; 
var timeValue = 60;
var answerMixing = true;
var deadLine = false;
var about = false;
let syllabus = '';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: '﻿Реформацияның басты тұлғаларының бірі:',
                    answer: 'М.Лютер',
                    options: ['М.Лютер','Ф.Бэкон','Б.Спиноза','Людовик ХІІ','Д.Дидро']
                }
                ,
                {
                    numb: 2,
                    question: 'Гуманизм дегеніміз',
                    answer: 'Адамсүйгіштік',
                    options: ['Адамсүйгіштік',' Танымал','Мәдениеттілік','Әдептілік','Батырлық']
                }
                ,
                {
                    numb: 3,
                    question: 'Жаратылыстан тыс қасиеті бар деп танылған жансыз затқа табыну қалай аталады?',
                    answer: ' Фетишизм',
                    options: [' Фетишизм','Анимизм','Тотемизм',' Магия','Шаманизм']
                }
                ,
                {
                    numb: 4,
                    question: 'Элитарлық мәдениет деген не?',
                    answer: 'Таңдаулылармәдениеті',
                    options: ['Таңдаулылармәдениеті','Халықтықмәдениет','Ұлттықмәдениет','Ортағасырмәдениеті','Бұқаралықмәдениет']
                }
                ,
                {
                    numb: 5,
                    question: 'Мәдениеттің баламасы не болып саналады?',
                    answer: 'табиғат',
                    options: ['табиғат','қала','дала','өнер','дін']
                }
                ,
                {
                    numb: 6,
                    question: '«Өркениет – мәдениеттің прогрессі, қоғамның парасаттылық деңгейі» деп санаған ойшылдар',
                    answer: 'Вольтер Ф. Белл Д.',
                    options: ['Вольтер Ф. Белл Д.','Тойнби А. Данилевский Н.','Гердер И. Тайлор Б. ','Руссо Ж. Шпенглер О.',' Гумилев Л. Хейзинга Й.']
                }
                ,
                {
                    numb: 7,
                    question: 'ХХ ғасырмәдениетінде қандай бағыт басым болып отыр',
                    answer: 'Европоцентризм',
                    options: ['Европоцентризм','Мұсылмандық','Христиандық','Коммунистік','Протестанттық']
                }
                ,
                {
                    numb: 8,
                    question: 'Ежелгі Грециядағы полис не?',
                    answer: 'қала-мемлекет',
                    options: ['қала-мемлекет',' әлеуметтік топ',' философиялық мектеп',' спорт түрі','өнер түрі']
                }
                ,
                {
                    numb: 9,
                    question: '«Мәдени орта» ұғымы мәдениеттің қандай функциясымен байланысты',
                    answer: 'коммуникациялық',
                    options: ['коммуникациялық','реттеушілік','танымдық','мұрагерлік','зерттеушілік']
                }
                ,
                {
                    numb: 10,
                    question: 'Мәдениет пен өркениет бір,олар синонимдер деп санағандар',
                    answer: 'Гердер И. Тейлор Б.',
                    options: ['Гердер И. Тейлор Б.',' Руссо Ж.Ж. Шпенглер О.',' Вольтер Ф. Белл Д.','Тойнби А. Данилевский И.','Морган. Гумилев Л.']
                }
                ,
                {
                    numb: 11,
                    question: 'Адамды «хайуани мадани» - мәдениетті жан деген кім?',
                    answer: 'Әл-Фараби.',
                    options: ['Әл-Фараби.','Әл-Кинди','ҚожаАхметЯссауи.','Абай','МахмұтҚашғари.']
                }
                ,
                {
                    numb: 12,
                    question: 'Мәдениеттің қызметтеріне не жатпайды?',
                    answer: ' Биологиялық эволюцияның қозғаушы күші қызметі',
                    options: [' Биологиялық эволюцияның қозғаушы күші қызметі','Ақпараттық қызмет','Адамды қалыптастыру қызметі','Жалғастық мұрагерлік қызметі.','Танымдық қызмет.']
                }
                ,
                {
                    numb: 13,
                    question: 'Көшпенділердің табиғатқа қатынасы',
                    answer: 'Табиғатқа бейімделушілер',
                    options: ['Табиғатқа бейімделушілер',' Табиғатты игерушілер','Табиғатты мойындамаушылар',' Табиғатты жеңгендер','Табиғатқа қарсылар']
                }
                ,
                {
                    numb: 14,
                    question: 'Жеке топтарға тән, негізгі мәдениеттен ерекше мәдениет түрі',
                    answer: 'Субмәдениет',
                    options: ['Субмәдениет','Электрондық мәдениет','Шығыс мәдениеті','Ұлттық мәдениет','Элитарлық мәдениет']
                }
                ,
                {
                    numb: 15,
                    question: 'ХХ ғасырда пайда болған әлемдік мәдениеттің ерекше түрі',
                    answer: 'Бұқаралық',
                    options: ['Бұқаралық','Ұлттық','Діни','Ауызша','Халықтық']
                }
                ,
                {
                    numb: 16,
                    question: '«Икебана» өнері қай халыққа тән',
                    answer: 'жапондарға',
                    options: ['жапондарға',' орыстарға','ағылшындарға',' қытайларға','түріктерге']
                }
                ,
                {
                    numb: 17,
                    question: ' «Өмір сүру – азап көру» - қай діннің қағидасы',
                    answer: 'Будда',
                    options: ['Будда','Ислам','Христиан','Иудаизмнің','Шаманизмнің']
                }
                ,
                {
                    numb: 18,
                    question: 'Ежелгі түріктердің көк бөріге табыну нанымы қандай құбылысқа жатады',
                    answer: 'Тотемизм',
                    options: ['Тотемизм','Анимизм','Магия',' Фетишизм','Шаманизм']
                }
                ,
                {
                    numb: 19,
                    question: '16-17 ғасырлардағы қазақтардың түсінігі бойынша үйдің қамқоршысы',
                    answer: ' От-ана',
                    options: [' От-ана','Жер-Ана','Су-ана','Ойсыл қара','Зеңгі баба']
                }
                ,
                {
                    numb: 20,
                    question: 'Тұмар көне діни сананың қай түрінің көрінісі',
                    answer: '  Фетишизмнің',
                    options: ['  Фетишизмнің','Магияның','Анимизмнің',' Көсемдерге табынудың','Тотемизмнің']
                }
                ,
                {
                    numb: 21,
                    question: 'Авеста қай халықтың тарихи туындысы',
                    answer: 'Ежелгі Иранның',
                    options: ['Ежелгі Иранның',' Ежелгі Египеттің',' Индияның',' Вавилонның','Ассирияның']
                }
                ,
                {
                    numb: 22,
                    question: 'Гладиаторлар шайқасы қай елде өнер ретінде дамыды?',
                    answer: ' Римде',
                    options: [' Римде','Персияда','Египетте',' Мысырда',' Монголияда']
                }
                ,
                {
                    numb: 23,
                    question: 'Қорқыт мәңгілік өмірді неден тапты?',
                    answer: 'Қобыздың сарынынан',
                    options: ['Қобыздың сарынынан',' Өлімнен қашудан','Қорқыттың көрінен','Сырдариядан','Жерұйықтан']
                }
                ,
                {
                    numb: 24,
                    question: 'Рубайяттардың авторы',
                    answer: 'О.Хайям',
                    options: ['О.Хайям',' Ж.Баласағұни','Хафиз','Новаи','Тұрсын-заде']
                }
                ,
                {
                    numb: 25,
                    question: 'Сақ  өркениетінің  өнеріндегі  басты  стиль  қалай  аталады',
                    answer: 'Жануарлық',
                    options: ['Жануарлық','Готика',' Романдық','Барокко','Арабесса']
                }
                ,
                {
                    numb: 26,
                    question: 'Сублимация, либидо  терминдерін  кімнің  мәдениеттанулық  концепциясынан  кездестіреміз',
                    answer: 'Фрейд',
                    options: ['Фрейд',' Фромм',' Тойнби',' Юнг','Малиновский']
                }
                ,
                {
                    numb: 27,
                    question: 'Қазақ  совет  мәдениетінің  белгілі  қайраткерлерін  атап  өтіңіз',
                    answer: 'Жамбыл, Сейфуллин, Әуезов',
                    options: ['Жамбыл, Сейфуллин, Әуезов','Абай, Жамбыл, Әуезов','Шәкәрім, Міржақып','Нұрпейісова, Құрманғазы, Дәулеткерей',' Уәлиханов, Абай, Алтынсарин']
                }
                ,
                {
                    numb: 28,
                    question: 'Инь және ян  ұғымдары  нені  білдіреді',
                    answer: 'Әйелдік  және  еркектік  бастаманы',
                    options: ['Әйелдік  және  еркектік  бастаманы','Табиғи  циклдарды','Ғарыштық  үйлесімділікті','Тәрбиелік  принципін','Буддизм ұғымдарын']
                }
                ,
                {
                    numb: 29,
                    question: 'Қай  сөз  киіз  үйдің  бөлігін  білдірмейді',
                    answer: 'ошақ',
                    options: ['ошақ',' кереге','уық','щаңырақ','туырлық']
                }
                ,
                {
                    numb: 30,
                    question: 'Катарсис  ұғымы  нені білдіреді ',
                    answer: 'жанның  қасірет арқылы  тазаруын',
                    options: ['жанның  қасірет арқылы  тазаруын','төзімділік','ләззат','бақыт','ойын-сауық']
                }
                ,
                {
                    numb: 31,
                    question: 'Қазақтарда обал түсінігінің қарсы  ұғымы',
                    answer: 'сауап',
                    options: ['сауап','ысырап','дауа','зауал',' шипа']
                }
                ,
                {
                    numb: 32,
                    question: 'Вестернизация деген не',
                    answer: 'батыстандыру',
                    options: ['батыстандыру','мәдени сұхбат','азаматтық қоғам','мәдени қозғалыс','мәдени аймақ']
                }
                ,
                {
                    numb: 33,
                    question: 'Зар  заман  мәдениеті  қай  ғасырда  көрініс  тапты',
                    answer: '18-19 ғғ',
                    options: ['18-19 ғғ','12 ғ','14 ғ',' 16 ғ','17 ғ']
                }
                ,
                {
                    numb: 34,
                    question: 'Мәдениеттану пәні жоғары оқу орындарының оқу жоспарына қашан енгізілді ?',
                    answer: '1990 ж.',
                    options: ['1990 ж.','ХХ ғ. басында.','2000 ж.','80-жылдардың екінші жартысында.','1917 ж.']
                }
                ,
                {
                    numb: 35,
                    question: 'Еуропалық дәстүрде мәденетке қарсы қойылған ұғым:',
                    answer: 'Өркениет',
                    options: ['Өркениет','Қоғам','Тағылық','Варварлық','Надандық']
                }
                ,
                {
                    numb: 36,
                    question: 'Адамның басқа тіршілік иелерімен негізігі айырмашылығы неде?',
                    answer: 'Мәдениет',
                    options: ['Мәдениет','Сезім','Әрекет','Жан','Эмоция']
                }
                ,
                {
                    numb: 37,
                    question: '«Диалог» ұғымы қай ғалымның мәдениеттанулық концепциясының негізінде ғылыми айналымға түсті?',
                    answer: ' М.Бахтин',
                    options: [' М.Бахтин',' М. Бубер.','Розенцвейг',' Вл.Соловьев','Э.Мунье.']
                }
                ,
                {
                    numb: 38,
                    question: '«Менталитет» ұғымы мәдениеттің қай деңгейімен тығыз байланысты?',
                    answer: 'Ұлттық мәдениет',
                    options: ['Ұлттық мәдениет','Суперөркениет','Субмәдениет','Әлемдік мәдениет','Рухани мәдениет']
                }
                ,
                {
                    numb: 39,
                    question: 'Жазбаша мәдениет тұңғыш қай өркениетте пайда болды?',
                    answer: 'Шумер және Египетте',
                    options: ['Шумер және Египетте','Антиктік мәдениетте','Египетте','Үнді мен Қытайда','Римде']
                }
                ,
                {
                    numb: 40,
                    question: 'Шумерлік жазу қалай аталады?',
                    answer: 'Петроглифтік',
                    options: ['Петроглифтік',' Иероглифтік','Сыналық',' Алфавиттік',' Пиктограммалық']
                }
                ,
];
showqa();