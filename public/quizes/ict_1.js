var title = 'ICT | 1-75'; 
var questionCount = 75; 
var timeValue = 99;
var answerMixing = true;
var deadLine = false;
var about = true;
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
                    options: ['1011111','0000011','0001111','1011000','1000111']
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
];
showqa();