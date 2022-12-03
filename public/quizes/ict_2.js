var title = 'ICT 31-65'; 
var questionCount = 35; 
var timeValue = 35;
var answerMixing = true;
var deadLine = false;
var about = false;
let syllabus = '';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: '﻿You can use…to input sound',
                    answer: 'Microphone',
                    options: ['Microphone','Scanner','Mouse','Joystick','Keyboard']
                }
                ,
                {
                    numb: 2,
                    question: 'You can use…to input text',
                    answer: 'Keyboard',
                    options: ['Keyboard','Microphone','Scanner','Mouse','Joystick']
                }
                ,
                {
                    numb: 3,
                    question: 'Client',
                    answer: 'It is a program or computer for getting special information from another computer.',
                    options: ['It is a program or computer for getting special information from another computer.','Connecting computers with each other for exchanging information','It is a program or computer, which gives information to the client computer.','It is a rules for connecting to the internet. (TCP/IP)','It is a website. Known as a gateway of internet. (Search engine)']
                }
                ,
                {
                    numb: 4,
                    question: 'Which input device is best for draw pictures on to a computer screen',
                    answer: 'Lightpen',
                    options: ['Lightpen','Microphone','Printer','Hard disk','Joystick']
                }
                ,
                {
                    numb: 5,
                    question: 'When we have a bank account, a computer …',
                    answer: 'Control our money',
                    options: ['Control our money','Control machines','Look after patient records and medicines','Provide entertainment','Provide information']
                }
                ,
                {
                    numb: 6,
                    question: 'Server',
                    answer: 'It is a program or computer, which gives information to the client computer.',
                    options: ['It is a program or computer, which gives information to the client computer.','Connecting computers with each other for exchanging information','It is a program or computer for getting special information from another compute.','It is a rules for connecting to the internet. (TCP/IP)','It is a website. Known as a gateway of internet. (Search engine)']
                }
                ,
                {
                    numb: 7,
                    question: 'The process of creating programs is called …',
                    answer: 'Programming',
                    options: ['Programming','Strategy','Archiving','Analysis','Calculation']
                }
                ,
                {
                    numb: 8,
                    question: 'Which key copies the screen display?',
                    answer: 'Print screen',
                    options: ['Print screen','Page down','Page up','Insert','Scroll Lock']
                }
                ,
                {
                    numb: 9,
                    question: 'Network',
                    answer: 'Connecting computers with each other for exchanging information',
                    options: ['Connecting computers with each other for exchanging information','It is a program or computer for getting special information from another compute.','It is a program or computer, which gives information to the client computer.','It is a rules for connecting to the internet. (TCP/IP)','It is a website. Known as a gateway of internet. (Search engine)']
                }
                ,
                {
                    numb: 10,
                    question: 'Choose from a set of sets of devices, from which you can assemble a PC',
                    answer: 'System unit, monitor, keyboard',
                    options: ['System unit, monitor, keyboard','Processor, memory, printer','Scanner, system unit, monitor, printer','System unit, monitor, plotter','Ram, memory, printer']
                }
                ,
                {
                    numb: 11,
                    question: 'Windows is:',
                    answer: 'Operating system',
                    options: ['Operating system','Graphics editor','Tabular processor','A good thing','Antivirus software']
                }
                ,
                {
                    numb: 12,
                    question: 'Website:',
                    answer: 'Group of different web pages.',
                    options: ['Group of different web pages.','It is a device, which decides where data will be send (Network point)','World Wide Web','It is a program which helps us to use internet','Universal Resource Locator']
                }
                ,
                {
                    numb: 13,
                    question: 'A file created in Microsoft Excel has an extension:',
                    answer: '.xls',
                    options: ['.xls','.bmp','.doc','.zip','.jpg']
                }
                ,
                {
                    numb: 14,
                    question: 'URL:',
                    answer: 'Universal Resource Locator',
                    options: ['Universal Resource Locator','It is a device, which decides where data will be send (Network point)','World Wide Web','It is a program which helps us to use internet','Group of different web pages.']
                }
                ,
                {
                    numb: 15,
                    question: 'A file created in Microsoft Word has an extension:',
                    answer: '.doc',
                    options: ['.doc','.xls','.bmp','.zip','.jpg']
                }
                ,
                {
                    numb: 16,
                    question: 'WWW',
                    answer: 'World Wide Web',
                    options: ['World Wide Web','It is a device, which decides where data will be send (Network point)','It is a program which helps us to use internet','Group of different web pages.','Universal Resource Locato']
                }
                ,
                {
                    numb: 17,
                    question: 'Which of the following devices are not included in the system unit:',
                    answer: 'Keyboard',
                    options: ['Keyboard','HDD','Memory','CPU','Motherboard']
                }
                ,
                {
                    numb: 18,
                    question: 'Router',
                    answer: 'It is a device, which decides where data will be send (Network point)',
                    options: ['It is a device, which decides where data will be send (Network point)','World Wide Web','It is a program which helps us to use internet','Group of different web pages.','Universal Resource Locato']
                }
                ,
                {
                    numb: 19,
                    question: 'A shortcut is:',
                    answer: 'Link to a program, folder or document',
                    options: ['Link to a program, folder or document','Part of the file','Name of the program or document','Price list','Name of a file']
                }
                ,
                {
                    numb: 20,
                    question: 'Browser',
                    answer: 'It is a program which helps us to use internet',
                    options: ['It is a program which helps us to use internet','It is a device, which decides where data will be send (Network point)','World Wide Web','Group of different web pages.','Universal Resource Locato']
                }
                ,
                {
                    numb: 21,
                    question: 'MODEM is a device',
                    answer: 'For transmission of information through telephone communication channels',
                    options: ['For transmission of information through telephone communication channels','For storing information','For processing information at a given time','For output information to print','For sending messages']
                }
                ,
                {
                    numb: 22,
                    question: 'Convert from Decimal to Binary number system: 162',
                    answer: '10100010',
                    options: ['10100010','11100010','10101000','11100011','11010']
                }
                ,
                {
                    numb: 23,
                    question: 'Provider is ...',
                    answer: 'Commercial service, providing its customers access to the Internet',
                    options: ['Commercial service, providing its customers access to the Internet','A unit of information transmitted by Internet Protocol','Username','System Administrator','Enterprise user']
                }
                ,
                {
                    numb: 24,
                    question: 'Convert from Decimal to Binary number system: 36',
                    answer: '100100',
                    options: ['100100','101000','111000','101010','111001']
                }
                ,
                {
                    numb: 25,
                    question: 'Recycle bin serves for',
                    answer: 'Storage of deleted files, folders',
                    options: ['Storage of deleted files, folders','Storing and sorting files','Storage of created documents','Storage of cut files','Storage of media files']
                }
                ,
                {
                    numb: 26,
                    question: 'Convert from Decimal to Binary number system: 95',
                    answer: '1011111',
                    options: ['1011111','0000011','0001111','1011000','1000111']
                }
                ,
                {
                    numb: 27,
                    question: 'Basic elements of a computer-based information system (CBIS):',
                    answer: 'Hardware, Software, Data, Procedures, People, Communications',
                    options: ['Hardware, Software, Data, Procedures, People, Communications','Antivirus program, Software, Data, Procedures, People, Communications','Hardware, Software, Utilities, Procedures, People, Communications','Date, Information, Data, Procedures, People, Communications','Chat, Software, Data, Users, People, Internet']
                }
                ,
                {
                    numb: 28,
                    question: 'RAM is for:',
                    answer: 'Short-term storage of information at the current time',
                    options: ['Short-term storage of information at the current time','Print of information','Edit of files','Level of information storage','Storage of unchangeable information']
                }
                ,
                {
                    numb: 29,
                    question: 'What is mean by a dedicated computer?',
                    answer: 'Which is assigned one and only one task',
                    options: ['Which is assigned one and only one task','Which is used by one person only','Which is meant for application software only','Which uses on kind of software','None of the above']
                }
                ,
                {
                    numb: 30,
                    question: 'Excel table processor written for the environment:',
                    answer: 'Windows',
                    options: ['Windows','Dos','Unix','Linux','Norton']
                }
                ,
                {
                    numb: 31,
                    question: 'Multithreading:',
                    answer: 'Allows different parts of a single program to run concurrently.',
                    options: ['Allows different parts of a single program to run concurrently.','Allows two or more users to run programs at the same time. Some operating systems permit hundreds or even thousands of concurrent users.','Supports running a program on more than one CPU.','Allows more than one program to run concurrently.','Responds to input instantly. General-purpose operating systems, such as DOS and UNIX, are not real-time']
                }
                ,
                {
                    numb: 32,
                    question: 'The object of the database is …',
                    answer: 'Table',
                    options: ['Table','Cell','Column','File','Format']
                }
                ,
                {
                    numb: 33,
                    question: 'Multi-user:',
                    answer: 'Allows two or more users to run programs at the same time. Some operating systems permit hundreds or even thousands of concurrent users.',
                    options: ['Allows two or more users to run programs at the same time. Some operating systems permit hundreds or even thousands of concurrent users.','Supports running a program on more than one CPU.','Allows more than one program to run concurrently.','Allows different parts of a single program to run concurrently.','Responds to input instantly. General-purpose operating systems, such as DOS and UNIX, are not real-time.']
                }
                ,
                {
                    numb: 34,
                    question: '1024 megabytes represent a ...',
                    answer: 'Gigabyte',
                    options: ['Gigabyte','Megabyte','Byte','None of the above','Terabyte']
                }
                ,
                {
                    numb: 35,
                    question: 'Real time:',
                    answer: 'Responds to input instantly. General-purpose operating systems, such as DOS and UNIX, are not real-time',
                    options: ['Responds to input instantly. General-purpose operating systems, such as DOS and UNIX, are not real-time','Allows two or more users to run programs at the same time. Some operating systems permit hundreds or even thousands of concurrent users','Supports running a program on more than one CPU','Allows more than one program to run concurrently','Allows different parts of a single program to run concurrently']
                }
                ,
];
