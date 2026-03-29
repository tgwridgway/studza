import type { Flashcard, QuizQuestion, FeynmanTopic } from "@/features/curriculum/types";

// ============================================================
// FLASHCARD DATA - Accounting
// Units: financial-statements, financial-indicators, ethics,
//        manufacturing, cost-accounting, budgets, inventory,
//        vat-assets
// ============================================================
export const flashcards: Flashcard[] = [
  // --- Company Financial Statements ---
  { id: 1, unit: "financial-statements", q: "What is the purpose of the Income Statement?", a: "The Income Statement shows the financial performance of a company over a specific period. It reports revenue earned and expenses incurred, resulting in either a net profit or net loss for the period." },
  { id: 2, unit: "financial-statements", q: "What is the purpose of the Balance Sheet (Statement of Financial Position)?", a: "The Balance Sheet shows the financial position of a company at a specific date. It lists all assets (what the company owns), liabilities (what the company owes), and shareholders' equity (owners' interest)." },
  { id: 3, unit: "financial-statements", q: "What is the accounting equation?", a: "Assets = Owners' Equity + Liabilities. This equation must always balance. In a company context: Assets = Shareholders' Equity + Liabilities." },
  { id: 4, unit: "financial-statements", q: "What is the difference between ordinary share capital and retained income?", a: "Ordinary share capital is the money invested by shareholders through buying shares in the company. Retained income (retained earnings) is the accumulated net profits that have not been distributed as dividends — it represents profits ploughed back into the business." },
  { id: 5, unit: "financial-statements", q: "List the components of Shareholders' Equity on the Balance Sheet.", a: "1. Ordinary share capital (shares issued)\n2. Retained income (accumulated undistributed profits)\n3. Together these form the total shareholders' equity (net worth of the company belonging to shareholders)." },
  { id: 6, unit: "financial-statements", q: "What is a dividend?", a: "A dividend is a distribution of a portion of the company's profits to shareholders. It is declared by the board of directors. Dividends reduce retained income. They are not an expense but an appropriation of profit." },
  { id: 7, unit: "financial-statements", q: "What are trade and other receivables (debtors)?", a: "Trade and other receivables are amounts owed to the company by customers who have purchased goods or services on credit. They are classified as current assets on the Balance Sheet because they are expected to be collected within 12 months." },
  { id: 8, unit: "financial-statements", q: "What are trade and other payables (creditors)?", a: "Trade and other payables are amounts the company owes to suppliers for goods or services purchased on credit. They are classified as current liabilities on the Balance Sheet because they are due within 12 months." },
  { id: 9, unit: "financial-statements", q: "What is the difference between current and non-current assets?", a: "Current assets are expected to be converted to cash or used up within 12 months (e.g. inventory, debtors, bank, cash). Non-current assets (fixed assets) are long-term assets used in the business for more than one year (e.g. land, buildings, vehicles, equipment)." },
  { id: 10, unit: "financial-statements", q: "What is depreciation?", a: "Depreciation is the systematic allocation of the cost of a tangible non-current asset over its useful life. It recognises that assets lose value over time due to wear and tear, age, or obsolescence. It is recorded as an expense on the Income Statement and reduces the carrying value of the asset on the Balance Sheet." },
  { id: 11, unit: "financial-statements", q: "What is the straight-line method of depreciation?", a: "Depreciation is calculated as a fixed percentage of the original cost price each year. Formula: Depreciation = Cost price x Rate / 100. The depreciation amount remains the same every year." },
  { id: 12, unit: "financial-statements", q: "What is the diminishing balance method of depreciation?", a: "Depreciation is calculated as a fixed percentage of the carrying value (book value) at the beginning of each year. The depreciation amount decreases each year as the carrying value decreases. Formula: Depreciation = Carrying value x Rate / 100." },
  { id: 13, unit: "financial-statements", q: "What is the carrying value (book value) of an asset?", a: "Carrying value = Cost price - Accumulated depreciation. It represents the remaining value of an asset as shown in the accounting records. It is not necessarily the market value of the asset." },
  { id: 14, unit: "financial-statements", q: "How is the profit or loss on disposal of an asset calculated?", a: "Profit/Loss on disposal = Selling price - Carrying value.\nIf selling price > carrying value = Profit on disposal.\nIf selling price < carrying value = Loss on disposal.\nThis appears on the Income Statement." },

  // --- Financial Indicators & Audit ---
  { id: 15, unit: "financial-indicators", q: "What is the current ratio? What is the ideal ratio?", a: "Current ratio = Current assets / Current liabilities. It measures the ability to pay short-term debts. The ideal ratio is 2:1, meaning the company has R2 of current assets for every R1 of current liabilities." },
  { id: 16, unit: "financial-indicators", q: "What is the acid-test (quick) ratio?", a: "Acid-test ratio = (Current assets - Inventory) / Current liabilities. It measures the ability to pay short-term debts without relying on selling inventory. The ideal ratio is 1:1." },
  { id: 17, unit: "financial-indicators", q: "What is the debt-equity ratio?", a: "Debt-equity ratio = Total liabilities / Shareholders' equity (or Non-current liabilities / Shareholders' equity depending on the variation). It measures the extent to which the company is financed by debt compared to equity. A lower ratio indicates less financial risk." },
  { id: 18, unit: "financial-indicators", q: "What is the return on equity (ROE)?", a: "ROE = Net profit after tax / Average shareholders' equity x 100. It measures how effectively the company uses shareholders' funds to generate profit. A higher ROE indicates better performance. It should exceed the return from risk-free investments like fixed deposits." },
  { id: 19, unit: "financial-indicators", q: "What is the gross profit percentage?", a: "Gross profit percentage = Gross profit / Sales x 100. It measures the percentage of sales revenue remaining after deducting cost of sales. A higher percentage indicates better pricing or cost control on goods sold." },
  { id: 20, unit: "financial-indicators", q: "What is the net profit percentage?", a: "Net profit percentage = Net profit before tax / Sales x 100. It measures the percentage of revenue that remains as profit after all operating expenses are deducted. A higher percentage means the company controls costs effectively." },
  { id: 21, unit: "financial-indicators", q: "What is the purpose of an audit?", a: "An audit is an independent examination of a company's financial statements and accounting records to verify that they are accurate, complete, and comply with GAAP (Generally Accepted Accounting Practice). The auditor gives an opinion on whether the financial statements present a true and fair view." },
  { id: 22, unit: "financial-indicators", q: "What is the difference between an internal and external audit?", a: "Internal audit: conducted by employees of the company to evaluate internal controls, risk management, and operational efficiency. External audit: conducted by an independent registered auditor to express an opinion on whether financial statements are fairly presented and comply with accounting standards." },
  { id: 23, unit: "financial-indicators", q: "What is earnings per share (EPS)?", a: "EPS = Net profit after tax / Number of shares issued. It shows the profit earned for each share. Shareholders use it to assess the profitability of their investment and compare it with other companies." },
  { id: 24, unit: "financial-indicators", q: "What is the dividends per share (DPS)?", a: "DPS = Total dividends paid / Number of shares issued. It indicates how much each shareholder receives per share. A comparison of DPS and EPS shows the proportion of profit distributed versus retained." },

  // --- Ethics & Internal Control ---
  { id: 25, unit: "ethics", q: "What is meant by ethics in accounting?", a: "Ethics in accounting refers to the moral principles and values that guide the behaviour of accountants. It includes honesty, integrity, transparency, accountability, and fairness in the preparation and presentation of financial information." },
  { id: 26, unit: "ethics", q: "Give four examples of unethical behaviour in accounting.", a: "1. Inflating revenue or assets to make the company look more profitable\n2. Hiding liabilities or expenses from financial statements\n3. Using company funds for personal benefit (misappropriation)\n4. Insider trading — using confidential financial information for personal gain on the stock market" },
  { id: 27, unit: "ethics", q: "What is internal control?", a: "Internal control is the system of policies, procedures, and measures adopted by a company to safeguard assets, ensure accuracy of accounting records, promote operational efficiency, and encourage compliance with company policies and legal requirements." },
  { id: 28, unit: "ethics", q: "List five examples of internal control measures.", a: "1. Segregation (separation) of duties — no single person handles a transaction from start to finish\n2. Authorisation of transactions — requiring approval before payments\n3. Physical controls — safes, locked storerooms, security cameras\n4. Regular bank reconciliations\n5. Independent checks and audits — stock counts, surprise cash counts" },
  { id: 29, unit: "ethics", q: "What is the purpose of the Companies Act (No. 71 of 2008)?", a: "The Companies Act regulates the formation, management, and operation of companies in South Africa. It promotes transparency, accountability, and good corporate governance. It sets rules for directors' duties, financial reporting, and shareholders' rights." },
  { id: 30, unit: "ethics", q: "What is the role of the accounting officer / director in corporate governance?", a: "Directors have a fiduciary duty to act in the best interests of the company. They must exercise care, skill, and diligence, avoid conflicts of interest, not misuse company assets or information, and ensure that the company maintains proper financial records and complies with laws." },
  { id: 31, unit: "ethics", q: "What is the King Code (King IV) on Corporate Governance?", a: "The King IV Report is a set of voluntary principles and guidelines for good corporate governance in South Africa. It promotes ethical leadership, sustainability, responsible corporate citizenship, and transparency in reporting. It applies to all organisations." },
  { id: 32, unit: "ethics", q: "What is segregation of duties and why is it important?", a: "Segregation of duties means dividing tasks and responsibilities among different people so that no single person has complete control over all aspects of a transaction. It is important because it reduces the risk of fraud and errors by requiring multiple people to be involved." },

  // --- Manufacturing Concepts ---
  { id: 33, unit: "manufacturing", q: "What are the three elements of production cost?", a: "1. Direct materials — raw materials that form part of the finished product\n2. Direct labour — wages of workers who work directly on manufacturing the product\n3. Factory overhead costs — all other manufacturing costs that cannot be traced directly to a unit (e.g. factory rent, indirect materials, indirect labour, electricity)" },
  { id: 34, unit: "manufacturing", q: "What is the difference between direct and indirect materials?", a: "Direct materials are raw materials that can be physically traced to the finished product (e.g. wood in furniture). Indirect materials are materials used in production that cannot be easily traced to a specific product (e.g. glue, nails, cleaning supplies, machine oil)." },
  { id: 35, unit: "manufacturing", q: "What is the difference between direct and indirect labour?", a: "Direct labour is the wages of workers who physically work on manufacturing the product (e.g. assembly line workers). Indirect labour is the wages of factory workers who do not work directly on the product (e.g. supervisors, maintenance staff, factory security, cleaners)." },
  { id: 36, unit: "manufacturing", q: "What is prime cost?", a: "Prime cost = Direct materials + Direct labour. It represents all the direct costs of manufacturing a product that can be traced to a specific unit of production." },
  { id: 37, unit: "manufacturing", q: "What are factory overhead costs? Give five examples.", a: "Factory overhead costs are all manufacturing costs that are NOT direct materials or direct labour. Examples:\n1. Factory rent and insurance\n2. Depreciation of factory equipment\n3. Indirect materials (glue, oil, cleaning materials)\n4. Indirect labour (supervisor wages)\n5. Factory electricity and water" },
  { id: 38, unit: "manufacturing", q: "What is the total production cost?", a: "Total production cost = Direct materials + Direct labour + Factory overhead costs. This is also: Prime cost + Factory overhead costs. It represents the full cost of manufacturing products." },
  { id: 39, unit: "manufacturing", q: "What is the Production Cost Statement?", a: "The Production Cost Statement (Manufacturing Account) shows the total cost of goods manufactured during a period. It details direct materials used, direct labour, factory overheads, work-in-process adjustments, and calculates the cost of finished goods produced." },
  { id: 40, unit: "manufacturing", q: "What is work-in-process (WIP)?", a: "Work-in-process (WIP) refers to partly completed goods still in the manufacturing process at the end of a period. Opening WIP is added to production costs and closing WIP is subtracted to determine the cost of finished goods manufactured." },
  { id: 41, unit: "manufacturing", q: "How is the cost of finished goods manufactured calculated?", a: "Cost of finished goods manufactured = Opening WIP + Total production cost - Closing WIP. This figure is then transferred to the Income Statement as part of cost of sales." },
  { id: 42, unit: "manufacturing", q: "What is the difference between a manufacturing concern and a merchandising concern?", a: "A manufacturing concern makes its own products from raw materials and then sells them (e.g. a furniture factory). A merchandising (trading) concern buys finished goods from suppliers and resells them without changing the product (e.g. a retail shop)." },

  // --- Cost Accounting ---
  { id: 43, unit: "cost-accounting", q: "What is a fixed cost? Give examples.", a: "A fixed cost remains constant in total regardless of the level of production within a relevant range. Examples: factory rent, insurance, salaries of permanent staff, depreciation on a straight-line basis. Per unit, fixed costs decrease as production increases." },
  { id: 44, unit: "cost-accounting", q: "What is a variable cost? Give examples.", a: "A variable cost changes in direct proportion to the level of production. If production doubles, total variable costs double. Examples: direct materials, direct labour (if paid per unit), packaging materials, sales commission. Per unit, variable costs remain constant." },
  { id: 45, unit: "cost-accounting", q: "What is the break-even point?", a: "The break-even point is the level of production/sales at which total revenue equals total costs (no profit, no loss). At this point: Sales = Variable costs + Fixed costs. It can be expressed in units or in rands." },
  { id: 46, unit: "cost-accounting", q: "How do you calculate the break-even point in units?", a: "Break-even units = Total fixed costs / Contribution per unit. Where: Contribution per unit = Selling price per unit - Variable cost per unit." },
  { id: 47, unit: "cost-accounting", q: "What is the contribution per unit?", a: "Contribution per unit = Selling price per unit - Variable cost per unit. It represents the amount each unit sold contributes towards covering fixed costs and generating profit. Once all fixed costs are covered, each additional unit's contribution becomes profit." },
  { id: 48, unit: "cost-accounting", q: "What is a break-even chart?", a: "A break-even chart is a graph that plots total costs and total revenue against the level of activity (units produced/sold). It shows the break-even point (where the two lines intersect), the margin of safety, and areas of profit and loss." },
  { id: 49, unit: "cost-accounting", q: "What is the margin of safety?", a: "Margin of safety = Actual/Budgeted sales - Break-even sales. It indicates how much sales can drop before the company incurs a loss. A large margin of safety provides a greater cushion against declining sales." },
  { id: 50, unit: "cost-accounting", q: "What is the total cost formula (cost-volume-profit)?", a: "Total cost = Fixed costs + (Variable cost per unit x Number of units). This is used in break-even analysis and cost-volume-profit (CVP) analysis to understand the relationship between costs, volume, and profit." },

  // --- Budgets ---
  { id: 51, unit: "budgets", q: "What is a budget?", a: "A budget is a financial plan that estimates income and expenditure for a future period. It is used for planning, coordination, control, and performance evaluation. It sets targets and benchmarks for the business." },
  { id: 52, unit: "budgets", q: "What is a cash budget?", a: "A cash budget shows the expected cash receipts and cash payments for a future period to determine the expected cash balance. It helps management plan for cash shortages or surpluses and make decisions about borrowing or investing." },
  { id: 53, unit: "budgets", q: "What is the difference between a cash budget and a projected income statement?", a: "A cash budget records only actual cash received and paid (cash basis). A projected income statement records income earned and expenses incurred (accrual basis) whether or not cash has been received or paid. Depreciation appears in the projected income statement but not the cash budget." },
  { id: 54, unit: "budgets", q: "Why does depreciation NOT appear in the cash budget?", a: "Depreciation is a non-cash expense — it does not involve any actual payment of cash. It is an accounting entry to allocate the cost of an asset over its useful life. Since the cash budget only records actual cash movements, depreciation is excluded." },
  { id: 55, unit: "budgets", q: "How are debtors' receipts calculated in a cash budget?", a: "Consider the credit terms and collection pattern. For example, if 60% of debtors pay in the month of sale and 40% pay the following month, calculate accordingly. Add any cash sales. Remember to deduct any bad debts (which will never be collected)." },
  { id: 56, unit: "budgets", q: "What is a projected income statement (budgeted income statement)?", a: "A projected income statement is a forecast of expected income and expenses for a future period prepared on an accrual basis. It includes non-cash items like depreciation and provision for bad debts. It is used to predict future profitability." },
  { id: 57, unit: "budgets", q: "What is a favourable variance?", a: "A favourable variance occurs when actual results are better than budgeted. For income: actual income exceeds budget. For expenses: actual expenses are less than budget. Favourable variances improve profit compared to the budget." },
  { id: 58, unit: "budgets", q: "What is an unfavourable (adverse) variance?", a: "An unfavourable variance occurs when actual results are worse than budgeted. For income: actual income is less than budget. For expenses: actual expenses exceed budget. Unfavourable variances reduce profit compared to the budget." },
  { id: 59, unit: "budgets", q: "What items appear in a cash budget but NOT in a projected income statement?", a: "1. Capital receipts and payments (loans received/repaid, asset purchases/sales)\n2. VAT paid/received\n3. Drawings by owner\n4. Loan repayments (capital portion)\nThese are cash movements that are not income or expenses." },
  { id: 60, unit: "budgets", q: "What items appear in a projected income statement but NOT in a cash budget?", a: "1. Depreciation\n2. Provision for bad debts adjustment\n3. Accrued income/expenses (income earned but not yet received, expenses incurred but not yet paid)\n4. Prepaid expenses adjustments\nThese are non-cash items or accrual adjustments." },

  // --- Inventory Valuation ---
  { id: 61, unit: "inventory", q: "What is the specific identification method of inventory valuation?", a: "Each item of inventory is individually identified and tracked. The actual cost of each specific item is used when it is sold. This method is suitable for expensive, unique items like vehicles, jewellery, or artwork." },
  { id: 62, unit: "inventory", q: "What is the FIFO method of inventory valuation?", a: "FIFO (First-In, First-Out) assumes that the first goods purchased are the first goods sold. Closing inventory is valued at the most recent purchase prices. During rising prices, FIFO gives higher closing inventory value and higher profit." },
  { id: 63, unit: "inventory", q: "What is the weighted average method of inventory valuation?", a: "A new weighted average cost per unit is calculated after each purchase. Formula: Weighted average cost = Total cost of goods available / Total units available. All units sold and in closing inventory are valued at this average cost." },
  { id: 64, unit: "inventory", q: "How does FIFO affect profit during periods of rising prices?", a: "During rising prices, FIFO values cost of sales at older (lower) prices, resulting in lower cost of sales and higher gross profit. Closing inventory is valued at newer (higher) prices, resulting in a higher inventory value on the Balance Sheet." },
  { id: 65, unit: "inventory", q: "How does weighted average affect profit compared to FIFO during rising prices?", a: "During rising prices, weighted average gives a cost of sales between the oldest and newest prices, resulting in a moderate gross profit. Closing inventory value is between the oldest and newest costs. Profit is lower than FIFO but provides a smoother result." },
  { id: 66, unit: "inventory", q: "What is the perpetual inventory system?", a: "Under the perpetual system, inventory records are updated continuously (after every purchase and sale). A stock card (inventory ledger) is maintained showing running balances. Cost of sales is calculated with each sale transaction." },
  { id: 67, unit: "inventory", q: "What is the periodic inventory system?", a: "Under the periodic system, inventory is only counted and valued at the end of the period (physical stock count). Cost of sales is calculated using: Opening inventory + Purchases - Closing inventory. No running record of inventory is maintained." },
  { id: 68, unit: "inventory", q: "What is the difference between FIFO perpetual and FIFO periodic?", a: "Under FIFO, the result is the same whether perpetual or periodic is used because the oldest costs are always used first regardless of when the calculation is done. Both systems give identical cost of sales and closing inventory figures." },
  { id: 69, unit: "inventory", q: "What is the net realisable value of inventory?", a: "Net realisable value (NRV) is the estimated selling price less any costs to complete and sell the inventory. Inventory must be valued at the lower of cost or NRV to comply with accounting standards. If NRV is below cost, inventory must be written down." },
  { id: 70, unit: "inventory", q: "What causes inventory losses and how are they recorded?", a: "Inventory losses can be caused by theft, damage, spoilage, obsolescence, or natural shrinkage. They are identified by comparing physical stock count with inventory records. Losses are debited to cost of sales or a separate inventory deficit account." },

  // --- VAT & Fixed Assets ---
  { id: 71, unit: "vat-assets", q: "What is VAT and what is the current rate in South Africa?", a: "VAT (Value Added Tax) is an indirect tax levied on the supply of goods and services. The current rate in South Africa is 15%. Businesses registered for VAT collect VAT on behalf of SARS and may claim input VAT on business purchases." },
  { id: 72, unit: "vat-assets", q: "What is the difference between input VAT and output VAT?", a: "Output VAT is the VAT charged on sales (output) — the business collects this from customers. Input VAT is the VAT paid on purchases (input) — the business pays this to suppliers. The difference is paid to or claimed from SARS." },
  { id: 73, unit: "vat-assets", q: "How do you calculate the VAT portion of a VAT-inclusive amount?", a: "VAT = VAT-inclusive amount x 15/115. To find the amount excluding VAT: Amount excl. VAT = VAT-inclusive amount x 100/115. To add VAT to an exclusive amount: VAT-inclusive = Amount x 115/100." },
  { id: 74, unit: "vat-assets", q: "What are zero-rated supplies for VAT?", a: "Zero-rated supplies are taxable at 0% VAT. Examples include basic foodstuffs (brown bread, maize meal, rice, fresh fruit and vegetables, milk, eggs), petrol, diesel, paraffin, and exports. The supplier can still claim input VAT on purchases related to these supplies." },
  { id: 75, unit: "vat-assets", q: "What are exempt supplies for VAT?", a: "Exempt supplies are not subject to VAT at all. Examples include public transport, educational services, rental of residential accommodation, financial services (interest, life insurance). The supplier CANNOT claim input VAT on purchases related to exempt supplies." },
  { id: 76, unit: "vat-assets", q: "What is the Asset Disposal account used for?", a: "The Asset Disposal account is used to record the disposal (sale, scrapping, or trade-in) of a fixed asset. The cost price, accumulated depreciation, and proceeds are recorded in this account. The resulting balance shows the profit or loss on disposal." },
  { id: 77, unit: "vat-assets", q: "What entries are made in the Asset Disposal account?", a: "Debit: Cost price of the asset being disposed of.\nCredit: Accumulated depreciation on the asset.\nCredit: Proceeds received (cash or trade-in value).\nThe balance is transferred to the Income Statement as profit (credit balance) or loss (debit balance) on disposal." },
  { id: 78, unit: "vat-assets", q: "What is an asset register?", a: "An asset register (fixed asset register) is a detailed record of all non-current (fixed) assets owned by the business. It includes information such as description, date acquired, cost price, depreciation method and rate, accumulated depreciation, carrying value, and location." },
  { id: 79, unit: "vat-assets", q: "How is the VAT control account used?", a: "The VAT control account records all input VAT (debit side) and output VAT (credit side). If the credit side exceeds the debit side, the business owes SARS (liability). If the debit side exceeds the credit side, SARS owes the business (asset/refund)." },
  { id: 80, unit: "vat-assets", q: "What is a trade-in of an asset?", a: "A trade-in occurs when an old asset is given as partial payment for a new asset. The trade-in value is treated as the selling price of the old asset. The difference between the new asset's price and the trade-in value is paid in cash. The old asset is disposed of through the Asset Disposal account." },

  // --- Additional Financial Statements ---
  { id: 81, unit: "financial-statements", q: "What is the purpose of a note on tangible assets (fixed assets note)?", a: "The note on tangible assets provides a detailed breakdown of the fixed assets showing: cost price, accumulated depreciation, and carrying value for each category of asset. It reconciles the opening and closing balances by showing additions, disposals, and depreciation for the period." },
  { id: 82, unit: "financial-statements", q: "How is cost of sales calculated in a trading company?", a: "Cost of sales = Opening inventory + Purchases - Closing inventory. Adjustments may be needed for purchase returns, carriage on purchases, and inventory losses or deficits." },

  // --- Additional Financial Indicators ---
  { id: 83, unit: "financial-indicators", q: "What is the stock turnover rate (inventory turnover)?", a: "Stock turnover rate = Cost of sales / Average inventory. Average inventory = (Opening inventory + Closing inventory) / 2. It shows how many times inventory is sold and replaced during the year. A higher rate indicates efficient inventory management." },
  { id: 84, unit: "financial-indicators", q: "What is the debtors' collection period?", a: "Debtors' collection period = Average debtors / Credit sales x 365 days. It measures the average number of days it takes to collect money from debtors. A shorter period is better for cash flow." },
  { id: 85, unit: "financial-indicators", q: "What is the creditors' payment period?", a: "Creditors' payment period = Average creditors / Credit purchases x 365 days. It measures the average number of days the company takes to pay its creditors. The company should balance timely payment with cash flow management." },
  { id: 86, unit: "financial-indicators", q: "What does the return on capital employed (ROCE) measure?", a: "ROCE measures how effectively the company uses its total capital (equity plus long-term borrowings) to generate profit. Formula: Net profit before interest and tax / Average total capital employed x 100. A higher ROCE indicates better overall performance." },

  // --- Additional Manufacturing ---
  { id: 87, unit: "manufacturing", q: "What are the three sections of a Production Cost Statement?", a: "1. Direct materials cost (raw materials consumed)\n2. Direct labour cost (wages of production workers)\n3. Factory overhead costs (indirect manufacturing costs)\nThese are combined to calculate total production cost, adjusted for work-in-process to give cost of finished goods manufactured." },

  // --- Additional Cost Accounting ---
  { id: 88, unit: "cost-accounting", q: "How do you calculate the number of units needed for a target profit?", a: "Units for target profit = (Fixed costs + Target profit) / Contribution per unit. This extends the break-even formula by adding the desired profit to the fixed costs that need to be covered." },
];

// ============================================================
// QUIZ DATA
// ============================================================
export const quizQuestions: QuizQuestion[] = [
  // --- Company Financial Statements ---
  {
    id: 1,
    unit: "financial-statements",
    question: "Which of the following is NOT a component of shareholders' equity?",
    options: ["Ordinary share capital", "Retained income", "Long-term loan", "Share premium"],
    correct: 2,
    explanation: "A long-term loan is a liability, not part of shareholders' equity. Shareholders' equity consists of ordinary share capital, retained income, and share premium (if applicable).",
  },
  {
    id: 2,
    unit: "financial-statements",
    question: "Depreciation is best described as:",
    options: [
      "The decrease in market value of an asset",
      "The systematic allocation of an asset's cost over its useful life",
      "The amount of money set aside to replace an asset",
      "The annual revaluation of an asset",
    ],
    correct: 1,
    explanation: "Depreciation is the systematic allocation of the cost of a tangible non-current asset over its useful life. It is not about market value or setting aside money for replacement.",
  },
  {
    id: 3,
    unit: "financial-statements",
    question: "A vehicle was bought for R200 000 and depreciated at 20% p.a. on the diminishing balance method. What is the carrying value after 2 years?",
    options: ["R120 000", "R128 000", "R160 000", "R80 000"],
    correct: 1,
    explanation: "Year 1: R200 000 x 20% = R40 000 depreciation; Carrying value = R160 000. Year 2: R160 000 x 20% = R32 000 depreciation; Carrying value = R128 000.",
  },
  {
    id: 4,
    unit: "financial-statements",
    question: "If an asset with a carrying value of R45 000 is sold for R50 000, the result is:",
    options: [
      "A loss on disposal of R5 000",
      "A profit on disposal of R5 000",
      "No profit or loss",
      "An increase in depreciation of R5 000",
    ],
    correct: 1,
    explanation: "Profit on disposal = Selling price - Carrying value = R50 000 - R45 000 = R5 000 profit. The selling price exceeded the carrying value.",
  },
  {
    id: 5,
    unit: "financial-statements",
    question: "Dividends declared by a company are:",
    options: [
      "An expense on the Income Statement",
      "An appropriation of profit that reduces retained income",
      "A liability that increases shareholders' equity",
      "Added to the cost of sales",
    ],
    correct: 1,
    explanation: "Dividends are not an expense. They are an appropriation (distribution) of profit to shareholders, which reduces retained income in the shareholders' equity section.",
  },

  // --- Financial Indicators & Audit ---
  {
    id: 6,
    unit: "financial-indicators",
    question: "A company has current assets of R500 000 and current liabilities of R300 000. The current ratio is:",
    options: ["0.6:1", "1.67:1", "2:1", "1.5:1"],
    correct: 1,
    explanation: "Current ratio = Current assets / Current liabilities = R500 000 / R300 000 = 1.67:1.",
  },
  {
    id: 7,
    unit: "financial-indicators",
    question: "Which financial indicator measures the ability to pay short-term debts WITHOUT relying on selling inventory?",
    options: ["Current ratio", "Acid-test ratio", "Debt-equity ratio", "Return on equity"],
    correct: 1,
    explanation: "The acid-test (quick) ratio excludes inventory from current assets to measure the ability to pay short-term debts without having to sell stock first.",
  },
  {
    id: 8,
    unit: "financial-indicators",
    question: "A company's EPS decreased from R3.50 to R2.80. This most likely indicates:",
    options: [
      "The company issued more shares",
      "Net profit after tax decreased, or more shares were issued, or both",
      "The company paid more dividends",
      "Cost of sales increased",
    ],
    correct: 1,
    explanation: "EPS = Net profit after tax / Number of shares. A decrease could result from lower net profit, issuing more shares (diluting earnings), or a combination of both.",
  },
  {
    id: 9,
    unit: "financial-indicators",
    question: "An external auditor's primary responsibility is to:",
    options: [
      "Detect all fraud in the company",
      "Prepare the financial statements",
      "Give an independent opinion on whether financial statements are fairly presented",
      "Manage the company's internal controls",
    ],
    correct: 2,
    explanation: "The external auditor's primary role is to examine financial statements and express an independent opinion on whether they present a true and fair view in compliance with accounting standards.",
  },
  {
    id: 10,
    unit: "financial-indicators",
    question: "If the debtors' collection period increases from 30 days to 60 days, this suggests:",
    options: [
      "The company is collecting from debtors faster",
      "The company is taking longer to collect from debtors, which may harm cash flow",
      "Sales have decreased significantly",
      "The company has fewer debtors",
    ],
    correct: 1,
    explanation: "A longer debtors' collection period means customers are taking longer to pay. This is unfavourable as it ties up cash and may lead to cash flow problems and bad debts.",
  },

  // --- Ethics & Internal Control ---
  {
    id: 11,
    unit: "ethics",
    question: "Segregation of duties means:",
    options: [
      "All employees do the same tasks",
      "Tasks are divided so no single person controls an entire transaction",
      "The manager performs all critical functions",
      "Only the accountant handles cash",
    ],
    correct: 1,
    explanation: "Segregation of duties divides responsibilities among different employees so that no single person has control over all aspects of a financial transaction. This reduces the risk of fraud and errors.",
  },
  {
    id: 12,
    unit: "ethics",
    question: "Which of the following is an example of a conflict of interest?",
    options: [
      "A director voting on a contract to be awarded to his own company",
      "An employee taking annual leave",
      "A company paying dividends to shareholders",
      "An auditor checking financial statements",
    ],
    correct: 0,
    explanation: "A conflict of interest occurs when a person's private interests could improperly influence their decisions. A director voting on a contract with their own company is a clear conflict of interest.",
  },
  {
    id: 13,
    unit: "ethics",
    question: "According to the King IV Code, good corporate governance includes:",
    options: [
      "Maximising profit at any cost",
      "Ethical leadership, transparency, and accountability",
      "Avoiding external audits",
      "Keeping financial information confidential from shareholders",
    ],
    correct: 1,
    explanation: "King IV promotes ethical leadership, sustainability, responsible corporate citizenship, and transparency. Good governance goes beyond profit maximisation to consider all stakeholders.",
  },
  {
    id: 14,
    unit: "ethics",
    question: "Which is NOT a valid internal control measure?",
    options: [
      "Regular bank reconciliations",
      "Allowing one person to handle cash receipts, recording, and banking",
      "Physical stock counts compared to records",
      "Authorisation of transactions by a responsible person",
    ],
    correct: 1,
    explanation: "Allowing one person to handle all aspects of cash (receiving, recording, and banking) violates the principle of segregation of duties and creates an opportunity for fraud.",
  },
  {
    id: 15,
    unit: "ethics",
    question: "Insider trading is when:",
    options: [
      "A company trades with overseas suppliers",
      "A person uses confidential company information to trade shares for personal gain",
      "A director approves the annual budget",
      "Staff members buy company products at a discount",
    ],
    correct: 1,
    explanation: "Insider trading is the illegal practice of using confidential (non-public) financial information about a company to buy or sell shares for personal profit. It is both unethical and a criminal offence.",
  },

  // --- Manufacturing Concepts ---
  {
    id: 16,
    unit: "manufacturing",
    question: "Prime cost consists of:",
    options: [
      "Direct materials + Factory overhead costs",
      "Direct materials + Direct labour",
      "Direct labour + Factory overhead costs",
      "All manufacturing costs",
    ],
    correct: 1,
    explanation: "Prime cost = Direct materials + Direct labour. These are the direct costs of manufacturing that can be specifically traced to a product.",
  },
  {
    id: 17,
    unit: "manufacturing",
    question: "Which of the following is an example of factory overhead costs?",
    options: [
      "Wages of assembly line workers",
      "Wood used to make furniture",
      "Depreciation of factory machinery",
      "Cost of raw materials purchased",
    ],
    correct: 2,
    explanation: "Depreciation of factory machinery is a factory overhead cost — it is a manufacturing cost that cannot be directly traced to a specific unit of production. Assembly line wages are direct labour; wood and raw materials are direct materials.",
  },
  {
    id: 18,
    unit: "manufacturing",
    question: "Work-in-process (WIP) refers to:",
    options: [
      "Finished goods waiting to be sold",
      "Raw materials not yet used",
      "Partly completed goods still being manufactured",
      "Goods returned by customers",
    ],
    correct: 2,
    explanation: "Work-in-process (WIP) represents goods that are partly completed — they have entered the manufacturing process but are not yet finished products.",
  },
  {
    id: 19,
    unit: "manufacturing",
    question: "Cost of finished goods manufactured = ?",
    options: [
      "Opening WIP + Total production cost + Closing WIP",
      "Opening WIP + Total production cost - Closing WIP",
      "Total production cost - Opening WIP + Closing WIP",
      "Direct materials + Direct labour",
    ],
    correct: 1,
    explanation: "Cost of finished goods manufactured = Opening WIP + Total production cost - Closing WIP. Opening WIP is added (these are completed during the period) and closing WIP is subtracted (these are not yet finished).",
  },
  {
    id: 20,
    unit: "manufacturing",
    question: "The wages of a factory supervisor would be classified as:",
    options: [
      "Direct labour",
      "Direct materials",
      "Factory overhead (indirect labour)",
      "Administrative expense",
    ],
    correct: 2,
    explanation: "A factory supervisor does not work directly on manufacturing the product. Their wages are indirect labour, which is part of factory overhead costs.",
  },

  // --- Cost Accounting ---
  {
    id: 21,
    unit: "cost-accounting",
    question: "If fixed costs are R120 000, selling price per unit is R50, and variable cost per unit is R30, the break-even point in units is:",
    options: ["2 400 units", "4 000 units", "6 000 units", "8 000 units"],
    correct: 2,
    explanation: "Contribution per unit = R50 - R30 = R20. Break-even units = Fixed costs / Contribution per unit = R120 000 / R20 = 6 000 units.",
  },
  {
    id: 22,
    unit: "cost-accounting",
    question: "Variable costs per unit:",
    options: [
      "Increase as production increases",
      "Decrease as production increases",
      "Remain constant regardless of production",
      "Fluctuate randomly",
    ],
    correct: 2,
    explanation: "Variable costs per unit remain constant (e.g. R10 of material per unit stays R10 regardless of volume). However, total variable costs increase in direct proportion to the number of units produced.",
  },
  {
    id: 23,
    unit: "cost-accounting",
    question: "The margin of safety represents:",
    options: [
      "The difference between total revenue and total costs",
      "The amount by which sales can decrease before a loss is incurred",
      "The total fixed costs of the business",
      "The difference between variable and fixed costs",
    ],
    correct: 1,
    explanation: "The margin of safety = Actual/Budgeted sales - Break-even sales. It shows how much sales can fall before the business reaches break-even and starts making a loss.",
  },
  {
    id: 24,
    unit: "cost-accounting",
    question: "On a break-even chart, the break-even point is where:",
    options: [
      "The fixed cost line meets the x-axis",
      "The total cost line intersects the total revenue line",
      "The variable cost line begins",
      "Profit is maximised",
    ],
    correct: 1,
    explanation: "On a break-even chart, the break-even point is where the total cost line and total revenue line intersect. At this point, revenue equals costs and there is neither profit nor loss.",
  },
  {
    id: 25,
    unit: "cost-accounting",
    question: "Fixed costs per unit:",
    options: [
      "Remain constant as production increases",
      "Decrease as production increases",
      "Increase as production increases",
      "Are always equal to variable costs per unit",
    ],
    correct: 1,
    explanation: "While total fixed costs remain constant, fixed costs per unit decrease as production increases because the same total fixed cost is spread over more units. This is the concept of economies of scale.",
  },

  // --- Budgets ---
  {
    id: 26,
    unit: "budgets",
    question: "Which of the following would appear in a cash budget but NOT in a projected income statement?",
    options: [
      "Depreciation",
      "Provision for bad debts",
      "Capital repayment of a loan",
      "Telephone expenses",
    ],
    correct: 2,
    explanation: "Capital repayment of a loan is a cash payment (appears in the cash budget) but it is not an expense (it does not appear in the income statement — only the interest portion is an expense).",
  },
  {
    id: 27,
    unit: "budgets",
    question: "Depreciation appears in the projected income statement but NOT in the cash budget because:",
    options: [
      "It is too difficult to calculate",
      "It is a non-cash expense that does not involve a cash payment",
      "It is a capital item",
      "It is an asset, not an expense",
    ],
    correct: 1,
    explanation: "Depreciation is a non-cash expense — it allocates the cost of an asset over time but does not involve an actual cash outflow. The cash budget only records actual cash receipts and payments.",
  },
  {
    id: 28,
    unit: "budgets",
    question: "If actual sales were R450 000 and budgeted sales were R500 000, the variance is:",
    options: [
      "Favourable R50 000",
      "Unfavourable R50 000",
      "Favourable R450 000",
      "Unfavourable R500 000",
    ],
    correct: 1,
    explanation: "Actual sales (R450 000) are less than budgeted sales (R500 000) by R50 000. Since actual income is lower than expected, this is an unfavourable variance.",
  },
  {
    id: 29,
    unit: "budgets",
    question: "If budgeted expenses were R80 000 and actual expenses were R72 000, the variance is:",
    options: [
      "Favourable R8 000",
      "Unfavourable R8 000",
      "Favourable R72 000",
      "Unfavourable R80 000",
    ],
    correct: 0,
    explanation: "Actual expenses (R72 000) are R8 000 less than budgeted (R80 000). Lower actual expenses are better than expected, so this is a favourable variance of R8 000.",
  },
  {
    id: 30,
    unit: "budgets",
    question: "The main purpose of a cash budget is to:",
    options: [
      "Calculate the net profit for the year",
      "Determine the value of fixed assets",
      "Plan for expected cash surpluses and shortages",
      "Record depreciation",
    ],
    correct: 2,
    explanation: "The main purpose of a cash budget is to forecast cash receipts and payments to anticipate cash surpluses (for investment) or shortages (for arranging finance/loans).",
  },

  // --- Inventory Valuation ---
  {
    id: 31,
    unit: "inventory",
    question: "Under the FIFO method during a period of rising prices, closing inventory is valued at:",
    options: [
      "The oldest purchase prices",
      "The most recent purchase prices",
      "The average of all purchase prices",
      "The original selling price",
    ],
    correct: 1,
    explanation: "FIFO (First-In, First-Out) assumes older stock is sold first. Therefore, closing inventory consists of the most recently purchased items, valued at the most recent (higher) prices.",
  },
  {
    id: 32,
    unit: "inventory",
    question: "Which inventory method gives the HIGHEST gross profit when prices are rising?",
    options: [
      "Weighted average",
      "FIFO",
      "Specific identification",
      "All methods give the same profit",
    ],
    correct: 1,
    explanation: "When prices are rising, FIFO assigns older (lower) costs to cost of sales, resulting in lower cost of sales and the highest gross profit compared to weighted average.",
  },
  {
    id: 33,
    unit: "inventory",
    question: "Inventory must be valued at the lower of cost or net realisable value. If cost is R100 and NRV is R85, the inventory is valued at:",
    options: ["R100", "R85", "R185", "R15"],
    correct: 1,
    explanation: "The lower of cost (R100) or net realisable value (R85) is R85. Inventory must be written down to NRV when it falls below cost, reflecting the prudence concept.",
  },
  {
    id: 34,
    unit: "inventory",
    question: "Under the perpetual inventory system:",
    options: [
      "Stock is only counted at year-end",
      "Inventory records are updated after every purchase and sale",
      "Cost of sales is calculated only at year-end",
      "No stock cards are used",
    ],
    correct: 1,
    explanation: "The perpetual system continuously updates inventory records after every transaction. Stock cards maintain a running balance of quantities and values.",
  },
  {
    id: 35,
    unit: "inventory",
    question: "An inventory deficit indicates:",
    options: [
      "More stock was purchased than budgeted",
      "Actual stock on hand is less than what records show, suggesting losses",
      "Too much stock was ordered",
      "Sales exceeded expectations",
    ],
    correct: 1,
    explanation: "An inventory deficit (shortage) occurs when the physical stock count reveals less stock than the inventory records indicate. This could be due to theft, damage, spoilage, or recording errors.",
  },

  // --- VAT & Fixed Assets ---
  {
    id: 36,
    unit: "vat-assets",
    question: "The VAT-inclusive price of an item is R575. What is the VAT amount?",
    options: ["R86.25", "R75.00", "R57.50", "R62.50"],
    correct: 1,
    explanation: "VAT = VAT-inclusive amount x 15/115 = R575 x 15/115 = R75.00.",
  },
  {
    id: 37,
    unit: "vat-assets",
    question: "Which of the following is zero-rated for VAT purposes?",
    options: ["Luxury chocolates", "Brown bread", "Restaurant meals", "Clothing"],
    correct: 1,
    explanation: "Brown bread is a basic foodstuff that is zero-rated (0% VAT) to make essential food items more affordable. Other basic foodstuffs include maize meal, rice, fresh fruit and vegetables, eggs, and milk.",
  },
  {
    id: 38,
    unit: "vat-assets",
    question: "If total output VAT for a period is R45 000 and total input VAT is R30 000, the business must:",
    options: [
      "Pay R30 000 to SARS",
      "Pay R45 000 to SARS",
      "Pay R15 000 to SARS",
      "Claim R15 000 from SARS",
    ],
    correct: 2,
    explanation: "VAT payable to SARS = Output VAT - Input VAT = R45 000 - R30 000 = R15 000. Since output VAT exceeds input VAT, the business owes SARS R15 000.",
  },
  {
    id: 39,
    unit: "vat-assets",
    question: "When an old vehicle is traded in for a new one, the trade-in value is treated as:",
    options: [
      "A purchase of the new vehicle",
      "The selling price of the old vehicle for disposal purposes",
      "An expense in the Income Statement",
      "Depreciation of the old vehicle",
    ],
    correct: 1,
    explanation: "The trade-in value is treated as the selling price (proceeds) of the old asset. It is credited to the Asset Disposal account. The difference between the trade-in value and the carrying value determines the profit or loss on disposal.",
  },
  {
    id: 40,
    unit: "vat-assets",
    question: "The balance of the Asset Disposal account represents:",
    options: [
      "The cost price of the asset",
      "The accumulated depreciation",
      "The profit or loss on the disposal of the asset",
      "The market value of the asset",
    ],
    correct: 2,
    explanation: "After recording the cost, accumulated depreciation, and proceeds in the Asset Disposal account, the balance represents the profit (credit balance) or loss (debit balance) on disposal, which is transferred to the Income Statement.",
  },
];

// ============================================================
// FEYNMAN TOPICS
// ============================================================
export const feynmanTopics: FeynmanTopic[] = [
  // --- Company Financial Statements ---
  {
    id: "f1",
    title: "Company Financial Statements",
    prompt: "Explain how company financial statements work, including the Income Statement, Balance Sheet, and the relationship between them.",
    keyConcepts: [
      "The Income Statement shows financial performance (profit/loss) over a period; the Balance Sheet shows financial position (assets, liabilities, equity) at a specific date",
      "Accounting equation: Assets = Shareholders' Equity + Liabilities — must always balance",
      "Shareholders' equity consists of ordinary share capital (investment by shareholders) and retained income (accumulated undistributed profits)",
      "Dividends are appropriations of profit paid to shareholders — they reduce retained income, not an expense",
      "Depreciation allocates the cost of a fixed asset over its useful life — straight-line (fixed % of cost) or diminishing balance (fixed % of carrying value)",
      "Carrying value = Cost price - Accumulated depreciation; Profit/Loss on disposal = Selling price - Carrying value",
      "Current assets (converted to cash within 12 months) vs non-current assets (used in business for more than a year)",
    ],
  },

  // --- Financial Indicators & Audit ---
  {
    id: "f2",
    title: "Financial Indicators and Audit Reports",
    prompt: "Explain the key financial indicators used to analyse a company's performance and the role of audits.",
    keyConcepts: [
      "Liquidity ratios: Current ratio (Current assets / Current liabilities, ideal 2:1) and Acid-test ratio (excludes inventory, ideal 1:1)",
      "Profitability: Gross profit % (GP/Sales x 100), Net profit % (NP/Sales x 100), Return on equity (NP after tax / Average equity x 100)",
      "Solvency: Debt-equity ratio (Total liabilities / Shareholders' equity) — lower means less financial risk",
      "Efficiency: Stock turnover rate (Cost of sales / Average inventory), Debtors' collection period (Avg debtors / Credit sales x 365), Creditors' payment period",
      "EPS (Net profit after tax / Number of shares) and DPS (Dividends / Number of shares) help shareholders evaluate performance",
      "External audit: independent opinion on fair presentation; Internal audit: evaluates controls and efficiency within the company",
      "Always compare ratios to previous years, industry averages, and company targets to draw meaningful conclusions",
    ],
  },

  // --- Ethics & Internal Control ---
  {
    id: "f3",
    title: "Ethics, Governance, and Internal Control",
    prompt: "Explain the importance of ethics, corporate governance, and internal controls in accounting.",
    keyConcepts: [
      "Ethics in accounting: honesty, integrity, transparency, accountability, and fairness in financial reporting",
      "Unethical practices include inflating revenue/assets, hiding liabilities, misappropriation of funds, and insider trading",
      "Internal control: policies and procedures to safeguard assets, ensure accuracy, promote efficiency, and ensure compliance",
      "Key controls: segregation of duties, authorisation, physical controls (safes, locks), bank reconciliations, independent checks",
      "Companies Act (No. 71 of 2008): regulates formation and governance of companies, directors' duties and responsibilities",
      "King IV Code: voluntary governance principles promoting ethical leadership, sustainability, transparency, and stakeholder inclusivity",
      "Directors have a fiduciary duty to act in the best interests of the company, avoiding conflicts of interest",
    ],
  },

  // --- Manufacturing Concepts ---
  {
    id: "f4",
    title: "Manufacturing and the Production Cost Statement",
    prompt: "Explain the components of manufacturing costs and how the Production Cost Statement is prepared.",
    keyConcepts: [
      "Three cost elements: Direct materials (raw materials traceable to product), Direct labour (wages of production workers), Factory overhead (all other factory costs)",
      "Prime cost = Direct materials + Direct labour; Total production cost = Prime cost + Factory overhead costs",
      "Factory overhead includes: factory rent, depreciation of factory equipment, indirect materials, indirect labour, factory utilities",
      "Direct vs indirect: direct costs can be traced to a specific product; indirect costs cannot be traced and must be allocated",
      "Work-in-process (WIP): partly completed goods; Cost of finished goods = Opening WIP + Total production cost - Closing WIP",
      "The Production Cost Statement feeds into the Income Statement — cost of finished goods becomes part of cost of sales",
      "Manufacturing concerns differ from trading concerns: they transform raw materials into finished goods rather than reselling purchased goods",
    ],
  },

  // --- Cost Accounting ---
  {
    id: "f5",
    title: "Cost-Volume-Profit Analysis and Break-Even",
    prompt: "Explain cost-volume-profit analysis, including break-even calculations and the relationship between fixed costs, variable costs, and profit.",
    keyConcepts: [
      "Fixed costs: constant in total regardless of production level (rent, insurance); per unit they decrease as production rises",
      "Variable costs: change in proportion to production (materials, piecework labour); per unit they remain constant",
      "Contribution per unit = Selling price per unit - Variable cost per unit — the amount each unit contributes to covering fixed costs",
      "Break-even point in units = Total fixed costs / Contribution per unit — the point where total revenue equals total costs (zero profit)",
      "Margin of safety = Actual sales - Break-even sales — how much sales can drop before a loss occurs",
      "Units for target profit = (Fixed costs + Target profit) / Contribution per unit",
      "Break-even chart: plots total cost and total revenue lines; intersection is break-even point; area between lines shows profit or loss zones",
    ],
  },

  // --- Budgets ---
  {
    id: "f6",
    title: "Cash Budgets and Projected Income Statements",
    prompt: "Explain the difference between cash budgets and projected income statements, including what items appear in each.",
    keyConcepts: [
      "A budget is a financial plan estimating future income and expenditure — used for planning, control, and performance evaluation",
      "Cash budget: records expected cash receipts and payments (cash basis) to forecast cash surpluses or shortages",
      "Projected income statement: forecasts income and expenses on the accrual basis to predict future profitability",
      "Cash budget excludes non-cash items (depreciation, bad debt provision) but includes capital items (loan repayments, asset purchases)",
      "Projected income statement includes non-cash items but excludes capital items — only income and expenses",
      "Variances: favourable (actual better than budget) or unfavourable (actual worse than budget) — analyse and investigate significant variances",
      "Debtors' receipts in cash budget depend on credit terms and payment patterns — consider timing of collections",
    ],
  },

  // --- Inventory Valuation ---
  {
    id: "f7",
    title: "Inventory Valuation Methods",
    prompt: "Explain the different inventory valuation methods (FIFO, weighted average, specific identification) and their impact on financial statements.",
    keyConcepts: [
      "FIFO (First-In, First-Out): oldest stock sold first; closing inventory at most recent prices; highest profit when prices rise",
      "Weighted average: new average cost calculated after each purchase; smooths out price fluctuations; moderate profit",
      "Specific identification: actual cost of each specific item used; suitable for unique, high-value items (vehicles, artwork)",
      "Perpetual system: records updated continuously after each transaction; periodic system: stock counted at period end only",
      "Under FIFO, perpetual and periodic systems give the same result; under weighted average they may differ",
      "Inventory valued at lower of cost or net realisable value (NRV) — write down if NRV drops below cost (prudence concept)",
      "Inventory deficit = recorded stock minus physical stock — caused by theft, damage, spoilage, or recording errors",
    ],
  },

  // --- VAT & Fixed Assets ---
  {
    id: "f8",
    title: "VAT and Fixed Asset Management",
    prompt: "Explain how VAT works in South Africa and how fixed asset disposals and trade-ins are recorded.",
    keyConcepts: [
      "VAT at 15% in South Africa: output VAT (charged on sales) minus input VAT (paid on purchases) = amount owed to/from SARS",
      "VAT calculations: VAT portion = inclusive amount x 15/115; exclusive amount = inclusive x 100/115; to add VAT = exclusive x 115/100",
      "Zero-rated (0% VAT, can claim input VAT): basic foodstuffs, petrol, exports; Exempt (no VAT, cannot claim input VAT): education, public transport, residential rent",
      "Asset disposal account: debit cost price, credit accumulated depreciation and proceeds — balance is profit or loss on disposal",
      "Trade-in: old asset's trade-in value treated as selling price for disposal; difference between new asset price and trade-in paid in cash",
      "Asset register: detailed record of all fixed assets including cost, depreciation method/rate, carrying value, and location",
      "VAT control account: debit side (input VAT) vs credit side (output VAT) — credit balance = owe SARS; debit balance = SARS owes refund",
    ],
  },
];
