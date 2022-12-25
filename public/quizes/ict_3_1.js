var title = 'ICT | 151-226'; 
var questionCount = 76; 
var timeValue = 99;
var answerMixing = true;
var deadLine = false;
var about = true;
let syllabus = '';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: 'Which of the following fields of MS Access is a logical field?',
                    answer: 'Yes/No',
                    options: ['Yes/No','Date/Time','OLE Object','Memo','Currency']
                }
                ,
                {
                    numb: 2,
                    question: 'The arrangement of devices in a network is referred to as its:',
                    answer: 'GGP topology',
                    options: ['GGP topology','Machine topology','Physical topology','Natural topology','Mechanical topology']
                }
                ,
                {
                    numb: 3,
                    question: 'What DOS command is used to change the working directon:',
                    answer: 'Cd',
                    options: ['Cd','cp','Mkdir','Ren','Md']
                }
                ,
                {
                    numb: 4,
                    question: 'A main object of Relational model is:',
                    answer: 'Table',
                    options: ['Table','Form','Macro','Report','Query']
                }
                ,
                {
                    numb: 5,
                    question: 'This type of software makes uncompiled program instructions – the source code – available to programmers who want to modify and improve the software:',
                    answer: 'Open source software',
                    options: ['Open source software','Demoware','Commercial software','Proprietary software','Public domain software']
                }
                ,
                {
                    numb: 6,
                    question: 'Main components of hardware system:',
                    answer: 'External and internal physical components',
                    options: ['External and internal physical components','Electron','Main memory','Data','Computer programs']
                }
                ,
                {
                    numb: 7,
                    question: '…………..when a service provider combines the resources that are available to a large number of customers in a single pool for the dynamic reallocation of power between consumers under the conditions of constant changes in power demand.',
                    answer: 'Resource pooling',
                    options: ['Resource pooling','Resource pooling','Self service on demand','Universal access network','Accounting for consumption']
                }
                ,
                {
                    numb: 8,
                    question: 'factual information (as measurements or statistics) used as a basisfor reasoning, discussion, or calculation.',
                    answer: 'Data',
                    options: ['Data','Byte','Analysis of data','Data visualization','Bit']
                }
                ,
                {
                    numb: 9,
                    question: 'Security Service is:',
                    answer: 'a service that ensures the security of the systems and/or transmitted data set by policy, or protects from attacks',
                    options: ['a service that ensures the security of the systems and/or transmitted data set by policy, or protects from attacks','an information security method of cryptographic transformation','a security method of regulation using the information system resources','a method of physical blockage of a malefactor’s way to the information','a set of measures to ensure information security continuation in time and space']
                }
                ,
                {
                    numb: 10,
                    question: 'A mutual arrangement of computers, physical media and other network devices:',
                    answer: 'Network topology',
                    options: ['Network topology','WiFi','LAN','Work group','Internet']
                }
                ,
                {
                    numb: 11,
                    question: 'The correct definition for the Database System;',
                    answer: 'system A computerized of structured data',
                    options: ['system A computerized of structured data','A computer program for designing 3D objects','A data scanning system','for A computer program for planning varios resources','A computer program for automatic design']
                }
                ,
                {
                    numb: 12,
                    question: 'Web standards are made by:',
                    answer: 'W3C',
                    options: ['W3C','Mozilla','Google','Microsoft','Amazon']
                }
                ,
                {
                    numb: 13,
                    question: 'System software for creating and managing databases:',
                    answer: 'Database Management system',
                    options: ['Database Management system','Optimization','Data model','Data Definition Language','Data integrity']
                }
                ,
                {
                    numb: 14,
                    question: 'Regimentation is:',
                    answer: 'an information security method creating conditions of the automated handling under whish possibilities of unauthorized access are minimized',
                    options: ['an information security method creating conditions of the automated handling under whish possibilities of unauthorized access are minimized','a set of measueres to ensure information secutity continuation in time and space','a security method of regulation using the information system resources','a method of physical blockage of a malefactors way to the information','a piace of software and\or hardware that identifies and\or prewents an attack']
                }
                ,
                {
                    numb: 15,
                    question: 'A collection of software applications sold as a single package:',
                    answer: 'Software suite',
                    options: ['Software suite','Group of applications','Application package','Unity','Software package']
                }
                ,
                {
                    numb: 16,
                    question: 'Alt, Ctrl, Shift is:',
                    answer: 'special control keys',
                    options: ['special control keys','keys to lock certain keyboard modes','Function keys','cursor keys','alphanumeric keys']
                }
                ,
                {
                    numb: 17,
                    question: 'Arrange measurements in ascending order:',
                    answer: 'Byte, Kb, Mb, Gb',
                    options: ['Byte, Kb, Mb, Gb','Gb, Byte, Kb, Mb','Mb, Byte, Kb, Gb','Byte, Kb, Gb, Mb','Byte, Mb, Kb, Gb']
                }
                ,
                {
                    numb: 18,
                    question: 'Translate the decimal number 2137 to the octal number system:',
                    answer: '4131',
                    options: ['4131','1745','5012','71','6272']
                }
                ,
                {
                    numb: 19,
                    question: 'How many megabytes in one gigabyte:',
                    answer: '1024',
                    options: ['1024','1000','512','3','10']
                }
                ,
                {
                    numb: 20,
                    question: 'Special type of memory which is used by BIOS:',
                    answer: 'ROM',
                    options: ['ROM','RAM','Virtual Memory','Cashmemory','CMOS']
                }
                ,
                {
                    numb: 21,
                    question: 'MAN (city network) is capable of transmitting voice and data for:',
                    answer: '50 miles',
                    options: ['50 miles','42 m','43 m','80 m','5 miles']
                }
                ,
                {
                    numb: 22,
                    question: 'The term «informatics» was appeared in:',
                    answer: '1960',
                    options: ['1960','1985','1970','1940','1990']
                }
                ,
                {
                    numb: 23,
                    question: 'The term refers to the way that all the elements of a document text, pictures, titles, and page numbers-are arranged on the page:',
                    answer: 'document formatting',
                    options: ['document formatting','document editing','document creating','document printing','spell checking']
                }
                ,
                {
                    numb: 24,
                    question: 'Bitmap graphics formats include:',
                    answer: 'GIF, BMP',
                    options: ['GIF, BMP','JPEG, TIFF, PCX','RAW, TXT','GIF, DOC,TIFF','RAW, PNG']
                }
                ,
                {
                    numb: 25,
                    question: 'The small, compact, lightweight computers designed to be carried from place to place.',
                    answer: 'Laptop',
                    options: ['Laptop','Mainframe','Terminator','Workstation','Server']
                }
                ,
                {
                    numb: 26,
                    question: 'Microprocessors are element base of ... generation computers',
                    answer: '4',
                    options: ['4','3','2','1','5']
                }
                ,
                {
                    numb: 27,
                    question: 'A device that store data permanently (even after the computer is turned off is:',
                    answer: 'Disk drive',
                    options: ['Disk drive','Power supply','RAM','Motherboard','ROM']
                }
                ,
                {
                    numb: 28,
                    question: 'A sign used between login name and host name:',
                    answer: '@',
                    options: ['@','/','&','%','//']
                }
                ,
                {
                    numb: 29,
                    question: 'An operating system that uses open source software.',
                    answer: 'Linux',
                    options: ['Linux','Mac','Windows','Unix','MS-DOS']
                }
                ,
                {
                    numb: 30,
                    question: 'Third generation (1964-1971) computers were based on',
                    answer: 'Integrated circuits',
                    options: ['Integrated circuits','Vacuum tubes','Microprocessors','Transistors','Artificial intelligence']
                }
                ,
                {
                    numb: 31,
                    question: 'A program that controls the execution of application programs and acts as an interface between the user and computer hardware.',
                    answer: 'Operating system',
                    options: ['Operating system','Utility','Uninstall program','Driver','File compression program']
                }
                ,
                {
                    numb: 32,
                    question: 'Artificial Intelligence',
                    answer: 'Science and technology for creating intelligent machines, especially intelligent computer programs Smart city',
                    options: ['Science and technology for creating intelligent machines, especially intelligent computer programs Smart city','Is the technology used for cellular communication','Is extensional term for information technology (IT) that stresses the role of unifited communications and the integration of telecommunications, computers as well as necessaru enterprise software, middleware, storage, and audio-visual systems, which enable users to access, store, transmit, and manipulate information','computer architecture','']
                }
                ,
                {
                    numb: 33,
                    question: 'The smallest unit of the memory is:',
                    answer: 'bit',
                    options: ['bit','byte','directory','catalog','page']
                }
                ,
                {
                    numb: 34,
                    question: 'Network Topology: can easily be extended at the ends',
                    answer: 'Bus',
                    options: ['Bus','Star','Pair-topology','Topology','Ring']
                }
                ,
                {
                    numb: 35,
                    question: 'Layers that are not OSI models:',
                    answer: 'Currency layer',
                    options: ['Currency layer','Network layer','Data-link layer','Application layer','Transport layer']
                }
                ,
                {
                    numb: 36,
                    question: 'This storage is non-volatile and has greater capacity:',
                    answer: 'Secondary storage',
                    options: ['Secondary storage','Cache','RAM, ROM','RAM','Primary storage']
                }
                ,
                {
                    numb: 37,
                    question: 'Specify a package that allows you to work with databases.',
                    answer: 'MS Access',
                    options: ['MS Access','Math Lab','MS Word','Notepad','MathCAD']
                }
                ,
                {
                    numb: 38,
                    question: 'The archive file is:',
                    answer: 'A set of several files (one file), placed in a compressed form',
                    options: ['A set of several files (one file), placed in a compressed form','A file obtained as a result of data recovery after an unexpected shutdown or restart of the computer','The file that is stored for the longest time on the computer','A file of a special program used in libraries for storing data','The document deposited in the archive']
                }
                ,
                {
                    numb: 39,
                    question: 'The modem is a device:',
                    answer: 'for the transfer of computer data over long distances',
                    options: ['for the transfer of computer data over long distances','which prints drawings, graphics and text','for entering graphic images into the computer','through which you can connect the processor of the computer to an external device','which draws charts, figures or diagrams under the control of a computer']
                }
                ,
                {
                    numb: 40,
                    question: 'The delivery of computing services – servers, storage, databases, networking, software, analytics and more over the Internet is called:',
                    answer: 'Cloud computing',
                    options: ['Cloud computing','Client server technologies','Information security','An application','Computer networks']
                }
                ,
                {
                    numb: 41,
                    question: 'Companies offering cloud computing services are called:',
                    answer: 'Cloud providers',
                    options: ['Cloud providers','Cloud workers','Cloud makers','Cloud administrators','Computer engineering']
                }
                ,
                {
                    numb: 42,
                    question: 'You cannot do with the cloud computing:',
                    answer: 'Increase the volume of Google disk',
                    options: ['Increase the volume of Google disk','Store, back up and recover data','Stream audio and video','Deliver software on demand','Create new apps and services']
                }
                ,
                {
                    numb: 43,
                    question: 'Benefits of cloud computing do not include:',
                    answer: 'User feeling',
                    options: ['User feeling','Global scale','Speed','Productivity','Cost Savings']
                }
                ,
                {
                    numb: 44,
                    question: 'Most cloud computing services fall into three broad categories',
                    answer: 'infrastructure as a service IaaS, platform as a service PaaS and software as a service SaaS',
                    options: ['infrastructure as a service IaaS, platform as a service PaaS and software as a service SaaS','infrastructure as a provider, platform as a provider and software as a service','IabS, PabS and SabS','IaaC, PaaC and SaaC','infrastructure as a cloud, platform as a network and software as a service']
                }
                ,
                {
                    numb: 45,
                    question: 'Choose an appropriate definition of Information Technology:',
                    answer: 'IT refers to the use of hardware and software for storage, retrieval, processing and distributing information of many kinds',
                    options: ['IT refers to the use of hardware and software for storage, retrieval, processing and distributing information of many kinds','IT refers to the use of hardware and software for distribution of useful information','IT refers to the use of principles of Physical sciences and Social sciences for processing of information of many kinds','IT refers to the use of Internet technology','IT refers to the use of hardware and software for processing information']
                }
                ,
                {
                    numb: 46,
                    question: 'Choose correct statement(s).',
                    answer: 'A computer virus is a type of malicious software that, when executed, replicates itself by modifying other computer programs and inserting its own code',
                    options: ['A computer virus is a type of malicious software that, when executed, replicates itself by modifying other computer programs and inserting its own code','Internet does not allow the virus to spread','Virus improves the speed of processing information through computer','Virus is useful for a processing information through computer','Virus is an operating system']
                }
                ,
                {
                    numb: 47,
                    question: 'Choose correct statement(s).',
                    answer: 'Modem converts the analog signal into digital signal and vice-versa',
                    options: ['Modem converts the analog signal into digital signal and vice-versa','Modem is the operating system','Modem helps in stabilizing the voltage','Modem is a main part of CPU','Modem is a software']
                }
                ,
                {
                    numb: 48,
                    question: 'On the keyboard of computer each character has an «ASCII» value which stands for:',
                    answer: 'American Standard Code for Information Interchange',
                    options: ['American Standard Code for Information Interchange','American Stock Code for Information Interchange','African Standard Code for Information Interchange','Asian Standard Code for Information Interchange','Adaptable Standard Code for Information Interchange']
                }
                ,
                {
                    numb: 49,
                    question: 'Which part of the Central Processing Unit (CPU) performs calculation and makes decisions:',
                    answer: 'Arithmetic Logic Unit (ALU)',
                    options: ['Arithmetic Logic Unit (ALU)','American Logic Unit(ALU)','Alternating Logic Unit(ALU)','Algorithm Logic Unit(ALU)','Alternate Local Unit(ALU)']
                }
                ,
                {
                    numb: 50,
                    question: 'CD ROM stands for:',
                    answer: 'Compact Disk Read Only Memory',
                    options: ['Compact Disk Read Only Memory','Computer Disk Read Only Memory','Computer Disk Read Over Memory','Computer Disk Red Onto Memory','Compact Disk Read Over Memory']
                }
                ,
                {
                    numb: 51,
                    question: 'RAM means:',
                    answer: 'Random Access Memory',
                    options: ['Random Access Memory','Rigid Access Memory','Range Access Memory','Revolving Access Memory','Rapid Access Memory']
                }
                ,
                {
                    numb: 52,
                    question: 'Which one of the following is not a network device:',
                    answer: 'CPU',
                    options: ['CPU','Router','Switch','bridge','Hub']
                }
                ,
                {
                    numb: 53,
                    question: 'Choose an Operating System(s).',
                    answer: 'Mac',
                    options: ['Mac','Microsoft Word','Microsoft Excel','Microsoft Access','IPhone']
                }
                ,
                {
                    numb: 54,
                    question: 'Computers on an Internet are identified by:',
                    answer: 'IP address',
                    options: ['IP address','e-mail address','Models of a computer','Users’ name','street address']
                }
                ,
                {
                    numb: 55,
                    question: 'The decimal number system consists of the following symbols:',
                    answer: '0..9',
                    options: ['0..9','0..7','0..5','0..9, a..f','0 .. 1']
                }
                ,
                {
                    numb: 56,
                    question: 'The binary number system consists of the following symbols',
                    answer: '0 and 1',
                    options: ['0 and 1','0..7','0..5','0..9, a..f','0 ..9']
                }
                ,
                {
                    numb: 57,
                    question: 'Communication:',
                    answer: 'uses e-mails, publishes information on web, keeps in touch with stake holders via social networks, conference meetings avoids the need of physical availability of participants of the meetings',
                    options: ['uses e-mails, publishes information on web, keeps in touch with stake holders via social networks, conference meetings avoids the need of physical availability of participants of the meetings','keep track of the financial status of the company on an annually, monthly or even day-to-day basis','shares resources, common database of files accessible for authorized members','Investigate new products, improve the quality of the existing products through effective research','keep track of data about customers, products, demographics and other information important to the business, uses secured mechanisms for storages']
                }
                ,
                {
                    numb: 58,
                    question: 'DNS in internet technology stands for:',
                    answer: 'Domain Name System',
                    options: ['Domain Name System','Distributed Name System','Digited Name System','Delivered Name system','Dynamic Name System']
                }
                ,
                {
                    numb: 59,
                    question: 'The hexadecimal number system consists of the symbols:',
                    answer: '0..9, A..F',
                    options: ['0..9, A..F','0..1','0..9','0..5, A..F','0..7']
                }
                ,
                {
                    numb: 60,
                    question: 'Platform-as-a-service (PaaS) refers to:',
                    answer: 'cloud computing services that supply an on-demand environment for developing, testing, delivering and managing software applications',
                    options: ['cloud computing services that supply an on-demand environment for developing, testing, delivering and managing software applications','Databases needed for development','other datacenter infrastructure','software applications over the Internet','Internet services that supply software applications']
                }
                ,
                {
                    numb: 61,
                    question: 'Multimedia Component(s):',
                    answer: 'text, sound, images, animation, video',
                    options: ['text, sound, images, animation, video','Internet','Talk','Graph','Inter set']
                }
                ,
                {
                    numb: 62,
                    question: 'E-learning is .. .',
                    answer: 'comprises of distributed learning, network or web-based learning',
                    options: ['comprises of distributed learning, network or web-based learning','learning with electronic text','learning on a computer','traditional learning','learning face-to-face']
                }
                ,
                {
                    numb: 63,
                    question: 'The main function of E-Government:',
                    answer: 'the digital interaction among the Government, citizens, and the commercial institutions',
                    options: ['the digital interaction among the Government, citizens, and the commercial institutions','the usual interaction among the Government, citizens, and the commercial institutions','The computer interaction among the Government','the interaction among citizens, and the commercial institutions.','the non-digital interaction among the Government, citizens, and the commercial institutions']
                }
                ,
                {
                    numb: 64,
                    question: 'TCP/IP is necessary if one is to connect to the:',
                    answer: 'Internet',
                    options: ['Internet','Server','Phone lines','PAN','LLN']
                }
                ,
                {
                    numb: 65,
                    question: 'Google chrome is type of:',
                    answer: 'Web browser',
                    options: ['Web browser','IP address','Operating System','Database management system','Inter set']
                }
                ,
                {
                    numb: 66,
                    question: '2 Gigabyte is equal to:',
                    answer: '2048 Megabytes',
                    options: ['2048 Megabytes','2048 Terabytes','2048 Bytes','2000 bits','1024 Kilobytes']
                }
                ,
                {
                    numb: 67,
                    question: 'A computer network covering a small geographic area, like a home, office, or group of buildings is',
                    answer: 'A local area network(LAN)',
                    options: ['A local area network(LAN)','Security area Network','Mobile handheld devices','Firewalls','Wide Area Network (WAN)']
                }
                ,
                {
                    numb: 68,
                    question: 'A group of computers and network devices connected across large physical areas such as states or countries is called:',
                    answer: 'Wide Area Network WAN',
                    options: ['Wide Area Network WAN','Router Area','LAN','Broadcast area','The Web Site connection']
                }
                ,
                {
                    numb: 69,
                    question: 'A network that interconnects users with computer resources in a geographic area or region larger than that covered by a local area network (LAN) but smaller than the area covered by wide area network (WAN) is called:',
                    answer: 'Metropolitan Area Network MAN',
                    options: ['Metropolitan Area Network MAN','Home PNA','The Internet','Firewall','PAN']
                }
                ,
                {
                    numb: 70,
                    question: 'Network topology`s category(ies):',
                    answer: 'Tree or Hierarchical topology',
                    options: ['Tree or Hierarchical topology','Peer-to-peer (workgroup)','Ethernet','Personal Area Network (PAN)','Internet']
                }
                ,
                {
                    numb: 71,
                    question: 'Convert 103 from decimal numeral system into binary.',
                    answer: '01100111',
                    options: ['01100111','123','123456','0123','01234']
                }
                ,
                {
                    numb: 72,
                    question: 'Cartridge of the printer is used to hold:',
                    answer: 'Toner',
                    options: ['Toner','Laser','Ribbon','Pins','Paper']
                }
                ,
                {
                    numb: 73,
                    question: 'Choose a shortcut key used to paste.',
                    answer: 'CTRL+V',
                    options: ['CTRL+V','CTRL+C','CTRL+A','CTRL+P','CTRL+S']
                }
                ,
                {
                    numb: 74,
                    question: 'A small program that is used to compress or decompress video or audio files.',
                    answer: 'Codec',
                    options: ['Codec','Compression program','File extension','Metadata','Container']
                }
                ,
                {
                    numb: 75,
                    question: 'Choose commonly used database types.',
                    answer: 'Hierarchical',
                    options: ['Hierarchical','Parallel','Matrix','Text-oriented','Sequential']
                }
                ,
                {
                    numb: 76,
                    question: 'Choose well-known viruses.',
                    answer: 'Melissa',
                    options: ['Melissa','Avast','Avira','Panda','McAfee']
                }
                ,
];
showqa();