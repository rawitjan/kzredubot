var title = 'ICT | Rashitov Rishat';
var questionCount = 1;
var timeValue = 60;
var answerMixing = true;
var deadLine = false;
let syllabus = "Group: <span class='text-primary'>informatics 201</span>";

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
    document.getElementById('syllabus').innerHTML = syllabus;
};


let questions = [
    {
        numb: "1",
        question: "Operating system is …",
        options: ["the main program (complex of programs) on a computer.","the game program on a computer","the open source program on a computer"],
        answer: "the main program (complex of programs) on a computer."
    },
]