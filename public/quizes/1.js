var title = 'ICT | Rashitov Rishat';
var questionCount = 20;
var timeValue = 60;
var answerMixing = false;
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


var questions = [
    {
        numb: "1",
        question: "The HTML language is used to create these documents:",
        options: ["to create Web pages","to create programs","to create a text document"],
        answer: "to create Web pages"
    },{
        numb: "2",
        question: "Which HTML attribute specifies the alternative text for the image if this image is not displayed:",
        options: ["imgalt","alt","ingvar"],
        answer: "alt"
    },{
        numb: "3",
        question: "Which tag is used to create links in HTML:",
        options: ["<img>","<font>","<a>"],
        answer: "<a>"
    },{
        numb: "4",
        question: "A list in which the enumeration elements are marked with bullets allows you to create a tag:",
        options: ["<ul>","<bl>","<ol>"],
        answer: "<ul>"
    },{
        numb: "5",
        question: "How to make the text oblique (italics). Using the tag:",
        options: ["<br>","<p>","<i>"],
        answer: "<i>"
    },{
        numb: "6",
        question: "A tag that connects scripts that are executed on the client side to an existing HTML document:",
        options: ["<client>","<script>","<object>"],
        answer: "<script>"
    },{
        numb: "7",
        question: "How to make the text bold. Using the tag:",
        options: ["p","br","b"],
        answer: "b"
    },{
        numb: "8",
        question: "There are no ... tags in HTML:",
        options: ["triple","single","paired"],
        answer: "triple"
    },{
        numb: "9",
        question: "Which option is a properly organized hyperlink:",
        options: ["a href='img.html'","a img='img.html'","img href='IMG.html'"],
        answer: "a href='img.html'"
    },{
        numb: "10",
        question: "Select a new line transition tag (creating an empty line):",
        options: ["br","str","img"],
        answer: "br"
    },{
        numb: "11",
        question: "An HTML tag that allows you to play audio recordings is:",
        options: ["<music>","<sound>","<audio>"],
        answer: "<audio>"
    },{
        numb: "12",
        question: "The text will be placed in two lines if you write the code:",
        options: ["<p> Computer <br> technologies </p>;","<p> <br> Computer technology </br></p>","<p> Computer <br> technologies </br></p>"],
        answer: "<p> Computer <br> technologies </p>"
    },{
        numb: "13",
        question: "The tag is used to declare a web page:",
        options: ["title","html","body"],
        answer: "body"
    },{
        numb: "14",
        question: "You can fix the HTML code of a Web page using the program:",
        options: ["Microsoft Word","Microsoft Edge","NoteBook / NotePad"],
        answer: "NoteBook / NotePad"
    },{
        numb: "15",
        question: "HTML is:",
        options: ["text editor","hypertext markup language","programming language"],
        answer: "hypertext markup language"
    },{
        numb: "16",
        question: "What extension do web pages have?:",
        options: ["txt","docx","html"],
        answer: "html"
    },{
        numb: "17",
        question: "Which tag can be used to insert a drawing:",
        options: ["title","img","br"],
        answer: "img"
    },{
        numb: "18",
        question: "The main content of the web page is placed inside the tag:",
        options: ["html","title","body"],
        answer: "body"
    },{
        numb: "19",
        question: "What tag is used to set a paragraph in HTML:",
        options: ["align","td","p"],
        answer: "p"
    },{
        numb: "20",
        question: "The name of the web page is written in the tag:",
        options: ["title","head","html"],
        answer: "title"
    },
];