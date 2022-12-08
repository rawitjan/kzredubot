var title = 'Педагогика 51-100'; 
var questionCount = 50; 
var timeValue = 45;
var answerMixing = true;
var deadLine = false;
var about = false;
let syllabus = '';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: '﻿Адамның қоғамға тән құндылықтарды, нормаларды, ережелерді, мінез-құлық үлгілерін игеруі, қоғамдық тәжірибеге ие болуы, рухани дамып, әлеуметтік жан ретінде қалыптасуы:',
                    answer: 'әлеуметтену',
                    options: ['әлеуметтену','тәрбие','бейімделу','даму','жетілу']
                }
                ,
                {
                    numb: 2,
                    question: 'Саналы, жоғары психикалық функцияларға ие, сөйлеуге қабілетті, еңбек ететін биоәлеуметтік тіршілік иесі:',
                    answer: 'адам',
                    options: ['адам','индивид','даралық','тұлға','қоғам мүшесі']
                }
                ,
                {
                    numb: 3,
                    question: 'Адамзат тұқымының жалпы генотиптік қасиеттерін тасымалдаушы биологиялық тіршілік иесі:',
                    answer: 'индивид',
                    options: ['индивид','адам','даралық','тұлға','қоғам мүшесі']
                }
                ,
                {
                    numb: 4,
                    question: 'Адамды басқа адамдардан ерекшелендіріп тұратын айрықша қасиеттері, ешкімге ұқсамастығы, оның қайталанбастығы:',
                    answer: 'даралық',
                    options: ['даралық','индивид','адам','тұлға','қоғам мүшесі']
                }
                ,
                {
                    numb: 5,
                    question: 'Әлеуметтік қатынастар мен саналы іс-әрекеттің субъектісі ретіндегі жеке адам:',
                    answer: 'тұлға',
                    options: ['тұлға','даралық','индивид','қайраткер','қоғам мүшесі']
                }
                ,
                {
                    numb: 6,
                    question: 'Педагогикада «тұлға» түсінігінің кең мағынада қолданылуы:',
                    answer: 'жеке адам',
                    options: ['жеке адам','тірі ағза','адамның сана-сезімі','мәдениетті жан','басқадан өзгешелігі']
                }
                ,
                {
                    numb: 7,
                    question: 'Тұлға:',
                    answer: 'қоғамда белгілі бір жағдайға ие, белгілі бір қоғамдық рөл атқаратын саналы индивид',
                    options: ['қоғамда белгілі бір жағдайға ие, белгілі бір қоғамдық рөл атқаратын саналы индивид','биологиялық тіршілік иесі','бір адамның екінші адамнан айырмашылығы','адамның жеке сапалық қасиеттерінің көрінуі','жер бетінде тірі организмнің даму деңгейі']
                }
                ,
                {
                    numb: 8,
                    question: 'Тұлға өзін мынандай бағыттарда көрсете алады:',
                    answer: 'іс-әрекетте, басқалармен қарым-қатынаста, өзіне деген қатынаста',
                    options: ['іс-әрекетте, басқалармен қарым-қатынаста, өзіне деген қатынаста','іс-әрекетте, басқалармен қарым-қатынаста','басқалармен қарым-қатынаста, өзіне деген қатынаста','қоғамдық қатынаста, әлеуметтік қатынаста','биологиялық қатынаста, әлеуметтік қатынаста']
                }
                ,
                {
                    numb: 9,
                    question: 'Тұлғаның қалыптасуына әсер ететін факторлар:',
                    answer: 'тұқым қуалаушылық, орта, тәрбие,',
                    options: ['тұқым қуалаушылық, орта, тәрбие,','табиғат, климат, ғаламтор','тәрбиелеу, өзін-өзі тәрбиелеу, өзін-өзі тану','отбасы, құрбы-құрдас, қоғам','мектеп, аула, елді-мекен']
                }
                ,
                {
                    numb: 10,
                    question: 'Жеке тұлғаны қалыптастыруға сырттай ықпал ететін факторлардың ең бастысы:',
                    answer: 'тәрбие',
                    options: ['тәрбие','материалдық тұрақтылық','өркениеттің даму деңгейі','бұқаралық ақпарат құралдары','әлеуметтік еркіндік']
                }
                ,
                {
                    numb: 11,
                    question: 'Бала бойындағы ата-анасынан немесе ата-бабаларынан қалған биологиялық ерекшеліктерінің жиынтығы, тәрбиені қалыптастырудың іргетасы:',
                    answer: 'тұқым қуалаушылық',
                    options: ['тұқым қуалаушылық','орта','тәрбие','индивид','гендерлік саясат']
                }
                ,
                {
                    numb: 12,
                    question: 'Ата-анадан балаға тұқымқуалаушылық арқылы берілді:',
                    answer: 'нышан, адамның жеке қабілеті',
                    options: ['нышан, адамның жеке қабілеті','мінез-құлық белгілері','дүниетаным','ойлаудың сындарлығы','адамдарға қарым-қатынас']
                }
                ,
                {
                    numb: 13,
                    question: 'Ата-аналардың қандай қасиеттері балаларына беріледі:',
                    answer: 'жүйке жүйесінің типі',
                    options: ['жүйке жүйесінің типі','әлеуметтік көзқарасы','зияткерлік әрекет ерекшеліктері','адамгершілік сапалары','моральдік қасиеттері']
                }
                ,
                {
                    numb: 14,
                    question: 'Адам мен қоғам өміріндегі әлеуметтік-экономикалық, тарихи қалыптасқан жағдайлар:',
                    answer: 'орта',
                    options: ['орта','тұқым қуалаушылық','тәрбие','мемлекет','саясат']
                }
                ,
                {
                    numb: 15,
                    question: 'Өзін-өзі тәрбиелеу:',
                    answer: 'адамның алдына қойған мақсаттарға, идеал-сенімдерге сәйкес өзгертуге бағытталған саналы іс-әрекеті',
                    options: ['адамның алдына қойған мақсаттарға, идеал-сенімдерге сәйкес өзгертуге бағытталған саналы іс-әрекеті','ұрпақтар тәжірибесін меңгерудегі өзін-өзі ұйымдастырудың жүйесі','ескірген іс-әрекеттің жойылуы, жаңаның пайда болуы','іс-әрекет тәсілдерін мақсатты түрде меңгеру','өзгенің ықпал етуі']
                }
                ,
                {
                    numb: 16,
                    question: 'Бала тұлғасының қалыптасуына ықпал ететін макроортаға жатпайтыны:',
                    answer: 'оқушының даму деңгейі',
                    options: ['оқушының даму деңгейі','бұқаралық ақпарат құралдары','мәдениеттің даму деңгейі','өмір сүрудің материалдық жағдайы','өндіргіш күштер мен өндірістік қатынастар деңгейі']
                }
                ,
                {
                    numb: 17,
                    question: 'Адамға қажетті әлеуметтік-экономикалық ықпалдардың мол жиынтығы:',
                    answer: 'макроорта',
                    options: ['макроорта','микроорта','мезоорта','мегаорта','наноорта']
                }
                ,
                {
                    numb: 18,
                    question: 'Баланың ең жақын қарым-қатынас ортасы, яғни оны қоршайтын өзара байланысты заттар, құбылыстар мен адамдар әлемі:',
                    answer: 'микроорта',
                    options: ['микроорта','макроорта','мезоорта','мегаорта','наноорта']
                }
                ,
                {
                    numb: 19,
                    question: 'Іс-әрекет түрлеріне жатпайтынын көрсет:',
                    answer: 'мәдениет',
                    options: ['мәдениет','еңбек','ойын','оқу','қарым-қатынас']
                }
                ,
                {
                    numb: 20,
                    question: '5-8 сынып оқушыларының қарым-қатынасына ... әсер етеді:',
                    answer: 'жолдастарының пікірі',
                    options: ['жолдастарының пікірі','ата-ананың пікірі','мұғалімнің пікірі','өзінің пікірі','ұжымның пікірі']
                }
                ,
                {
                    numb: 21,
                    question: 'Акселерация:',
                    answer: 'балалық және жасөспірімдік жастағы балалардың физиологиялық және психологиялық жылдам дамуы',
                    options: ['балалық және жасөспірімдік жастағы балалардың физиологиялық және психологиялық жылдам дамуы','жеке тұлғаның алдына қойған мақсатқа жетудегі табандылық көрсетуі','жеке тұлғаның белсенді іс-әрекет үдерісі','адамның өзіндік жеке-дара дамуы','жасөспірімдердің ересек өмірге өтуі']
                }
                ,
                {
                    numb: 22,
                    question: '«Педагогикалық үдеріс» терминін ғылыми айналымға алғаш енгізген педагог, «Педагогикалық үдеріс» атты іргелі еңбектің авторы:',
                    answer: 'П.Ф.Каптерев',
                    options: ['П.Ф.Каптерев','И.Г.Песталоцци','К.Д.Ушинский','К.Д.Крупская','И.П.Подласый']
                }
                ,
                {
                    numb: 23,
                    question: 'Тұтас педагогикалық үдеріс теориясын Қазақстанда қалыптастырушы ғалым:',
                    answer: 'Н.Д.Хмель',
                    options: ['Н.Д.Хмель','К.Бержанов','Н.Көшекбаев','Р.Г.Лемберг','Қ.Жарықбаев']
                }
                ,
                {
                    numb: 24,
                    question: 'Педагогикалық үдеріс мына жүйеге жатады:',
                    answer: 'адам-адам',
                    options: ['адам-адам','адам-табиғат','адам-бейне','адам-техника','адам-белгі']
                }
                ,
                {
                    numb: 25,
                    question: 'Тұтас педагогикалық үдеріс:',
                    answer: 'әлеуметтік және дамушы жүйе',
                    options: ['әлеуметтік және дамушы жүйе','тәуелсіз және өзгермейтін жүйе','сыртқы жағдайларға толығымен тәуелді және сырттан басқарылатын жүйе','сыртқы жағдайларға бағынышсыз және өзіндік ерекшелігі бар жүйе','басқару кадрларына тәуелді қысқа уақытқа құрылған жүйе']
                }
                ,
                {
                    numb: 26,
                    question: 'Педагогикалық үдерістің белгілеріне жатпайтынын көрсет:',
                    answer: 'мақсаттардың көптігі',
                    options: ['мақсаттардың көптігі','жүйенің ішкі құрылымы','жүйенің белгілі бір қоры','ішкі қарама-қайшылықтар есебінен жүйенің дамуы','өзара тәуелді құрамдас бөліктерден тұруы']
                }
                ,
                {
                    numb: 27,
                    question: 'Педагогикалық үдерістің қозғаушы күші:',
                    answer: 'қарама-қайшылық',
                    options: ['қарама-қайшылық','мақсат','ниет','бұйрық','стандарт']
                }
                ,
                {
                    numb: 28,
                    question: 'Педагогикалық үдерістің компоненттері:',
                    answer: 'мақсат, мазмұн, іс-әрекет (технологиялар), нәтиже',
                    options: ['мақсат, мазмұн, іс-әрекет (технологиялар), нәтиже','педагогтың мәртебесі, тәжірибесі, жеке әсер ету ықпалы','дамытуды қажет ететін жеке тұлғаның сапалары','технологиялық, нәтижелілік, үнемділік деңгейі','оқыту тиімділігі, тәрбие деңгейі']
                }
                ,
                {
                    numb: 29,
                    question: 'Тұтас педагогикалық үдерістің заңдылығы:',
                    answer: 'әлеуметтік-экономикалық қажеттілікке тәуелділік',
                    options: ['әлеуметтік-экономикалық қажеттілікке тәуелділік','мектеп әкімшілігі мен мұғалімдердің авторитарлы позицияны ұстануға тырысуы','оқушылардың шығармашылық белсенділігі – кездейсоқ іс-әрекетінің нәтижесі','педагогикалық процесс – бір жақты үдеріс','педагогикалық процесс – қысқа мерзімге жоспарланған үдеріс']
                }
                ,
                {
                    numb: 30,
                    question: 'Тұтас педагогикалық үдерістің ғылымилығы:',
                    answer: 'мақсатқа бағытталған, арнайы ұйымдастырылған әлеуметтік жүйе',
                    options: ['мақсатқа бағытталған, арнайы ұйымдастырылған әлеуметтік жүйе','әртүрлі ұлт балаларының өзара әрекетінің этно-мәдени жүйесі','нарық жағдайындағы шаруашылық-экономикалық жүйе','білімді «алу» мен «беру» мақсатын біріктіретін психологиялық жүйе','ересектер мен балалардың жалпы белгілерді иемденбейтін аморфты бірлестігі']
                }
                ,
                {
                    numb: 31,
                    question: 'Қоғамның талаптарына сай жеке тұлғаны жан-жақты және үйлесімді қалыптастыруға бағытталған тәрбиеші мен тәрбиеленушінің арасындағы бірлескен әрекет:',
                    answer: 'тәрбие үдерісі',
                    options: ['тәрбие үдерісі','оқыту үдерісі','даму үдерісі','жетілу үдерісі','қатынас үдерісі']
                }
                ,
                {
                    numb: 32,
                    question: 'Тәрбиенің қоғамдағы атқаратын қызметіне орай өзіндік ерекшеліктері:',
                    answer: 'қоғамдық құбылыс',
                    options: ['қоғамдық құбылыс','бақылау әрекеті','шығармашылық әрекет','тәрбиелік әрекет','ата-анамен бірлескен іс-әрекет']
                }
                ,
                {
                    numb: 33,
                    question: 'Тәрбиенің қоғамдық мәні:',
                    answer: 'жеке тұлғаның санасына, мінез-құлқының дұрыс қалыптасуына әсер ететін құрал',
                    options: ['жеке тұлғаның санасына, мінез-құлқының дұрыс қалыптасуына әсер ететін құрал','қандай да болса бір жан иесіне тиісті азық беріп, оның дұрыс өсуіне көмек көрсету','қоғамның пайда болуына тән қасиет','біз кімдерді тәрбиелейміз, солардың жүрегіне ықпал етеміз','басшылыққа алынатын мәселе']
                }
                ,
                {
                    numb: 34,
                    question: 'Тәрбиенің ізгілік бағыттылығы:',
                    answer: 'жалпыадамзаттық және ұлттық мәдениетті игеру',
                    options: ['жалпыадамзаттық және ұлттық мәдениетті игеру','ұжым арқылы тәрбиелеу','ой-өрісін дамыту','өз бетімен жұмыс істеуге дағдыландыру','білім алу мен оқу сапасын арттыру']
                }
                ,
                {
                    numb: 35,
                    question: 'Тәрбие үрдісіндегі гуманистік ұстаным:',
                    answer: 'сүйіспеншілік, құрмет, сыйластық',
                    options: ['сүйіспеншілік, құрмет, сыйластық','балалық шақтың күрделі өтуі','кәсіби қызметтің бағдары','іскерлік қарым-қатынас','үздік оқитын оқушыға бағдарлану']
                }
                ,
                {
                    numb: 36,
                    question: 'Бала тұлғасы дамуының негізгі бағыты:',
                    answer: 'психикалық, әлеуметтік, дене',
                    options: ['психикалық, әлеуметтік, дене','зияткерлік, эмоционалдық, дене','білімдік, тәрбиелік, бейімділік','биологиялық және психикалық','физиологиялық және әлеуметтік']
                }
                ,
                {
                    numb: 37,
                    question: 'Тұлғалық тұрғыдан қараудың талабы ... есепке алу:',
                    answer: 'құндылық бағдарларды',
                    options: ['құндылық бағдарларды','қоғамдық қажеттіктерді','мемлекеттік мүдделерді','тәрбиелеуде жас ерекшелігін','білім деңгейін']
                }
                ,
                {
                    numb: 38,
                    question: 'Тұлғаның өзін-өзі тану және өзін-өзі жетілдіру үдерісіне қолдау көрсету:',
                    answer: 'тұлғаға бағдарланған тұрғы',
                    options: ['тұлғаға бағдарланған тұрғы','аксиологиялық тұрғы','іс-әрекеттік тұрғы','құзіреттілік тұрғы','диалогтық тұрғы']
                }
                ,
                {
                    numb: 39,
                    question: 'Тәрбие үдерісіне тән ерекшеліктерге жатпайтынын көрсетіңіз:',
                    answer: 'нәтиженің бірден көрінуі',
                    options: ['нәтиженің бірден көрінуі','мақсатты бағыттылығы','көп жағдаяттылығы','кешенділігі','қарама-қайшылықты болуы']
                }
                ,
                {
                    numb: 40,
                    question: '«Тәрбиеленушілер ұнамды тәжірибелік қор жинақтаумен бірге теріс өнегеге де тап болуы мүмкін» деген пікір тәрбие үдерісінің қай ерекшелігін сипаттайды:',
                    answer: 'көп жағдаяттылығы',
                    options: ['көп жағдаяттылығы','болашаққа бағдарлануы','мақсатты бағыттылығы','үздіксіздігі','екі тараптылығы']
                }
                ,
                {
                    numb: 41,
                    question: 'Тәрбие үдерісінің қай ерекшелігі тәрбие мақсаты мен міндеттерінің, мазмұнының, форма және әдістерінің бірлігін білдіреді:',
                    answer: 'кешенділік',
                    options: ['кешенділік','үздіксіздік','қарама-қайшылықтық','ауыспалылық','екі тараптылық']
                }
                ,
                {
                    numb: 42,
                    question: 'Тәрбие үдерісі компоненттері арасындағы байланыс:',
                    answer: 'заңдылық',
                    options: ['заңдылық','заң','принцип','парадигма','технология']
                }
                ,
                {
                    numb: 43,
                    question: 'Тәрбие заңдылығы:',
                    answer: 'тәрбие мен дамудың бірлігі және өзара байлыныстылығы',
                    options: ['тәрбие мен дамудың бірлігі және өзара байлыныстылығы','мектептің оқушылар ұжымының қалыптасу жолдарын анықтауы','мектептің отбасы тәрбиесінің ерекшеліктерін ескеруі','сынып жетекшісінің оқушылармен қарым-қатынасты дұрыс қалыптастыру міндетін белгілеуі','ата-ананың бала тұлғасының даму үдерісін басқаруы']
                }
                ,
                {
                    numb: 44,
                    question: 'Тәрбие заңдылықтарының негізгі қозғаушы күші:',
                    answer: 'қарама-қайшылықтар',
                    options: ['қарама-қайшылықтар','педагогикалық талап','қоғамның мақсаты','тұлға ерекшеліктері','туындаған ішкі мәселе']
                }
                ,
                {
                    numb: 45,
                    question: 'Тәрбие принциптері:',
                    answer: 'тәрбиелеуге қойылатын талаптар',
                    options: ['тәрбиелеуге қойылатын талаптар','тәрбие жұмысын жоспарлау','тәрбиелеу жолдары','тәрбиелеу заңдылықтары','тәрбие мен дамудың бірлігі']
                }
                ,
                {
                    numb: 46,
                    question: 'Тәрбиеде әр баланың көзқарасын, мінез-құлқын ескеру принципі:',
                    answer: 'жас және дербес ерекшеліктерді ескеру',
                    options: ['жас және дербес ерекшеліктерді ескеру','қоғамдық пікір, жаттықтыру, үйрету','еңбек арқылы тәрбиелеу','тәрбиенің өмірмен байланысы','талап пен құрметтің бірлігі']
                }
                ,
                {
                    numb: 47,
                    question: 'Тәрбиедегі ізгілік пен ынтымақтастықты алға тартатын принцип:',
                    answer: 'талап пен құрметтің бірлігі',
                    options: ['талап пен құрметтің бірлігі','жас және дербес ерекшеліктерді ескеру','қоғамдық пікір, жаттықтыру, үйрету','еңбек арқылы тәрбиелеу','тәрбиенің өмірмен байланысы']
                }
                ,
                {
                    numb: 48,
                    question: 'Тұлғаға бағдарланған тұрғы:',
                    answer: 'өзіндік әрекетті, белсенділікті дамытуға жетекшілік ету',
                    options: ['өзіндік әрекетті, белсенділікті дамытуға жетекшілік ету','қарама-қайшылықтарды жою','сезімдік үдерістердің даму деңгейін талдау','тәрбие жағдайларындағы кедергілерді жеңу','оқушының өмір сүру қалпын реттеу']
                }
                ,
                {
                    numb: 49,
                    question: 'Тұлғаны тәрбиелеудегі адамгершілік моральдық құндылық:',
                    answer: 'сыйластық',
                    options: ['сыйластық','еркіндік','көшбасшылық','бастамашылдық','белсенділік']
                }
                ,
                {
                    numb: 50,
                    question: 'Педагогикалық қарым-қатынас мұғалім мен оқушыға ... мүмкіндік береді:',
                    answer: 'рухани байланыс жасауға',
                    options: ['рухани байланыс жасауға','сабақты тексеруге','отбасына көмектесуге','еңбекке қатыстыруға','қажеттіліктерді қанағаттандыруға']
                }
                ,
];
