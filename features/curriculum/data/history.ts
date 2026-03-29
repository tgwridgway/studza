import type { Flashcard, QuizQuestion, FeynmanTopic } from "@/features/curriculum/types";

export const flashcards: Flashcard[] = [
  // --- The Cold War ---
  {
    id: 1,
    unit: "cold-war",
    q: "What was the Cold War?",
    a: "An ideological, political, and economic struggle between the USA (capitalism/democracy) and the USSR (communism/one-party state) from 1945 to 1991. It was called 'cold' because the two superpowers never fought each other directly.",
  },
  {
    id: 2,
    unit: "cold-war",
    q: "What were the origins of the Cold War?",
    a: "After WWII, the wartime alliance between the USA and USSR broke down due to ideological differences (capitalism vs. communism), mutual distrust, and competing visions for post-war Europe. The Yalta and Potsdam Conferences (1945) revealed growing tensions.",
  },
  {
    id: 3,
    unit: "cold-war",
    q: "What was the Truman Doctrine (1947)?",
    a: "US President Truman's policy of containment — the USA would provide military and economic aid to any country threatened by communism. It was a response to communist threats in Greece and Turkey and marked the start of active US involvement in the Cold War.",
  },
  {
    id: 4,
    unit: "cold-war",
    q: "What was the Marshall Plan (1948)?",
    a: "A US economic aid programme providing $13 billion to help rebuild Western European economies after WWII. Its aim was to prevent the spread of communism by reducing poverty and instability. The USSR rejected it and set up COMECON as a rival.",
  },
  {
    id: 5,
    unit: "cold-war",
    q: "What was the Berlin Blockade (1948-1949)?",
    a: "Stalin blocked all road, rail, and canal access to West Berlin to force the Western Allies out. The USA and Britain responded with the Berlin Airlift, flying in supplies for 11 months. Stalin lifted the blockade in May 1949. It led to the formation of NATO.",
  },
  {
    id: 6,
    unit: "cold-war",
    q: "What were NATO and the Warsaw Pact?",
    a: "NATO (North Atlantic Treaty Organisation, 1949) was a Western military alliance led by the USA. The Warsaw Pact (1955) was the Soviet-led Eastern Bloc military alliance. They represented the military division of Europe into two hostile camps.",
  },
  {
    id: 7,
    unit: "cold-war",
    q: "What was the Cuban Missile Crisis (1962)?",
    a: "The USSR placed nuclear missiles in Cuba, 145 km from the USA. President Kennedy imposed a naval blockade. For 13 days the world was on the brink of nuclear war. Khrushchev agreed to remove the missiles; the USA secretly agreed to remove missiles from Turkey and not invade Cuba.",
  },
  {
    id: 8,
    unit: "cold-war",
    q: "What was the policy of détente?",
    a: "A period of easing tensions between the USA and USSR during the 1970s. Key features included SALT I (1972) and SALT II (1979) arms limitation treaties, the Helsinki Accords (1975), and increased trade and cultural exchanges.",
  },
  {
    id: 9,
    unit: "cold-war",
    q: "What was the nuclear arms race?",
    a: "A competition between the USA and USSR to build more and more powerful nuclear weapons. The USA developed the atomic bomb (1945), the USSR followed (1949). Both developed hydrogen bombs (1950s). The doctrine of MAD (Mutually Assured Destruction) prevented direct war.",
  },
  {
    id: 10,
    unit: "cold-war",
    q: "What was the significance of the Berlin Wall (1961)?",
    a: "Built by East Germany (with Soviet backing) to stop the mass exodus of East Germans to the West. It became the most powerful symbol of the Iron Curtain and the division of Europe into communist East and capitalist West.",
  },
  {
    id: 11,
    unit: "cold-war",
    q: "What were proxy wars?",
    a: "Conflicts in which the USA and USSR supported opposing sides without fighting each other directly. Examples include the Korean War (1950-1953), the Vietnam War (1955-1975), and various conflicts in Africa, Asia, and Latin America.",
  },
  {
    id: 12,
    unit: "cold-war",
    q: "What was the Non-Aligned Movement (NAM)?",
    a: "Founded in 1961 at the Belgrade Conference, NAM was a group of states (mostly from Africa, Asia, and Latin America) that chose not to formally align with either the USA or USSR. Key leaders included Nehru (India), Nasser (Egypt), and Tito (Yugoslavia).",
  },

  // --- How the Cold War Affected Africa ---
  {
    id: 13,
    unit: "cold-war-africa",
    q: "How did the Cold War affect the process of decolonisation in Africa?",
    a: "Both superpowers supported African liberation movements to gain influence. The USA and USSR competed for allies among newly independent states, often providing military aid, economic assistance, and ideological support. This sometimes prolonged conflicts and created instability.",
  },
  {
    id: 14,
    unit: "cold-war-africa",
    q: "Describe the Congo Crisis (1960-1965).",
    a: "After independence from Belgium (June 1960), the Congo descended into chaos. Katanga province seceded under Tshombe (backed by Belgium). PM Lumumba sought Soviet help and was overthrown and assassinated (1961). Mobutu seized power with US/CIA backing and ruled as a dictator until 1997.",
  },
  {
    id: 15,
    unit: "cold-war-africa",
    q: "Who was Patrice Lumumba?",
    a: "The first democratically elected Prime Minister of the Congo (1960). He was a Pan-Africanist who sought to unite the country. When Belgium backed the secession of Katanga, he turned to the USSR for help. He was overthrown, captured, and assassinated in January 1961 with the involvement of Belgium and the CIA.",
  },
  {
    id: 16,
    unit: "cold-war-africa",
    q: "How did the Cold War affect Angola?",
    a: "After independence from Portugal (1975), a civil war erupted between the MPLA (Soviet/Cuban-backed), UNITA (US/South African-backed), and FNLA. Cuba sent 36,000 troops. South Africa invaded. The war lasted until 2002 and devastated the country.",
  },
  {
    id: 17,
    unit: "cold-war-africa",
    q: "What was the role of Cuba in Africa during the Cold War?",
    a: "Cuba, as a Soviet ally, sent troops and advisors to several African countries. Most significantly, Cuba sent over 36,000 troops to Angola to support the MPLA government. Cuban forces were also involved in Ethiopia and supported liberation movements across the continent.",
  },
  {
    id: 18,
    unit: "cold-war-africa",
    q: "Describe the Angolan Civil War and the role of superpowers.",
    a: "Three liberation movements fought for control: MPLA (Marxist, backed by USSR and Cuba), UNITA (backed by USA and South Africa), and FNLA (backed by USA, China, Zaire). The war became a major Cold War proxy conflict in Africa, lasting from 1975 to 2002.",
  },
  {
    id: 19,
    unit: "cold-war-africa",
    q: "What was the Battle of Cuito Cuanavale (1987-1988)?",
    a: "A major battle in Angola between South African/UNITA forces and Angolan/Cuban/Soviet forces. It was the largest battle in Africa since WWII. It ended in a military stalemate but led to the New York Accords (1988): Cuban withdrawal from Angola and Namibian independence.",
  },
  {
    id: 20,
    unit: "cold-war-africa",
    q: "How did the Cold War affect Mozambique?",
    a: "After independence from Portugal (1975), the Marxist FRELIMO government was supported by the USSR. RENAMO, a rebel movement backed by Rhodesia and later South Africa, waged a devastating civil war (1977-1992) that killed over 1 million people.",
  },
  {
    id: 21,
    unit: "cold-war-africa",
    q: "Why did the USA support dictators in Africa during the Cold War?",
    a: "The USA prioritised anti-communism over democracy. It supported dictators like Mobutu (Congo/Zaire) because they were anti-communist, regardless of their human rights records. This policy was driven by the fear that communist governments would spread Soviet influence.",
  },
  {
    id: 22,
    unit: "cold-war-africa",
    q: "What was the impact of the Cold War on African development?",
    a: "The Cold War caused devastating proxy wars, fuelled arms races, propped up dictators, diverted resources from development, increased debt, and left a legacy of political instability, landmines, and displaced populations across the continent.",
  },
  {
    id: 23,
    unit: "cold-war-africa",
    q: "How did the Cold War affect the Horn of Africa (Ethiopia and Somalia)?",
    a: "Ethiopia shifted from US to Soviet ally after the 1974 revolution (Mengistu's Derg regime). Somalia then switched from Soviet to US backing. The Ogaden War (1977-1978) between Ethiopia and Somalia became a Cold War proxy conflict, with the USSR and Cuba supporting Ethiopia.",
  },

  // --- Civil Society Resistance (1950s-1970s) ---
  {
    id: 24,
    unit: "civil-resistance",
    q: "What was the Defiance Campaign (1952)?",
    a: "A mass civil disobedience campaign organised by the ANC and SAIC. Volunteers deliberately broke unjust apartheid laws (pass laws, curfews, segregation) and courted arrest. Over 8,500 people were arrested. ANC membership grew from 7,000 to 100,000.",
  },
  {
    id: 25,
    unit: "civil-resistance",
    q: "What was the Freedom Charter (1955)?",
    a: "Adopted at the Congress of the People in Kliptown on 26 June 1955. It set out a vision for a non-racial, democratic South Africa. Key demands: equal rights, land redistribution, nationalisation of mines/banks, free education. It became the guiding document of the anti-apartheid movement.",
  },
  {
    id: 26,
    unit: "civil-resistance",
    q: "What was the Treason Trial (1956-1961)?",
    a: "156 leaders of the Congress Alliance (including Mandela, Sisulu, Tambo, Luthuli) were arrested and charged with high treason for allegedly plotting a communist revolution. After a 4.5-year trial, all were acquitted. It showed the apartheid government's determination to crush opposition.",
  },
  {
    id: 27,
    unit: "civil-resistance",
    q: "What happened at Sharpeville on 21 March 1960?",
    a: "The PAC organised a peaceful protest against pass laws at Sharpeville police station. Police opened fire on the unarmed crowd, killing 69 people and wounding 180. Many were shot in the back. It led to international condemnation, a state of emergency, and the banning of the ANC and PAC.",
  },
  {
    id: 28,
    unit: "civil-resistance",
    q: "What was the significance of the Sharpeville Massacre?",
    a: "It was a turning point in the struggle. Consequences: state of emergency declared; ANC and PAC banned; international condemnation and sanctions; South Africa left the Commonwealth (1961); ANC and PAC turned to armed struggle (MK and APLA); 21 March became Human Rights Day.",
  },
  {
    id: 29,
    unit: "civil-resistance",
    q: "What was Umkhonto we Sizwe (MK)?",
    a: "The armed wing of the ANC, formed on 16 December 1961 with Nelson Mandela as its first commander. It carried out sabotage attacks on government installations, power lines, and pass offices. It initially adopted a policy of sabotage (not targeting people).",
  },
  {
    id: 30,
    unit: "civil-resistance",
    q: "What was the Rivonia Trial (1963-1964)?",
    a: "Leaders of MK (including Mandela, Sisulu, Mbeki, Kathrada) were arrested at Liliesleaf Farm in Rivonia and charged with sabotage and plotting to overthrow the government. Mandela made his famous 'I am prepared to die' speech. Eight were sentenced to life imprisonment on Robben Island.",
  },
  {
    id: 31,
    unit: "civil-resistance",
    q: "What was the role of the PAC and Robert Sobukwe?",
    a: "The PAC (Pan Africanist Congress) broke away from the ANC in 1959 under Robert Sobukwe. It rejected the Freedom Charter's multi-racialism, advocating Africanism — 'Africa for Africans.' Sobukwe led the anti-pass campaign that led to Sharpeville. He was imprisoned and held under the 'Sobukwe Clause.'",
  },
  {
    id: 32,
    unit: "civil-resistance",
    q: "What was the Black Consciousness Movement (BCM)?",
    a: "A movement led by Steve Biko in the late 1960s-1970s. It aimed to raise the psychological and political consciousness of black South Africans, promoting self-reliance, pride, and rejection of white liberal paternalism. Key organisations: SASO (1968) and BPC (1972).",
  },
  {
    id: 33,
    unit: "civil-resistance",
    q: "Who was Steve Biko?",
    a: "Founder and key leader of the Black Consciousness Movement. He formed SASO (South African Students' Organisation) in 1968 and BPC (Black People's Convention) in 1972. He was banned in 1973, arrested in August 1977, and died in police detention on 12 September 1977 from brain injuries sustained during interrogation.",
  },
  {
    id: 34,
    unit: "civil-resistance",
    q: "What was the Soweto Uprising (16 June 1976)?",
    a: "Students in Soweto protested against the compulsory use of Afrikaans as a medium of instruction. Police opened fire on the peaceful march. Hector Pieterson (13) was among the first killed. The uprising spread nationwide. Over 700 people were killed. 16 June is now Youth Day.",
  },
  {
    id: 35,
    unit: "civil-resistance",
    q: "What was the significance of the Soweto Uprising?",
    a: "It reignited mass resistance after the 'quiet' 1960s. It led to: international condemnation and increased sanctions; thousands of youth fleeing to join MK in exile; the UN arms embargo (1977); renewed energy in the liberation struggle; recognition that apartheid could not be sustained.",
  },

  // --- Apartheid South Africa (1960s-1980s) ---
  {
    id: 36,
    unit: "apartheid",
    q: "What was the apartheid government's response after Sharpeville (1960)?",
    a: "Declared a state of emergency; detained 18,000 people; banned the ANC and PAC (Unlawful Organisations Act, 1960); introduced the Sabotage Act (1962) and 90-day detention without trial; strengthened security legislation to crush opposition.",
  },
  {
    id: 37,
    unit: "apartheid",
    q: "What was the Bantustan/Homeland policy?",
    a: "The apartheid government created 10 'homelands' for different black ethnic groups (e.g., Transkei, Bophuthatswana, Venda, Ciskei). The aim was to deny black South Africans citizenship by making them 'citizens' of homelands. Four were given 'independence' (TBVC states), which no other country recognised.",
  },
  {
    id: 38,
    unit: "apartheid",
    q: "What was Total Strategy?",
    a: "Introduced by PM P.W. Botha in the late 1970s. It combined military force with limited reforms to counter the 'total onslaught' — the perceived communist-backed revolutionary threat. It involved: increased military spending, cross-border raids, destabilisation of neighbouring states, and cosmetic reforms.",
  },
  {
    id: 39,
    unit: "apartheid",
    q: "What was the Tricameral Parliament (1983)?",
    a: "P.W. Botha's constitutional reform creating three chambers: House of Assembly (whites), House of Representatives (coloureds), House of Delegates (Indians). Black people were completely excluded. It was rejected by the UDF and most coloured and Indian voters — only 30% and 20% voter turnout respectively.",
  },
  {
    id: 40,
    unit: "apartheid",
    q: "What was the United Democratic Front (UDF)?",
    a: "Formed on 20 August 1983 to oppose the Tricameral Parliament. It was a broad coalition of over 600 anti-apartheid organisations (civic groups, trade unions, churches, student groups). It adopted the Freedom Charter and became the internal wing of the liberation movement.",
  },
  {
    id: 41,
    unit: "apartheid",
    q: "What was the role of the South African Council of Churches (SACC)?",
    a: "The SACC, under leaders like Desmond Tutu, played a major role in opposing apartheid on moral and religious grounds. Tutu won the Nobel Peace Prize in 1984. The SACC provided support to victims of apartheid, spoke out internationally, and called for sanctions.",
  },
  {
    id: 42,
    unit: "apartheid",
    q: "What were the States of Emergency (1985-1990)?",
    a: "Declared by P.W. Botha in response to growing township unrest. Thousands detained without trial, severe media restrictions, troops deployed in townships. Over 30,000 people detained between 1986-1989. The government used extreme force to suppress resistance.",
  },
  {
    id: 43,
    unit: "apartheid",
    q: "Describe the international anti-apartheid movement.",
    a: "Growing international opposition included: UN resolutions condemning apartheid; mandatory arms embargo (1977); economic sanctions and disinvestment; sports and cultural boycotts; the Free Mandela campaign; Anti-Apartheid Movements in many countries; pressure from organisations like the AAM (UK).",
  },
  {
    id: 44,
    unit: "apartheid",
    q: "What was South Africa's policy of destabilisation in the region?",
    a: "The apartheid government attacked and destabilised neighbouring Frontline States to: destroy ANC bases; prevent support for the liberation movement; maintain regional dominance. Methods included military raids, support for rebel movements (RENAMO in Mozambique, UNITA in Angola), and economic pressure.",
  },
  {
    id: 45,
    unit: "apartheid",
    q: "What was the Comprehensive Anti-Apartheid Act (1986)?",
    a: "Passed by the US Congress (overriding President Reagan's veto), it imposed economic sanctions on South Africa including bans on new investments, bank loans, and imports of key products. It was a significant blow to the apartheid government's international standing.",
  },
  {
    id: 46,
    unit: "apartheid",
    q: "What was the role of COSATU in the 1980s?",
    a: "COSATU (Congress of South African Trade Unions), formed in 1985, used worker power to fight apartheid through strikes, stayaways, and consumer boycotts. It aligned with the UDF and ANC. Key leaders included Elijah Barayi and Jay Naidoo.",
  },
  {
    id: 47,
    unit: "apartheid",
    q: "Describe the township uprisings of the 1980s.",
    a: "From 1984, widespread unrest erupted in townships across South Africa, triggered by the Tricameral Parliament and socio-economic grievances. Features included rent boycotts, school boycotts, consumer boycotts, attacks on councillors, 'necklacing,' and running battles with security forces.",
  },

  // --- End of the Cold War & New World Order ---
  {
    id: 48,
    unit: "end-cold-war",
    q: "Who was Mikhail Gorbachev and what reforms did he introduce?",
    a: "Soviet leader from 1985. He introduced glasnost (openness — freedom of speech and press) and perestroika (restructuring — economic reforms and limited free market). These reforms were intended to modernise the USSR but ultimately led to its collapse.",
  },
  {
    id: 49,
    unit: "end-cold-war",
    q: "What was glasnost?",
    a: "Gorbachev's policy of 'openness' (from 1985). It allowed freedom of speech, press freedom, release of political prisoners, and open discussion of Soviet history and problems. It exposed decades of corruption, inefficiency, and human rights abuses.",
  },
  {
    id: 50,
    unit: "end-cold-war",
    q: "What was perestroika?",
    a: "Gorbachev's policy of 'restructuring' the Soviet economy (from 1985). It introduced limited free market elements, reduced central planning, allowed some private enterprise, and sought to modernise Soviet industry. It caused short-term economic disruption and hardship.",
  },
  {
    id: 51,
    unit: "end-cold-war",
    q: "When and why did the Berlin Wall fall?",
    a: "The Berlin Wall fell on 9 November 1989. Causes: Gorbachev's reforms inspired Eastern Europeans; Hungary opened its border (allowing East Germans to flee via Austria); mass protests in East Germany; the East German government opened the Wall under pressure. It symbolised the end of the Cold War.",
  },
  {
    id: 52,
    unit: "end-cold-war",
    q: "How did the USSR collapse?",
    a: "Glasnost and perestroika unleashed forces Gorbachev couldn't control. Baltic states (Lithuania, Latvia, Estonia) declared independence. A failed coup in August 1991 weakened Gorbachev. Boris Yeltsin emerged as Russian leader. On 25 December 1991, Gorbachev resigned and the USSR was formally dissolved.",
  },
  {
    id: 53,
    unit: "end-cold-war",
    q: "What was the 'New World Order'?",
    a: "A term used by US President George H.W. Bush after the Cold War. It referred to a unipolar world dominated by the USA, with hopes for international cooperation, democracy, and peace. In practice, new challenges emerged: ethnic conflicts, terrorism, failed states, and US unilateralism.",
  },
  {
    id: 54,
    unit: "end-cold-war",
    q: "What happened in Eastern Europe in 1989?",
    a: "A wave of revolutions swept through Eastern Europe: Poland (Solidarity won elections), Hungary (opened borders), East Germany (Berlin Wall fell), Czechoslovakia (Velvet Revolution), Romania (Ceausescu overthrown and executed), Bulgaria (communist leader ousted). All abandoned communism.",
  },
  {
    id: 55,
    unit: "end-cold-war",
    q: "What was the significance of the fall of the Berlin Wall for Africa?",
    a: "The end of the Cold War removed superpower rivalry from Africa. Proxy wars lost external support and many ended. Dictators lost superpower backing. It created space for democratisation and peace processes, including in South Africa, Namibia, Mozambique, and Angola.",
  },
  {
    id: 56,
    unit: "end-cold-war",
    q: "How did the end of the Cold War affect South Africa?",
    a: "The ANC could no longer be branded as a communist threat. The apartheid government lost its strategic value as a Western anti-communist ally. International pressure for change increased. Cuban forces withdrew from Angola (1988). Namibia gained independence (1990). These factors contributed to negotiations.",
  },
  {
    id: 57,
    unit: "end-cold-war",
    q: "What were the consequences of the end of the Cold War for global politics?",
    a: "The USA became the sole superpower (unipolar world). NATO expanded eastward. The UN became more active. New conflicts emerged (Yugoslavia, Rwanda, Somalia). Globalisation accelerated. New threats: terrorism, failed states, WMD proliferation. The 'peace dividend' was short-lived.",
  },

  // --- Negotiated Settlement in South Africa ---
  {
    id: 58,
    unit: "negotiated-settlement",
    q: "Why did the apartheid government agree to negotiate?",
    a: "Multiple pressures: international sanctions crippling the economy; military stalemate (Cuito Cuanavale); end of Cold War removed 'communist threat' justification; growing internal resistance (UDF, COSATU, township uprisings); realisation apartheid was unsustainable; P.W. Botha's stroke led to F.W. de Klerk's leadership.",
  },
  {
    id: 59,
    unit: "negotiated-settlement",
    q: "What did F.W. de Klerk announce on 2 February 1990?",
    a: "In his opening of Parliament speech, De Klerk announced: the unbanning of the ANC, PAC, SACP, and other organisations; the release of Nelson Mandela; the lifting of the state of emergency; the end of media restrictions; a moratorium on executions. This opened the way for negotiations.",
  },
  {
    id: 60,
    unit: "negotiated-settlement",
    q: "When was Nelson Mandela released?",
    a: "Nelson Mandela was released from Victor Verster Prison on 11 February 1990, after 27 years of imprisonment. His release was a pivotal moment that signalled the beginning of South Africa's transition to democracy.",
  },
  {
    id: 61,
    unit: "negotiated-settlement",
    q: "What was CODESA?",
    a: "The Convention for a Democratic South Africa. CODESA 1 (December 1991) brought together 19 parties to negotiate a new constitution. CODESA 2 (May 1992) collapsed over disagreements about power-sharing, the percentage needed for constitutional changes, and regional powers.",
  },
  {
    id: 62,
    unit: "negotiated-settlement",
    q: "What was the Boipatong Massacre (June 1992)?",
    a: "IFP supporters, allegedly assisted by security forces, attacked residents of Boipatong township, killing 46 people. The ANC withdrew from CODESA negotiations, accusing the government of complicity. It was a major setback for the negotiation process.",
  },
  {
    id: 63,
    unit: "negotiated-settlement",
    q: "What was the Bisho Massacre (September 1992)?",
    a: "ANC supporters marched on Bisho (Ciskei homeland capital) demanding the overthrow of the homeland government. Ciskei Defence Force soldiers opened fire, killing 29 people. It shocked both sides and helped push them back to negotiations.",
  },
  {
    id: 64,
    unit: "negotiated-settlement",
    q: "What was the Record of Understanding (September 1992)?",
    a: "An agreement between Mandela and De Klerk after the Boipatong and Bisho massacres. It addressed: the release of political prisoners, fencing of hostels, banning of dangerous weapons at public gatherings. It sidelined the IFP and marked bilateral ANC-NP negotiations.",
  },
  {
    id: 65,
    unit: "negotiated-settlement",
    q: "What was the Multi-Party Negotiating Process (MPNP)?",
    a: "Resumed negotiations at the World Trade Centre in Kempton Park (April 1993). It replaced CODESA and included 26 parties. It produced the Interim Constitution and set the date for the first democratic elections: 27 April 1994.",
  },
  {
    id: 66,
    unit: "negotiated-settlement",
    q: "Who was Chris Hani and what was the impact of his assassination?",
    a: "Chris Hani was the leader of the SACP and former MK chief of staff, hugely popular among the youth. He was assassinated on 10 April 1993 by Janusz Walus (linked to the Conservative Party). His death nearly derailed negotiations but Mandela's televised appeal for calm prevented widespread violence.",
  },
  {
    id: 67,
    unit: "negotiated-settlement",
    q: "Describe the role of violence and the 'third force' during negotiations.",
    a: "A 'third force' within the security establishment was alleged to be fuelling violence between ANC and IFP supporters to destabilise negotiations. Train violence, hostel attacks, and township massacres killed thousands. The Goldstone Commission investigated and confirmed evidence of a third force.",
  },
  {
    id: 68,
    unit: "negotiated-settlement",
    q: "What happened on 27 April 1994?",
    a: "South Africa's first democratic elections were held over four days (26-29 April). Over 19 million South Africans voted. The ANC won 62.65% of the vote. The NP won 20.39%, and the IFP 10.54%. Nelson Mandela was inaugurated as president on 10 May 1994.",
  },
  {
    id: 69,
    unit: "negotiated-settlement",
    q: "What was the Government of National Unity (GNU)?",
    a: "The Interim Constitution required parties winning more than 5% of the vote to be included in a Government of National Unity. The ANC, NP, and IFP formed the GNU. Mandela was president, with De Klerk and Thabo Mbeki as deputy presidents.",
  },
  {
    id: 70,
    unit: "negotiated-settlement",
    q: "What was the Truth and Reconciliation Commission (TRC)?",
    a: "Established in 1996 under Archbishop Desmond Tutu. Its purpose was to investigate human rights abuses during apartheid (1960-1994), give victims a chance to tell their stories, and grant amnesty to perpetrators who made full disclosure of politically motivated acts. It aimed for restorative justice rather than retribution.",
  },
  {
    id: 71,
    unit: "negotiated-settlement",
    q: "What role did Mandela and De Klerk play in the negotiated settlement?",
    a: "Both showed political courage and willingness to compromise. They jointly received the Nobel Peace Prize in 1993. Mandela reassured whites and called for reconciliation. De Klerk dismantled apartheid structures and agreed to democratic elections. Their leadership was essential to a peaceful transition.",
  },
  {
    id: 72,
    unit: "negotiated-settlement",
    q: "What challenges threatened to derail the negotiation process?",
    a: "Major threats included: political violence (third force); the Boipatong and Bisho massacres; Chris Hani's assassination; right-wing resistance (AWB, Afrikaner Volksfront); IFP boycott threats; homeland leaders resisting reincorporation; mutual distrust between parties; spoiler elements on all sides.",
  },
  {
    id: 73,
    unit: "civil-resistance",
    q: "What was the Congress Alliance?",
    a: "A coalition of anti-apartheid organisations formed in the 1950s: the ANC, South African Indian Congress (SAIC), Coloured People's Congress (CPC), Congress of Democrats (COD — white), and South African Congress of Trade Unions (SACTU). They organised the Congress of the People (1955).",
  },
  {
    id: 74,
    unit: "civil-resistance",
    q: "What was the Women's March on 9 August 1956?",
    a: "20,000 women of all races marched to the Union Buildings in Pretoria to protest against the extension of pass laws to women. Led by Lillian Ngoyi, Helen Joseph, Rahima Moosa, and Sophie Williams. They presented petitions to PM Strijdom's office. 9 August is now National Women's Day.",
  },
  {
    id: 75,
    unit: "apartheid",
    q: "What was the Rubicon Speech (August 1985)?",
    a: "P.W. Botha was expected to announce major reforms but instead delivered a defiant, finger-wagging speech refusing to release Mandela or share power. International investors panicked, the rand crashed, and banks recalled loans. It demonstrated Botha's unwillingness to negotiate meaningfully.",
  },
  {
    id: 76,
    unit: "apartheid",
    q: "What was 'constructive engagement'?",
    a: "US President Reagan and UK PM Thatcher's policy of maintaining diplomatic and economic ties with apartheid South Africa while privately encouraging reform. Critics argued it gave legitimacy to the apartheid regime and delayed change.",
  },
];

export const quizQuestions: QuizQuestion[] = [
  // --- The Cold War ---
  {
    id: 1,
    unit: "cold-war",
    question: "What two ideologies defined the Cold War conflict?",
    options: [
      "Fascism vs. democracy",
      "Capitalism vs. communism",
      "Socialism vs. feudalism",
      "Nationalism vs. imperialism",
    ],
    correct: 1,
    explanation:
      "The Cold War was fundamentally an ideological struggle between the USA's capitalism/liberal democracy and the USSR's communism/one-party state.",
  },
  {
    id: 2,
    unit: "cold-war",
    question: "What was the purpose of the Marshall Plan (1948)?",
    options: [
      "To rebuild Soviet industry after WWII",
      "To provide US economic aid to Western Europe to prevent the spread of communism",
      "To create a military alliance against the USSR",
      "To establish the United Nations",
    ],
    correct: 1,
    explanation:
      "The Marshall Plan provided $13 billion to rebuild Western European economies after WWII, aiming to prevent communism by reducing poverty and instability that might make people receptive to communist ideas.",
  },
  {
    id: 3,
    unit: "cold-war",
    question: "How was the Berlin Blockade (1948-1949) resolved?",
    options: [
      "The Western Allies withdrew from Berlin",
      "The USA threatened nuclear attack",
      "The Western Allies organised the Berlin Airlift for 11 months",
      "The UN negotiated a ceasefire",
    ],
    correct: 2,
    explanation:
      "The USA and Britain flew supplies into West Berlin for 11 months (Berlin Airlift), eventually forcing Stalin to lift the blockade in May 1949.",
  },
  {
    id: 4,
    unit: "cold-war",
    question: "What was the doctrine of MAD?",
    options: [
      "Military Alliance for Defence",
      "Mutual Aid and Development",
      "Mutually Assured Destruction",
      "Maximum Armament Deployment",
    ],
    correct: 2,
    explanation:
      "MAD (Mutually Assured Destruction) meant that both superpowers had enough nuclear weapons to destroy each other completely, making direct war irrational and preventing a 'hot' war.",
  },
  {
    id: 5,
    unit: "cold-war",
    question:
      "What was the Cuban Missile Crisis (1962) and how was it resolved?",
    options: [
      "Cuba invaded the USA; resolved by NATO intervention",
      "The USSR placed nuclear missiles in Cuba; resolved when Khrushchev agreed to remove them after Kennedy imposed a naval blockade",
      "The USA invaded Cuba; resolved by UN peacekeepers",
      "Cuba blockaded US shipping; resolved by diplomacy",
    ],
    correct: 1,
    explanation:
      "The USSR placed nuclear missiles in Cuba. Kennedy imposed a naval blockade. After 13 days on the brink of nuclear war, Khrushchev removed the missiles; the USA secretly agreed to remove missiles from Turkey and not invade Cuba.",
  },
  {
    id: 6,
    unit: "cold-war",
    question: "What was the Non-Aligned Movement (NAM)?",
    options: [
      "A secret pact between the USA and USSR",
      "A group of states that chose not to formally align with either superpower",
      "A European trade organisation",
      "A nuclear disarmament campaign",
    ],
    correct: 1,
    explanation:
      "NAM was founded in 1961 at the Belgrade Conference. Member states (mostly from Africa, Asia, and Latin America) refused to formally align with either the USA or USSR during the Cold War.",
  },

  // --- How the Cold War Affected Africa ---
  {
    id: 7,
    unit: "cold-war-africa",
    question: "What happened to Patrice Lumumba?",
    options: [
      "He ruled the Congo for 30 years",
      "He was overthrown and assassinated in January 1961 with CIA and Belgian involvement",
      "He voluntarily went into exile",
      "He became the leader of a united Congo",
    ],
    correct: 1,
    explanation:
      "Lumumba, the Congo's first elected PM, was overthrown, captured, and assassinated in January 1961. Belgium and the CIA were involved in his removal because he had turned to the USSR for help.",
  },
  {
    id: 8,
    unit: "cold-war-africa",
    question:
      "In the Angolan Civil War, which movement was backed by the USSR and Cuba?",
    options: ["UNITA", "FNLA", "MPLA", "RENAMO"],
    correct: 2,
    explanation:
      "The MPLA (People's Movement for the Liberation of Angola) was the Marxist movement backed by the USSR and Cuba. UNITA was backed by the USA and South Africa, and the FNLA by the USA, China, and Zaire.",
  },
  {
    id: 9,
    unit: "cold-war-africa",
    question:
      "What was the significance of the Battle of Cuito Cuanavale (1987-1988)?",
    options: [
      "It was a decisive victory for South Africa",
      "It ended in a stalemate and led to the New York Accords, Namibian independence, and Cuban withdrawal from Angola",
      "It resulted in the collapse of the Angolan government",
      "It had no political consequences",
    ],
    correct: 1,
    explanation:
      "Cuito Cuanavale was the largest battle in Africa since WWII. It ended in a military stalemate but led to the New York Accords (1988): Cuban withdrawal from Angola and Namibian independence (1990).",
  },
  {
    id: 10,
    unit: "cold-war-africa",
    question: "Why did the USA support dictators like Mobutu in Zaire?",
    options: [
      "Mobutu was democratically elected",
      "Mobutu promoted human rights",
      "The USA prioritised anti-communism over democracy during the Cold War",
      "Mobutu was a communist ally",
    ],
    correct: 2,
    explanation:
      "The USA supported Mobutu and other dictators because they were anti-communist, regardless of their human rights records. Preventing communist influence took priority over promoting democracy.",
  },
  {
    id: 11,
    unit: "cold-war-africa",
    question: "How did the Cold War affect the Horn of Africa?",
    options: [
      "It had no impact on Ethiopia or Somalia",
      "Ethiopia and Somalia both remained US allies",
      "Ethiopia shifted to Soviet backing after 1974; Somalia then switched to US backing, leading to proxy conflict",
      "Both countries joined NATO",
    ],
    correct: 2,
    explanation:
      "After the 1974 revolution, Ethiopia's Derg regime switched from US to Soviet ally. Somalia then switched to US backing. The Ogaden War (1977-1978) became a Cold War proxy conflict.",
  },

  // --- Civil Society Resistance (1950s-1970s) ---
  {
    id: 12,
    unit: "civil-resistance",
    question: "What was the Defiance Campaign (1952)?",
    options: [
      "An armed rebellion against the government",
      "A campaign of mass civil disobedience where volunteers deliberately broke unjust laws",
      "A petition to the United Nations",
      "A whites-only protest movement",
    ],
    correct: 1,
    explanation:
      "The Defiance Campaign was organised by the ANC and SAIC. Volunteers deliberately broke apartheid laws (pass laws, curfews, segregation) and courted arrest. Over 8,500 people were arrested and ANC membership grew from 7,000 to 100,000.",
  },
  {
    id: 13,
    unit: "civil-resistance",
    question: "Where and when was the Freedom Charter adopted?",
    options: [
      "Soweto, 1976",
      "Sharpeville, 1960",
      "Kliptown, 26 June 1955",
      "Rivonia, 1963",
    ],
    correct: 2,
    explanation:
      "The Freedom Charter was adopted at the Congress of the People in Kliptown on 26 June 1955. It set out a vision for a non-racial, democratic South Africa.",
  },
  {
    id: 14,
    unit: "civil-resistance",
    question: "What happened at Sharpeville on 21 March 1960?",
    options: [
      "The ANC was founded",
      "Police opened fire on peaceful anti-pass law protesters, killing 69 people",
      "The Freedom Charter was signed",
      "Nelson Mandela was arrested",
    ],
    correct: 1,
    explanation:
      "The PAC organised a peaceful protest against pass laws. Police opened fire on the unarmed crowd, killing 69 and wounding 180. Many were shot in the back while fleeing.",
  },
  {
    id: 15,
    unit: "civil-resistance",
    question: "What was Umkhonto we Sizwe (MK)?",
    options: [
      "A student organisation",
      "The armed wing of the PAC",
      "The armed wing of the ANC, formed on 16 December 1961 with Mandela as first commander",
      "A trade union",
    ],
    correct: 2,
    explanation:
      "MK was the ANC's armed wing, formed on 16 December 1961. Mandela was its first commander. It initially adopted a policy of sabotage targeting government installations, not people.",
  },
  {
    id: 16,
    unit: "civil-resistance",
    question: "What was the Black Consciousness Movement's core message?",
    options: [
      "Whites and blacks should work together under white leadership",
      "Black people should develop psychological liberation, self-reliance, and pride",
      "Armed struggle was the only solution",
      "Black people should leave South Africa",
    ],
    correct: 1,
    explanation:
      "BCM, led by Steve Biko, aimed to raise the psychological and political consciousness of black people, promoting self-reliance, pride, and rejection of white liberal paternalism.",
  },
  {
    id: 17,
    unit: "civil-resistance",
    question: "What triggered the Soweto Uprising of 16 June 1976?",
    options: [
      "The arrest of Steve Biko",
      "The banning of the ANC",
      "Compulsory use of Afrikaans as a medium of instruction in black schools",
      "The assassination of Chris Hani",
    ],
    correct: 2,
    explanation:
      "Students in Soweto protested against the compulsory use of Afrikaans as a medium of instruction. Police opened fire on the peaceful march. Hector Pieterson (13) was among the first killed.",
  },
  {
    id: 18,
    unit: "civil-resistance",
    question: "How did Steve Biko die?",
    options: [
      "He was shot at a protest",
      "He died in exile",
      "He died on 12 September 1977 from brain injuries sustained during police interrogation",
      "He was killed in the Soweto Uprising",
    ],
    correct: 2,
    explanation:
      "Steve Biko was arrested in August 1977, beaten during interrogation, and died on 12 September 1977 from brain injuries. He was driven 1,200 km to Pretoria while naked and in chains.",
  },

  // --- Apartheid South Africa (1960s-1980s) ---
  {
    id: 19,
    unit: "apartheid",
    question: "What was the Tricameral Parliament (1983)?",
    options: [
      "A parliament with equal representation for all races",
      "Three chambers for whites, coloureds, and Indians — excluding black people entirely",
      "A joint parliament for all African states",
      "A reformed parliament giving blacks the vote",
    ],
    correct: 1,
    explanation:
      "The Tricameral Parliament had three chambers: House of Assembly (whites), House of Representatives (coloureds), House of Delegates (Indians). Black people were completely excluded, which was a key reason the UDF was formed to oppose it.",
  },
  {
    id: 20,
    unit: "apartheid",
    question: "What was the United Democratic Front (UDF)?",
    options: [
      "A white liberal organisation",
      "A broad coalition of over 600 anti-apartheid organisations formed in 1983 to oppose the Tricameral Parliament",
      "A homeland political party",
      "An international sanctions body",
    ],
    correct: 1,
    explanation:
      "The UDF was formed on 20 August 1983 as a broad coalition of over 600 organisations (civic groups, trade unions, churches, student groups). It adopted the Freedom Charter and became the internal wing of the liberation movement.",
  },
  {
    id: 21,
    unit: "apartheid",
    question: "What was P.W. Botha's 'Total Strategy'?",
    options: [
      "A plan to negotiate with the ANC",
      "A combination of military force and limited reforms to counter the perceived 'total onslaught'",
      "A programme to end apartheid peacefully",
      "A plan to give all South Africans the vote",
    ],
    correct: 1,
    explanation:
      "Total Strategy combined military force with cosmetic reforms to counter the perceived communist-backed 'total onslaught.' It involved increased military spending, cross-border raids, destabilisation of neighbours, and limited reforms.",
  },
  {
    id: 22,
    unit: "apartheid",
    question:
      "What was the impact of international sanctions on apartheid South Africa?",
    options: [
      "They had no effect",
      "They strengthened the economy",
      "They isolated South Africa diplomatically, damaged the economy, and contributed to pressure for change",
      "They only affected sport",
    ],
    correct: 2,
    explanation:
      "Sanctions isolated South Africa diplomatically, caused economic damage (disinvestment, trade restrictions, loan recalls), excluded SA from sport and culture, and contributed significantly to the pressure that led to negotiations.",
  },
  {
    id: 23,
    unit: "apartheid",
    question: "Why was P.W. Botha's Rubicon Speech (1985) significant?",
    options: [
      "He announced major reforms",
      "He released Mandela",
      "He refused to make meaningful changes, causing the rand to crash and international investors to flee",
      "He agreed to share power with the ANC",
    ],
    correct: 2,
    explanation:
      "Botha was expected to announce reforms but delivered a defiant speech refusing to release Mandela or share power. International investors panicked, the rand crashed, and banks recalled loans — a turning point in international pressure.",
  },

  // --- End of the Cold War & New World Order ---
  {
    id: 24,
    unit: "end-cold-war",
    question: "What were Gorbachev's two key reform policies?",
    options: [
      "Containment and détente",
      "Glasnost (openness) and perestroika (restructuring)",
      "Solidarity and revolution",
      "Capitalism and democracy",
    ],
    correct: 1,
    explanation:
      "Gorbachev introduced glasnost (openness — freedom of speech, press freedom) and perestroika (restructuring — economic reforms, limited free market). These reforms were intended to save the USSR but contributed to its collapse.",
  },
  {
    id: 25,
    unit: "end-cold-war",
    question: "When did the Berlin Wall fall?",
    options: [
      "4 June 1989",
      "9 November 1989",
      "25 December 1991",
      "2 February 1990",
    ],
    correct: 1,
    explanation:
      "The Berlin Wall fell on 9 November 1989. It was triggered by Gorbachev's reforms, Hungary opening its borders, mass protests in East Germany, and the East German government opening the Wall under pressure.",
  },
  {
    id: 26,
    unit: "end-cold-war",
    question: "When was the USSR formally dissolved?",
    options: [
      "9 November 1989",
      "2 February 1990",
      "25 December 1991",
      "27 April 1994",
    ],
    correct: 2,
    explanation:
      "The USSR was formally dissolved on 25 December 1991 when Gorbachev resigned as Soviet president. The hammer and sickle flag was lowered over the Kremlin for the last time.",
  },
  {
    id: 27,
    unit: "end-cold-war",
    question: "How did the end of the Cold War affect Africa?",
    options: [
      "It had no effect on Africa",
      "It increased superpower intervention",
      "Proxy wars ended, dictators lost backing, and space for democratisation opened up",
      "It caused more Cold War conflicts in Africa",
    ],
    correct: 2,
    explanation:
      "The end of the Cold War removed superpower rivalry from Africa. Proxy wars lost external support, dictators lost superpower backing, and space opened for democratisation and peace processes.",
  },

  // --- Negotiated Settlement in South Africa ---
  {
    id: 28,
    unit: "negotiated-settlement",
    question: "What did F.W. de Klerk announce on 2 February 1990?",
    options: [
      "The introduction of the Tricameral Parliament",
      "The unbanning of the ANC, PAC, SACP and the impending release of Mandela",
      "A new state of emergency",
      "South Africa's withdrawal from Namibia",
    ],
    correct: 1,
    explanation:
      "De Klerk announced the unbanning of the ANC, PAC, SACP, and other organisations; the release of Mandela; lifting of the state of emergency; end of media restrictions; and a moratorium on executions.",
  },
  {
    id: 29,
    unit: "negotiated-settlement",
    question: "Why did CODESA 2 collapse in May 1992?",
    options: [
      "The ANC refused to participate",
      "Disagreements about power-sharing, the percentage needed for constitutional changes, and regional powers",
      "International pressure forced its closure",
      "De Klerk withdrew from negotiations",
    ],
    correct: 1,
    explanation:
      "CODESA 2 collapsed over disagreements between the ANC and NP about power-sharing arrangements, the percentage majority needed to approve the new constitution, and the powers of regional governments.",
  },
  {
    id: 30,
    unit: "negotiated-settlement",
    question:
      "What was the impact of Chris Hani's assassination (10 April 1993)?",
    options: [
      "It ended the negotiation process permanently",
      "It nearly derailed negotiations but Mandela's televised appeal for calm prevented widespread violence",
      "It had no significant impact",
      "It led to a military coup",
    ],
    correct: 1,
    explanation:
      "Chris Hani's assassination by Janusz Walus nearly derailed negotiations and could have led to a race war. Mandela's televised appeal for calm was pivotal in preventing widespread violence and keeping the peace process on track.",
  },
  {
    id: 31,
    unit: "negotiated-settlement",
    question: "When were South Africa's first democratic elections held?",
    options: [
      "11 February 1990",
      "10 April 1993",
      "27 April 1994",
      "10 May 1994",
    ],
    correct: 2,
    explanation:
      "South Africa's first democratic elections were held over four days (26-29 April 1994). Over 19 million South Africans voted. The ANC won 62.65% of the vote. Mandela was inaugurated on 10 May 1994.",
  },
  {
    id: 32,
    unit: "negotiated-settlement",
    question:
      "What was the purpose of the Truth and Reconciliation Commission (TRC)?",
    options: [
      "To punish all apartheid perpetrators with imprisonment",
      "To investigate human rights abuses, give victims a voice, and grant amnesty for full disclosure of politically motivated acts",
      "To redistribute land",
      "To write the new constitution",
    ],
    correct: 1,
    explanation:
      "The TRC, chaired by Desmond Tutu, investigated human rights abuses during apartheid (1960-1994), gave victims a chance to tell their stories, and granted amnesty to perpetrators who made full disclosure. It aimed for restorative justice.",
  },
  {
    id: 33,
    unit: "negotiated-settlement",
    question: "What was the Government of National Unity (GNU)?",
    options: [
      "A government formed only by the ANC",
      "A coalition government required by the Interim Constitution, including the ANC, NP, and IFP",
      "A government imposed by the United Nations",
      "A military government",
    ],
    correct: 1,
    explanation:
      "The Interim Constitution required parties winning more than 5% to be in the GNU. The ANC, NP, and IFP formed the GNU with Mandela as president, De Klerk and Mbeki as deputy presidents.",
  },
  {
    id: 34,
    unit: "cold-war-africa",
    question: "What happened in Mozambique during the Cold War?",
    options: [
      "It remained a Portuguese colony throughout",
      "The Marxist FRELIMO government faced a civil war against RENAMO, backed by Rhodesia and South Africa",
      "It was a stable democracy throughout",
      "It aligned with the USA against the USSR",
    ],
    correct: 1,
    explanation:
      "After independence from Portugal (1975), the Marxist FRELIMO government faced a devastating civil war (1977-1992) against RENAMO, backed first by Rhodesia and then by apartheid South Africa. Over 1 million people died.",
  },
  {
    id: 35,
    unit: "civil-resistance",
    question: "What was the outcome of the Rivonia Trial (1963-1964)?",
    options: [
      "All accused were acquitted",
      "Eight leaders including Mandela were sentenced to life imprisonment on Robben Island",
      "The accused escaped from custody",
      "The trial was abandoned",
    ],
    correct: 1,
    explanation:
      "Eight MK leaders, including Mandela, Sisulu, Mbeki, and Kathrada, were sentenced to life imprisonment on Robben Island. Mandela's 'I am prepared to die' speech during the trial became iconic.",
  },
  {
    id: 36,
    unit: "negotiated-settlement",
    question:
      "What was the Boipatong Massacre (June 1992) and its consequences?",
    options: [
      "A protest march that ended peacefully",
      "IFP supporters attacked Boipatong residents, killing 46; the ANC withdrew from CODESA",
      "A military operation against MK",
      "A student uprising in Johannesburg",
    ],
    correct: 1,
    explanation:
      "IFP supporters, allegedly assisted by security forces, attacked Boipatong township, killing 46 people. The ANC withdrew from negotiations, accusing the government of complicity. It was a major setback for the peace process.",
  },
  {
    id: 37,
    unit: "end-cold-war",
    question:
      "Which Eastern European revolution was known as the 'Velvet Revolution'?",
    options: [
      "Poland's Solidarity movement",
      "Hungary's border opening",
      "Czechoslovakia's peaceful overthrow of communism",
      "Romania's violent revolution",
    ],
    correct: 2,
    explanation:
      "Czechoslovakia's peaceful transition from communism in November-December 1989 was called the 'Velvet Revolution' because of its non-violent nature, in contrast to Romania where Ceausescu was violently overthrown.",
  },
];

export const feynmanTopics: FeynmanTopic[] = [
  {
    id: "f1",
    title: "The Cold War: Origins, Key Events, and Ideological Conflict",
    prompt:
      "Explain the origins, key events, and ideological conflict of the Cold War between the USA and USSR from 1945 to 1991.",
    keyConcepts: [
      "Ideological conflict: USA (capitalism/democracy) vs. USSR (communism/one-party state)",
      "Origins: breakdown of wartime alliance, Yalta & Potsdam (1945), mutual distrust",
      "Truman Doctrine (1947): containment of communism; Marshall Plan (1948): $13 billion aid to rebuild Europe",
      "Berlin Blockade (1948-49) → Berlin Airlift → NATO (1949) vs. Warsaw Pact (1955)",
      "Nuclear arms race: atomic bomb (USA 1945, USSR 1949), MAD doctrine prevented direct war",
      "Cuban Missile Crisis (1962): 13 days on brink of nuclear war, resolved by diplomacy",
      "Détente (1970s): SALT I & II treaties, Helsinki Accords — easing of tensions",
      "Proxy wars: Korea, Vietnam, Africa — superpowers fought through allies, never directly",
    ],
  },
  {
    id: "f2",
    title: "The Cold War in Africa: Proxy Wars and Superpower Rivalry",
    prompt:
      "Explain how the Cold War affected Africa through proxy wars and superpower rivalry, including key conflicts and their consequences.",
    keyConcepts: [
      "Both superpowers competed for influence among newly independent African states",
      "Congo Crisis (1960-65): Lumumba assassinated (CIA/Belgian involvement), Mobutu installed as pro-Western dictator",
      "Angola Civil War (1975-2002): MPLA (USSR/Cuba) vs. UNITA (USA/SA) vs. FNLA — Cuba sent 36,000+ troops",
      "Battle of Cuito Cuanavale (1987-88): largest battle in Africa since WWII, led to New York Accords & Namibian independence",
      "Mozambique: FRELIMO (USSR) vs. RENAMO (Rhodesia/SA), 1 million+ killed in civil war (1977-1992)",
      "Horn of Africa: Ethiopia switched to Soviet ally (1974), Somalia then switched to US — Ogaden War as proxy conflict",
      "USA supported anti-communist dictators regardless of human rights records",
      "Legacy: devastating wars, arms proliferation, debt, political instability, displaced populations",
    ],
  },
  {
    id: "f3",
    title: "Civil Society Resistance in South Africa (1950s-1970s)",
    prompt:
      "Explain the key events and movements of civil society resistance against apartheid in South Africa from the 1950s to the 1970s.",
    keyConcepts: [
      "Defiance Campaign (1952): mass civil disobedience, 8,500 arrested, ANC membership grew to 100,000",
      "Freedom Charter (Kliptown, 26 June 1955): vision for non-racial democracy, guiding document of struggle",
      "Women's March (9 Aug 1956): 20,000 women marched to Union Buildings against pass laws for women",
      "Sharpeville Massacre (21 March 1960): 69 killed — turning point → ANC/PAC banned → armed struggle begins",
      "MK formed (16 Dec 1961), Mandela first commander; Rivonia Trial (1963-64) → life imprisonment",
      "Black Consciousness Movement (Steve Biko, SASO 1968, BPC 1972): psychological liberation and black pride",
      "Soweto Uprising (16 June 1976): students protested Afrikaans instruction, 700+ killed, reignited resistance",
      "Biko died in detention (12 Sept 1977) — international outrage, UN arms embargo (1977)",
    ],
  },
  {
    id: "f4",
    title:
      "Apartheid South Africa: Repression, Reform, and Resistance (1960s-1980s)",
    prompt:
      "Explain how the apartheid government used repression and reform to maintain power in South Africa from the 1960s to the 1980s, and how resistance grew against it.",
    keyConcepts: [
      "Post-Sharpeville crackdown: state of emergency, 18,000 detained, Sabotage Act, 90-day detention",
      "Bantustan policy: 10 homelands to deny black citizenship, 4 given fake 'independence' (TBVC states)",
      "P.W. Botha's Total Strategy: military force + limited reforms to counter 'total onslaught'",
      "Tricameral Parliament (1983): whites, coloureds, Indians — blacks totally excluded",
      "UDF formed (Aug 1983): 600+ organisations opposing Tricameral Parliament, adopted Freedom Charter",
      "Township uprisings (1984+): rent/school/consumer boycotts, running battles with security forces",
      "States of Emergency (1985-1990): 30,000+ detained, media restrictions, troops in townships",
      "International pressure: sanctions, disinvestment, sports boycotts, Rubicon Speech (1985) caused rand crash",
    ],
  },
  {
    id: "f5",
    title: "The End of the Cold War and the New World Order",
    prompt:
      "Explain how the Cold War ended, including Gorbachev's reforms, the 1989 revolutions, the collapse of the USSR, and the emergence of a new world order.",
    keyConcepts: [
      "Gorbachev (1985): glasnost (openness) and perestroika (restructuring) to modernise the USSR",
      "1989 revolutions: Poland (Solidarity), Hungary, East Germany (Berlin Wall — 9 Nov 1989), Czechoslovakia (Velvet Revolution), Romania",
      "Berlin Wall fell 9 November 1989 — symbol of Cold War's end",
      "USSR collapsed: Baltic states declared independence, failed August 1991 coup, Gorbachev resigned 25 December 1991",
      "New World Order: unipolar world (USA sole superpower), but new challenges — ethnic conflicts, terrorism, failed states",
      "Impact on Africa: proxy wars ended, dictators lost backing, space for democratisation and peace processes",
      "Impact on South Africa: ANC no longer branded communist threat, apartheid government lost strategic value, international pressure for change increased",
    ],
  },
  {
    id: "f6",
    title:
      "The Negotiated Settlement and Birth of Democratic South Africa",
    prompt:
      "Explain the process of the negotiated settlement that led to the birth of democratic South Africa, including the key events, obstacles, and outcomes.",
    keyConcepts: [
      "Why negotiate: sanctions, military stalemate (Cuito Cuanavale), end of Cold War, internal resistance, apartheid unsustainable",
      "2 Feb 1990: De Klerk unbans ANC/PAC/SACP; 11 Feb 1990: Mandela released after 27 years",
      "CODESA 1 (Dec 1991) & CODESA 2 (May 1992) — collapsed over power-sharing disagreements",
      "Violence threatened process: Boipatong Massacre (June 1992, 46 killed), Bisho Massacre (Sept 1992, 29 killed), third force",
      "Record of Understanding (Sept 1992): Mandela-De Klerk agreement to resume talks",
      "Chris Hani assassinated (10 April 1993) — Mandela's calm appeal prevented race war",
      "MPNP at World Trade Centre: produced Interim Constitution, set elections for 27 April 1994",
      "First democratic elections (26-29 April 1994): ANC 62.65%, GNU formed, Mandela inaugurated 10 May 1994, TRC established 1996",
    ],
  },
];
