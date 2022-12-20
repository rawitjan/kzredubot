var title = 'ICT 1-226'; 
var questionCount = 226; 
var timeValue = 99;
var answerMixing = true;
var deadLine = false;
var about = false;
let syllabus = '';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: 'The workstation is:',
                    answer: 'ordinary personal computer that is connected to a network',
                    options: ['ordinary personal computer that is connected to a network','type of a server','desktop used for calculations','powerful desktop computers used for high-performance tasks','type of a netbook']
                }
                ,
                {
                    numb: 2,
                    question: 'What are the differences between 5th generation computer and other generation computers?',
                    answer: 'Technological advancement',
                    options: ['Technological advancement','Scientific code','Object Oriented Programming','All of the above','None of the above']
                }
                ,
                {
                    numb: 3,
                    question: 'Which computer language is used for artificial intelligence?',
                    answer: 'PROLOG',
                    options: ['PROLOG','FORTRAN','C/C++','COBOL','None of the above']
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
                    question: 'Which language was developed by professor Niklaus Wirth in 1970-1971?',
                    answer: 'PASCAL',
                    options: ['PASCAL','APL','LOGO','FORTRAN','None of the above']
                }
                ,
                {
                    numb: 8,
                    question: 'ASCII stands for',
                    answer: 'American standard code for information interchange',
                    options: ['American standard code for information interchange','All purpose scientific code for information interchange','American security code for information interchange','American Scientific code for information interchange','None of the above']
                }
                ,
                {
                    numb: 9,
                    question: 'A program that is employed in the development, repair or enhancement of other programs is known as …',
                    answer: 'Software tool',
                    options: ['Software tool','System software','Applications program','Utility program','None of the above']
                }
                ,
                {
                    numb: 10,
                    question: 'Which output device is used for translating information from a computer into pictorial form on paper.',
                    answer: 'Plotter',
                    options: ['Plotter','Mouse','Touch panel','Card punch','None of the above']
                }
                ,
                {
                    numb: 11,
                    question: '... involves having a current knowledge and understanding of computers and their uses.',
                    answer: 'Computer literacy',
                    options: ['Computer literacy','Visual pathway','System software','Surface','Interdiction']
                }
                ,
                {
                    numb: 12,
                    question: '... are the technologies used in the conveying, manipulation and storage of data by electronic means',
                    answer: 'Information and communication technologies (ICTs)',
                    options: ['Information and communication technologies (ICTs)','Multimedia technologies (MT)','Fundamentals of technologies','Dynamic technologies','Industry technologies']
                }
                ,
                {
                    numb: 13,
                    question: 'Which language was devised by Dr. Seymour Aubrey Papert?',
                    answer: 'LOGO',
                    options: ['LOGO','APL','PASCAL','FORTRAN','None of the above']
                }
                ,
                {
                    numb: 14,
                    question: '... is a device that performs signal conversion',
                    answer: 'Modulator',
                    options: ['Modulator','Plotter','Modem','Keyboard','Plotter']
                }
                ,
                {
                    numb: 15,
                    question: 'What is Communication?',
                    answer: 'Communication is simply the act of transferring information from one place to another',
                    options: ['Communication is simply the act of transferring information from one place to another','Communication is set of processing methods','Communication is an organized system for the collection, organization, storage of information','Communication consists of a series of related instructions, organized for a common purpose, that tells the computer what tasks to perform and how to perform them.','Communication is the physical part of a computer']
                }
                ,
                {
                    numb: 16,
                    question: 'Which of these programs is an archive software?',
                    answer: 'Winrar',
                    options: ['Winrar','WinPad','Windows','Word','Wizard']
                }
                ,
                {
                    numb: 17,
                    question: 'Which of the program we use for prevent computer viruses?',
                    answer: 'Antivirus software',
                    options: ['Antivirus software','Controllers','Auditors','Word processor','Viruses']
                }
                ,
                {
                    numb: 18,
                    question: 'What is Software?',
                    answer: 'Software consists of a series of related instructions, organized for a common purpose, that tells the computer what tasks to perform and how to perform them.',
                    options: ['Software consists of a series of related instructions, organized for a common purpose, that tells the computer what tasks to perform and how to perform them.','Software is simply the act of transferring information from one place to another','Software is set of processing methods','Software is an organized system for the collection, organization, storage of information','Software is the physical part of a computer']
                }
                ,
                {
                    numb: 19,
                    question: 'Specify the file extension C: \ USER \ DOCS \ informatics.txt',
                    answer: 'txt',
                    options: ['txt','C: \\','DOCS','Informatics','USER']
                }
                ,
                {
                    numb: 20,
                    question: 'What are the two parts of the file name?',
                    answer: 'File name and extension',
                    options: ['File name and extension','The name of the disk and file name','Path and file name','Disk name and extension','Path and extension']
                }
                ,
                {
                    numb: 21,
                    question: 'How many digits in the binary system?',
                    answer: 'Two',
                    options: ['Two','One','Three','Five','Four']
                }
                ,
                {
                    numb: 22,
                    question: 'What is Computer hardware?',
                    answer: 'Computer hardware is the physical part of a computer',
                    options: ['Computer hardware is the physical part of a computer','Computer hardware is simply the act of transferring information from one place to another','Computer hardware is set of processing methods','Computer hardware is an organized system for the collection, organization, storage of information','Computer hardware consists of a series of related instructions, organized for a common purpose, that tells the computer what tasks to perform and how to perform them.']
                }
                ,
                {
                    numb: 23,
                    question: 'Specify the maximum number in octal number system',
                    answer: 'Seven',
                    options: ['Seven','Five','Six','Four','Nine']
                }
                ,
                {
                    numb: 24,
                    question: 'Key combination for undo',
                    answer: 'CTRL + Z',
                    options: ['CTRL + Z','CTRL + Z','CTRL + C','CTRL + P','CTRL + V']
                }
                ,
                {
                    numb: 25,
                    question: 'The information carrier of a large volume',
                    answer: 'Hard drive',
                    options: ['Hard drive','Floppy disk','CD','Flash drive 4Gb','RAM']
                }
                ,
                {
                    numb: 26,
                    question: 'What is Information system?',
                    answer: 'Information system is an organized system for the collection, organization, storage of information',
                    options: ['Information system is an organized system for the collection, organization, storage of information','Information system is simply the act of transferring information from one place to another','Information system is set of processing methods','Information system consists of a series of related instructions, organized for a common purpose, that tells the computer what tasks to perform and how to perform them.','Information system is the physical part of a computer']
                }
                ,
                {
                    numb: 27,
                    question: 'HTML is:',
                    answer: 'Hypertext markup language',
                    options: ['Hypertext markup language','WWW-document viewer program','Application program','Client-server communication protocol','Browser']
                }
                ,
                {
                    numb: 28,
                    question: 'E-mail is:',
                    answer: 'The system for forwarding e-mail messages',
                    options: ['The system for forwarding e-mail messages','Chat of the thematic forum','A link to the archive resource of the Internet','Program for protecting computer','Program for viewing the page code']
                }
                ,
                {
                    numb: 29,
                    question: 'Protocol:',
                    answer: 'It is a rules for connecting to the internet. (TCP/IP)',
                    options: ['It is a rules for connecting to the internet. (TCP/IP)','Connecting computers with each other for exchanging information','It is a program or computer for getting special information from another compute.','It is a program or computer, which gives information to the client computer.','It is a website. Known as a gateway of internet. (Search engine)']
                }
                ,
                {
                    numb: 30,
                    question: 'What is not an antivirus program:',
                    answer: 'Microsoft',
                    options: ['Microsoft','Kaspersky Internet Security','Dr.Web','NOD32','Norton']
                }
                ,
                {
                    numb: 31,
                    question: 'What is not an operating system:',
                    answer: 'PANDA',
                    options: ['PANDA','IOS','WINDOWS','LINUX','ANDROID']
                }
                ,
                {
                    numb: 32,
                    question: 'Portal:',
                    answer: 'It is a website. Known as a gateway of internet. (Search engine)',
                    options: ['It is a website. Known as a gateway of internet. (Search engine)','Connecting computers with each other for exchanging information','It is a program or computer for getting special information from another compute.','It is a program or computer, which gives information to the client computer.','It is a rules for connecting to the internet. (TCP/IP)']
                }
                ,
                {
                    numb: 33,
                    question: 'You can use…to input sound',
                    answer: 'Microphone',
                    options: ['Microphone','Scanner','Mouse','Joystick','Keyboard']
                }
                ,
                {
                    numb: 34,
                    question: 'You can use…to input text',
                    answer: 'Keyboard',
                    options: ['Keyboard','Microphone','Scanner','Mouse','Joystick']
                }
                ,
                {
                    numb: 35,
                    question: 'Client',
                    answer: 'It is a program or computer for getting special information from another computer.',
                    options: ['It is a program or computer for getting special information from another computer.','Connecting computers with each other for exchanging information','It is a program or computer, which gives information to the client computer.','It is a rules for connecting to the internet. (TCP/IP)','It is a website. Known as a gateway of internet. (Search engine)']
                }
                ,
                {
                    numb: 36,
                    question: 'Which input device is best for draw pictures on to a computer screen',
                    answer: 'Lightpen',
                    options: ['Lightpen','Microphone','Printer','Hard disk','Joystick']
                }
                ,
                {
                    numb: 37,
                    question: 'When we have a bank account, a computer …',
                    answer: 'Control our money',
                    options: ['Control our money','Control machines','Look after patient records and medicines','Provide entertainment','Provide information']
                }
                ,
                {
                    numb: 38,
                    question: 'Server:',
                    answer: 'It is a program or computer, which gives information to the client computer.',
                    options: ['It is a program or computer, which gives information to the client computer.','Connecting computers with each other for exchanging information','It is a program or computer for getting special information from another compute.','It is a rules for connecting to the internet. (TCP/IP)','It is a website. Known as a gateway of internet. (Search engine)']
                }
                ,
                {
                    numb: 39,
                    question: 'The process of creating programs is called …',
                    answer: 'Programming',
                    options: ['Programming','Strategy','Archiving','Analysis','Calculation']
                }
                ,
                {
                    numb: 40,
                    question: 'Which key copies the screen display?',
                    answer: 'Print screen',
                    options: ['Print screen','Page down','Page up','Insert','Scroll Lock']
                }
                ,
                {
                    numb: 41,
                    question: 'Network:',
                    answer: 'Connecting computers with each other for exchanging information',
                    options: ['Connecting computers with each other for exchanging information','It is a program or computer for getting special information from another compute.','It is a program or computer, which gives information to the client computer.','It is a rules for connecting to the internet. (TCP/IP)','It is a website. Known as a gateway of internet. (Search engine)']
                }
                ,
                {
                    numb: 42,
                    question: 'Choose from a set of sets of devices, from which you can assemble a PC:',
                    answer: 'System unit, monitor, keyboard',
                    options: ['System unit, monitor, keyboard','Processor, memory, printer','Scanner, system unit, monitor, printer','System unit, monitor, plotter','Ram, memory, printer']
                }
                ,
                {
                    numb: 43,
                    question: 'Windows is:',
                    answer: 'Operating system',
                    options: ['Operating system','Graphics editor','Tabular processor','A good thing','Antivirus software']
                }
                ,
                {
                    numb: 44,
                    question: 'Website:',
                    answer: 'Group of different web pages.',
                    options: ['Group of different web pages.','It is a device, which decides where data will be send (Network point) ','World Wide Web','It is a program which helps us to use internet','Universal Resource Locator']
                }
                ,
                {
                    numb: 45,
                    question: 'A file created in Microsoft Excel has an extension:',
                    answer: '.xls',
                    options: ['.xls','.bmp','.doc','.zip','.jpg']
                }
                ,
                {
                    numb: 46,
                    question: 'URL:',
                    answer: 'Universal Resource Locator',
                    options: ['Universal Resource Locator','It is a device, which decides where data will be send (Network point)','World Wide Web','It is a program which helps us to use internet','Group of different web pages.']
                }
                ,
                {
                    numb: 47,
                    question: 'A file created in Microsoft Word has an extension:',
                    answer: '.doc',
                    options: ['.doc','.xls','.bmp','.zip','.jpg']
                }
                ,
                {
                    numb: 48,
                    question: 'WWW :',
                    answer: 'World Wide Web',
                    options: ['World Wide Web','It is a device, which decides where data will be send (Network point)','It is a program which helps us to use internet','Group of different web pages.','Universal Resource Locato']
                }
                ,
                {
                    numb: 49,
                    question: 'Which of the following devices are not included in the system unit:',
                    answer: 'Keyboard',
                    options: ['Keyboard','HDD','Memory','CPU','Motherboard']
                }
                ,
                {
                    numb: 50,
                    question: 'Router:',
                    answer: 'It is a device, which decides where data will be send (Network point)',
                    options: ['It is a device, which decides where data will be send (Network point)','World Wide Web','It is a program which helps us to use internet','Group of different web pages.','Universal Resource Locato']
                }
                ,
                {
                    numb: 51,
                    question: 'A shortcut is:',
                    answer: 'Link to a program, folder or document',
                    options: ['Link to a program, folder or document','Part of the file','Name of the program or document','Price list','Name of a file']
                }
                ,
                {
                    numb: 52,
                    question: 'Browser:',
                    answer: 'It is a program which helps us to use internet',
                    options: ['It is a program which helps us to use internet','It is a device, which decides where data will be send (Network point)','World Wide Web ','Group of different web pages. ','Universal Resource Locato']
                }
                ,
                {
                    numb: 53,
                    question: 'MODEM is a device:',
                    answer: 'For transmission of information through telephone communication channels',
                    options: ['For transmission of information through telephone communication channels','For storing information','For processing information at a given time','For output information to print','For sending messages']
                }
                ,
                {
                    numb: 54,
                    question: 'Convert from Decimal to Binary number system: 162',
                    answer: '10100010',
                    options: ['10100010','11100010','10101000','11100011','11010']
                }
                ,
                {
                    numb: 55,
                    question: 'Provider is ...',
                    answer: 'Commercial service, providing its customers access to the Internet',
                    options: ['Commercial service, providing its customers access to the Internet','A unit of information transmitted by Internet Protocol','Username','System Administrator','Enterprise user']
                }
                ,
                {
                    numb: 56,
                    question: 'Convert from Decimal to Binary number system: 36',
                    answer: '100100',
                    options: ['100100','101000','111000','101010','111000']
                }
                ,
                {
                    numb: 57,
                    question: 'Recycle bin serves for:',
                    answer: 'Storage of deleted files, folders',
                    options: ['Storage of deleted files, folders','Storing and sorting files','Storage of created documents','Storage of cut files','Storage of media files']
                }
                ,
                {
                    numb: 58,
                    question: 'Convert from Decimal to Binary number system: 95',
                    answer: '1011111',
                    options: ['1011111','11','1111','1011000','1000111']
                }
                ,
                {
                    numb: 59,
                    question: 'Basic elements of a computer-based information system (CBIS):',
                    answer: 'Hardware, Software, Data, Procedures, People, Communications',
                    options: ['Hardware, Software, Data, Procedures, People, Communications','Antivirus program, Software, Data, Procedures, People, Communications','Hardware, Software, Utilities, Procedures, People, Communications','Date, Information, Data, Procedures, People, Communications','Chat, Software, Data, Users, People, Internet']
                }
                ,
                {
                    numb: 60,
                    question: 'RAM is for:',
                    answer: 'Short-term storage of information at the current time',
                    options: ['Short-term storage of information at the current time','Print of information','Edit of files','Level of information storage','Storage of unchangeable information']
                }
                ,
                {
                    numb: 61,
                    question: 'What is mean by a dedicated computer?',
                    answer: 'Which is assigned one and only one task',
                    options: ['Which is assigned one and only one task','Which is used by one person only','Which is meant for application software only','Which uses on kind of software','None of the above']
                }
                ,
                {
                    numb: 62,
                    question: 'Excel table processor written for the environment:',
                    answer: 'Windows',
                    options: ['Windows','Dos','Unix','Linux','Norton']
                }
                ,
                {
                    numb: 63,
                    question: 'Multithreading:',
                    answer: 'Allows different parts of a single program to run concurrently.',
                    options: ['Allows different parts of a single program to run concurrently.','Allows two or more users to run programs at the same time. Some operating systems permit hundreds or even thousands of concurrent users','Supports running a program on more than one CPU.','Allows more than one program to run concurrently.','Responds to input instantly. General-purpose operating systems, such as DOS and UNIX, are not real-time.']
                }
                ,
                {
                    numb: 64,
                    question: 'The object of the database is …',
                    answer: 'Table',
                    options: ['Table','Cell','Column','File','Format']
                }
                ,
                {
                    numb: 65,
                    question: 'Multi-user:',
                    answer: 'Allows two or more users to run programs at the same time. Some operating systems permit hundreds or even thousands of concurrent users.',
                    options: ['Allows two or more users to run programs at the same time. Some operating systems permit hundreds or even thousands of concurrent users.','Supports running a program on more than one CPU.','Allows more than one program to run concurrently.','Allows different parts of a single program to run concurrently.','Responds to input instantly. General-purpose operating systems, such as DOS and UNIX, are not real-time.']
                }
                ,
                {
                    numb: 66,
                    question: '1024 megabytes represent a ...',
                    answer: 'Gigabyte',
                    options: ['Gigabyte','Megabyte','Byte','None of the above','Terabyte']
                }
                ,
                {
                    numb: 67,
                    question: 'Real time:',
                    answer: 'Responds to input instantly. General-purpose operating systems, such as DOS and UNIX, are not real-time',
                    options: ['Responds to input instantly. General-purpose operating systems, such as DOS and UNIX, are not real-time','Allows two or more users to run programs at the same time. Some operating systems permit hundreds or even thousands of concurrent users','Supports running a program on more than one CPU','Allows more than one program to run concurrently','Allows different parts of a single program to run concurrently']
                }
                ,
                {
                    numb: 68,
                    question: 'Most Popular Desktop Operating Systems are …',
                    answer: 'Windows, Mac, Linux',
                    options: ['Windows, Mac, Linux','Access, Word, Windows','Paradox, MS-DOS, BIOS','Unix, Android, IOS','Android, IOS, BlackBerry']
                }
                ,
                {
                    numb: 69,
                    question: 'Programs designed to perform specific tasks is called known as …',
                    answer: 'Application software',
                    options: ['Application software','System software','Utility programs','Operating system','None of the above']
                }
                ,
                {
                    numb: 70,
                    question: 'When IBM introduced its first personal computer which is called IBM PC?',
                    answer: '1981',
                    options: ['1981','1983','1985','1987','1990']
                }
                ,
                {
                    numb: 71,
                    question: 'The first electronic digital computer contained?',
                    answer: 'Vacuum tubes',
                    options: ['Vacuum tubes','Electronic valves','Semiconductor memory','Transistors','None of the above']
                }
                ,
                {
                    numb: 72,
                    question: 'The word "..." was first recorded as being used in 1613 and originally was used to describe a human who performed calculations or computations',
                    answer: 'Computer',
                    options: ['Computer','Innovation','Technology','Internet','Device']
                }
                ,
                {
                    numb: 73,
                    question: 'The first mechanical computer, created by ... in 1822',
                    answer: 'Charles Babbage',
                    options: ['Charles Babbage','KonradZuse','Alan Turing','John Vincent Atanasoff','J. Presper Eckert and John Mauchly']
                }
                ,
                {
                    numb: 74,
                    question: 'The first computer company was the ... and was founded in 1949 by J. Presper Eckert and John Electronic Controls Company',
                    answer: 'Mauchly',
                    options: ['Mauchly','Microsoft corporation','Apple','Hewlett Packard','Samsung Electronics']
                }
                ,
                {
                    numb: 75,
                    question: 'Which of the following are the two main components of the CPU?',
                    answer: 'control unit and ALU',
                    options: ['control unit and ALU','control unit and registers','registers and main memory','ALU and bus','None of the above']
                }
                ,
                {
                    numb: 76,
                    question: '﻿1024 bytes represent a ...',
                    answer: 'Kilobyte',
                    options: ['Kilobyte','Megabyte','Gigabyte','None of the above','Terabyte']
                }
                ,
                {
                    numb: 77,
                    question: 'Paste the selected text',
                    answer: 'Ctrl + V',
                    options: ['Ctrl + V','Alt+Ctrl+C','Ctrl + X','Ctrl + C','Ctrl + P']
                }
                ,
                {
                    numb: 78,
                    question: '1024 kilobytes represent a …',
                    answer: 'Megabyte',
                    options: ['Megabyte','Gigabyte','Byte','None of the above','Terabyte']
                }
                ,
                {
                    numb: 79,
                    question: 'The ALU and control unit of most of the microcomputers are combined and manufactured on a single silicon chip. What is it called?',
                    answer: 'Microprocessor',
                    options: ['Microprocessor','Monochip','ALU','Control Unit','None of the above']
                }
                ,
                {
                    numb: 80,
                    question: 'The function of CPU is …',
                    answer: 'to read, interpret and process the information and instruction',
                    options: ['to read, interpret and process the information and instruction','to provide a hard copy','to communicate with the operator','to provide external storage of text','None of the above']
                }
                ,
                {
                    numb: 81,
                    question: 'Communication that involves computers, establishing a link through the telephone system is called …',
                    answer: 'Telecommunications',
                    options: ['Telecommunications','Teleprocessing','Microprocessing','All of the above','None of the above']
                }
                ,
                {
                    numb: 82,
                    question: 'Dot-matrix is a type of …',
                    answer: 'Printer',
                    options: ['Printer','Tape','Disk','Bus','None of the above']
                }
                ,
                {
                    numb: 83,
                    question: 'The first general purpose electronic digital computer "ENIAC"was invented by ... at the University of Pennsylvania and began construction in 1943.',
                    answer: 'J. PresperEcket and John W Mauchly',
                    options: ['J. PresperEcket and John W Mauchly','Van-Neumann','Joseph M Juoquard','All of the above','None of the above']
                }
                ,
                {
                    numb: 84,
                    question: 'A software package to perform calculations on data arranged in an array is …',
                    answer: 'Electronic spreadsheets',
                    options: ['Electronic spreadsheets','System software','Utility programs','Application programs','None of the above']
                }
                ,
                {
                    numb: 85,
                    question: 'A collection of eight bits is called',
                    answer: 'Byte',
                    options: ['Byte','Word','Record','File','None of the above']
                }
                ,
                {
                    numb: 86,
                    question: 'Database Management System (DBMS) are …',
                    answer: 'Access, Paradox, Oracle',
                    options: ['Access, Paradox, Oracle','Windows, Mac, Linux','Word, MS-DOS, BIOS','Unix, Android, IOS','Android, IOS, BlackBerry']
                }
                ,
                {
                    numb: 87,
                    question: 'Which is a input device?',
                    answer: 'Web camera',
                    options: ['Web camera','Hard disk','Floppy disk','Printer','Modem']
                }
                ,
                {
                    numb: 88,
                    question: 'Which is a output device?',
                    answer: 'Printer',
                    options: ['Printer','Web camera','Hard disk','Floppy disk','Modem']
                }
                ,
                {
                    numb: 89,
                    question: 'Print the selected text',
                    answer: 'Ctrl + P',
                    options: ['Ctrl + P','Alt+Ctrl+C','Ctrl + X','Ctrl + C','Ctrl + V']
                }
                ,
                {
                    numb: 90,
                    question: 'Which is a input device?',
                    answer: 'Microphone',
                    options: ['Microphone','Plotter','Loud speaker','Projector','Modem']
                }
                ,
                {
                    numb: 91,
                    question: 'Which is a output device?',
                    answer: 'Loud speaker',
                    options: ['Loud speaker','Joystick','Microphone','Mouse','Modem']
                }
                ,
                {
                    numb: 92,
                    question: 'What is the shortcut key you can press to create a copyright symbol?',
                    answer: 'Alt+Ctrl+C',
                    options: ['Alt+Ctrl+C','Alt + C','Ctrl + C','Ctrl + Shift + C','Del + Ctrl + C']
                }
                ,
                {
                    numb: 93,
                    question: 'Popular Mobile Operating Systems',
                    answer: 'Android, IOS, BlackBerry',
                    options: ['Android, IOS, BlackBerry','Windows, Mac, Linux','Access, Word, Windows','Paradox, MS-DOS, BIOS','Unix, Android, IOS']
                }
                ,
                {
                    numb: 94,
                    question: 'Copy the selected text',
                    answer: 'Ctrl + C',
                    options: ['Ctrl + C','Alt+Ctrl+C','Ctrl + X','Ctrl + P','Ctrl + V']
                }
                ,
                {
                    numb: 95,
                    question: 'Cut the selected text',
                    answer: 'Ctrl + X',
                    options: ['Ctrl + X','Alt+Ctrl+C','Ctrl + C','Ctrl + P','Ctrl + V']
                }
                ,
                {
                    numb: 96,
                    question: '"Ctrl + PageDown" is used to',
                    answer: 'Moves the cursor one Page Down',
                    options: ['Moves the cursor one Page Down','Moves the cursor one Paragraph Down','Moves the cursor one Line Down','Moves the cursor one Screen Down','Moves the cursor one Indentation Down']
                }
                ,
                {
                    numb: 97,
                    question: 'Which programming language does Microsoft Word use to create macros?',
                    answer: 'Visual Basic',
                    options: ['Visual Basic','Pascal','C/C++','PHP','Delphi']
                }
                ,
                {
                    numb: 98,
                    question: 'Major security problems are ...',
                    answer: 'Virus, Hacker, Malware, Trojan horses, Password cracking',
                    options: ['Virus, Hacker, Malware, Trojan horses, Password cracking','Virus, Paradox, Malware, Trojan horses, Password editing','Virus, Hacker, Protect, Trojan horses, Password cracking','Virus, Hacker, Malware, Applications, Password editing','Virus, Hockey, Malware, Trojan horses, Password keeping']
                }
                ,
                {
                    numb: 99,
                    question: 'The first recorded cyber crime was recorded in the year ...',
                    answer: '1820',
                    options: ['1820','1830','1840','1850','1855']
                }
                ,
                {
                    numb: 100,
                    question: 'The first spam email took place in ... when it was sent over the Arpanet.',
                    answer: '1978',
                    options: ['1978','1998','1968','1988','1958']
                }
                ,
                {
                    numb: 101,
                    question: 'The first Virus was installed on an Apple Computer in ...',
                    answer: '1982',
                    options: ['1982','1782','1992','1882','2002']
                }
                ,
                {
                    numb: 102,
                    question: 'Which of the following is the Antivirus program?',
                    answer: 'Norton, Panda, McAfee',
                    options: ['Norton, Panda, McAfee','Pascal, McAfee, DrWeb','Python, McAfee, Oracle','Delphi, IOS, DrWeb','McAfee, DrWeb, Android OS']
                }
                ,
                {
                    numb: 103,
                    question: '... is a “program that is loaded onto your computer without your knowledge and runs against your wishes',
                    answer: 'Virus',
                    options: ['Virus','Application','Browser','Mouse','Load speaker']
                }
                ,
                {
                    numb: 104,
                    question: '... is a person who breaks into computers, usually by gaining access to administrative controls.',
                    answer: 'Hacker',
                    options: ['Hacker','User','Home user','Friend','Administrator']
                }
                ,
                {
                    numb: 105,
                    question: 'MS Word software allow you to:',
                    answer: 'View and format text',
                    options: ['View and format text','Create a database','Editing images','Create a presentation','Sending messages']
                }
                ,
                {
                    numb: 106,
                    question: 'MS Access software allow you to:',
                    answer: 'Create a database',
                    options: ['Create a database','View and format text','Editing images','Create a presentation','Sending messages']
                }
                ,
                {
                    numb: 107,
                    question: 'MS PowerPoint software allow you to:',
                    answer: 'Create a presentation',
                    options: ['Create a presentation','View and format text','Create a database','Editing images','Sending messages']
                }
                ,
                {
                    numb: 108,
                    question: 'Which of the following is used as "Input device" for the computer?',
                    answer: 'Web camera',
                    options: ['Web camera','Printer','VDU','TV','None of the above']
                }
                ,
                {
                    numb: 109,
                    question: 'To move cursor to the end of a line, use the ... key (MS Word).',
                    answer: 'END',
                    options: ['END','HOME','INSERT','Page Up','Page Up']
                }
                ,
                {
                    numb: 110,
                    question: 'To move the cursor to the beginning of the document, use ... and to move it to the end of the document, use ... (MS Word)',
                    answer: 'CTRL + HOME, CTRL + END',
                    options: ['CTRL + HOME, CTRL + END','SHIFT + HOME, SHIFT + END','ALT + HOME, ALT + END','DEL + HOME, DEL + END','ENTER + HOME, ENTER + END']
                }
                ,
                {
                    numb: 111,
                    question: '... is a spreadsheet program included in Microsoft Office suite of applications.',
                    answer: 'Microsoft Excel',
                    options: ['Microsoft Excel','Microsoft Access','Microsoft Word','Microsoft PowerPoint','Microsoft Outlook']
                }
                ,
                {
                    numb: 112,
                    question: 'A typical modern computer uses',
                    answer: 'LSI chips',
                    options: ['LSI chips','Vacuum tubes','Valves','All the above','None of the above']
                }
                ,
                {
                    numb: 113,
                    question: 'Which of the following is used as "Input device" for the computer?',
                    answer: 'Light pen',
                    options: ['Light pen','Printer','VDU','TV','None of the above']
                }
                ,
                {
                    numb: 114,
                    question: 'Which of the following terms applies to communication between separate computer systems?',
                    answer: 'Connectivity',
                    options: ['Connectivity','Computer literacy','Power supply','Applications software','None of the above']
                }
                ,
                {
                    numb: 115,
                    question: 'Which of the following terms is an electronic device that supplies electric energy to an electrical load.',
                    answer: 'Power supply',
                    options: ['Power supply','Computer literacy','Applications software','Connectivity','None of the above']
                }
                ,
                {
                    numb: 116,
                    question: 'What is required when more than one person uses a central computer at the same time?',
                    answer: 'Terminal',
                    options: ['Terminal','Light pen','Mouse','Digitizer','None of the above']
                }
                ,
                {
                    numb: 117,
                    question: 'Which one is not a Database Management system?',
                    answer: 'Netscape',
                    options: ['Netscape','Access','Fox Pro','Oracle','MySQL']
                }
                ,
                {
                    numb: 118,
                    question: 'A computer is a box full of electronic',
                    answer: 'Switching devices',
                    options: ['Switching devices','Chips','Circuits','Registers','None of the above']
                }
                ,
                {
                    numb: 119,
                    question: 'The intersection of a column and row in a spreadsheet is called a bon or',
                    answer: 'Cell',
                    options: ['Cell','Key','Field','Menu','None of the above']
                }
                ,
                {
                    numb: 120,
                    question: 'An error in computer data is called',
                    answer: 'Bug',
                    options: ['Bug','Chip','Bit','Byte','None of the above']
                }
                ,
                {
                    numb: 121,
                    question: 'The benefit of using computers are that',
                    answer: 'Computers are very fast and can store huge amounts of data',
                    options: ['Computers are very fast and can store huge amounts of data','Computers produce accurate output even when the input is incorrect','Computers are designed to the inflexible','All of the above','None of the above']
                }
                ,
                {
                    numb: 122,
                    question: 'The hardware (physical) interface is (choose the correct answer)',
                    answer: 'A device that converts signals and transmits them from one component of the equipment to another.',
                    options: ['A device that converts signals and transmits them from one component of the equipment to another.','complex of rules and agreements about connecting of software modules','set of means of dialogue, interactions of the program (machine) with the person','a type of interface where user typing a command string with the computer keyboard and the system provides output by printing text on the computer monitor','a type of interface that allows the use of icons or other visual indicators to interact with electronic devices']
                }
                ,
                {
                    numb: 123,
                    question: 'The software interface is (choose the correct answer)',
                    answer: 'complex of rules and agreements about connecting of software modules',
                    options: ['complex of rules and agreements about connecting of software modules','A device that converts signals and transmits them from one component of the equipment to another.','set of means of dialogue, interactions of the program (machine) with the person','a type of interface where user typing a command string with the computer keyboard and the system provides output by printing text on the computer monitor','a type of interface that allows the use of icons or other visual indicators to interact with electronic devices']
                }
                ,
                {
                    numb: 124,
                    question: 'The user interface is (choose the correct answer)',
                    answer: 'set of means of dialogue, interactions of the program (machine) with the person',
                    options: ['set of means of dialogue, interactions of the program (machine) with the person','a device that converts signals and transmits them from one component of the equipment to another.','complex of rules and agreements about connecting of software modules','a type of interface where user typing a command string with the computer keyboard and the system provides output by printing text on the computer monitor','a type of interface that allows the use of icons or other visual indicators to interact with electronic devices']
                }
                ,
                {
                    numb: 125,
                    question: 'The Command-Line Interface is (choose the correct answer)',
                    answer: 'a type of interface where user typing a command string with the computer keyboard and the system provides output by printing text on the computer monitor',
                    options: ['a type of interface where user typing a command string with the computer keyboard and the system provides output by printing text on the computer monitor','a device that converts signals and transmits them from one component of the equipment to another.','complex of rules and agreements about connecting of software modules','set of means of dialogue, interactions of the program (machine) with the person','a type of interface that allows the use of icons or other visual indicators to interact with electronic devices']
                }
                ,
                {
                    numb: 126,
                    question: 'The Graphical User Interface is (choose the correct answer)',
                    answer: 'a type of interface that allows the use of icons or other visual indicators to interact with electronic devices',
                    options: ['a type of interface that allows the use of icons or other visual indicators to interact with electronic devices','a device that converts signals and transmits them from one component of the equipment to another.','complex of rules and agreements about connecting of software modules','set of means of dialogue, interactions of the program (machine) with the person','a type of interface where user typing a command string with the computer keyboard and the system provides output by printing text on the computer monitor']
                }
                ,
                {
                    numb: 127,
                    question: 'What is SQL',
                    answer: 'a standard language for accessing and manipulating databases.',
                    options: ['a standard language for accessing and manipulating databases.','a device that converts signals and transmits them from one component of the equipment to another.','complex of rules and agreements about connecting of software modules','set of means of dialogue, interactions of the program (machine) with the person','a type of interface where user typing a command string with the computer keyboard and the system provides output by printing text on the computer monitor']
                }
                ,
                {
                    numb: 128,
                    question: 'What is the main object of MS Access?',
                    answer: 'Table',
                    options: ['Table','Form','Query','Report','Macros']
                }
                ,
                {
                    numb: 129,
                    question: 'What type of fields is intended for text information?',
                    answer: 'Memo',
                    options: ['Memo','Currency','Date/Time','OLE Object','Yes/No']
                }
                ,
                {
                    numb: 130,
                    question: 'Choose the correct answer. What is a bus topology?',
                    answer: 'a network type in where every computer and network device is connected to single cable.',
                    options: ['a network type in where every computer and network device is connected to single cable.','each computer is connected to another computer, with the last one connected to the first. Exactly two neighbors for each device.','all the computers are connected to a single hub through a cable','a point-to-point connection to other nodes or devices','It has a root node and all other nodes are connected to it forming a hierarchy']
                }
                ,
                {
                    numb: 131,
                    question: 'Choose the correct answer. What is a ring topology?',
                    answer: 'each computer is connected to another computer, with the last one connected to the first. Exactly two neighbors for each device.',
                    options: ['each computer is connected to another computer, with the last one connected to the first. Exactly two neighbors for each device.','a network type in where every computer and network device is connected to single cable.','all the computers are connected to a single hub through a cable','a point-to-point connection to other nodes or devices','It has a root node and all other nodes are connected to it forming a hierarchy']
                }
                ,
                {
                    numb: 132,
                    question: 'Choose the correct answer.What is a star topology?',
                    answer: 'all the computers are connected to a single hub through a cable',
                    options: ['all the computers are connected to a single hub through a cable','a network type in where every computer and network device is connected to single cable.','each computer is connected to another computer, with the last one connected to the first. Exactly two neighbors for each device.','a point-to-point connection to other nodes or devices','It has a root node and all other nodes are connected to it forming a hierarchy']
                }
                ,
                {
                    numb: 133,
                    question: 'Choose the correct answer.What is a mesh topology?',
                    answer: 'a point-to-point connection to other nodes or devices',
                    options: ['a point-to-point connection to other nodes or devices','a network type in where every computer and network device is connected to single cable.','each computer is connected to another computer, with the last one connected to the first. Exactly two neighbors for each device.','all the computers are connected to a single hub through a cable','It has a root node and all other nodes are connected to it forming a hierarchy']
                }
                ,
                {
                    numb: 134,
                    question: 'Choose the correct answer.What is a tree topology?',
                    answer: 'It has a root node and all other nodes are connected to it forming a hierarchy',
                    options: ['It has a root node and all other nodes are connected to it forming a hierarchy','a network type in where every computer and network device is connected to single cable.','each computer is connected to another computer, with the last one connected to the first. Exactly two neighbors for each device.','all the computers are connected to a single hub through a cable','a point-to-point connection to other nodes or devices']
                }
                ,
                {
                    numb: 135,
                    question: 'Choose a relevant definition for “Smart technology” notion',
                    answer: 'a technological product or solution that can be hooked to the internet, interactive and has a certain degree of intelligence',
                    options: ['a technological product or solution that can be hooked to the internet, interactive and has a certain degree of intelligence','the interaction of visual and audio effects under control of interactive software.','the technology involving the development, maintenance, and use of computer systems, software, and networks for the processing and distribution of data.','electronic system of training through computer and electronic technologies','a special device or program software used in the educational process and replaces the traditional paper book']
                }
                ,
                {
                    numb: 136,
                    question: 'Choose a relevant definition for “Multimedia technology” notion',
                    answer: 'the interaction of visual and audio effects under control of interactive software',
                    options: ['the interaction of visual and audio effects under control of interactive software','a technological product or solution that can be hooked to the internet, interactive and has a certain degree of intelligence','the technology involving the development, maintenance, and use of computer systems, software, and networks for the processing and distribution of data.','electronic system of training through computer and electronic technologies','a special device or program software used in the educational process and replaces the traditional paper book']
                }
                ,
                {
                    numb: 137,
                    question: 'Choose a relevant definition for “Information technology” notion',
                    answer: 'the technology involving the development, maintenance, and use of computer systems, software, and networks for the processing and distribution of data.',
                    options: ['the technology involving the development, maintenance, and use of computer systems, software, and networks for the processing and distribution of data.','a technological product or solution that can be hooked to the internet, interactive and has a certain degree of intelligence','the interaction of visual and audio effects under control of interactive software','electronic system of training through computer and electronic technologies','a special device or program software used in the educational process and replaces the traditional paper book']
                }
                ,
                {
                    numb: 138,
                    question: 'Choose a relevant definition for “E-learning” notion',
                    answer: 'electronic system of training through computer and electronic technologies',
                    options: ['electronic system of training through computer and electronic technologies','a technological product or solution that can be hooked to the internet, interactive and has a certain degree of intelligence','the interaction of visual and audio effects under control of interactive software','the technology involving the development, maintenance, and use of computer systems, software, and networks for the processing and distribution of data.','a special device or program software used in the educational process and replaces the traditional paper book']
                }
                ,
                {
                    numb: 139,
                    question: 'Choose a relevant definition for “Electronic textbook” notion',
                    answer: 'a special device or program software used in the educational process and replaces the traditional paper book',
                    options: ['a special device or program software used in the educational process and replaces the traditional paper book','a technological product or solution that can be hooked to the internet, interactive and has a certain degree of intelligence','the interaction of visual and audio effects under control of interactive software','the technology involving the development, maintenance, and use of computer systems, software, and networks for the processing and distribution of data.','electronic system of training through computer and electronic technologies']
                }
                ,
                {
                    numb: 140,
                    question: 'The solutions for intelligent security services and for intelligent resource optimization services by households are called',
                    answer: 'Smart house',
                    options: ['Smart house','Intelligent Transport','Big data','Artificial intelligence','Telemedicine']
                }
                ,
                {
                    numb: 141,
                    question: 'The areas that based on the use of modern communication technologies for remote medical care and timely advice are called',
                    answer: 'Telemedicine',
                    options: ['Telemedicine','Intelligent Transport','Big data','Artificial intelligence','Smart house']
                }
                ,
                {
                    numb: 142,
                    question: 'The systems in which information and communication technologies are applied in the field of road transport, including infrastructure, vehicles and users, are called',
                    answer: 'Intelligent Transport',
                    options: ['Intelligent Transport','Telemedicine','Big data','Artificial intelligence','Smart house']
                }
                ,
                {
                    numb: 143,
                    question: 'The designation of structured and unstructured data of huge volumes which processed by horizontally scale-out software tools that appeared in the late 2000s and that are alternative to traditional DBMS is called',
                    answer: 'Big data',
                    options: ['Big data','Intelligent Transport','Telemedicine','Artificial intelligence','Smart house']
                }
                ,
                {
                    numb: 144,
                    question: 'The ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings is called',
                    answer: 'Artificial intelligence',
                    options: ['Artificial intelligence','Big data','Intelligent Transport','Telemedicine','Smart house']
                }
                ,
                {
                    numb: 145,
                    question: 'Choose an application program from list of the following programs',
                    answer: 'MS Access',
                    options: ['MS Access','Windows','Linux','Dr Web','WinRAR']
                }
                ,
                {
                    numb: 146,
                    question: 'What program from the list below is not a text editor',
                    answer: 'WinRAR',
                    options: ['WinRAR','MSWord','WordPerfect','Chi Writer','WordPad']
                }
                ,
                {
                    numb: 147,
                    question: 'Which of the following categories does not belong to computer graphics',
                    answer: 'Relational',
                    options: ['Relational','Vector','Raster','Three-dimensional','Fractal']
                }
                ,
                {
                    numb: 148,
                    question: 'What of the following is not a programming language',
                    answer: 'RASTER',
                    options: ['RASTER','PASCAL','BASIC','FORTRAN','ADA']
                }
                ,
                {
                    numb: 149,
                    question: 'What of the following computer program list is a Spreadsheet?',
                    answer: 'Lotus 1-2-3',
                    options: ['Lotus 1-2-3','WordPad','Linux','Vista','PowerPoint']
                }
                ,
                {
                    numb: 150,
                    question: 'What of the following computer program list is not a Database Management Systems?',
                    answer: 'PowerPoint',
                    options: ['PowerPoint','Sybase','dBase','Microsoft Access','Microsoft SQL Server']
                }
                ,
                {
                    numb: 151,
                    question: '﻿Which of the following fields of MS Access is a logical field?',
                    answer: 'Yes/No',
                    options: ['Yes/No','Date/Time','OLE Object','Memo','Currency']
                }
                ,
                {
                    numb: 152,
                    question: 'The arrangement of devices in a network is referred to as its:',
                    answer: 'GGP topology',
                    options: ['GGP topology','Machine topology','Physical topology','Natural topology','Mechanical topology']
                }
                ,
                {
                    numb: 153,
                    question: 'What DOS command is used to change the working directon:',
                    answer: 'Cd',
                    options: ['Cd','cp','Mkdir','Ren','Md']
                }
                ,
                {
                    numb: 154,
                    question: 'A main object of Relational model is:',
                    answer: 'Table',
                    options: ['Table','Form','Macro','Report','Query']
                }
                ,
                {
                    numb: 155,
                    question: 'This type of software makes uncompiled program instructions – the source code – available to programmers who want to modify and improve the software:',
                    answer: 'Open source software',
                    options: ['Open source software','Demoware','Commercial software','Proprietary software','Public domain software']
                }
                ,
                {
                    numb: 156,
                    question: 'Main components of hardware system:',
                    answer: 'External and internal physical components',
                    options: ['External and internal physical components','Electron','Main memory','Data','Computer programs']
                }
                ,
                {
                    numb: 157,
                    question: '…………..when a service provider combines the resources that are available to a large number of customers in a single pool for the dynamic reallocation of power between consumers under the conditions of constant changes in power demand.',
                    answer: 'Resource pooling',
                    options: ['Resource pooling','Resource pooling','Self service on demand','Universal access network','Accounting for consumption']
                }
                ,
                {
                    numb: 158,
                    question: 'factual information (as measurements or statistics) used as a basisfor reasoning, discussion, or calculation.',
                    answer: 'Data',
                    options: ['Data','Byte','Analysis of data','Data visualization','Bit']
                }
                ,
                {
                    numb: 159,
                    question: 'Security Service is:',
                    answer: 'a service that ensures the security of the systems and/or transmitted data set by policy, or protects from attacks',
                    options: ['a service that ensures the security of the systems and/or transmitted data set by policy, or protects from attacks','an information security method of cryptographic transformation','a security method of regulation using the information system resources','a method of physical blockage of a malefactor’s way to the information','a set of measures to ensure information security continuation in time and space']
                }
                ,
                {
                    numb: 160,
                    question: 'A mutual arrangement of computers, physical media and other network devices:',
                    answer: 'Network topology',
                    options: ['Network topology','WiFi','LAN','Work group','Internet']
                }
                ,
                {
                    numb: 161,
                    question: 'The correct definition for the Database System;',
                    answer: 'system A computerized of structured data',
                    options: ['system A computerized of structured data','A computer program for designing 3D objects','A data scanning system','for A computer program for planning varios resources','A computer program for automatic design']
                }
                ,
                {
                    numb: 162,
                    question: 'Web standards are made by:',
                    answer: 'W3C',
                    options: ['W3C','Mozilla','Google','Microsoft','Amazon']
                }
                ,
                {
                    numb: 163,
                    question: 'System software for creating and managing databases:',
                    answer: 'Database Management system',
                    options: ['Database Management system','Optimization','Data model','Data Definition Language','Data integrity']
                }
                ,
                {
                    numb: 164,
                    question: 'Regimentation is:',
                    answer: 'an information security method creating conditions of the automated handling under whish possibilities of unauthorized access are minimized',
                    options: ['an information security method creating conditions of the automated handling under whish possibilities of unauthorized access are minimized','a set of measueres to ensure information secutity continuation in time and space','a security method of regulation using the information system resources','a method of physical blockage of a malefactors way to the information','a piace of software and\or hardware that identifies and\or prewents an attack']
                }
                ,
                {
                    numb: 165,
                    question: 'A collection of software applications sold as a single package:',
                    answer: 'Software suite',
                    options: ['Software suite','Group of applications','Application package','Unity','Software package']
                }
                ,
                {
                    numb: 166,
                    question: 'Alt, Ctrl, Shift is:',
                    answer: 'special control keys',
                    options: ['special control keys','keys to lock certain keyboard modes','Function keys','cursor keys','alphanumeric keys']
                }
                ,
                {
                    numb: 167,
                    question: 'Arrange measurements in ascending order:',
                    answer: 'Byte, Kb, Mb, Gb',
                    options: ['Byte, Kb, Mb, Gb','Gb, Byte, Kb, Mb','Mb, Byte, Kb, Gb','Byte, Kb, Gb, Mb','Byte, Mb, Kb, Gb']
                }
                ,
                {
                    numb: 168,
                    question: 'Translate the decimal number 2137 to the octal number system:',
                    answer: '4131',
                    options: ['4131','1745','5012','71','6272']
                }
                ,
                {
                    numb: 169,
                    question: 'How many megabytes in one gigabyte:',
                    answer: '1024',
                    options: ['1024','1000','512','3','10']
                }
                ,
                {
                    numb: 170,
                    question: 'Special type of memory which is used by BIOS:',
                    answer: 'ROM',
                    options: ['ROM','RAM','Virtual Memory','Cashmemory','CMOS']
                }
                ,
                {
                    numb: 171,
                    question: 'MAN (city network) is capable of transmitting voice and data for:',
                    answer: '50 miles',
                    options: ['50 miles','42 m','43 m','80 m','5 miles']
                }
                ,
                {
                    numb: 172,
                    question: 'The term «informatics» was appeared in:',
                    answer: '1960',
                    options: ['1960','1985','1970','1940','1990']
                }
                ,
                {
                    numb: 173,
                    question: 'The term refers to the way that all the elements of a document text, pictures, titles, and page numbers-are arranged on the page:',
                    answer: 'document formatting',
                    options: ['document formatting','document editing','document creating','document printing','spell checking']
                }
                ,
                {
                    numb: 174,
                    question: 'Bitmap graphics formats include:',
                    answer: 'GIF, BMP',
                    options: ['GIF, BMP','JPEG, TIFF, PCX','RAW, TXT','GIF, DOC,TIFF','RAW, PNG']
                }
                ,
                {
                    numb: 175,
                    question: 'The small, compact, lightweight computers designed to be carried from place to place.',
                    answer: 'Laptop',
                    options: ['Laptop','Mainframe','Terminator','Workstation','Server']
                }
                ,
                {
                    numb: 176,
                    question: 'Microprocessors are element base of ... generation computers',
                    answer: '4',
                    options: ['4','3','2','1','5']
                }
                ,
                {
                    numb: 177,
                    question: 'A device that store data permanently (even after the computer is turned off is:',
                    answer: 'Disk drive',
                    options: ['Disk drive','Power supply','RAM','Motherboard','ROM']
                }
                ,
                {
                    numb: 178,
                    question: 'A sign used between login name and host name:',
                    answer: '@',
                    options: ['@','/','&','%','//']
                }
                ,
                {
                    numb: 179,
                    question: 'An operating system that uses open source software.',
                    answer: 'Linux',
                    options: ['Linux','Mac','Windows','Unix','MS-DOS']
                }
                ,
                {
                    numb: 180,
                    question: 'Third generation (1964-1971) computers were based on',
                    answer: 'Integrated circuits',
                    options: ['Integrated circuits','Vacuum tubes','Microprocessors','Transistors','Artificial intelligence']
                }
                ,
                {
                    numb: 181,
                    question: 'A program that controls the execution of application programs and acts as an interface between the user and computer hardware.',
                    answer: 'Operating system',
                    options: ['Operating system','Utility','Uninstall program','Driver','File compression program']
                }
                ,
                {
                    numb: 182,
                    question: 'Artificial Intelligence',
                    answer: 'Science and technology for creating intelligent machines, especially intelligent computer programs Smart city',
                    options: ['Science and technology for creating intelligent machines, especially intelligent computer programs Smart city','Is the technology used for cellular communication','Is extensional term for information technology (IT) that stresses the role of unifited communications and the integration of telecommunications, computers as well as necessaru enterprise software, middleware, storage, and audio-visual systems, which enable users to access, store, transmit, and manipulate information','computer architecture','']
                }
                ,
                {
                    numb: 183,
                    question: 'The smallest unit of the memory is:',
                    answer: 'bit',
                    options: ['bit','byte','directory','catalog','page']
                }
                ,
                {
                    numb: 184,
                    question: 'Network Topology: can easily be extended at the ends',
                    answer: 'Bus',
                    options: ['Bus','Star','Pair-topology','Topology','Ring']
                }
                ,
                {
                    numb: 185,
                    question: 'Layers that are not OSI models:',
                    answer: 'Currency layer',
                    options: ['Currency layer','Network layer','Data-link layer','Application layer','Transport layer']
                }
                ,
                {
                    numb: 186,
                    question: 'This storage is non-volatile and has greater capacity:',
                    answer: 'Secondary storage',
                    options: ['Secondary storage','Cache','RAM, ROM','RAM','Primary storage']
                }
                ,
                {
                    numb: 187,
                    question: 'Specify a package that allows you to work with databases.',
                    answer: 'MS Access',
                    options: ['MS Access','Math Lab','MS Word','Notepad','MathCAD']
                }
                ,
                {
                    numb: 188,
                    question: 'The archive file is:',
                    answer: 'A set of several files (one file), placed in a compressed form',
                    options: ['A set of several files (one file), placed in a compressed form','A file obtained as a result of data recovery after an unexpected shutdown or restart of the computer','The file that is stored for the longest time on the computer','A file of a special program used in libraries for storing data','The document deposited in the archive']
                }
                ,
                {
                    numb: 189,
                    question: 'The modem is a device:',
                    answer: 'for the transfer of computer data over long distances',
                    options: ['for the transfer of computer data over long distances','which prints drawings, graphics and text','for entering graphic images into the computer','through which you can connect the processor of the computer to an external device','which draws charts, figures or diagrams under the control of a computer']
                }
                ,
                {
                    numb: 190,
                    question: 'The delivery of computing services – servers, storage, databases, networking, software, analytics and more over the Internet is called:',
                    answer: 'Cloud computing',
                    options: ['Cloud computing','Client server technologies','Information security','An application','Computer networks']
                }
                ,
                {
                    numb: 191,
                    question: 'Companies offering cloud computing services are called:',
                    answer: 'Cloud providers',
                    options: ['Cloud providers','Cloud workers','Cloud makers','Cloud administrators','Computer engineering']
                }
                ,
                {
                    numb: 192,
                    question: 'You cannot do with the cloud computing:',
                    answer: 'Increase the volume of Google disk',
                    options: ['Increase the volume of Google disk','Store, back up and recover data','Stream audio and video','Deliver software on demand','Create new apps and services']
                }
                ,
                {
                    numb: 193,
                    question: 'Benefits of cloud computing do not include:',
                    answer: 'User feeling',
                    options: ['User feeling','Global scale','Speed','Productivity','Cost Savings']
                }
                ,
                {
                    numb: 194,
                    question: 'Most cloud computing services fall into three broad categories',
                    answer: 'infrastructure as a service IaaS, platform as a service PaaS and software as a service SaaS',
                    options: ['infrastructure as a service IaaS, platform as a service PaaS and software as a service SaaS','infrastructure as a provider, platform as a provider and software as a service','IabS, PabS and SabS','IaaC, PaaC and SaaC','infrastructure as a cloud, platform as a network and software as a service']
                }
                ,
                {
                    numb: 195,
                    question: 'Choose an appropriate definition of Information Technology:',
                    answer: 'IT refers to the use of hardware and software for storage, retrieval, processing and distributing information of many kinds',
                    options: ['IT refers to the use of hardware and software for storage, retrieval, processing and distributing information of many kinds','IT refers to the use of hardware and software for distribution of useful information','IT refers to the use of principles of Physical sciences and Social sciences for processing of information of many kinds','IT refers to the use of Internet technology','IT refers to the use of hardware and software for processing information']
                }
                ,
                {
                    numb: 196,
                    question: 'Choose correct statement(s).',
                    answer: 'A computer virus is a type of malicious software that, when executed, replicates itself by modifying other computer programs and inserting its own code',
                    options: ['A computer virus is a type of malicious software that, when executed, replicates itself by modifying other computer programs and inserting its own code','Internet does not allow the virus to spread','Virus improves the speed of processing information through computer','Virus is useful for a processing information through computer','Virus is an operating system']
                }
                ,
                {
                    numb: 197,
                    question: 'Choose correct statement(s).',
                    answer: 'Modem converts the analog signal into digital signal and vice-versa',
                    options: ['Modem converts the analog signal into digital signal and vice-versa','Modem is the operating system','Modem helps in stabilizing the voltage','Modem is a main part of CPU','Modem is a software']
                }
                ,
                {
                    numb: 198,
                    question: 'On the keyboard of computer each character has an «ASCII» value which stands for:',
                    answer: 'American Standard Code for Information Interchange',
                    options: ['American Standard Code for Information Interchange','American Stock Code for Information Interchange','African Standard Code for Information Interchange','Asian Standard Code for Information Interchange','Adaptable Standard Code for Information Interchange']
                }
                ,
                {
                    numb: 199,
                    question: 'Which part of the Central Processing Unit (CPU) performs calculation and makes decisions:',
                    answer: 'Arithmetic Logic Unit (ALU)',
                    options: ['Arithmetic Logic Unit (ALU)','American Logic Unit(ALU)','Alternating Logic Unit(ALU)','Algorithm Logic Unit(ALU)','Alternate Local Unit(ALU)']
                }
                ,
                {
                    numb: 200,
                    question: 'CD ROM stands for:',
                    answer: 'Compact Disk Read Only Memory',
                    options: ['Compact Disk Read Only Memory','Computer Disk Read Only Memory','Computer Disk Read Over Memory','Computer Disk Red Onto Memory','Compact Disk Read Over Memory']
                }
                ,
                {
                    numb: 201,
                    question: 'RAM means:',
                    answer: 'Random Access Memory',
                    options: ['Random Access Memory','Rigid Access Memory','Range Access Memory','Revolving Access Memory','Rapid Access Memory']
                }
                ,
                {
                    numb: 202,
                    question: 'Which one of the following is not a network device:',
                    answer: 'CPU',
                    options: ['CPU','Router','Switch','bridge','Hub']
                }
                ,
                {
                    numb: 203,
                    question: 'Choose an Operating System(s).',
                    answer: 'Mac',
                    options: ['Mac','Microsoft Word','Microsoft Excel','Microsoft Access','IPhone']
                }
                ,
                {
                    numb: 204,
                    question: 'Computers on an Internet are identified by:',
                    answer: 'IP address',
                    options: ['IP address','e-mail address','Models of a computer','Users’ name','street address']
                }
                ,
                {
                    numb: 205,
                    question: 'The decimal number system consists of the following symbols:',
                    answer: '0..9',
                    options: ['0..9','0..7','0..5','0..9, a..f','0 .. 1']
                }
                ,
                {
                    numb: 206,
                    question: 'The binary number system consists of the following symbols',
                    answer: '0 and 1',
                    options: ['0 and 1','0..7','0..5','0..9, a..f','0 ..9']
                }
                ,
                {
                    numb: 207,
                    question: 'Communication:',
                    answer: 'uses e-mails, publishes information on web, keeps in touch with stake holders via social networks, conference meetings avoids the need of physical availability of participants of the meetings',
                    options: ['uses e-mails, publishes information on web, keeps in touch with stake holders via social networks, conference meetings avoids the need of physical availability of participants of the meetings','keep track of the financial status of the company on an annually, monthly or even day-to-day basis','shares resources, common database of files accessible for authorized members','Investigate new products, improve the quality of the existing products through effective research','keep track of data about customers, products, demographics and other information important to the business, uses secured mechanisms for storages']
                }
                ,
                {
                    numb: 208,
                    question: 'DNS in internet technology stands for:',
                    answer: 'Domain Name System',
                    options: ['Domain Name System','Distributed Name System','Digited Name System','Delivered Name system','Dynamic Name System']
                }
                ,
                {
                    numb: 209,
                    question: 'The hexadecimal number system consists of the symbols:',
                    answer: '0..9, A..F',
                    options: ['0..9, A..F','0..1','0..9','0..5, A..F','0..7']
                }
                ,
                {
                    numb: 210,
                    question: 'Platform-as-a-service (PaaS) refers to:',
                    answer: 'cloud computing services that supply an on-demand environment for developing, testing, delivering and managing software applications',
                    options: ['cloud computing services that supply an on-demand environment for developing, testing, delivering and managing software applications','Databases needed for development','other datacenter infrastructure','software applications over the Internet','Internet services that supply software applications']
                }
                ,
                {
                    numb: 211,
                    question: 'Multimedia Component(s):',
                    answer: 'text, sound, images, animation, video',
                    options: ['text, sound, images, animation, video','Internet','Talk','Graph','Inter set']
                }
                ,
                {
                    numb: 212,
                    question: 'E-learning is .. .',
                    answer: 'comprises of distributed learning, network or web-based learning',
                    options: ['comprises of distributed learning, network or web-based learning','learning with electronic text','learning on a computer','traditional learning','learning face-to-face']
                }
                ,
                {
                    numb: 213,
                    question: 'The main function of E-Government:',
                    answer: 'the digital interaction among the Government, citizens, and the commercial institutions',
                    options: ['the digital interaction among the Government, citizens, and the commercial institutions','the usual interaction among the Government, citizens, and the commercial institutions','The computer interaction among the Government','the interaction among citizens, and the commercial institutions.','the non-digital interaction among the Government, citizens, and the commercial institutions']
                }
                ,
                {
                    numb: 214,
                    question: 'TCP/IP is necessary if one is to connect to the:',
                    answer: 'Internet',
                    options: ['Internet','Server','Phone lines','PAN','LLN']
                }
                ,
                {
                    numb: 215,
                    question: 'Google chrome is type of:',
                    answer: 'Web browser',
                    options: ['Web browser','IP address','Operating System','Database management system','Inter set']
                }
                ,
                {
                    numb: 216,
                    question: '2 Gigabyte is equal to:',
                    answer: '2048 Megabytes',
                    options: ['2048 Megabytes','2048 Terabytes','2048 Bytes','2000 bits','1024 Kilobytes']
                }
                ,
                {
                    numb: 217,
                    question: 'A computer network covering a small geographic area, like a home, office, or group of buildings is',
                    answer: 'A local area network(LAN)',
                    options: ['A local area network(LAN)','Security area Network','Mobile handheld devices','Firewalls','Wide Area Network (WAN)']
                }
                ,
                {
                    numb: 218,
                    question: 'A group of computers and network devices connected across large physical areas such as states or countries is called:',
                    answer: 'Wide Area Network WAN',
                    options: ['Wide Area Network WAN','Router Area','LAN','Broadcast area','The Web Site connection']
                }
                ,
                {
                    numb: 219,
                    question: 'A network that interconnects users with computer resources in a geographic area or region larger than that covered by a local area network (LAN) but smaller than the area covered by wide area network (WAN) is called:',
                    answer: 'Metropolitan Area Network MAN',
                    options: ['Metropolitan Area Network MAN','Home PNA','The Internet','Firewall','PAN']
                }
                ,
                {
                    numb: 220,
                    question: 'Network topology`s category(ies):',
                    answer: 'Tree or Hierarchical topology',
                    options: ['Tree or Hierarchical topology','Peer-to-peer (workgroup)','Ethernet','Personal Area Network (PAN)','Internet']
                }
                ,
                {
                    numb: 221,
                    question: 'Convert 103 from decimal numeral system into binary.',
                    answer: '1100111',
                    options: ['1100111','123','123456','123','1234']
                }
                ,
                {
                    numb: 222,
                    question: 'Cartridge of the printer is used to hold:',
                    answer: 'Toner',
                    options: ['Toner','Laser','Ribbon','Pins','Paper']
                }
                ,
                {
                    numb: 223,
                    question: 'Choose a shortcut key used to paste.',
                    answer: 'CTRL+V',
                    options: ['CTRL+V','CTRL+C','CTRL+A','CTRL+P','CTRL+S']
                }
                ,
                {
                    numb: 224,
                    question: 'A small program that is used to compress or decompress video or audio files.',
                    answer: 'Codec',
                    options: ['Codec','Compression program','File extension','Metadata','Container']
                }
                ,
                {
                    numb: 225,
                    question: 'Choose commonly used database types.',
                    answer: 'Hierarchical',
                    options: ['Hierarchical','Parallel','Matrix','Text-oriented','Sequential']
                }
                ,
                {
                    numb: 226,
                    question: 'Choose well-known viruses.',
                    answer: 'Melissa',
                    options: ['Melissa','Avast','Avira','Panda','McAfee']
                }
                ,
];
showqa();