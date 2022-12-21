
var url = new URL(location.href);
var playerid = url.searchParams.get("id"); //URL-ден клиенттің идентификаторы алынады
var quizID = url.searchParams.get("quizID"); //URL-ден куиздің идентификаторы алынады
var chat = url.searchParams.get("chatID");

const info_box = document.getElementById('info'); //Деректер шығарылатын div 
const continue_btn = document.getElementById('continue'); //Жалғастыру батырмасы
const quiz_box = document.getElementById('quiz'); //сұрақтар шығарылатын негізгі  div
const result_box = document.getElementById('result_box'); //Нәтиже шығарылатын div
const option_list = document.getElementById('option_list'); //Жауап нұсқалары шығарылатын элемент
const timeText = document.getElementById('time_text'); //Таймер иконкасының элементі
const timeCount = document.getElementById('timer'); //Қалған уақытты шығаратын элемент
const next_btn = document.getElementById('next'); //Келесі сұрақ батырмасы
const next_btn2 = document.getElementById('next2'); //Келесі сұрақ батырмасы

quiz_box.style.display = "none"; //Сұрақтар шығарылатын негізгі div-ті әзірге жасыру
result_box.style.display = "none"; //Нәтиже шығарылатын div-ті әзірге жасыру
next_btn.style.display = "none"; //Келесі батырмасын жасыру
next_btn2.style.display = "none"; //Келесі батырмасын жасыру

var js = document.createElement("script");
js.src = "quizes/" + quizID + ".js"; //Куиздің деректер қоймасын алу
document.getElementById('cont').appendChild(js);

let que_count = 0;
let que_numb = 1;
let userScore = 0;
let incorque = 0;
let noAnswer = 0;
let counter;

var userName = localStorage.getItem('userName'); 
if (userName == undefined || userName == '') {
    info_box.style.display = "none";
    document.getElementById('login').classList.remove("d-none");
} else {
    getUserName();
    var playerName = localStorage.getItem('userName');
};

function saveUserName() {
    var playerName = document.getElementById("username").value;
    if (playerName != '') {
        localStorage.setItem('userName', playerName);
        document.getElementById('login').classList.add("d-none");
        info_box.style.display = "block";
        document.cookie = "name="+encodeURIComponent(playerName);
        getUserName();
    };
};

function getUserName() {
    document.getElementById('quizTitle2').textContent = localStorage.getItem('userName');
};

continue_btn.onclick = ()=>{ //Жалғастыру батырмасын басқанда орындалатын функция
    info_box.style.display = "none"; //Куиз деректері div-ін жасыру
    quiz_box.style.display = "block"; //Куиз div-ін ашу
    showQuetions(0); 
    queCounter(1); 
    startTimer(timeValue); //Таймерді бастау
    
}

const restart_quiz = document.getElementById('restart'); //Қайта бастау батырмасын алу


restart_quiz.onclick = ()=>{ //кайта бастау батырмасын басқандағы орындалатын фунция
    quiz_box.style.display = "block"; //куиздің блогін ашу
    result_box.style.display = "none"; 
    que_count = 0; 
    que_numb = 1;
    userScore = 0; //пайдаланушы ұпайы 0 деу
    incorque = 0;
    noAnswer = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter); 
    startTimer(timeValue);
    timeText.innerHTML = '<i class="bi bi-clock-history"></i>'; 
    next_btn.style.display = "none"; 
    next_btn2.style.display = "none"; 
}

const bottom_ques_counter = document.getElementById('total_que');
const bottom_ques_counter2 = document.getElementById('total_que2');

next_btn.onclick = ()=>{ //Келесі сұраққа өту батырмасын басқанда орындалатын функция
    if(que_count < questions.length - 1){ 
        que_count++; 
        que_numb++; 
        showQuetions(que_count);
        queCounter(que_numb); 
        clearInterval(counter); 
        startTimer(timeValue); 
        timeText.innerHTML = '<i class="bi bi-clock-history"></i>'; 
        next_btn.style.display = "none"; 
        next_btn2.style.display = "none"; 
    }else{
        clearInterval(counter);  
        showResult(); 
    }
}

next_btn2.onclick = ()=>{ //Келесі сұраққа өту батырмасын басқанда орындалатын функция
    if(que_count < questions.length - 1){ 
        que_count++; 
        que_numb++; 
        showQuetions(que_count);
        queCounter(que_numb); 
        clearInterval(counter); 
        startTimer(timeValue); 
        timeText.innerHTML = '<i class="bi bi-clock-history"></i>'; 
        next_btn.style.display = "none"; 
        next_btn2.style.display = "none"; 
    }else{
        clearInterval(counter);  
        showResult(); 
    }
}

let optionStart = '<div class="col mt-2"><div class="card h-100 shadow-sm option" id="option"><div class="row my-auto"><div class="col my-auto">';
let optionEnd = '</div><div class="col-auto my-auto" id="icon"></div></div></div></div>';

function showDetail(){ //Quiz деректерін клиенттің веб бетіне шығару
    document.getElementById('quizTitle').textContent = title;
    document.getElementById('questionsCount').textContent = questionCount;
    if (answerMixing == false) {
        document.getElementById('answerMixMode').textContent = 'Өшірілген';
    } else {
        document.getElementById('answerMixMode').textContent = 'Қосулы';
    };
    document.getElementById('answerTime').textContent = timeValue+' с.';

    if (about == true) {
        document.getElementById('sbtn2').classList.remove('d-none');
        document.getElementById('sbtn').classList.remove('d-none');
        document.getElementById('syllabus').innerHTML = syllabus;
    };
    
    continue_btn.classList.remove('d-none');
}

function showqa() {
    let out_arr = document.getElementById('syllabus');
    let str = ' ';
    for (let i = 0; i< questions.length; i++  ) {
        str +="<b>"+questions[i].numb + ". " + questions[i].question+" / </b>"+questions[i].answer+"<br>";
    }
    out_arr.innerHTML = str;
}

function showQuetions(index){ // Сұрақты клиенттің веб бетіне шығару
    const que_text = document.getElementById('que_text');
    var option1 = '';
    var option2 = '';
    var option3 = '';
    var option4 = '';
    var option5 = '';

    let cols = 0;

    if (answerMixing == true) {
        shuffle(questions[index].options); //Жауап нұсқаларын алмастыру
    };
    
    
    let que_tag =  questions[index].numb + ". " + questions[index].question;
    if (questions[index].options[0] != '') {
        option1 = optionStart + htmlEncode(questions[index].options[0]) + optionEnd;
        cols++;
    };
    if (questions[index].options[1] != '' && questions[index].options[1] != undefined) {
        option2 = optionStart + htmlEncode(questions[index].options[1]) + optionEnd;
        cols++;
    };
    if (questions[index].options[2] != '' && questions[index].options[2] != undefined) {
        option3 = optionStart + htmlEncode(questions[index].options[2]) + optionEnd;
        cols++;
    };
    if (questions[index].options[3] != '' && questions[index].options[3] != undefined) {
        option4 = optionStart + htmlEncode(questions[index].options[3]) + optionEnd;
        cols++;
    };
    if (questions[index].options[4] != '' && questions[index].options[4] != undefined) {
        option5 = optionStart + htmlEncode(questions[index].options[4]) + optionEnd;
        cols++;
    };

    var classList = option_list.classList;
    while (classList.length > 0) {
        classList.remove(classList.item(0));
    }


    let rowCols = "row-cols-md-"+cols; //Ноутбук/Компьютерде экранды жауап нұсқаларының санына қарай бөлу
    option_list.classList.add("row");
    option_list.classList.add("row-cols-1");
    option_list.classList.add("g-4");
    option_list.classList.add("m-1");
    option_list.classList.add(rowCols);

    let option_tag = option1 + option2 + option3 + option4 + option5;
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    
    const option = option_list.querySelectorAll('#option');

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<i class="bi bi-check2-circle text-end text-success fs-2"></i>';
let crossIconTag = '<i class="bi bi-dash-circle text-end text-danger fs-3"></i>';

function optionSelected(answer){ // Жауапты таңдағанда орындалатын функция
    clearInterval(counter); 
    let userAns = htmlEncode(answer.textContent); //Клиенттің таңдаған жауабын алу
    let correcAns = htmlEncode(questions[que_count].answer); //Дұрыс жауап нұқасын масссивтен алу
    const allOptions = option_list.children.length; 
    
    if(userAns == correcAns){ //Клиент таңдаған жауап дұрыс болса
        userScore += 1; //+1 балл
        answer.classList.remove("option");
        answer.classList.add("correct"); //Стиль
        let iconCol = answer.querySelector('#icon');
        iconCol.innerHTML = tickIconTag; 
    }else{ //Қате жауап таңдалса
        incorque += 1;
        answer.classList.remove("option"); 
        answer.classList.add("incorrect"); 
        let iconCol = answer.querySelector('#icon');
        iconCol.innerHTML = crossIconTag;  

        for(i=0; i < allOptions; i++){
            if(htmlEncode(option_list.children[i].textContent) == correcAns){  
                let option = option_list.children[i].querySelector('#option');
                option.classList.remove("option");
                option.classList.add("correct");  
                let iconCo = option_list.children[i].querySelector('#icon');
                iconCo.innerHTML = tickIconTag; 
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("pe-none"); 
    }
    next_btn.style.display = "block"; 
    next_btn2.style.display = "block"; 
}

function showResult(){ //Нәтижені экранға шығару үшін
    info_box.style.display = "none"; 
    quiz_box.style.display = "none"; 
    result_box.style.display = "block"; 
    const scoreText = document.getElementById("score");
    let scoreTag = '<table class="table"><tr><th scope="row">Қате:</th><td>'+ incorque +'</td></tr><tr><th scope="row">Дұрыс:</th><td>'+ userScore +'</td></tr><tr><th scope="row">Барлық сұрақ саны:</th><td>'+ questions.length +'</td></tr></table>'
    scoreText.innerHTML = scoreTag; 

    var Name = localStorage.getItem('userName');

    var sxmlhttp = new XMLHttpRequest(); // Нәтижені сақтау үшін
    var surl = "https://kzredu.herokuapp.com/index.php?eventType=setScore&quizTitle=" + encodeURIComponent(title) +"&chatID=" + chat + "&quizID=" + encodeURIComponent(quizID) + "&questionCount=" + questions.length + "&score=" + userScore + "&playerName=" + encodeURI(Name);
    sxmlhttp.open("GET", surl, true);
    sxmlhttp.send();

    var xmlhttp = new XMLHttpRequest(); // Нәтижені сақтау үшін
    var url = "https://kzredubot.herokuapp.com/highscore/" + userScore + "?id=" + playerid;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    
}

function startTimer(time){ //Таймер 
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; 
        time--; 
        if(time < 9){
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; 
        }
        if(time < 0){ //Егер берілген уақытқа дейін дұрыс жауап таңдалмаса автоматты түрде дұрыс жауап таңдалады
            noAnswer += 1
            clearInterval(counter); 
            timeText.innerHTML = '<i class="bi bi-clock-history"></i>'; 
            const allOptions = option_list.children.length; 
            let correcAns = questions[que_count].answer; 
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ 
                    let option = option_list.children[i].querySelector('#option');
                    option.classList.remove("option");
                    option.classList.add("correct");    
                    let iconCo = option_list.children[i].querySelector('#icon');
                    iconCo.innerHTML = tickIconTag; 
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("pe-none"); 
            }
            next_btn.style.display = "block"; 
            next_btn2.style.display = "block"; 
        }
    }
}

function htmlEncode(string) { //сұрақта/жауап нұсқаларында html тіліндегі элементтер болса кодтау
    return string.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/'/g, '&#39;')
                .replace(/"/g, '&#34;')
                .replace(/\//, '&#x2F;');
}

function queCounter(index){ //Қазіргі сұрақ санымен барлық сұрақ санын экранның төменгі бұрышына шығару үшін
    let totalQueCounTag =  '№ '+ index +' / '+ questions.length +' сұрақ';
    bottom_ques_counter.innerHTML = totalQueCounTag;
    bottom_ques_counter2.innerHTML = totalQueCounTag;
}

function shuffle(array) { //Жауап нұсқаларын алмастыратын функция
    array.sort(() => Math.random() - 0.5);
}

