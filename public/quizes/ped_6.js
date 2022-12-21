var title = 'Педагогика | 251-300'; 
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
                    question: 'Талдау, жинақтау деңгейіндегі тапсырмалар – ... деңгейлі тапсырмалар:',
                    answer: 'жоғары',
                    options: ['жоғары','төмен','жеңіл','күрделі','орташа']
                }
                ,
                {
                    numb: 2,
                    question: '«Бала алдымен тәжірибеге ұмтылсын, заттармен таныссын, содан кейін ғана сөйлесін, тыңдасын, жазсын, оқысын, тіл үйренсін» деген ойды білдірген ғалым:',
                    answer: 'Ж.Аймауытов',
                    options: ['Ж.Аймауытов','А.Байтұрсынов','М.Жұмабаев','М.Дулатов','Ы.Алтынсарин']
                }
                ,
                {
                    numb: 3,
                    question: 'Оқушының жұмысты өз бетінше орындауы:',
                    answer: 'жеке жұмыс',
                    options: ['жеке жұмыс','жұптық жұмыс','топтық жұмыс','ұжымдық жұмыс','жаппай жұмыс']
                }
                ,
                {
                    numb: 4,
                    question: '«Оқушы-оқушы», «оқушы-мұғалім» тәртібіндегі жұмыс түрі:',
                    answer: 'жұптық жұмыс',
                    options: ['жұптық жұмыс','жеке жұмыс','топтық жұмыс','ұжымдық жұмыс','жаппай жұмыс']
                }
                ,
                {
                    numb: 5,
                    question: 'Шағын топтық және бүкіл сыныптық жұмыс:',
                    answer: 'топтық жұмыс',
                    options: ['топтық жұмыс','жеке жұмыс','жұптық жұмыс','ұжымдық жұмыс','жаппай жұмыс']
                }
                ,
                {
                    numb: 6,
                    question: 'Топпен бірлесе әрекет етуге, ойын анық жеткізе білуге, кез келген ортада жұмыс жасай алу қабілеттерін дамыта отырып, шығармашылық, ұқыптылық, кедергілерді жеңе білу дағдыларын қалыптастыру:',
                    answer: 'талантты және дарынды балаларды оқыту',
                    options: ['талантты және дарынды балаларды оқыту','диалогтік оқыту','ынталандыру','марапаттау','оқыту үшін бағалау']
                }
                ,
                {
                    numb: 7,
                    question: 'Ақпарат алмасу және проблемалық мәселелерді шешу мақсатында идеялармен танысу:',
                    answer: 'талқылау',
                    options: ['талқылау','көрсетілім','ауызша жауап','нұсқаулық','технология']
                }
                ,
                {
                    numb: 8,
                    question: 'Бірлескен жұмыс қандай қағидатқа негізделеді:',
                    answer: 'таным қағидатына',
                    options: ['таным қағидатына','ақпарат ұсыну қағидатына','бақылауға негізделген қағидатқа','байланыс орнату қағидатына','жеңіл тапсырмаларды үлгілерін жасау қағидатына']
                }
                ,
                {
                    numb: 9,
                    question: 'Оқу үдерісінде белсенді оқуды жүзеге асыратын құбылыс:',
                    answer: 'топтық жұмыс',
                    options: ['топтық жұмыс','оқытуды бағалау','жеке жұмыс','тақырыптық ойындар','тоқсандық жиынтық бағалау']
                }
                ,
                {
                    numb: 10,
                    question: 'Білім алушылардың дербес ерекшеліктерін ескере отырып, оқыту үдерісін ұйымдастыру:',
                    answer: 'жекелеп оқыту',
                    options: ['жекелеп оқыту','жаппай оқыту','таңдамалы оқыту','ұжымдық оқыту','жұптық оқыту']
                }
                ,
                {
                    numb: 11,
                    question: 'Жаппай оқыту формасы:',
                    answer: 'оқу конференциясы',
                    options: ['оқу конференциясы','сұхбаттасу','үй жұмысы','емтихан','сынақ']
                }
                ,
                {
                    numb: 12,
                    question: '«Саралау» ұғымына берілген қате анықтаманы көрсет:',
                    answer: 'барлық оқушылардың жеткен жетістігі',
                    options: ['барлық оқушылардың жеткен жетістігі','іріктелген тапсырмалар','нақты бір оқушыдан күтілетін нәтижелер','оқушыға дербес қолдау көрсету','оқу материалдарын оқушылардың жеке қабілеттерін ескеріп таңдау']
                }
                ,
                {
                    numb: 13,
                    question: 'Оқушының эмоционалдық өнегелік сауаттылығы, жан-жақты дамуы, оқыту сапасын арттыру басымдылығы:',
                    answer: 'оқудағы көшбасшылық',
                    options: ['оқудағы көшбасшылық','оқытуды басқару','бағалау','мониторинг','бақылау']
                }
                ,
                {
                    numb: 14,
                    question: 'Оқу әрекетінің мотивтері:',
                    answer: 'сыртқы және ішкі уәж',
                    options: ['сыртқы және ішкі уәж','гносеологиялық әрекет','талаптар құру, мүмкіндіктер','жағымды әлеуметтік қажеттіліктер','пікірталас барысында өзін көрсету']
                }
                ,
                {
                    numb: 15,
                    question: 'Мотивацияны арттыратын фактор:',
                    answer: 'әр оқушыға жеке қолдау көрсету',
                    options: ['әр оқушыға жеке қолдау көрсету','негізінен мұғалімнің өзінің сөйлеуі','оқушылардың мұғалімнен көмек күтуі','оқушылардың қабілеттерін ескермеуі','оқытуды бақылау']
                }
                ,
                {
                    numb: 16,
                    question: 'Қолайлы оқу үшін қажет:',
                    answer: 'кері байланыс пен мадақтау',
                    options: ['кері байланыс пен мадақтау','білім алуға ынталандыру','тыңдалым үдерісі арқылы функционалды сауаттылығының негізін қалау','айтылым, тыңдалым, оқылым дағдыларын қалыптастыру ','оқытудың жүйелілігі мен бірізділігі ұстанымы']
                }
                ,
                {
                    numb: 17,
                    question: 'Білім алушының оқу жетістігі деңгейін анықтайтын белгі немесе өлшем:',
                    answer: 'кері байланыс',
                    options: ['кері байланыс','стандарт','модерация','дескриптор','рефлексия']
                }
                ,
                {
                    numb: 18,
                    question: 'Дәстүрлі оқытудағы оқушылардың алған ақпаратты 5% есте сақтауына көмектесетін тәсіл:',
                    answer: 'дәріс',
                    options: ['дәріс','көрсетілім','дискуссия','эксперимент жүргізу','өзара үйрену']
                }
                ,
                {
                    numb: 19,
                    question: 'Жаңа ақпараттың 50%-ын есте сақтауға ықпал ететін тәсіл:',
                    answer: 'дискуссияға қатысу',
                    options: ['дискуссияға қатысу','шара ұйымдастыру','сценарий жазу','белсенді болу','көшбасшыға айналу']
                }
                ,
                {
                    numb: 20,
                    question: 'Оқу пирамидасына сәйкес оқушылардың алған ақпаратты 75% есте сақтауына жағдай жасайтын тәсіл:',
                    answer: 'эксперимент жасау',
                    options: ['эксперимент жасау','проблеманы шешу','мағынаны ашу','ой қозғау','басқаларды оқыту']
                }
                ,
                {
                    numb: 21,
                    question: 'Тәжірибеге бағытталған оқыту барысында90% ақпараттың есте сақталуына мүмкіндік беретін тәсіл:',
                    answer: 'өзгелерді оқыту',
                    options: ['өзгелерді оқыту','сарамандық жұмыс','презентация','пікірталас','топтық талқылау']
                }
                ,
                {
                    numb: 22,
                    question: 'Оқушыларға ақпарат ұсыну немесе түсініктеме беру:',
                    answer: 'нұсқаулық',
                    options: ['нұсқаулық','диалог','талқылау','ауызша жауап','модерация']
                }
                ,
                {
                    numb: 23,
                    question: 'Оқушыны осы типтегі барлық мәселелерді шешудің жалпы амалын іздеуге мәжбүр ететін практикалық тапсырма:',
                    answer: 'оқу тапсырмасы',
                    options: ['оқу тапсырмасы','сарамандық жұмыс','рөлдік ойын','іскерлік қатынас','эксперименттік әрекет']
                }
                ,
                {
                    numb: 24,
                    question: '«Оқушылардың алға басуын дәл бағалауға деген қабілеттілік мұғалімдердің педагогикалық шеберлігінің өзегін құрайды» деген ойды білдірген ғалым:',
                    answer: 'М.Барбер',
                    options: ['М.Барбер','Ж.Пиаже','Л.Выготский','Н.Мерсер','К.Ушинский']
                }
                ,
                {
                    numb: 25,
                    question: 'Алдын ала белгілі бағалау критерийлеріне сай білім алушылардың оқудағы жетістіктерін бағалау:',
                    answer: 'критериалды бағалау',
                    options: ['критериалды бағалау','критикалық бағалау','дәстүрлі бағалау','ағымдық тексеру','қорытынды бақылау']
                }
                ,
                {
                    numb: 26,
                    question: 'Білім алушылардың оқу жетістіктерін бағалауға негіз болатын белгі:',
                    answer: 'критерий',
                    options: ['критерий','дескриптор','дистрактор','алгоритм','модерация']
                }
                ,
                {
                    numb: 27,
                    question: 'Оқушының жұмысты қаншалықты орындағанын бағалайтын тұжырым:',
                    answer: 'балл қою критерийі',
                    options: ['балл қою критерийі','әдістемелік нұсқаулық','қалыптастырушы бағалауды талдау','жиынтық бағалауды талқылау','бағалау нәтижесін ұсыну']
                }
                ,
                {
                    numb: 28,
                    question: 'Білім алушының қабілетін есепке ала отырып, саралап оқытуды ұйымдастыру үшін қолданылатын күрделілігі әртүрлі деңгейдегі тапсырмалар:',
                    answer: 'түрлі деңгейдегі тапсырмалар',
                    options: ['түрлі деңгейдегі тапсырмалар','білім алушының портфолиосы','білім алушының оқу жетістігі','ақпараттық технологиялар','мұғалім рефлексиясы']
                }
                ,
                {
                    numb: 29,
                    question: 'Тапсырманы орындау кезіндегі әрекеттер, қадамдар:',
                    answer: 'дескриптор',
                    options: ['дескриптор','нұсқаулық','дистрактор','рубрика','модерация']
                }
                ,
                {
                    numb: 30,
                    question: 'Оқу үшін бағалау:',
                    answer: 'қалыптастырушы бағалау',
                    options: ['қалыптастырушы бағалау','жиынтық бағалау','қорытынды бағалау','тексеру мен қадағалау','нормаға сәйкестендіру']
                }
                ,
                {
                    numb: 31,
                    question: 'Қалыптастырушы бағалаудың мақсаты:',
                    answer: 'табысқа жетуге бағыт беру',
                    options: ['табысқа жетуге бағыт беру','жиынтық бағалаудың нәтижесін шығару','қорытынды бағалауды ұйымдастыру','тексеру мен қадағалауды жүзеге асыру','бекітілген нормаға сәйкестендіру']
                }
                ,
                {
                    numb: 32,
                    question: 'Қара жәшік ішіндегі жұмыс:',
                    answer: 'оқыту үшін бағалауды қолдану',
                    options: ['оқыту үшін бағалауды қолдану','кері байланыс','рефлексия','сабақ мақсаты','жеке жұмыс']
                }
                ,
                {
                    numb: 33,
                    question: 'Күнделікті сабақ барысында жүйелі түрде жүргізілетін бағалау:',
                    answer: 'қалыстастырушы бағалау',
                    options: ['қалыстастырушы бағалау','жеке жұмыс','критериалды бағалау','өзара бағалау','жиынтық бағалау']
                }
                ,
                {
                    numb: 34,
                    question: 'Күнделікті алған білімнің меңгеру деңгейін анықтайтын бағалаудың түрі:',
                    answer: 'қалыптастырушы бағалау',
                    options: ['қалыптастырушы бағалау','аттестациялық бағалау','қорытынды бағалау','жиынтық бағалау','бағалау нәтижесін ұсыну']
                }
                ,
                {
                    numb: 35,
                    question: 'Оқуды бағалау:',
                    answer: 'жиынтық бағалау',
                    options: ['жиынтық бағалау','күнделікті тексеру','ағымдық бақылау','үнемі қадағалау','норманы ұстану']
                }
                ,
                {
                    numb: 36,
                    question: 'Оқушының білім, іскерлік, дағдылары мен құзыреттіліктері қалыптасуының бастапқы деңгейін анықтау:',
                    answer: 'диагностикалық бағалау',
                    options: ['диагностикалық бағалау','эмоциялық басқару','критериалды қадағалау','қалыптастырушы бағалау','топтық жұмыс']
                }
                ,
                {
                    numb: 37,
                    question: 'Тоқсандық жиынтық бағалау тапсырмаларына балл қою бойынша бірыңғай норманы белгілеу үшін мұғалімдер қолданатын кесте:',
                    answer: 'балл қою кестесі',
                    options: ['балл қою кестесі','сабақ кестесі','тест спецификациясы','жиынтық бағалау','тоқсандық бағалау']
                }
                ,
                {
                    numb: 38,
                    question: 'Оқудың белгілі бір кезеңінде пән бойынша білім алушылардың оқу жетістігі деңгейін анықтау үшін белгіленген оқушылар жұмысы:',
                    answer: 'жиынтық жұмыс',
                    options: ['жиынтық жұмыс','оқушы портфолиосы','тест спецификациясы','балл қою кестесі','бағалау критерийі']
                }
                ,
                {
                    numb: 39,
                    question: 'Бағалаудың анықтығы мен дәлдігін қамтамасыз ету үшін қойылған балдарды стандарттау мақсатында тоқсандық жиынтық бағалау бойынша оқушылардың жұмыстарын талқылайтын үдеріс:',
                    answer: 'модерация',
                    options: ['модерация','консилиум','алгоритм','парадигма','технология']
                }
                ,
                {
                    numb: 40,
                    question: 'Әрбір оқушының алдына жеке тапсырма беріледі, жеке оқушының білімі тексеріліп, бағаланады:',
                    answer: 'жеке',
                    options: ['жеке','топтық','жазбаша','ауызша','аралас']
                }
                ,
                {
                    numb: 41,
                    question: 'Қатысатын оқушылар санына қарай тексеруге түрлері:',
                    answer: 'жеке, топтық, жаппай',
                    options: ['жеке, топтық, жаппай','жеке, жазбаша, ауызша','топтық, аралас, әрекеттік','жаппай, аралас, жеке','топтық, ауызша, аралас']
                }
                ,
                {
                    numb: 42,
                    question: 'Тексеру әдістері:',
                    answer: 'жазбаша, ауызша, аралас',
                    options: ['жазбаша, ауызша, аралас','жеке, жазбаша, ауызша','топтық, аралас, тәжірибелік','жаппай, аралас, жеке','топтық, ауызша, аралас']
                }
                ,
                {
                    numb: 43,
                    question: 'Тексеру түрлері:',
                    answer: 'алдын ала, ағымдағы, тақырыптық',
                    options: ['алдын ала, ағымдағы, тақырыптық','тақырыптық, жазбаша, аралас','ауызша, жазбаша, аралас','ағымдағы, алдын ала','тақырыптық, жазбаша']
                }
                ,
                {
                    numb: 44,
                    question: 'Рефлексия',
                    answer: 'қайта ойлауға және өз әрекетінің нәтижелеріне талдау жасауға, өзін-өзі тануға бағытталған ойлау үдерісі',
                    options: ['қайта ойлауға және өз әрекетінің нәтижелеріне талдау жасауға, өзін-өзі тануға бағытталған ойлау үдерісі','тапсырмаларды орындау кезіндегі әрекетті көрсететін сипаттама','белгілі бір оқиға немесе әрекетке жауап беру, үн қату, пікір білдіру','бағалау талаптарына сәйкес білім алушылардың оқу жетістіктері деңгейлерін сипаттау тәсілі','әрекеттің нәтижелілігін талдау және оның неліктен нәтижелі екендігін түсіндіру қабілеті']
                }
                ,
                {
                    numb: 45,
                    question: 'Педагогтың ішкі дүниесін түсінуі, ұғынуы, психологиялық талдау жасау күйі:',
                    answer: 'педагогикалық рефлексия',
                    options: ['педагогикалық рефлексия','критериалды бағалау','кері байланыс','сабаққа дайындық','қорытынды бақылау']
                }
                ,
                {
                    numb: 46,
                    question: 'Белгілі бір әрекетті түсіну, игеру, онымен келісу/келіспеуді көрсететін жауапәрекет, пікір, баға беру:',
                    answer: 'кері байланыс',
                    options: ['кері байланыс','оң пайым','дүниетаным','жақтырмау','қабылдау']
                }
                ,
                {
                    numb: 47,
                    question: 'Озық тәжірибенің ең жоғары деңгейі:',
                    answer: 'жаңашылдық',
                    options: ['жаңашылдық','дарындылық','данышпандық','бастамашылдық','белсенділік']
                }
                ,
                {
                    numb: 48,
                    question: 'Жан-жақты білімімен, ұстаздың шеберлігімен, оқытудың жаңа әдістерін меңгеруімен өлшенеді:',
                    answer: 'мұғалім құзыреттілігі',
                    options: ['мұғалім құзыреттілігі','мұғалім көзқарасы','білім беру парадигмасы','мұғалімнің логикасы','өзін-өзі көрсету ерекшелігі']
                }
                ,
                {
                    numb: 49,
                    question: 'Пән бойынша оқу жылына білім алушының оқу жетістігінің жеке және жинақталған бағаларын тіркейтін тәсіл:',
                    answer: 'портфолио',
                    options: ['портфолио','аттестация','бағдарлама','күнделік','кеңес']
                }
                ,
                {
                    numb: 50,
                    question: 'Білім алушының оқу үдерісі аяқталған кезде нені біліп, түсініп, нені көрсете алатынын айқындайтын құзіреттіліктер жиынтығы:',
                    answer: 'оқытудың күтілетін нәтижелері',
                    options: ['оқытудың күтілетін нәтижелері','білім алушының оқу жетістігі деңгейі','білім алушының портфолиосы','тест спецификациясы','балл қою кестесі']
                }
                ,
];
showqa();