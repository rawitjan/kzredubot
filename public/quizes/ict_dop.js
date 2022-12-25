var title = 'ICT Жоқтар'; 
var questionCount = 18; 
var timeValue = 99;
var answerMixing = true;
var deadLine = false;
var about = true;
let syllabus = '';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: 'Which one is NOT type of OS?',
                    answer: 'McAfee',
                    options: ['Linux','Windows','Mac OS','McAfee','Android']
                }
                ,
                {
                    numb: 2,
                    question: 'Hybrid clouds are a combination of which two types of clouds?',
                    answer: 'Public cloud, Private cloud',
                    options: ['Main cloud, additional cloud','Main cloud, Public cloud','Math cloud, Private cloud','Public cloud, Private cloud','Main cloud, Math cloud']
                }
                ,
                {
                    numb: 3,
                    question: '… - is method based on measuring human biometric parameters or behavioral characteristics. Examples of the implementation of these methods are systems based on iris patterns, fingerprints, ear shapes, infrared capillary vessels, handwriting, voice timbre, and even DNA',
                    answer: 'Biometric authentication',
                    options: ['Technical authentication','Cyber authentication','Biometric authentication','Multi authentication','Computer authentication']
                }
                ,
                {
                    numb: 4,
                    question: 'Operating system is …',
                    answer: 'the main program (complex of programs) on a computer',
                    options: ['the additional program (complex of programs) on a computer..','the internet based program on a computer.','the game program on a computer.','the opensource program on a computer.','the main program (complex of programs) on a computer']
                }
                ,
                {
                    numb: 5,
                    question: 'A computer that offers its resources to network users.',
                    answer: 'Client',
                    options: ['Server','Operating system','Topology','Browser','Client']
                }
                ,
                {
                    numb: 6,
                    question: 'City-wide wireless networks',
                    answer: 'WMan',
                    options: ['Wi-Fi','Wpan','WMan','WLan','Bluetooth']
                }
                ,
                {
                    numb: 7,
                    question: 'A device that connects several computers to a common network',
                    answer: 'switch, hub',
                    options: ['RAM','system unit','tire','processor','switch, hub']
                }
                ,
                {
                    numb: 8,
                    question: 'Virtual terrorism (terror) common among teenagers',
                    answer: 'Cyberbullying',
                    options: ['Cyberbullying','Phishing','Malicious programs','Spam','Blockchain']
                }
                ,
                {
                    numb: 9,
                    question: 'Small, special programs written to harm computers',
                    answer: 'Computer viruses',
                    options: ['Operating systems','Drivers','Browsers','Text editors','Computer viruses']
                }
                ,
                {
                    numb: 10,
                    question: 'Organizational method of information protection:',
                    answer: 'Antiviruses, pin-codes, passwords, archiving.',
                    options: ['Encrypting information, coding, creating a hidden model,','Hidden video camera, radio transmitters, secret document delivery fax machine, portable storage devices.','There is no correct answer.','Antiviruses, pin-codes, passwords, archiving.','Fire protection, non-flammable safes, access, control system.']
                }
                ,
                {
                    numb: 11,
                    question: 'A device that controls other parts of the computer. It works same as the human brain controls the body',
                    answer: 'Video Card',
                    options: ['CPU','RAM','Video Card','Slots','Power supply']
                }
                ,
                {
                    numb: 12,
                    question: 'What kind of program is Google Sheets?',
                    answer: 'Word processing',
                    options: ['Spreadsheet','Word processing','Database','Graphics','Presentation']
                }
                ,
                {
                    numb: 13,
                    question: 'What of the following is not a programming language',
                    answer: 'HTML',
                    options: ['C++','Python','HTML','Moon','Java']
                }
                ,
                {
                    numb: 14,
                    question: 'What of the following computer program list is a Spreadsheet?',
                    answer: 'MS Excel',
                    options: ['WordPad','Linux','Vista','PowerPoint','MS Excel']
                }
                ,
                {
                    numb: 15,
                    question: 'What of the following computer program list is not a Database Management Systems?',
                    answer: 'PowerPoint',
                    options: ['Sybase','dBase','Microsoft Access','PowerPoint','Microsoft SQL Server']
                }
                ,
                {
                    numb: 16,
                    question: 'A standard program that allows you 0 to create web-pages.',
                    answer: 'Notepad',
                    options: ['Notepad','MS Access','MathCad','Ms Word','MatLab']
                }
                ,
                {
                    numb: 17,
                    question: 'A touch screen connected to the computer, the image from which the projector is transferred to the board',
                    answer: 'Interactive Whiteboard.',
                    options: ['Interactive Whiteboard.','Interactive Information Systems.','Intranet.','Information Processes.','Remote Access.']
                }
                ,
                {
                    numb: 18,
                    question: 'The largest key on the Keyboard is?',
                    answer: 'Space bar',
                    options: ['Escape','Tab','Space bar','Ctrl','Shift']
                }
                ,
];
