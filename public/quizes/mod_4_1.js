var title = 'Психология / 1-50'; 
var questionCount = 50; 
var timeValue = 60;
var answerMixing = true;
var deadLine = false;
var about = false;
let syllabus = '';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: '﻿Психология ғылымының классификациясы:',
                    answer: 'Психикалық процестер, жағдайлар, қасиеттер.',
                    options: ['Психикалық процестер, жағдайлар, қасиеттер.','Іс-әрекет пен сана бірлігі.','Детерминизм, даму.','Инженерлік, заң, спорт, өнер, салыстырмалы.','Экстерорецепторлар, интерорецепторлар.']
                }
                ,
                {
                    numb: 2,
                    question: 'Ойлау операциялары қай топта анық берілген:',
                    answer: 'Анализ, салыстыру, синтез, жалпылау, абстракциялау.',
                    options: ['Анализ, салыстыру, синтез, жалпылау, абстракциялау.','Индукция, синтез, ұғым, жалпылау.','Анализ, дедукция, синтез, абстракция, пікір.','Салыстыру, жалпылау, анализ, ой қорытындысы.','Топтау, жіктеу, синтез, ой қорытындысы.']
                }
                ,
                {
                    numb: 3,
                    question: 'Бір адамды екінші бір адамнан ажыратуға негіз болатын ең маңызды, ең тұрлаулы ерекшеліктер:',
                    answer: 'психикалық қасиеттер',
                    options: ['психикалық қасиеттер','психикалық кейіп','психикалық үрдістер','психикалық жағдайлар','психикалық күй']
                }
                ,
                {
                    numb: 4,
                    question: 'Психология ғылым ретінде қалыптасуы:',
                    answer: '19 ғ. аяғы',
                    options: ['19 ғ. аяғы','16 ғ.аяғы','15 ғ. ортасы','17 ғ. басы','15 ғ. аяғы']
                }
                ,
                {
                    numb: 5,
                    question: 'Естің физиологиялық негізін түсіндіретін басты теория:',
                    answer: 'Ассоциациялық байланыстар.',
                    options: ['Ассоциациялық байланыстар.','Доминанта','Көрнекі-бейнелі жаңғырту.','Анализаторлардың қызметі.','Қозудың оптимальды ошағы.']
                }
                ,
                {
                    numb: 6,
                    question: 'Қабілеттіліктің дамуының негізгі физиологиялық ерекшелігі:',
                    answer: 'нышан',
                    options: ['нышан','темперамент','ойлау','дарындылық','арнайы қабілет']
                }
                ,
                {
                    numb: 7,
                    question: 'Дарындылық бұл:',
                    answer: 'қабілет түрі',
                    options: ['қабілет түрі','қажеттілік','мінез бітісі','жоғары сезім','қиял түрі']
                }
                ,
                {
                    numb: 8,
                    question: 'Психология ғылымының зерттеу әдістері:',
                    answer: 'Әңгімелесу, анкета, тест, социометрия, бақылау.',
                    options: ['Әңгімелесу, анкета, тест, социометрия, бақылау.','Инетикалық, салыстырмалы.','Детерминизм, іс-әрекет пен сана бірлігі, даму.','Психикалық процестер, жағдайлар, қасиеттер.','Инженерлік, заң, спорт, өнер, салыстырмалы.']
                }
                ,
                {
                    numb: 9,
                    question: 'Апперцепция дегеніміз не:',
                    answer: 'Қабылдаудың адамның жалпы психикалық тұрмысы мен өткен тәжірибесінің мазмұнына байланыстырылған.',
                    options: ['Қабылдаудың адамның жалпы психикалық тұрмысы мен өткен тәжірибесінің мазмұнына байланыстырылған.','Түрлі себептерге байланысты шындықтағы объектілерді қате қабылдау.','Сыртқы жағдайдың өзгеруіне қарамастан - заттардың кейбір қасиеттерінің бір қалыпты болып қабылдануы.','Толып жатқан объектілердің ішінен біреуін керектісін іріктеуіміз.','Заттарды немесе құбылыстардың мәніне, мазмұнына байланысты бөліктерге бөліп қабылдау.']
                }
                ,
                {
                    numb: 10,
                    question: 'Төменде көрсетілген психологтардың қайсысы топтық қарым-қатынасты зеттеуге «социометриялық» әдісті ұсынған ғылым:',
                    answer: 'Дж. Морено',
                    options: ['Дж. Морено','Д.Векслер','Ч. Осгуд','Г.Айзенк','М.Люшер']
                }
                ,
                {
                    numb: 11,
                    question: 'Адам мен жануарлардың психологиялық ерекшеліктеріндегі айырмашылықтарды зерттейтін психология ғылымының саласы:',
                    answer: 'салыстырмалы психология',
                    options: ['салыстырмалы психология','тифлопсихология','жас ерекшелігі','олигофренопсихология','педагогикалық психология']
                }
                ,
                {
                    numb: 12,
                    question: 'Адамның түрлі көңіл күйінің тұрақты компоненттерін білдіретін психикалық құбылыс:',
                    answer: 'психикалық кейіп немесе күй',
                    options: ['психикалық кейіп немесе күй','психикалық қасиет','психикалық үрдіс','психикалық құбылыс','психикалық жағдай']
                }
                ,
                {
                    numb: 13,
                    question: 'Ой арқылы түрлі заттар мен құбылыстардың мәнді жақтарын жеке бөліктерге бөлу:',
                    answer: 'Анализ',
                    options: ['Анализ','Синтез','Абстракция','Нақтылау','Жалпылау']
                }
                ,
                {
                    numb: 14,
                    question: 'Сыртқы дүние заттары мен құбылыстарының байланыс - қатынастарының миымызда жалпылай және жанама түрде сөз арқылы бейнеленуі:',
                    answer: 'Ойлау',
                    options: ['Ойлау','Қиял','Сөйлеу','Қабылдау','Түйсік']
                }
                ,
                {
                    numb: 15,
                    question: 'Нерв жүйесінің физиологиялық негіздері қандай:',
                    answer: 'Қозу, тежелу.',
                    options: ['Қозу, тежелу.','Иррадация, концентрация.','Күрделі, қарапайым.','Анализ, синтез.','Салыстыру, нақтылау.']
                }
                ,
                {
                    numb: 16,
                    question: 'Ес процестерінің негізі болып табылатын байланыстарды психологияда қалай атайды:',
                    answer: 'ассоциация',
                    options: ['ассоциация','операция','мнемоника','рефлекция','аккомодация']
                }
                ,
                {
                    numb: 17,
                    question: 'Сенсебелизация - бұл...:',
                    answer: 'анализаторлардың өзара әрекет нәтижесінде сезгіштіктің артуы',
                    options: ['анализаторлардың өзара әрекет нәтижесінде сезгіштіктің артуы','қоршаған ортаға бейімделу барысында сезгіштіктің төмендеуі','бір анализатордан басқа анализаторға тән түйсінудің пайда болуы','дене перефереясында орналасқан анатомо -физиологиялық аппарат','әрдайым әрекетте болатын тітіркендіргішке сезгіштіктің төмендеуі']
                }
                ,
                {
                    numb: 18,
                    question: 'Психика деген не:',
                    answer: 'Адам миының жоғарғы дәрежедегі қызметі.',
                    options: ['Адам миының жоғарғы дәрежедегі қызметі.','Жануарлардың сенсорлық әрекеті.','Жан туралы ілім.','Психологияның зерттеу әдістері.','Мидың құрылысы.']
                }
                ,
                {
                    numb: 19,
                    question: 'Психология ғылымы нені зерттейді:',
                    answer: 'Адамның жеке адам ретіндегі психикасының даму заңдылықтарын.',
                    options: ['Адамның жеке адам ретіндегі психикасының даму заңдылықтарын.','Сананың даму заңдылығын.','Психология ғылымының салаларын.','Адамдардың психологиялық ерекшеліктерін зерттеу.','Бала психологиясының дамуын зерттейді.']
                }
                ,
                {
                    numb: 20,
                    question: 'Эксперимент әдісінің түрлері:',
                    answer: 'Табиғи, лабораториялық.',
                    options: ['Табиғи, лабораториялық.','Күрделі, қарапайым.','Аспапты, аспапсыз.','Негізгі, қосымша.','Арнаулы, жалпы.']
                }
                ,
                {
                    numb: 21,
                    question: 'Шетел психологиясының негізгі ағымдары:',
                    answer: 'Бихевиоризм, гештальтизм, психоанализ.',
                    options: ['Бихевиоризм, гештальтизм, психоанализ.','Инстинкт, дағды, интеллект.','Бақылау, эксперимент.','Табиғи, лабораториялық.','Модельдеу, анкеталық.']
                }
                ,
                {
                    numb: 22,
                    question: 'Қабілеттілікке жатпайды:',
                    answer: 'мінез',
                    options: ['мінез','талант','дарындылық','нышан','бейімділік']
                }
                ,
                {
                    numb: 23,
                    question: 'Іс-әрекет және қарым-қатынас барысында қалыптасқан жеке адамның тұрақты дара ерекшелігінің жиынтығы:',
                    answer: 'мінез',
                    options: ['мінез','темперамент','қабілет','нышан','еңбек']
                }
                ,
                {
                    numb: 24,
                    question: 'Психикалық процестер деген не:',
                    answer: 'Сыртқы тітіркендіргіштердің адамның сезім мүшелеріне әсер етуі арқылы мида бейнеленуі.',
                    options: ['Сыртқы тітіркендіргіштердің адамның сезім мүшелеріне әсер етуі арқылы мида бейнеленуі.','Сезім мен эмоцияны дамыту.','Көңіл-күйдің тұрақты белгілері.','Адамның қайталанбайтын даралық ерекшелігі.','Индивидтің қалыптасуы.']
                }
                ,
                {
                    numb: 25,
                    question: 'Психикалық қасиеттерге не жатады:',
                    answer: 'Мінез, темперамент, қабілет.',
                    options: ['Мінез, темперамент, қабілет.','Ойлау, сөйлеу, қабылдау.','Сезім, эмоция.','Түйсік, ойлау.','Қабылдау, ес.']
                }
                ,
                {
                    numb: 26,
                    question: 'Адамның ақыл-ой әрекетінің әуелде сыртқы заттық әрекет түрінде көрініп, бірте-бірте ішкі психикалық амалға ауысуын көрсеткен ғалымдар:',
                    answer: 'Л.С.Выготский, А.Н.Леонтьев, П.Я.Гальперин',
                    options: ['Л.С.Выготский, А.Н.Леонтьев, П.Я.Гальперин','П.К.Анохин, С.Л. Рубинштейн, Б.Г.Ананьев','Б.М.Кедров, Б.М.Теплов, Б.Ф.Ломов','И.М.Сеченов, А.А.Ухтомский, К.М.Быков','Н.И.Красногорский, Б.М.Теплов, А.Н.Леонтьев']
                }
                ,
                {
                    numb: 27,
                    question: 'Байсалды, ұстамды, еңбекқор, қызмет етуде сабырлы және төзімді, қозу мен тежелуі бір-біріне тең, баяу қозғалғыш қасиеттері қай тип темпераментіне тән:',
                    answer: 'флегматик',
                    options: ['флегматик','сангвиник','холерик','меланхолик','атлетик']
                }
                ,
                {
                    numb: 28,
                    question: 'Аристотельдің психология туралы еңбегі қалай аталады:',
                    answer: '«Жан туралы».',
                    options: ['«Жан туралы».','«Жан жүйесі және өнер таңдау».','«Психология».','«Педагогика».','«Адам-тәрбие құралы».']
                }
                ,
                {
                    numb: 29,
                    question: '«Психология – сана туралы ғылым» - деген түсінік қай кезеңде, қандай ғылымдардың дамуымен байланысты қалыптасты:',
                    answer: 'XIX ғасырда, философия.',
                    options: ['XIX ғасырда, философия.','XIX ғасырда, политология.','XIX ғасырда, жаратылыстану.','XVII ғасыр, кибернетика.','XVII ғасыр, социология.']
                }
                ,
                {
                    numb: 30,
                    question: '«Стресс» сөзін алғаш қолданған ғалым:',
                    answer: 'Ганс Селье',
                    options: ['Ганс Селье','С.Шехнер','Д.О.Хеббу','К.Ланге','Л.Фестингер']
                }
                ,
                {
                    numb: 31,
                    question: 'Бақылау әдісіне қойылатын талаптардың бірі:',
                    answer: 'Мақсаттылығы.',
                    options: ['Мақсаттылығы.','Жалпы зерттеу жүргізу.','Ойлау процесін зерттеу.','Адамның өзінің өзіне зерттеу жүргізуі.','Аспаптарды қолданып зерттеу жүргізу.']
                }
                ,
                {
                    numb: 32,
                    question: 'Топтың түрлері қандай:',
                    answer: 'Нақты, шартты, үлкен, кіші, референт.',
                    options: ['Нақты, шартты, үлкен, кіші, референт.','Лидерлік, ұжымдық.','Контактілі, негізгі.','Ғылыми, қоғамдық.','Кәсіби, қоғамдық.']
                }
                ,
                {
                    numb: 33,
                    question: 'Адамды белсенді әрекетке итермелейтін:',
                    answer: 'түрткі',
                    options: ['түрткі','ерік','еріктік күш жігер','бағыттылық','мақсаттылық']
                }
                ,
                {
                    numb: 34,
                    question: 'Онтогенездегі даму, ол ...:',
                    answer: 'адамның туғаннан өлгенге дейінгі дамуы',
                    options: ['адамның туғаннан өлгенге дейінгі дамуы','өмірдегі зерделі жастағы кезеңдегі даму','адамның іште жатқан кезде дамуы','жеткіншек кезеңіндегі даму','балалық кезеңіндегі даму']
                }
                ,
                {
                    numb: 35,
                    question: 'Зейіннің обьектіге шоғырлануға қабілетсіздігі:',
                    answer: 'Шашыраңқылық',
                    options: ['Шашыраңқылық','Рефлекция','Тітіркенушілік','Реминисценция','Релаксация']
                }
                ,
                {
                    numb: 36,
                    question: 'Техникамен айналысатын адамдардың психологиясын зерттейтін сала:',
                    answer: 'Инженерлік',
                    options: ['Инженерлік','Ғарыш.','Заң','Математикалық әдіс.','Модельдеу.']
                }
                ,
                {
                    numb: 37,
                    question: 'Салыстырмалы психология саласы нені зерттейді:',
                    answer: 'Адам мен жануар психикасын зерттеу.',
                    options: ['Адам мен жануар психикасын зерттеу.','Жануар психикасын зерттеу.','Адамдардың психикасын жас кезеңдеріне қарай анықтау.','Адамдардың сөйлеу ерекшелігін зерттеу.','Адамның ойлау ерекшелігін зерттеу.']
                }
                ,
                {
                    numb: 38,
                    question: 'Аффект көрсеткіші:',
                    answer: 'еріктің өз әрекетіне бақылауының бұзылуы',
                    options: ['еріктің өз әрекетіне бақылауының бұзылуы','сананың аздап өзгеруі','өзін-өзі ұстауды сақтау','еріктің өз әрекетіне бақылауының сақталуы','қобалжу']
                }
                ,
                {
                    numb: 39,
                    question: 'Сыртқы заттық іс-әрекеттің ішкі психикалық әрекетке ауысуы қалай аталады:',
                    answer: 'интериоризация',
                    options: ['интериоризация','экстериоризация','интерференция','интроспекция','интеракция']
                }
                ,
                {
                    numb: 40,
                    question: 'Жеке адамның құрылымы:',
                    answer: 'Бағыттылығы, қызығуы, мүмкіндігі.',
                    options: ['Бағыттылығы, қызығуы, мүмкіндігі.','Кәсіптік, ғылымилық, қоғамдық.','Білімі, іс-тәжірибесі.','Мамандық, кәсіптік.','Бағыттылығы, білім, дағды, даралық- типтік ерекшелігі.']
                }
                ,
                {
                    numb: 41,
                    question: 'Шетел психологиясының негізгі ағымдары:',
                    answer: 'Бихевиоризм, гештальтизм, психоанализ.',
                    options: ['Бихевиоризм, гештальтизм, психоанализ.','Инстинкт, дағды, интеллект.','Бақылау, эксперимент.','Табиғи, лабораториялық.','Модельдеу, анкеталық.']
                }
                ,
                {
                    numb: 42,
                    question: '3ейінді бір объектіге тұрақтандырып, сонымен қатар бірнеше іс-әрекет түрлерімен айналысу зейіннің қай қасиетін білдіреді:',
                    answer: 'зейіннің бөлінушілігін',
                    options: ['зейіннің бөлінушілігін','зейіннің тұрақтылығын','зейіннің алаң болушылығы','зейіннің аударылуын','зейіннің көлемін']
                }
                ,
                {
                    numb: 43,
                    question: 'Іс-әрекеттің негізгі түрлері:',
                    answer: 'ойын, оқу, еңбек',
                    options: ['ойын, оқу, еңбек','ойын, еңбек','еңбек, қарым-қатынас','дұрыс жауап жоқ','іскерлік пен дағды']
                }
                ,
                {
                    numb: 44,
                    question: 'Интеллект деген не:',
                    answer: 'Ақыл-ойдың дамуы.',
                    options: ['Ақыл-ойдың дамуы.','Мидың дамуы.','Сөйлеудің дамуы.','Сезімнің дамуы.','Түйсіну.']
                }
                ,
                {
                    numb: 45,
                    question: 'Инстинкт деген не:',
                    answer: 'Туа пайда болатын шартсыз рефлекстер тізбегі.',
                    options: ['Туа пайда болатын шартсыз рефлекстер тізбегі.','Мінез-құлық.','Темперамент.','Қабілет.','Шартты рефлекстің дамуы.']
                }
                ,
                {
                    numb: 46,
                    question: 'Гештальтпсихологияның мақсаты қандай:',
                    answer: 'Психикалық құбылыстардың принциптерін тұтас түсіндіру.',
                    options: ['Психикалық құбылыстардың принциптерін тұтас түсіндіру.','Тәртіп-қылықты зерттеу.','Психоанализді зерттеу.','З.Фрейд ілімдерін уағыздау.','Торндайк дамытқан ілім.']
                }
                ,
                {
                    numb: 47,
                    question: 'Ойлау, сөйлеу, ес, қиял, қабылдау психология ғылымының қандай классификациясына жатады:',
                    answer: 'Психикалық процесс.',
                    options: ['Психикалық процесс.','Психикалық жағдай.','Психикалық қасиет.','Психикалық даму.','Психикалық бейне.']
                }
                ,
                {
                    numb: 48,
                    question: 'Сыртқы заттар мен құбылыстардың адамның сезім мүшелеріне әсер ете отыра миында бейнеленуі қандай теория:',
                    answer: 'Бейнелеу',
                    options: ['Бейнелеу','Доминанта','Өріс','Ассоциация.','Биологиялық.']
                }
                ,
                {
                    numb: 49,
                    question: 'Егер әрекетті бірнеше рет ұзақ қайталанып, жаттықтырылса, онда не қалыптасады:',
                    answer: 'дағды',
                    options: ['дағды','іскерлік','әдет','қылық','мінез-құлық']
                }
                ,
                {
                    numb: 50,
                    question: 'Өзіне тән білімі, іс-тәжірибесі бар, қоғамда, ұжымда өмір сүретін адам:',
                    answer: 'Жеке тұлға.',
                    options: ['Жеке тұлға.','Ұстаз','Даралық.','Адам.','Индивид.']
                }
                ,
];
