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


let questions = [
    {
        numb: 1,
        question: "Жасуша бөліктерін зақымданудан қорғайды:",
        answer: "жасуша қабықшасы",
        options: [
            "цитоплазма", 
            "вакуоль", 
            "жасуша қабықшасы", 
            "пластидтер", 
            "ядро"
        ]
    }
];