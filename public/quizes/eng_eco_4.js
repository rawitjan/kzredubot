
var title = 'ENG ECO 151-200'; 
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
                    question: "\ufeffScientists tell us that we have 10 years to change the way we live, avert the depletion of natural resources and the catastrophic evolution of the Earth's climate. What is this movie?",
                    answer: "HOME",
                    options: ["HOME","ECOLOGY","ENVIRONMENT","INDUSTRY","EARTH"]
                }
                ,
                {
                    numb: 2,
                    question: "Renewable energies to make its",
                    answer: "operations totally green",
                    options: ["operations totally green","operation totally green","operations total green","operation total green","operations green"]
                }
                ,
                {
                    numb: 3,
                    question: "The company hopes to ______",
                    answer: "exploit solar energy",
                    options: ["exploit solar energy","exploits solar energy","exploit solar energies","exploits solar energies","exploit energy"]
                }
                ,
                {
                    numb: 4,
                    question: "Google's Director of Energy ______",
                    answer: "and Sustainability",
                    options: ["and Sustainability","and Sustain SAbility","and Sustain A Bill And Tea","and Sustains SAbility","and Sustainabilities"]
                }
                ,
                {
                    numb: 5,
                    question: "invested over a billion dollars in 15 projects that ______",
                    answer: "have the capacity",
                    options: ["have the capacity","have the audacity","have the rapacity","have the minacity","have the mapacity"]
                }
                ,
                {
                    numb: 6,
                    question: "investing in\u2026renewable power plants\u2026all ______",
                    answer: "make business sense",
                    options: ["make business sense","makes business senses","makes business sense","make business senses","make businesses senses"]
                }
                ,
                {
                    numb: 7,
                    question: "Google still has a long way to go before all of its ______",
                    answer: "operations are fuelled",
                    options: ["operations are fuelled","operations are fuels","operations are fuelling","operations are fuel","operations have fuelled"]
                }
                ,
                {
                    numb: 8,
                    question: "Google's power requirements are ______",
                    answer: "sourced from renewables",
                    options: ["sourced from renewables","sauced from renewables","source from renewables","sources from renewables","is sourcing from renewables"]
                }
                ,
                {
                    numb: 9,
                    question: "not the least of which is operating ______",
                    answer: "in many jurisdictions",
                    options: ["in many jurisdictions","in many juries dictions","in many juries diction","in many jurisdiction","in many jurisdictioning"]
                }
                ,
                {
                    numb: 10,
                    question: "At Google we invest ______ energy projects",
                    answer: "in innovative renewable",
                    options: ["in innovative renewable","in an innovative renewable","in innovative renewables","in innovatively renewable","in an innovatively renewable"]
                }
                ,
                {
                    numb: 11,
                    question: "the potential to transform the ______",
                    answer: "energy landscape",
                    options: ["energy landscape","energy landscapes","energy land scrape","energy land scope","energy land score"]
                }
                ,
                {
                    numb: 12,
                    question: "<b>Scan the report and answer the question. What is the main cause of air pollution?<\/b><br>Air pollution is a major problem all over the world today. Probably the single biggest contributor to the problem is the motor vehicle. However, there are many other man-made sources, such as industrial factories, power stations, mining, building, and the burning of fossil fuels and wood in homes around the world. There are natural sources of air pollution too; volcanoes and forest fires produce a lot of pollutants.",
                    answer: "motor vehicle",
                    options: ["motor vehicle","power stations","factories","mining\/building","buring \u2013 fossil fuels\/wood"]
                }
                ,
                {
                    numb: 13,
                    question: "Scan the report and answer the question. What are two natural sources of air pollution? Air pollution is a major problem all over the world today. Probably the single biggest contributor to the problem is the motor vehicle. However, there are many other man-made sources, such as industrial factories, power stations, mining, building, and the burning of fossil fuels and wood in homes around the world. There are natural sources of air pollution too; volcanoes and forest fires produce a lot of pollutants.",
                    answer: "volcanoes and forest fires",
                    options: ["volcanoes and forest fires","power stations","factories","mining\/building","buring \u2013 fossil fuels\/wood"]
                }
                ,
                {
                    numb: 14,
                    question: "Scan the report and answer the question. Where was the first study done? In fact, air pollution may be a much greater danger to our health than scientists believed before. A 20-year study of residents of a Cairo suburb shows that the tiny particles in polluted air could lead to three times as many long-term health problems as was previously thought. Other studies show a similar link between traffic pollution and ill health. A second group of researchers in Ottawa, Canada, reported that children living near busy roads were more likely to develop asthma",
                    answer: "Cairo",
                    options: ["Cairo","Ottawa","Mexico City","Moscow","Beijing"]
                }
                ,
                {
                    numb: 15,
                    question: "Scan the report and answer the question. Where was the second study done? In fact, air pollution may be a much greater danger to our health than scientists believed before. A 20-year study of residents of a Cairo suburb shows that the tiny particles in polluted air could lead to three times as many long-term health problems as was previously thought. Other studies show a similar link between traffic pollution and ill health. A second group of researchers in Ottawa, Canada, reported that children living near busy roads were more likely to develop asthma.",
                    answer: "Ottawa",
                    options: ["Ottawa","Cairo","Mexico City","Moscow","Beijing"]
                }
                ,
                {
                    numb: 16,
                    question: "Scan the report and answer the question. What health problems did the first study look at? A 20-year study of residents of a Cairo suburb shows that the tiny particles in polluted air could lead to three times as many long-term health problems as was previously thought. They found that as the number of tiny particles, those less than 2.5 microns in diameter, increased, so did the risk of dying from health problems such as heart attacks and lung cancer. Other studies show a similar link between traffic pollution and ill health. A second group of researchers in Ottawa, Canada, reported that children living near busy roads were more likely to develop asthma.",
                    answer: "heart attacks and lung cancer",
                    options: ["heart attacks and lung cancer","asthma","heart attacks","lung cancer","blood diseases"]
                }
                ,
                {
                    numb: 17,
                    question: "Scan the report and answer the question. What health problems did the first study look at? A 20-year study of residents of a Cairo suburb shows that the tiny particles in polluted air could lead to three times as many long-term health problems as was previously thought. They found that as the number of tiny particles, those less than 2.5 microns in diameter, increased, so did the risk of dying from health problems such as heart attacks and lung cancer. Other studies show a similar link between traffic pollution and ill health. A second group of researchers in Ottawa, Canada, reported that children living near busy roads were more likely to develop asthma.",
                    answer: "asthma",
                    options: ["asthma","heart attacks and lung cancer","heart attacks","lung cancer","blood diseases"]
                }
                ,
                {
                    numb: 18,
                    question: "What kind of this e-mail? To whom this message was sent? \u201cHi, Kim! How are you? It was good to talk yesterday. I\u2019m finalizing the details of management meeting. Thank you for your part, no changes needed. Please email me in case of any issues. Regards, Andreas\u201d",
                    answer: "You know each other well",
                    options: ["You know each other well","You know each other","You don't know each other","You are familiar, but you don't communicate with him","Your boss"]
                }
                ,
                {
                    numb: 19,
                    question: "What kind of this e-mail? To whom this message was sent? \u201cDear Mrs. Gonzales! It was nice to talk to you by phone yesterday. I would like to invite you to visit us on Monday to finalize the details of upcoming management meeting. Hope you can come. Yours sincerely, Andreas Schlutt\u201d",
                    answer: "You know each other",
                    options: ["You know each other","You know each other well","You don't know each other","You are familiar, but you don't communicate with him","Your boss"]
                }
                ,
                {
                    numb: 20,
                    question: "What kind of this e-mail? To whom this message was sent? \u201cDear Sir\/Madam! We would like to invite you to annual meeting dedicated to the environmental protection on Monday, May 31 at 11:00. Please find the detailed information in attached. Yours sincerely, Andreas Schlutt, Senior Specialist\u201d",
                    answer: "You don't know each other",
                    options: ["You don't know each other","You know each other","You know each other well","You are familiar, but you don't communicate with him","Your boss"]
                }
                ,
                {
                    numb: 21,
                    question: "What kind of this e-mail? \u201dHi, Bill! Just a quick note to say many thanks for sorting out the problems with the delivery. We really appreciate everything you have done! All the best, Tina\u201d",
                    answer: "Appreciation",
                    options: ["Appreciation","Responding to thanks","Congratulation","Personal announcement","Saying goodbye"]
                }
                ,
                {
                    numb: 22,
                    question: "What kind of this e-mail? \u201dTina, Glad to hear that everything went well! Very happy to help you. Bill\u201d",
                    answer: "Responding to thanks",
                    options: ["Responding to thanks","Appreciation","Congratulation","Personal announcement","Saying goodbye"]
                }
                ,
                {
                    numb: 23,
                    question: "What kind of this e-mail? \u201dDear Flora! Many congratulations on your promotion! But we\u2019ll miss your visits \u2013 stay in touch. With best regards, Tim\u201d",
                    answer: "Congratulation",
                    options: ["Congratulation","Responding to thanks","Appreciation","Personal announcement","Saying goodbye"]
                }
                ,
                {
                    numb: 24,
                    question: "What kind of this e-mail? \u201dDear friends! This is to let you know that I will be leaving our Company at the end of the month. After a very enjoyable career in USA I\u2019ve decided to move to Brazil. Please come and visit me if you are visiting Rio. With very best wishes, Mario\u201d",
                    answer: "Personal announcement",
                    options: ["Personal announcement","Saying goodbye","Responding to thanks","Appreciation","Congratulation"]
                }
                ,
                {
                    numb: 25,
                    question: "What kind of this e-mail? \u201dDear Mario! I was very sorry to hear that you are leaving the Company. It has been a pleasure working with you and I wish you very success in the future! Alex\u201d",
                    answer: "Saying goodbye",
                    options: ["Saying goodbye","Responding to thanks","Appreciation","Congratulation","Personal announcement"]
                }
                ,
                {
                    numb: 26,
                    question: "What kind of this e-mail? \u201dAlex! I\u2019m pleased to tell you that I have just received the results of the survey and they are very good! I thought you\u2019d like to know immediately. Lena\u201d",
                    answer: "Good news",
                    options: ["Good news","Responding to thanks","Appreciation","Congratulation","Personal announcement"]
                }
                ,
                {
                    numb: 27,
                    question: "What kind of this e-mail? \u201dWell done, Lena! You\u2019ve done a great job, thank you! Alex\u201d",
                    answer: "Replying to good news",
                    options: ["Replying to good news","Responding to thanks","Appreciation","Congratulation","Personal announcement"]
                }
                ,
                {
                    numb: 28,
                    question: "What kind of this e-mail? \u201dDear Jeff! I was really sorry to hear that you are not well. Take care and get sure you take plenty of rest. Olga\u201d",
                    answer: "Replying to bad news",
                    options: ["Replying to bad news","Replying to good news","Appreciation","Responding to thanks","Congratulation"]
                }
                ,
                {
                    numb: 29,
                    question: "What kind of this e-mail? \u201dDear Hanna! Have you remembered that Mary is retiring in June? We\u2019d like to organize a leaving party for her. I hope you can make it. Regards, Dima\u201d",
                    answer: "Reminder",
                    options: ["Reminder","Replying to good news","Appreciation","Responding to thanks","Congratulation"]
                }
                ,
                {
                    numb: 30,
                    question: "What kind of this e-mail? \u201dDear Hanna! Have you remembered that Mary is retiring in June? We\u2019d like to organize a leaving party for her. I hope you can make it. Regards, Dima\u201d",
                    answer: "Reply to a reminder",
                    options: ["Reply to a reminder","Reminder","Appreciation","Responding to thanks","Congratulation"]
                }
                ,
                {
                    numb: 31,
                    question: "What kind of this e-mail? \u201dDear Mr. Ivanov! We were interested to hear that you will be in Japan for International Conference and we would be very pleased if you could visit our company during your stay in Tokyo. Please let us know your availability and we will arrange a tour of our factory. Yours sincerely, Mr. Taro Sato\u201d",
                    answer: "Invitation",
                    options: ["Invitation","Reminder","Appreciation","Responding to thanks","Congratulation"]
                }
                ,
                {
                    numb: 32,
                    question: "What kind of this e-mail? \u201dDear Mr. Sato! Thank you for the invitation to visit your company! I would be very interested in seeing your factory and I will be available on 6th of May. I look forward to your confirmation. Yours sincerely, Mr. Ivanov Mikhail\u201d",
                    answer: "Replying to an invitation",
                    options: ["Replying to an invitation","Invitation","Appreciation","Responding to thanks","Congratulation"]
                }
                ,
                {
                    numb: 33,
                    question: "What kind of this e-mail? \u201dHi John! I confirm your visit to us on May 31 at 10:00. Just come to reception and ask for me. If you need to contact me please call on my mobile (+7-111-98-00). See you on Friday! Regards, Kevin\u201d",
                    answer: "Confirmation",
                    options: ["Confirmation","Responding to thanks","Congratulation","Replying to an invitation","Invitation"]
                }
                ,
                {
                    numb: 34,
                    question: "What kind of this e-mail? \u201dDear Miss Smith! I\u2019m pleased you are able to visit us on 21th. I\u2019m attaching a map with directions to our factory. I have reserved a car park space for you. Regards, Inna Sergeeva\u201d",
                    answer: "Sending directions",
                    options: ["Sending directions","Invitation","Confirmation","Responding to thanks","Congratulation"]
                }
                ,
                {
                    numb: 35,
                    question: "What kind of this e-mail? \u201dDear Miss Smith! I\u2019m just finalising arrangements for your visit. Do you know when you are planning to arrive yet? Best regards, Inna Sergeeva\u201d",
                    answer: "Chasing up information",
                    options: ["Chasing up information","Invitation","Confirmation","Responding to thanks","Congratulation"]
                }
                ,
                {
                    numb: 36,
                    question: "What kind of this e-mail? \u201dHelena, I\u2019ve put together the following itinerary. Can you let me know what do you think about it? (Flight details, transfer arrangement, hotel booking confirmation, contact phones, etc.) All the best, Michele\u201d",
                    answer: "Arranging an itinerary",
                    options: ["Arranging an itinerary","Invitation","Confirmation","Responding to thanks","Congratulation"]
                }
                ,
                {
                    numb: 37,
                    question: "What kind of this e-mail? \u201dIgor, I\u2019m booking Elena\u2019s flight today. Do you want to travel with her? It will be LH1332 leaving at 07:30. Shall I reserve you a seat near Elena? Michele\u201d",
                    answer: "Making a booking",
                    options: ["Making a booking","Congratulation","Arranging an itinerary","Invitation","Confirmation"]
                }
                ,
                {
                    numb: 38,
                    question: "What kind of this e-mail? \u201d Dear Mr. DeVorsney! I\u2019m writing to confirm a reservation made by phone this morning for 2 single rooms in Savoy hotel on May, 26. Could you please email us a booking confirmation? Thank you! Inna Sergeeva\u201d",
                    answer: "Confirming a reservation",
                    options: ["Confirming a reservation","Congratulation","Arranging an itinerary","Invitation","Confirmation"]
                }
                ,
                {
                    numb: 39,
                    question: "_______ is based on the \u201cprecautionary principle\u201d focusing on the management and control of pollution at the source",
                    answer: "The environmental policy in the European Union (EU)",
                    options: ["The environmental policy in the European Union (EU)","EC Environmental Liability Directive (EC ELD)","General (third party) liability insurance (GTPL)","Environmental (impairment) liability insurance (EIL insurance)","United Nations Environment Programme (UNEP)"]
                }
                ,
                {
                    numb: 40,
                    question: "_______ which came into effect in 2010 has been implemented in the EU regarding the prevention and remediation of environmental damage.",
                    answer: "EC Environmental Liability Directive (EC ELD)",
                    options: ["EC Environmental Liability Directive (EC ELD)","The environmental policy in the European Union (EU)","General (third party) liability insurance (GTPL)","Environmental (impairment) liability insurance (EIL insurance)","United Nations Environment Programme (UNEP)"]
                }
                ,
                {
                    numb: 41,
                    question: "_______ covers the insured\u2019s civil liability arising out of the business activity or property ownership, to compensate third parties for bodily injury or damage to individual property, and in some cases for partial economic\/financial losses caused by environmental impairment.",
                    answer: "General (third party) liability insurance (GTPL)",
                    options: ["General (third party) liability insurance (GTPL)","The environmental policy in the European Union (EU)","EC Environmental Liability Directive (EC ELD)","Environmental (impairment) liability insurance (EIL insurance)","United Nations Environment Programme (UNEP)"]
                }
                ,
                {
                    numb: 42,
                    question: "_______ as a comprehensive risk transfer solution is offered by a small number of specialised insurance companies or environmental liability reinsurance pools such as those found in France, Spain and Italy.",
                    answer: "Environmental (impairment) liability insurance (EIL insurance)",
                    options: ["Environmental (impairment) liability insurance (EIL insurance)","General (third party) liability insurance (GTPL)","The environmental policy in the European Union (EU)","EC Environmental Liability Directive (EC ELD)","United Nations Environment Programme (UNEP)"]
                }
                ,
                {
                    numb: 43,
                    question: "_______ involves extracting basic information from the text in the range of 70-75%.",
                    answer: "Introductory reading",
                    options: ["Introductory reading","Search reading","Learning reading","Thinking reading","Working reading"]
                }
                ,
                {
                    numb: 44,
                    question: "_______ is associated with finding in the text specific information necessary for the reader, definitions, conclusions, factual data, information of a country-specific nature",
                    answer: "Search reading",
                    options: ["Search reading","Introductory reading","Learning reading","Thinking reading","Working reading"]
                }
                ,
                {
                    numb: 45,
                    question: "_______ involves achieving a detailed \/ complete (100%) and accurate level of understanding of the main and secondary facts contained in the text",
                    answer: "Learning reading",
                    options: ["Learning reading","Search reading","Introductory reading","Thinking reading","Working reading"]
                }
                ,
                {
                    numb: 46,
                    question: "A British scientific journal devoted to the problems of ecology with a special consideration of plant ecology. The world's oldest international peer-reviewed environmental journal. It was founded in 1913",
                    answer: "Journal of Ecology",
                    options: ["Journal of Ecology","Journal of Applied Ecology","Journal of Animal Ecology","Functional Ecology","Ecological Applications"]
                }
                ,
                {
                    numb: 47,
                    question: "British scientific journal devoted to the problems of applied ecology with a special consideration of the problems of management of biological resources. It was founded in 1964",
                    answer: "Journal of Applied Ecology",
                    options: ["Journal of Applied Ecology","Journal of Ecology","Journal of Animal Ecology","Functional Ecology","Ecological Applications"]
                }
                ,
                {
                    numb: 48,
                    question: "A British scientific journal devoted to environmental issues with a special focus on animal ecology. It was founded in 1932.",
                    answer: "Journal of Animal Ecology",
                    options: ["Journal of Animal Ecology","Journal of Applied Ecology","Journal of Ecology","Functional Ecology","Ecological Applications"]
                }
                ,
                {
                    numb: 49,
                    question: "A British scientific journal devoted to environmental problems with a special focus on experimental ecology. Founded in 1987.",
                    answer: "Functional Ecology",
                    options: ["Functional Ecology","Journal of Animal Ecology","Journal of Applied Ecology","Journal of Ecology","Ecological Applications"]
                }
                ,
                {
                    numb: 50,
                    question: "The scientific peer-reviewed journal publishes practical applications, documents related to the environmental management system, and the implementation of research results in scientific practice.",
                    answer: "Ecological Applications",
                    options: ["Ecological Applications","Functional Ecology","Journal of Animal Ecology","Journal of Applied Ecology","Journal of Ecology"]
                }
                ,
];
showqa();
