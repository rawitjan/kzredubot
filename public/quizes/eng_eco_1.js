
var title = 'ENG ECO 1-50'; 
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
];
showqa();
