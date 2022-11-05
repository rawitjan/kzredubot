let title = 'Құқық негіздері №1';
let questionCount = 30;
let timeValue = 20;
let answerMixing = false;
let deadLine = false;

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