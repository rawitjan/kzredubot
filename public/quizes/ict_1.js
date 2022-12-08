var title = 'ICT 1-30'; 
var questionCount = 30; 
var timeValue = 30;
var answerMixing = true;
var deadLine = false;
var about = false;
let syllabus = '';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: '﻿Operating system is …',
                    answer: 'the main program (complex of programs) on a computer.',
                    options: ['the main program (complex of programs) on a computer.','the game program on a computer.','the open source program on a computer.', '', '']
                }
                ,
                {
                    numb: 2,
                    question: 'The workstation is:',
                    answer: 'ordinary personal computer that is connected to a network',
                    options: ['ordinary personal computer that is connected to a network','type of a server','desktop used for calculations','powerful desktop computers used for high-performance tasks','type of a netbook']
                }
                ,
                {
                    numb: 3,
                    question: 'What are the differences between 5th generation computer and other generation computers?',
                    answer: 'Technological advancement',
                    options: ['Technological advancement','Scientific code','Object Oriented Programming','All of the above','None of the above']
                }
                ,
                {
                    numb: 4,
                    question: 'Which of the following is the output device?',
                    answer: 'Loud speaker',
                    options: ['Loud speaker','Joystick','Scanner','Mouse','Keyboard']
                }
                ,
                {
                    numb: 5,
                    question: '... is a common boundary between two systems',
                    answer: 'Interface',
                    options: ['Interface','Interdiction','Surface','None of the above','Visual pathway']
                }
                ,
                {
                    numb: 6,
                    question: '... is the fastest, most powerful computer and the most expensive.',
                    answer: 'Supercomputers',
                    options: ['Supercomputers','Digital camera','Personal computer','Tablet PCs','Notebook Computers']
                }
                ,
                {
                    numb: 7,
                    question: 'ASCII stands for',
                    answer: 'American standard code for information interchange',
                    options: ['American standard code for information interchange','All purpose scientific code for information interchange','American security code for information interchange','American security code for information interchange','None of the above']
                }
                ,
                {
                    numb: 8,
                    question: 'A program that is employed in the development, repair or enhancement of other programs is known as …',
                    answer: 'Software tool',
                    options: ['Software tool','System software','Applications program','Utility program','None of the above']
                }
                ,
                {
                    numb: 9,
                    question: 'Which output device is used for translating information from a computer into pictorial form on paper.',
                    answer: 'Plotter',
                    options: ['Plotter','Mouse','Touch panel','Card punch','None of the above']
                }
                ,
                {
                    numb: 10,
                    question: '... involves having a current knowledge and understanding of computers and their uses.',
                    answer: 'Computer literacy',
                    options: ['Computer literacy','Visual pathway','System software','Surface','Interdiction']
                }
                ,
                {
                    numb: 11,
                    question: '... are the technologies used in the conveying, manipulation and storage of data by electronic means',
                    answer: 'Information and communication technologies (ICTs)',
                    options: ['Information and communication technologies (ICTs)','Multimedia technologies (MT)','Fundamentals of technologies','Dynamic technologies','Industry technologies']
                }
                ,
                {
                    numb: 12,
                    question: '... is a device that performs signal conversion',
                    answer: 'Modulator',
                    options: ['Modulator','Plotter','Modem','Keyboard','Printer']
                }
                ,
                {
                    numb: 13,
                    question: 'What is Communication?',
                    answer: 'Communication is simply the act of transferring information from one place to another',
                    options: ['Communication is simply the act of transferring information from one place to another','Communication is set of processing methods','Communication is an organized system for the collection, organization, storage of information','Communication consists of a series of related instructions, organized for a common purpose, that tells the computer what tasks to perform and how to perform them.','Communication is the physical part of a computer']
                }
                ,
                {
                    numb: 14,
                    question: 'Which of these programs is an archive software?',
                    answer: 'Winrar',
                    options: ['Winrar','WinPad','Windows','Word','Wizard']
                }
                ,
                {
                    numb: 15,
                    question: 'Which of the program we use for prevent computer viruses?',
                    answer: 'Antivirus software',
                    options: ['Antivirus software','Controllers','Auditors','Word processor','Viruses']
                }
                ,
                {
                    numb: 16,
                    question: 'What is Software?',
                    answer: 'Software consists of a series of related instructions, organized for a common purpose, that tells the computer what tasks to perform and how to perform them.',
                    options: ['Software consists of a series of related instructions, organized for a common purpose, that tells the computer what tasks to perform and how to perform them.','Software is simply the act of transferring information from one place to another','Software is set of processing methods','Software is an organized system for the collection, organization, storage of information','Software is the physical part of a computer']
                }
                ,
                {
                    numb: 17,
                    question: 'Specify the file extension C: \\ USER \\ DOCS \\ informatics.txt',
                    answer: 'txt',
                    options: ['txt','C: \\','DOCS','Informatics','USER']
                }
                ,
                {
                    numb: 18,
                    question: 'What are the two parts of the file name?',
                    answer: 'File name and extension',
                    options: ['File name and extension','The name of the disk and file name','Path and file name','Disk name and extension','Path and extension']
                }
                ,
                {
                    numb: 19,
                    question: 'How many digits in the binary system?',
                    answer: 'Two',
                    options: ['Two','One','Three','Five','Four']
                }
                ,
                {
                    numb: 20,
                    question: 'What is Computer hardware?',
                    answer: 'Computer hardware is the physical part of a computer',
                    options: ['Computer hardware is the physical part of a computer','Computer hardware is simply the act of transferring information from one place to another','Computer hardware is set of processing methods','Computer hardware is an organized system for the collection, organization, storage of information','Computer hardware consists of a series of related instructions, organized for a common purpose, that tells the computer what tasks to perform and how to perform them.']
                }
                ,
                {
                    numb: 21,
                    question: 'Specify the maximum number in octal number system',
                    answer: 'Seven',
                    options: ['Seven','Five','Six','Four','Nine']
                }
                ,
                {
                    numb: 22,
                    question: 'Key combination for undo',
                    answer: 'CTRL + Z',
                    options: ['CTRL + Z','CTRL + X','CTRL + C','CTRL + P','CTRL + V']
                }
                ,
                {
                    numb: 23,
                    question: 'The information carrier of a large volume',
                    answer: 'Hard drive',
                    options: ['Hard drive','Floppy disk','CD','Flash drive 4Gb','RAM']
                }
                ,
                {
                    numb: 24,
                    question: 'What is Information system?',
                    answer: 'Information system is an organized system for the collection, organization, storage of information',
                    options: ['Information system is an organized system for the collection, organization, storage of information','Information system is simply the act of transferring information from one place to another','Information system is set of processing methods','Information system consists of a series of related instructions, organized for a common purpose, that tells the computer what tasks to perform and how to perform them.','Information system is the physical part of a computer']
                }
                ,
                {
                    numb: 25,
                    question: 'HTML is:',
                    answer: 'Hypertext markup language',
                    options: ['Hypertext markup language','WWW-document viewer program','Application program','Client-server communication protocol','Browser']
                }
                ,
                {
                    numb: 26,
                    question: 'E-mail is:',
                    answer: 'The system for forwarding e-mail messages',
                    options: ['The system for forwarding e-mail messages','Chat of the thematic forum','A link to the archive resource of the Internet','Program for protecting computer','Program for viewing the page code']
                }
                ,
                {
                    numb: 27,
                    question: 'Protocol:',
                    answer: 'It is a rules for connecting to the internet. (TCP/IP)',
                    options: ['It is a rules for connecting to the internet. (TCP/IP)','Connecting computers with each other for exchanging information','It is a program or computer for getting special information from another compute.','It is a program or computer, which gives information to the client computer.','It is a website. Known as a gateway of internet. (Search engine)']
                }
                ,
                {
                    numb: 28,
                    question: 'What is not an antivirus program:',
                    answer: 'Microsoft',
                    options: ['Microsoft','Kaspersky Internet Security','Dr.Web','NOD32','Norton']
                }
                ,
                {
                    numb: 29,
                    question: 'What is not an operating system:',
                    answer: 'PANDA',
                    options: ['PANDA','IOS','WINDOWS','LINUX','ANDROID']
                }
                ,
                {
                    numb: 30,
                    question: 'Portal:',
                    answer: 'It is a website. Known as a gateway of internet. (Search engine)',
                    options: ['It is a website. Known as a gateway of internet. (Search engine)','Connecting computers with each other for exchanging information','It is a program or computer for getting special information from another compute.','It is a program or computer, which gives information to the client computer.','It is a rules for connecting to the internet. (TCP/IP)']
                }
];
