
var title = 'ENG ECO 101-150'; 
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
                    question: "\ufeffThermal pollution:",
                    answer: "is a temperature change in natural water bodies caused by human influence, such as use of water as coolant in a power plant.",
                    options: ["is a temperature change in natural water bodies caused by human influence, such as use of water as coolant in a power plant.","which can refer to the presence of overhead power lines, motorway billboards, scarred landforms (as from strip mining), open storage of trash, municipal solid waste or space debris.","by the discharge of wastewater from commercial and industrial waste (intentionally or through spills) into surface waters; discharges of untreated domesticsewage, and chemical contaminants, such as chlorine, from treated sewage; release of waste and contaminants into surface runoff flowing to surface waters","which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar.","activities in atomic physics, such as nuclear power generation and nuclear weapons research, manufacture and deployment."]
                }
                ,
                {
                    numb: 2,
                    question: "Visual pollution:",
                    answer: "which can refer to the presence of overhead power lines, motorway billboards, scarred landforms (as from strip mining), open storage of trash, municipal solid waste or space debris.",
                    options: ["which can refer to the presence of overhead power lines, motorway billboards, scarred landforms (as from strip mining), open storage of trash, municipal solid waste or space debris.","by the discharge of wastewater from commercial and industrial waste (intentionally or through spills) into surface waters; discharges of untreated domesticsewage, and chemical contaminants, such as chlorine, from treated sewage; release of waste and contaminants into surface runoff flowing to surface waters","which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar.","activities in atomic physics, such as nuclear power generation and nuclear weapons research, manufacture and deployment.","is a temperature change in natural water bodies caused by human influence, such as use of water as coolant in a power plant."]
                }
                ,
                {
                    numb: 3,
                    question: "Water pollution:",
                    answer: "by the discharge of wastewater from commercial and industrial waste (intentionally or through spills) into surface waters; discharges of untreated domesticsewage, and chemical contaminants, such as chlorine, from treated sewage; release of waste and contaminants into surface runoff flowing to surface waters",
                    options: ["by the discharge of wastewater from commercial and industrial waste (intentionally or through spills) into surface waters; discharges of untreated domesticsewage, and chemical contaminants, such as chlorine, from treated sewage; release of waste and contaminants into surface runoff flowing to surface waters","which encompasses roadway noise, aircraft noise, industrial noise as well as high-intensity sonar.","activities in atomic physics, such as nuclear power generation and nuclear weapons research, manufacture and deployment.","is a temperature change in natural water bodies caused by human influence, such as use of water as coolant in a power plant.","which can refer to the presence of overhead power lines, motorway billboards, scarred landforms (as from strip mining), open storage of trash, municipal solid waste or space debris."]
                }
                ,
                {
                    numb: 4,
                    question: "Greenhouse Effect.",
                    answer: "is a process by which thermal radiation from a planetary surface, is absorbed by atmospheric greenhouse gases, and is re-radiated in all directions",
                    options: ["is a process by which thermal radiation from a planetary surface, is absorbed by atmospheric greenhouse gases, and is re-radiated in all directions","This is largely due to the effect of halocarbon refrigerants (such as CFC, halons, freons, etc.).","Gases like carbon dioxide, nitrogen oxide, and sulfur dioxide, can react with water to produce corresponding it.","It refers to rainwater running off land, and into water bodies.","In layman's terms, means excessive growth of phytoplankton in a water body."]
                }
                ,
                {
                    numb: 5,
                    question: "Ozone Depletion.",
                    answer: "This is largely due to the effect of halocarbon refrigerants (such as CFC, halons, freons, etc .).",
                    options: ["This is largely due to the effect of halocarbon refrigerants (such as CFC, halons, freons, etc .).","Gases like carbon dioxide, nitrogen oxide, and sulfur dioxide, can react with water to produce corresponding it.","It refers to rainwater running off land, and into water bodies.","In layman's terms, means excessive growth of phytoplankton in a water body.","is a process by which thermal radiation from a planetary surface, is absorbed by atmospheric greenhouse gases, and is re-radiated in all directions."]
                }
                ,
                {
                    numb: 6,
                    question: "Acid Rain.",
                    answer: "Gases like carbon dioxide, nitrogen oxide, and sulfur dioxide, can react with water to produce corresponding it.",
                    options: ["Gases like carbon dioxide, nitrogen oxide, and sulfur dioxide, can react with water to produce corresponding it.","It refers to rainwater running off land, and into water bodies.","In layman's terms, means excessive growth of phytoplankton in a water body.","is a process by which thermal radiation from a planetary surface, is absorbed by atmospheric greenhouse gases, and is re-radiated in all directions.","This is largely due to the effect of halocarbon refrigerants (such as CFC, halons, freons, etc .)."]
                }
                ,
                {
                    numb: 7,
                    question: "Urban Run-off.",
                    answer: "It refers to rainwater running off land, and into water bodies.",
                    options: ["It refers to rainwater running off land, and into water bodies.","In layman's terms, means excessive growth of phytoplankton in a water body.","is a process by which thermal radiation from a planetary surface, is absorbed by atmospheric greenhouse gases, and is re-radiated in all directions.","This is largely due to the effect of halocarbon refrigerants (such as CFC, halons, freons, etc .).","Gases like carbon dioxide, nitrogen oxide, and sulfur dioxide, can react with water to produce corresponding it."]
                }
                ,
                {
                    numb: 8,
                    question: "Eutrophication.",
                    answer: "In layman's terms, means excessive growth of phytoplankton in a water body.",
                    options: ["In layman's terms, means excessive growth of phytoplankton in a water body.","is a process by which thermal radiation from a planetary surface, is absorbed by atmospheric greenhouse gases, and is re-radiated in all directions.","This is largely due to the effect of halocarbon refrigerants (such as CFC, halons, freons, etc .).","Gases like carbon dioxide, nitrogen oxide, and sulfur dioxide, can react with water to produce corresponding it.","It refers to rainwater running off land, and into water bodies."]
                }
                ,
                {
                    numb: 9,
                    question: "Three major issues come under inefficient land use:",
                    answer: "Urban sprawl, habitat fragmentation, habitat destruction.",
                    options: ["Urban sprawl, habitat fragmentation, habitat destruction.","Desertification, land pollution, soil pollution.","The biosphere in the cosmos, the domain of life, and a few words about the noosphere.","Water, land and air.","Producers, consumers and decomposers."]
                }
                ,
                {
                    numb: 10,
                    question: "What problems aren\u2019t emerging on a global scale:",
                    answer: "Pollution of rivers and lakes.",
                    options: ["Pollution of rivers and lakes.","Global Warming or Climate change.","Depletion of the Ozone Layer.","Decline of the tropical forests.","Unequal distribution of wealth both between countries and between different social groups within countries."]
                }
                ,
                {
                    numb: 11,
                    question: "Sustainable Development isn\u2019t:",
                    answer: "the introduction of contaminants into the natural environment that cause adverse change.",
                    options: ["the introduction of contaminants into the natural environment that cause adverse change.","development that meets the needs of the present without compromising the ability of future generations to meet their own needs.","a process for meeting human development goals while maintaining the ability of natural systems to continue to provide the natural resources and ecosystem services upon which the economy and society depend.","the organizing principle for sustaining finite resources necessary to provide for the needs of future generations of life on the planet","a process that envisions a desirable future state for human societies in which living conditions and resource-use continue to meet human needs without undermining the \"integrity, stability and beauty\" of natural biotic systems."]
                }
                ,
                {
                    numb: 12,
                    question: "Sustainability science is the study of the concepts of sustainable development and ______________science.",
                    answer: "environmental.",
                    options: ["environmental.","physical","chemical","physiological.","social"]
                }
                ,
                {
                    numb: 13,
                    question: "Sustainable development has been described in terms of three-dimension model, these are seen as \"_________________\".",
                    answer: "Economic, environmental and social.",
                    options: ["Economic, environmental and social.","Urban sprawl, habitat fragmentation, habitat destruction.","Desertification, land pollution, soil pollution.","The biosphere in the cosmos, the domain of life, and a few words about the noosphere.","Water, land and air."]
                }
                ,
                {
                    numb: 14,
                    question: "The ecological sustainability of human settlements.",
                    answer: "is part of the relationship between humans and their natural, social and built environments.",
                    options: ["is part of the relationship between humans and their natural, social and built environments.","is the organizing principle for sustaining finite resources necessary to provide for the needs of future generations of life on the planet.","is causing the Earth to lose its snow cover; glaciers are melting, the sea-level is rising, and a lot of arctic floral and faunal species are on the verge of extinction.","is the introduction of contaminants into the natural environment that cause adverse change.","is a balanced system, with water stored in many places at any one time."]
                }
                ,
                {
                    numb: 15,
                    question: "is a balanced system, with water stored in many places at any one time.",
                    answer: "natural environment.",
                    options: ["natural environment.","animals.","waters.","plants.","humans."]
                }
                ,
                {
                    numb: 16,
                    question: "Sustainable energy.",
                    answer: "is clean and can be used over a long period of time.",
                    options: ["is clean and can be used over a long period of time.","consists of environmentally-friendly methods of farming that allow the production of crops or livestock without damage to human or natural systems.","is a large contributor to greenhouse gas emissions.","is the introduction of contaminants into the natural environment that cause adverse change.","is a balanced system, with water stored in many places at any one time."]
                }
                ,
                {
                    numb: 17,
                    question: "Transportation.",
                    answer: "is a large contributor to greenhouse gas emissions.",
                    options: ["is a large contributor to greenhouse gas emissions.","consists of environmentally-friendly methods of farming that allow the production of crops or livestock without damage to human or natural systems.","is clean and can be used over a long period of time.","is the introduction of contaminants into the natural environment that cause adverse change.","is a balanced system, with water stored in many places at any one time."]
                }
                ,
                {
                    numb: 18,
                    question: "Inexhaustible renewable resources:",
                    answer: "solar power from the sun.",
                    options: ["solar power from the sun.","forests.","particular species.","fishes.","oil."]
                }
                ,
                {
                    numb: 19,
                    question: "Exhausted renewable resources:",
                    answer: "forests.",
                    options: ["forests.","solar power from the sun.","particular species.","fishes.","oil"]
                }
                ,
                {
                    numb: 20,
                    question: "Renewable resources are renewable only to a point:",
                    answer: "particular species.",
                    options: ["particular species.","forests.","solar power from the sun.","fishes.","oil."]
                }
                ,
                {
                    numb: 21,
                    question: "It is a basic state document established for listing rare and endangered species of wild animals, plants, and fungi, as well as some subspecies and separate populations:",
                    answer: "The Red Data Book.",
                    options: ["The Red Data Book.","The Concept of Environmental Security.","The Concept of Environmental Safety of the Republic of Kazakhstan for 2004-2015.","The Strategy of Political and Economic Development \u00abKazakhstan-2030\u00bb.","The Ecological Code of laws of the RK."]
                }
                ,
                {
                    numb: 22,
                    question: "When was The Red Book established that was produced \"by the International Union for Conservation of Nature\"?",
                    answer: "in 1948.",
                    options: ["in 1948.","in 1963.","in 1978.","in 1998.","in 1993."]
                }
                ,
                {
                    numb: 23,
                    question: "When was The Red Book of Kazakhstan established?",
                    answer: "in 1978.",
                    options: ["in 1978.","in 1948.","in 1963.","in 1998.","in 1993."]
                }
                ,
                {
                    numb: 24,
                    question: "Nature reserves,",
                    answer: "is conferred to protect unique environments inhabited by rare and endangered species of flora and fauna.",
                    options: ["is conferred to protect unique environments inhabited by rare and endangered species of flora and fauna.","is a basic state document established for listing rare and endangered species of wild animals, plants, and fungi, as well as some subspecies and separate populations.","are those that cannot be renewed or replaced once used, they are gone forever.","is a theory related to overpopulation, referring to situations where per capita consumption is so high that even in spite of a moderate population density, sustainability is not achieved.","is vital for effective conservation management, as it helps steer projects towards implementing management interventions (activities) in such a way to successfully achieve long-term conservation goals."]
                }
                ,
                {
                    numb: 25,
                    question: "It is the oldest reserve in Kazakhstan, established originally in 1926 and now possessing UNESCO biosphere reserve status.",
                    answer: "Aksu-Zhabagly nature reserve.",
                    options: ["Aksu-Zhabagly nature reserve.","Almaty nature reserve.","Barsakelmes nature reserve.","Naurzum nature reserve.","Markakol nature reserve."]
                }
                ,
                {
                    numb: 26,
                    question: "It is listed the natural territories which are, according to qualification of UNESCO, a part of a world natural heritage, established in 1968.",
                    answer: "Korgalzhyn nature reserve.",
                    options: ["Korgalzhyn nature reserve.","Ustyurt nature reserve.","West Altai nature reserve.","Alakol nature reserve.","Karatau nature reserve."]
                }
                ,
                {
                    numb: 27,
                    question: "Environmental Management Systems (EMS).",
                    answer: "seek to provide all businesses (regardless of size and industry) with the means to develop systematic approaches to improving environmental performance.",
                    options: ["seek to provide all businesses (regardless of size and industry) with the means to develop systematic approaches to improving environmental performance.","is vital for effective conservation management, as it helps steer projects towards implementing management interventions (activities) in such a way to successfully achieve long-term conservation goals.","is a basic state document established for listing rare and endangered species of wild animals, plants, and fungi, as well as some subspecies and separate populations.","are those that cannot be renewed or replaced once used, they are gone forever.","is a theory related to overpopulation, referring to situations where per capita consumption is so high that even in spite of a moderate population density, sustainability is not achieved."]
                }
                ,
                {
                    numb: 28,
                    question: "Ecological monitoring.",
                    answer: "seek to provide all businesses (regardless of size and industry) with the means to develop systematic approaches to improving environmental performance.",
                    options: ["seek to provide all businesses (regardless of size and industry) with the means to develop systematic approaches to improving environmental performance.","is vital for effective conservation management, as it helps steer projects towards implementing management interventions (activities) in such a way to successfully achieve long-term conservation goals.","is a basic state document established for listing rare and endangered species of wild animals, plants, and fungi, as well as some subspecies and separate populations.","are those that cannot be renewed or replaced once used, they are gone forever.","is a theory related to overpopulation, referring to situations where per capita consumption is so high that even in spite of a moderate population density, sustainability is not achieved."]
                }
                ,
                {
                    numb: 29,
                    question: "It attempt to convey a broader image than the underlying statistics would suggest:",
                    answer: "Indicators.",
                    options: ["Indicators.","Factors.","Resources.","Reserves","Indexes."]
                }
                ,
                {
                    numb: 30,
                    question: "Dimensions of sustainable development that doesn\u2019t include in the indicator lists:",
                    answer: "industrial.",
                    options: ["industrial.","economic","environmental.","social.","institutional"]
                }
                ,
                {
                    numb: 31,
                    question: "What is the indicator of Emissions of greenhouse gases?",
                    answer: "Trend in emissions and distance to 2008-2012 Kyoto target.",
                    options: ["Trend in emissions and distance to 2008-2012 Kyoto target.","Annual tree fellings.","Total material requirement.","Water exploitation index.","Land take and fragmentation of large habitats."]
                }
                ,
                {
                    numb: 32,
                    question: "What is the indicator of Forest resources?",
                    answer: "Annual tree fellings.",
                    options: ["Annual tree fellings.","Total material requirement.","Water exploitation index.","Land take and fragmentation of large habitats.","Trend in emissions and distance to 2008-2012 Kyoto target."]
                }
                ,
                {
                    numb: 33,
                    question: "What is the indicator of Material consumption?",
                    answer: "Total material requirement.",
                    options: ["Total material requirement.","Water exploitation index.","Land take and fragmentation of large habitats.","Trend in emissions and distance to 2008-2012 Kyoto target.","Annual tree fellings."]
                }
                ,
                {
                    numb: 34,
                    question: "What is the indicator of Water use?",
                    answer: "Water exploitation index.",
                    options: ["Water exploitation index.","Land take and fragmentation of large habitats.","Trend in emissions and distance to 2008-2012 Kyoto target.","Annual tree fellings.","Total material requirement."]
                }
                ,
                {
                    numb: 35,
                    question: "What is the indicator of Land resources?",
                    answer: "Land take and fragmentation of large habitats.",
                    options: ["Land take and fragmentation of large habitats.","Trend in emissions and distance to 2008-2012 Kyoto target.","Annual tree fellings.","Total material requirement.","Water exploitation index."]
                }
                ,
                {
                    numb: 36,
                    question: "What doesn\u2019t include in the sources of Energy Sector?",
                    answer: "Human",
                    options: ["Human","Biomass.","Sunlight","Wind","Oil"]
                }
                ,
                {
                    numb: 37,
                    question: "What doesn\u2019t include in the currencies of Energy Sector?",
                    answer: "Water",
                    options: ["Water","Gasoilne.","Methanol","Natural gas.","Hydrogen."]
                }
                ,
                {
                    numb: 38,
                    question: "A sustainable energy system mimicking nature's approach to energy, therefore, should also be centred on this relationship between some energy. What doesn\u2019t include in it?",
                    answer: "sulfuric acid.",
                    options: ["sulfuric acid.","solar energy.","hydrogen.","oxygen.","carbon."]
                }
                ,
                {
                    numb: 39,
                    question: "The term \"industrial ecology\":",
                    answer: "reflects the concept of a network of interacting industrial processes that utilize each other's material and energy wastes and byproducts.",
                    options: ["reflects the concept of a network of interacting industrial processes that utilize each other's material and energy wastes and byproducts.","were defined as systems in which the fluxes to and from the system are coherent with nature's fluxes and do not perturb nature's equilibria","engineered by homo technicus to intercept sunlight could provide electric or thermal energy services.","seek to provide all businesses (regardless of size and industry) with the means to develop systematic approaches to improving environmental performance.","\u0456s vital for effective conservation management, as it helps steer projects towards implementing management interventions (activities) in such a way to successfully achieve long-term conservation goals."]
                }
                ,
                {
                    numb: 40,
                    question: "Alternatively, solar energy technologies.",
                    answer: "engineered by homo technicus to intercept sunlight could provide electric or thermal energy services.",
                    options: ["engineered by homo technicus to intercept sunlight could provide electric or thermal energy services.","reflects the concept of a network of interacting industrial processes that utilize each other's material and energy wastes and byproducts.","were defined as systems in which the fluxes to and from the system are coherent with nature's fluxes and do not perturb nature's equilibria.","seek to provide all businesses (regardless of size and industry) with the means to develop systematic approaches to improving environmental performance.","\u0456s vital for effective conservation management, as it helps steer projects towards implementing management interventions (activities) in such a way to successfully achieve long-term conservation goals."]
                }
                ,
                {
                    numb: 41,
                    question: "In the deep future energy system conversion technologies complies with:",
                    answer: "zero emission.",
                    options: ["zero emission.","hydrogen and electricity.","non-fossil and sustainable, based on nuclear and solar energy.","sustain the needs of a growing world population, but better.","predominantly grid dependent."]
                }
                ,
                {
                    numb: 42,
                    question: "The power of moving water:",
                    answer: "or hydropower, is a clean and efficient means of generating electricity.",
                    options: ["or hydropower, is a clean and efficient means of generating electricity.","is being harnessed by modern windmills with lighter, stronger blades.","or energy from the Sun, is a free, abundant, and nonpolluting source of energy.","is the natural heat generated in the interior of Earth and released from volcanoes and hot springs or from geysers that shoot out heated water and steam.","is a potential source of fuel for automobiles, as well as a potential source of energy for heating buildings and generating electricity."]
                }
                ,
                {
                    numb: 43,
                    question: "Wind power:",
                    answer: "is being harnessed by modern windmills with lighter, stronger blades.",
                    options: ["is being harnessed by modern windmills with lighter, stronger blades.","or energy from the Sun, is a free, abundant, and nonpolluting source of energy.","is the natural heat generated in the interior of Earth and released from volcanoes and hot springs or from geysers that shoot out heated water and steam.","is a potential source of fuel for automobiles, as well as a potential source of energy for heating buildings and generating electricity.","or hydropower, is a clean and efficient means of generating electricity."]
                }
                ,
                {
                    numb: 44,
                    question: "Solar power:",
                    answer: "or energy from the Sun, is a free, abundant, and nonpolluting source of energy.",
                    options: ["or energy from the Sun, is a free, abundant, and nonpolluting source of energy.","is the natural heat generated in the interior of Earth and released from volcanoes and hot springs or from geysers that shoot out heated water and steam.","is a potential source of fuel for automobiles, as well as a potential source of energy for heating buildings and generating electricity.","or hydropower, is a clean and efficient means of generating electricity.","is being harnessed by modern windmills with lighter, stronger blades."]
                }
                ,
                {
                    numb: 45,
                    question: "Geothermal energy:",
                    answer: "is the natural heat generated in the interior of Earth and released from volcanoes and hot springs or from geysers that shoot out heated water and steam.",
                    options: ["is the natural heat generated in the interior of Earth and released from volcanoes and hot springs or from geysers that shoot out heated water and steam.","is a potential source of fuel for automobiles, as well as a potential source of energy for heating buildings and generating electricity.","or hydropower, is a clean and efficient means of generating electricity.","is being harnessed by modern windmills with lighter, stronger blades.","or energy from the Sun, is a free, abundant, and nonpolluting source of energy."]
                }
                ,
                {
                    numb: 46,
                    question: "Hydrogen gas:",
                    answer: "is a potential source of fuel for automobiles, as well as a potential source of energy for heating buildings and generating electricity.",
                    options: ["is a potential source of fuel for automobiles, as well as a potential source of energy for heating buildings and generating electricity.","or hydropower, is a clean and efficient means of generating electricity.","is being harnessed by modern windmills with lighter, stronger blades.","or energy from the Sun, is a free, abundant, and nonpolluting source of energy.","is the natural heat generated in the interior of Earth and released from volcanoes and hot springs or from geysers that shoot out heated water and steam."]
                }
                ,
                {
                    numb: 47,
                    question: "The RK Environmental Code was adopted in...",
                    answer: "2007.",
                    options: ["2007.","2003","2002","1998","1997"]
                }
                ,
                {
                    numb: 48,
                    question: "National issues:",
                    answer: "Issues related to the plans of intensive development of the Caspian Sea shelf resources, because intensive development of hydrocarbon resources by the Caspian states would increase an impact on the offshore and coastline ecosystems. Given the indefinite status of the sea, cross-border environmental threats become important",
                    options: ["Issues related to the plans of intensive development of the Caspian Sea shelf resources, because intensive development of hydrocarbon resources by the Caspian states would increase an impact on the offshore and coastline ecosystems. Given the indefinite status of the sea, cross-border environmental threats become important","Change of climate due to the \u00abgreenhouse effect\u00bb, which is a global concern, and a significant potential threat to the environment.","Atmospheric air pollution.","The disappearance of certain species of plants and animals results in the loss of genetic diversity and causes changes to ecosystems","Industrial and domestic wastes."]
                }
                ,
                {
                    numb: 49,
                    question: "Global challenges:",
                    answer: "Change of climate due to the \u00abgreenhouse effect\u00bb, which is a global concern, and a significant potential threat to the environment.",
                    options: ["Change of climate due to the \u00abgreenhouse effect\u00bb, which is a global concern, and a significant potential threat to the environment.","Issues related to the plans of intensive development of the Caspian Sea shelf resources, because intensive development of hydrocarbon resources by the Caspian states would increase an impact on the offshore and coastline ecosystems. Given the indefinite status of the sea, cross-border environmental threats become important","Atmospheric air pollution.","The disappearance of certain species of plants and animals results in the loss of genetic diversity and causes changes to ecosystems","Industrial and domestic wastes."]
                }
                ,
                {
                    numb: 50,
                    question: "Local environmental issues:",
                    answer: "Industrial and domestic wastes.",
                    options: ["Industrial and domestic wastes.","Change of climate due to the \u00abgreenhouse effect\u00bb, which is a global concern, and a significant potential threat to the environment.","Issues related to the plans of intensive development of the Caspian Sea shelf resources, because intensive development of hydrocarbon resources by the Caspian states would increase an impact on the offshore and coastline ecosystems. Given the indefinite status of the sea, cross-border environmental threats become important","Atmospheric air pollution.","The disappearance of certain species of plants and animals results in the loss of genetic diversity and causes changes to ecosystems"]
                }
                ,
];
showqa();
