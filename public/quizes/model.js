var title = 'Құқық негіздері №1';
var questionCount = 30;
var timeValue = 20;
var answerMixing = false;
var deadLine = false;

document.getElementById('quizTitle').textContent = title;
document.getElementById('quizTitle2').textContent = title;
document.getElementById('questionsCount').textContent = questionCount;
if (answerMixing == false) {
    document.getElementById('answerMixMode').textContent = 'Өшірілген';
} else {
    document.getElementById('answerMixMode').textContent = 'Қосулы';
};
document.getElementById('answerTime').textContent = timeValue+' с.';
if (syllabus != undefined) {
    document.getElementById('info').classList.remove('w-75');
    document.getElementById('info').classList.remove('position-absolute');
    document.getElementById('info').classList.remove('top-50');
    document.getElementById('info').classList.remove('start-50');
    document.getElementById('info').classList.remove('translate-middle');
    document.getElementById('syllabus').innerHTML = syllabus;
};

let questions = [
    {
        numb: ,
        question: "",
        answer: "",
        options: [
            "", 
            "", 
            "", 
            "", 
            ""
        ]
    }
];