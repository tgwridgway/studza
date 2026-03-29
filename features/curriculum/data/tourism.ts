import type { Flashcard, QuizQuestion, FeynmanTopic } from "@/features/curriculum/types";

export const flashcards: Flashcard[] = [
    {
        "id": 1,
        "unit": "sectors",
        "q": "Name the FIVE main sectors of the tourism industry.",
        "a": "1. Hospitality (accommodation and food & beverage)\n2. Travel (transport — air, road, rail, water)\n3. Adventure / Recreation\n4. Attractions (natural, cultural, man-made)\n5. Tourism Services (travel agencies, tour operators, tourism info offices)"
    },
    {
        "id": 2,
        "unit": "sectors",
        "q": "What is the difference between a travel agent and a tour operator?",
        "a": "A travel agent acts as an intermediary who sells travel products (flights, accommodation, tours) on behalf of suppliers and earns commission.\nA tour operator creates and packages tours by combining transport, accommodation, and activities into a single product, then sells these packages through travel agents or directly."
    },
    {
        "id": 3,
        "unit": "sectors",
        "q": "List FOUR types of accommodation in the hospitality sector.",
        "a": "1. Hotels (graded 1–5 stars by TGCSA)\n2. Bed & Breakfasts (B&Bs)\n3. Guest houses\n4. Game lodges\nOther examples: backpackers/hostels, self-catering, resorts, boutique hotels."
    },
    {
        "id": 4,
        "unit": "sectors",
        "q": "What does TGCSA stand for and what is its function?",
        "a": "Tourism Grading Council of South Africa. It is responsible for the quality assurance of tourism products by grading accommodation and other tourism establishments using a star-rating system (1–5 stars)."
    },
    {
        "id": 5,
        "unit": "sectors",
        "q": "Name the THREE types of transport used in tourism and give examples of each.",
        "a": "1. Air — scheduled flights, charter flights, low-cost carriers (e.g. FlySafair, Kulula)\n2. Land — buses (Greyhound, Intercape), trains (Blue Train, Shosholoza Meyl, Gautrain), car rental (Avis, Hertz)\n3. Water — cruise ships (MSC Cruises), ferries, yacht charters"
    },
    {
        "id": 6,
        "unit": "sectors",
        "q": "What is the role of South African Tourism (SAT)?",
        "a": "South African Tourism is the national tourism marketing organisation responsible for marketing South Africa as a preferred tourist destination both domestically and internationally. It promotes tourism to grow the economy and create jobs."
    },
    {
        "id": 7,
        "unit": "sectors",
        "q": "What is the role of the Department of Tourism in South Africa?",
        "a": "The Department of Tourism is responsible for creating and implementing tourism policies, developing tourism infrastructure, ensuring transformation in the industry, and promoting responsible tourism practices."
    },
    {
        "id": 8,
        "unit": "sectors",
        "q": "Explain what the tourism multiplier effect is.",
        "a": "The multiplier effect is when money spent by tourists circulates through the economy, creating additional income and employment. E.g. a tourist pays a hotel → hotel pays staff → staff spend money at local shops → shops pay suppliers, etc. Each round of spending generates further economic activity."
    },
    {
        "id": 9,
        "unit": "sectors",
        "q": "What is the difference between direct, indirect, and induced employment in tourism?",
        "a": "Direct employment: jobs in tourism businesses (hotels, airlines, tour guides).\nIndirect employment: jobs created in industries that supply tourism (food suppliers, laundry services, construction).\nInduced employment: jobs created when tourism employees spend their wages in the broader economy (retail, education)."
    },
    {
        "id": 10,
        "unit": "sectors",
        "q": "What is leakage in tourism?",
        "a": "Leakage occurs when tourism revenue leaves the local economy, e.g. when profits go to foreign-owned hotel chains, when imported goods are used for tourists, or when tourists book through international online platforms. This reduces the economic benefit for the host community."
    },
    {
        "id": 11,
        "unit": "map-work",
        "q": "What are the THREE types of maps used in tourism?",
        "a": "1. Road maps — show roads, towns, distances for route planning\n2. Topographic maps — show physical features, contour lines, elevation\n3. Street/City maps — show streets, landmarks, attractions within a city/town"
    },
    {
        "id": 12,
        "unit": "map-work",
        "q": "What information is needed to plan a tour itinerary?",
        "a": "1. Client's budget and preferences\n2. Transport mode and routes\n3. Distances and travel times\n4. Accommodation (type, grading, location)\n5. Attractions and activities\n6. Meals\n7. Duration of trip\n8. Special needs (dietary, disability access)"
    },
    {
        "id": 13,
        "unit": "map-work",
        "q": "How do you calculate travel time using distance and speed?",
        "a": "Time = Distance ÷ Speed. For example, if the distance is 600 km and the average speed is 100 km/h, then Time = 600 ÷ 100 = 6 hours."
    },
    {
        "id": 14,
        "unit": "map-work",
        "q": "What is the difference between a single-centre tour and a multi-centre tour?",
        "a": "Single-centre tour: tourists stay in one location and take day trips from there.\nMulti-centre tour: tourists travel to different destinations and stay in different accommodation along the route."
    },
    {
        "id": 15,
        "unit": "map-work",
        "q": "What is a round trip vs. an open-jaw trip?",
        "a": "Round trip: the traveller departs from and returns to the same point (e.g. JNB → CPT → JNB).\nOpen-jaw trip: the traveller arrives at one destination and departs from a different one (e.g. fly into CPT, fly out of DUR)."
    },
    {
        "id": 16,
        "unit": "map-work",
        "q": "Name the THREE major international airports in South Africa and their IATA codes.",
        "a": "1. OR Tambo International Airport, Johannesburg — JNB\n2. Cape Town International Airport — CPT\n3. King Shaka International Airport, Durban — DUR"
    },
    {
        "id": 17,
        "unit": "map-work",
        "q": "Name FOUR factors that affect the cost of a tour package.",
        "a": "1. Season (peak vs. off-peak)\n2. Type and grading of accommodation\n3. Distance and mode of transport\n4. Number of activities/attractions included\n5. Number of meals included\n6. Duration of the tour\n7. Single supplement (travelling alone)"
    },
    {
        "id": 18,
        "unit": "map-work",
        "q": "What is a single supplement in tourism?",
        "a": "A single supplement is an extra charge that a solo traveller must pay when occupying a room designed for two people. Hotels price rooms per room, not per person, so a single traveller pays more to cover the cost of the unused bed."
    },
    {
        "id": 19,
        "unit": "map-work",
        "q": "What is the difference between peak season, shoulder season, and off-peak season?",
        "a": "Peak season: the busiest time with highest demand and prices (e.g. December holidays in SA).\nShoulder season: the period between peak and off-peak, with moderate demand and prices.\nOff-peak season: the quietest time with lowest demand and prices (e.g. winter months in SA for coastal destinations)."
    },
    {
        "id": 20,
        "unit": "map-work",
        "q": "What is an itinerary?",
        "a": "An itinerary is a detailed day-by-day plan of a trip that includes dates, transport arrangements, accommodation, activities, meals, and any other relevant information for the traveller."
    },
    {
        "id": 21,
        "unit": "attractions",
        "q": "Name South Africa's TEN UNESCO World Heritage Sites.",
        "a": "1. Robben Island\n2. Cradle of Humankind (Sterkfontein Caves)\n3. iSimangaliso Wetland Park\n4. Mapungubwe Cultural Landscape\n5. Drakensberg (uKhahlamba) Park\n6. Vredefort Dome\n7. Cape Floral Region Protected Areas\n8. Richtersveld Cultural & Botanical Landscape\n9. Barberton Makhonjwa Mountains\n10. ǂKhomani Cultural Landscape"
    },
    {
        "id": 22,
        "unit": "attractions",
        "q": "What are the THREE criteria UNESCO uses to classify World Heritage Sites?",
        "a": "1. Cultural significance — represents a masterpiece of human creative genius or important cultural traditions\n2. Natural significance — outstanding natural beauty, ecological processes, or important habitats\n3. Mixed — sites that meet both cultural and natural criteria"
    },
    {
        "id": 23,
        "unit": "attractions",
        "q": "Differentiate between natural, cultural, and man-made attractions with SA examples.",
        "a": "Natural: formed by nature — Table Mountain, Blyde River Canyon, Kruger National Park.\nCultural: based on heritage and traditions — Cradle of Humankind, Robben Island, traditional Zulu villages.\nMan-made: built by humans for entertainment — Gold Reef City, Sun City, V&A Waterfront, uShaka Marine World."
    },
    {
        "id": 24,
        "unit": "attractions",
        "q": "What are icon attractions? Give THREE South African examples.",
        "a": "Icon attractions are world-famous, unique attractions that are synonymous with a destination and attract large numbers of tourists. SA examples:\n1. Table Mountain (Cape Town)\n2. Kruger National Park (Limpopo/Mpumalanga)\n3. Robben Island (Cape Town)"
    },
    {
        "id": 25,
        "unit": "attractions",
        "q": "What is heritage tourism?",
        "a": "Heritage tourism involves travelling to experience places, artefacts, and activities that authentically represent the stories and people of the past. In SA, this includes visiting sites linked to the struggle against apartheid (e.g. Robben Island, Apartheid Museum, Hector Pieterson Memorial)."
    },
    {
        "id": 26,
        "unit": "attractions",
        "q": "Name the NINE provinces of South Africa and ONE major tourism attraction in each.",
        "a": "1. Gauteng — Apartheid Museum / Cradle of Humankind\n2. KwaZulu-Natal — uShaka Marine World / Drakensberg\n3. Western Cape — Table Mountain / Cape Winelands\n4. Eastern Cape — Addo Elephant Park / Tsitsikamma\n5. Mpumalanga — Kruger National Park / Blyde River Canyon\n6. Limpopo — Mapungubwe / Kruger (northern section)\n7. Free State — Golden Gate Highlands National Park\n8. North West — Sun City / Pilanesberg\n9. Northern Cape — Augrabies Falls / Richtersveld"
    },
    {
        "id": 27,
        "unit": "attractions",
        "q": "What is the Big Five and why are they important for tourism?",
        "a": "The Big Five refers to lion, leopard, rhinoceros, elephant, and buffalo. Originally named by hunters as the five most difficult animals to hunt on foot, they are now a major drawcard for wildlife tourism and safaris in South Africa and other African countries."
    },
    {
        "id": 28,
        "unit": "attractions",
        "q": "What is cultural tourism and why is it important in South Africa?",
        "a": "Cultural tourism involves experiencing the way of life, customs, traditions, arts, and heritage of a community. It is important in SA because of the country's rich cultural diversity (Rainbow Nation), 11 official languages, and unique heritage sites. It promotes cross-cultural understanding and creates economic opportunities in rural communities."
    },
    {
        "id": 29,
        "unit": "attractions",
        "q": "What is a niche market in tourism? Give FOUR examples.",
        "a": "A niche market is a specialised segment of the tourism market that focuses on a specific interest or activity. Examples:\n1. Adventure tourism (bungee jumping, shark cage diving)\n2. Ecotourism (nature-based, conservation-focused)\n3. Medical/health tourism (cosmetic surgery, dental work)\n4. Sports tourism (events like Rugby World Cup, Comrades Marathon)"
    },
    {
        "id": 30,
        "unit": "attractions",
        "q": "What is the difference between tangible and intangible cultural heritage?",
        "a": "Tangible cultural heritage: physical objects and places — buildings, monuments, artefacts, landscapes (e.g. Castle of Good Hope, Mapungubwe artefacts).\nIntangible cultural heritage: non-physical traditions — oral history, music, dance, rituals, languages, knowledge (e.g. Venda music, Zulu beadwork traditions, San rock art storytelling)."
    },
    {
        "id": 31,
        "unit": "sustainable",
        "q": "Define sustainable tourism.",
        "a": "Sustainable tourism is tourism that takes full account of its current and future economic, social, and environmental impacts, addressing the needs of visitors, the industry, the environment, and host communities. It meets the needs of the present without compromising the ability of future generations to meet their own needs."
    },
    {
        "id": 32,
        "unit": "sustainable",
        "q": "What are the THREE pillars of sustainable tourism?",
        "a": "1. Economic sustainability — ensuring tourism provides long-term economic benefits to host communities\n2. Social/cultural sustainability — respecting local culture, traditions, and values; involving communities\n3. Environmental sustainability — conserving natural resources, reducing pollution, protecting biodiversity"
    },
    {
        "id": 33,
        "unit": "sustainable",
        "q": "What is responsible tourism?",
        "a": "Responsible tourism requires that all stakeholders (tourists, businesses, governments, communities) take responsibility for their actions and the impact of tourism. It focuses on making tourism better for local people, the environment, and tourists themselves. SA's White Paper on Tourism (1996) adopts responsible tourism as the guiding principle."
    },
    {
        "id": 34,
        "unit": "sustainable",
        "q": "What is ecotourism?",
        "a": "Ecotourism is responsible travel to natural areas that conserves the environment, sustains the well-being of local people, and involves interpretation and education. It minimises negative impacts, builds environmental awareness, and provides direct financial benefits for conservation and local communities."
    },
    {
        "id": 35,
        "unit": "sustainable",
        "q": "Name FIVE negative environmental impacts of tourism.",
        "a": "1. Pollution (air, water, noise, litter)\n2. Deforestation and habitat destruction for tourism development\n3. Overcrowding at natural sites causing soil erosion and vegetation damage\n4. Increased carbon emissions from transport\n5. Overuse of water and energy resources\n6. Disturbance to wildlife"
    },
    {
        "id": 36,
        "unit": "sustainable",
        "q": "Name FIVE positive socio-economic impacts of tourism.",
        "a": "1. Job creation (direct, indirect, induced)\n2. Improved infrastructure (roads, airports, sanitation)\n3. Cultural exchange and understanding between visitors and hosts\n4. Preservation of cultural heritage and traditions\n5. Foreign exchange earnings\n6. Community development through tourism levies and projects"
    },
    {
        "id": 37,
        "unit": "sustainable",
        "q": "What is a carbon footprint and how does tourism contribute to it?",
        "a": "A carbon footprint is the total amount of greenhouse gases (especially CO₂) produced by human activities. Tourism contributes through: air travel (largest contributor), road transport, energy use in hotels, food production and waste, and construction of tourism facilities."
    },
    {
        "id": 38,
        "unit": "sustainable",
        "q": "What is greenwashing in tourism?",
        "a": "Greenwashing is when a tourism business falsely claims to be environmentally friendly or sustainable to attract eco-conscious tourists without actually implementing genuine sustainable practices. E.g. a hotel claiming to be 'green' but not recycling or conserving water."
    },
    {
        "id": 39,
        "unit": "sustainable",
        "q": "Name FOUR ways tourists can practise responsible tourism.",
        "a": "1. Support local businesses and buy locally made products\n2. Respect local culture, customs, and traditions\n3. Reduce, reuse, and recycle waste\n4. Conserve water and energy\n5. Stay on designated paths to protect natural environments\n6. Do not buy products made from endangered species"
    },
    {
        "id": 40,
        "unit": "sustainable",
        "q": "What is Fair Trade Tourism and what does it promote?",
        "a": "Fair Trade Tourism (FTT) is a non-profit organisation that certifies tourism businesses in Southern Africa that meet fair trade standards. It promotes: fair wages and working conditions, equitable distribution of benefits, respect for human rights, culture and environment, and ethical business practices."
    },
    {
        "id": 41,
        "unit": "domestic-intl",
        "q": "Define domestic tourism, regional tourism, and international tourism.",
        "a": "Domestic tourism: residents travelling within their own country (e.g. a Gauteng family visiting Durban).\nRegional tourism: travel between countries in the same region (e.g. SA tourist visiting Mozambique — both in SADC).\nInternational tourism: travel between countries in different regions (e.g. a tourist from Germany visiting SA)."
    },
    {
        "id": 42,
        "unit": "domestic-intl",
        "q": "Why is domestic tourism important for South Africa?",
        "a": "1. Not affected by international crises (e.g. pandemics, exchange rate fluctuations)\n2. Distributes income more evenly across the country\n3. Promotes nation building and social cohesion\n4. Reduces seasonality (South Africans can travel year-round)\n5. Creates awareness of local attractions and heritage\n6. Supports jobs in rural and less-known areas"
    },
    {
        "id": 43,
        "unit": "domestic-intl",
        "q": "What is SADC and name FIVE member countries.",
        "a": "SADC stands for Southern African Development Community. It is a regional organisation promoting economic integration and cooperation.\nMembers include: South Africa, Botswana, Namibia, Mozambique, Zimbabwe, Zambia, Tanzania, Eswatini, Lesotho, Malawi, Mauritius, Madagascar, DRC, Angola, Seychelles, Comoros."
    },
    {
        "id": 44,
        "unit": "domestic-intl",
        "q": "What is a visa and what is the difference between a visa-exempt country and a visa-required country?",
        "a": "A visa is an official endorsement in a passport granting permission to enter, stay, or leave a country for a specified period.\nVisa-exempt: citizens of that country do not need a visa to enter SA (e.g. most SADC countries).\nVisa-required: citizens must apply for and receive a visa before travelling to SA (e.g. China, India, Nigeria)."
    },
    {
        "id": 45,
        "unit": "domestic-intl",
        "q": "What are the main source markets for tourism to South Africa?",
        "a": "Africa: Zimbabwe, Lesotho, Mozambique, Eswatini, Botswana (largest number of arrivals).\nOverseas: United Kingdom, United States, Germany, France, Netherlands, Australia, India, China."
    },
    {
        "id": 46,
        "unit": "domestic-intl",
        "q": "What are FOUR push factors that motivate tourists to travel?",
        "a": "1. Escape from routine — need for a break from daily life\n2. Rest and relaxation — desire to de-stress\n3. Health and fitness — seeking wellness experiences\n4. Adventure and excitement — desire for new experiences\n5. Social interaction — visiting friends and relatives (VFR)\n6. Cultural curiosity — desire to learn about different cultures"
    },
    {
        "id": 47,
        "unit": "domestic-intl",
        "q": "What are FOUR pull factors that attract tourists to a destination?",
        "a": "1. Climate and weather — warm, sunny conditions\n2. Natural beauty — beaches, mountains, wildlife\n3. Cultural attractions — heritage sites, festivals\n4. Value for money — favourable exchange rate\n5. Infrastructure — good transport, quality accommodation\n6. Safety and security — low crime rates"
    },
    {
        "id": 48,
        "unit": "domestic-intl",
        "q": "What is the difference between a passport and a travel document?",
        "a": "A passport is an official government-issued document certifying the holder's identity and citizenship, allowing them to travel internationally.\nA travel document (e.g. a refugee travel document or emergency travel certificate) is issued to people who cannot obtain a regular passport, allowing limited international travel."
    },
    {
        "id": 49,
        "unit": "domestic-intl",
        "q": "How does the exchange rate affect tourism in South Africa?",
        "a": "A weak rand (e.g. R18 = $1) makes SA cheaper for foreign tourists, attracting more visitors (good for inbound tourism). However, it makes it more expensive for South Africans to travel abroad (bad for outbound tourism). A strong rand has the opposite effect."
    },
    {
        "id": 50,
        "unit": "domestic-intl",
        "q": "What is the BEE / B-BBEE policy and how does it relate to tourism?",
        "a": "Broad-Based Black Economic Empowerment (B-BBEE) is a government policy to redress the inequalities of apartheid by promoting the participation of previously disadvantaged South Africans in the economy. In tourism, it encourages black ownership, management, skills development, and employment in tourism businesses."
    },
    {
        "id": 51,
        "unit": "communication",
        "q": "Why is good customer care important in tourism?",
        "a": "1. Creates repeat business — satisfied customers return\n2. Generates positive word-of-mouth and referrals\n3. Builds a good reputation for the business and destination\n4. Increases revenue and profitability\n5. Provides a competitive advantage\n6. Reduces complaints and negative publicity"
    },
    {
        "id": 52,
        "unit": "communication",
        "q": "What are the FOUR types of communication?",
        "a": "1. Verbal communication — spoken words (face-to-face, telephone)\n2. Non-verbal communication — body language, facial expressions, gestures, eye contact\n3. Written communication — emails, letters, brochures, reports\n4. Visual communication — images, signs, symbols, maps, videos"
    },
    {
        "id": 53,
        "unit": "communication",
        "q": "Name FIVE qualities of good customer service in tourism.",
        "a": "1. Friendliness and a positive attitude\n2. Product knowledge — knowing what you are selling\n3. Efficiency — quick and accurate service\n4. Professionalism — neat appearance, punctuality, courtesy\n5. Good communication skills — listening, clear speaking\n6. Cultural sensitivity — respecting different cultures and customs"
    },
    {
        "id": 54,
        "unit": "communication",
        "q": "What is the difference between verbal and non-verbal communication? Give examples relevant to tourism.",
        "a": "Verbal: using spoken or written words. E.g. a tour guide explaining history, a receptionist greeting a guest, an email confirming a booking.\nNon-verbal: communication without words through body language. E.g. smiling at guests, maintaining eye contact, nodding, open body posture, a firm handshake."
    },
    {
        "id": 55,
        "unit": "communication",
        "q": "How should a tourism professional handle a customer complaint?",
        "a": "1. Listen actively — let the customer explain without interrupting\n2. Show empathy — acknowledge their feelings and apologise\n3. Ask questions — clarify the problem\n4. Offer a solution — resolve the issue or escalate if needed\n5. Follow up — ensure the customer is satisfied with the outcome\n6. Document the complaint — for future reference and improvement"
    },
    {
        "id": 56,
        "unit": "communication",
        "q": "What is Ubuntu and how does it apply to tourism?",
        "a": "Ubuntu is a southern African philosophy meaning 'I am because we are.' It emphasises community, compassion, and mutual respect. In tourism, it means treating guests with warmth and hospitality, going beyond just providing a service to making visitors feel welcome and valued — embodying the spirit of South African hospitality."
    },
    {
        "id": 57,
        "unit": "communication",
        "q": "What are the barriers to effective communication in tourism?",
        "a": "1. Language barriers — tourists speaking different languages\n2. Cultural differences — different customs and values\n3. Noise — physical interference preventing clear communication\n4. Assumptions and stereotypes — making judgments about people\n5. Poor listening skills — not paying attention\n6. Technology problems — faulty equipment, no internet"
    },
    {
        "id": 58,
        "unit": "communication",
        "q": "What is a CRM system and how is it used in tourism?",
        "a": "CRM stands for Customer Relationship Management. It is a system (usually software) used to manage interactions with customers, track bookings, store customer preferences and history, send targeted marketing, and improve customer satisfaction and loyalty."
    },
    {
        "id": 59,
        "unit": "communication",
        "q": "Explain the importance of cultural sensitivity in tourism communication.",
        "a": "Cultural sensitivity means being aware of and respecting cultural differences. It is important because: tourists come from diverse backgrounds, gestures/body language may have different meanings in different cultures, dress codes and customs vary, dietary and religious requirements must be accommodated, and misunderstandings can lead to offence and negative experiences."
    },
    {
        "id": 60,
        "unit": "communication",
        "q": "What is the difference between internal and external customers in tourism?",
        "a": "Internal customers: colleagues and employees within the organisation who depend on each other to do their jobs effectively (e.g. housekeeping staff and front desk).\nExternal customers: the tourists, guests, or clients who purchase or use the tourism product or service."
    },
    {
        "id": 61,
        "unit": "sectors",
        "q": "What is the UNWTO and what is its role?",
        "a": "The United Nations World Tourism Organization (UNWTO) is the leading international organisation responsible for the promotion of responsible, sustainable, and universally accessible tourism. It sets global standards, collects tourism statistics, and supports developing countries' tourism sectors."
    },
    {
        "id": 62,
        "unit": "map-work",
        "q": "What is the 24-hour clock and why is it used in tourism?",
        "a": "The 24-hour clock runs from 00:00 (midnight) to 23:59. It is used in tourism (especially in airline and train timetables) to avoid confusion between AM and PM. For example, 1:00 PM = 13:00, 9:30 PM = 21:30."
    },
    {
        "id": 63,
        "unit": "attractions",
        "q": "What is the Cradle of Humankind and why is it significant?",
        "a": "The Cradle of Humankind is a UNESCO World Heritage Site in Gauteng province. It contains a complex of limestone caves (including Sterkfontein) where some of the oldest hominid fossils have been found — dating back over 3.5 million years. It is significant because it provides evidence of human evolution."
    },
    {
        "id": 64,
        "unit": "sustainable",
        "q": "What is the carrying capacity of a tourism destination?",
        "a": "Carrying capacity is the maximum number of tourists a destination can accommodate before negative impacts on the environment, local community, or tourist experience begin to occur. It includes physical, ecological, social, and economic dimensions."
    },
    {
        "id": 65,
        "unit": "domestic-intl",
        "q": "What is INDABA in the context of SA tourism?",
        "a": "Africa's Travel Indaba is one of the largest tourism marketing events on the African continent, held annually in Durban. It showcases the widest variety of Southern Africa's tourism products and attracts international buyers and media."
    },
    {
        "id": 66,
        "unit": "sectors",
        "q": "What is the difference between inbound, outbound, and transit tourism?",
        "a": "Inbound tourism: foreign visitors coming INTO a country (e.g. a UK tourist visiting SA).\nOutbound tourism: residents travelling OUT of their country (e.g. a South African visiting Thailand).\nTransit tourism: tourists passing THROUGH a country on their way to another destination (e.g. stopping in Dubai en route to London)."
    },
    {
        "id": 67,
        "unit": "map-work",
        "q": "What are the key elements of a professional tour itinerary?",
        "a": "1. Tour name and reference number\n2. Dates and duration\n3. Day-by-day breakdown of activities\n4. Transport details (departure/arrival times, mode)\n5. Accommodation details (name, type, grading)\n6. Meals included (B = breakfast, L = lunch, D = dinner)\n7. Costs and what is included/excluded\n8. Emergency contact details"
    },
    {
        "id": 68,
        "unit": "attractions",
        "q": "What is the iSimangaliso Wetland Park and why is it important?",
        "a": "iSimangaliso Wetland Park is a UNESCO World Heritage Site in KwaZulu-Natal. It was SA's first World Heritage Site (1999). It stretches from Kosi Bay to Maphelane and includes lakes, wetlands, coral reefs, and coastal dunes. It is important for biodiversity, including hippos, crocodiles, sea turtles, and over 500 bird species."
    },
    {
        "id": 69,
        "unit": "sustainable",
        "q": "What is the National Responsible Tourism Strategy of South Africa?",
        "a": "It is a strategy aligned with the White Paper on Tourism (1996) that provides guidelines for implementing responsible tourism. Key focus areas: economic benefits for local communities, minimising negative environmental impacts, involving local communities in decision-making, and ensuring safe and fulfilling experiences for tourists."
    },
    {
        "id": 70,
        "unit": "domestic-intl",
        "q": "What are the FOUR main purposes of travel?",
        "a": "1. Leisure/holiday — rest, recreation, sightseeing\n2. Business — conferences, meetings, incentive travel (MICE)\n3. VFR — Visiting Friends and Relatives\n4. Other — medical, religious (pilgrimage), education, sports events"
    }
];

export const quizQuestions: QuizQuestion[] = [
    {
        "id": 1,
        "unit": "sectors",
        "question": "Which organisation is responsible for grading tourism accommodation in South Africa?",
        "options": [
            "South African Tourism",
            "TGCSA",
            "SATSA",
            "Department of Tourism"
        ],
        "correct": 1,
        "explanation": "The Tourism Grading Council of South Africa (TGCSA) is responsible for grading accommodation establishments using a star-rating system (1–5 stars)."
    },
    {
        "id": 2,
        "unit": "sectors",
        "question": "What does the tourism multiplier effect refer to?",
        "options": [
            "Tourists visiting multiple attractions",
            "Tourism revenue circulating through the economy creating additional income and jobs",
            "The multiplication of hotel rooms during peak season",
            "The increase in tourist numbers each year"
        ],
        "correct": 1,
        "explanation": "The multiplier effect occurs when tourist spending circulates through the economy — each round of spending generates further economic activity, creating additional income and employment."
    },
    {
        "id": 3,
        "unit": "sectors",
        "question": "What is the main difference between a travel agent and a tour operator?",
        "options": [
            "Travel agents create packages; tour operators sell them",
            "Tour operators create and package tours; travel agents sell them on behalf of suppliers",
            "There is no difference",
            "Tour operators only work internationally"
        ],
        "correct": 1,
        "explanation": "Tour operators create and package tours by combining transport, accommodation, and activities. Travel agents act as intermediaries, selling these packages and other travel products on behalf of suppliers for commission."
    },
    {
        "id": 4,
        "unit": "sectors",
        "question": "Which of the following is an example of leakage in tourism?",
        "options": [
            "A local guide earning a salary from a community-owned lodge",
            "Profits from a foreign-owned hotel chain being sent back to the home country",
            "A tourist buying handmade crafts from a local market",
            "Government investing tourism revenue in local infrastructure"
        ],
        "correct": 1,
        "explanation": "Leakage occurs when tourism revenue leaves the local economy. When a foreign-owned hotel sends its profits back to its home country, that money is 'leaked' out of the host economy."
    },
    {
        "id": 5,
        "unit": "sectors",
        "question": "Which type of employment is created when a hotel hires a chef?",
        "options": [
            "Indirect employment",
            "Induced employment",
            "Direct employment",
            "Seasonal employment"
        ],
        "correct": 2,
        "explanation": "Direct employment refers to jobs created directly within tourism businesses. A chef working in a hotel is directly employed by a tourism establishment."
    },
    {
        "id": 6,
        "unit": "map-work",
        "question": "What is the IATA code for OR Tambo International Airport in Johannesburg?",
        "options": [
            "CPT",
            "DUR",
            "JNB",
            "ORT"
        ],
        "correct": 2,
        "explanation": "JNB is the IATA code for OR Tambo International Airport in Johannesburg. CPT is Cape Town and DUR is King Shaka (Durban)."
    },
    {
        "id": 7,
        "unit": "map-work",
        "question": "A tourist departs Cape Town at 08:30 and arrives in Johannesburg at 10:30. The distance is approximately 1 400 km by air. What is the flight duration?",
        "options": [
            "1 hour",
            "2 hours",
            "3 hours",
            "14 hours"
        ],
        "correct": 1,
        "explanation": "Flight duration = arrival time minus departure time = 10:30 − 08:30 = 2 hours. This is a domestic flight so no time zone changes apply."
    },
    {
        "id": 8,
        "unit": "map-work",
        "question": "What type of tour involves staying in one place and taking day trips from there?",
        "options": [
            "Multi-centre tour",
            "Open-jaw tour",
            "Single-centre tour",
            "Round trip"
        ],
        "correct": 2,
        "explanation": "A single-centre tour involves tourists staying at one accommodation base and taking day trips to surrounding attractions from that location."
    },
    {
        "id": 9,
        "unit": "map-work",
        "question": "What is a single supplement?",
        "options": [
            "A discount for solo travellers",
            "An extra charge for a solo traveller occupying a double room",
            "A fee for extra luggage",
            "A tax on single-use plastics in hotels"
        ],
        "correct": 1,
        "explanation": "A single supplement is an additional charge that a solo traveller must pay when occupying accommodation designed for two people, as hotels price rooms per room, not per person."
    },
    {
        "id": 10,
        "unit": "map-work",
        "question": "In the 24-hour clock format, what time is 3:45 PM?",
        "options": [
            "03:45",
            "13:45",
            "15:45",
            "17:45"
        ],
        "correct": 2,
        "explanation": "To convert PM time to the 24-hour clock, add 12 to the hours. 3:45 PM = 3 + 12 = 15:45."
    },
    {
        "id": 11,
        "unit": "attractions",
        "question": "Which was South Africa's FIRST UNESCO World Heritage Site?",
        "options": [
            "Robben Island",
            "iSimangaliso Wetland Park",
            "Cradle of Humankind",
            "Table Mountain"
        ],
        "correct": 1,
        "explanation": "The iSimangaliso Wetland Park in KwaZulu-Natal was inscribed as South Africa's first UNESCO World Heritage Site in 1999."
    },
    {
        "id": 12,
        "unit": "attractions",
        "question": "The Cradle of Humankind is located in which province?",
        "options": [
            "KwaZulu-Natal",
            "Limpopo",
            "Gauteng",
            "Mpumalanga"
        ],
        "correct": 2,
        "explanation": "The Cradle of Humankind, which includes the Sterkfontein Caves, is located in Gauteng province, northwest of Johannesburg."
    },
    {
        "id": 13,
        "unit": "attractions",
        "question": "Which of the following is NOT one of the Big Five?",
        "options": [
            "Rhinoceros",
            "Cheetah",
            "Leopard",
            "Buffalo"
        ],
        "correct": 1,
        "explanation": "The Big Five are lion, leopard, rhinoceros, elephant, and buffalo. The cheetah is not one of the Big Five. The name originated from big-game hunters who considered these the five most difficult animals to hunt on foot."
    },
    {
        "id": 14,
        "unit": "attractions",
        "question": "Which type of tourism involves visiting sites related to the struggle against apartheid?",
        "options": [
            "Ecotourism",
            "Adventure tourism",
            "Heritage tourism",
            "Medical tourism"
        ],
        "correct": 2,
        "explanation": "Heritage tourism involves travelling to experience places and activities that represent the stories and people of the past. Visiting struggle sites like Robben Island, the Apartheid Museum, and the Hector Pieterson Memorial is heritage tourism."
    },
    {
        "id": 15,
        "unit": "attractions",
        "question": "The Drakensberg (uKhahlamba) World Heritage Site is known for which of the following?",
        "options": [
            "Gold mining history",
            "San rock art paintings and mountain biodiversity",
            "Marine wildlife and coral reefs",
            "Iron Age settlements"
        ],
        "correct": 1,
        "explanation": "The Drakensberg (uKhahlamba) Park is a mixed World Heritage Site known for its outstanding natural beauty, mountain biodiversity, and the largest concentration of San (Bushman) rock art paintings in Southern Africa."
    },
    {
        "id": 16,
        "unit": "sustainable",
        "question": "What are the THREE pillars of sustainable tourism?",
        "options": [
            "Transport, accommodation, attractions",
            "Marketing, management, maintenance",
            "Economic, social/cultural, environmental",
            "Government, private sector, community"
        ],
        "correct": 2,
        "explanation": "The three pillars of sustainable tourism are economic sustainability, social/cultural sustainability, and environmental sustainability. All three must be balanced for tourism to be truly sustainable."
    },
    {
        "id": 17,
        "unit": "sustainable",
        "question": "What is greenwashing?",
        "options": [
            "Using environmentally friendly cleaning products in hotels",
            "Falsely claiming to be environmentally friendly to attract eco-tourists",
            "Painting tourism buildings green to blend with the environment",
            "A method of water conservation"
        ],
        "correct": 1,
        "explanation": "Greenwashing is when a business falsely claims to be environmentally friendly or sustainable to attract eco-conscious tourists, without actually implementing genuine sustainable practices."
    },
    {
        "id": 18,
        "unit": "sustainable",
        "question": "Which organisation certifies tourism businesses in Southern Africa for meeting fair trade standards?",
        "options": [
            "UNWTO",
            "TGCSA",
            "Fair Trade Tourism",
            "SANParks"
        ],
        "correct": 2,
        "explanation": "Fair Trade Tourism (FTT) is a non-profit organisation that certifies tourism businesses in Southern Africa that meet standards for fair wages, equitable benefit distribution, respect for human rights, and ethical business practices."
    },
    {
        "id": 19,
        "unit": "sustainable",
        "question": "Carrying capacity in tourism refers to:",
        "options": [
            "The maximum luggage weight allowed on a flight",
            "The number of passengers a bus can carry",
            "The maximum number of tourists a destination can handle before negative impacts occur",
            "The weight limit of a cable car"
        ],
        "correct": 2,
        "explanation": "Carrying capacity is the maximum number of tourists a destination can accommodate before negative impacts on the environment, local community, or tourist experience begin to occur."
    },
    {
        "id": 20,
        "unit": "sustainable",
        "question": "Which South African policy document adopted responsible tourism as the guiding principle for the tourism industry?",
        "options": [
            "The Constitution of South Africa",
            "The White Paper on Tourism (1996)",
            "The National Environmental Management Act",
            "The Tourism Act of 2014"
        ],
        "correct": 1,
        "explanation": "The White Paper on the Development and Promotion of Tourism in South Africa (1996) established responsible tourism as the guiding philosophy for the SA tourism industry."
    },
    {
        "id": 21,
        "unit": "domestic-intl",
        "question": "Which of the following is an example of regional tourism?",
        "options": [
            "A Johannesburg resident visiting Cape Town",
            "A tourist from Germany visiting South Africa",
            "A South African visiting Mozambique",
            "A tourist from Japan visiting France"
        ],
        "correct": 2,
        "explanation": "Regional tourism is travel between countries in the same region. South Africa and Mozambique are both in the SADC region, so a South African visiting Mozambique is an example of regional tourism."
    },
    {
        "id": 22,
        "unit": "domestic-intl",
        "question": "Which African country provides the LARGEST number of tourist arrivals to South Africa?",
        "options": [
            "Mozambique",
            "Lesotho",
            "Zimbabwe",
            "Botswana"
        ],
        "correct": 2,
        "explanation": "Zimbabwe consistently provides the largest number of tourist arrivals to South Africa, largely due to its proximity, shared border, and strong cross-border movement for VFR and trade purposes."
    },
    {
        "id": 23,
        "unit": "domestic-intl",
        "question": "A weak South African rand makes the country:",
        "options": [
            "More expensive for foreign tourists",
            "Cheaper for foreign tourists and more expensive for SA tourists going abroad",
            "Cheaper for SA tourists going abroad",
            "Equally affordable for all tourists"
        ],
        "correct": 1,
        "explanation": "A weak rand means foreign currencies have more buying power in SA, making it cheaper for foreign tourists. However, it makes it more expensive for South Africans to travel abroad because they get less foreign currency for their rands."
    },
    {
        "id": 24,
        "unit": "domestic-intl",
        "question": "What does SADC stand for?",
        "options": [
            "South African Development Council",
            "Southern African Development Community",
            "South African Department of Commerce",
            "Southern African Diplomatic Corporation"
        ],
        "correct": 1,
        "explanation": "SADC stands for Southern African Development Community, a regional intergovernmental organisation promoting economic integration and cooperation among its 16 member states."
    },
    {
        "id": 25,
        "unit": "domestic-intl",
        "question": "Which of the following is a push factor in tourism?",
        "options": [
            "Beautiful beaches at the destination",
            "Favourable exchange rate",
            "Desire to escape from daily routine",
            "World-class restaurants at the destination"
        ],
        "correct": 2,
        "explanation": "Push factors are internal motivations that 'push' a tourist away from their home environment. The desire to escape daily routine is a push factor. Beautiful beaches, exchange rates, and restaurants are pull factors that attract tourists to a specific destination."
    },
    {
        "id": 26,
        "unit": "communication",
        "question": "Which of the following is an example of non-verbal communication?",
        "options": [
            "A tour guide explaining the history of a site",
            "A receptionist emailing a booking confirmation",
            "A hotel manager smiling and making eye contact with a guest",
            "A travel agent discussing a package over the phone"
        ],
        "correct": 2,
        "explanation": "Non-verbal communication involves conveying messages without words — through body language, facial expressions, gestures, and eye contact. Smiling and making eye contact are examples of non-verbal communication."
    },
    {
        "id": 27,
        "unit": "communication",
        "question": "What is the FIRST step in handling a customer complaint?",
        "options": [
            "Offer a discount or compensation",
            "Call the manager immediately",
            "Listen actively and let the customer explain",
            "Tell the customer about the company policy"
        ],
        "correct": 2,
        "explanation": "The first step in handling a complaint is to listen actively — let the customer explain their issue fully without interrupting. This shows respect and helps you understand the problem before attempting to resolve it."
    },
    {
        "id": 28,
        "unit": "communication",
        "question": "Ubuntu, as applied to tourism, means:",
        "options": [
            "Using technology to improve customer service",
            "Treating guests with warmth, compassion, and making them feel valued",
            "Offering the cheapest possible rates",
            "Only hiring local community members"
        ],
        "correct": 1,
        "explanation": "Ubuntu ('I am because we are') is a philosophy emphasising community, compassion, and mutual respect. In tourism, it means going beyond basic service to treat guests with genuine warmth and hospitality, making them feel truly welcome."
    },
    {
        "id": 29,
        "unit": "communication",
        "question": "Which of the following is a barrier to effective communication in tourism?",
        "options": [
            "Speaking the same language as the tourist",
            "Making eye contact with the customer",
            "Cultural differences and language barriers",
            "Using clear, simple language"
        ],
        "correct": 2,
        "explanation": "Cultural differences and language barriers are significant obstacles to effective communication in tourism. Different customs, values, and languages can lead to misunderstandings between tourism professionals and guests."
    },
    {
        "id": 30,
        "unit": "communication",
        "question": "What is the difference between internal and external customers?",
        "options": [
            "Internal customers are locals; external customers are foreigners",
            "Internal customers are colleagues within the organisation; external customers are the tourists/guests",
            "Internal customers pay less; external customers pay full price",
            "There is no difference"
        ],
        "correct": 1,
        "explanation": "Internal customers are colleagues and employees within the organisation who depend on each other to deliver good service. External customers are the tourists, guests, or clients who purchase or use the tourism product or service."
    }
];

export const feynmanTopics: FeynmanTopic[] = [
    {
        "id": "1",
        "title": "Tourism Sectors and Their Interdependence",
        "prompt": "Explain tourism sectors and their interdependence.",
        "keyConcepts": [
            "The five main sectors: hospitality, travel, adventure/recreation, attractions, and tourism services",
            "Sectors are interdependent — a tourist needs transport, accommodation, attractions, and services for a complete experience",
            "Travel agents sell products on behalf of suppliers for commission; tour operators create and package tours",
            "TGCSA grades accommodation (1–5 stars); South African Tourism markets SA as a destination",
            "The multiplier effect shows how tourist spending circulates and creates direct, indirect, and induced employment",
            "Leakage reduces economic benefits when revenue leaves the local economy (e.g. foreign-owned businesses)"
        ],
        "examTip": "Be able to explain the multiplier effect with a step-by-step example AND distinguish between direct, indirect, and induced employment. Also know the difference between a travel agent and tour operator — this is frequently tested."
    },
    {
        "id": "2",
        "title": "Map Work, Tour Planning, and Itinerary Design",
        "prompt": "Explain map work, tour planning, and itinerary design.",
        "keyConcepts": [
            "Three types of maps: road maps, topographic maps, and city/street maps — each serves a different purpose",
            "Know the IATA codes for SA's three main airports: JNB, CPT, DUR",
            "Time calculation: Time = Distance ÷ Speed; use the 24-hour clock for all transport timetables",
            "Itineraries must include dates, transport, accommodation (type and grading), meals, activities, and costs",
            "Single-centre tours (one base, day trips) vs. multi-centre tours (multiple stops and accommodations)",
            "Peak season has highest prices; off-peak has lowest; shoulder season falls between the two",
            "A single supplement is an extra charge for solo travellers occupying a double room"
        ],
        "examTip": "Practise reading timetables, calculating travel times, and converting between 12-hour and 24-hour clock formats. Exam questions often ask you to plan or evaluate an itinerary — make sure every element (transport, accommodation, meals, costs) is covered."
    },
    {
        "id": "3",
        "title": "South African Tourism Attractions and Cultural Heritage",
        "prompt": "Explain south african tourism attractions and cultural heritage.",
        "keyConcepts": [
            "Know ALL of South Africa's UNESCO World Heritage Sites — their location, province, and significance",
            "Classify attractions as natural (Table Mountain), cultural (Robben Island), or man-made (Sun City)",
            "Icon attractions are world-famous and synonymous with a destination",
            "The Big Five (lion, leopard, rhino, elephant, buffalo) are a major drawcard for wildlife tourism",
            "Heritage tourism connects visitors with historical stories — especially struggle/apartheid heritage in SA",
            "Tangible heritage is physical (buildings, artefacts); intangible heritage is non-physical (traditions, music, language)",
            "Know at least one major attraction per province"
        ],
        "examTip": "Memorise all SA World Heritage Sites with their provinces. Exam questions frequently ask you to classify attractions or explain the tourism significance of a specific site. Be ready to link attractions to specific niche markets (e.g. adventure tourism, ecotourism)."
    },
    {
        "id": "4",
        "title": "Sustainable and Responsible Tourism Practices",
        "prompt": "Explain sustainable and responsible tourism practices.",
        "keyConcepts": [
            "Sustainable tourism balances three pillars: economic, social/cultural, and environmental",
            "Responsible tourism (SA's White Paper, 1996) requires all stakeholders to take responsibility for tourism impacts",
            "Ecotourism is responsible travel to natural areas that conserves the environment and benefits local communities",
            "Negative environmental impacts include pollution, habitat destruction, carbon emissions, and over-tourism",
            "Positive socio-economic impacts include job creation, improved infrastructure, cultural preservation, and foreign exchange",
            "Carrying capacity is the maximum tourists a site can handle before damage occurs",
            "Greenwashing is falsely claiming to be eco-friendly; Fair Trade Tourism certifies genuinely responsible businesses"
        ],
        "examTip": "Be able to discuss BOTH positive AND negative impacts of tourism across all three pillars. Know how to suggest practical solutions to negative impacts. The concept of carrying capacity and the difference between sustainable and responsible tourism are frequently examined."
    },
    {
        "id": "5",
        "title": "Domestic, Regional, and International Tourism Dynamics",
        "prompt": "Explain domestic, regional, and international tourism dynamics.",
        "keyConcepts": [
            "Domestic = within own country; Regional = within same region (e.g. SADC); International = between different regions",
            "Domestic tourism is crucial: not affected by international crises, reduces seasonality, promotes nation building",
            "SADC has 16 member states; most provide visa-exempt entry to SA",
            "Main source markets: Africa (Zimbabwe, Lesotho, Mozambique) and overseas (UK, USA, Germany)",
            "Push factors motivate tourists to leave home; pull factors attract them to a specific destination",
            "Exchange rates affect tourism flows: weak rand benefits inbound tourism, hurts outbound tourism",
            "B-BBEE promotes transformation and inclusion of previously disadvantaged South Africans in tourism"
        ],
        "examTip": "Know the difference between push and pull factors and be able to give examples of each. Understand how exchange rate fluctuations affect both inbound and outbound tourism. Questions about the importance of domestic tourism and SA's main source markets appear regularly."
    },
    {
        "id": "6",
        "title": "Communication and Customer Care in Tourism",
        "prompt": "Explain communication and customer care in tourism.",
        "keyConcepts": [
            "Four types of communication: verbal, non-verbal, written, and visual",
            "Good customer care creates repeat business, positive word-of-mouth, and a competitive advantage",
            "Handling complaints: listen, empathise, clarify, solve, follow up, document",
            "Ubuntu philosophy in tourism: treating guests with genuine warmth, compassion, and respect",
            "Communication barriers include language differences, cultural misunderstandings, noise, and assumptions",
            "Cultural sensitivity is essential — gestures, dress codes, and customs vary across cultures",
            "Internal customers (colleagues) and external customers (tourists/guests) both need excellent service"
        ],
        "examTip": "Be ready to explain the steps for handling a customer complaint in the correct order. Ubuntu is a favourite exam topic — explain it with practical tourism examples. Know the difference between verbal and non-verbal communication with tourism-specific examples."
    }
];
