
var title = 'ENG ECO 201-246'; 
var questionCount = 46; 
var timeValue = 999;
var answerMixing = true;
var deadLine = false;
var about = true;
let syllabus = '.';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: "\ufeffThe scientific peer-reviewed journal publishes review articles on all aspects of ecology and related disciplines, news, debates, editorial columns, and a letters section.",
                    answer: "Frontiers in Ecology and the Environment",
                    options: ["Frontiers in Ecology and the Environment","Functional Ecology","Journal of Animal Ecology","Journal of Applied Ecology","Journal of Ecology"]
                }
                ,
                {
                    numb: 2,
                    question: "The scientific peer-reviewed journal publishes articles on all subsections of ecology, as well as interdisciplinary research related to ecology.",
                    answer: "Ecosphere",
                    options: ["Ecosphere","Functional Ecology","Journal of Animal Ecology","Journal of Applied Ecology","Journal of Ecology"]
                }
                ,
                {
                    numb: 3,
                    question: "A scientific journal that publishes research and analytical articles on all branches of ecology. It was founded in 1920.",
                    answer: "Ecology",
                    options: ["Ecology","Functional Ecology","Journal of Animal Ecology","Journal of Applied Ecology","Journal of Ecology"]
                }
                ,
                {
                    numb: 4,
                    question: "One of the oldest and most authoritative general scientific journals. It publishes research on a wide range of issues, mainly natural science topics.",
                    answer: "Nature",
                    options: ["Nature","Functional Ecology","Journal of Animal Ecology","Journal of Applied Ecology","Journal of Ecology"]
                }
                ,
                {
                    numb: 5,
                    question: "The international open access scientific journal publishes original peer-reviewed documents in the field of ecology (research articles, reviews, environmental guidelines).",
                    answer: "European Journal of Ecology",
                    options: ["European Journal of Ecology","Journal of Applied Ecology","Journal of Ecology","Nature","Functional Ecology"]
                }
                ,
                {
                    numb: 6,
                    question: "An international scientific journal published by the Association for the Ecology of Fires.",
                    answer: "Fire Ecology",
                    options: ["Fire Ecology","Journal of Applied Ecology","Journal of Ecology","Nature","Functional Ecology"]
                }
                ,
                {
                    numb: 7,
                    question: "One of the world's peer-reviewed journals in the field of ecology and the evolution of behavior, published since 1867. The journal focuses on innovative theoretical synthesis.",
                    answer: "The American Naturalist",
                    options: ["The American Naturalist","Journal of Applied Ecology","Journal of Ecology","Nature","Functional Ecology"]
                }
                ,
                {
                    numb: 8,
                    question: "A monthly peer-reviewed scientific journal published by Wiley-Blackwell and the French National Center for Scientific Research. The journal publishes articles on all aspects of ecology.",
                    answer: "Ecology Letters",
                    options: ["Ecology Letters","Journal of Applied Ecology","Journal of Ecology","Nature","Functional Ecology"]
                }
                ,
                {
                    numb: 9,
                    question: "The scientific journal covers the results of modern research and discoveries in the field of molecular genetics.",
                    answer: "Molecular ecology",
                    options: ["Molecular ecology","Journal of Applied Ecology","Journal of Ecology","Nature","Functional Ecology"]
                }
                ,
                {
                    numb: 10,
                    question: "An international open access scientific journal that publishes peer-reviewed peer-reviewed articles on all aspects of sustainable development and climate change policy",
                    answer: "American Journal of Climate Change (AJCC)",
                    options: ["American Journal of Climate Change (AJCC)","Journal of Applied Ecology","Journal of Ecology","Nature","Functional Ecology"]
                }
                ,
                {
                    numb: 11,
                    question: "An international open access scientific journal that publishes peer-reviewed articles in the field of geosciences and environmental protection.",
                    answer: "Journal of Geosciences and Environment Protection (GEP)",
                    options: ["Journal of Geosciences and Environment Protection (GEP)","Nature","Functional Ecology","American Journal of Climate Change (AJCC)","Journal of Applied Ecology"]
                }
                ,
                {
                    numb: 12,
                    question: "International scientific journal of open access, which publishes materials on research on water resources, problems of water quality and protection",
                    answer: "Journal of Water Resource and Protection",
                    options: ["Journal of Water Resource and Protection","Nature","Functional Ecology","American Journal of Climate Change (AJCC)","Journal of Applied Ecology"]
                }
                ,
                {
                    numb: 13,
                    question: "An international open-access electronic scientific journal that publishes original scientific research, reviews, and letters on environmental issues in order to provide the most complete and reliable information on current developments in this field.",
                    answer: "Open Journal of Ecology",
                    options: ["Open Journal of Ecology","Nature","Functional Ecology","American Journal of Climate Change (AJCC)","Journal of Applied Ecology"]
                }
                ,
                {
                    numb: 14,
                    question: "The International Open Access Scientific Journal publishes original articles and reports, literature reviews, and short reports on various aspects of ecology and environmental protection.",
                    answer: "Journal of Environmental Protection",
                    options: ["Journal of Environmental Protection","Nature","Functional Ecology","American Journal of Climate Change (AJCC)","Journal of Applied Ecology"]
                }
                ,
                {
                    numb: 15,
                    question: "Human race have only one earth, one in a global village. The Earth is a whole, is a general eco-system, a local environment will be different degrees, directly or indirectly in other parts of the inverted state of the environment, endangering other countries and peoples",
                    answer: "The Need For International Cooperation In Environmental Protection",
                    options: ["The Need For International Cooperation In Environmental Protection","The legal basis for international cooperation, international cooperation, the achievements themselves","The Principles Of International Cooperation In Environmental Protection","The contents of the environmental protection, international cooperation","The goal of international cooperation, the achievements themselves"]
                }
                ,
                {
                    numb: 16,
                    question: "\"Stockholm Declaration on the Human Environment.\"",
                    answer: "The legal basis for international cooperation, international cooperation, the achievements themselves",
                    options: ["The legal basis for international cooperation, international cooperation, the achievements themselves","The Need For International Cooperation In Environmental Protection","The Principles Of International Cooperation In Environmental Protection","The contents of the environmental protection, international cooperation","The goal of international cooperation, the achievements themselves"]
                }
                ,
                {
                    numb: 17,
                    question: "Respect for the principle of national sovereignty. Respect for the principle of national sovereignty is the basic principles of national law in 1972's \"Stockholm Declaration on the Human Environment,\" also expressed this principle",
                    answer: "The Principles Of International Cooperation In Environmental Protection",
                    options: ["The Principles Of International Cooperation In Environmental Protection","The contents of the environmental protection, international cooperation","The goal of international cooperation, the achievements themselves","The legal basis for international cooperation, international cooperation, the achievements themselves","The Need For International Cooperation In Environmental Protection"]
                }
                ,
                {
                    numb: 18,
                    question: "The establishment of a global environmental systems, such as monitoring systems and query systems. Now the international community established the Global Environment Monitoring System, the international environmental information inquiry system and toxic chemicals in the International Register",
                    answer: "The contents of the environmental protection, international cooperation",
                    options: ["The contents of the environmental protection, international cooperation","The goal of international cooperation, the achievements themselves","The legal basis for international cooperation, international cooperation, the achievements themselves","The Need For International Cooperation In Environmental Protection","The Principles Of International Cooperation In Environmental Protection"]
                }
                ,
                {
                    numb: 19,
                    question: "Find the English equivalent of the word \u00ab\u0420\u0435\u0437\u044e\u043c\u0435\u00bb",
                    answer: "Curriculum vitae",
                    options: ["Curriculum vitae","Brief","Resume","Summary","Abstract"]
                }
                ,
                {
                    numb: 20,
                    question: "International cooperation in environmental protection, the first:",
                    answer: "The Need For International Cooperation In Environmental Protection",
                    options: ["The Need For International Cooperation In Environmental Protection","The legal basis for international cooperation, international cooperation, the achievements themselves","The Principles Of International Cooperation In Environmental Protection","The contents of the environmental protection, international cooperation","International cooperation in environmental protection official organization"]
                }
                ,
                {
                    numb: 21,
                    question: "International cooperation in environmental protection, the second:",
                    answer: "The legal basis for international cooperation, international cooperation, the achievements themselves",
                    options: ["The legal basis for international cooperation, international cooperation, the achievements themselves","The Need For International Cooperation In Environmental Protection","The Principles Of International Cooperation In Environmental Protection","The contents of the environmental protection, international cooperation","International cooperation in environmental protection official organization"]
                }
                ,
                {
                    numb: 22,
                    question: "International cooperation in environmental protection, the third:",
                    answer: "The Principles Of International Cooperation In Environmental Protection",
                    options: ["The Principles Of International Cooperation In Environmental Protection","The legal basis for international cooperation, international cooperation, the achievements themselves","The Need For International Cooperation In Environmental Protection","The contents of the environmental protection, international cooperation","International cooperation in environmental protection official organization"]
                }
                ,
                {
                    numb: 23,
                    question: "International cooperation in environmental protection, the third:",
                    answer: "The contents of the environmental protection, international cooperation",
                    options: ["The contents of the environmental protection, international cooperation","The Principles Of International Cooperation In Environmental Protection","The legal basis for international cooperation, international cooperation, the achievements themselves","The Need For International Cooperation In Environmental Protection","International cooperation in environmental protection official organization"]
                }
                ,
                {
                    numb: 24,
                    question: "The Kazakhstan area that has Aral sea environmental issue (ecological problem)",
                    answer: "Kyzylorda province",
                    options: ["Kyzylorda province","Atyrau province","Semey province","Akmola province","Karaganda province"]
                }
                ,
                {
                    numb: 25,
                    question: "North Kazakhstan area is the province without an environmental issue (ecological problem)",
                    answer: "Akmola province",
                    options: ["Akmola province","Kyzylorda province","Atyrau province","Semey province","Karaganda province"]
                }
                ,
                {
                    numb: 26,
                    question: "The province where is lived 659 074 people has State Nature Reserve \"Akzhaiyk\"",
                    answer: "Atyrau province",
                    options: ["Atyrau province","Akmola province","Kyzylorda province","Semey province","Karaganda province"]
                }
                ,
                {
                    numb: 27,
                    question: "The province where is lived 350 201 people has West Altay State Nature Reserve, The State Forest Natural Reserve \" Semey ormany\"",
                    answer: "Semey province",
                    options: ["Semey province","Karaganda province","Atyrau province","Akmola province","Kyzylorda province"]
                }
                ,
                {
                    numb: 28,
                    question: "The province with 1 378 533 people has the coal mining, machine building, metal and food industries",
                    answer: "Karaganda province",
                    options: ["Karaganda province","Atyrau province","Akmola province","Kyzylorda province","Semey province"]
                }
                ,
                {
                    numb: 29,
                    question: "Kyzylorda province has:",
                    answer: "Aral sea environmental issue (ecological problem)",
                    options: ["Aral sea environmental issue (ecological problem)","a coal basin environmental issue (ecological problem)","Caspian sea, Azgir nuclear test site with Taysoygan military ground environmental issues (ecological problems)","Semey nuclear test site environmental issue (ecological problem)","without an environmental issue (ecological problem)"]
                }
                ,
                {
                    numb: 30,
                    question: "The province of West Kazakhstan has:",
                    answer: "Caspian sea, Azgir nuclear test site with Taysoygan military ground environmental issues (ecological problems)",
                    options: ["Caspian sea, Azgir nuclear test site with Taysoygan military ground environmental issues (ecological problems)","Aral sea environmental issue (ecological problem)","a coal basin environmental issue (ecological problem)","Semey nuclear test site environmental issue (ecological problem)","without an environmental issue (ecological problem)"]
                }
                ,
                {
                    numb: 31,
                    question: "North Kazakhstan area is the province:",
                    answer: "without an environmental issue (ecological problem)",
                    options: ["without an environmental issue (ecological problem)","Aral sea environmental issue (ecological problem)","a coal basin environmental issue (ecological problem)","Caspian sea, Azgir nuclear test site with Taysoygan military ground environmental issues (ecological problems)","Semey nuclear test site environmental issue (ecological problem)"]
                }
                ,
                {
                    numb: 32,
                    question: "The province of East Kazakhstan has:",
                    answer: "Semey nuclear test site environmental issue (ecological problem)",
                    options: ["Semey nuclear test site environmental issue (ecological problem)","Aral sea environmental issue (ecological problem)","a coal basin environmental issue (ecological problem)","Caspian sea, Azgir nuclear test site with Taysoygan military ground environmental issues (ecological problems)","without an environmental issue (ecological problem)"]
                }
                ,
                {
                    numb: 33,
                    question: "Kyzylorda province has:",
                    answer: "Aral sea environmental issue (ecological problem)",
                    options: ["Aral sea environmental issue (ecological problem)","a coal basin environmental issue (ecological problem)","Caspian sea, Azgir nuclear test site with Taysoygan military ground environmental issues (ecological problems)","Semey nuclear test site environmental issue (ecological problem)","without an environmental issue (ecological problem)"]
                }
                ,
                {
                    numb: 34,
                    question: "Which word corresponds to the following scheme: go up \u2191",
                    answer: "increase",
                    options: ["increase","drop","remain steady","fluctuate","fall"]
                }
                ,
                {
                    numb: 35,
                    question: "Which word corresponds to the following scheme: go down \u2193",
                    answer: "drop",
                    options: ["drop","increase","remain steady","fluctuate","grow"]
                }
                ,
                {
                    numb: 36,
                    question: "Which word corresponds to the following scheme: go up and down",
                    answer: "fluctuate",
                    options: ["fluctuate","drop","remain steady","increase","grow"]
                }
                ,
                {
                    numb: 37,
                    question: "Which word corresponds to the following scheme: stay the same \u2192",
                    answer: "remain steady",
                    options: ["remain steady","drop","increase","fluctuate","grow"]
                }
                ,
                {
                    numb: 38,
                    question: "What is it ? (\u0433\u0440\u0430\u0444\u0438\u043a \u0442\u04e9\u0440\u0442\u0431\u04b1\u0440\u044b\u0448\u0442\u044b)",
                    answer: "bar chart",
                    options: ["bar chart","graph","scheme","chart","picture"]
                }
                ,
                {
                    numb: 39,
                    question: "What is it ? (\u0433\u0440\u0430\u0444\u0438\u043a \u049b\u043e\u0441\u044b\u043b\u0493\u0430\u043d \u043d\u04af\u043a\u0442\u0435\u043b\u0435\u0440)",
                    answer: "graph",
                    options: ["graph","bar chart","scheme","chart","picture"]
                }
                ,
                {
                    numb: 40,
                    question: "Find the synonym of the word an increase:",
                    answer: "a rise",
                    options: ["a rise","a decrease","a fluctuate","a stable","a drop"]
                }
                ,
                {
                    numb: 41,
                    question: "Find the synonym of the word rose:",
                    answer: "grew",
                    options: ["grew","decreased","fluctuated","remained","dropped"]
                }
                ,
                {
                    numb: 42,
                    question: "How thick is the ozone layer?",
                    answer: "2-3mm",
                    options: ["2-3mm","10km","2-3 cm","2-3m","10m"]
                }
                ,
                {
                    numb: 43,
                    question: "As a result of human activity pollution is called:",
                    answer: "Anthropogenic",
                    options: ["Anthropogenic","Technical","Natural","Physical","Second"]
                }
                ,
                {
                    numb: 44,
                    question: "Earth's climate-forming atmosphere:",
                    answer: "Troposphere",
                    options: ["Troposphere","Ionosphere","Magnitosphere","Stratosphere","The meosphere"]
                }
                ,
                {
                    numb: 45,
                    question: "The main cause of environmental problems in the Aral Sea:",
                    answer: "Water withdrawal from irrigation water sources",
                    options: ["Water withdrawal from irrigation water sources","Chemical contamination","Radioactive contamination","Natural direct growth","Wastewater contamination"]
                }
                ,
                {
                    numb: 46,
                    question: "Environmental factors are divided into the following categories:",
                    answer: "Biotic, abiotic and anthropogenic",
                    options: ["Biotic, abiotic and anthropogenic","Phytogenic and zoogeneic","Climatic and chemical","anthropogenic and climatic","Ehostogenic and orophagenic."]
                }
                ,
];
showqa();
