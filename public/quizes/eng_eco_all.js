
var title = 'ENG ECO ALL 1-246'; 
var questionCount = 245; 
var timeValue = 999;
var answerMixing = true;
var deadLine = false;
var about = true;
let syllabus = '.';

showDetail();

let questions = [

                {
                    numb: 1,
                    question: "\ufeffIt is the study of relationships exhibited by living organisms with its surroundings in which they live.",
                    answer: "Ecology",
                    options: ["Ecology","Bioecology","Socioecology","Biology","Chemistry"]
                }
                ,
                {
                    numb: 2,
                    question: "The word ecology is coined by a German zoologist_________",
                    answer: "Ernst Haeckel in 1869",
                    options: ["Ernst Haeckel in 1869","Carl Linnaeus in 1866","Charles Darwin in 1900","Arthur G. Tansley in 1869","Vladimir Vernadsky in 1899"]
                }
                ,
                {
                    numb: 3,
                    question: "The major sub-disciplines, which studies the influence of the biotic and abiotic environment on the physiology of the individual, and the adaptation of the individual to its environment",
                    answer: "Physiological ecology (or ecophysiology)",
                    options: ["Physiological ecology (or ecophysiology)","Behavioral ecology(or autecology)","Population ecology (or demecology)","Community ecology (or synecology)","Ecosystem ecology"]
                }
                ,
                {
                    numb: 4,
                    question: "The major sub-disciplines, which studies studies the ecological and evolutionary basis for animal behavior, and the roles of behavior in enabling animals to adapt to their ecological niches.",
                    answer: "Behavioral ecology(or autecology)",
                    options: ["Behavioral ecology(or autecology)","Population ecology (or demecology)","Community ecology (or synecology)","Ecosystem ecology","Physiological ecology (or ecophysiology)"]
                }
                ,
                {
                    numb: 5,
                    question: "The major sub-disciplines, which deals with the dynamics of populations within species and the interactions of these populations with environmental factors",
                    answer: "Population ecology (or demecology)",
                    options: ["Population ecology (or demecology)","Community ecology (or synecology)","Ecosystem ecology","Physiological ecology (or ecophysiology)","Behavioral ecology(or autecology)"]
                }
                ,
                {
                    numb: 6,
                    question: "The major sub-disciplines, which studies the interactions between species within an ecological community.",
                    answer: "Community ecology (or synecology)",
                    options: ["Community ecology (or synecology)","Ecosystem ecology","Physiological ecology (or ecophysiology)","Behavioral ecology(or autecology)","Population ecology (or demecology)"]
                }
                ,
                {
                    numb: 7,
                    question: "The major sub-disciplines, which studies the flows of energy and matter through ecosystems.",
                    answer: "Ecosystem ecology",
                    options: ["Ecosystem ecology","Physiological ecology (or ecophysiology)","Behavioral ecology(or autecology)","Population ecology (or demecology)","Community ecology (or synecology)"]
                }
                ,
                {
                    numb: 8,
                    question: "Medical ecology.",
                    answer: "The major sub-disciplines, which studies issues of human health in which environmental disturbances play a role",
                    options: ["The major sub-disciplines, which studies issues of human health in which environmental disturbances play a role","The major sub-disciplines, which studies the interactions between discrete elements of a landscape and spatial patterns, including the role of disturbance and human impacts","The major sub-disciplines, which looks at ecological questions at the global level, often asking macroecological questions","The major sub-disciplines, which either can be considered the evolutionary histories of species and the interactions between them, or approaches the study of evolution by including elements of species interaction","The major sub-disciplines, which looks at the relation between ecology and language"]
                }
                ,
                {
                    numb: 9,
                    question: "Landscape ecology.",
                    answer: "The major sub-disciplines, which studies the interactions between discrete elements of a landscape and spatial patterns, including the role of disturbance and human impacts",
                    options: ["The major sub-disciplines, which studies the interactions between discrete elements of a landscape and spatial patterns, including the role of disturbance and human impacts","The major sub-disciplines, which looks at ecological questions at the global level, often asking macroecological questions","The major sub-disciplines, which either can be considered the evolutionary histories of species and the interactions between them, or approaches the study of evolution by including elements of species interaction","The major sub-disciplines, which looks at the relation between ecology and language","The major sub-disciplines, which studies issues of human health in which environmental disturbances play a role"]
                }
                ,
                {
                    numb: 10,
                    question: "Global ecology.",
                    answer: "The major sub-disciplines, which looks at ecological questions at the global level, often asking macroecological questions",
                    options: ["The major sub-disciplines, which looks at ecological questions at the global level, often asking macroecological questions","The major sub-disciplines, which either can be considered the evolutionary histories of species and the interactions between them, or approaches the study of evolution by including elements of species interaction","The major sub-disciplines, which looks at the relation between ecology and language","The major sub-disciplines, which studies issues of human health in which environmental disturbances play a role","The major sub-disciplines, which studies the interactions between discrete elements of a landscape and spatial patterns, including the role of disturbance and human impacts"]
                }
                ,
                {
                    numb: 11,
                    question: "Evolutionary ecology.",
                    answer: "The major sub-disciplines, which either can be considered the evolutionary histories of species and the interactions between them, or approaches the study of evolution by including elements of species interaction",
                    options: ["The major sub-disciplines, which either can be considered the evolutionary histories of species and the interactions between them, or approaches the study of evolution by including elements of species interaction","The major sub-disciplines, which looks at the relation between ecology and language","The major sub-disciplines, which studies issues of human health in which environmental disturbances play a role","The major sub-disciplines, which studies the interactions between discrete elements of a landscape and spatial patterns, including the role of disturbance and human impacts","The major sub-disciplines, which looks at ecological questions at the global level, often asking macroecological questions"]
                }
                ,
                {
                    numb: 12,
                    question: "Ecolinguistics.",
                    answer: "The major sub-disciplines, which looks at the relation between ecology and language",
                    options: ["The major sub-disciplines, which looks at the relation between ecology and language","The major sub-disciplines, which studies issues of human health in which environmental disturbances play a role","The major sub-disciplines, which studies the interactions between discrete elements of a landscape and spatial patterns, including the role of disturbance and human impacts","The major sub-disciplines, which looks at ecological questions at the global level, often asking macroecological questions","The major sub-disciplines, which either can be considered the evolutionary histories of species and the interactions between them, or approaches the study of evolution by including elements of species interaction"]
                }
                ,
                {
                    numb: 13,
                    question: "Biotic factors:",
                    answer: "all the living things that directly or indirectly affect the ecosystem",
                    options: ["all the living things that directly or indirectly affect the ecosystem","the non-living parts of the environment","they directly affect the ability of organisms to live and reproduce","can vary from place to place","can act as LIMITING FACTORS that keep a population at a certain level."]
                }
                ,
                {
                    numb: 14,
                    question: "Abiotic factors:",
                    answer: "the non-living parts of the environment",
                    options: ["the non-living parts of the environment","all the living things that directly affect the ecosystem","all the living things that indirectly affect the ecosystem","interact with other living organisms and the physical environment.","constitute the living organisms of the environment and definitely they have their interactions"]
                }
                ,
                {
                    numb: 15,
                    question: "Liebig\u2019s Law:",
                    answer: "This law states that an organism requires minimum quantity of a particular nutrient for its proper growth",
                    options: ["This law states that an organism requires minimum quantity of a particular nutrient for its proper growth","The law of limiting factors which states that a biological process is controlled by a number of factors and deficiency of any of these factors, will affect the process","The concept of limiting factor so as to include the limiting effects of maximum as well as minimum quantity of a factor on organisms","The effect of elevating CO2 and eutrophication on phytoplankton productivity and community composition, with a particular interest in their interaction","The physical self measurement is an indicator of his energy levels in terms of coordination, strength, and general well-being"]
                }
                ,
                {
                    numb: 16,
                    question: "Shelford\u2019s Law:",
                    answer: "The concept of limiting factor so as to include the limiting effects of maximum as well as minimum quantity of a factor on organisms",
                    options: ["The concept of limiting factor so as to include the limiting effects of maximum as well as minimum quantity of a factor on organisms","The law of limiting factors which states that a biological process is controlled by a number of factors and deficiency of any of these factors, will affect the process","This law states that an organism requires minimum quantity of a particular nutrient for its proper growth.","The effect of elevating CO2 and eutrophication on phytoplankton productivity and community composition, with a particular interest in their interaction","The physical self measurement is an indicator of his energy levels in terms of coordination, strength, and general well-being"]
                }
                ,
                {
                    numb: 17,
                    question: "Optimum Zone:",
                    answer: "It is the most favourable zone for the growth and development of organism.",
                    options: ["It is the most favourable zone for the growth and development of organism.","It is the lowest minimum limit of temperature below which the growth and development of the organism ceases and organism becomes nonfunctional","It is the highest maximum limit of temperature above which the growth and development of the organism ceases","It is the zone below the critical minimum and above critical maximum.","This zone is unfavourable for the survival of the organism for a longer period of time."]
                }
                ,
                {
                    numb: 18,
                    question: "Critical Minimum Zone:",
                    answer: "It is the lowest minimum limit of temperature below which the growth and development of the organism ceases and organism becomes nonfunctional.",
                    options: ["It is the lowest minimum limit of temperature below which the growth and development of the organism ceases and organism becomes nonfunctional.","It is the most favourable zone for the growth and development of organism.","It is the highest maximum limit of temperature above which the growth and development of the organism ceases","It is the zone below the critical minimum and above critical maximum.","This zone is unfavourable for the survival of the organism for a longer period of time."]
                }
                ,
                {
                    numb: 19,
                    question: "Critical Maximum Zone:",
                    answer: "It is the highest maximum limit of temperature above which the growth and development of the organism ceases",
                    options: ["It is the highest maximum limit of temperature above which the growth and development of the organism ceases","It is the lowest minimum limit of temperature below which the growth and development of the organism ceases and organism becomes nonfunctional.","It is the most favourable zone for the growth and development of organism.","It is the zone below the critical minimum and above critical maximum.","This zone is unfavourable for the survival of the organism for a longer period of time."]
                }
                ,
                {
                    numb: 20,
                    question: "Terrestrial plants which cannot tolerate extremely dry conditions and pass through long periods without-water:",
                    answer: "Xerophytes",
                    options: ["Xerophytes","Hydrophytes","Mesophytes","Xerocoles","Mesocoles"]
                }
                ,
                {
                    numb: 21,
                    question: "Terrestrial plants require moderate quantity of water:",
                    answer: "Mesophytes",
                    options: ["Mesophytes","Xerocoles","Mesocoles","Xerophytes","Hydrophytes"]
                }
                ,
                {
                    numb: 22,
                    question: "Terrestrial animals which can tolerate extremely dry conditions and pass long periods without water.",
                    answer: "Xerocoles",
                    options: ["Xerocoles","Mesophytes","Mesocoles","Xerophytes","Hydrophytes"]
                }
                ,
                {
                    numb: 23,
                    question: "The most common type of interspecific interaction. Neither population affects the other.",
                    answer: "Neutralism",
                    options: ["Neutralism","Mutualism","Commensalism","Predation","Amensalism"]
                }
                ,
                {
                    numb: 24,
                    question: "When two species interact to the benefit of both species.",
                    answer: "Mutualism",
                    options: ["Mutualism","Neutralism","Commensalism","Predation","Amensalism"]
                }
                ,
                {
                    numb: 25,
                    question: "It represents two or more populations living together without entering into any kind of physiological exchange. In this process, one is benefited without any effect on the other.",
                    answer: "Commensalism",
                    options: ["Commensalism","Mutualism","Neutralism","Predation","Amensalism"]
                }
                ,
                {
                    numb: 26,
                    question: "It is free living organism which kills and devours individuals of other species.",
                    answer: "Predation",
                    options: ["Predation","Mutualism","Neutralism","Commensalism","Amensalism"]
                }
                ,
                {
                    numb: 27,
                    question: "A symbiotic relationship in which one organism is harmed or inhibited and the other is unaffected.",
                    answer: "Amensalism",
                    options: ["Amensalism","Predation","Mutualism","Neutralism","Commensalism"]
                }
                ,
                {
                    numb: 28,
                    question: "A group of organisms of the same species that occupies a common space at one time is a\/an\u2026",
                    answer: "population",
                    options: ["population","organism","cell","community","ecosystem"]
                }
                ,
                {
                    numb: 29,
                    question: "The main concern of a population ecologist is...",
                    answer: "demographics.",
                    options: ["demographics.","size","quality","quantity","density"]
                }
                ,
                {
                    numb: 30,
                    question: "Species population:",
                    answer: "All individuals of a species;",
                    options: ["All individuals of a species;","A set of spatially disjunct populations, among which there is some immigration.","A spatially clustered group of individuals.","A group of individuals within an investigator-delimited area smaller than the geographic range of the species and often within a population;","An arbitrary spatially delimited subset of individuals from within a population."]
                }
                ,
                {
                    numb: 31,
                    question: "Metapopulation:",
                    answer: "A set of spatially disjunct populations, among which there is some immigration.",
                    options: ["A set of spatially disjunct populations, among which there is some immigration.","All individuals of a species;","A spatially clustered group of individuals.","A group of individuals within an investigator-delimited area smaller than the geographic range of the species and often within a population;","An arbitrary spatially delimited subset of individuals from within a population."]
                }
                ,
                {
                    numb: 32,
                    question: "Local population:",
                    answer: "A group of individuals within an investigator-delimited area smaller than the geographic range of the species and often within a population;",
                    options: ["A group of individuals within an investigator-delimited area smaller than the geographic range of the species and often within a population;","A spatially clustered group of individuals.","A set of spatially disjunct populations, among which there is some immigration.","All individuals of a species;","An arbitrary spatially delimited subset of individuals from within a population."]
                }
                ,
                {
                    numb: 33,
                    question: "Subpopulation:",
                    answer: "An arbitrary spatially delimited subset of individuals from within a population.",
                    options: ["An arbitrary spatially delimited subset of individuals from within a population.","A group of individuals within an investigator-delimited area smaller than the geographic range of the species and often within a population;","A spatially clustered group of individuals.","A set of spatially disjunct populations, among which there is some immigration.","All individuals of a species;"]
                }
                ,
                {
                    numb: 34,
                    question: "The most fundamental law of population ecology is ___________ exponential law of population growth",
                    answer: "Thomas Malthus",
                    options: ["Thomas Malthus","Ernst Haeckel","Karl M\u00f6bius","Charles Darwin","Arthur Tansley"]
                }
                ,
                {
                    numb: 35,
                    question: "The per capita rates of change in a population can be described as:",
                    answer: "dN\/dT=B-D=bN-dN=(b-d)N=rN.",
                    options: ["dN\/dT=B-D=bN-dN=(b-d)N=rN.","dN\/dT=aN(1-N\/K)","\u041a=dWK\/dm.","\u0394N\/\u0394t=\u03bbN.","Nt=N0e"]
                }
                ,
                {
                    numb: 36,
                    question: "Malthus' population principle of growth was later transformed into a mathematical model known as the logistic equation:",
                    answer: "dN\/dT=aN(1-N\/K)",
                    options: ["dN\/dT=aN(1-N\/K)","dN\/dT=B-D=bN-dN=(b-d)N=rN.","\u041a=dWK\/dm.","\u0394N\/\u0394t=\u03bbN.","Nt=N0e"]
                }
                ,
                {
                    numb: 37,
                    question: "_________occurs when r does not change over time.",
                    answer: "Exponential growth.",
                    options: ["Exponential growth.","Exponential recession.","Logistic growth.","Logistic recession.","Population stable."]
                }
                ,
                {
                    numb: 38,
                    question: "_________ occurs when r changes as the size of the population increases.",
                    answer: "Logistic growth.",
                    options: ["Logistic growth.","Exponential growth.","Exponential recession.","Logistic recession.","Population stable."]
                }
                ,
                {
                    numb: 39,
                    question: "It is the study of the organization and functioning of communities of organisms.",
                    answer: "Community ecology.",
                    options: ["Community ecology.","Population ecology.","Factorial ecology;","Applied ecology.","Global ecology;"]
                }
                ,
                {
                    numb: 40,
                    question: "Community ecology is usually subdivided according to habitat or \u2026",
                    answer: "biome.",
                    options: ["biome.","home;","ecosystem.","nature","organism"]
                }
                ,
                {
                    numb: 41,
                    question: "What is the observed process in the species structure of an ecological community over time in ecological succession of?",
                    answer: "change",
                    options: ["change","increase.","improvement","development","decrease"]
                }
                ,
                {
                    numb: 42,
                    question: "The \u02baengine\u02ba of succession, the cause of ecosystem change, is the ________of established species upon their own environments",
                    answer: "impact",
                    options: ["impact","improvement","development","change","movement"]
                }
                ,
                {
                    numb: 43,
                    question: "Ecological succession -",
                    answer: "is the observed process of change in the species structure of an ecological community over time.",
                    options: ["is the observed process of change in the species structure of an ecological community over time.","succession that begins in new habitats, uninfluenced by pre-existing communities;","successional dynamics following severe disturbance or removal of a pre-existing community.","is the study of the organization and functioning of communities of organisms.","a group of organisms of the same species that occupies a common space at one time;"]
                }
                ,
                {
                    numb: 44,
                    question: "Primary succession -",
                    answer: "succession that begins in new habitats, uninfluenced by pre-existing communities;",
                    options: ["succession that begins in new habitats, uninfluenced by pre-existing communities;","is the observed process of change in the species structure of an ecological community over time.","successional dynamics following severe disturbance or removal of a pre-existing community.","is the study of the organization and functioning of communities of organisms.","a group of organisms of the same species that occupies a common space at one time;"]
                }
                ,
                {
                    numb: 45,
                    question: "Secondary succession -",
                    answer: "successional dynamics following severe disturbance or removal of a pre-existing community.",
                    options: ["successional dynamics following severe disturbance or removal of a pre-existing community.","is the observed process of change in the species structure of an ecological community over time.","succession that begins in new habitats, uninfluenced by pre-existing communities;","is the study of the organization and functioning of communities of organisms.","a group of organisms of the same species that occupies a common space at one time;"]
                }
                ,
                {
                    numb: 46,
                    question: "What doesn\u2019t include the stages of primary succession?",
                    answer: "animals.",
                    options: ["animals.","pioneer plants (lichens and mosses).","grassy stage.","smaller shrubs.","trees"]
                }
                ,
                {
                    numb: 47,
                    question: "The climax community stage:",
                    answer: "is a fully functioning ecosystem.",
                    options: ["is a fully functioning ecosystem.","is the study of the organization and functioning of communities of organisms.","a group of organisms of the same species that occupies a common space at one time;","is the observed process of change in the species structure of an ecological community over time.","successional dynamics following severe disturbance or removal of a pre-existing community."]
                }
                ,
                {
                    numb: 48,
                    question: "The sequence of organisms through which energy may move in a community is customarily called:",
                    answer: "a food chain.",
                    options: ["a food chain.","an energy flow.","a trophic levels.","a pyramid of biomass.","a pyramid of numbers ."]
                }
                ,
                {
                    numb: 49,
                    question: "It is pictorial graph representing the biomass, organism number, or energy content of each trophic level in a food web from the producer to the final consumer populations:",
                    answer: "Ecological pyramid.",
                    options: ["Ecological pyramid.","Pyramid of energy.","Pyramid of numbers.","Pyramid of biomass.","Energy flows."]
                }
                ,
                {
                    numb: 50,
                    question: "It illustrates the fact that each succeeding trophic level is smaller than the previous level:",
                    answer: "Pyramid of energy.",
                    options: ["Pyramid of energy.","Pyramid of numbers .","Ecological pyramid.","Pyramid of biomass.","Energy flows."]
                }
                ,
                {
                    numb: 51,
                    question: "\ufeffIt based on number of organisms at each trophic level:",
                    answer: "Pyramid of numbers.",
                    options: ["Pyramid of numbers.","Ecological pyramid.","Pyramid of energy.","Pyramid of biomass.","Energy flows."]
                }
                ,
                {
                    numb: 52,
                    question: "They consist of autotrophs which are mostly photosynthetic organisms that use light energy to synthesize sugars and other organic compounds, which they use as fuel for cellular respiration and as building material growth:",
                    answer: "primary consumers.",
                    options: ["primary consumers.","primary producers.","secondary consumers.","tertiary consumers. ","detritivores\/decomposers."]
                }
                ,
                {
                    numb: 53,
                    question: "They are consumers that get their energy from detritus, which is nonliving organic material:",
                    answer: "detritivores\/decomposers.",
                    options: ["detritivores\/decomposers.","primary consumers.","primary producers.","secondary consumers.","tertiary consumers. "]
                }
                ,
                {
                    numb: 54,
                    question: "It is that area of the earth where life exists:",
                    answer: "Biosphere",
                    options: ["Biosphere","Ecosphere","Lithosphere","Ecosystem","Biogeosphere"]
                }
                ,
                {
                    numb: 55,
                    question: "The term \"biosphere\" originated:",
                    answer: "Eduard Suess in 1875.",
                    options: ["Eduard Suess in 1875.","Vladimir I. Vernadsky in 1926.","Arthur G. Tansley in 1875","",""]
                }
                ,
                {
                    numb: 56,
                    question: "Who developed the science of the biosphere:",
                    answer: "Vladimir I. Vernadsky.",
                    options: ["Vladimir I. Vernadsky.","Eduard Suess.","Arthur G. Tansley in 1875","Eduard Suess in 1875.",""]
                }
                ,
                {
                    numb: 57,
                    question: "Which of the following works are not typical for Vernadsky:",
                    answer: "He advanced views on earth as a macro-organism with the Gaia hypothesis.",
                    options: ["He advanced views on earth as a macro-organism with the Gaia hypothesis.","He carried out highly detailed studies on aluminosilicates and was the first to correctly describe their chemistry and their structure, which forms the basis of many other minerals.","He was a pioneer in geochemistry \u2014 the measurement and study of the distribution and migration of the chemical elements and isotopes in the Earth\u2019s crust.","He studied the effects living things have on the chemistry of the Earth\u2019s crust.","He regarded as the founder of the theory of the biosphere - the total mass of living organisms, which process and recycle the energy and nutrients available from the environment."]
                }
                ,
                {
                    numb: 58,
                    question: "The lithosphere:",
                    answer: "The limestones have the organic origin, created in seas with the organisms skeletons, with the rests of the unicellular seaweeds, the coal, the oil - from the rests of the animals and plants soft tissues, that suffered the chemical transformations.",
                    options: ["The limestones have the organic origin, created in seas with the organisms skeletons, with the rests of the unicellular seaweeds, the coal, the oil - from the rests of the animals and plants soft tissues, that suffered the chemical transformations.","It as the external Earth envelope protects it from the radiation stream: gamut-, X-, ultraviolet and other rays.","It as the external Earth envelope protects it from the radiation stream: gamut-, X-, ultraviolet and other rays.","It is that area of the earth where life exists.","A group of organisms of the same species that occupies a common space at one time."]
                }
                ,
                {
                    numb: 59,
                    question: "The atmosphere:",
                    answer: "It as the external Earth envelope protects it from the radiation stream: gamut-, X-, ultraviolet and other rays.",
                    options: ["It as the external Earth envelope protects it from the radiation stream: gamut-, X-, ultraviolet and other rays.","The limestones have the organic origin, created in seas with the organisms skeletons, with the rests of the unicellular seaweeds, the coal, the oil - from the rests of the animals and plants soft tissues, that suffered the chemical transformations.","It is the Earth water envelope; the aggregate of the oceans, seas, lakes, rivers, underground waters and glacial deposits.","It is that area of the earth where life exists.","A group of organisms of the same species that occupies a common space at one time."]
                }
                ,
                {
                    numb: 60,
                    question: "The hydrosphere:",
                    answer: "It is the Earth water envelope; the aggregate of the oceans, seas, lakes, rivers, underground waters and glacial deposits",
                    options: ["It is the Earth water envelope; the aggregate of the oceans, seas, lakes, rivers, underground waters and glacial deposits","The limestones have the organic origin, created in seas with the organisms skeletons, with the rests of the unicellular seaweeds, the coal, the oil - from the rests of the animals and plants soft tissues, that suffered the chemical transformations.","It as the external Earth envelope protects it from the radiation stream: gamut-, X-, ultraviolet and other rays.","It is that area of the earth where life exists.","A group of organisms of the same species that occupies a common space at one time."]
                }
                ,
                {
                    numb: 61,
                    question: "The movement of water from the atmosphere to the Earth and back to the atmosphere is called the:",
                    answer: "water cycle.",
                    options: ["water cycle.","carbon cycle.","nitrogen cycle.","soil cycle.","oxigen cycle."]
                }
                ,
                {
                    numb: 62,
                    question: "The process by which carbon is moved through the environment is called the:",
                    answer: "carbon cycle.",
                    options: ["carbon cycle.","water cycle.","nitrogen cycle.","soil cycle.","oxigen cycle."]
                }
                ,
                {
                    numb: 63,
                    question: "The movement of nitrogen through the biosphere is called the:",
                    answer: "nitrogen cycle.",
                    options: ["nitrogen cycle.","carbon cycle.","water cycle.","soil cycle.","oxygen cycle."]
                }
                ,
                {
                    numb: 64,
                    question: "Who requires nitrogen to build proteins?",
                    answer: "All organisms.",
                    options: ["All organisms.","Animals.","Plants.","Humans.","Microorganisms."]
                }
                ,
                {
                    numb: 65,
                    question: "The movement of oxygen through the environment is called the:",
                    answer: "oxygen cycle.",
                    options: ["oxygen cycle.","nitrogen cycle.","carbon cycle.","water cycle.","soil cycle."]
                }
                ,
                {
                    numb: 66,
                    question: "Consumers and decomposers use glucose in__________, during which they produce carbon dioxide:",
                    answer: "respiration.",
                    options: ["respiration.","photosynthesis.","combustion.","evaporation","condensation."]
                }
                ,
                {
                    numb: 67,
                    question: "Water molecules enter the air by:",
                    answer: "evaporation",
                    options: ["evaporation","respiration","photosynthesis.","combustion.","condensation."]
                }
                ,
                {
                    numb: 68,
                    question: "The Earth Atmosphere consists of the gases mixture:",
                    answer: "the nitrogen (78 %), the oxygen (20.9 %), the argon (0.93 %), the carbonic acid (0.03 %).",
                    options: ["the nitrogen (78 %), the oxygen (20.9 %), the argon (0.93 %), the carbonic acid (0.03 %).","the oxygen (78 %), the nitrogen (20.9 %), the argon (0.93 %), the carbonic acid (0.03 %).","the argon (78 %), the oxygen (20.9 %), the nitrogen (0.93 %), the carbonic acid (0.03 %).","the carbonic acid (78 %), the oxygen (20.9 %), the argon (0.93 %), the nitrogen (0.03 %).","the nitrogen (78 %), the oxygen (20.9 %), the carbonic acid (0.93 %), the argon (0.03 %)."]
                }
                ,
                {
                    numb: 69,
                    question: "The Earth water doesn\u2019t envelope:",
                    answer: "soil.",
                    options: ["soil.","the aggregate of the oceans.","underground waters.","glacial deposits.","seas, lakes, rivers."]
                }
                ,
                {
                    numb: 70,
                    question: "How many percents of the biosphere is in the biomass of living matter by weight?",
                    answer: "0.0001%",
                    options: ["0.0001%","0.001%","0.00001%","0.01%.","0.1%."]
                }
                ,
                {
                    numb: 71,
                    question: "What functions aren\u2019t of the main of living matter?",
                    answer: "structure",
                    options: ["structure","energy.","destructive.","concentration.","environment-forming."]
                }
                ,
                {
                    numb: 72,
                    question: "Destructive function:",
                    answer: "is the decomposition and mineralization of dead material in the chemical decomposition of rocks, minerals formed involvement in biotic circulation.",
                    options: ["is the decomposition and mineralization of dead material in the chemical decomposition of rocks, minerals formed involvement in biotic circulation.","is manifested in the selective accumulation in the vital activity of the atoms of substances dispersed in nature.","is to transform the physical and chemical parameters of the environment (lithosphere, hydrosphere, atmosphere) in conditions favorable to the existence of organisms.","are connected with the growth and multiplication of organisms, which lead to an increase in their number and in the mass of living matter.","is determined by the gaseous functions of living matter; the predominant mass of gases on our planet is biogenic."]
                }
                ,
                {
                    numb: 73,
                    question: "Concentration function.",
                    answer: "is manifested in the selective accumulation in the vital activity of the atoms of substances dispersed in nature.",
                    options: ["is manifested in the selective accumulation in the vital activity of the atoms of substances dispersed in nature.","s the decomposition and mineralization of dead material in the chemical decomposition of rocks, minerals formed involvement in biotic circulation.","is to transform the physical and chemical parameters of the environment (lithosphere, hydrosphere, atmosphere) in conditions favorable to the existence of organisms.","are connected with the growth and multiplication of organisms, which lead to an increase in their number and in the mass of living matter.","is determined by the gaseous functions of living matter; the predominant mass of gases on our planet is biogenic."]
                }
                ,
                {
                    numb: 74,
                    question: "Environmental function.",
                    answer: "is to transform the physical and chemical parameters of the environment (lithosphere, hydrosphere, atmosphere) in conditions favorable to the existence of organisms",
                    options: ["is to transform the physical and chemical parameters of the environment (lithosphere, hydrosphere, atmosphere) in conditions favorable to the existence of organisms","is the decomposition and mineralization of dead material in the chemical decomposition of rocks, minerals formed involvement in biotic circulation.","is manifested in the selective accumulation in the vital activity of the atoms of substances dispersed in nature.","are connected with the growth and multiplication of organisms, which lead to an increase in their number and in the mass of living matter","is determined by the gaseous functions of living matter; the predominant mass of gases on our planet is biogenic."]
                }
                ,
                {
                    numb: 75,
                    question: "How many groups may be the biogeochemical functions of living matter divided into?",
                    answer: "5",
                    options: ["5","4","3","6","2"]
                }
                ,
                {
                    numb: 76,
                    question: "The gaseous composition of the atmosphere:",
                    answer: "is determined by the gaseous functions of living matter; the predominant mass of gases on our planet is biogenic",
                    options: ["is determined by the gaseous functions of living matter; the predominant mass of gases on our planet is biogenic","include accumulation by the organisms of biogenic elements from the surrounding medium.","lead to most substances being chemically converted.","are connected with the growth and multiplication of organisms, which lead to an increase in their number and in the mass of living matter.","are primarily conditioned by human technological activity (technogenesis), are a form of creation and conversion of materials in the biosphere that is connected with its transition to a new state, the noosphere, when man becomes a new geological force on the planet"]
                }
                ,
                {
                    numb: 77,
                    question: "The concentration functions of living matter:",
                    answer: "include accumulation by the organisms of biogenic elements from the surrounding medium.",
                    options: ["include accumulation by the organisms of biogenic elements from the surrounding medium.","lead to most substances being chemically converted.","is determined by the gaseous functions of living matter; the predominant mass of gases on our planet is biogenic.","are connected with the growth and multiplication of organisms, which lead to an increase in their number and in the mass of living matter.","are primarily conditioned by human technological activity (technogenesis), are a form of creation and conversion of materials in the biosphere that is connected with its transition to a new state, the noosphere, when man becomes a new geological force on the planet"]
                }
                ,
                {
                    numb: 78,
                    question: "The oxidation-reduction functions of living matter:",
                    answer: "lead to most substances being chemically converted.",
                    options: ["lead to most substances being chemically converted.","is determined by the gaseous functions of living matter; the predominant mass of gases on our planet is biogenic","include accumulation by the organisms of biogenic elements from the surrounding medium.","are connected with the growth and multiplication of organisms, which lead to an increase in their number and in the mass of living matter","are primarily conditioned by human technological activity (technogenesis), are a form of creation and conversion of materials in the biosphere that is connected with its transition to a new state, the noosphere, when man becomes a new geological force on the planet."]
                }
                ,
                {
                    numb: 79,
                    question: "The biochemical functions:",
                    answer: "are connected with the growth and multiplication of organisms, which lead to an increase in their number and in the mass of living matter.",
                    options: ["are connected with the growth and multiplication of organisms, which lead to an increase in their number and in the mass of living matter.","lead to most substances being chemically converted.","is determined by the gaseous functions of living matter; the predominant mass of gases on our planet is biogenic","include accumulation by the organisms of biogenic elements from the surrounding medium.","are primarily conditioned by human technological activity (technogenesis), are a form of creation and conversion of materials in the biosphere that is connected with its transition to a new state, the noosphere, when man becomes a new geological force on the planet."]
                }
                ,
                {
                    numb: 80,
                    question: "The biogeochemical functions of humanity:",
                    answer: "are primarily conditioned by human technological activity (technogenesis), are a form of creation and conversion of materials in the biosphere that is connected with its transition to a new state, the noosphere, when man becomes a new geological force on the planet",
                    options: ["are primarily conditioned by human technological activity (technogenesis), are a form of creation and conversion of materials in the biosphere that is connected with its transition to a new state, the noosphere, when man becomes a new geological force on the planet","are connected with the growth and multiplication of organisms, which lead to an increase in their number and in the mass of living matter.","lead to most substances being chemically converted.","is determined by the gaseous functions of living matter; the predominant mass of gases on our planet is biogenic","include accumulation by the organisms of biogenic elements from the surrounding medium."]
                }
                ,
                {
                    numb: 81,
                    question: "The term \u201cnoosphere,\u201d referring to the mental sheath or envelope of thought that encompasses the Earth, is derived from nous, the Greek word for...",
                    answer: "mind",
                    options: ["mind","human","man","brain","Earth"]
                }
                ,
                {
                    numb: 82,
                    question: "What elements are present in all living organisms, forming there the chemical compounds primarily encountered in living matter?",
                    answer: "H, C, N, O, Na, Mg, Al, Si, P, S, Cl, K, Ca.",
                    options: ["H, C, N, O, Na, Mg, Al, Si, P, S, Cl, K, Ca.","N2, O2, CO2, H2S, CH4.","Cu, Fe, Mo, Zn, Co, F, I, B, Mn, Se, As, Si, Cr, Ni, Sn, V.","C, O, H, N, P, S.","Ca, Cl, Mg, K, Na."]
                }
                ,
                {
                    numb: 83,
                    question: "The Biosphere has three parts:",
                    answer: "the biosphere in the cosmos, the domain of life, and a few words about the noosphere.",
                    options: ["the biosphere in the cosmos, the domain of life, and a few words about the noosphere.","water, land and air.","producers, consumers and decomposers.","abiotic, biotic and anthropogenic.","autecology, demecology and synecology."]
                }
                ,
                {
                    numb: 84,
                    question: "The term \u201cliving matter\u201d was introduced by \u2026",
                    answer: "V. I Vernadsky.",
                    options: ["V. I Vernadsky.","Ralph Abraham.","Ch.Darvin.","academic Dubinin.","Russian scientist Matyushin."]
                }
                ,
                {
                    numb: 85,
                    question: "Noosphere \u2013 is\u2026",
                    answer: "the sphere of mind.",
                    options: ["the sphere of mind.","the sphere of air.","the sphere of soil.","the sphere of water.","the sphere of human."]
                }
                ,
                {
                    numb: 86,
                    question: "Cryosphere includes\u2026",
                    answer: "ice",
                    options: ["ice","air","water","living things.","soils"]
                }
                ,
                {
                    numb: 87,
                    question: "Biogeochemical cycles doesn\u2019t include\u2026",
                    answer: "picture",
                    options: ["picture",". irreversibility.","transitional phenomena","evolution.","positive feedback or negative feedback."]
                }
                ,
                {
                    numb: 88,
                    question: "Evolution is\u2026",
                    answer: "the system progressively changes in a particular direction.",
                    options: ["the system progressively changes in a particular direction.","the system tends to switch from one state to another and another and yet others, and perhaps back again, rather than simply moving from \"before\" to \"after\".","the system does not return to its exact previous state if it goes through a disturbance.","processes that either enhance the original perturbation to the system.","processes that relieve the perturbation."]
                }
                ,
                {
                    numb: 89,
                    question: "Major biogenic macroelements:",
                    answer: "C, O, H, N, P, S.",
                    options: ["C, O, H, N, P, S.","Ca, Cl, Mg, K, Na.","Cu, Fe, Mo, Zn, Co, F, I, B, Mn, Se, As, Si, Cr, Ni, Sn, V.","H, C, N, O, Na, Mg, Al, Si, P, S, Cl, K, Ca.","N2, O2, CO2, H2S, CH4."]
                }
                ,
                {
                    numb: 90,
                    question: "Minor biogenic macroelements:",
                    answer: "Ca, Cl, Mg, K, Na.",
                    options: ["Ca, Cl, Mg, K, Na.","C, O, H, N, P, S","Cu, Fe, Mo, Zn, Co, F, I, B, Mn, Se, As, Si, Cr, Ni, Sn, V.","H, C, N, O, Na, Mg, Al, Si, P, S, Cl, K, Ca.","N2, O2, CO2, H2S, CH4."]
                }
                ,
                {
                    numb: 91,
                    question: "Microelements:",
                    answer: "Cu, Fe, Mo, Zn, Co, F, I, B, Mn, Se, As, Si, Cr, Ni, Sn, V",
                    options: ["Cu, Fe, Mo, Zn, Co, F, I, B, Mn, Se, As, Si, Cr, Ni, Sn, V","Ca, Cl, Mg, K, Na.","C, O, H, N, P, S","H, C, N, O, Na, Mg, Al, Si, P, S, Cl, K, Ca.","N2, O2, CO2, H2S, CH4."]
                }
                ,
                {
                    numb: 92,
                    question: "These greenhouse gases won\u2019t be accompanied by emissions of \u2026",
                    answer: "radionuclides",
                    options: ["radionuclides","trace metals.","non-methane hydrocarbons (NMHCs).","oxides of sulfur (SOx).","and the most reactive oxides of nitrogen (NO and NO2, collectively known as NOx)."]
                }
                ,
                {
                    numb: 93,
                    question: "Where is the lowest percentage of water distributed in the biosphere?",
                    answer: "Rivers",
                    options: ["Rivers","Atmosphere.","Lakes.","Groundwater.","Cryosphere."]
                }
                ,
                {
                    numb: 94,
                    question: "It is the introduction of contaminants into the natural environment that cause adverse change.",
                    answer: "Pollution.",
                    options: ["Pollution.","Change.","Factor.","Nature.","Behavior."]
                }
                ,
                {
                    numb: 95,
                    question: "Air pollution:",
                    answer: "the release of chemicals and particulates into the atmosphere.",
                    options: ["the release of chemicals and particulates into the atmosphere.","includes light trespass, over-illumination and astronomical interference.","the criminal throwing of inappropriate man-made objects, unremoved, onto public and private properties.","which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar.","occurs when chemicals are released by spill or underground leakage."]
                }
                ,
                {
                    numb: 96,
                    question: "Light pollution:",
                    answer: "includes light trespass, over-illumination and astronomical interference.",
                    options: ["includes light trespass, over-illumination and astronomical interference.","the criminal throwing of inappropriate man-made objects, unremoved, onto public and private properties.","which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar.","occurs when chemicals are released by spill or underground leakage.","the release of chemicals and particulates into the atmosphere."]
                }
                ,
                {
                    numb: 97,
                    question: "Littering:",
                    answer: "the criminal throwing of inappropriate man-made objects, unremoved, onto public and private properties.",
                    options: ["the criminal throwing of inappropriate man-made objects, unremoved, onto public and private properties.","which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar.","occurs when chemicals are released by spill or underground leakage.","the release of chemicals and particulates into the atmosphere.","includes light trespass, over-illumination and astronomical interference."]
                }
                ,
                {
                    numb: 98,
                    question: "Noise pollution:",
                    answer: "which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar.",
                    options: ["which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar.","occurs when chemicals are released by spill or underground leakage.","the release of chemicals and particulates into the atmosphere.","includes light trespass, over-illumination and astronomical interference.","the criminal throwing of inappropriate man-made objects, unremoved, onto public and private properties."]
                }
                ,
                {
                    numb: 99,
                    question: "Soil contamination:",
                    answer: "occurs when chemicals are released by spill or underground leakage.",
                    options: ["occurs when chemicals are released by spill or underground leakage.","the release of chemicals and particulates into the atmosphere.","includes light trespass, over-illumination and astronomical interference.","the criminal throwing of inappropriate man-made objects, unremoved, onto public and private properties.","which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar."]
                }
                ,
                {
                    numb: 100,
                    question: "Radioactive contamination:",
                    answer: "activities in atomic physics, such as nuclear power generation and nuclear weapons research, manufacture and deployment.",
                    options: ["activities in atomic physics, such as nuclear power generation and nuclear weapons research, manufacture and deployment.","is a temperature change in natural water bodies caused by human influence, such as use of water as coolant in a power plant.","which can refer to the presence of overhead power lines, motorway billboards, scarred landforms (as from strip mining), open storage of trash, municipal solid waste or space debris","by the discharge of wastewater from commercial and industrial waste (intentionally or through spills) into surface waters; discharges of untreated domesticsewage, and chemical contaminants, such as chlorine, from treated sewage; release of waste and contaminants into surface runoff flowing to surface waters.","which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar."]
                }
                ,
                {
                    numb: 101,
                    question: "\ufeffThermal pollution:",
                    answer: "is a temperature change in natural water bodies caused by human influence, such as use of water as coolant in a power plant.",
                    options: ["is a temperature change in natural water bodies caused by human influence, such as use of water as coolant in a power plant.","which can refer to the presence of overhead power lines, motorway billboards, scarred landforms (as from strip mining), open storage of trash, municipal solid waste or space debris.","by the discharge of wastewater from commercial and industrial waste (intentionally or through spills) into surface waters; discharges of untreated domesticsewage, and chemical contaminants, such as chlorine, from treated sewage; release of waste and contaminants into surface runoff flowing to surface waters","which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar.","activities in atomic physics, such as nuclear power generation and nuclear weapons research, manufacture and deployment."]
                }
                ,
                {
                    numb: 102,
                    question: "Visual pollution:",
                    answer: "which can refer to the presence of overhead power lines, motorway billboards, scarred landforms (as from strip mining), open storage of trash, municipal solid waste or space debris.",
                    options: ["which can refer to the presence of overhead power lines, motorway billboards, scarred landforms (as from strip mining), open storage of trash, municipal solid waste or space debris.","by the discharge of wastewater from commercial and industrial waste (intentionally or through spills) into surface waters; discharges of untreated domesticsewage, and chemical contaminants, such as chlorine, from treated sewage; release of waste and contaminants into surface runoff flowing to surface waters","which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar.","activities in atomic physics, such as nuclear power generation and nuclear weapons research, manufacture and deployment.","is a temperature change in natural water bodies caused by human influence, such as use of water as coolant in a power plant."]
                }
                ,
                {
                    numb: 103,
                    question: "Water pollution:",
                    answer: "by the discharge of wastewater from commercial and industrial waste (intentionally or through spills) into surface waters; discharges of untreated domesticsewage, and chemical contaminants, such as chlorine, from treated sewage; release of waste and contaminants into surface runoff flowing to surface waters",
                    options: ["by the discharge of wastewater from commercial and industrial waste (intentionally or through spills) into surface waters; discharges of untreated domesticsewage, and chemical contaminants, such as chlorine, from treated sewage; release of waste and contaminants into surface runoff flowing to surface waters","which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar.","activities in atomic physics, such as nuclear power generation and nuclear weapons research, manufacture and deployment.","is a temperature change in natural water bodies caused by human influence, such as use of water as coolant in a power plant.","which can refer to the presence of overhead power lines, motorway billboards, scarred landforms (as from strip mining), open storage of trash, municipal solid waste or space debris."]
                }
                ,
                {
                    numb: 104,
                    question: "Greenhouse Effect.",
                    answer: "is a process by which thermal radiation from a planetary surface, is absorbed by atmospheric greenhouse gases, and is re-radiated in all directions",
                    options: ["is a process by which thermal radiation from a planetary surface, is absorbed by atmospheric greenhouse gases, and is re-radiated in all directions","This is largely due to the effect of halocarbon refrigerants (such as CFC, halons, freons, etc.).","Gases like carbon dioxide, nitrogen oxide, and sulfur dioxide, can react with water to produce corresponding it.","It refers to rainwater running off land, and into water bodies.","In layman's terms, means excessive growth of phytoplankton in a water body."]
                }
                ,
                {
                    numb: 105,
                    question: "Ozone Depletion.",
                    answer: "This is largely due to the effect of halocarbon refrigerants (such as CFC, halons, freons, etc .).",
                    options: ["This is largely due to the effect of halocarbon refrigerants (such as CFC, halons, freons, etc .).","Gases like carbon dioxide, nitrogen oxide, and sulfur dioxide, can react with water to produce corresponding it.","It refers to rainwater running off land, and into water bodies.","In layman's terms, means excessive growth of phytoplankton in a water body.","is a process by which thermal radiation from a planetary surface, is absorbed by atmospheric greenhouse gases, and is re-radiated in all directions."]
                }
                ,
                {
                    numb: 106,
                    question: "Acid Rain.",
                    answer: "Gases like carbon dioxide, nitrogen oxide, and sulfur dioxide, can react with water to produce corresponding it.",
                    options: ["Gases like carbon dioxide, nitrogen oxide, and sulfur dioxide, can react with water to produce corresponding it.","It refers to rainwater running off land, and into water bodies.","In layman's terms, means excessive growth of phytoplankton in a water body.","is a process by which thermal radiation from a planetary surface, is absorbed by atmospheric greenhouse gases, and is re-radiated in all directions.","This is largely due to the effect of halocarbon refrigerants (such as CFC, halons, freons, etc .)."]
                }
                ,
                {
                    numb: 107,
                    question: "Urban Run-off.",
                    answer: "It refers to rainwater running off land, and into water bodies.",
                    options: ["It refers to rainwater running off land, and into water bodies.","In layman's terms, means excessive growth of phytoplankton in a water body.","is a process by which thermal radiation from a planetary surface, is absorbed by atmospheric greenhouse gases, and is re-radiated in all directions.","This is largely due to the effect of halocarbon refrigerants (such as CFC, halons, freons, etc .).","Gases like carbon dioxide, nitrogen oxide, and sulfur dioxide, can react with water to produce corresponding it."]
                }
                ,
                {
                    numb: 108,
                    question: "Eutrophication.",
                    answer: "In layman's terms, means excessive growth of phytoplankton in a water body.",
                    options: ["In layman's terms, means excessive growth of phytoplankton in a water body.","is a process by which thermal radiation from a planetary surface, is absorbed by atmospheric greenhouse gases, and is re-radiated in all directions.","This is largely due to the effect of halocarbon refrigerants (such as CFC, halons, freons, etc .).","Gases like carbon dioxide, nitrogen oxide, and sulfur dioxide, can react with water to produce corresponding it.","It refers to rainwater running off land, and into water bodies."]
                }
                ,
                {
                    numb: 109,
                    question: "Three major issues come under inefficient land use:",
                    answer: "Urban sprawl, habitat fragmentation, habitat destruction.",
                    options: ["Urban sprawl, habitat fragmentation, habitat destruction.","Desertification, land pollution, soil pollution.","The biosphere in the cosmos, the domain of life, and a few words about the noosphere.","Water, land and air.","Producers, consumers and decomposers."]
                }
                ,
                {
                    numb: 110,
                    question: "What problems aren\u2019t emerging on a global scale:",
                    answer: "Pollution of rivers and lakes.",
                    options: ["Pollution of rivers and lakes.","Global Warming or Climate change.","Depletion of the Ozone Layer.","Decline of the tropical forests.","Unequal distribution of wealth both between countries and between different social groups within countries."]
                }
                ,
                {
                    numb: 111,
                    question: "Sustainable Development isn\u2019t:",
                    answer: "the introduction of contaminants into the natural environment that cause adverse change.",
                    options: ["the introduction of contaminants into the natural environment that cause adverse change.","development that meets the needs of the present without compromising the ability of future generations to meet their own needs.","a process for meeting human development goals while maintaining the ability of natural systems to continue to provide the natural resources and ecosystem services upon which the economy and society depend.","the organizing principle for sustaining finite resources necessary to provide for the needs of future generations of life on the planet","a process that envisions a desirable future state for human societies in which living conditions and resource-use continue to meet human needs without undermining the \"integrity, stability and beauty\" of natural biotic systems."]
                }
                ,
                {
                    numb: 112,
                    question: "Sustainability science is the study of the concepts of sustainable development and ______________science.",
                    answer: "environmental.",
                    options: ["environmental.","physical","chemical","physiological.","social"]
                }
                ,
                {
                    numb: 113,
                    question: "Sustainable development has been described in terms of three-dimension model, these are seen as \"_________________\".",
                    answer: "Economic, environmental and social.",
                    options: ["Economic, environmental and social.","Urban sprawl, habitat fragmentation, habitat destruction.","Desertification, land pollution, soil pollution.","The biosphere in the cosmos, the domain of life, and a few words about the noosphere.","Water, land and air."]
                }
                ,
                {
                    numb: 114,
                    question: "The ecological sustainability of human settlements.",
                    answer: "is part of the relationship between humans and their natural, social and built environments.",
                    options: ["is part of the relationship between humans and their natural, social and built environments.","is the organizing principle for sustaining finite resources necessary to provide for the needs of future generations of life on the planet.","is causing the Earth to lose its snow cover; glaciers are melting, the sea-level is rising, and a lot of arctic floral and faunal species are on the verge of extinction.","is the introduction of contaminants into the natural environment that cause adverse change.","is a balanced system, with water stored in many places at any one time."]
                }
                ,
                {
                    numb: 115,
                    question: "is a balanced system, with water stored in many places at any one time.",
                    answer: "natural environment.",
                    options: ["natural environment.","animals.","waters.","plants.","humans."]
                }
                ,
                {
                    numb: 116,
                    question: "Sustainable energy.",
                    answer: "is clean and can be used over a long period of time.",
                    options: ["is clean and can be used over a long period of time.","consists of environmentally-friendly methods of farming that allow the production of crops or livestock without damage to human or natural systems.","is a large contributor to greenhouse gas emissions.","is the introduction of contaminants into the natural environment that cause adverse change.","is a balanced system, with water stored in many places at any one time."]
                }
                ,
                {
                    numb: 117,
                    question: "Transportation.",
                    answer: "is a large contributor to greenhouse gas emissions.",
                    options: ["is a large contributor to greenhouse gas emissions.","consists of environmentally-friendly methods of farming that allow the production of crops or livestock without damage to human or natural systems.","is clean and can be used over a long period of time.","is the introduction of contaminants into the natural environment that cause adverse change.","is a balanced system, with water stored in many places at any one time."]
                }
                ,
                {
                    numb: 118,
                    question: "Inexhaustible renewable resources:",
                    answer: "solar power from the sun.",
                    options: ["solar power from the sun.","forests.","particular species.","fishes.","oil."]
                }
                ,
                {
                    numb: 119,
                    question: "Exhausted renewable resources:",
                    answer: "forests.",
                    options: ["forests.","solar power from the sun.","particular species.","fishes.","oil"]
                }
                ,
                {
                    numb: 120,
                    question: "Renewable resources are renewable only to a point:",
                    answer: "particular species.",
                    options: ["particular species.","forests.","solar power from the sun.","fishes.","oil."]
                }
                ,
                {
                    numb: 121,
                    question: "It is a basic state document established for listing rare and endangered species of wild animals, plants, and fungi, as well as some subspecies and separate populations:",
                    answer: "The Red Data Book.",
                    options: ["The Red Data Book.","The Concept of Environmental Security.","The Concept of Environmental Safety of the Republic of Kazakhstan for 2004-2015.","The Strategy of Political and Economic Development \u00abKazakhstan-2030\u00bb.","The Ecological Code of laws of the RK."]
                }
                ,
                {
                    numb: 122,
                    question: "When was The Red Book established that was produced \"by the International Union for Conservation of Nature\"?",
                    answer: "in 1948.",
                    options: ["in 1948.","in 1963.","in 1978.","in 1998.","in 1993."]
                }
                ,
                {
                    numb: 123,
                    question: "When was The Red Book of Kazakhstan established?",
                    answer: "in 1978.",
                    options: ["in 1978.","in 1948.","in 1963.","in 1998.","in 1993."]
                }
                ,
                {
                    numb: 124,
                    question: "Nature reserves,",
                    answer: "is conferred to protect unique environments inhabited by rare and endangered species of flora and fauna.",
                    options: ["is conferred to protect unique environments inhabited by rare and endangered species of flora and fauna.","is a basic state document established for listing rare and endangered species of wild animals, plants, and fungi, as well as some subspecies and separate populations.","are those that cannot be renewed or replaced once used, they are gone forever.","is a theory related to overpopulation, referring to situations where per capita consumption is so high that even in spite of a moderate population density, sustainability is not achieved.","is vital for effective conservation management, as it helps steer projects towards implementing management interventions (activities) in such a way to successfully achieve long-term conservation goals."]
                }
                ,
                {
                    numb: 125,
                    question: "It is the oldest reserve in Kazakhstan, established originally in 1926 and now possessing UNESCO biosphere reserve status.",
                    answer: "Aksu-Zhabagly nature reserve.",
                    options: ["Aksu-Zhabagly nature reserve.","Almaty nature reserve.","Barsakelmes nature reserve.","Naurzum nature reserve.","Markakol nature reserve."]
                }
                ,
                {
                    numb: 126,
                    question: "It is listed the natural territories which are, according to qualification of UNESCO, a part of a world natural heritage, established in 1968.",
                    answer: "Korgalzhyn nature reserve.",
                    options: ["Korgalzhyn nature reserve.","Ustyurt nature reserve.","West Altai nature reserve.","Alakol nature reserve.","Karatau nature reserve."]
                }
                ,
                {
                    numb: 127,
                    question: "Environmental Management Systems (EMS).",
                    answer: "seek to provide all businesses (regardless of size and industry) with the means to develop systematic approaches to improving environmental performance.",
                    options: ["seek to provide all businesses (regardless of size and industry) with the means to develop systematic approaches to improving environmental performance.","is vital for effective conservation management, as it helps steer projects towards implementing management interventions (activities) in such a way to successfully achieve long-term conservation goals.","is a basic state document established for listing rare and endangered species of wild animals, plants, and fungi, as well as some subspecies and separate populations.","are those that cannot be renewed or replaced once used, they are gone forever.","is a theory related to overpopulation, referring to situations where per capita consumption is so high that even in spite of a moderate population density, sustainability is not achieved."]
                }
                ,
                {
                    numb: 128,
                    question: "Ecological monitoring.",
                    answer: "seek to provide all businesses (regardless of size and industry) with the means to develop systematic approaches to improving environmental performance.",
                    options: ["seek to provide all businesses (regardless of size and industry) with the means to develop systematic approaches to improving environmental performance.","is vital for effective conservation management, as it helps steer projects towards implementing management interventions (activities) in such a way to successfully achieve long-term conservation goals.","is a basic state document established for listing rare and endangered species of wild animals, plants, and fungi, as well as some subspecies and separate populations.","are those that cannot be renewed or replaced once used, they are gone forever.","is a theory related to overpopulation, referring to situations where per capita consumption is so high that even in spite of a moderate population density, sustainability is not achieved."]
                }
                ,
                {
                    numb: 129,
                    question: "It attempt to convey a broader image than the underlying statistics would suggest:",
                    answer: "Indicators.",
                    options: ["Indicators.","Factors.","Resources.","Reserves","Indexes."]
                }
                ,
                {
                    numb: 130,
                    question: "Dimensions of sustainable development that doesn\u2019t include in the indicator lists:",
                    answer: "industrial.",
                    options: ["industrial.","economic","environmental.","social.","institutional"]
                }
                ,
                {
                    numb: 131,
                    question: "What is the indicator of Emissions of greenhouse gases?",
                    answer: "Trend in emissions and distance to 2008-2012 Kyoto target.",
                    options: ["Trend in emissions and distance to 2008-2012 Kyoto target.","Annual tree fellings.","Total material requirement.","Water exploitation index.","Land take and fragmentation of large habitats."]
                }
                ,
                {
                    numb: 132,
                    question: "What is the indicator of Forest resources?",
                    answer: "Annual tree fellings.",
                    options: ["Annual tree fellings.","Total material requirement.","Water exploitation index.","Land take and fragmentation of large habitats.","Trend in emissions and distance to 2008-2012 Kyoto target."]
                }
                ,
                {
                    numb: 133,
                    question: "What is the indicator of Material consumption?",
                    answer: "Total material requirement.",
                    options: ["Total material requirement.","Water exploitation index.","Land take and fragmentation of large habitats.","Trend in emissions and distance to 2008-2012 Kyoto target.","Annual tree fellings."]
                }
                ,
                {
                    numb: 134,
                    question: "What is the indicator of Water use?",
                    answer: "Water exploitation index.",
                    options: ["Water exploitation index.","Land take and fragmentation of large habitats.","Trend in emissions and distance to 2008-2012 Kyoto target.","Annual tree fellings.","Total material requirement."]
                }
                ,
                {
                    numb: 135,
                    question: "What is the indicator of Land resources?",
                    answer: "Land take and fragmentation of large habitats.",
                    options: ["Land take and fragmentation of large habitats.","Trend in emissions and distance to 2008-2012 Kyoto target.","Annual tree fellings.","Total material requirement.","Water exploitation index."]
                }
                ,
                {
                    numb: 136,
                    question: "What doesn\u2019t include in the sources of Energy Sector?",
                    answer: "Human",
                    options: ["Human","Biomass.","Sunlight","Wind","Oil"]
                }
                ,
                {
                    numb: 137,
                    question: "What doesn\u2019t include in the currencies of Energy Sector?",
                    answer: "Water",
                    options: ["Water","Gasoilne.","Methanol","Natural gas.","Hydrogen."]
                }
                ,
                {
                    numb: 138,
                    question: "A sustainable energy system mimicking nature's approach to energy, therefore, should also be centred on this relationship between some energy. What doesn\u2019t include in it?",
                    answer: "sulfuric acid.",
                    options: ["sulfuric acid.","solar energy.","hydrogen.","oxygen.","carbon."]
                }
                ,
                {
                    numb: 139,
                    question: "The term \"industrial ecology\":",
                    answer: "reflects the concept of a network of interacting industrial processes that utilize each other's material and energy wastes and byproducts.",
                    options: ["reflects the concept of a network of interacting industrial processes that utilize each other's material and energy wastes and byproducts.","were defined as systems in which the fluxes to and from the system are coherent with nature's fluxes and do not perturb nature's equilibria","engineered by homo technicus to intercept sunlight could provide electric or thermal energy services.","seek to provide all businesses (regardless of size and industry) with the means to develop systematic approaches to improving environmental performance.","\u0456s vital for effective conservation management, as it helps steer projects towards implementing management interventions (activities) in such a way to successfully achieve long-term conservation goals."]
                }
                ,
                {
                    numb: 140,
                    question: "Alternatively, solar energy technologies.",
                    answer: "engineered by homo technicus to intercept sunlight could provide electric or thermal energy services.",
                    options: ["engineered by homo technicus to intercept sunlight could provide electric or thermal energy services.","reflects the concept of a network of interacting industrial processes that utilize each other's material and energy wastes and byproducts.","were defined as systems in which the fluxes to and from the system are coherent with nature's fluxes and do not perturb nature's equilibria.","seek to provide all businesses (regardless of size and industry) with the means to develop systematic approaches to improving environmental performance.","\u0456s vital for effective conservation management, as it helps steer projects towards implementing management interventions (activities) in such a way to successfully achieve long-term conservation goals."]
                }
                ,
                {
                    numb: 141,
                    question: "In the deep future energy system conversion technologies complies with:",
                    answer: "zero emission.",
                    options: ["zero emission.","hydrogen and electricity.","non-fossil and sustainable, based on nuclear and solar energy.","sustain the needs of a growing world population, but better.","predominantly grid dependent."]
                }
                ,
                {
                    numb: 142,
                    question: "The power of moving water:",
                    answer: "or hydropower, is a clean and efficient means of generating electricity.",
                    options: ["or hydropower, is a clean and efficient means of generating electricity.","is being harnessed by modern windmills with lighter, stronger blades.","or energy from the Sun, is a free, abundant, and nonpolluting source of energy.","is the natural heat generated in the interior of Earth and released from volcanoes and hot springs or from geysers that shoot out heated water and steam.","is a potential source of fuel for automobiles, as well as a potential source of energy for heating buildings and generating electricity."]
                }
                ,
                {
                    numb: 143,
                    question: "Wind power:",
                    answer: "is being harnessed by modern windmills with lighter, stronger blades.",
                    options: ["is being harnessed by modern windmills with lighter, stronger blades.","or energy from the Sun, is a free, abundant, and nonpolluting source of energy.","is the natural heat generated in the interior of Earth and released from volcanoes and hot springs or from geysers that shoot out heated water and steam.","is a potential source of fuel for automobiles, as well as a potential source of energy for heating buildings and generating electricity.","or hydropower, is a clean and efficient means of generating electricity."]
                }
                ,
                {
                    numb: 144,
                    question: "Solar power:",
                    answer: "or energy from the Sun, is a free, abundant, and nonpolluting source of energy.",
                    options: ["or energy from the Sun, is a free, abundant, and nonpolluting source of energy.","is the natural heat generated in the interior of Earth and released from volcanoes and hot springs or from geysers that shoot out heated water and steam.","is a potential source of fuel for automobiles, as well as a potential source of energy for heating buildings and generating electricity.","or hydropower, is a clean and efficient means of generating electricity.","is being harnessed by modern windmills with lighter, stronger blades."]
                }
                ,
                {
                    numb: 145,
                    question: "Geothermal energy:",
                    answer: "is the natural heat generated in the interior of Earth and released from volcanoes and hot springs or from geysers that shoot out heated water and steam.",
                    options: ["is the natural heat generated in the interior of Earth and released from volcanoes and hot springs or from geysers that shoot out heated water and steam.","is a potential source of fuel for automobiles, as well as a potential source of energy for heating buildings and generating electricity.","or hydropower, is a clean and efficient means of generating electricity.","is being harnessed by modern windmills with lighter, stronger blades.","or energy from the Sun, is a free, abundant, and nonpolluting source of energy."]
                }
                ,
                {
                    numb: 146,
                    question: "Hydrogen gas:",
                    answer: "is a potential source of fuel for automobiles, as well as a potential source of energy for heating buildings and generating electricity.",
                    options: ["is a potential source of fuel for automobiles, as well as a potential source of energy for heating buildings and generating electricity.","or hydropower, is a clean and efficient means of generating electricity.","is being harnessed by modern windmills with lighter, stronger blades.","or energy from the Sun, is a free, abundant, and nonpolluting source of energy.","is the natural heat generated in the interior of Earth and released from volcanoes and hot springs or from geysers that shoot out heated water and steam."]
                }
                ,
                {
                    numb: 147,
                    question: "The RK Environmental Code was adopted in...",
                    answer: "2007.",
                    options: ["2007.","2003","2002","1998","1997"]
                }
                ,
                {
                    numb: 148,
                    question: "National issues:",
                    answer: "Issues related to the plans of intensive development of the Caspian Sea shelf resources, because intensive development of hydrocarbon resources by the Caspian states would increase an impact on the offshore and coastline ecosystems. Given the indefinite status of the sea, cross-border environmental threats become important",
                    options: ["Issues related to the plans of intensive development of the Caspian Sea shelf resources, because intensive development of hydrocarbon resources by the Caspian states would increase an impact on the offshore and coastline ecosystems. Given the indefinite status of the sea, cross-border environmental threats become important","Change of climate due to the \u00abgreenhouse effect\u00bb, which is a global concern, and a significant potential threat to the environment.","Atmospheric air pollution.","The disappearance of certain species of plants and animals results in the loss of genetic diversity and causes changes to ecosystems","Industrial and domestic wastes."]
                }
                ,
                {
                    numb: 149,
                    question: "Global challenges:",
                    answer: "Change of climate due to the \u00abgreenhouse effect\u00bb, which is a global concern, and a significant potential threat to the environment.",
                    options: ["Change of climate due to the \u00abgreenhouse effect\u00bb, which is a global concern, and a significant potential threat to the environment.","Issues related to the plans of intensive development of the Caspian Sea shelf resources, because intensive development of hydrocarbon resources by the Caspian states would increase an impact on the offshore and coastline ecosystems. Given the indefinite status of the sea, cross-border environmental threats become important","Atmospheric air pollution.","The disappearance of certain species of plants and animals results in the loss of genetic diversity and causes changes to ecosystems","Industrial and domestic wastes."]
                }
                ,
                {
                    numb: 150,
                    question: "Local environmental issues:",
                    answer: "Industrial and domestic wastes.",
                    options: ["Industrial and domestic wastes.","Change of climate due to the \u00abgreenhouse effect\u00bb, which is a global concern, and a significant potential threat to the environment.","Issues related to the plans of intensive development of the Caspian Sea shelf resources, because intensive development of hydrocarbon resources by the Caspian states would increase an impact on the offshore and coastline ecosystems. Given the indefinite status of the sea, cross-border environmental threats become important","Atmospheric air pollution.","The disappearance of certain species of plants and animals results in the loss of genetic diversity and causes changes to ecosystems"]
                }
                ,
                {
                    numb: 151,
                    question: "\ufeffScientists tell us that we have 10 years to change the way we live, avert the depletion of natural resources and the catastrophic evolution of the Earth's climate. What is this movie?",
                    answer: "HOME",
                    options: ["HOME","ECOLOGY","ENVIRONMENT","INDUSTRY","EARTH"]
                }
                ,
                {
                    numb: 152,
                    question: "Renewable energies to make its",
                    answer: "operations totally green",
                    options: ["operations totally green","operation totally green","operations total green","operation total green","operations green"]
                }
                ,
                {
                    numb: 153,
                    question: "The company hopes to ______",
                    answer: "exploit solar energy",
                    options: ["exploit solar energy","exploits solar energy","exploit solar energies","exploits solar energies","exploit energy"]
                }
                ,
                {
                    numb: 154,
                    question: "Google's Director of Energy ______",
                    answer: "and Sustainability",
                    options: ["and Sustainability","and Sustain SAbility","and Sustain A Bill And Tea","and Sustains SAbility","and Sustainabilities"]
                }
                ,
                {
                    numb: 155,
                    question: "invested over a billion dollars in 15 projects that ______",
                    answer: "have the capacity",
                    options: ["have the capacity","have the audacity","have the rapacity","have the minacity","have the mapacity"]
                }
                ,
                {
                    numb: 156,
                    question: "investing in\u2026renewable power plants\u2026all ______",
                    answer: "make business sense",
                    options: ["make business sense","makes business senses","makes business sense","make business senses","make businesses senses"]
                }
                ,
                {
                    numb: 157,
                    question: "Google still has a long way to go before all of its ______",
                    answer: "operations are fuelled",
                    options: ["operations are fuelled","operations are fuels","operations are fuelling","operations are fuel","operations have fuelled"]
                }
                ,
                {
                    numb: 158,
                    question: "Google's power requirements are ______",
                    answer: "sourced from renewables",
                    options: ["sourced from renewables","sauced from renewables","source from renewables","sources from renewables","is sourcing from renewables"]
                }
                ,
                {
                    numb: 159,
                    question: "not the least of which is operating ______",
                    answer: "in many jurisdictions",
                    options: ["in many jurisdictions","in many juries dictions","in many juries diction","in many jurisdiction","in many jurisdictioning"]
                }
                ,
                {
                    numb: 160,
                    question: "At Google we invest ______ energy projects",
                    answer: "in innovative renewable",
                    options: ["in innovative renewable","in an innovative renewable","in innovative renewables","in innovatively renewable","in an innovatively renewable"]
                }
                ,
                {
                    numb: 161,
                    question: "the potential to transform the ______",
                    answer: "energy landscape",
                    options: ["energy landscape","energy landscapes","energy land scrape","energy land scope","energy land score"]
                }
                ,
                {
                    numb: 162,
                    question: "<b>Scan the report and answer the question. What is the main cause of air pollution?<\/b><br>Air pollution is a major problem all over the world today. Probably the single biggest contributor to the problem is the motor vehicle. However, there are many other man-made sources, such as industrial factories, power stations, mining, building, and the burning of fossil fuels and wood in homes around the world. There are natural sources of air pollution too; volcanoes and forest fires produce a lot of pollutants.",
                    answer: "motor vehicle",
                    options: ["motor vehicle","power stations","factories","mining\/building","buring \u2013 fossil fuels\/wood"]
                }
                ,
                {
                    numb: 163,
                    question: "Scan the report and answer the question. What are two natural sources of air pollution? Air pollution is a major problem all over the world today. Probably the single biggest contributor to the problem is the motor vehicle. However, there are many other man-made sources, such as industrial factories, power stations, mining, building, and the burning of fossil fuels and wood in homes around the world. There are natural sources of air pollution too; volcanoes and forest fires produce a lot of pollutants.",
                    answer: "volcanoes and forest fires",
                    options: ["volcanoes and forest fires","power stations","factories","mining\/building","buring \u2013 fossil fuels\/wood"]
                }
                ,
                {
                    numb: 164,
                    question: "Scan the report and answer the question. Where was the first study done? In fact, air pollution may be a much greater danger to our health than scientists believed before. A 20-year study of residents of a Cairo suburb shows that the tiny particles in polluted air could lead to three times as many long-term health problems as was previously thought. Other studies show a similar link between traffic pollution and ill health. A second group of researchers in Ottawa, Canada, reported that children living near busy roads were more likely to develop asthma",
                    answer: "Cairo",
                    options: ["Cairo","Ottawa","Mexico City","Moscow","Beijing"]
                }
                ,
                {
                    numb: 165,
                    question: "Scan the report and answer the question. Where was the second study done? In fact, air pollution may be a much greater danger to our health than scientists believed before. A 20-year study of residents of a Cairo suburb shows that the tiny particles in polluted air could lead to three times as many long-term health problems as was previously thought. Other studies show a similar link between traffic pollution and ill health. A second group of researchers in Ottawa, Canada, reported that children living near busy roads were more likely to develop asthma.",
                    answer: "Ottawa",
                    options: ["Ottawa","Cairo","Mexico City","Moscow","Beijing"]
                }
                ,
                {
                    numb: 166,
                    question: "Scan the report and answer the question. What health problems did the first study look at? A 20-year study of residents of a Cairo suburb shows that the tiny particles in polluted air could lead to three times as many long-term health problems as was previously thought. They found that as the number of tiny particles, those less than 2.5 microns in diameter, increased, so did the risk of dying from health problems such as heart attacks and lung cancer. Other studies show a similar link between traffic pollution and ill health. A second group of researchers in Ottawa, Canada, reported that children living near busy roads were more likely to develop asthma.",
                    answer: "heart attacks and lung cancer",
                    options: ["heart attacks and lung cancer","asthma","heart attacks","lung cancer","blood diseases"]
                }
                ,
                {
                    numb: 167,
                    question: "Scan the report and answer the question. What health problems did the first study look at? A 20-year study of residents of a Cairo suburb shows that the tiny particles in polluted air could lead to three times as many long-term health problems as was previously thought. They found that as the number of tiny particles, those less than 2.5 microns in diameter, increased, so did the risk of dying from health problems such as heart attacks and lung cancer. Other studies show a similar link between traffic pollution and ill health. A second group of researchers in Ottawa, Canada, reported that children living near busy roads were more likely to develop asthma.",
                    answer: "asthma",
                    options: ["asthma","heart attacks and lung cancer","heart attacks","lung cancer","blood diseases"]
                }
                ,
                {
                    numb: 168,
                    question: "What kind of this e-mail? To whom this message was sent? \u201cHi, Kim! How are you? It was good to talk yesterday. I\u2019m finalizing the details of management meeting. Thank you for your part, no changes needed. Please email me in case of any issues. Regards, Andreas\u201d",
                    answer: "You know each other well",
                    options: ["You know each other well","You know each other","You don't know each other","You are familiar, but you don't communicate with him","Your boss"]
                }
                ,
                {
                    numb: 169,
                    question: "What kind of this e-mail? To whom this message was sent? \u201cDear Mrs. Gonzales! It was nice to talk to you by phone yesterday. I would like to invite you to visit us on Monday to finalize the details of upcoming management meeting. Hope you can come. Yours sincerely, Andreas Schlutt\u201d",
                    answer: "You know each other",
                    options: ["You know each other","You know each other well","You don't know each other","You are familiar, but you don't communicate with him","Your boss"]
                }
                ,
                {
                    numb: 170,
                    question: "What kind of this e-mail? To whom this message was sent? \u201cDear Sir\/Madam! We would like to invite you to annual meeting dedicated to the environmental protection on Monday, May 31 at 11:00. Please find the detailed information in attached. Yours sincerely, Andreas Schlutt, Senior Specialist\u201d",
                    answer: "You don't know each other",
                    options: ["You don't know each other","You know each other","You know each other well","You are familiar, but you don't communicate with him","Your boss"]
                }
                ,
                {
                    numb: 171,
                    question: "What kind of this e-mail? \u201dHi, Bill! Just a quick note to say many thanks for sorting out the problems with the delivery. We really appreciate everything you have done! All the best, Tina\u201d",
                    answer: "Appreciation",
                    options: ["Appreciation","Responding to thanks","Congratulation","Personal announcement","Saying goodbye"]
                }
                ,
                {
                    numb: 172,
                    question: "What kind of this e-mail? \u201dTina, Glad to hear that everything went well! Very happy to help you. Bill\u201d",
                    answer: "Responding to thanks",
                    options: ["Responding to thanks","Appreciation","Congratulation","Personal announcement","Saying goodbye"]
                }
                ,
                {
                    numb: 173,
                    question: "What kind of this e-mail? \u201dDear Flora! Many congratulations on your promotion! But we\u2019ll miss your visits \u2013 stay in touch. With best regards, Tim\u201d",
                    answer: "Congratulation",
                    options: ["Congratulation","Responding to thanks","Appreciation","Personal announcement","Saying goodbye"]
                }
                ,
                {
                    numb: 174,
                    question: "What kind of this e-mail? \u201dDear friends! This is to let you know that I will be leaving our Company at the end of the month. After a very enjoyable career in USA I\u2019ve decided to move to Brazil. Please come and visit me if you are visiting Rio. With very best wishes, Mario\u201d",
                    answer: "Personal announcement",
                    options: ["Personal announcement","Saying goodbye","Responding to thanks","Appreciation","Congratulation"]
                }
                ,
                {
                    numb: 175,
                    question: "What kind of this e-mail? \u201dDear Mario! I was very sorry to hear that you are leaving the Company. It has been a pleasure working with you and I wish you very success in the future! Alex\u201d",
                    answer: "Saying goodbye",
                    options: ["Saying goodbye","Responding to thanks","Appreciation","Congratulation","Personal announcement"]
                }
                ,
                {
                    numb: 176,
                    question: "What kind of this e-mail? \u201dAlex! I\u2019m pleased to tell you that I have just received the results of the survey and they are very good! I thought you\u2019d like to know immediately. Lena\u201d",
                    answer: "Good news",
                    options: ["Good news","Responding to thanks","Appreciation","Congratulation","Personal announcement"]
                }
                ,
                {
                    numb: 177,
                    question: "What kind of this e-mail? \u201dWell done, Lena! You\u2019ve done a great job, thank you! Alex\u201d",
                    answer: "Replying to good news",
                    options: ["Replying to good news","Responding to thanks","Appreciation","Congratulation","Personal announcement"]
                }
                ,
                {
                    numb: 178,
                    question: "What kind of this e-mail? \u201dDear Jeff! I was really sorry to hear that you are not well. Take care and get sure you take plenty of rest. Olga\u201d",
                    answer: "Replying to bad news",
                    options: ["Replying to bad news","Replying to good news","Appreciation","Responding to thanks","Congratulation"]
                }
                ,
                {
                    numb: 179,
                    question: "What kind of this e-mail? \u201dDear Hanna! Have you remembered that Mary is retiring in June? We\u2019d like to organize a leaving party for her. I hope you can make it. Regards, Dima\u201d",
                    answer: "Reminder",
                    options: ["Reminder","Replying to good news","Appreciation","Responding to thanks","Congratulation"]
                }
                ,
                {
                    numb: 180,
                    question: "What kind of this e-mail? \u201dDear Hanna! Have you remembered that Mary is retiring in June? We\u2019d like to organize a leaving party for her. I hope you can make it. Regards, Dima\u201d",
                    answer: "Reply to a reminder",
                    options: ["Reply to a reminder","Reminder","Appreciation","Responding to thanks","Congratulation"]
                }
                ,
                {
                    numb: 181,
                    question: "What kind of this e-mail? \u201dDear Mr. Ivanov! We were interested to hear that you will be in Japan for International Conference and we would be very pleased if you could visit our company during your stay in Tokyo. Please let us know your availability and we will arrange a tour of our factory. Yours sincerely, Mr. Taro Sato\u201d",
                    answer: "Invitation",
                    options: ["Invitation","Reminder","Appreciation","Responding to thanks","Congratulation"]
                }
                ,
                {
                    numb: 182,
                    question: "What kind of this e-mail? \u201dDear Mr. Sato! Thank you for the invitation to visit your company! I would be very interested in seeing your factory and I will be available on 6th of May. I look forward to your confirmation. Yours sincerely, Mr. Ivanov Mikhail\u201d",
                    answer: "Replying to an invitation",
                    options: ["Replying to an invitation","Invitation","Appreciation","Responding to thanks","Congratulation"]
                }
                ,
                {
                    numb: 183,
                    question: "What kind of this e-mail? \u201dHi John! I confirm your visit to us on May 31 at 10:00. Just come to reception and ask for me. If you need to contact me please call on my mobile (+7-111-98-00). See you on Friday! Regards, Kevin\u201d",
                    answer: "Confirmation",
                    options: ["Confirmation","Responding to thanks","Congratulation","Replying to an invitation","Invitation"]
                }
                ,
                {
                    numb: 184,
                    question: "What kind of this e-mail? \u201dDear Miss Smith! I\u2019m pleased you are able to visit us on 21th. I\u2019m attaching a map with directions to our factory. I have reserved a car park space for you. Regards, Inna Sergeeva\u201d",
                    answer: "Sending directions",
                    options: ["Sending directions","Invitation","Confirmation","Responding to thanks","Congratulation"]
                }
                ,
                {
                    numb: 185,
                    question: "What kind of this e-mail? \u201dDear Miss Smith! I\u2019m just finalising arrangements for your visit. Do you know when you are planning to arrive yet? Best regards, Inna Sergeeva\u201d",
                    answer: "Chasing up information",
                    options: ["Chasing up information","Invitation","Confirmation","Responding to thanks","Congratulation"]
                }
                ,
                {
                    numb: 186,
                    question: "What kind of this e-mail? \u201dHelena, I\u2019ve put together the following itinerary. Can you let me know what do you think about it? (Flight details, transfer arrangement, hotel booking confirmation, contact phones, etc.) All the best, Michele\u201d",
                    answer: "Arranging an itinerary",
                    options: ["Arranging an itinerary","Invitation","Confirmation","Responding to thanks","Congratulation"]
                }
                ,
                {
                    numb: 187,
                    question: "What kind of this e-mail? \u201dIgor, I\u2019m booking Elena\u2019s flight today. Do you want to travel with her? It will be LH1332 leaving at 07:30. Shall I reserve you a seat near Elena? Michele\u201d",
                    answer: "Making a booking",
                    options: ["Making a booking","Congratulation","Arranging an itinerary","Invitation","Confirmation"]
                }
                ,
                {
                    numb: 188,
                    question: "What kind of this e-mail? \u201d Dear Mr. DeVorsney! I\u2019m writing to confirm a reservation made by phone this morning for 2 single rooms in Savoy hotel on May, 26. Could you please email us a booking confirmation? Thank you! Inna Sergeeva\u201d",
                    answer: "Confirming a reservation",
                    options: ["Confirming a reservation","Congratulation","Arranging an itinerary","Invitation","Confirmation"]
                }
                ,
                {
                    numb: 189,
                    question: "_______ is based on the \u201cprecautionary principle\u201d focusing on the management and control of pollution at the source",
                    answer: "The environmental policy in the European Union (EU)",
                    options: ["The environmental policy in the European Union (EU)","EC Environmental Liability Directive (EC ELD)","General (third party) liability insurance (GTPL)","Environmental (impairment) liability insurance (EIL insurance)","United Nations Environment Programme (UNEP)"]
                }
                ,
                {
                    numb: 190,
                    question: "_______ which came into effect in 2010 has been implemented in the EU regarding the prevention and remediation of environmental damage.",
                    answer: "EC Environmental Liability Directive (EC ELD)",
                    options: ["EC Environmental Liability Directive (EC ELD)","The environmental policy in the European Union (EU)","General (third party) liability insurance (GTPL)","Environmental (impairment) liability insurance (EIL insurance)","United Nations Environment Programme (UNEP)"]
                }
                ,
                {
                    numb: 191,
                    question: "_______ covers the insured\u2019s civil liability arising out of the business activity or property ownership, to compensate third parties for bodily injury or damage to individual property, and in some cases for partial economic\/financial losses caused by environmental impairment.",
                    answer: "General (third party) liability insurance (GTPL)",
                    options: ["General (third party) liability insurance (GTPL)","The environmental policy in the European Union (EU)","EC Environmental Liability Directive (EC ELD)","Environmental (impairment) liability insurance (EIL insurance)","United Nations Environment Programme (UNEP)"]
                }
                ,
                {
                    numb: 192,
                    question: "_______ as a comprehensive risk transfer solution is offered by a small number of specialised insurance companies or environmental liability reinsurance pools such as those found in France, Spain and Italy.",
                    answer: "Environmental (impairment) liability insurance (EIL insurance)",
                    options: ["Environmental (impairment) liability insurance (EIL insurance)","General (third party) liability insurance (GTPL)","The environmental policy in the European Union (EU)","EC Environmental Liability Directive (EC ELD)","United Nations Environment Programme (UNEP)"]
                }
                ,
                {
                    numb: 193,
                    question: "_______ involves extracting basic information from the text in the range of 70-75%.",
                    answer: "Introductory reading",
                    options: ["Introductory reading","Search reading","Learning reading","Thinking reading","Working reading"]
                }
                ,
                {
                    numb: 194,
                    question: "_______ is associated with finding in the text specific information necessary for the reader, definitions, conclusions, factual data, information of a country-specific nature",
                    answer: "Search reading",
                    options: ["Search reading","Introductory reading","Learning reading","Thinking reading","Working reading"]
                }
                ,
                {
                    numb: 195,
                    question: "_______ involves achieving a detailed \/ complete (100%) and accurate level of understanding of the main and secondary facts contained in the text",
                    answer: "Learning reading",
                    options: ["Learning reading","Search reading","Introductory reading","Thinking reading","Working reading"]
                }
                ,
                {
                    numb: 196,
                    question: "A British scientific journal devoted to the problems of ecology with a special consideration of plant ecology. The world's oldest international peer-reviewed environmental journal. It was founded in 1913",
                    answer: "Journal of Ecology",
                    options: ["Journal of Ecology","Journal of Applied Ecology","Journal of Animal Ecology","Functional Ecology","Ecological Applications"]
                }
                ,
                {
                    numb: 197,
                    question: "British scientific journal devoted to the problems of applied ecology with a special consideration of the problems of management of biological resources. It was founded in 1964",
                    answer: "Journal of Applied Ecology",
                    options: ["Journal of Applied Ecology","Journal of Ecology","Journal of Animal Ecology","Functional Ecology","Ecological Applications"]
                }
                ,
                {
                    numb: 198,
                    question: "A British scientific journal devoted to environmental issues with a special focus on animal ecology. It was founded in 1932.",
                    answer: "Journal of Animal Ecology",
                    options: ["Journal of Animal Ecology","Journal of Applied Ecology","Journal of Ecology","Functional Ecology","Ecological Applications"]
                }
                ,
                {
                    numb: 199,
                    question: "A British scientific journal devoted to environmental problems with a special focus on experimental ecology. Founded in 1987.",
                    answer: "Functional Ecology",
                    options: ["Functional Ecology","Journal of Animal Ecology","Journal of Applied Ecology","Journal of Ecology","Ecological Applications"]
                }
                ,
                {
                    numb: 200,
                    question: "The scientific peer-reviewed journal publishes practical applications, documents related to the environmental management system, and the implementation of research results in scientific practice.",
                    answer: "Ecological Applications",
                    options: ["Ecological Applications","Functional Ecology","Journal of Animal Ecology","Journal of Applied Ecology","Journal of Ecology"]
                }
                ,
                {
                    numb: 201,
                    question: "\ufeffThe scientific peer-reviewed journal publishes review articles on all aspects of ecology and related disciplines, news, debates, editorial columns, and a letters section.",
                    answer: "Frontiers in Ecology and the Environment",
                    options: ["Frontiers in Ecology and the Environment","Functional Ecology","Journal of Animal Ecology","Journal of Applied Ecology","Journal of Ecology"]
                }
                ,
                {
                    numb: 202,
                    question: "The scientific peer-reviewed journal publishes articles on all subsections of ecology, as well as interdisciplinary research related to ecology.",
                    answer: "Ecosphere",
                    options: ["Ecosphere","Functional Ecology","Journal of Animal Ecology","Journal of Applied Ecology","Journal of Ecology"]
                }
                ,
                {
                    numb: 203,
                    question: "A scientific journal that publishes research and analytical articles on all branches of ecology. It was founded in 1920.",
                    answer: "Ecology",
                    options: ["Ecology","Functional Ecology","Journal of Animal Ecology","Journal of Applied Ecology","Journal of Ecology"]
                }
                ,
                {
                    numb: 204,
                    question: "One of the oldest and most authoritative general scientific journals. It publishes research on a wide range of issues, mainly natural science topics.",
                    answer: "Nature",
                    options: ["Nature","Functional Ecology","Journal of Animal Ecology","Journal of Applied Ecology","Journal of Ecology"]
                }
                ,
                {
                    numb: 205,
                    question: "The international open access scientific journal publishes original peer-reviewed documents in the field of ecology (research articles, reviews, environmental guidelines).",
                    answer: "European Journal of Ecology",
                    options: ["European Journal of Ecology","Journal of Applied Ecology","Journal of Ecology","Nature","Functional Ecology"]
                }
                ,
                {
                    numb: 206,
                    question: "An international scientific journal published by the Association for the Ecology of Fires.",
                    answer: "Fire Ecology",
                    options: ["Fire Ecology","Journal of Applied Ecology","Journal of Ecology","Nature","Functional Ecology"]
                }
                ,
                {
                    numb: 207,
                    question: "One of the world's peer-reviewed journals in the field of ecology and the evolution of behavior, published since 1867. The journal focuses on innovative theoretical synthesis.",
                    answer: "The American Naturalist",
                    options: ["The American Naturalist","Journal of Applied Ecology","Journal of Ecology","Nature","Functional Ecology"]
                }
                ,
                {
                    numb: 208,
                    question: "A monthly peer-reviewed scientific journal published by Wiley-Blackwell and the French National Center for Scientific Research. The journal publishes articles on all aspects of ecology.",
                    answer: "Ecology Letters",
                    options: ["Ecology Letters","Journal of Applied Ecology","Journal of Ecology","Nature","Functional Ecology"]
                }
                ,
                {
                    numb: 209,
                    question: "The scientific journal covers the results of modern research and discoveries in the field of molecular genetics.",
                    answer: "Molecular ecology",
                    options: ["Molecular ecology","Journal of Applied Ecology","Journal of Ecology","Nature","Functional Ecology"]
                }
                ,
                {
                    numb: 210,
                    question: "An international open access scientific journal that publishes peer-reviewed peer-reviewed articles on all aspects of sustainable development and climate change policy",
                    answer: "American Journal of Climate Change (AJCC)",
                    options: ["American Journal of Climate Change (AJCC)","Journal of Applied Ecology","Journal of Ecology","Nature","Functional Ecology"]
                }
                ,
                {
                    numb: 211,
                    question: "An international open access scientific journal that publishes peer-reviewed articles in the field of geosciences and environmental protection.",
                    answer: "Journal of Geosciences and Environment Protection (GEP)",
                    options: ["Journal of Geosciences and Environment Protection (GEP)","Nature","Functional Ecology","American Journal of Climate Change (AJCC)","Journal of Applied Ecology"]
                }
                ,
                {
                    numb: 212,
                    question: "International scientific journal of open access, which publishes materials on research on water resources, problems of water quality and protection",
                    answer: "Journal of Water Resource and Protection",
                    options: ["Journal of Water Resource and Protection","Nature","Functional Ecology","American Journal of Climate Change (AJCC)","Journal of Applied Ecology"]
                }
                ,
                {
                    numb: 213,
                    question: "An international open-access electronic scientific journal that publishes original scientific research, reviews, and letters on environmental issues in order to provide the most complete and reliable information on current developments in this field.",
                    answer: "Open Journal of Ecology",
                    options: ["Open Journal of Ecology","Nature","Functional Ecology","American Journal of Climate Change (AJCC)","Journal of Applied Ecology"]
                }
                ,
                {
                    numb: 214,
                    question: "The International Open Access Scientific Journal publishes original articles and reports, literature reviews, and short reports on various aspects of ecology and environmental protection.",
                    answer: "Journal of Environmental Protection",
                    options: ["Journal of Environmental Protection","Nature","Functional Ecology","American Journal of Climate Change (AJCC)","Journal of Applied Ecology"]
                }
                ,
                {
                    numb: 215,
                    question: "Human race have only one earth, one in a global village. The Earth is a whole, is a general eco-system, a local environment will be different degrees, directly or indirectly in other parts of the inverted state of the environment, endangering other countries and peoples",
                    answer: "The Need For International Cooperation In Environmental Protection",
                    options: ["The Need For International Cooperation In Environmental Protection","The legal basis for international cooperation, international cooperation, the achievements themselves","The Principles Of International Cooperation In Environmental Protection","The contents of the environmental protection, international cooperation","The goal of international cooperation, the achievements themselves"]
                }
                ,
                {
                    numb: 216,
                    question: "\"Stockholm Declaration on the Human Environment.\"",
                    answer: "The legal basis for international cooperation, international cooperation, the achievements themselves",
                    options: ["The legal basis for international cooperation, international cooperation, the achievements themselves","The Need For International Cooperation In Environmental Protection","The Principles Of International Cooperation In Environmental Protection","The contents of the environmental protection, international cooperation","The goal of international cooperation, the achievements themselves"]
                }
                ,
                {
                    numb: 217,
                    question: "Respect for the principle of national sovereignty. Respect for the principle of national sovereignty is the basic principles of national law in 1972's \"Stockholm Declaration on the Human Environment,\" also expressed this principle",
                    answer: "The Principles Of International Cooperation In Environmental Protection",
                    options: ["The Principles Of International Cooperation In Environmental Protection","The contents of the environmental protection, international cooperation","The goal of international cooperation, the achievements themselves","The legal basis for international cooperation, international cooperation, the achievements themselves","The Need For International Cooperation In Environmental Protection"]
                }
                ,
                {
                    numb: 218,
                    question: "The establishment of a global environmental systems, such as monitoring systems and query systems. Now the international community established the Global Environment Monitoring System, the international environmental information inquiry system and toxic chemicals in the International Register",
                    answer: "The contents of the environmental protection, international cooperation",
                    options: ["The contents of the environmental protection, international cooperation","The goal of international cooperation, the achievements themselves","The legal basis for international cooperation, international cooperation, the achievements themselves","The Need For International Cooperation In Environmental Protection","The Principles Of International Cooperation In Environmental Protection"]
                }
                ,
                {
                    numb: 219,
                    question: "Find the English equivalent of the word \u00ab\u0420\u0435\u0437\u044e\u043c\u0435\u00bb",
                    answer: "Curriculum vitae",
                    options: ["Curriculum vitae","Brief","Resume","Summary","Abstract"]
                }
                ,
                {
                    numb: 220,
                    question: "International cooperation in environmental protection, the first:",
                    answer: "The Need For International Cooperation In Environmental Protection",
                    options: ["The Need For International Cooperation In Environmental Protection","The legal basis for international cooperation, international cooperation, the achievements themselves","The Principles Of International Cooperation In Environmental Protection","The contents of the environmental protection, international cooperation","International cooperation in environmental protection official organization"]
                }
                ,
                {
                    numb: 221,
                    question: "International cooperation in environmental protection, the second:",
                    answer: "The legal basis for international cooperation, international cooperation, the achievements themselves",
                    options: ["The legal basis for international cooperation, international cooperation, the achievements themselves","The Need For International Cooperation In Environmental Protection","The Principles Of International Cooperation In Environmental Protection","The contents of the environmental protection, international cooperation","International cooperation in environmental protection official organization"]
                }
                ,
                {
                    numb: 222,
                    question: "International cooperation in environmental protection, the third:",
                    answer: "The Principles Of International Cooperation In Environmental Protection",
                    options: ["The Principles Of International Cooperation In Environmental Protection","The legal basis for international cooperation, international cooperation, the achievements themselves","The Need For International Cooperation In Environmental Protection","The contents of the environmental protection, international cooperation","International cooperation in environmental protection official organization"]
                }
                ,
                {
                    numb: 223,
                    question: "International cooperation in environmental protection, the third:",
                    answer: "The contents of the environmental protection, international cooperation",
                    options: ["The contents of the environmental protection, international cooperation","The Principles Of International Cooperation In Environmental Protection","The legal basis for international cooperation, international cooperation, the achievements themselves","The Need For International Cooperation In Environmental Protection","International cooperation in environmental protection official organization"]
                }
                ,
                {
                    numb: 224,
                    question: "The Kazakhstan area that has Aral sea environmental issue (ecological problem)",
                    answer: "Kyzylorda province",
                    options: ["Kyzylorda province","Atyrau province","Semey province","Akmola province","Karaganda province"]
                }
                ,
                {
                    numb: 225,
                    question: "North Kazakhstan area is the province without an environmental issue (ecological problem)",
                    answer: "Akmola province",
                    options: ["Akmola province","Kyzylorda province","Atyrau province","Semey province","Karaganda province"]
                }
                ,
                {
                    numb: 226,
                    question: "The province where is lived 659 074 people has State Nature Reserve \"Akzhaiyk\"",
                    answer: "Atyrau province",
                    options: ["Atyrau province","Akmola province","Kyzylorda province","Semey province","Karaganda province"]
                }
                ,
                {
                    numb: 227,
                    question: "The province where is lived 350 201 people has West Altay State Nature Reserve, The State Forest Natural Reserve \" Semey ormany\"",
                    answer: "Semey province",
                    options: ["Semey province","Karaganda province","Atyrau province","Akmola province","Kyzylorda province"]
                }
                ,
                {
                    numb: 228,
                    question: "The province with 1 378 533 people has the coal mining, machine building, metal and food industries",
                    answer: "Karaganda province",
                    options: ["Karaganda province","Atyrau province","Akmola province","Kyzylorda province","Semey province"]
                }
                ,
                {
                    numb: 229,
                    question: "Kyzylorda province has:",
                    answer: "Aral sea environmental issue (ecological problem)",
                    options: ["Aral sea environmental issue (ecological problem)","a coal basin environmental issue (ecological problem)","Caspian sea, Azgir nuclear test site with Taysoygan military ground environmental issues (ecological problems)","Semey nuclear test site environmental issue (ecological problem)","without an environmental issue (ecological problem)"]
                }
                ,
                {
                    numb: 230,
                    question: "The province of West Kazakhstan has:",
                    answer: "Caspian sea, Azgir nuclear test site with Taysoygan military ground environmental issues (ecological problems)",
                    options: ["Caspian sea, Azgir nuclear test site with Taysoygan military ground environmental issues (ecological problems)","Aral sea environmental issue (ecological problem)","a coal basin environmental issue (ecological problem)","Semey nuclear test site environmental issue (ecological problem)","without an environmental issue (ecological problem)"]
                }
                ,
                {
                    numb: 231,
                    question: "North Kazakhstan area is the province:",
                    answer: "without an environmental issue (ecological problem)",
                    options: ["without an environmental issue (ecological problem)","Aral sea environmental issue (ecological problem)","a coal basin environmental issue (ecological problem)","Caspian sea, Azgir nuclear test site with Taysoygan military ground environmental issues (ecological problems)","Semey nuclear test site environmental issue (ecological problem)"]
                }
                ,
                {
                    numb: 232,
                    question: "The province of East Kazakhstan has:",
                    answer: "Semey nuclear test site environmental issue (ecological problem)",
                    options: ["Semey nuclear test site environmental issue (ecological problem)","Aral sea environmental issue (ecological problem)","a coal basin environmental issue (ecological problem)","Caspian sea, Azgir nuclear test site with Taysoygan military ground environmental issues (ecological problems)","without an environmental issue (ecological problem)"]
                }
                ,
                {
                    numb: 233,
                    question: "Which word corresponds to the following scheme: go up \u2191",
                    answer: "increase",
                    options: ["increase","drop","remain steady","fluctuate","fall"]
                }
                ,
                {
                    numb: 234,
                    question: "Which word corresponds to the following scheme: go down \u2193",
                    answer: "drop",
                    options: ["drop","increase","remain steady","fluctuate","grow"]
                }
                ,
                {
                    numb: 235,
                    question: "Which word corresponds to the following scheme: go up and down",
                    answer: "fluctuate",
                    options: ["fluctuate","drop","remain steady","increase","grow"]
                }
                ,
                {
                    numb: 236,
                    question: "Which word corresponds to the following scheme: stay the same \u2192",
                    answer: "remain steady",
                    options: ["remain steady","drop","increase","fluctuate","grow"]
                }
                ,
                {
                    numb: 237,
                    question: "What is it ? (\u0433\u0440\u0430\u0444\u0438\u043a \u0442\u04e9\u0440\u0442\u0431\u04b1\u0440\u044b\u0448\u0442\u044b)",
                    answer: "bar chart",
                    options: ["bar chart","graph","scheme","chart","picture"]
                }
                ,
                {
                    numb: 238,
                    question: "What is it ? (\u0433\u0440\u0430\u0444\u0438\u043a \u049b\u043e\u0441\u044b\u043b\u0493\u0430\u043d \u043d\u04af\u043a\u0442\u0435\u043b\u0435\u0440)",
                    answer: "graph",
                    options: ["graph","bar chart","scheme","chart","picture"]
                }
                ,
                {
                    numb: 239,
                    question: "Find the synonym of the word an increase:",
                    answer: "a rise",
                    options: ["a rise","a decrease","a fluctuate","a stable","a drop"]
                }
                ,
                {
                    numb: 240,
                    question: "Find the synonym of the word rose:",
                    answer: "grew",
                    options: ["grew","decreased","fluctuated","remained","dropped"]
                }
                ,
                {
                    numb: 241,
                    question: "How thick is the ozone layer?",
                    answer: "2-3mm",
                    options: ["2-3mm","10km","2-3 cm","2-3m","10m"]
                }
                ,
                {
                    numb: 242,
                    question: "As a result of human activity pollution is called:",
                    answer: "Anthropogenic",
                    options: ["Anthropogenic","Technical","Natural","Physical","Second"]
                }
                ,
                {
                    numb: 243,
                    question: "Earth's climate-forming atmosphere:",
                    answer: "Troposphere",
                    options: ["Troposphere","Ionosphere","Magnitosphere","Stratosphere","The meosphere"]
                }
                ,
                {
                    numb: 244,
                    question: "The main cause of environmental problems in the Aral Sea:",
                    answer: "Water withdrawal from irrigation water sources",
                    options: ["Water withdrawal from irrigation water sources","Chemical contamination","Radioactive contamination","Natural direct growth","Wastewater contamination"]
                }
                ,
                {
                    numb: 245,
                    question: "Environmental factors are divided into the following categories:",
                    answer: "Biotic, abiotic and anthropogenic",
                    options: ["Biotic, abiotic and anthropogenic","Phytogenic and zoogeneic","Climatic and chemical","anthropogenic and climatic","Ehostogenic and orophagenic."]
                }
                ,
];
showqa();
