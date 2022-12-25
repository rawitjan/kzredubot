var title = 'Қазақ тілі | Зат есім'; 
var questionCount = 75; 
var timeValue = 45;
var answerMixing = true;
var deadLine = false;
var about = true;
let syllabus = '<div class=\"alert alert-primary\" role=\"alert\">Заттың атын білдіріп, кім? не? деген сұраққа жауап беретін сөздер <b>зат есім<\/b> деп аталады.<\/div>\r\n<table class=\"table table-bordered\"><tbody>\r\n<tr><td colspan=\"3\" style=\"text-align: center;\"><b>Зат есімнің бөлінуі<\/b><\/td><\/tr>\r\n<tr><td rowspan=\"2\" style=\"text-align: center;\">Тұлғасына қарай<\/td>\r\n    <td style=\"text-align: center;\">Негізгі зат есім<\/td><td>Бөлшектеуге келмейтін түбір зат есім. <br><small><i>Мысалы: құдық, жапырақ<\/i><\/small><\/td><\/tr>\r\n<tr><td style=\"text-align: center;\">Туынды зат есім<\/td><td>Түбір зат есімге және басқа сөз таптарына жұрнақ жалғану арқылы жасалған зат есім. <br><small><i>Мысалы: бора-н, тарс-ыл, жаман-шылық<\/i><\/small><\/td><\/tr>\r\n<tr><td rowspan=\"2\" style=\"text-align: center;\">Құрамына қарай<\/td>\r\n    <td style=\"text-align: center;\">Дара зат есім<\/td><td>Бір ғана түбірден тұрады.<br><small><i>Мысалы: от, оқушы, баспалдақ.<\/i><\/small><\/td><\/tr>\r\n<tr><td style=\"text-align: center;\">Күрделі зат есім<\/td><td>Кемінде екі сөзден \/ біріккен, қосарланған, қысқарған және тіркескен сөздер.<br><small><i>Мысалы: кемпірқосақ, ата-ана, ҚазМҰУ, мәдениет үйі<\/i><\/small><\/td><\/tr>\r\n<tr><td rowspan=\"2\" style=\"text-align: center;\">Жалпылай немесе жекелей аталуына қарай<\/td>\r\n    <td style=\"text-align: center;\">Жалпы есім<\/td><td>Біртектес заттардың атауы.<br><small><i>Мысалы:қала, өзен, тау, кісі,кітап<\/i><\/small><\/td><\/tr>\r\n<tr><td style=\"text-align: center;\">Жалқы есім<\/td><td>Біртектес заттардың өз ішіндегі жекелеген атаулары.<br><small><i>Мысалы:Алматы, Ертіс, Алатау, Абылай<\/i><\/small><\/td><\/tr>\r\n<tr><td rowspan=\"2\" style=\"text-align: center;\">Мағынасына қарай<\/td>\r\n    <td style=\"text-align: center;\">Деректі зат есім<\/td><td>Көзбен көріп, қолмен ұстауға болатын заттар мен құбылыстардың атаулары.<br><small><i>Мысалы:ағаш, қалам, су, домбыра, есік, сия т.б.<\/i><\/small><\/td><\/tr>\r\n<tr><td style=\"text-align: center;\">Дерексіз зат есім<\/td><td>Көзбен көріп, қолмен ұстауға келмейтін, тек оймен, ақылмен ғана сезіп білетін ұғымдардың атауы.<br><small><i>Мысалы: қайғы, арман, сана, қуаныш, жақсылық, реніш<\/i><\/small><\/td><\/tr>\r\n<\/tbody><\/table>Тілімізде 7 септік жалғау бар. Олар: атау септік, ілік септік, барыс септік, табыс септік, жатыс септік, шығыс септік, көмектес септік.<div class=\"alert alert-primary\" role=\"alert\"><b>Септік жалғаулары<\/b> — зат есімдердің мағыналарын түрлендіріп, оларды басқа сөздермен байланыстыратын қосымшалар. <br><small><i>Мысалы: Абай Найманның дауына билігін айтып қойған еді. (М.Ә.) Бұл сөйлемдегі Абай деген сөзді атау септік баяндауышпен (айтып қойған еді), Найманның дегендегі ілік септік ол сөзді тәуелдік жалғаулы сөзбен (дауын) байланыстырып, дауына дегендегі барыс септік, билігін дегендегі табыс септік ол сөзді айтып қойған еді деген етістікпен байланыстырып тұр.<\/i><\/small><\/div>\r\n<table class=\"table table-bordered\"><tbody>\r\n<tr><td>Септік атауы<\/td><td>Сұрақтары<\/td><td>Жалғаулары<\/td><\/tr>\r\n<tr><td>Атау<\/td><td>кім? не?<\/td><td><br><\/td><\/tr>\r\n<tr><td>Ілік<\/td><td>кімнің? ненің?<\/td><td>–ның, -нің, -дың, -дің, -тың, -тің<\/td><\/tr>\r\n<tr><td>Барыс<\/td><td>кімге? неге? қайда?<\/td><td>–ға, -ге, -қа, -ке<\/td><\/tr>\r\n<tr><td>Табыс<\/td><td>кімді? нені?<\/td><td>-ны, -ні, -ды, -ді, -ты, -ті<\/td><\/tr>\r\n<tr><td>Жатыс<\/td><td>кімде? неде? қайда?<\/td><td>–да, -де, -та, -те<\/td><\/tr>\r\n<tr><td>Шығыс<\/td><td>кімнен? неден? қайдан?<\/td><td>–нан, -нен, -тан, -тен, -дан, -ден<\/td><\/tr>\r\n<tr><td>Көмектес<\/td><td>кіммен? немен?<\/td><td>–мен, -бен, -пен<\/td><\/tr><\/tbody><\/table>';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: '﻿Жалпы есімді табыңыз',
                    answer: 'Тау',
                    options: ['Балқаш','Сырдария','Бетпақдала','Тау','Жамбыл']
                }
                ,
                {
                    numb: 2,
                    question: 'Туынды зат есімді көрсетіңіз',
                    answer: 'Еңбекші',
                    options: ['Еңбекті','Еңбекші','Еңбекпен','Еңбегің','Еңбектен']
                }
                ,
                {
                    numb: 3,
                    question: 'Туынды зат есім жасаушы қосымшаны көрсетіңіз',
                    answer: 'Кеңесші',
                    options: ['Сөйлем','Қолға','Мектеп','Әке','Кеңесші']
                }
                ,
                {
                    numb: 4,
                    question: 'Туынды зат есім жасаушы қосымшаны көрсетіңіз',
                    answer: 'Жұрнақ',
                    options: ['Септік жалғау','Көптік жалғау','Жіктік жалғау','Тәуелдік жалғау','Жұрнақ']
                }
                ,
                {
                    numb: 5,
                    question: 'Көптік жалғаулы зат есімді табыңыз',
                    answer: 'Гүлдер',
                    options: ['Гүлдер','Өлең','Өтірік','Шын','Есік']
                }
                ,
                {
                    numb: 6,
                    question: 'Синонимдік қатар құрайтын зат есімді табыңыз',
                    answer: 'Дәстүр, салт',
                    options: ['Суретші, сурет','Әдемі, сұлу','Жоғары, төмен','Дәстүр, салт','Ем,дәрі']
                }
                ,
                {
                    numb: 7,
                    question: 'Туынды зат есімді табыңыз',
                    answer: 'Жазушы',
                    options: ['Дүкен','Жерде','Айна','Жазушы','Ән']
                }
                ,
                {
                    numb: 8,
                    question: 'Керекті зат есімді табыңыз:<br><i> Мен дүкеннен жаңа ... сатып алдым</i>',
                    answer: 'Көйлек',
                    options: ['Сабақ','Үй','Көйлек','Дәптерде','Қаламның']
                }
                ,
                {
                    numb: 9,
                    question: 'Зат есімнің жалпы есім түрін табыңыз.',
                    answer: 'Ердің анасы-елі',
                    options: ['Алакөл маңы','Ердің анасы-елі','«Балдырған» журналы','Қазақстан Республикасы','Есіл өзені']
                }
                ,
                {
                    numb: 10,
                    question: 'Киім тігумен айналысатын адамды белгілеңіз',
                    answer: 'Тігінші',
                    options: ['Тігінші','Ұста','Хатшы','Басшы','Мұғалім']
                }
                ,
                {
                    numb: 11,
                    question: 'Туынды сөзді табыңыз',
                    answer: 'Жұмыскер',
                    options: ['Аң','Жұмыскер','Жол','Оқ','Ас']
                }
                ,
                {
                    numb: 12,
                    question: 'Тәуелдік жалғаулы зат есімді табыңыз',
                    answer: 'Аяғым',
                    options: ['Басқа','Аяғым','Кеудеден','Қолдың','Көзді']
                }
                ,
                {
                    numb: 13,
                    question: 'Негізгі зат есімді анықтаңыз',
                    answer: 'Адам',
                    options: ['Адам','Қойшы','Бұрғы','Жақсылық','Білім']
                }
                ,
                {
                    numb: 14,
                    question: 'Дерексіз зат есімді табыңыз',
                    answer: 'Алғашқы махабат',
                    options: ['Тұңғыш президент','Атақты ғалым','Алғашқы махабат','Алғашқы ұстаз','Жақсы адам']
                }
                ,
                {
                    numb: 15,
                    question: 'Күрделі жалқы есімді табыңыз',
                    answer: 'Қартқожа',
                    options: ['Астана','Жомарт','Тараз','Абай','Қартқожа']
                }
                ,
                {
                    numb: 16,
                    question: 'Туынды сөзді табыңыз',
                    answer: 'Оқушы',
                    options: ['Оқушы','Қол','Ана','Ас','Аға']
                }
                ,
                {
                    numb: 17,
                    question: 'Кім? деген сұрақ қай сөзге қойылатынын табыңыз',
                    answer: 'Бала',
                    options: ['Үй','Алма','Бала','Қоян','Гүл']
                }
                ,
                {
                    numb: 18,
                    question: 'Түбір сөзді табыңыз',
                    answer: 'Ауыл',
                    options: ['Бұрғы','Ойыншық','Ауыл','Атадан','Егін']
                }
                ,
                {
                    numb: 19,
                    question: 'Жер-су аттарына қатысты жалқы есімді табыңыз',
                    answer: 'Ақтөбе',
                    options: ['Төле би','Асанқайғы','Ботагөз','Ақтөбе','«Астана хабары»']
                }
                ,
                {
                    numb: 20,
                    question: 'Заттық ұғымды білдіретін сөз табын табыңыз',
                    answer: 'Зат есім',
                    options: ['Сан есім','Есімдік','Зат есім','Сын есім','Етістік']
                }
                ,
                {
                    numb: 21,
                    question: 'Зат есімді табыңыз',
                    answer: 'Қолөнер',
                    options: ['Екеу','Тарихи','Қызық','Кең','Қолөнер']
                }
                ,
                {
                    numb: 22,
                    question: 'Жұрнағы бар сөзді табыңыз',
                    answer: 'Басшы',
                    options: ['Шөп','Тұз','Құс','Басшы','Үй']
                }
                ,
                {
                    numb: 23,
                    question: 'Түбір сөзді табыңыз',
                    answer: 'Кісі',
                    options: ['Кісі','Апам','Дастарханға','Бауырының','Үйде']
                }
                ,
                {
                    numb: 24,
                    question: 'Жұрнақ жалғанған сөзді табыңыз',
                    answer: 'Жұмысшы',
                    options: ['Ағаң','Жұмысшы','Жұмыста','Жұмыстар','Кімсің']
                }
                ,
                {
                    numb: 25,
                    question: 'Табиғат тақырыбына сәйкес сөзді табыңыз',
                    answer: 'Бұтақ',
                    options: ['Оқушы','Бұтақ','Сабақ','Мектеп','Бала']
                }
                ,
                {
                    numb: 26,
                    question: 'Тырнақшаға алынып жазылатын жалқы есімді көрсетіңіз',
                    answer: 'Амангелді,Ақбота',
                    options: ['Абай, Балбырауын','Іле, Лепсі','Амангелді,Ақбота','Қарағанды, Жетісу','Балқаш, Зайсан']
                }
                ,
                {
                    numb: 27,
                    question: 'Негізгі зат есімді табыңыз',
                    answer: 'Әке',
                    options: ['Егін','Балықшы','Әке','Кітапхана','Бұрғы']
                }
                ,
                {
                    numb: 28,
                    question: 'Шығыс септігіндегі зат есімді табыңыз',
                    answer: 'Дәрігерден',
                    options: ['Сабақтар','Табысқа','Дәрігерден','Гүлді','Оқушының']
                }
                ,
                {
                    numb: 29,
                    question: 'Түбір сөздер қатарын табыңыз',
                    answer: 'Іні, аға, көке',
                    options: ['Күйші, биші','Қалқатай, шырағым','Іні, аға, көке','Әнші, суретші','Анашым, әкетай']
                }
                ,
                {
                    numb: 30,
                    question: 'Асыл тастармен жұмыс істейтін адамды белгілеңіз',
                    answer: 'Зергер',
                    options: ['Ұста','Зергер','Дәрігер','Мүсінші','Ұстаз']
                }
                ,
                {
                    numb: 31,
                    question: 'Ілік септігіндегі зат есімді табыңыз',
                    answer: 'Терезенің',
                    options: ['Түлкі','Радиодан','Иттер','Терезенің','Ағашқа']
                }
                ,
                {
                    numb: 32,
                    question: 'Әкеңнің шешесі сізге кім болатынын анықтаңыз',
                    answer: 'Әже',
                    options: ['Әпке','Тәте','Туыс','Нағашы әже','Әже']
                }
                ,
                {
                    numb: 33,
                    question: 'Жануарлардың ұйқыға кететін мезгілін көрсетіңіз',
                    answer: 'Қыс',
                    options: ['Күз','Көктем','Жаз','Қыркүйек','Қыс']
                }
                ,
                {
                    numb: 34,
                    question: 'Үй ішіне қатысты сөздерді табыңыз',
                    answer: 'Қабырға, төбе, есік',
                    options: ['Қабырға, төбе, есік','Тұлпар, күн сәулесі','Дәптер, кітап, сызғыш','Емен, қайың, шырша','Бөлме, қабат, терезе']
                }
                ,
                {
                    numb: 35,
                    question: 'Қыстың өзіне тән белгісін атаңыз',
                    answer: 'Қар',
                    options: ['Жауын','Жел','Шөп','Жаңбыр','Қар']
                }
                ,
                {
                    numb: 36,
                    question: 'Анаңның анасы сізге кім болатынын анықтаңыз',
                    answer: 'Нағашы әже',
                    options: ['Тәте','Апа','Әке','Нағашы әже','Әпке']
                }
                ,
                {
                    numb: 37,
                    question: 'Жұрнағы бар сөзді табыңыз',
                    answer: 'Көлшік',
                    options: ['Көл','Құс','Көлшік','Төсек','Қой']
                }
                ,
                {
                    numb: 38,
                    question: 'Жаз айын белгілеңіз',
                    answer: 'Маусым',
                    options: ['Маусым','Ақпан','Қыркүйек','Қазан','Мамыр']
                }
                ,
                {
                    numb: 39,
                    question: 'Қай түбір сөзге қосымша дұрыс жалғанғанын көрсетіңіз',
                    answer: 'Биші',
                    options: ['Күйшы','Қобызші','Домбырагер','Биші','Сауынші']
                }
                ,
                {
                    numb: 40,
                    question: 'Жұрнағы бар сөзді табыңыз',
                    answer: 'Оқулық',
                    options: ['Дәптерлер','Сыныбым','Оқулық','Жүр','Сен']
                }
                ,
                {
                    numb: 41,
                    question: 'Отбасы тақырыбына жатпайтын сөздер',
                    answer: 'Қол',
                    options: ['Әке','Апа','Қол','Қарындас','Шеше']
                }
                ,
                {
                    numb: 42,
                    question: 'Түбір сөзді табыңыз',
                    answer: 'Түн',
                    options: ['Асхана','Түн','Қалада','Көрсеткіш','Түндік']
                }
                ,
                {
                    numb: 43,
                    question: 'Қыс айларын анықтаңыз',
                    answer: 'Қаңтар, ақпан',
                    options: ['Қаңтар, ақпан','Маусым, шілде','Қазан, тамыз','Наурыз, сәуір','Мамыр, қыркүйек']
                }
                ,
                {
                    numb: 44,
                    question: 'Жұрнағы бар сөзді табыңыз',
                    answer: 'Аурухана',
                    options: ['Таулар','Доп','Ала-құла','Аурухана','Қара']
                }
                ,
                {
                    numb: 45,
                    question: 'Түбірлес сөздерді табыңыз',
                    answer: 'Жұмыс, жұмыскер',
                    options: ['Тал, қамқор','Құлыншақ, бота','Жұмыс, жұмыскер','Зат, доп','Қалам, бақша']
                }
                ,
                {
                    numb: 46,
                    question: 'Жұрнағы бар сөзді табыңыз',
                    answer: 'Кітапхана',
                    options: ['Үйдің','Көшеге','Даңғылдан','Кітапхана','Салтанатпен']
                }
                ,
                {
                    numb: 47,
                    question: 'Киіз үй сөз тіркесіне қойылатын сұрақты табыңыз',
                    answer: 'Не?',
                    options: ['Қашан?','Қайда?','Неге?','Ненің?','Не?']
                }
                ,
                {
                    numb: 48,
                    question: 'Түбір сөзді табыңыз',
                    answer: 'Ақыл',
                    options: ['Кәмпиттер','Бауырының','Ақылың','Дастарқанға','Ақыл']
                }
                ,
                {
                    numb: 49,
                    question: 'Түбірлес сөздерді табыңыз',
                    answer: 'Түн, түндік',
                    options: ['Жаз, орман','Орман, арман','Доп, ойыншық','Түн, түндік','Ақ, аға']
                }
                ,
                {
                    numb: 50,
                    question: 'Мектепке қатысты сөздерді табыңыз',
                    answer: 'сынып, қабат, жарық',
                    options: ['кең, таза, суретші','сынып, қабат, жарық','әдемі, сұлу, көрікті','шебер, тігінші, қоғам','көше, даңғыл, шағын аудан']
                }
                ,
                {
                    numb: 51,
                    question: 'Туынды зат есімді табыңыз',
                    answer: 'Сушы',
                    options: ['Сушы','Үйді','Көлдің','Кітапқа','Бала']
                }
                ,
                {
                    numb: 52,
                    question: 'Жұрнағы бар сөзді анықтаңыз',
                    answer: 'Елдік',
                    options: ['Елім','Елдік','Елмен','Елде','Еліміздің']
                }
                ,
                {
                    numb: 53,
                    question: 'Септік жалғаулы зат есімді анықтаңыз',
                    answer: 'Жердің',
                    options: ['Жердің','Аналар','Мапқсатым','Оқытушымын','Даласы']
                }
                ,
                {
                    numb: 54,
                    question: 'Туынды түбірді табыңыз',
                    answer: 'Бөлім',
                    options: ['Жапырақ','Бөлім','Мектеп','Арыстан','Мәдениет']
                }
                ,
                {
                    numb: 55,
                    question: '«Бала» сөзіне қосылатын қосымшаны анықтаңыз',
                    answer: '–лық',
                    options: ['–шы','–лық','–тың','–лік','–ші']
                }
                ,
                {
                    numb: 56,
                    question: 'Күрделі зат есімді табыңыз',
                    answer: 'Отбасы, саяжай, белбеу',
                    options: ['Балалар, оқушы, қыз','Отбасы, саяжай, белбеу','Қызыл, жасыл, көк','Ешкім, ештеңе, әлдекім','қыс, жаз, күз']
                }
                ,
                {
                    numb: 57,
                    question: 'Туынды түбірді анықтаңыз',
                    answer: 'Тазалық',
                    options: ['Жол','Тазалық','Сынып','Жаңа','Бол']
                }
                ,
                {
                    numb: 58,
                    question: 'Жұрнағы бар сөзді анықтаңыз',
                    answer: 'Мемлекеттік',
                    options: ['Мемлекетте','Мемлекеті','Мемлекеттік','Мемлекеттің','Мемлекетім']
                }
                ,
                {
                    numb: 59,
                    question: 'Жалқы есімді көрсетіңіз',
                    answer: 'Абай',
                    options: ['Абай','Білгіш','Орман','Оқушы','Кітап']
                }
                ,
                {
                    numb: 60,
                    question: 'Оқу құралдарын табыңыз',
                    answer: 'Қалам, сызғыш, кітап, дәптер',
                    options: ['Қалам, сызғыш, кітап, дәптер','Есік, тақта, шкаф, қабырға','Еден, терезе, желдеткіш','Ағаш, шөп, жапырақ , гүл','Асық , ойыншық , шаңғы, доп']
                }
                ,
                {
                    numb: 61,
                    question: 'Түбірлес сөздер тобын табыңыз',
                    answer: 'Паналау, панасыз, пана',
                    options: ['Күрес, тартыс, арпалыс','Үнемді, тиімді, пайдалы','Сұлу, әдемі, көркем','Паналау, панасыз, пана','Тіршілік, орталау, улы']
                }
                ,
                {
                    numb: 62,
                    question: 'Етістіктен жасалған туынды зат есімді табыңыз',
                    answer: 'Білім',
                    options: ['Белдік','Сағат','Білім','Кітап','Қызметкер']
                }
                ,
                {
                    numb: 63,
                    question: 'Негізгі зат есімді белгілеңіз',
                    answer: 'Дәптер',
                    options: ['Қолбасшы','Әуежай','Қолғап','Тілші','Дәптер']
                }
                ,
                {
                    numb: 64,
                    question: 'Жұрнақ арқылы жасалған зат есімді табыңыз',
                    answer: 'Балалық',
                    options: ['Дәптердің','Дәріге','Қаламмен','Балалық','Үйлер']
                }
                ,
                {
                    numb: 65,
                    question: 'Жұрнақ жалғанған сөзді анықтаңыз',
                    answer: 'Оқушылар',
                    options: ['Балалар','Оқушылар','Мұғалімге','Ақкөңіл','Сабыр']
                }
                ,
                {
                    numb: 66,
                    question: 'Деректі жалпы есімді көрсетіңіз',
                    answer: 'Ағаш',
                    options: ['Жел','Өмір','Ағаш','Көңіл','Ауа']
                }
                ,
                {
                    numb: 67,
                    question: 'Жалқы есімді табыңыз',
                    answer: 'Қарлыға',
                    options: ['Қарлыға','Дуадақ','Қарға','Сауысқан','Тауық']
                }
                ,
                {
                    numb: 68,
                    question: 'Негізгі зат есімді анықтаңыз',
                    answer: 'Адам',
                    options: ['Білім','Жақсылық','Адам','Қойшы','Бұрғы']
                }
                ,
                {
                    numb: 69,
                    question: 'Зат есімді көрсетіңіз',
                    answer: 'Жыл',
                    options: ['Өлең айт','Осында','Әдемі','Жыл','Сұр']
                }
                ,
                {
                    numb: 70,
                    question: 'Кім? сұрағына жауап беретін сөздердің қатарын анықтаңыз',
                    answer: 'Оқушы, сатушы, биші',
                    options: ['Сағат, мектеп, қалам','Кеше, бүгін, ертең','Әдемі, жақсы, таза','Оқушы, сатушы, биші','Бес, он бес, сегіз']
                }
                ,
                {
                    numb: 71,
                    question: 'Негізгі зат есімді белгілеңіз',
                    answer: 'Аяқ',
                    options: ['Жазу','Аяқ','Он алты','Бұлтты','Қара']
                }
                ,
                {
                    numb: 72,
                    question: 'Жалпы есімді табыңыз',
                    answer: 'Тау',
                    options: ['Абай','Алатау','Балқаш','Көкшетау','Тау']
                }
                ,
                {
                    numb: 73,
                    question: 'Күрделі зат есімді анықтаңыз',
                    answer: 'Азық-түлік',
                    options: ['Азық-түлік','Тағамдар','Нан','Сушы','Аспаз']
                }
                ,
                {
                    numb: 74,
                    question: 'Етістіктен жасалған туынды зат есіді табыңыз',
                    answer: 'Тарақ',
                    options: ['Қаламсыз','Тарақ','Еңбекші','Жерлес','Басшы']
                }
                ,
                {
                    numb: 75,
                    question: 'Дерексіз зат есімді белгілеңіз',
                    answer: 'Ой',
                    options: ['Оқушы','Бала','Ой','Ағаш','Кітап']
                }
                ,
];