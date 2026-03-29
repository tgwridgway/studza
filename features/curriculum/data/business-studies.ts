import type { Flashcard, QuizQuestion, FeynmanTopic } from "@/features/curriculum/types";

// ============================================================
// FLASHCARD DATA
// ============================================================
export const flashcards: Flashcard[] = [
  // --- Business Environments ---
  {
    id: 1,
    unit: "environments",
    q: "Name the three business environments and give an example of each.",
    a: "1. Micro environment — internal (e.g. management, employees, business culture)\n2. Market environment — closer external (e.g. customers, suppliers, competitors)\n3. Macro environment — broader external (e.g. economic, legal, technological factors)",
  },
  {
    id: 2,
    unit: "environments",
    q: "What is the difference between a SWOT analysis and a PESTLE analysis?",
    a: "SWOT analyses the internal Strengths and Weaknesses, and external Opportunities and Threats of a business. PESTLE analyses macro-environmental factors: Political, Economic, Social, Technological, Legal, and Environmental. SWOT is business-focused; PESTLE is environment-focused.",
  },
  {
    id: 3,
    unit: "environments",
    q: "Explain the impact of the micro environment on business operations.",
    a: "The micro environment includes factors the business can control: management style and leadership, organisational culture, employee relations, and business resources. Poor internal management leads to low productivity, while strong leadership and a positive culture drive efficiency and growth.",
  },
  {
    id: 4,
    unit: "environments",
    q: "How does the market environment affect a business?",
    a: "The market environment includes customers (demand patterns), suppliers (input costs and reliability), competitors (market share rivalry), intermediaries (distribution channels), and regulators. The business has some influence but cannot fully control these factors.",
  },
  {
    id: 5,
    unit: "environments",
    q: "List four macro-environment challenges that South African businesses face.",
    a: "1. Load shedding and energy instability (technological/infrastructure)\n2. High unemployment rate affecting consumer spending (economic)\n3. Strict labour legislation such as BCEA and LRA (legal)\n4. Crime and corruption increasing operating costs (social/political)",
  },
  {
    id: 6,
    unit: "environments",
    q: "Explain the concept of corporate social responsibility (CSR).",
    a: "CSR is a business's commitment to acting ethically and contributing to economic development while improving the quality of life of employees, communities, and society. It includes environmental sustainability, community upliftment, fair labour practices, and ethical governance. In SA, it is linked to the B-BBEE scorecard.",
  },
  {
    id: 7,
    unit: "environments",
    q: "What is the purpose of the B-BBEE Act in South Africa?",
    a: "The Broad-Based Black Economic Empowerment (B-BBEE) Act aims to redress the inequalities of apartheid by promoting economic transformation. It measures compliance through a scorecard including ownership, management control, skills development, enterprise and supplier development, and socio-economic development.",
  },
  {
    id: 8,
    unit: "environments",
    q: "Describe the impact of globalisation on South African businesses.",
    a: "Globalisation increases competition from international companies, creates export opportunities, exposes businesses to foreign exchange risks, enables technology transfer, demands higher quality standards, and opens access to larger markets. SA businesses must be globally competitive to survive.",
  },
  {
    id: 9,
    unit: "environments",
    q: "Differentiate between inclusivity and diversity in the business environment.",
    a: "Diversity refers to the presence of differences in race, gender, age, disability, religion, and culture within a workforce. Inclusivity means creating an environment where all diverse individuals feel valued, respected, and have equal access to opportunities and resources. A business can be diverse without being inclusive.",
  },
  {
    id: 10,
    unit: "environments",
    q: "Explain the role of the Competition Commission in South Africa.",
    a: "The Competition Commission enforces the Competition Act (No. 89 of 1998). It investigates anti-competitive behaviour such as price fixing, market allocation, and abuse of dominant positions. It reviews mergers and acquisitions to prevent monopolies and promotes fair competition to protect consumers and small businesses.",
  },
  // --- Business Operations ---
  {
    id: 11,
    unit: "operations",
    q: "Explain the concept of Total Quality Management (TQM).",
    a: "TQM is a management approach where all employees are committed to continuous improvement in quality of products, services, and processes. Key principles: customer focus, employee involvement, continuous improvement (Kaizen), process-centred thinking, and integrated systems. Every department is responsible for quality.",
  },
  {
    id: 12,
    unit: "operations",
    q: "What is quality control vs. quality assurance?",
    a: "Quality control (QC) is the inspection and testing of products after production to identify defects. Quality assurance (QA) is a proactive approach that focuses on preventing defects by improving processes throughout production. QA is preventative; QC is detective.",
  },
  {
    id: 13,
    unit: "operations",
    q: "Explain the purpose of the National Credit Act (NCA), No. 34 of 2005.",
    a: "The NCA promotes responsible credit granting and use. It protects consumers from reckless lending, requires credit providers to assess affordability before granting credit, ensures fair and non-discriminatory access to credit, regulates credit bureaus, and prevents over-indebtedness.",
  },
  {
    id: 14,
    unit: "operations",
    q: "What is the Consumer Protection Act (CPA), No. 68 of 2008?",
    a: "The CPA protects consumers' rights including: the right to equality and fair treatment, the right to privacy, the right to choose, the right to disclosure and information, the right to fair and responsible marketing, the right to fair and honest dealing, the right to fair value, good quality, and safety, and the right to accountability from suppliers.",
  },
  {
    id: 15,
    unit: "operations",
    q: "What are the eight consumer rights under the CPA?",
    a: "1. Right to equality\n2. Right to privacy\n3. Right to choose\n4. Right to disclosure and information\n5. Right to fair and responsible marketing\n6. Right to fair and honest dealing\n7. Right to fair value, good quality, and safety\n8. Right to accountability by suppliers",
  },
  {
    id: 16,
    unit: "operations",
    q: "Explain the concept of operations management in business.",
    a: "Operations management involves planning, organising, and supervising the production of goods or services. It covers input procurement, production processes, quality management, inventory control, and supply chain management. The goal is to maximise efficiency while maintaining quality and minimising costs.",
  },
  {
    id: 17,
    unit: "operations",
    q: "What is the King IV Report on Corporate Governance?",
    a: "King IV is a South African code of corporate governance (2016) that recommends ethical leadership, good corporate citizenship, stakeholder inclusivity, and accountability. It applies on an 'apply AND explain' basis. Key principles include integrity, transparency, fairness, and responsibility in business leadership.",
  },
  {
    id: 18,
    unit: "operations",
    q: "Describe the function of the South African Bureau of Standards (SABS).",
    a: "The SABS develops national standards, tests products for compliance, and issues the SABS mark of quality. It protects consumers by ensuring products are safe and meet minimum quality requirements. Businesses with SABS certification gain consumer trust and competitive advantage.",
  },
  {
    id: 19,
    unit: "operations",
    q: "What is the role of the National Consumer Commission (NCC)?",
    a: "The NCC enforces the Consumer Protection Act. It investigates consumer complaints, promotes consumer education, ensures business compliance with consumer rights, and can issue compliance notices. It works alongside the Consumer Tribunal which adjudicates disputes.",
  },
  {
    id: 20,
    unit: "operations",
    q: "Explain the difference between a product recall and a product return under the CPA.",
    a: "A product recall is initiated by the supplier/manufacturer when a defect or safety hazard is identified in a batch of products — all affected units are recalled. A product return is initiated by the consumer when a specific purchased product is defective. Under the CPA, consumers have 6 months to return defective goods for repair, replacement, or refund.",
  },
  // --- Ethics & Professionalism ---
  {
    id: 21,
    unit: "ethics",
    q: "Differentiate between ethical and unethical business practices.",
    a: "Ethical practices follow moral principles and legal standards: honesty, fairness, transparency, respect for stakeholders. Unethical practices include fraud, corruption, exploitation, discrimination, environmental damage, tax evasion, misleading advertising, insider trading, and unfair labour practices.",
  },
  {
    id: 22,
    unit: "ethics",
    q: "What is a code of ethics and why do businesses need one?",
    a: "A code of ethics is a formal document outlining a business's values, principles, and expected standards of behaviour. It guides decision-making, sets expectations for employees, promotes consistent ethical behaviour, protects the business's reputation, and provides a framework for disciplinary action.",
  },
  {
    id: 23,
    unit: "ethics",
    q: "Explain professional, ethical, and effective leadership in business.",
    a: "Professional leadership demonstrates competence, integrity, and accountability. Ethical leadership involves making morally sound decisions that consider all stakeholders. Effective leadership achieves organisational goals while maintaining ethical standards. Leaders must inspire trust, act transparently, and take responsibility for outcomes.",
  },
  {
    id: 24,
    unit: "ethics",
    q: "What is the relationship between ethics and professionalism?",
    a: "Professionalism involves conducting business with competence, reliability, honesty, and respect. Ethics provides the moral framework guiding professional behaviour. A professional person adheres to ethical standards, acts with integrity, respects confidentiality, avoids conflicts of interest, and continuously develops their skills.",
  },
  {
    id: 25,
    unit: "ethics",
    q: "How does the King IV Report address ethical leadership?",
    a: "King IV Principle 1 states that the governing body should lead ethically and effectively. This includes integrity (acting honestly), competence (having the skills to govern), responsibility (being accountable for decisions), accountability (answering for outcomes), fairness (treating stakeholders equitably), and transparency (operating openly).",
  },
  {
    id: 26,
    unit: "ethics",
    q: "What are the consequences of unethical business practices?",
    a: "Consequences include: legal penalties (fines, imprisonment), loss of reputation and customer trust, decreased employee morale and increased turnover, loss of investors and funding, consumer boycotts, regulatory sanctions, decreased profitability, and potential business closure. Example: Steinhoff's accounting fraud led to massive share price collapse.",
  },
  {
    id: 27,
    unit: "ethics",
    q: "Explain the concept of whistleblowing and the Protected Disclosures Act.",
    a: "Whistleblowing is reporting unethical or illegal activities within an organisation. The Protected Disclosures Act (No. 26 of 2000) protects employees who disclose information about unlawful or irregular conduct by their employers. It prevents occupational detriment (dismissal, demotion, harassment) against whistleblowers who make disclosures in good faith.",
  },
  {
    id: 28,
    unit: "ethics",
    q: "List four ethical issues related to the use of technology in business.",
    a: "1. Privacy violations — collecting and sharing personal data without consent (POPIA)\n2. Software piracy — using unlicensed software\n3. Cybercrime — hacking, phishing, identity theft\n4. Digital divide — unequal access to technology creates unfair competitive advantages",
  },
  {
    id: 29,
    unit: "ethics",
    q: "Explain how the triple bottom line relates to business ethics.",
    a: "The triple bottom line measures business success across three dimensions: People (social responsibility — fair labour, community development), Planet (environmental sustainability — reducing carbon footprint, waste management), and Profit (economic performance). Ethical businesses balance all three rather than focusing solely on profit.",
  },
  {
    id: 30,
    unit: "ethics",
    q: "What is the difference between a bribe and a gift in the business context?",
    a: "A gift is given openly with no expectation of reciprocation and is of reasonable value. A bribe is given secretly with the intention of influencing a business decision or gaining unfair advantage. Bribes are illegal under the Prevention and Combating of Corrupt Activities Act (No. 12 of 2004). Businesses should have clear policies on accepting gifts.",
  },
  // --- Business Ventures ---
  {
    id: 31,
    unit: "ventures",
    q: "Explain the difference between a franchise and an independent business.",
    a: "A franchise is a business that buys the right to use an established brand and business model (e.g. Spur, Nando's). An independent business is started from scratch by the entrepreneur. Franchises offer lower risk and brand recognition but require franchise fees and limit creative freedom. Independent businesses have full control but higher risk.",
  },
  {
    id: 32,
    unit: "ventures",
    q: "What are the advantages and disadvantages of buying a franchise?",
    a: "Advantages: proven business model, brand recognition, training and support, established supply chains, marketing assistance.\nDisadvantages: franchise fees and royalties, limited autonomy, bound by franchise agreement rules, shared brand risk, restricted product/service range.",
  },
  {
    id: 33,
    unit: "ventures",
    q: "What factors should an entrepreneur consider when choosing a location for a new business?",
    a: "1. Proximity to target market/customers\n2. Accessibility and transport links\n3. Availability and cost of premises\n4. Proximity to suppliers\n5. Labour availability\n6. Competition in the area\n7. Local by-laws and zoning regulations\n8. Infrastructure (electricity, water, internet)\n9. Safety and security of the area",
  },
  {
    id: 34,
    unit: "ventures",
    q: "List the different forms of ownership and their key features.",
    a: "1. Sole trader — one owner, unlimited liability, simple to start\n2. Partnership — 2-20 partners, shared liability, partnership agreement\n3. Close Corporation (CC) — 1-10 members, own legal entity (no new CCs since 2011)\n4. Private Company (Pty Ltd) — 1+ shareholders, separate legal entity, limited liability\n5. Public Company (Ltd) — shares traded on JSE, separate legal entity\n6. Non-profit Company (NPC) — objectives not for gain",
  },
  {
    id: 35,
    unit: "ventures",
    q: "What is a business plan and what are its key components?",
    a: "A business plan is a formal document describing the business concept, strategies, and financial projections. Key components: executive summary, business description, market analysis, marketing strategy, organisational structure, operational plan, financial plan (income statement, cash flow, balance sheet projections), and SWOT analysis.",
  },
  {
    id: 36,
    unit: "ventures",
    q: "Explain the role of SEDA in supporting small businesses in South Africa.",
    a: "SEDA (Small Enterprise Development Agency) provides non-financial business support to small enterprises. Services include business registration assistance, business plan development, training and mentoring, market access facilitation, technology support, and cooperatives support. It operates under the Department of Small Business Development.",
  },
  {
    id: 37,
    unit: "ventures",
    q: "What is the Companies Act (No. 71 of 2008) and its importance?",
    a: "The Companies Act regulates the formation, governance, and dissolution of companies in South Africa. It replaced the 1973 Act, simplifying business registration (via CIPC), introducing the Memorandum of Incorporation (MOI), establishing the Companies Tribunal, and promoting transparency and accountability in corporate governance.",
  },
  {
    id: 38,
    unit: "ventures",
    q: "Differentiate between a sole trader, partnership, and private company (Pty Ltd).",
    a: "Sole trader: one owner, unlimited liability, no separate legal entity, minimal admin.\nPartnership: 2-20 partners, shared unlimited liability (unless limited partnership), governed by partnership agreement.\nPty Ltd: one or more shareholders, separate legal entity, limited liability (shareholders' personal assets protected), must register with CIPC, more regulatory requirements.",
  },
  {
    id: 39,
    unit: "ventures",
    q: "What is the difference between a private company (Pty Ltd) and a public company (Ltd)?",
    a: "Pty Ltd: shares not publicly traded, minimum 1 director, restricts share transfers, financial statements not public.\nLtd: shares traded on JSE (Johannesburg Stock Exchange), minimum 3 directors, must have a company secretary, audited financial statements are public, must comply with JSE listings requirements.",
  },
  {
    id: 40,
    unit: "ventures",
    q: "Explain the concept of a cooperative as a form of business ownership.",
    a: "A cooperative is a business owned and democratically controlled by its members who share in the benefits. Types include worker, social, consumer, and marketing cooperatives. Each member has one vote regardless of contribution. Cooperatives must register with CIPC and have at least five members. They promote community development and shared economic benefit.",
  },
  // --- Human Resources ---
  {
    id: 41,
    unit: "human-resources",
    q: "Explain the purpose of the Labour Relations Act (LRA), No. 66 of 1995.",
    a: "The LRA promotes economic development, social justice, and labour peace. It establishes the CCMA, defines fair labour practices, regulates trade unions and employer organisations, sets procedures for strikes and lockouts, establishes workplace forums, and outlines procedures for dispute resolution and unfair dismissal.",
  },
  {
    id: 42,
    unit: "human-resources",
    q: "What is the Basic Conditions of Employment Act (BCEA), No. 75 of 1997?",
    a: "The BCEA sets minimum employment conditions: maximum 45 ordinary working hours per week, overtime pay at 1.5 times normal rate, minimum 21 consecutive days annual leave, 6 weeks paid sick leave per 36-month cycle, 4 consecutive months maternity leave, 10 days family responsibility leave, and notice periods for termination.",
  },
  {
    id: 43,
    unit: "human-resources",
    q: "What is the role and function of the CCMA?",
    a: "The Commission for Conciliation, Mediation and Arbitration (CCMA) resolves labour disputes through conciliation (negotiation with a commissioner), mediation (commissioner suggests solutions), and arbitration (commissioner makes a binding decision). It handles unfair dismissal cases, unfair labour practice disputes, and provides advisory services. Its services are free.",
  },
  {
    id: 44,
    unit: "human-resources",
    q: "Explain the three types of dismissal recognised by the LRA.",
    a: "1. Misconduct — employee breaks workplace rules (e.g. theft, absenteeism). Must follow progressive discipline and a fair hearing.\n2. Incapacity — poor work performance or ill health/injury. Must provide counselling, training, or alternative work before dismissal.\n3. Operational requirements (retrenchment) — business needs to reduce workforce due to economic, technological, or structural reasons. Must follow Section 189 consultation process.",
  },
  {
    id: 45,
    unit: "human-resources",
    q: "What is the Employment Equity Act (EEA), No. 55 of 1998?",
    a: "The EEA promotes equal opportunity and fair treatment by eliminating unfair discrimination. It requires designated employers to implement affirmative action measures to ensure equitable representation of designated groups (black people, women, people with disabilities) at all occupational levels. Employers must submit employment equity plans and reports.",
  },
  {
    id: 46,
    unit: "human-resources",
    q: "Differentiate between a strike and a lockout.",
    a: "A strike is action by employees (organised by trade unions) who refuse to work to pressure the employer to meet demands (e.g. higher wages). A lockout is action by the employer who prevents employees from entering the workplace to pressure them to accept certain conditions. Both must follow legal procedures under the LRA to be protected.",
  },
  {
    id: 47,
    unit: "human-resources",
    q: "What are the steps in the recruitment and selection process?",
    a: "1. Identify the vacancy and conduct a job analysis\n2. Create a job description and job specification\n3. Advertise the position (internal/external)\n4. Screen applications and create a shortlist\n5. Conduct interviews (panel, one-on-one, competency-based)\n6. Conduct background and reference checks\n7. Make the appointment and issue a contract of employment\n8. Induction and orientation of new employee",
  },
  {
    id: 48,
    unit: "human-resources",
    q: "What is the difference between a job description and a job specification?",
    a: "A job description outlines the duties, responsibilities, working conditions, and reporting lines of a specific position. A job specification lists the minimum qualifications, skills, experience, and personal attributes required of the person who fills the position. The description focuses on the job; the specification focuses on the person.",
  },
  {
    id: 49,
    unit: "human-resources",
    q: "Explain the Skills Development Act (SDA), No. 97 of 1998.",
    a: "The SDA aims to develop the skills of the SA workforce, improve productivity, and promote self-employment. It establishes SETAs (Sector Education and Training Authorities) and the National Skills Fund. Employers with a payroll above R500 000 must pay a skills development levy (1% of payroll) to SARS, which funds training through SETAs.",
  },
  {
    id: 50,
    unit: "human-resources",
    q: "What is the purpose of induction/orientation of new employees?",
    a: "Induction introduces new employees to the organisation, its culture, policies, procedures, and their specific role. It covers workplace layout, health and safety, company rules, introduction to colleagues, and job-specific training. Good induction reduces anxiety, improves productivity, decreases early turnover, and ensures compliance with workplace standards.",
  },
  // --- Marketing ---
  {
    id: 51,
    unit: "marketing",
    q: "Explain the four elements of the marketing mix (4 Ps).",
    a: "1. Product — what the business sells (features, quality, branding, packaging, warranties)\n2. Price — what the customer pays (pricing strategies: cost-plus, penetration, skimming, competitive)\n3. Place — how the product reaches the customer (distribution channels, location)\n4. Promotion — how the business communicates (advertising, personal selling, sales promotion, public relations)",
  },
  {
    id: 52,
    unit: "marketing",
    q: "What is a marketing strategy and why is it important?",
    a: "A marketing strategy is a long-term plan to achieve marketing objectives by understanding customer needs and creating a competitive advantage. It guides the marketing mix decisions, identifies target markets, positions the brand, allocates resources effectively, and measures success through market share, sales, and customer satisfaction.",
  },
  {
    id: 53,
    unit: "marketing",
    q: "Explain the difference between primary and secondary market research.",
    a: "Primary research collects new, original data for a specific purpose using surveys, interviews, focus groups, or observation — it is current and specific but expensive and time-consuming.\nSecondary research uses existing data from reports, statistics, publications, or databases (e.g. Stats SA) — it is cheaper and faster but may be outdated or not perfectly relevant.",
  },
  {
    id: 54,
    unit: "marketing",
    q: "What are the stages of the product life cycle?",
    a: "1. Introduction — product launched, low sales, high marketing costs, little/no profit\n2. Growth — sales increase rapidly, profits rise, competitors enter the market\n3. Maturity — sales peak, profits stabilise, intense competition, market saturation\n4. Decline — sales and profits fall, product becomes obsolete or replaced\nExtension strategies (repackaging, new markets) can prolong the maturity stage.",
  },
  {
    id: 55,
    unit: "marketing",
    q: "What is market segmentation and name four bases for segmentation?",
    a: "Market segmentation divides a broad market into distinct subgroups with similar needs or characteristics. Bases include:\n1. Demographic — age, gender, income, education\n2. Geographic — region, urban/rural, climate\n3. Psychographic — lifestyle, values, personality\n4. Behavioural — usage rate, brand loyalty, benefits sought",
  },
  {
    id: 56,
    unit: "marketing",
    q: "Explain the impact of the CPA on marketing practices.",
    a: "The CPA requires: no misleading or false advertising, products must be labelled in plain and understandable language, consumers must be informed of product defects, direct marketing must allow opt-out, bait marketing (advertising unavailable products) is prohibited, promotional competitions must comply with specific rules, and prices must include VAT.",
  },
  {
    id: 57,
    unit: "marketing",
    q: "What is the difference between advertising and sales promotion?",
    a: "Advertising is a paid, non-personal communication through media (TV, radio, print, digital) to inform, persuade, or remind consumers about products — it builds long-term brand awareness.\nSales promotion involves short-term incentives (coupons, discounts, competitions, free samples, loyalty programmes) to stimulate immediate purchases and boost short-term sales.",
  },
  {
    id: 58,
    unit: "marketing",
    q: "Explain the concept of a target market.",
    a: "A target market is the specific group of consumers a business aims its marketing efforts at. It is identified through market segmentation and selected based on the group's size, purchasing power, accessibility, and alignment with the business's offerings. Effective targeting ensures marketing resources are not wasted on uninterested consumers.",
  },
  {
    id: 59,
    unit: "marketing",
    q: "List four pricing strategies and explain when each is appropriate.",
    a: "1. Cost-plus pricing — add markup to cost; used when costs are predictable\n2. Penetration pricing — set low price to enter market quickly; used for new products in competitive markets\n3. Price skimming — set high initial price then lower it; used for innovative/unique products\n4. Competitive pricing — price based on competitors; used in markets with similar products",
  },
  {
    id: 60,
    unit: "marketing",
    q: "What is the role of public relations (PR) in the marketing mix?",
    a: "PR manages the business's image and reputation through unpaid/earned media. Activities include press releases, community involvement, sponsorships, events, and crisis management. PR builds credibility and trust because messages come from third parties (media), unlike paid advertising. It is a key part of the promotion element of the marketing mix.",
  },
  // --- Investment & Finance ---
  {
    id: 61,
    unit: "investment",
    q: "Explain the difference between shares, unit trusts, and fixed deposits as investment options.",
    a: "Shares: buying ownership in a company listed on the JSE; high risk, potentially high returns (dividends + capital growth).\nUnit trusts: pooled funds managed by professionals, invested in diverse portfolios; medium risk, diversified.\nFixed deposits: money deposited at a bank for a fixed period at a guaranteed interest rate; low risk, lower returns.",
  },
  {
    id: 62,
    unit: "investment",
    q: "What factors influence investment decisions?",
    a: "1. Risk vs. return — higher potential returns usually mean higher risk\n2. Investment period — short, medium, or long term\n3. Liquidity — how easily the investment can be converted to cash\n4. Inflation — investment must beat inflation to grow in real terms\n5. Tax implications — some investments offer tax benefits (e.g. tax-free savings accounts)\n6. Diversification — spreading investments to reduce risk",
  },
  {
    id: 63,
    unit: "investment",
    q: "What is the Johannesburg Stock Exchange (JSE) and how does it function?",
    a: "The JSE is South Africa's securities exchange where shares, bonds, and derivatives are traded. Companies list on the JSE to raise capital by selling shares to investors. Share prices are determined by supply and demand. The JSE is regulated by the Financial Sector Conduct Authority (FSCA) and operates electronically. The All Share Index (ALSI) tracks overall market performance.",
  },
  {
    id: 64,
    unit: "investment",
    q: "Explain the difference between short-term and long-term insurance.",
    a: "Short-term insurance covers assets against sudden, unexpected events (fire, theft, accident, natural disaster). Policies renew annually. Examples: car insurance, home insurance, business insurance.\nLong-term insurance covers life-related risks over extended periods. Examples: life insurance (pays out on death), disability cover, funeral cover, retirement annuities. Regulated by the Insurance Act.",
  },
  {
    id: 65,
    unit: "investment",
    q: "What is the purpose of a budget and a cash flow statement in business finance?",
    a: "A budget is a financial plan estimating future income and expenses over a period — it helps control spending and plan for profitability.\nA cash flow statement tracks actual cash inflows and outflows, showing when cash is received and spent. It identifies potential cash shortages. A profitable business can still fail if it runs out of cash (cash flow crisis).",
  },
  {
    id: 66,
    unit: "investment",
    q: "Explain the difference between an income statement and a balance sheet.",
    a: "An income statement (profit and loss) shows revenue, expenses, and profit/loss over a specific period — it measures performance.\nA balance sheet shows assets, liabilities, and owner's equity at a specific point in time — it measures financial position. The accounting equation: Assets = Liabilities + Owner's Equity.",
  },
  {
    id: 67,
    unit: "investment",
    q: "What is the role of the Financial Sector Conduct Authority (FSCA)?",
    a: "The FSCA (previously FSB) regulates the conduct of financial institutions in South Africa. It supervises the JSE, enforces market conduct regulations, protects consumers of financial products and services, licences financial service providers, and investigates market abuse such as insider trading and market manipulation.",
  },
  {
    id: 68,
    unit: "investment",
    q: "Explain the concept of diversification in investment.",
    a: "Diversification is the strategy of spreading investments across different asset classes (shares, property, bonds, cash), industries, and geographic regions to reduce risk. If one investment performs poorly, others may perform well, reducing overall losses. The principle is 'don't put all your eggs in one basket.'",
  },
  {
    id: 69,
    unit: "investment",
    q: "What is the difference between a tax-free savings account and a retirement annuity?",
    a: "A tax-free savings account (TFSA) allows individuals to invest up to R36 000 per year (lifetime limit R500 000) with no tax on interest, dividends, or capital gains. Withdrawals are flexible.\nA retirement annuity (RA) is a long-term investment for retirement with tax-deductible contributions (up to 27.5% of taxable income). Funds are locked until age 55 and taxed on withdrawal.",
  },
  {
    id: 70,
    unit: "investment",
    q: "What are the key financial indicators a business uses to assess its performance?",
    a: "1. Gross profit percentage — gross profit / sales x 100 (measures production efficiency)\n2. Net profit percentage — net profit / sales x 100 (measures overall profitability)\n3. Current ratio — current assets / current liabilities (measures liquidity; ideal is 2:1)\n4. Acid test ratio — (current assets - stock) / current liabilities (stricter liquidity test; ideal is 1:1)\n5. Return on investment — net profit / capital invested x 100",
  },
  {
    id: 71,
    unit: "human-resources",
    q: "Explain the concept of collective bargaining.",
    a: "Collective bargaining is the process of negotiation between trade unions (representing employees) and employers to determine terms and conditions of employment such as wages, working hours, benefits, and workplace policies. Bargaining councils are established per industry sector to facilitate this process. Agreements reached are binding on all parties.",
  },
  {
    id: 72,
    unit: "environments",
    q: "What is the impact of technological changes on the business environment?",
    a: "Technology impacts businesses through: automation replacing manual labour, e-commerce expanding market reach, social media changing marketing approaches, artificial intelligence improving decision-making, cybersecurity threats increasing risks, remote working changing workplace culture, and big data enabling better market analysis. Businesses must adapt or risk becoming obsolete.",
  },
  {
    id: 73,
    unit: "marketing",
    q: "What is the difference between a niche market and a mass market?",
    a: "A mass market targets the largest possible audience with standardised products (e.g. bread, milk). A niche market targets a small, specialised segment with tailored products (e.g. gluten-free baked goods, luxury safari tours). Niche markets face less competition but have smaller customer bases; mass markets have larger sales volumes but intense competition.",
  },
  {
    id: 74,
    unit: "operations",
    q: "What is the role of management in ensuring quality in business operations?",
    a: "Management must: set quality standards and objectives, implement quality management systems (ISO 9001, TQM), train employees in quality procedures, monitor and measure quality performance, take corrective action when standards are not met, allocate resources for quality improvement, and create a culture where quality is everyone's responsibility.",
  },
  {
    id: 75,
    unit: "ventures",
    q: "What sources of funding are available for new business ventures in South Africa?",
    a: "1. Own savings and contributions\n2. Bank loans and overdraft facilities\n3. Government agencies (SEFA, IDC, NEF)\n4. Venture capital and angel investors\n5. Crowdfunding platforms\n6. Micro-lenders\n7. Trade credit from suppliers\n8. Grants and incentives (e.g. DTI incentive programmes)\n9. Family and friends",
  },
];

// ============================================================
// QUIZ DATA
// ============================================================
export const quizQuestions: QuizQuestion[] = [
  // --- Business Environments ---
  {
    id: 1,
    unit: "environments",
    question: "Which of the following is a factor in the macro environment?",
    options: ["Employees", "Customers", "Economic conditions", "Suppliers"],
    correct: 2,
    explanation:
      "Economic conditions (e.g. inflation, interest rates, exchange rates) are part of the macro environment. Employees are part of the micro environment. Customers and suppliers are part of the market environment.",
  },
  {
    id: 2,
    unit: "environments",
    question: "What does B-BBEE stand for?",
    options: [
      "Basic Black Economic Empowerment",
      "Broad-Based Black Economic Empowerment",
      "Business-Based Black Economic Empowerment",
      "Broad-Based Business Economic Empowerment",
    ],
    correct: 1,
    explanation:
      "B-BBEE stands for Broad-Based Black Economic Empowerment. It is a South African government policy aimed at redressing the inequalities of apartheid by giving previously disadvantaged groups economic opportunities.",
  },
  {
    id: 3,
    unit: "environments",
    question: "The Competition Commission primarily aims to:",
    options: [
      "Collect taxes from businesses",
      "Investigate and prevent anti-competitive business practices",
      "Register new companies",
      "Set minimum wages for workers",
    ],
    correct: 1,
    explanation:
      "The Competition Commission investigates and prevents anti-competitive practices such as price fixing, market allocation, and abuse of dominant positions. It enforces the Competition Act (No. 89 of 1998).",
  },
  {
    id: 4,
    unit: "environments",
    question: "Which element is NOT part of PESTLE analysis?",
    options: ["Political", "Economic", "Strengths", "Technological"],
    correct: 2,
    explanation:
      "PESTLE stands for Political, Economic, Social, Technological, Legal, and Environmental. 'Strengths' is part of a SWOT analysis, not PESTLE.",
  },
  {
    id: 5,
    unit: "environments",
    question: "Corporate Social Responsibility (CSR) involves a business:",
    options: [
      "Only focusing on maximising shareholder profit",
      "Acting ethically and contributing to society and the environment beyond legal requirements",
      "Following the minimum legal requirements only",
      "Avoiding interaction with the community",
    ],
    correct: 1,
    explanation:
      "CSR means a business voluntarily goes beyond legal compliance to contribute positively to society, the environment, and stakeholders. It includes community development, environmental sustainability, and ethical governance.",
  },
  // --- Business Operations ---
  {
    id: 6,
    unit: "operations",
    question:
      "Under the CPA, a consumer may return a defective product for repair, replacement, or refund within:",
    options: ["30 days", "3 months", "6 months", "12 months"],
    correct: 2,
    explanation:
      "Under the Consumer Protection Act (No. 68 of 2008), consumers have 6 months from the date of purchase to return defective goods and choose between repair, replacement, or refund.",
  },
  {
    id: 7,
    unit: "operations",
    question: "What does TQM stand for?",
    options: [
      "Total Quality Management",
      "Total Quantity Monitoring",
      "Technical Quality Measures",
      "Total Quality Measurement",
    ],
    correct: 0,
    explanation:
      "TQM stands for Total Quality Management. It is a management approach that involves all employees in continuous improvement of quality in products, services, and processes.",
  },
  {
    id: 8,
    unit: "operations",
    question:
      "The King IV Report on Corporate Governance operates on what basis?",
    options: [
      "Apply or explain",
      "Apply and explain",
      "Comply or explain",
      "Comply and explain",
    ],
    correct: 1,
    explanation:
      "King IV operates on an 'apply AND explain' basis. This means organisations must apply the principles and explain how they have been applied. This differs from King III which used 'apply or explain.'",
  },
  {
    id: 9,
    unit: "operations",
    question: "The National Credit Act (NCA) primarily protects consumers from:",
    options: [
      "Poor quality products",
      "Unfair dismissal",
      "Reckless lending and over-indebtedness",
      "Environmental pollution",
    ],
    correct: 2,
    explanation:
      "The NCA (No. 34 of 2005) protects consumers from reckless credit granting and over-indebtedness. It requires credit providers to assess the consumer's ability to repay before granting credit.",
  },
  {
    id: 10,
    unit: "operations",
    question:
      "Which organisation issues the quality mark for products meeting South African standards?",
    options: ["SARS", "SABS", "CCMA", "CIPC"],
    correct: 1,
    explanation:
      "The South African Bureau of Standards (SABS) tests products for compliance with national standards and issues the SABS mark of quality to products that meet the required standards.",
  },
  // --- Ethics & Professionalism ---
  {
    id: 11,
    unit: "ethics",
    question:
      "Which Act protects employees who report unethical or illegal activities in the workplace?",
    options: [
      "Labour Relations Act",
      "Consumer Protection Act",
      "Protected Disclosures Act",
      "Employment Equity Act",
    ],
    correct: 2,
    explanation:
      "The Protected Disclosures Act (No. 26 of 2000) protects whistleblowers — employees who disclose information about unlawful or irregular conduct by their employers — from occupational detriment.",
  },
  {
    id: 12,
    unit: "ethics",
    question:
      "The triple bottom line measures business success in terms of:",
    options: [
      "Revenue, expenses, and profit",
      "People, planet, and profit",
      "Quality, quantity, and price",
      "Input, process, and output",
    ],
    correct: 1,
    explanation:
      "The triple bottom line measures success across three dimensions: People (social responsibility), Planet (environmental sustainability), and Profit (economic performance). Ethical businesses balance all three.",
  },
  {
    id: 13,
    unit: "ethics",
    question:
      "Which principle of King IV specifically addresses ethical leadership?",
    options: [
      "Principle 5: Reporting",
      "Principle 1: Leadership",
      "Principle 3: Strategy",
      "Principle 8: Committees",
    ],
    correct: 1,
    explanation:
      "King IV Principle 1 states that the governing body should lead ethically and effectively. This includes integrity, competence, responsibility, accountability, fairness, and transparency.",
  },
  {
    id: 14,
    unit: "ethics",
    question:
      "The Prevention and Combating of Corrupt Activities Act makes which of the following illegal?",
    options: [
      "Competitive pricing",
      "Offering or accepting bribes",
      "Employee performance reviews",
      "Trade union membership",
    ],
    correct: 1,
    explanation:
      "The Prevention and Combating of Corrupt Activities Act (No. 12 of 2004) criminalises bribery, corruption, and related activities. Offering, giving, or accepting bribes is a criminal offence punishable by fines and imprisonment.",
  },
  {
    id: 15,
    unit: "ethics",
    question:
      "Which of the following is an example of an unethical business practice?",
    options: [
      "Implementing a fair recruitment process",
      "Publishing audited financial statements",
      "Using misleading advertising to exaggerate product benefits",
      "Paying employees above minimum wage",
    ],
    correct: 2,
    explanation:
      "Misleading advertising that exaggerates product benefits is unethical and also illegal under the Consumer Protection Act. It deceives consumers and creates false expectations about a product.",
  },
  // --- Business Ventures ---
  {
    id: 16,
    unit: "ventures",
    question:
      "New Close Corporations (CCs) can no longer be registered in South Africa since:",
    options: ["2004", "2008", "2011", "2015"],
    correct: 2,
    explanation:
      "Since 1 May 2011, under the Companies Act (No. 71 of 2008), no new Close Corporations can be registered. Existing CCs may continue to operate or voluntarily convert to private companies (Pty Ltd).",
  },
  {
    id: 17,
    unit: "ventures",
    question:
      "Which government agency specifically provides non-financial support to small businesses?",
    options: ["SARS", "SEDA", "JSE", "SABS"],
    correct: 1,
    explanation:
      "SEDA (Small Enterprise Development Agency) provides non-financial support including business advice, training, mentoring, and business plan development. Financial support is provided by SEFA (Small Enterprise Finance Agency).",
  },
  {
    id: 18,
    unit: "ventures",
    question:
      "A franchise agreement typically requires the franchisee to pay:",
    options: [
      "Only a once-off joining fee",
      "An initial franchise fee and ongoing royalties",
      "No fees if the brand is well-known",
      "A percentage of their personal salary",
    ],
    correct: 1,
    explanation:
      "A franchise agreement typically requires an initial franchise fee (upfront payment for the right to use the brand) and ongoing royalties (a percentage of turnover/revenue paid regularly to the franchisor).",
  },
  {
    id: 19,
    unit: "ventures",
    question: "Company registration in South Africa is done through:",
    options: ["SARS", "CCMA", "CIPC", "SABS"],
    correct: 2,
    explanation:
      "CIPC (Companies and Intellectual Properties Commission) handles company registration, including name reservations, registration of companies, close corporations, and cooperatives, as well as intellectual property registration.",
  },
  {
    id: 20,
    unit: "ventures",
    question:
      "A key advantage of a private company (Pty Ltd) over a sole trader is:",
    options: [
      "Simpler registration process",
      "No need for financial records",
      "Limited liability for shareholders",
      "Lower tax rates",
    ],
    correct: 2,
    explanation:
      "A Pty Ltd has a separate legal entity, meaning shareholders' personal assets are protected from business debts (limited liability). A sole trader has unlimited liability — personal assets can be seized to pay business debts.",
  },
  // --- Human Resources ---
  {
    id: 21,
    unit: "human-resources",
    question:
      "According to the BCEA, the maximum ordinary working hours per week is:",
    options: ["35 hours", "40 hours", "45 hours", "48 hours"],
    correct: 2,
    explanation:
      "The Basic Conditions of Employment Act (BCEA) sets the maximum ordinary working hours at 45 hours per week (9 hours per day for a 5-day week or 8 hours per day for a 6-day week).",
  },
  {
    id: 22,
    unit: "human-resources",
    question:
      "Which body resolves labour disputes through conciliation, mediation, and arbitration?",
    options: ["SABS", "CIPC", "CCMA", "FSCA"],
    correct: 2,
    explanation:
      "The CCMA (Commission for Conciliation, Mediation and Arbitration) resolves labour disputes. It handles unfair dismissal cases, unfair labour practice disputes, and severance pay claims. Its services are free.",
  },
  {
    id: 23,
    unit: "human-resources",
    question:
      "Under the LRA, dismissal for operational requirements is commonly known as:",
    options: ["Misconduct", "Incapacity", "Retrenchment", "Resignation"],
    correct: 2,
    explanation:
      "Dismissal for operational requirements (retrenchment) occurs when a business needs to reduce its workforce due to economic, technological, or structural reasons. The employer must follow the Section 189 consultation process outlined in the LRA.",
  },
  {
    id: 24,
    unit: "human-resources",
    question:
      "The Skills Development Levy is what percentage of an employer's payroll?",
    options: ["0.5%", "1%", "2%", "5%"],
    correct: 1,
    explanation:
      "Under the Skills Development Levies Act, employers with a payroll exceeding R500 000 per annum must pay a skills development levy of 1% of their total payroll to SARS. 80% goes to the relevant SETA and 20% to the National Skills Fund.",
  },
  {
    id: 25,
    unit: "human-resources",
    question:
      "The Employment Equity Act requires designated employers to:",
    options: [
      "Pay all employees the same salary",
      "Implement affirmative action to ensure equitable representation",
      "Only employ previously disadvantaged individuals",
      "Eliminate all performance-based promotions",
    ],
    correct: 1,
    explanation:
      "The Employment Equity Act (No. 55 of 1998) requires designated employers to implement affirmative action measures to achieve equitable representation of designated groups (black people, women, people with disabilities) at all occupational levels.",
  },
  // --- Marketing ---
  {
    id: 26,
    unit: "marketing",
    question:
      "Which pricing strategy involves setting a high initial price and gradually lowering it?",
    options: [
      "Penetration pricing",
      "Cost-plus pricing",
      "Price skimming",
      "Competitive pricing",
    ],
    correct: 2,
    explanation:
      "Price skimming sets a high initial price to maximise revenue from early adopters willing to pay a premium, then gradually lowers the price to attract more price-sensitive customers. It is used for innovative or unique products.",
  },
  {
    id: 27,
    unit: "marketing",
    question:
      "Market segmentation based on lifestyle, values, and personality is called:",
    options: [
      "Demographic segmentation",
      "Geographic segmentation",
      "Psychographic segmentation",
      "Behavioural segmentation",
    ],
    correct: 2,
    explanation:
      "Psychographic segmentation divides the market based on lifestyle, values, attitudes, interests, and personality traits. Demographic uses age, gender, income; geographic uses location; behavioural uses usage patterns and loyalty.",
  },
  {
    id: 28,
    unit: "marketing",
    question:
      "Under the CPA, which of the following marketing practices is prohibited?",
    options: [
      "Advertising a sale with genuine discounts",
      "Bait marketing — advertising products not available in reasonable quantities",
      "Using social media to promote products",
      "Offering a money-back guarantee",
    ],
    correct: 1,
    explanation:
      "Bait marketing is prohibited under the CPA. It involves advertising products at attractive prices when the business knows it does not have reasonable quantities available, intending to lure customers to buy other (often more expensive) products.",
  },
  {
    id: 29,
    unit: "marketing",
    question:
      "During which stage of the product life cycle are profits typically at their highest?",
    options: ["Introduction", "Growth", "Maturity", "Decline"],
    correct: 2,
    explanation:
      "Profits are typically highest during the maturity stage when the product has maximum market penetration, production costs are lowest due to economies of scale, and the product has established brand loyalty, even though competition is intense.",
  },
  {
    id: 30,
    unit: "marketing",
    question:
      "Which of the following is an example of a distribution channel?",
    options: [
      "A television advertisement",
      "A manufacturer selling directly to consumers online",
      "A discount coupon",
      "A press release",
    ],
    correct: 1,
    explanation:
      "A distribution channel is the path a product takes from manufacturer to consumer. Selling directly to consumers online is a direct distribution channel. Advertisements, coupons, and press releases are promotion tools, not distribution channels.",
  },
  // --- Investment & Finance ---
  {
    id: 31,
    unit: "investment",
    question: "The Johannesburg Stock Exchange (JSE) is regulated by the:",
    options: ["SARS", "CCMA", "FSCA", "SABS"],
    correct: 2,
    explanation:
      "The Financial Sector Conduct Authority (FSCA), previously the Financial Services Board (FSB), regulates the JSE and other financial institutions. It ensures fair market conduct and protects consumers of financial services.",
  },
  {
    id: 32,
    unit: "investment",
    question:
      "An ideal current ratio for a business is generally considered to be:",
    options: ["0.5:1", "1:1", "2:1", "5:1"],
    correct: 2,
    explanation:
      "An ideal current ratio is 2:1, meaning the business has R2 in current assets for every R1 in current liabilities. This indicates sufficient liquidity to meet short-term obligations. Below 1:1 may indicate liquidity problems; too high may mean assets are not being used efficiently.",
  },
  {
    id: 33,
    unit: "investment",
    question:
      "The annual contribution limit for a Tax-Free Savings Account (TFSA) in South Africa is:",
    options: ["R33 000", "R36 000", "R50 000", "R100 000"],
    correct: 1,
    explanation:
      "The annual contribution limit for a TFSA is R36 000 per tax year, with a lifetime limit of R500 000. Interest, dividends, and capital gains earned within a TFSA are tax-free. Contributions exceeding the limit are taxed at 40%.",
  },
  {
    id: 34,
    unit: "investment",
    question:
      "Which investment option generally carries the HIGHEST risk?",
    options: [
      "Fixed deposit",
      "Government bond",
      "Shares on the JSE",
      "Savings account",
    ],
    correct: 2,
    explanation:
      "Shares carry the highest risk because their value fluctuates based on company performance and market conditions. However, they also offer the highest potential returns through dividends and capital growth. Fixed deposits, bonds, and savings accounts are lower risk with lower returns.",
  },
  {
    id: 35,
    unit: "investment",
    question:
      "A balance sheet shows a business's financial position at:",
    options: [
      "The end of the financial year only",
      "A specific point in time",
      "Over a period of time",
      "The beginning of the financial year only",
    ],
    correct: 1,
    explanation:
      "A balance sheet shows the financial position of a business at a specific point in time (a snapshot), listing assets, liabilities, and owner's equity. An income statement, by contrast, shows performance over a period of time.",
  },
];

// ============================================================
// FEYNMAN TOPICS
// ============================================================
export const feynmanTopics: FeynmanTopic[] = [
  {
    id: "1",
    title: "Business Environments",
    prompt:
      "Explain the three business environments (micro, market, and macro), how they differ in terms of business control, and how tools like SWOT and PESTLE are used to analyse them.",
    keyConcepts: [
      "Three environments: micro (internal — management, employees, culture), market (customers, suppliers, competitors, intermediaries), and macro (PESTLE factors)",
      "SWOT analysis identifies internal Strengths/Weaknesses and external Opportunities/Threats",
      "PESTLE: Political, Economic, Social, Technological, Legal, Environmental — all uncontrollable macro factors",
      "Businesses have full control over micro, some influence over market, no control over macro environment",
      "Corporate Social Responsibility (CSR) means acting ethically beyond legal compliance — linked to B-BBEE in SA",
      "B-BBEE scorecard measures: ownership, management control, skills development, enterprise/supplier development, socio-economic development",
      "The Competition Commission enforces the Competition Act — prevents price fixing, market allocation, abuse of dominance",
    ],
    examTip:
      "In exam questions on business environments, always classify factors into the correct environment (micro, market, or macro). Use PESTLE as a framework for macro questions and SWOT for strategic analysis. Link challenges to SA-specific issues like load shedding, unemployment, and B-BBEE compliance.",
  },
  {
    id: "2",
    title: "Business Operations",
    prompt:
      "Explain how operations management works in a business, including quality management approaches (TQM, QC vs QA), key consumer protection legislation (CPA, NCA), and the role of corporate governance (King IV).",
    keyConcepts: [
      "Operations management covers inputs, processes, outputs, and quality management",
      "Total Quality Management (TQM): continuous improvement, customer focus, employee involvement — quality is everyone's responsibility",
      "Quality control (QC) detects defects after production; quality assurance (QA) prevents defects during production",
      "Consumer Protection Act (CPA No. 68 of 2008): 8 consumer rights including right to safety, fair dealing, and 6-month return policy for defective goods",
      "National Credit Act (NCA No. 34 of 2005): prevents reckless lending, requires affordability assessment, protects consumers from over-indebtedness",
      "King IV Report: corporate governance on 'apply AND explain' basis — ethical leadership, transparency, stakeholder inclusivity",
      "SABS issues quality marks; National Consumer Commission (NCC) enforces the CPA",
    ],
    examTip:
      "Operations questions often ask you to apply legislation to scenarios. Know the 8 consumer rights under the CPA by heart and be able to identify which right has been violated in a case study. Distinguish between QC (inspection after) and QA (prevention during) — examiners frequently test this difference.",
  },
  {
    id: "3",
    title: "Ethics and Professionalism",
    prompt:
      "Explain the role of ethics and professionalism in business, including codes of ethics, the King IV principles on ethical leadership, the triple bottom line, and legislation protecting whistleblowers and combating corruption.",
    keyConcepts: [
      "Ethics are moral principles guiding right and wrong behaviour; professionalism is conducting business with competence and integrity",
      "A code of ethics is a formal document setting out expected standards of behaviour — guides decision-making and provides a disciplinary framework",
      "King IV Principle 1: governing body must lead ethically and effectively — integrity, competence, responsibility, accountability, fairness, transparency",
      "The triple bottom line: People (social), Planet (environment), Profit (economic) — ethical businesses balance all three",
      "Protected Disclosures Act (No. 26 of 2000) protects whistleblowers who report wrongdoing from occupational detriment",
      "Prevention and Combating of Corrupt Activities Act (No. 12 of 2004) criminalises bribery and corruption",
      "Unethical behaviour consequences: legal penalties, reputation damage, loss of customers and investors, employee turnover, business failure",
    ],
    examTip:
      "Ethics questions in the NSC exam often present scenarios requiring you to identify unethical behaviour and recommend solutions. Always refer to specific legislation (Protected Disclosures Act, Prevention of Corruption Act) and King IV principles. Use the Steinhoff scandal as a real SA example of the consequences of unethical leadership.",
  },
  {
    id: "4",
    title: "Business Ventures",
    prompt:
      "Explain the different forms of business ownership in South Africa, the difference between franchises and independent businesses, key components of a business plan, and the role of support agencies like SEDA and SEFA.",
    keyConcepts: [
      "Forms of ownership: sole trader (unlimited liability), partnership (2-20), CC (no new registrations since 2011), Pty Ltd (limited liability, separate legal entity), Ltd (JSE-listed), NPC, cooperative",
      "Franchise: buy rights to existing brand and model (lower risk, less freedom) vs. independent business (full control, higher risk)",
      "Business plan components: executive summary, business description, market analysis, marketing strategy, organisational structure, operational plan, financial projections, SWOT",
      "Companies Act (No. 71 of 2008): governs company registration through CIPC, introduces MOI (Memorandum of Incorporation)",
      "SEDA provides non-financial support (advice, training, mentoring); SEFA provides financial support to small businesses",
      "Location factors: proximity to market, accessibility, cost, suppliers, labour, competition, zoning, infrastructure, security",
      "Sources of funding: own savings, bank loans, government agencies (SEFA, IDC, NEF), venture capital, crowdfunding, trade credit",
    ],
    examTip:
      "Exam questions frequently compare forms of ownership — know the differences in liability, legal personality, number of owners, and registration requirements. When asked about choosing a form of ownership, match the characteristics to the scenario. Remember: no new CCs since 2011 is a common trick question.",
  },
  {
    id: "5",
    title: "Human Resources",
    prompt:
      "Explain the key labour legislation in South Africa (LRA, BCEA, EEA, SDA), the role of the CCMA, the three types of dismissal, and the recruitment and selection process.",
    keyConcepts: [
      "Labour Relations Act (LRA No. 66 of 1995): establishes CCMA, defines fair dismissal procedures, regulates strikes/lockouts, promotes labour peace",
      "Three types of dismissal: misconduct (fair hearing required), incapacity (counselling/training first), operational requirements/retrenchment (Section 189 consultation)",
      "BCEA (No. 75 of 1997): 45 hours/week max, overtime at 1.5x, 21 days annual leave, 6 weeks sick leave per 36 months, 4 months maternity leave",
      "Employment Equity Act (No. 55 of 1998): eliminates unfair discrimination, requires affirmative action by designated employers for designated groups",
      "Skills Development Act: SETAs, 1% skills development levy on payrolls over R500 000, promotes workplace training and learnerships",
      "CCMA resolves disputes through conciliation (negotiate), mediation (suggest solutions), and arbitration (binding decision) — services are free",
      "Recruitment process: job analysis → job description/specification → advertise → screen → interview → checks → appoint → induction",
    ],
    examTip:
      "Labour legislation is heavily tested. Know the specific provisions of the BCEA (exact hours, leave days), the three types of dismissal and their procedures, and the difference between a strike and a lockout. In scenario questions, identify which Act has been violated and what remedy is available through the CCMA.",
  },
  {
    id: "6",
    title: "Marketing",
    prompt:
      "Explain the marketing mix (4 Ps), market segmentation, the product life cycle, primary vs secondary research, and how the CPA impacts marketing practices.",
    keyConcepts: [
      "Marketing mix (4 Ps): Product (features, quality, branding), Price (strategies: cost-plus, penetration, skimming, competitive), Place (distribution channels), Promotion (advertising, sales promotion, PR, personal selling)",
      "Market segmentation bases: demographic (age, gender, income), geographic (location), psychographic (lifestyle, values), behavioural (usage, loyalty)",
      "Product life cycle: introduction (high costs, low sales) → growth (rising sales/profits) → maturity (peak sales, max profit) → decline (falling sales)",
      "Primary research: original data (surveys, interviews, focus groups) — expensive but specific; secondary research: existing data (Stats SA, reports) — cheaper but may be outdated",
      "CPA impact on marketing: no misleading advertising, no bait marketing, plain language labelling, opt-out for direct marketing, prices must include VAT",
      "Target market: specific consumer group identified through segmentation; niche market targets small specialised segment vs. mass market targets broad audience",
      "Promotion mix: advertising (paid, builds brand), sales promotion (short-term incentives), PR (reputation management, earned media), personal selling (direct interaction)",
    ],
    examTip:
      "Marketing questions often ask you to develop a marketing strategy for a given scenario. Structure your answer around the 4 Ps and link each element to the target market. Know the product life cycle stages and appropriate strategies for each stage. CPA regulations on marketing are frequently examined — especially bait marketing and misleading advertising.",
  },
  {
    id: "7",
    title: "Investment and Finance",
    prompt:
      "Explain the different investment options available in South Africa, the role of the JSE, key financial statements and ratios, and the difference between short-term and long-term insurance.",
    keyConcepts: [
      "Investment options: shares (high risk, high return), unit trusts (medium risk, diversified), fixed deposits (low risk, guaranteed return), property, retirement annuities",
      "JSE (Johannesburg Stock Exchange): regulated by FSCA, companies list to raise capital, share prices driven by supply and demand, ALSI tracks market performance",
      "Factors influencing investment: risk vs. return, time horizon, liquidity, inflation, tax implications, diversification",
      "Insurance: short-term (assets — fire, theft, accident; annual renewal) vs. long-term (life, disability, retirement; extended period)",
      "Financial statements: income statement (performance over a period — revenue minus expenses = profit/loss) vs. balance sheet (position at a point in time — assets = liabilities + equity)",
      "Key ratios: gross profit % (GP/sales x 100), net profit % (NP/sales x 100), current ratio (CA/CL — ideal 2:1), acid test ((CA-stock)/CL — ideal 1:1)",
      "Tax-Free Savings Account: R36 000/year, R500 000 lifetime limit, no tax on returns; Retirement Annuity: tax-deductible contributions, locked until age 55",
    ],
    examTip:
      "Investment questions test your ability to advise on appropriate investment options based on risk tolerance and time horizon. Know how to calculate and interpret financial ratios — examiners expect you to analyse whether ratios are healthy and recommend improvements. Always link investment advice to the investor's specific circumstances.",
  },
];
