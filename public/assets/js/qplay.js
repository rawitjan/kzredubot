
var url = new URL(location.href);
var playerid = url.searchParams.get("id");
var quizID = url.searchParams.get("quizID");

const info_box = document.getElementById('info');
const continue_btn = document.getElementById('continue');
const quiz_box = document.getElementById('quiz');
const result_box = document.getElementById('result_box');
const option_list = document.getElementById('option_list');
const timeText = document.getElementById('time_text');
const timeCount = document.getElementById('timer');
const next_btn = document.getElementById('next');

quiz_box.style.display = "none"; 
result_box.style.display = "none"; 
next_btn.style.display = "none"; 

var js = document.createElement("script");
//js.src = "assets/js/inf_1.js";
js.src = "assets/js/" + quizID + ".js";
document.getElementById('cont').appendChild(js);

let que_count = 0;
let que_numb = 1;
let userScore = 0;
let incorque = 0;
let counter;

continue_btn.onclick = ()=>{
    info_box.style.display = "none"; 
    quiz_box.style.display = "block"; 
    showQuetions(0); 
    queCounter(1); 
    startTimer(timeValue);
}

const restart_quiz = document.getElementById('restart');


restart_quiz.onclick = ()=>{
    quiz_box.style.display = "block"; 
    result_box.style.display = "none"; 
    timeValue =  20;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    incorque = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter); 
    startTimer(timeValue);
    timeText.innerHTML = '<i class="bi bi-alarm"></i>'; 
    next_btn.style.display = "none"; 
}

const bottom_ques_counter = document.getElementById('total_que');

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++; 
        que_numb++; 
        showQuetions(que_count);
        queCounter(que_numb); 
        clearInterval(counter); 
        startTimer(timeValue); 
        timeText.innerHTML = '<i class="bi bi-alarm"></i>'; 
        next_btn.style.display = "none"; 
    }else{
        clearInterval(counter);  
        showResult(); 
    }
}

let optionStart = '<div class="col mt-2"><div class="card h-100 shadow-sm option" id="option"><div class="row"><div class="col my-auto">';
let optionEnd = '</div><div class="col-auto my-auto" id="icon"></div></div></div></div>';

function showQuetions(index){
    const que_text = document.getElementById('que_text');
    var option1 = '';
    var option2 = '';
    var option3 = '';
    var option4 = '';
    var option5 = '';
    
    let que_tag =  questions[index].numb + ". " + questions[index].question;
    if (questions[index].options[0] != '') {
        option1 = optionStart + questions[index].options[0] + optionEnd;
    }
    if (questions[index].options[1] != undefined) {
        option2 = optionStart + questions[index].options[1] + optionEnd;
    }
    if (questions[index].options[2] != undefined) {
        option3 = optionStart + questions[index].options[2] + optionEnd;
    }
    if (questions[index].options[3] != undefined) {
        option4 = optionStart + questions[index].options[3] + optionEnd;
    }
    if (questions[index].options[4] != undefined) {
        option5 = optionStart + questions[index].options[4] + optionEnd;
    }
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

function optionSelected(answer){
    clearInterval(counter); 
    let userAns = answer.textContent; 
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length; 
    
    if(userAns == correcAns){ 
        userScore += 1;
        answer.classList.remove("option");
        answer.classList.add("correct"); 
        let iconCol = answer.querySelector('#icon');
        iconCol.innerHTML = tickIconTag; 
    }else{
        incorque += 1;
        answer.classList.remove("option"); 
        answer.classList.add("incorrect"); 
        let iconCol = answer.querySelector('#icon');
        iconCol.innerHTML = crossIconTag;  

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){  
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
}

function showResult(){
    info_box.style.display = "none"; 
    quiz_box.style.display = "none"; 
    result_box.style.display = "block"; 
    const scoreText = document.getElementById("score");
    let scoreTag = '<table class="table"><tr><th scope="row">Қате:</th><td>'+ incorque +'</td></tr><tr><th scope="row">Дұрыс:</th><td>'+ userScore +'</td></tr><tr><th scope="row">Барлық сұрақ саны:</th><td>'+ questions.length +'</td></tr></table>'
    scoreText.innerHTML = scoreTag; 
    var xmlhttp = new XMLHttpRequest();
    var url = "https://kzredubot.herokuapp.com/highscore/" + userScore + "?id=" + playerid;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; 
        time--; 
        if(time < 9){
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; 
        }
        if(time < 0){ 
            clearInterval(counter); 
            timeText.innerHTML = '<i class="bi bi-alarm"></i>'; 
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
        }
    }
}

function queCounter(index){
    let totalQueCounTag =  '№ '+ index +' / '+ questions.length +' сұрақ';
    bottom_ques_counter.innerHTML = totalQueCounTag;
}