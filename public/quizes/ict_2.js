var title = 'ICT | 76-150'; 
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
                    question: '1024 bytes represent a ...',
                    answer: 'Kilobyte',
                    options: ['Kilobyte','Megabyte','Gigabyte','None of the above','Terabyte']
                }
                ,
                {
                    numb: 2,
                    question: 'Paste the selected text',
                    answer: 'Ctrl + V',
                    options: ['Ctrl + V','Alt+Ctrl+C','Ctrl + X','Ctrl + C','Ctrl + P']
                }
                ,
                {
                    numb: 3,
                    question: '1024 kilobytes represent a …',
                    answer: 'Megabyte',
                    options: ['Megabyte','Gigabyte','Byte','None of the above','Terabyte']
                }
                ,
                {
                    numb: 4,
                    question: 'The ALU and control unit of most of the microcomputers are combined and manufactured on a single silicon chip. What is it called?',
                    answer: 'Microprocessor',
                    options: ['Microprocessor','Monochip','ALU','Control Unit','None of the above']
                }
                ,
                {
                    numb: 5,
                    question: 'The function of CPU is …',
                    answer: 'to read, interpret and process the information and instruction',
                    options: ['to read, interpret and process the information and instruction','to provide a hard copy','to communicate with the operator','to provide external storage of text','None of the above']
                }
                ,
                {
                    numb: 6,
                    question: 'Communication that involves computers, establishing a link through the telephone system is called …',
                    answer: 'Telecommunications',
                    options: ['Telecommunications','Teleprocessing','Microprocessing','All of the above','None of the above']
                }
                ,
                {
                    numb: 7,
                    question: 'Dot-matrix is a type of …',
                    answer: 'Printer',
                    options: ['Printer','Tape','Disk','Bus','None of the above']
                }
                ,
                {
                    numb: 8,
                    question: 'The first general purpose electronic digital computer "ENIAC"was invented by ... at the University of Pennsylvania and began construction in 1943.',
                    answer: 'J. PresperEcket and John W Mauchly',
                    options: ['J. PresperEcket and John W Mauchly','Van-Neumann','Joseph M Juoquard','All of the above','None of the above']
                }
                ,
                {
                    numb: 9,
                    question: 'A software package to perform calculations on data arranged in an array is …',
                    answer: 'Electronic spreadsheets',
                    options: ['Electronic spreadsheets','System software','Utility programs','Application programs','None of the above']
                }
                ,
                {
                    numb: 10,
                    question: 'A collection of eight bits is called',
                    answer: 'Byte',
                    options: ['Byte','Word','Record','File','None of the above']
                }
                ,
                {
                    numb: 11,
                    question: 'Database Management System (DBMS) are …',
                    answer: 'Access, Paradox, Oracle',
                    options: ['Access, Paradox, Oracle','Windows, Mac, Linux','Word, MS-DOS, BIOS','Unix, Android, IOS','Android, IOS, BlackBerry']
                }
                ,
                {
                    numb: 12,
                    question: 'Which is a input device?',
                    answer: 'Web camera',
                    options: ['Web camera','Hard disk','Floppy disk','Printer','Modem']
                }
                ,
                {
                    numb: 13,
                    question: 'Which is a output device?',
                    answer: 'Printer',
                    options: ['Printer','Web camera','Hard disk','Floppy disk','Modem']
                }
                ,
                {
                    numb: 14,
                    question: 'Print the selected text',
                    answer: 'Ctrl + P',
                    options: ['Ctrl + P','Alt+Ctrl+C','Ctrl + X','Ctrl + C','Ctrl + V']
                }
                ,
                {
                    numb: 15,
                    question: 'Which is a input device?',
                    answer: 'Microphone',
                    options: ['Microphone','Plotter','Loud speaker','Projector','Modem']
                }
                ,
                {
                    numb: 16,
                    question: 'Which is a output device?',
                    answer: 'Loud speaker',
                    options: ['Loud speaker','Joystick','Microphone','Mouse','Modem']
                }
                ,
                {
                    numb: 17,
                    question: 'What is the shortcut key you can press to create a copyright symbol?',
                    answer: 'Alt+Ctrl+C',
                    options: ['Alt+Ctrl+C','Alt + C','Ctrl + C','Ctrl + Shift + C','Del + Ctrl + C']
                }
                ,
                {
                    numb: 18,
                    question: 'Popular Mobile Operating Systems',
                    answer: 'Android, IOS, BlackBerry',
                    options: ['Android, IOS, BlackBerry','Windows, Mac, Linux','Access, Word, Windows','Paradox, MS-DOS, BIOS','Unix, Android, IOS']
                }
                ,
                {
                    numb: 19,
                    question: 'Copy the selected text',
                    answer: 'Ctrl + C',
                    options: ['Ctrl + C','Alt+Ctrl+C','Ctrl + X','Ctrl + P','Ctrl + V']
                }
                ,
                {
                    numb: 20,
                    question: 'Cut the selected text',
                    answer: 'Ctrl + X',
                    options: ['Ctrl + X','Alt+Ctrl+C','Ctrl + C','Ctrl + P','Ctrl + V']
                }
                ,
                {
                    numb: 21,
                    question: '"Ctrl + PageDown" is used to',
                    answer: 'Moves the cursor one Page Down',
                    options: ['Moves the cursor one Page Down','Moves the cursor one Paragraph Down','Moves the cursor one Line Down','Moves the cursor one Screen Down','Moves the cursor one Indentation Down']
                }
                ,
                {
                    numb: 22,
                    question: 'Which programming language does Microsoft Word use to create macros?',
                    answer: 'Visual Basic',
                    options: ['Visual Basic','Pascal','C/C++','PHP','Delphi']
                }
                ,
                {
                    numb: 23,
                    question: 'Major security problems are ...',
                    answer: 'Virus, Hacker, Malware, Trojan horses, Password cracking',
                    options: ['Virus, Hacker, Malware, Trojan horses, Password cracking','Virus, Paradox, Malware, Trojan horses, Password editing','Virus, Hacker, Protect, Trojan horses, Password cracking','Virus, Hacker, Malware, Applications, Password editing','Virus, Hockey, Malware, Trojan horses, Password keeping']
                }
                ,
                {
                    numb: 24,
                    question: 'The first recorded cyber crime was recorded in the year ...',
                    answer: '1820',
                    options: ['1820','1830','1840','1850','1855']
                }
                ,
                {
                    numb: 25,
                    question: 'The first spam email took place in ... when it was sent over the Arpanet.',
                    answer: '1978',
                    options: ['1978','1998','1968','1988','1958']
                }
                ,
                {
                    numb: 26,
                    question: 'The first Virus was installed on an Apple Computer in ...',
                    answer: '1982',
                    options: ['1982','1782','1992','1882','2002']
                }
                ,
                {
                    numb: 27,
                    question: 'Which of the following is the Antivirus program?',
                    answer: 'Norton, Panda, McAfee',
                    options: ['Norton, Panda, McAfee','Pascal, McAfee, DrWeb','Python, McAfee, Oracle','Delphi, IOS, DrWeb','McAfee, DrWeb, Android OS']
                }
                ,
                {
                    numb: 28,
                    question: '... is a “program that is loaded onto your computer without your knowledge and runs against your wishes',
                    answer: 'Virus',
                    options: ['Virus','Application','Browser','Mouse','Load speaker']
                }
                ,
                {
                    numb: 29,
                    question: '... is a person who breaks into computers, usually by gaining access to administrative controls.',
                    answer: 'Hacker',
                    options: ['Hacker','User','Home user','Friend','Administrator']
                }
                ,
                {
                    numb: 30,
                    question: 'MS Word software allow you to:',
                    answer: 'View and format text',
                    options: ['View and format text','Create a database','Editing images','Create a presentation','Sending messages']
                }
                ,
                {
                    numb: 31,
                    question: 'MS Access software allow you to:',
                    answer: 'Create a database',
                    options: ['Create a database','View and format text','Editing images','Create a presentation','Sending messages']
                }
                ,
                {
                    numb: 32,
                    question: 'MS PowerPoint software allow you to:',
                    answer: 'Create a presentation',
                    options: ['Create a presentation','View and format text','Create a database','Editing images','Sending messages']
                }
                ,
                {
                    numb: 33,
                    question: 'Which of the following is used as "Input device" for the computer?',
                    answer: 'Web camera',
                    options: ['Web camera','Printer','VDU','TV','None of the above']
                }
                ,
                {
                    numb: 34,
                    question: 'To move cursor to the end of a line, use the ... key (MS Word).',
                    answer: 'END',
                    options: ['END','HOME','INSERT','Page Up','Page Up']
                }
                ,
                {
                    numb: 35,
                    question: 'To move the cursor to the beginning of the document, use ... and to move it to the end of the document, use ... (MS Word)',
                    answer: 'CTRL + HOME, CTRL + END',
                    options: ['CTRL + HOME, CTRL + END','SHIFT + HOME, SHIFT + END','ALT + HOME, ALT + END','DEL + HOME, DEL + END','ENTER + HOME, ENTER + END']
                }
                ,
                {
                    numb: 36,
                    question: '... is a spreadsheet program included in Microsoft Office suite of applications.',
                    answer: 'Microsoft Excel',
                    options: ['Microsoft Excel','Microsoft Access','Microsoft Word','Microsoft PowerPoint','Microsoft Outlook']
                }
                ,
                {
                    numb: 37,
                    question: 'A typical modern computer uses',
                    answer: 'LSI chips',
                    options: ['LSI chips','Vacuum tubes','Valves','All the above','None of the above']
                }
                ,
                {
                    numb: 38,
                    question: 'Which of the following is used as "Input device" for the computer?',
                    answer: 'Light pen',
                    options: ['Light pen','Printer','VDU','TV','None of the above']
                }
                ,
                {
                    numb: 39,
                    question: 'Which of the following terms applies to communication between separate computer systems?',
                    answer: 'Connectivity',
                    options: ['Connectivity','Computer literacy','Power supply','Applications software','None of the above']
                }
                ,
                {
                    numb: 40,
                    question: 'Which of the following terms is an electronic device that supplies electric energy to an electrical load.',
                    answer: 'Power supply',
                    options: ['Power supply','Computer literacy','Applications software','Connectivity','None of the above']
                }
                ,
                {
                    numb: 41,
                    question: 'What is required when more than one person uses a central computer at the same time?',
                    answer: 'Terminal',
                    options: ['Terminal','Light pen','Mouse','Digitizer','None of the above']
                }
                ,
                {
                    numb: 42,
                    question: 'Which one is not a Database Management system?',
                    answer: 'Netscape',
                    options: ['Netscape','Access','Fox Pro','Oracle','MySQL']
                }
                ,
                {
                    numb: 43,
                    question: 'A computer is a box full of electronic',
                    answer: 'Switching devices',
                    options: ['Switching devices','Chips','Circuits','Registers','None of the above']
                }
                ,
                {
                    numb: 44,
                    question: 'The intersection of a column and row in a spreadsheet is called a bon or',
                    answer: 'Cell',
                    options: ['Cell','Key','Field','Menu','None of the above']
                }
                ,
                {
                    numb: 45,
                    question: 'An error in computer data is called',
                    answer: 'Bug',
                    options: ['Bug','Chip','Bit','Byte','None of the above']
                }
                ,
                {
                    numb: 46,
                    question: 'The benefit of using computers are that',
                    answer: 'Computers are very fast and can store huge amounts of data',
                    options: ['Computers are very fast and can store huge amounts of data','Computers produce accurate output even when the input is incorrect','Computers are designed to the inflexible','All of the above','None of the above']
                }
                ,
                {
                    numb: 47,
                    question: 'The hardware (physical) interface is (choose the correct answer)',
                    answer: 'A device that converts signals and transmits them from one component of the equipment to another.',
                    options: ['A device that converts signals and transmits them from one component of the equipment to another.','complex of rules and agreements about connecting of software modules','set of means of dialogue, interactions of the program (machine) with the person','a type of interface where user typing a command string with the computer keyboard and the system provides output by printing text on the computer monitor','a type of interface that allows the use of icons or other visual indicators to interact with electronic devices']
                }
                ,
                {
                    numb: 48,
                    question: 'The software interface is (choose the correct answer)',
                    answer: 'complex of rules and agreements about connecting of software modules',
                    options: ['complex of rules and agreements about connecting of software modules','A device that converts signals and transmits them from one component of the equipment to another.','set of means of dialogue, interactions of the program (machine) with the person','a type of interface where user typing a command string with the computer keyboard and the system provides output by printing text on the computer monitor','a type of interface that allows the use of icons or other visual indicators to interact with electronic devices']
                }
                ,
                {
                    numb: 49,
                    question: 'The user interface is (choose the correct answer)',
                    answer: 'set of means of dialogue, interactions of the program (machine) with the person',
                    options: ['set of means of dialogue, interactions of the program (machine) with the person','a device that converts signals and transmits them from one component of the equipment to another.','complex of rules and agreements about connecting of software modules','a type of interface where user typing a command string with the computer keyboard and the system provides output by printing text on the computer monitor','a type of interface that allows the use of icons or other visual indicators to interact with electronic devices']
                }
                ,
                {
                    numb: 50,
                    question: 'The Command-Line Interface is (choose the correct answer)',
                    answer: 'a type of interface where user typing a command string with the computer keyboard and the system provides output by printing text on the computer monitor',
                    options: ['a type of interface where user typing a command string with the computer keyboard and the system provides output by printing text on the computer monitor','a device that converts signals and transmits them from one component of the equipment to another.','complex of rules and agreements about connecting of software modules','set of means of dialogue, interactions of the program (machine) with the person','a type of interface that allows the use of icons or other visual indicators to interact with electronic devices']
                }
                ,
                {
                    numb: 51,
                    question: 'The Graphical User Interface is (choose the correct answer)',
                    answer: 'a type of interface that allows the use of icons or other visual indicators to interact with electronic devices',
                    options: ['a type of interface that allows the use of icons or other visual indicators to interact with electronic devices','a device that converts signals and transmits them from one component of the equipment to another.','complex of rules and agreements about connecting of software modules','set of means of dialogue, interactions of the program (machine) with the person','a type of interface where user typing a command string with the computer keyboard and the system provides output by printing text on the computer monitor']
                }
                ,
                {
                    numb: 52,
                    question: 'What is SQL',
                    answer: 'a standard language for accessing and manipulating databases.',
                    options: ['a standard language for accessing and manipulating databases.','a device that converts signals and transmits them from one component of the equipment to another.','complex of rules and agreements about connecting of software modules','set of means of dialogue, interactions of the program (machine) with the person','a type of interface where user typing a command string with the computer keyboard and the system provides output by printing text on the computer monitor']
                }
                ,
                {
                    numb: 53,
                    question: 'What is the main object of MS Access?',
                    answer: 'Table',
                    options: ['Table','Form','Query','Report','Macros']
                }
                ,
                {
                    numb: 54,
                    question: 'What type of fields is intended for text information?',
                    answer: 'Memo',
                    options: ['Memo','Currency','Date/Time','OLE Object','Yes/No']
                }
                ,
                {
                    numb: 55,
                    question: 'Choose the correct answer. What is a bus topology?',
                    answer: 'a network type in where every computer and network device is connected to single cable.',
                    options: ['a network type in where every computer and network device is connected to single cable.','each computer is connected to another computer, with the last one connected to the first. Exactly two neighbors for each device.','all the computers are connected to a single hub through a cable','a point-to-point connection to other nodes or devices','It has a root node and all other nodes are connected to it forming a hierarchy']
                }
                ,
                {
                    numb: 56,
                    question: 'Choose the correct answer. What is a ring topology?',
                    answer: 'each computer is connected to another computer, with the last one connected to the first. Exactly two neighbors for each device.',
                    options: ['each computer is connected to another computer, with the last one connected to the first. Exactly two neighbors for each device.','a network type in where every computer and network device is connected to single cable.','all the computers are connected to a single hub through a cable','a point-to-point connection to other nodes or devices','It has a root node and all other nodes are connected to it forming a hierarchy']
                }
                ,
                {
                    numb: 57,
                    question: 'Choose the correct answer.What is a star topology?',
                    answer: 'all the computers are connected to a single hub through a cable',
                    options: ['all the computers are connected to a single hub through a cable','a network type in where every computer and network device is connected to single cable.','each computer is connected to another computer, with the last one connected to the first. Exactly two neighbors for each device.','a point-to-point connection to other nodes or devices','It has a root node and all other nodes are connected to it forming a hierarchy']
                }
                ,
                {
                    numb: 58,
                    question: 'Choose the correct answer.What is a mesh topology?',
                    answer: 'a point-to-point connection to other nodes or devices',
                    options: ['a point-to-point connection to other nodes or devices','a network type in where every computer and network device is connected to single cable.','each computer is connected to another computer, with the last one connected to the first. Exactly two neighbors for each device.','all the computers are connected to a single hub through a cable','It has a root node and all other nodes are connected to it forming a hierarchy']
                }
                ,
                {
                    numb: 59,
                    question: 'Choose the correct answer.What is a tree topology?',
                    answer: 'It has a root node and all other nodes are connected to it forming a hierarchy',
                    options: ['It has a root node and all other nodes are connected to it forming a hierarchy','a network type in where every computer and network device is connected to single cable.','each computer is connected to another computer, with the last one connected to the first. Exactly two neighbors for each device.','all the computers are connected to a single hub through a cable','a point-to-point connection to other nodes or devices']
                }
                ,
                {
                    numb: 60,
                    question: 'Choose a relevant definition for “Smart technology” notion',
                    answer: 'a technological product or solution that can be hooked to the internet, interactive and has a certain degree of intelligence',
                    options: ['a technological product or solution that can be hooked to the internet, interactive and has a certain degree of intelligence','the interaction of visual and audio effects under control of interactive software.','the technology involving the development, maintenance, and use of computer systems, software, and networks for the processing and distribution of data.','electronic system of training through computer and electronic technologies','a special device or program software used in the educational process and replaces the traditional paper book']
                }
                ,
                {
                    numb: 61,
                    question: 'Choose a relevant definition for “Multimedia technology” notion',
                    answer: 'the interaction of visual and audio effects under control of interactive software',
                    options: ['the interaction of visual and audio effects under control of interactive software','a technological product or solution that can be hooked to the internet, interactive and has a certain degree of intelligence','the technology involving the development, maintenance, and use of computer systems, software, and networks for the processing and distribution of data.','electronic system of training through computer and electronic technologies','a special device or program software used in the educational process and replaces the traditional paper book']
                }
                ,
                {
                    numb: 62,
                    question: 'Choose a relevant definition for “Information technology” notion',
                    answer: 'the technology involving the development, maintenance, and use of computer systems, software, and networks for the processing and distribution of data.',
                    options: ['the technology involving the development, maintenance, and use of computer systems, software, and networks for the processing and distribution of data.','a technological product or solution that can be hooked to the internet, interactive and has a certain degree of intelligence','the interaction of visual and audio effects under control of interactive software','electronic system of training through computer and electronic technologies','a special device or program software used in the educational process and replaces the traditional paper book']
                }
                ,
                {
                    numb: 63,
                    question: 'Choose a relevant definition for “E-learning” notion',
                    answer: 'electronic system of training through computer and electronic technologies',
                    options: ['electronic system of training through computer and electronic technologies','a technological product or solution that can be hooked to the internet, interactive and has a certain degree of intelligence','the interaction of visual and audio effects under control of interactive software','the technology involving the development, maintenance, and use of computer systems, software, and networks for the processing and distribution of data.','a special device or program software used in the educational process and replaces the traditional paper book']
                }
                ,
                {
                    numb: 64,
                    question: 'Choose a relevant definition for “Electronic textbook” notion',
                    answer: 'a special device or program software used in the educational process and replaces the traditional paper book',
                    options: ['a special device or program software used in the educational process and replaces the traditional paper book','a technological product or solution that can be hooked to the internet, interactive and has a certain degree of intelligence','the interaction of visual and audio effects under control of interactive software','the technology involving the development, maintenance, and use of computer systems, software, and networks for the processing and distribution of data.','electronic system of training through computer and electronic technologies']
                }
                ,
                {
                    numb: 65,
                    question: 'The solutions for intelligent security services and for intelligent resource optimization services by households are called',
                    answer: 'Smart house',
                    options: ['Smart house','Intelligent Transport','Big data','Artificial intelligence','Telemedicine']
                }
                ,
                {
                    numb: 66,
                    question: 'The areas that based on the use of modern communication technologies for remote medical care and timely advice are called',
                    answer: 'Telemedicine',
                    options: ['Telemedicine','Intelligent Transport','Big data','Artificial intelligence','Smart house']
                }
                ,
                {
                    numb: 67,
                    question: 'The systems in which information and communication technologies are applied in the field of road transport, including infrastructure, vehicles and users, are called',
                    answer: 'Intelligent Transport',
                    options: ['Intelligent Transport','Telemedicine','Big data','Artificial intelligence','Smart house']
                }
                ,
                {
                    numb: 68,
                    question: 'The designation of structured and unstructured data of huge volumes which processed by horizontally scale-out software tools that appeared in the late 2000s and that are alternative to traditional DBMS is called',
                    answer: 'Big data',
                    options: ['Big data','Intelligent Transport','Telemedicine','Artificial intelligence','Smart house']
                }
                ,
                {
                    numb: 69,
                    question: 'The ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings is called',
                    answer: 'Artificial intelligence',
                    options: ['Artificial intelligence','Big data','Intelligent Transport','Telemedicine','Smart house']
                }
                ,
                {
                    numb: 70,
                    question: 'Choose an application program from list of the following programs',
                    answer: 'MS Access',
                    options: ['MS Access','Windows','Linux','Dr Web','WinRAR']
                }
                ,
                {
                    numb: 71,
                    question: 'What program from the list below is not a text editor',
                    answer: 'WinRAR',
                    options: ['WinRAR','MSWord','WordPerfect','Chi Writer','WordPad']
                }
                ,
                {
                    numb: 72,
                    question: 'Which of the following categories does not belong to computer graphics',
                    answer: 'Relational',
                    options: ['Relational','Vector','Raster','Three-dimensional','Fractal']
                }
                ,
                {
                    numb: 73,
                    question: 'What of the following is not a programming language',
                    answer: 'RASTER',
                    options: ['RASTER','PASCAL','BASIC','FORTRAN','ADA']
                }
                ,
                {
                    numb: 74,
                    question: 'What of the following computer program list is a Spreadsheet?',
                    answer: 'Lotus 1-2-3',
                    options: ['Lotus 1-2-3','WordPad','Linux','Vista','PowerPoint']
                }
                ,
                {
                    numb: 75,
                    question: 'What of the following computer program list is not a Database Management Systems?',
                    answer: 'PowerPoint',
                    options: ['PowerPoint','Sybase','dBase','Microsoft Access','Microsoft SQL Server']
                }
                ,
];
showqa();