import type { Flashcard, QuizQuestion, FeynmanTopic } from "@/features/curriculum/types";

// ============================================================
// FLASHCARD DATA - Mathematical Literacy
// Units: finance, measurement, data-handling, maps-plans,
//        probability, patterns
// ============================================================
export const flashcards: Flashcard[] = [
  // --- Finance ---
  { id: 1, unit: "finance", q: "What is a tariff?", a: "A tariff is a pricing structure used to calculate costs for services such as electricity, water, or cellphone usage. It typically includes a fixed (basic) charge plus a variable charge based on consumption." },
  { id: 2, unit: "finance", q: "How do you calculate the cost of electricity using a two-tier tariff?", a: "Identify the number of units (kWh) used. Apply the first rate to the units within the first tier, then apply the second (higher) rate to the remaining units. Add the fixed monthly charge to the total." },
  { id: 3, unit: "finance", q: "What is simple interest?", a: "Simple interest is calculated only on the original amount (principal). Formula: I = P × r × t, where P is the principal, r is the annual rate (as a decimal), and t is time in years. Total amount = P + I." },
  { id: 4, unit: "finance", q: "What is compound interest?", a: "Compound interest is calculated on the principal plus any previously earned interest. The amount grows faster than simple interest because interest earns interest. A = P(1 + r)^n." },
  { id: 5, unit: "finance", q: "What is the difference between simple and compound interest?", a: "Simple interest: calculated on the original principal only, grows linearly. Compound interest: calculated on principal plus accumulated interest, grows exponentially. Compound interest always yields more over time." },
  { id: 6, unit: "finance", q: "What is inflation?", a: "Inflation is the general increase in prices of goods and services over time. It reduces the purchasing power of money. Measured by the Consumer Price Index (CPI). Example: if inflation is 6%, an item costing R100 will cost R106 a year later." },
  { id: 7, unit: "finance", q: "How do you calculate the effect of inflation on price?", a: "Use the compound interest formula: Future price = Current price × (1 + inflation rate)^number of years. For example, a loaf costing R15 with 5% annual inflation will cost 15 × (1.05)^3 ≈ R17.36 after 3 years." },
  { id: 8, unit: "finance", q: "What is an exchange rate?", a: "An exchange rate is the value of one currency expressed in terms of another. For example, if R1 = $0.055, then R1 000 = $55. To convert from rand to foreign currency, multiply by the exchange rate (or divide, depending on the quote)." },
  { id: 9, unit: "finance", q: "How do you convert from rand to a foreign currency?", a: "Divide the rand amount by the exchange rate (rand per foreign unit). Example: If $1 = R18.50, then R925 ÷ 18.50 = $50." },
  { id: 10, unit: "finance", q: "How do you convert from a foreign currency to rand?", a: "Multiply the foreign currency amount by the exchange rate (rand per foreign unit). Example: If €1 = R20.30, then €250 × 20.30 = R5 075." },
  { id: 11, unit: "finance", q: "What is a bank statement?", a: "A bank statement is a record of all transactions (deposits, withdrawals, debit orders, fees) on a bank account over a period. It shows opening balance, each transaction, and the running/closing balance." },
  { id: 12, unit: "finance", q: "What are bank charges?", a: "Bank charges are fees charged by a bank for services such as cash withdrawals, electronic transfers, balance enquiries, and account maintenance. These vary depending on the type of transaction and whether it is done in-branch, at an ATM, or online." },
  { id: 13, unit: "finance", q: "What is hire purchase (HP)?", a: "Hire purchase is a way to buy goods by paying a deposit followed by monthly instalments that include interest. The buyer only owns the item after the final payment. The total cost is higher than the cash price due to interest." },
  { id: 14, unit: "finance", q: "How do you calculate the total cost of a hire purchase agreement?", a: "Total HP cost = Deposit + (Monthly instalment × Number of months). Interest is charged on the amount after the deposit: (Cash price - Deposit) × interest rate × number of years." },
  { id: 15, unit: "finance", q: "What is VAT (Value Added Tax)?", a: "VAT is a consumption tax added to the selling price of goods and services. In South Africa, VAT is 15%. To find the VAT-inclusive price: Price × 1.15. To find the VAT amount from an inclusive price: Price ÷ 1.15 × 0.15." },

  // --- Measurement ---
  { id: 16, unit: "measurement", q: "How do you convert between metric units of length?", a: "km → m: × 1 000. m → cm: × 100. cm → mm: × 10. To convert the other way, divide. Example: 3.5 km = 3 500 m; 250 mm = 25 cm." },
  { id: 17, unit: "measurement", q: "How do you convert between units of area?", a: "Since area is two-dimensional, square the conversion factor. 1 m² = 10 000 cm² (100²). 1 km² = 1 000 000 m² (1 000²). 1 hectare (ha) = 10 000 m²." },
  { id: 18, unit: "measurement", q: "How do you convert between units of volume?", a: "Since volume is three-dimensional, cube the conversion factor. 1 m³ = 1 000 000 cm³ (100³). 1 cm³ = 1 mℓ. 1 000 cm³ = 1 ℓ. 1 m³ = 1 000 ℓ." },
  { id: 19, unit: "measurement", q: "What is the formula for the area of a rectangle?", a: "Area = length × width. Both measurements must be in the same unit. The answer is in square units (e.g., m², cm²)." },
  { id: 20, unit: "measurement", q: "What is the formula for the area of a triangle?", a: "Area = ½ × base × perpendicular height. The height must be measured at 90° to the base." },
  { id: 21, unit: "measurement", q: "What is the formula for the area of a circle?", a: "Area = π × r², where r is the radius. If given the diameter d, then r = d ÷ 2. Use π ≈ 3.14159." },
  { id: 22, unit: "measurement", q: "What is the formula for the volume of a rectangular prism (box)?", a: "Volume = length × width × height. All measurements must be in the same unit. The answer is in cubic units (e.g., m³, cm³)." },
  { id: 23, unit: "measurement", q: "What is the formula for the volume of a cylinder?", a: "Volume = π × r² × h, where r is the radius of the circular base and h is the height. This is the area of the circular base multiplied by the height." },
  { id: 24, unit: "measurement", q: "What is the formula for the surface area of a rectangular prism?", a: "Surface area = 2(lw + lh + wh), where l = length, w = width, h = height. There are three pairs of identical faces." },
  { id: 25, unit: "measurement", q: "What is the formula for the surface area of a cylinder?", a: "Surface area = 2πr² + 2πrh = 2πr(r + h). The first part is the two circular ends, the second part is the curved surface (a rectangle when unrolled, with width = circumference = 2πr)." },
  { id: 26, unit: "measurement", q: "How do you calculate the perimeter of a shape?", a: "Perimeter is the total distance around the outside of a shape. Add up all the outer edges. For a rectangle: P = 2(l + w). For a circle (circumference): C = 2πr or πd." },
  { id: 27, unit: "measurement", q: "What is the relationship between mℓ, cm³, and ℓ?", a: "1 mℓ = 1 cm³. 1 ℓ = 1 000 mℓ = 1 000 cm³. 1 kℓ = 1 000 ℓ = 1 m³. These conversions are essential for problems involving capacity and volume." },

  // --- Data Handling ---
  { id: 28, unit: "data-handling", q: "What is the mean?", a: "The mean (average) is calculated by adding all data values and dividing by the number of values. Mean = Sum of all values ÷ Number of values. It is affected by extreme values (outliers)." },
  { id: 29, unit: "data-handling", q: "What is the median?", a: "The median is the middle value when data is arranged in order. If there is an even number of values, the median is the average of the two middle values. It is not affected by outliers." },
  { id: 30, unit: "data-handling", q: "What is the mode?", a: "The mode is the value that occurs most frequently in a data set. A data set can have no mode, one mode, or more than one mode (bimodal, multimodal)." },
  { id: 31, unit: "data-handling", q: "What is the range?", a: "Range = Maximum value - Minimum value. It gives a simple measure of spread but is greatly affected by outliers." },
  { id: 32, unit: "data-handling", q: "What are quartiles?", a: "Quartiles divide ordered data into four equal parts. Q1 (lower quartile) = 25th percentile, Q2 (median) = 50th percentile, Q3 (upper quartile) = 75th percentile. IQR = Q3 - Q1." },
  { id: 33, unit: "data-handling", q: "What is a bar graph used for?", a: "A bar graph displays categorical (discrete) data. Each bar represents a category. The height of the bar shows the frequency or value. Bars are separated by gaps to show the data is not continuous." },
  { id: 34, unit: "data-handling", q: "What is a histogram used for?", a: "A histogram displays continuous (grouped) data. Bars are adjacent (no gaps) because the data is continuous. The width of each bar represents the class interval, and the height represents the frequency." },
  { id: 35, unit: "data-handling", q: "What is a pie chart used for?", a: "A pie chart shows how a whole is divided into parts (proportions). Each slice represents a category as a percentage of the total. The angle of each slice = (value ÷ total) × 360°." },
  { id: 36, unit: "data-handling", q: "What is a scatter plot?", a: "A scatter plot shows the relationship between two numerical variables. Each point represents a pair of values. Used to identify trends, correlations (positive, negative, or none), and outliers." },
  { id: 37, unit: "data-handling", q: "What is a line graph used for?", a: "A line graph shows how a quantity changes over time. Points are plotted and connected by lines. It is useful for identifying trends, increases, decreases, and patterns over a period." },
  { id: 38, unit: "data-handling", q: "How do you calculate the mean from a frequency table?", a: "Multiply each value (or class midpoint) by its frequency. Add all these products. Divide by the total frequency. Mean = Σ(f × x) ÷ Σf." },
  { id: 39, unit: "data-handling", q: "What is a percentile?", a: "A percentile indicates the percentage of data values that fall at or below a particular value. The 80th percentile means 80% of the data lies at or below that value. Quartiles are the 25th, 50th, and 75th percentiles." },

  // --- Maps, Plans & Representations ---
  { id: 40, unit: "maps-plans", q: "What is a scale on a map?", a: "A scale shows the relationship between distance on the map and actual distance. Example: 1 : 50 000 means 1 cm on the map represents 50 000 cm (500 m or 0.5 km) in real life." },
  { id: 41, unit: "maps-plans", q: "How do you calculate actual distance from a map?", a: "Measure the distance on the map in cm, then multiply by the scale factor. Example: Map distance = 3.5 cm, Scale = 1 : 50 000. Actual distance = 3.5 × 50 000 = 175 000 cm = 1.75 km." },
  { id: 42, unit: "maps-plans", q: "What is a floor plan?", a: "A floor plan is a scaled drawing showing the layout of a room or building from above (bird's-eye view). It shows dimensions, the position of doors, windows, walls, and sometimes furniture. A scale is used to reduce real measurements." },
  { id: 43, unit: "maps-plans", q: "How do you find real measurements from a floor plan?", a: "Measure the dimension on the plan and multiply by the scale factor. Example: A wall measures 4 cm on a plan with scale 1 : 100. Actual length = 4 × 100 = 400 cm = 4 m." },
  { id: 44, unit: "maps-plans", q: "What is an elevation plan?", a: "An elevation plan is a side view of a building or structure, showing height, width, roof pitch, doors, and windows. Unlike a floor plan (top view), an elevation shows how the building looks from the front, back, or sides." },
  { id: 45, unit: "maps-plans", q: "What is a strip map (route map)?", a: "A strip map shows a route between two places in a simplified, linear format. It includes landmarks, road names, direction arrows, and distances. It does not show the exact shape of the route but gives practical navigation guidance." },
  { id: 46, unit: "maps-plans", q: "How do you use a number scale vs a bar scale?", a: "A number scale (e.g., 1 : 50 000) is a ratio. A bar scale is a line on the map divided into measured segments representing real distances. The bar scale remains accurate even when the map is resized; the number scale does not." },
  { id: 47, unit: "maps-plans", q: "What are compass directions?", a: "The four cardinal directions: North (N), South (S), East (E), West (W). Intermediate directions: NE, NW, SE, SW. Used on maps to describe the position of one place relative to another." },
  { id: 48, unit: "maps-plans", q: "What is a packaging net?", a: "A net is a flat (2D) shape that can be folded to form a 3D object. Each face of the object appears as a flat section in the net. Used to calculate surface area and for designing packaging (e.g., a cereal box is a rectangular prism net)." },

  // --- Probability ---
  { id: 49, unit: "probability", q: "What is probability?", a: "Probability measures the likelihood (chance) of an event occurring. It is expressed as a number between 0 (impossible) and 1 (certain), or as a percentage (0% to 100%), or as a fraction." },
  { id: 50, unit: "probability", q: "How do you calculate the probability of a single event?", a: "P(event) = Number of favourable outcomes ÷ Total number of possible outcomes. Example: Rolling a 3 on a die: P(3) = 1/6 ≈ 0.167 ≈ 16.7%." },
  { id: 51, unit: "probability", q: "What is the difference between theoretical and relative frequency probability?", a: "Theoretical probability is calculated using formulae (e.g., 1/6 for a die). Relative frequency (experimental) probability is based on actual results of an experiment: number of times an event occurred ÷ total number of trials." },
  { id: 52, unit: "probability", q: "What is a tree diagram?", a: "A tree diagram shows all possible outcomes of sequential events. Each branch represents an outcome. Multiply probabilities along a path for the probability of that combined outcome. Add probabilities of all desired paths for the final answer." },
  { id: 53, unit: "probability", q: "What is the probability of an event NOT happening?", a: "P(not A) = 1 - P(A). If the probability of rain is 0.3, then the probability of no rain is 1 - 0.3 = 0.7. The total probability of an event and its complement always equals 1." },
  { id: 54, unit: "probability", q: "What does 'with replacement' vs 'without replacement' mean?", a: "With replacement: the item is put back before the next selection, so probabilities stay the same. Without replacement: the item is not returned, so the total decreases and probabilities change for subsequent draws." },
  { id: 55, unit: "probability", q: "How do you use a two-way table to find probabilities?", a: "A two-way table organises data for two categories. To find probabilities, divide the relevant frequency by the grand total. To find joint probability, use the cell where two categories intersect, divided by the total." },
  { id: 56, unit: "probability", q: "What is the prediction formula using probability?", a: "Predicted number of times = Probability of event × Number of trials. Example: If P(heads) = 0.5 and you flip a coin 200 times, predicted heads = 0.5 × 200 = 100." },

  // --- Patterns & Relationships ---
  { id: 57, unit: "patterns", q: "What is a number pattern?", a: "A number pattern is a sequence of numbers that follows a rule. The rule can involve adding, subtracting, multiplying, dividing, or using a formula. Example: 3, 7, 11, 15, ... (rule: add 4)." },
  { id: 58, unit: "patterns", q: "What is a constant difference pattern?", a: "A constant difference pattern (linear) has the same difference between consecutive terms. If the difference is always d, the rule is: Term = starting value + d × (position - 1), or Tn = a + (n - 1)d." },
  { id: 59, unit: "patterns", q: "How do you find the rule (formula) for a linear pattern?", a: "Calculate the constant difference (d). Use the first term (a). The formula is Tn = a + (n - 1) × d. Example: 5, 8, 11, 14, ... → d = 3, a = 5. Tn = 5 + 3(n - 1) = 3n + 2." },
  { id: 60, unit: "patterns", q: "How do you use a pattern to make predictions?", a: "Find the rule/formula for the pattern. Substitute the required term number (n) into the formula. Example: If Tn = 4n + 1, the 50th term is T50 = 4(50) + 1 = 201." },
  { id: 61, unit: "patterns", q: "What is a flow diagram?", a: "A flow diagram shows a step-by-step process (an input-output rule). An input value is processed through operations (e.g., multiply by 3, then add 2) to produce an output. Used to describe and apply formulae visually." },
  { id: 62, unit: "patterns", q: "What is a table of values?", a: "A table of values lists input values (x or n) and corresponding output values (y or Tn) generated by a rule or formula. It is used to organise data, identify patterns, and create graphs." },
  { id: 63, unit: "patterns", q: "How do you identify a pattern from a real-world context?", a: "Look for a quantity that changes regularly. Determine whether the change is constant (linear) or varying. Set up a table of values and calculate differences. Write the rule and verify it by substituting known values." },
  { id: 64, unit: "patterns", q: "What is the difference between a linear and a non-linear pattern?", a: "A linear pattern has a constant first difference — its graph is a straight line. A non-linear pattern has a changing first difference — its graph is a curve (e.g., quadratic, exponential). In Maths Literacy, you mostly work with linear patterns." },
  { id: 65, unit: "patterns", q: "How do you represent a pattern graphically?", a: "Create a table of values from the pattern. Plot the input values on the x-axis and the output values on the y-axis. Connect the points. A linear pattern gives a straight line; a non-linear pattern gives a curve." },
];

// ============================================================
// QUIZ QUESTIONS
// ============================================================
export const quizQuestions: QuizQuestion[] = [
  // --- Finance ---
  { id: 1, unit: "finance", question: "A prepaid electricity tariff charges R1.50 per kWh. If a household uses 350 kWh, what is the cost?", options: ["R500.00", "R525.00", "R475.00", "R550.00"], correct: 1, explanation: "Cost = 350 × R1.50 = R525.00." },
  { id: 2, unit: "finance", question: "R8 000 is invested at 6.5% simple interest per year for 3 years. What is the total interest earned?", options: ["R1 560", "R1 460", "R1 300", "R1 620"], correct: 0, explanation: "I = P × r × t = 8 000 × 0.065 × 3 = R1 560." },
  { id: 3, unit: "finance", question: "If the exchange rate is $1 = R18.25, how many rand does a tourist receive for $200?", options: ["R3 600", "R3 650", "R3 550", "R3 700"], correct: 1, explanation: "$200 × R18.25 = R3 650." },
  { id: 4, unit: "finance", question: "A TV costs R12 000 cash. On hire purchase: 10% deposit, 24 monthly instalments of R550. What is the total HP cost?", options: ["R13 200", "R14 400", "R14 000", "R13 800"], correct: 1, explanation: "Deposit = R1 200. Instalments = 24 × R550 = R13 200. Total = R1 200 + R13 200 = R14 400." },
  { id: 5, unit: "finance", question: "If inflation is 5.5% per year, what will a R200 item cost after 2 years?", options: ["R222.61", "R222.00", "R221.00", "R223.05"], correct: 0, explanation: "Future price = 200 × (1.055)² = 200 × 1.113025 = R222.61." },
  { id: 6, unit: "finance", question: "An item costs R345 including 15% VAT. What is the price excluding VAT?", options: ["R293.25", "R300.00", "R310.00", "R292.50"], correct: 1, explanation: "Price excl. VAT = R345 ÷ 1.15 = R300.00." },

  // --- Measurement ---
  { id: 7, unit: "measurement", question: "Convert 2.5 m² to cm².", options: ["250 cm²", "2 500 cm²", "25 000 cm²", "250 000 cm²"], correct: 2, explanation: "1 m² = 10 000 cm² (100 × 100). So 2.5 × 10 000 = 25 000 cm²." },
  { id: 8, unit: "measurement", question: "A rectangular room is 5 m long and 3.5 m wide. What is the area?", options: ["17.0 m²", "17.5 m²", "18.0 m²", "16.5 m²"], correct: 1, explanation: "Area = length × width = 5 × 3.5 = 17.5 m²." },
  { id: 9, unit: "measurement", question: "A cylindrical tank has radius 0.5 m and height 2 m. What is its volume? (Use π ≈ 3.14)", options: ["1.57 m³", "3.14 m³", "6.28 m³", "0.79 m³"], correct: 0, explanation: "V = πr²h = 3.14 × (0.5)² × 2 = 3.14 × 0.25 × 2 = 1.57 m³." },
  { id: 10, unit: "measurement", question: "How many litres of water can a 1.57 m³ tank hold?", options: ["157 ℓ", "1 570 ℓ", "15.7 ℓ", "15 700 ℓ"], correct: 1, explanation: "1 m³ = 1 000 ℓ. So 1.57 × 1 000 = 1 570 ℓ." },
  { id: 11, unit: "measurement", question: "The surface area of a closed rectangular box (2 m × 1.5 m × 1 m) is:", options: ["13 m²", "11 m²", "3 m²", "6.5 m²"], correct: 0, explanation: "SA = 2(lw + lh + wh) = 2(3 + 2 + 1.5) = 2 × 6.5 = 13 m²." },

  // --- Data Handling ---
  { id: 12, unit: "data-handling", question: "The data set is: 4, 7, 7, 9, 12. What is the mean?", options: ["7", "7.8", "8", "9"], correct: 1, explanation: "Mean = (4 + 7 + 7 + 9 + 12) ÷ 5 = 39 ÷ 5 = 7.8." },
  { id: 13, unit: "data-handling", question: "For the data: 3, 5, 8, 8, 10, 12, 15, what is the median?", options: ["7", "8", "10", "8.5"], correct: 1, explanation: "There are 7 values. The middle (4th) value is 8." },
  { id: 14, unit: "data-handling", question: "A pie chart sector has an angle of 90°. What percentage does it represent?", options: ["20%", "25%", "30%", "50%"], correct: 1, explanation: "Percentage = (90 ÷ 360) × 100 = 25%." },
  { id: 15, unit: "data-handling", question: "Which graph is best for showing how temperature changes over a day?", options: ["Pie chart", "Bar graph", "Line graph", "Histogram"], correct: 2, explanation: "A line graph shows changes over time, making it ideal for tracking temperature throughout a day." },
  { id: 16, unit: "data-handling", question: "Data: 2, 5, 6, 8, 9, 11, 14. Q1 and Q3 are:", options: ["Q1 = 5, Q3 = 11", "Q1 = 6, Q3 = 9", "Q1 = 5, Q3 = 14", "Q1 = 2, Q3 = 11"], correct: 0, explanation: "Median = 8. Lower half: 2, 5, 6 → Q1 = 5. Upper half: 9, 11, 14 → Q3 = 11." },

  // --- Maps, Plans & Representations ---
  { id: 17, unit: "maps-plans", question: "On a map with scale 1 : 25 000, two towns are 8 cm apart. What is the actual distance?", options: ["2 km", "200 m", "20 km", "200 km"], correct: 0, explanation: "Actual = 8 × 25 000 = 200 000 cm = 2 000 m = 2 km." },
  { id: 18, unit: "maps-plans", question: "A floor plan has scale 1 : 50. A room measures 6 cm × 4 cm on the plan. What are the actual dimensions?", options: ["3 m × 2 m", "30 m × 20 m", "6 m × 4 m", "0.3 m × 0.2 m"], correct: 0, explanation: "Length = 6 × 50 = 300 cm = 3 m. Width = 4 × 50 = 200 cm = 2 m." },
  { id: 19, unit: "maps-plans", question: "A house is directly NE of a school. In which direction must you travel from the house to reach the school?", options: ["NE", "NW", "SW", "SE"], correct: 2, explanation: "If the house is NE of the school, then the school is SW of the house. Travel SW." },
  { id: 20, unit: "maps-plans", question: "A rectangular box (net) has dimensions 20 cm × 10 cm × 5 cm. What is the total surface area?", options: ["700 cm²", "1 000 cm²", "500 cm²", "350 cm²"], correct: 0, explanation: "SA = 2(20×10 + 20×5 + 10×5) = 2(200 + 100 + 50) = 2 × 350 = 700 cm²." },

  // --- Probability ---
  { id: 21, unit: "probability", question: "A bag has 3 red, 5 blue, and 2 green marbles. What is P(blue)?", options: ["1/2", "3/10", "1/5", "5/10"], correct: 0, explanation: "Total = 3 + 5 + 2 = 10. P(blue) = 5/10 = 1/2." },
  { id: 22, unit: "probability", question: "A coin is flipped 3 times. How many possible outcomes are there?", options: ["3", "6", "8", "9"], correct: 2, explanation: "Each flip has 2 outcomes. Total = 2 × 2 × 2 = 2³ = 8." },
  { id: 23, unit: "probability", question: "If P(rain) = 0.35, what is P(no rain)?", options: ["0.35", "0.55", "0.65", "0.75"], correct: 2, explanation: "P(no rain) = 1 - P(rain) = 1 - 0.35 = 0.65." },
  { id: 24, unit: "probability", question: "A die is rolled 300 times. How many times would you expect to get a 6?", options: ["30", "50", "60", "100"], correct: 1, explanation: "P(6) = 1/6. Expected = 300 × 1/6 = 50 times." },
  { id: 25, unit: "probability", question: "Two cards are drawn without replacement from 4 red and 6 blue cards. P(both red) is:", options: ["4/25", "2/15", "12/90", "6/45"], correct: 1, explanation: "P(1st red) = 4/10. P(2nd red) = 3/9. P(both red) = 4/10 × 3/9 = 12/90 = 2/15." },

  // --- Patterns & Relationships ---
  { id: 26, unit: "patterns", question: "In the pattern 2, 5, 8, 11, ..., what is the 20th term?", options: ["59", "60", "62", "58"], correct: 0, explanation: "d = 3, a = 2. T20 = 2 + (20 - 1) × 3 = 2 + 57 = 59." },
  { id: 27, unit: "patterns", question: "A plumber charges R200 call-out fee plus R80 per hour. The formula for total cost (C) for h hours is:", options: ["C = 200h + 80", "C = 80h + 200", "C = 280h", "C = 200 + 80"], correct: 1, explanation: "Fixed cost = R200 (call-out). Variable = R80 per hour. C = 80h + 200." },
  { id: 28, unit: "patterns", question: "If Tn = 3n - 1, what is T15?", options: ["44", "45", "46", "42"], correct: 0, explanation: "T15 = 3(15) - 1 = 45 - 1 = 44." },
  { id: 29, unit: "patterns", question: "A taxi charges R10 base fare plus R4.50 per km. What is the cost for a 12 km trip?", options: ["R54.00", "R64.00", "R52.00", "R66.00"], correct: 1, explanation: "Cost = 10 + (4.50 × 12) = 10 + 54 = R64.00." },
  { id: 30, unit: "patterns", question: "Input values: 1, 2, 3, 4. Output values: 5, 9, 13, 17. What is the rule?", options: ["y = 4x + 1", "y = 3x + 2", "y = 5x", "y = 2x + 3"], correct: 0, explanation: "Check: 4(1)+1=5, 4(2)+1=9, 4(3)+1=13, 4(4)+1=17. Rule is y = 4x + 1." },
];

// ============================================================
// FEYNMAN TOPICS
// ============================================================
export const feynmanTopics: FeynmanTopic[] = [
  {
    id: "f1",
    title: "Tariffs, Interest & Banking",
    prompt: "Explain tariffs, interest, and banking in Mathematical Literacy as if teaching someone who has never encountered these concepts.",
    keyConcepts: [
      "Tariffs have fixed charges (monthly fee) plus variable charges (per unit used, e.g., per kWh)",
      "Simple interest: I = P × r × t — interest calculated only on the original principal",
      "Compound interest: A = P(1 + r)^n — interest calculated on principal plus accumulated interest",
      "Hire purchase: deposit + instalments; total cost exceeds cash price due to interest",
      "Exchange rates: multiply or divide to convert between currencies; check the direction of conversion",
      "Inflation reduces purchasing power — use compound growth to calculate future prices",
      "Bank statements: track deposits, withdrawals, fees; verify the running balance",
    ],
  },
  {
    id: "f2",
    title: "Measurement: Conversions, Area, Volume & Surface Area",
    prompt: "Explain measurement conversions, area, volume, and surface area as if teaching someone who has never encountered these concepts.",
    keyConcepts: [
      "Length: km → m (×1 000), m → cm (×100), cm → mm (×10)",
      "Area conversions: square the factor — 1 m² = 10 000 cm²; 1 ha = 10 000 m²",
      "Volume conversions: cube the factor — 1 m³ = 1 000 000 cm³; 1 cm³ = 1 mℓ; 1 m³ = 1 000 ℓ",
      "Area formulae: rectangle (l × w), triangle (½ × b × h), circle (πr²)",
      "Volume formulae: rectangular prism (l × w × h), cylinder (πr²h)",
      "Surface area: rectangular prism 2(lw + lh + wh); cylinder 2πr(r + h)",
      "Always check that all measurements are in the same unit before calculating",
    ],
  },
  {
    id: "f3",
    title: "Data Handling: Statistics & Graphs",
    prompt: "Explain data handling, statistics, and graphs as if teaching someone who has never encountered these concepts.",
    keyConcepts: [
      "Mean = sum ÷ count; affected by outliers. Median = middle value; resistant to outliers",
      "Mode = most frequent value; can have none, one, or multiple modes",
      "Range = max - min; IQR = Q3 - Q1 (spread of middle 50%)",
      "Bar graphs for categorical data (with gaps); histograms for continuous data (no gaps)",
      "Pie charts show proportions of a whole; angles must total 360°",
      "Line graphs show trends over time; scatter plots show relationships between two variables",
      "When reading graphs, always check the axes labels, scale, and units carefully",
    ],
  },
  {
    id: "f4",
    title: "Maps, Plans & Scale Drawings",
    prompt: "Explain maps, plans, and scale drawings as if teaching someone who has never encountered these concepts.",
    keyConcepts: [
      "Number scale (e.g., 1 : 50 000) — 1 cm on map = 50 000 cm in reality",
      "Actual distance = map distance × scale factor; map distance = actual distance ÷ scale factor",
      "Floor plans show top-down (bird's-eye) view; elevation plans show side view",
      "Bar scales stay accurate when resized; number scales do not",
      "Compass directions: N, S, E, W plus NE, NW, SE, SW for navigation and describing relative positions",
      "Nets are 2D shapes that fold into 3D objects — used for packaging and surface area calculations",
      "Strip maps show simplified routes with landmarks and distances between points",
    ],
  },
  {
    id: "f5",
    title: "Probability in Everyday Contexts",
    prompt: "Explain probability in everyday contexts as if teaching someone who has never encountered these concepts.",
    keyConcepts: [
      "Probability ranges from 0 (impossible) to 1 (certain); can be expressed as fraction, decimal, or percentage",
      "P(event) = favourable outcomes ÷ total outcomes (for equally likely outcomes)",
      "P(not A) = 1 - P(A) — the complement rule",
      "Tree diagrams: multiply along branches for combined probability, add across desired paths",
      "With replacement: probabilities unchanged. Without replacement: total decreases, probabilities change",
      "Predicted occurrences = probability × number of trials",
      "Two-way tables organise joint frequencies for two categories; divide by total for probability",
    ],
  },
  {
    id: "f6",
    title: "Patterns, Relationships & Formulae",
    prompt: "Explain patterns, relationships, and formulae as if teaching someone who has never encountered these concepts.",
    keyConcepts: [
      "Linear patterns have a constant difference (d) between consecutive terms",
      "Formula for the nth term: Tn = a + (n - 1) × d, where a is the first term",
      "Use tables of values to identify patterns — calculate differences between consecutive outputs",
      "Real-world applications: cost formulae (fixed + variable), distance-time relationships",
      "Flow diagrams show input-process-output visually",
      "Graphs of linear patterns are straight lines; gradient = constant difference",
      "Always verify your formula by substituting known values back in",
    ],
  },
];
