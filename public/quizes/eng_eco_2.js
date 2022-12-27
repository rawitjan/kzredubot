
var title = 'ENG ECO 51-100'; 
var questionCount = 50; 
var timeValue = 999;
var answerMixing = true;
var deadLine = false;
var about = true;
let syllabus = '.';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: "\ufeffIt based on number of organisms at each trophic level:",
                    answer: "Pyramid of numbers.",
                    options: ["Pyramid of numbers.","Ecological pyramid.","Pyramid of energy.","Pyramid of biomass.","Energy flows."]
                }
                ,
                {
                    numb: 2,
                    question: "They consist of autotrophs which are mostly photosynthetic organisms that use light energy to synthesize sugars and other organic compounds, which they use as fuel for cellular respiration and as building material growth:",
                    answer: "primary consumers.",
                    options: ["primary consumers.","primary producers.","secondary consumers.","tertiary consumers. ","detritivores\/decomposers."]
                }
                ,
                {
                    numb: 3,
                    question: "They are consumers that get their energy from detritus, which is nonliving organic material:",
                    answer: "detritivores\/decomposers.",
                    options: ["detritivores\/decomposers.","primary consumers.","primary producers.","secondary consumers.","tertiary consumers. "]
                }
                ,
                {
                    numb: 4,
                    question: "It is that area of the earth where life exists:",
                    answer: "Biosphere",
                    options: ["Biosphere","Ecosphere","Lithosphere","Ecosystem","Biogeosphere"]
                }
                ,
                {
                    numb: 5,
                    question: "The term \"biosphere\" originated:",
                    answer: "Eduard Suess in 1875.",
                    options: ["Eduard Suess in 1875.","Vladimir I. Vernadsky in 1926.","Arthur G. Tansley in 1875","",""]
                }
                ,
                {
                    numb: 6,
                    question: "Who developed the science of the biosphere:",
                    answer: "Vladimir I. Vernadsky.",
                    options: ["Vladimir I. Vernadsky.","Eduard Suess.","Arthur G. Tansley in 1875","Eduard Suess in 1875.",""]
                }
                ,
                {
                    numb: 7,
                    question: "Which of the following works are not typical for Vernadsky:",
                    answer: "He advanced views on earth as a macro-organism with the Gaia hypothesis.",
                    options: ["He advanced views on earth as a macro-organism with the Gaia hypothesis.","He carried out highly detailed studies on aluminosilicates and was the first to correctly describe their chemistry and their structure, which forms the basis of many other minerals.","He was a pioneer in geochemistry \u2014 the measurement and study of the distribution and migration of the chemical elements and isotopes in the Earth\u2019s crust.","He studied the effects living things have on the chemistry of the Earth\u2019s crust.","He regarded as the founder of the theory of the biosphere - the total mass of living organisms, which process and recycle the energy and nutrients available from the environment."]
                }
                ,
                {
                    numb: 8,
                    question: "The lithosphere:",
                    answer: "The limestones have the organic origin, created in seas with the organisms skeletons, with the rests of the unicellular seaweeds, the coal, the oil - from the rests of the animals and plants soft tissues, that suffered the chemical transformations.",
                    options: ["The limestones have the organic origin, created in seas with the organisms skeletons, with the rests of the unicellular seaweeds, the coal, the oil - from the rests of the animals and plants soft tissues, that suffered the chemical transformations.","It as the external Earth envelope protects it from the radiation stream: gamut-, X-, ultraviolet and other rays.","It as the external Earth envelope protects it from the radiation stream: gamut-, X-, ultraviolet and other rays.","It is that area of the earth where life exists.","A group of organisms of the same species that occupies a common space at one time."]
                }
                ,
                {
                    numb: 9,
                    question: "The atmosphere:",
                    answer: "It as the external Earth envelope protects it from the radiation stream: gamut-, X-, ultraviolet and other rays.",
                    options: ["It as the external Earth envelope protects it from the radiation stream: gamut-, X-, ultraviolet and other rays.","The limestones have the organic origin, created in seas with the organisms skeletons, with the rests of the unicellular seaweeds, the coal, the oil - from the rests of the animals and plants soft tissues, that suffered the chemical transformations.","It is the Earth water envelope; the aggregate of the oceans, seas, lakes, rivers, underground waters and glacial deposits.","It is that area of the earth where life exists.","A group of organisms of the same species that occupies a common space at one time."]
                }
                ,
                {
                    numb: 10,
                    question: "The hydrosphere:",
                    answer: "It is the Earth water envelope; the aggregate of the oceans, seas, lakes, rivers, underground waters and glacial deposits",
                    options: ["It is the Earth water envelope; the aggregate of the oceans, seas, lakes, rivers, underground waters and glacial deposits","The limestones have the organic origin, created in seas with the organisms skeletons, with the rests of the unicellular seaweeds, the coal, the oil - from the rests of the animals and plants soft tissues, that suffered the chemical transformations.","It as the external Earth envelope protects it from the radiation stream: gamut-, X-, ultraviolet and other rays.","It is that area of the earth where life exists.","A group of organisms of the same species that occupies a common space at one time."]
                }
                ,
                {
                    numb: 11,
                    question: "The movement of water from the atmosphere to the Earth and back to the atmosphere is called the:",
                    answer: "water cycle.",
                    options: ["water cycle.","carbon cycle.","nitrogen cycle.","soil cycle.","oxigen cycle."]
                }
                ,
                {
                    numb: 12,
                    question: "The process by which carbon is moved through the environment is called the:",
                    answer: "carbon cycle.",
                    options: ["carbon cycle.","water cycle.","nitrogen cycle.","soil cycle.","oxigen cycle."]
                }
                ,
                {
                    numb: 13,
                    question: "The movement of nitrogen through the biosphere is called the:",
                    answer: "nitrogen cycle.",
                    options: ["nitrogen cycle.","carbon cycle.","water cycle.","soil cycle.","oxygen cycle."]
                }
                ,
                {
                    numb: 14,
                    question: "Who requires nitrogen to build proteins?",
                    answer: "All organisms.",
                    options: ["All organisms.","Animals.","Plants.","Humans.","Microorganisms."]
                }
                ,
                {
                    numb: 15,
                    question: "The movement of oxygen through the environment is called the:",
                    answer: "oxygen cycle.",
                    options: ["oxygen cycle.","nitrogen cycle.","carbon cycle.","water cycle.","soil cycle."]
                }
                ,
                {
                    numb: 16,
                    question: "Consumers and decomposers use glucose in__________, during which they produce carbon dioxide:",
                    answer: "respiration.",
                    options: ["respiration.","photosynthesis.","combustion.","evaporation","condensation."]
                }
                ,
                {
                    numb: 17,
                    question: "Water molecules enter the air by:",
                    answer: "evaporation",
                    options: ["evaporation","respiration","photosynthesis.","combustion.","condensation."]
                }
                ,
                {
                    numb: 18,
                    question: "The Earth Atmosphere consists of the gases mixture:",
                    answer: "the nitrogen (78 %), the oxygen (20.9 %), the argon (0.93 %), the carbonic acid (0.03 %).",
                    options: ["the nitrogen (78 %), the oxygen (20.9 %), the argon (0.93 %), the carbonic acid (0.03 %).","the oxygen (78 %), the nitrogen (20.9 %), the argon (0.93 %), the carbonic acid (0.03 %).","the argon (78 %), the oxygen (20.9 %), the nitrogen (0.93 %), the carbonic acid (0.03 %).","the carbonic acid (78 %), the oxygen (20.9 %), the argon (0.93 %), the nitrogen (0.03 %).","the nitrogen (78 %), the oxygen (20.9 %), the carbonic acid (0.93 %), the argon (0.03 %)."]
                }
                ,
                {
                    numb: 19,
                    question: "The Earth water doesn\u2019t envelope:",
                    answer: "soil.",
                    options: ["soil.","the aggregate of the oceans.","underground waters.","glacial deposits.","seas, lakes, rivers."]
                }
                ,
                {
                    numb: 20,
                    question: "How many percents of the biosphere is in the biomass of living matter by weight?",
                    answer: "0.0001%",
                    options: ["0.0001%","0.001%","0.00001%","0.01%.","0.1%."]
                }
                ,
                {
                    numb: 21,
                    question: "What functions aren\u2019t of the main of living matter?",
                    answer: "structure",
                    options: ["structure","energy.","destructive.","concentration.","environment-forming."]
                }
                ,
                {
                    numb: 22,
                    question: "Destructive function:",
                    answer: "is the decomposition and mineralization of dead material in the chemical decomposition of rocks, minerals formed involvement in biotic circulation.",
                    options: ["is the decomposition and mineralization of dead material in the chemical decomposition of rocks, minerals formed involvement in biotic circulation.","is manifested in the selective accumulation in the vital activity of the atoms of substances dispersed in nature.","is to transform the physical and chemical parameters of the environment (lithosphere, hydrosphere, atmosphere) in conditions favorable to the existence of organisms.","are connected with the growth and multiplication of organisms, which lead to an increase in their number and in the mass of living matter.","is determined by the gaseous functions of living matter; the predominant mass of gases on our planet is biogenic."]
                }
                ,
                {
                    numb: 23,
                    question: "Concentration function.",
                    answer: "is manifested in the selective accumulation in the vital activity of the atoms of substances dispersed in nature.",
                    options: ["is manifested in the selective accumulation in the vital activity of the atoms of substances dispersed in nature.","s the decomposition and mineralization of dead material in the chemical decomposition of rocks, minerals formed involvement in biotic circulation.","is to transform the physical and chemical parameters of the environment (lithosphere, hydrosphere, atmosphere) in conditions favorable to the existence of organisms.","are connected with the growth and multiplication of organisms, which lead to an increase in their number and in the mass of living matter.","is determined by the gaseous functions of living matter; the predominant mass of gases on our planet is biogenic."]
                }
                ,
                {
                    numb: 24,
                    question: "Environmental function.",
                    answer: "is to transform the physical and chemical parameters of the environment (lithosphere, hydrosphere, atmosphere) in conditions favorable to the existence of organisms",
                    options: ["is to transform the physical and chemical parameters of the environment (lithosphere, hydrosphere, atmosphere) in conditions favorable to the existence of organisms","is the decomposition and mineralization of dead material in the chemical decomposition of rocks, minerals formed involvement in biotic circulation.","is manifested in the selective accumulation in the vital activity of the atoms of substances dispersed in nature.","are connected with the growth and multiplication of organisms, which lead to an increase in their number and in the mass of living matter","is determined by the gaseous functions of living matter; the predominant mass of gases on our planet is biogenic."]
                }
                ,
                {
                    numb: 25,
                    question: "How many groups may be the biogeochemical functions of living matter divided into?",
                    answer: "5",
                    options: ["5","4","3","6","2"]
                }
                ,
                {
                    numb: 26,
                    question: "The gaseous composition of the atmosphere:",
                    answer: "is determined by the gaseous functions of living matter; the predominant mass of gases on our planet is biogenic",
                    options: ["is determined by the gaseous functions of living matter; the predominant mass of gases on our planet is biogenic","include accumulation by the organisms of biogenic elements from the surrounding medium.","lead to most substances being chemically converted.","are connected with the growth and multiplication of organisms, which lead to an increase in their number and in the mass of living matter.","are primarily conditioned by human technological activity (technogenesis), are a form of creation and conversion of materials in the biosphere that is connected with its transition to a new state, the noosphere, when man becomes a new geological force on the planet"]
                }
                ,
                {
                    numb: 27,
                    question: "The concentration functions of living matter:",
                    answer: "include accumulation by the organisms of biogenic elements from the surrounding medium.",
                    options: ["include accumulation by the organisms of biogenic elements from the surrounding medium.","lead to most substances being chemically converted.","is determined by the gaseous functions of living matter; the predominant mass of gases on our planet is biogenic.","are connected with the growth and multiplication of organisms, which lead to an increase in their number and in the mass of living matter.","are primarily conditioned by human technological activity (technogenesis), are a form of creation and conversion of materials in the biosphere that is connected with its transition to a new state, the noosphere, when man becomes a new geological force on the planet"]
                }
                ,
                {
                    numb: 28,
                    question: "The oxidation-reduction functions of living matter:",
                    answer: "lead to most substances being chemically converted.",
                    options: ["lead to most substances being chemically converted.","is determined by the gaseous functions of living matter; the predominant mass of gases on our planet is biogenic","include accumulation by the organisms of biogenic elements from the surrounding medium.","are connected with the growth and multiplication of organisms, which lead to an increase in their number and in the mass of living matter","are primarily conditioned by human technological activity (technogenesis), are a form of creation and conversion of materials in the biosphere that is connected with its transition to a new state, the noosphere, when man becomes a new geological force on the planet."]
                }
                ,
                {
                    numb: 29,
                    question: "The biochemical functions:",
                    answer: "are connected with the growth and multiplication of organisms, which lead to an increase in their number and in the mass of living matter.",
                    options: ["are connected with the growth and multiplication of organisms, which lead to an increase in their number and in the mass of living matter.","lead to most substances being chemically converted.","is determined by the gaseous functions of living matter; the predominant mass of gases on our planet is biogenic","include accumulation by the organisms of biogenic elements from the surrounding medium.","are primarily conditioned by human technological activity (technogenesis), are a form of creation and conversion of materials in the biosphere that is connected with its transition to a new state, the noosphere, when man becomes a new geological force on the planet."]
                }
                ,
                {
                    numb: 30,
                    question: "The biogeochemical functions of humanity:",
                    answer: "are primarily conditioned by human technological activity (technogenesis), are a form of creation and conversion of materials in the biosphere that is connected with its transition to a new state, the noosphere, when man becomes a new geological force on the planet",
                    options: ["are primarily conditioned by human technological activity (technogenesis), are a form of creation and conversion of materials in the biosphere that is connected with its transition to a new state, the noosphere, when man becomes a new geological force on the planet","are connected with the growth and multiplication of organisms, which lead to an increase in their number and in the mass of living matter.","lead to most substances being chemically converted.","is determined by the gaseous functions of living matter; the predominant mass of gases on our planet is biogenic","include accumulation by the organisms of biogenic elements from the surrounding medium."]
                }
                ,
                {
                    numb: 31,
                    question: "The term \u201cnoosphere,\u201d referring to the mental sheath or envelope of thought that encompasses the Earth, is derived from nous, the Greek word for...",
                    answer: "mind",
                    options: ["mind","human","man","brain","Earth"]
                }
                ,
                {
                    numb: 32,
                    question: "What elements are present in all living organisms, forming there the chemical compounds primarily encountered in living matter?",
                    answer: "H, C, N, O, Na, Mg, Al, Si, P, S, Cl, K, Ca.",
                    options: ["H, C, N, O, Na, Mg, Al, Si, P, S, Cl, K, Ca.","N2, O2, CO2, H2S, CH4.","Cu, Fe, Mo, Zn, Co, F, I, B, Mn, Se, As, Si, Cr, Ni, Sn, V.","C, O, H, N, P, S.","Ca, Cl, Mg, K, Na."]
                }
                ,
                {
                    numb: 33,
                    question: "The Biosphere has three parts:",
                    answer: "the biosphere in the cosmos, the domain of life, and a few words about the noosphere.",
                    options: ["the biosphere in the cosmos, the domain of life, and a few words about the noosphere.","water, land and air.","producers, consumers and decomposers.","abiotic, biotic and anthropogenic.","autecology, demecology and synecology."]
                }
                ,
                {
                    numb: 34,
                    question: "The term \u201cliving matter\u201d was introduced by \u2026",
                    answer: "V. I Vernadsky.",
                    options: ["V. I Vernadsky.","Ralph Abraham.","Ch.Darvin.","academic Dubinin.","Russian scientist Matyushin."]
                }
                ,
                {
                    numb: 35,
                    question: "Noosphere \u2013 is\u2026",
                    answer: "the sphere of mind.",
                    options: ["the sphere of mind.","the sphere of air.","the sphere of soil.","the sphere of water.","the sphere of human."]
                }
                ,
                {
                    numb: 36,
                    question: "Cryosphere includes\u2026",
                    answer: "ice",
                    options: ["ice","air","water","living things.","soils"]
                }
                ,
                {
                    numb: 37,
                    question: "Biogeochemical cycles doesn\u2019t include\u2026",
                    answer: "picture",
                    options: ["picture",". irreversibility.","transitional phenomena","evolution.","positive feedback or negative feedback."]
                }
                ,
                {
                    numb: 38,
                    question: "Evolution is\u2026",
                    answer: "the system progressively changes in a particular direction.",
                    options: ["the system progressively changes in a particular direction.","the system tends to switch from one state to another and another and yet others, and perhaps back again, rather than simply moving from \"before\" to \"after\".","the system does not return to its exact previous state if it goes through a disturbance.","processes that either enhance the original perturbation to the system.","processes that relieve the perturbation."]
                }
                ,
                {
                    numb: 39,
                    question: "Major biogenic macroelements:",
                    answer: "C, O, H, N, P, S.",
                    options: ["C, O, H, N, P, S.","Ca, Cl, Mg, K, Na.","Cu, Fe, Mo, Zn, Co, F, I, B, Mn, Se, As, Si, Cr, Ni, Sn, V.","H, C, N, O, Na, Mg, Al, Si, P, S, Cl, K, Ca.","N2, O2, CO2, H2S, CH4."]
                }
                ,
                {
                    numb: 40,
                    question: "Minor biogenic macroelements:",
                    answer: "Ca, Cl, Mg, K, Na.",
                    options: ["Ca, Cl, Mg, K, Na.","C, O, H, N, P, S","Cu, Fe, Mo, Zn, Co, F, I, B, Mn, Se, As, Si, Cr, Ni, Sn, V.","H, C, N, O, Na, Mg, Al, Si, P, S, Cl, K, Ca.","N2, O2, CO2, H2S, CH4."]
                }
                ,
                {
                    numb: 41,
                    question: "Microelements:",
                    answer: "Cu, Fe, Mo, Zn, Co, F, I, B, Mn, Se, As, Si, Cr, Ni, Sn, V",
                    options: ["Cu, Fe, Mo, Zn, Co, F, I, B, Mn, Se, As, Si, Cr, Ni, Sn, V","Ca, Cl, Mg, K, Na.","C, O, H, N, P, S","H, C, N, O, Na, Mg, Al, Si, P, S, Cl, K, Ca.","N2, O2, CO2, H2S, CH4."]
                }
                ,
                {
                    numb: 42,
                    question: "These greenhouse gases won\u2019t be accompanied by emissions of \u2026",
                    answer: "radionuclides",
                    options: ["radionuclides","trace metals.","non-methane hydrocarbons (NMHCs).","oxides of sulfur (SOx).","and the most reactive oxides of nitrogen (NO and NO2, collectively known as NOx)."]
                }
                ,
                {
                    numb: 43,
                    question: "Where is the lowest percentage of water distributed in the biosphere?",
                    answer: "Rivers",
                    options: ["Rivers","Atmosphere.","Lakes.","Groundwater.","Cryosphere."]
                }
                ,
                {
                    numb: 44,
                    question: "It is the introduction of contaminants into the natural environment that cause adverse change.",
                    answer: "Pollution.",
                    options: ["Pollution.","Change.","Factor.","Nature.","Behavior."]
                }
                ,
                {
                    numb: 45,
                    question: "Air pollution:",
                    answer: "the release of chemicals and particulates into the atmosphere.",
                    options: ["the release of chemicals and particulates into the atmosphere.","includes light trespass, over-illumination and astronomical interference.","the criminal throwing of inappropriate man-made objects, unremoved, onto public and private properties.","which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar.","occurs when chemicals are released by spill or underground leakage."]
                }
                ,
                {
                    numb: 46,
                    question: "Light pollution:",
                    answer: "includes light trespass, over-illumination and astronomical interference.",
                    options: ["includes light trespass, over-illumination and astronomical interference.","the criminal throwing of inappropriate man-made objects, unremoved, onto public and private properties.","which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar.","occurs when chemicals are released by spill or underground leakage.","the release of chemicals and particulates into the atmosphere."]
                }
                ,
                {
                    numb: 47,
                    question: "Littering:",
                    answer: "the criminal throwing of inappropriate man-made objects, unremoved, onto public and private properties.",
                    options: ["the criminal throwing of inappropriate man-made objects, unremoved, onto public and private properties.","which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar.","occurs when chemicals are released by spill or underground leakage.","the release of chemicals and particulates into the atmosphere.","includes light trespass, over-illumination and astronomical interference."]
                }
                ,
                {
                    numb: 48,
                    question: "Noise pollution:",
                    answer: "which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar.",
                    options: ["which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar.","occurs when chemicals are released by spill or underground leakage.","the release of chemicals and particulates into the atmosphere.","includes light trespass, over-illumination and astronomical interference.","the criminal throwing of inappropriate man-made objects, unremoved, onto public and private properties."]
                }
                ,
                {
                    numb: 49,
                    question: "Soil contamination:",
                    answer: "occurs when chemicals are released by spill or underground leakage.",
                    options: ["occurs when chemicals are released by spill or underground leakage.","the release of chemicals and particulates into the atmosphere.","includes light trespass, over-illumination and astronomical interference.","the criminal throwing of inappropriate man-made objects, unremoved, onto public and private properties.","which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar."]
                }
                ,
                {
                    numb: 50,
                    question: "Radioactive contamination:",
                    answer: "activities in atomic physics, such as nuclear power generation and nuclear weapons research, manufacture and deployment.",
                    options: ["activities in atomic physics, such as nuclear power generation and nuclear weapons research, manufacture and deployment.","is a temperature change in natural water bodies caused by human influence, such as use of water as coolant in a power plant.","which can refer to the presence of overhead power lines, motorway billboards, scarred landforms (as from strip mining), open storage of trash, municipal solid waste or space debris","by the discharge of wastewater from commercial and industrial waste (intentionally or through spills) into surface waters; discharges of untreated domesticsewage, and chemical contaminants, such as chlorine, from treated sewage; release of waste and contaminants into surface runoff flowing to surface waters.","which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar."]
                }
                ,
];
showqa();
