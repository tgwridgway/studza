import type { Flashcard, QuizQuestion, FeynmanTopic } from "@/features/curriculum/types";

// ============================================================
// FLASHCARD DATA - Information Technology (Grade 12 CAPS)
// Units: databases, oop, systems, algorithms, networks, social
// ============================================================
export const flashcards: Flashcard[] = [
  // --- Data & Information Management (databases) ---
  {
    id: 1,
    unit: "databases",
    q: "What is normalisation in database design?",
    a: "Normalisation is the process of organising data in a database to reduce redundancy (duplicate data) and improve data integrity. It involves dividing large tables into smaller, related tables and defining relationships between them.",
  },
  {
    id: 2,
    unit: "databases",
    q: "State the requirements for First Normal Form (1NF).",
    a: "1NF requires: (1) Each cell contains only a single (atomic) value — no repeating groups or lists. (2) Each record is unique — there is a primary key. (3) All entries in a column are of the same data type.",
  },
  {
    id: 3,
    unit: "databases",
    q: "State the requirements for Second Normal Form (2NF).",
    a: "2NF requires: (1) The table is already in 1NF. (2) All non-key fields are fully dependent on the entire primary key — there are no partial dependencies. Partial dependencies occur when a non-key field depends on only part of a composite primary key.",
  },
  {
    id: 4,
    unit: "databases",
    q: "State the requirements for Third Normal Form (3NF).",
    a: "3NF requires: (1) The table is already in 2NF. (2) There are no transitive dependencies — no non-key field depends on another non-key field. Every non-key field must depend directly on the primary key only.",
  },
  {
    id: 5,
    unit: "databases",
    q: "What is a primary key? Give an example.",
    a: "A primary key is a field (or combination of fields) that uniquely identifies each record in a table. It cannot contain NULL values and must be unique. Example: StudentID in a Students table, or IDNumber in a Persons table.",
  },
  {
    id: 6,
    unit: "databases",
    q: "What is a foreign key and how does it create relationships?",
    a: "A foreign key is a field in one table that refers to the primary key of another table. It creates a link (relationship) between the two tables, enforcing referential integrity. The foreign key values must match existing primary key values in the referenced table.",
  },
  {
    id: 7,
    unit: "databases",
    q: "Write the SQL syntax for a SELECT query with a WHERE clause.",
    a: "SELECT FieldName1, FieldName2 FROM TableName WHERE condition ORDER BY FieldName ASC/DESC;\n\nExample: SELECT Name, Surname FROM Learners WHERE Grade = 12 ORDER BY Surname ASC;",
  },
  {
    id: 8,
    unit: "databases",
    q: "What SQL aggregate functions are used in CAPS IT?",
    a: "COUNT(*) — counts the number of records\nSUM(field) — adds up numeric values\nAVG(field) — calculates the average\nMIN(field) — finds the smallest value\nMAX(field) — finds the largest value\nThese are used with GROUP BY to calculate per group.",
  },
  {
    id: 9,
    unit: "databases",
    q: "Explain the SQL JOIN operation with an example.",
    a: "A JOIN combines rows from two or more tables based on a related field (foreign key). Example:\nSELECT Orders.OrderID, Customers.Name FROM Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;\nThis returns only matching records from both tables.",
  },
  {
    id: 10,
    unit: "databases",
    q: "What is referential integrity?",
    a: "Referential integrity is a database rule that ensures relationships between tables remain consistent. It means a foreign key value must either match an existing primary key value in the related table or be NULL. You cannot delete a record from a parent table if related records exist in a child table.",
  },
  {
    id: 11,
    unit: "databases",
    q: "Explain the difference between DELETE, UPDATE, and INSERT SQL statements.",
    a: "INSERT INTO TableName (fields) VALUES (values); — adds new records\nUPDATE TableName SET field = value WHERE condition; — modifies existing records\nDELETE FROM TableName WHERE condition; — removes records\nAlways use a WHERE clause with UPDATE and DELETE to avoid affecting all records.",
  },
  {
    id: 12,
    unit: "databases",
    q: "What is a one-to-many relationship? Give an example.",
    a: "A one-to-many (1:M) relationship means one record in Table A can relate to many records in Table B, but each record in Table B relates to only one record in Table A. Example: One Customer can place many Orders, but each Order belongs to only one Customer.",
  },
  {
    id: 13,
    unit: "databases",
    q: "What is a many-to-many relationship and how is it resolved?",
    a: "A many-to-many (M:N) relationship means many records in Table A can relate to many records in Table B. It is resolved by creating a junction (linking/bridge) table that contains the primary keys of both tables as foreign keys. Example: Students and Subjects linked by an Enrolment table.",
  },
  {
    id: 14,
    unit: "databases",
    q: "What does the SQL LIKE operator do? Explain the wildcards.",
    a: "LIKE is used in a WHERE clause for pattern matching on text fields.\n% (percent) matches zero or more characters: WHERE Name LIKE 'J%' finds names starting with J.\n_ (underscore) matches exactly one character: WHERE Code LIKE 'A_1' matches A followed by any single character then 1.",
  },

  // --- Solution Development / OOP (oop) ---
  {
    id: 15,
    unit: "oop",
    q: "What is Object-Oriented Programming (OOP)?",
    a: "OOP is a programming paradigm that organises code around objects rather than functions and procedures. Objects are instances of classes, which are blueprints that define attributes (properties/fields) and methods (behaviours/procedures). Key principles: encapsulation, inheritance, and polymorphism.",
  },
  {
    id: 16,
    unit: "oop",
    q: "What is a class and what is an object?",
    a: "A class is a blueprint/template that defines the attributes (fields/properties) and methods (behaviours) of a type of object. An object is a specific instance of a class, created at runtime with its own set of attribute values. Example: class = Car; object = myCar (a specific car with colour=red, speed=120).",
  },
  {
    id: 17,
    unit: "oop",
    q: "What is encapsulation and why is it important?",
    a: "Encapsulation is the bundling of data (attributes) and methods that operate on that data within a single class, while hiding internal details from outside. Attributes are declared private and accessed via public getter/setter methods. It protects data from unauthorised access and modification.",
  },
  {
    id: 18,
    unit: "oop",
    q: "What is inheritance in OOP?",
    a: "Inheritance allows a new class (subclass/child) to inherit attributes and methods from an existing class (superclass/parent). The child class can reuse parent code and add its own specialised attributes and methods. In Delphi: TChild = class(TParent). In Java: class Child extends Parent.",
  },
  {
    id: 19,
    unit: "oop",
    q: "What is polymorphism? Give an example.",
    a: "Polymorphism means 'many forms' — it allows objects of different classes to respond to the same method call in different ways. Example: a parent class TShape has a method calcArea. TCircle overrides calcArea to use pi*r*r, while TRectangle overrides it to use length*width. The same method name produces different behaviour depending on the object type.",
  },
  {
    id: 20,
    unit: "oop",
    q: "What is a constructor? How is it declared in Delphi?",
    a: "A constructor is a special method that is automatically called when an object is created. It initialises the object's attributes. In Delphi: constructor Create(parameters); In Java: public ClassName(parameters). The constructor name in Delphi is always 'Create'.",
  },
  {
    id: 21,
    unit: "oop",
    q: "What is the difference between private, public, and protected access modifiers?",
    a: "Private: accessible only within the class itself — used for data hiding.\nPublic: accessible from anywhere — used for methods that other code needs to call.\nProtected: accessible within the class and its subclasses — used when child classes need access to parent attributes.",
  },
  {
    id: 22,
    unit: "oop",
    q: "What is a toString method and why is it useful?",
    a: "A toString method returns a string representation of an object's state (its attribute values in readable format). It is useful for displaying object information, debugging, and writing object data to files or memo components. In Delphi it is typically a function returning a string.",
  },
  {
    id: 23,
    unit: "oop",
    q: "Write a Delphi class declaration for a TPerson with name and age.",
    a: "type\n  TPerson = class\n  private\n    fName: string;\n    fAge: integer;\n  public\n    constructor Create(sName: string; iAge: integer);\n    function getName: string;\n    function getAge: integer;\n    procedure setAge(iAge: integer);\n    function toString: string;\n  end;",
  },
  {
    id: 24,
    unit: "oop",
    q: "How does method overriding work in Delphi?",
    a: "In the parent class, declare the method with the 'virtual' directive. In the child class, redeclare it with the 'override' directive. This allows the child to provide its own implementation.\nParent: function calcCost: real; virtual;\nChild: function calcCost: real; override;",
  },
  {
    id: 25,
    unit: "oop",
    q: "What is the difference between a class and a record (struct)?",
    a: "A class supports OOP features: encapsulation, inheritance, polymorphism, constructors, and methods. Objects are reference types (stored on the heap).\nA record is a simple data structure that groups related fields but does not support inheritance or polymorphism. Records are value types (stored on the stack).",
  },
  {
    id: 26,
    unit: "oop",
    q: "What is an abstract class/method?",
    a: "An abstract method is declared in a parent class but has no implementation — subclasses must provide the implementation using override. A class with at least one abstract method is called an abstract class and cannot be instantiated directly. In Delphi: function calcArea: real; virtual; abstract;",
  },

  // --- System Technologies (systems) ---
  {
    id: 27,
    unit: "systems",
    q: "What are the main components of a CPU?",
    a: "1. ALU (Arithmetic Logic Unit) — performs calculations and logical comparisons.\n2. CU (Control Unit) — fetches, decodes, and executes instructions; coordinates all components.\n3. Registers — small, fast temporary storage locations inside the CPU.\n4. Cache — very fast memory between CPU and RAM to speed up access to frequently used data.",
  },
  {
    id: 28,
    unit: "systems",
    q: "What factors affect CPU performance?",
    a: "1. Clock speed (GHz) — number of cycles per second.\n2. Number of cores — more cores allow parallel processing.\n3. Cache size — larger cache means less waiting for RAM.\n4. Bus speed — data transfer rate between components.\n5. Word size (32-bit vs 64-bit) — amount of data processed per cycle.",
  },
  {
    id: 29,
    unit: "systems",
    q: "Explain the difference between RAM and ROM.",
    a: "RAM (Random Access Memory): volatile (loses data on power-off), read/write, holds currently running programs and data, faster, comes in DRAM and SRAM types.\nROM (Read Only Memory): non-volatile (retains data without power), read-only, stores BIOS/firmware for startup, slower, smaller capacity.",
  },
  {
    id: 30,
    unit: "systems",
    q: "What is virtual memory and when is it used?",
    a: "Virtual memory is a portion of the hard drive used as an extension of RAM when physical RAM is full. The OS swaps data between RAM and the hard drive (paging). It prevents programs from crashing due to insufficient RAM but is much slower than physical RAM, causing system slowdowns (thrashing).",
  },
  {
    id: 31,
    unit: "systems",
    q: "Compare HDD and SSD storage devices.",
    a: "HDD: uses spinning magnetic platters and read/write head, cheaper per GB, larger capacities available, slower read/write speeds, fragile (moving parts), can fragment.\nSSD: uses flash memory chips (NAND), no moving parts, much faster, more durable, silent, lighter, more expensive per GB, limited write cycles.",
  },
  {
    id: 32,
    unit: "systems",
    q: "What is an operating system and what are its functions?",
    a: "An OS is system software that manages computer hardware and software resources and provides services for application programs. Functions:\n1. Processor management (scheduling)\n2. Memory management (allocating RAM)\n3. File management (organising storage)\n4. Device management (drivers)\n5. User interface (GUI/CLI)\n6. Security (authentication, permissions)",
  },
  {
    id: 33,
    unit: "systems",
    q: "What is the difference between open-source and proprietary software?",
    a: "Open-source: source code is freely available, can be modified and distributed, usually free (e.g. Linux, LibreOffice, GIMP). Community-supported.\nProprietary: source code is closed/secret, cannot be modified, requires purchasing a licence (e.g. Windows, MS Office, Adobe Photoshop). Vendor-supported.",
  },
  {
    id: 34,
    unit: "systems",
    q: "What is multitasking vs multiprocessing?",
    a: "Multitasking: the OS runs multiple programs apparently simultaneously by rapidly switching the CPU between tasks (time-slicing). Only one task executes at a time on a single core.\nMultiprocessing: uses multiple CPUs or cores to execute multiple tasks truly simultaneously. Each core handles a different process.",
  },
  {
    id: 35,
    unit: "systems",
    q: "What is the difference between system software and application software?",
    a: "System software manages and controls the computer hardware (OS, device drivers, utility programs like antivirus and disk defragmenters). It runs in the background.\nApplication software performs specific tasks for the user (word processors, spreadsheets, games, browsers). The user interacts with it directly.",
  },
  {
    id: 36,
    unit: "systems",
    q: "What is BIOS/UEFI and what does it do during boot-up?",
    a: "BIOS (Basic Input/Output System) or UEFI (Unified Extensible Firmware Interface) is firmware stored in ROM. During boot-up it performs the POST (Power-On Self-Test) to check hardware components, then locates and loads the OS from the boot device into RAM. UEFI is the modern replacement for BIOS with faster boot times and a graphical interface.",
  },
  {
    id: 37,
    unit: "systems",
    q: "What is the fetch-decode-execute cycle?",
    a: "The CPU processes each instruction in three steps:\n1. Fetch — the CU fetches the next instruction from RAM (address in Program Counter).\n2. Decode — the CU decodes the instruction to determine what operation to perform.\n3. Execute — the ALU or other component carries out the operation.\nThis cycle repeats billions of times per second.",
  },
  {
    id: 38,
    unit: "systems",
    q: "Explain the difference between volatile and non-volatile memory.",
    a: "Volatile memory loses its contents when power is switched off. Examples: RAM, cache, registers.\nNon-volatile memory retains its contents without power. Examples: ROM, SSD, HDD, flash drives, optical discs.\nVolatile memory is faster but temporary; non-volatile is slower but permanent.",
  },

  // --- Data Structures & Algorithms (algorithms) ---
  {
    id: 39,
    unit: "algorithms",
    q: "What is a one-dimensional array?",
    a: "A one-dimensional array is a data structure that stores a fixed-size collection of elements of the same data type in contiguous memory locations. Each element is accessed using an index. In Delphi: var arr: array[0..9] of integer; In Java: int[] arr = new int[10];",
  },
  {
    id: 40,
    unit: "algorithms",
    q: "What is a two-dimensional array and when is it used?",
    a: "A two-dimensional array is an array of arrays, forming a grid/table structure with rows and columns. It is used to store tabular data. In Delphi: var grid: array[0..4, 0..3] of integer; Access: grid[row, col]. In Java: int[][] grid = new int[5][4]; Access: grid[row][col].",
  },
  {
    id: 41,
    unit: "algorithms",
    q: "Describe the Bubble Sort algorithm.",
    a: "Bubble Sort repeatedly steps through the array, comparing adjacent elements and swapping them if they are in the wrong order. After each pass, the largest unsorted element 'bubbles up' to its correct position. It continues until no swaps are needed.\nTime complexity: O(n^2) — inefficient for large datasets.",
  },
  {
    id: 42,
    unit: "algorithms",
    q: "Describe the Selection Sort algorithm.",
    a: "Selection Sort divides the array into sorted and unsorted parts. It repeatedly finds the minimum (or maximum) element from the unsorted part and places it at the beginning of the unsorted part (swapping with the first unsorted element).\nTime complexity: O(n^2) — performs fewer swaps than Bubble Sort.",
  },
  {
    id: 43,
    unit: "algorithms",
    q: "Describe the Insertion Sort algorithm.",
    a: "Insertion Sort builds a sorted array one element at a time. It takes each element from the unsorted part and inserts it into its correct position in the sorted part by shifting larger elements to the right.\nTime complexity: O(n^2) worst case, but efficient for small or nearly sorted datasets.",
  },
  {
    id: 44,
    unit: "algorithms",
    q: "Describe the Sequential (Linear) Search algorithm.",
    a: "Sequential Search checks each element in the array one by one from the beginning until the target value is found or the end of the array is reached. It works on both sorted and unsorted arrays.\nTime complexity: O(n) — in the worst case, every element must be checked.",
  },
  {
    id: 45,
    unit: "algorithms",
    q: "Describe the Binary Search algorithm and its prerequisite.",
    a: "Binary Search requires a SORTED array. It repeatedly divides the search interval in half: compare the target with the middle element. If equal, found. If target is less, search the left half. If greater, search the right half. Repeat until found or interval is empty.\nTime complexity: O(log n) — much faster than linear search for large datasets.",
  },
  {
    id: 46,
    unit: "algorithms",
    q: "Compare Bubble Sort, Selection Sort, and Insertion Sort.",
    a: "Bubble Sort: compares adjacent pairs, many swaps, O(n^2), stable, simple to code.\nSelection Sort: finds minimum each pass, fewer swaps, O(n^2), not stable, simple.\nInsertion Sort: inserts elements into sorted position, O(n^2) worst but O(n) best (nearly sorted data), stable, efficient for small arrays.\nAll are O(n^2) but Insertion Sort is generally fastest in practice for small datasets.",
  },
  {
    id: 47,
    unit: "algorithms",
    q: "What is Big-O notation and why is it important?",
    a: "Big-O notation describes the worst-case time complexity of an algorithm — how the execution time grows as the input size (n) increases. It helps compare algorithm efficiency.\nO(1) — constant time\nO(log n) — logarithmic (binary search)\nO(n) — linear (sequential search)\nO(n^2) — quadratic (bubble/selection/insertion sort)",
  },
  {
    id: 48,
    unit: "algorithms",
    q: "Write Delphi code for a Bubble Sort on an array of integers.",
    a: "var i, j, temp: integer;\nfor i := 0 to High(arr) - 1 do\n  for j := 0 to High(arr) - 1 - i do\n    if arr[j] > arr[j+1] then\n    begin\n      temp := arr[j];\n      arr[j] := arr[j+1];\n      arr[j+1] := temp;\n    end;",
  },
  {
    id: 49,
    unit: "algorithms",
    q: "Write Delphi code for a Binary Search.",
    a: "var low, high, mid: integer;\n    found: boolean;\nlow := 0;\nhigh := High(arr);\nfound := false;\nwhile (low <= high) and (not found) do\nbegin\n  mid := (low + high) div 2;\n  if arr[mid] = target then\n    found := true\n  else if arr[mid] < target then\n    low := mid + 1\n  else\n    high := mid - 1;\nend;",
  },
  {
    id: 50,
    unit: "algorithms",
    q: "What is a stack and how does it work?",
    a: "A stack is a Last-In-First-Out (LIFO) data structure. Elements are added (pushed) and removed (popped) from the top only. Like a stack of plates — you can only add or remove from the top. Operations: Push (add to top), Pop (remove from top), Peek (view top without removing), isEmpty.",
  },
  {
    id: 51,
    unit: "algorithms",
    q: "What is a queue and how does it differ from a stack?",
    a: "A queue is a First-In-First-Out (FIFO) data structure. Elements are added at the rear (enqueue) and removed from the front (dequeue). Like a queue of people — first person in line is served first. A stack is LIFO (last in, first out), while a queue is FIFO (first in, first out).",
  },
  {
    id: 52,
    unit: "algorithms",
    q: "What is recursion? Give an example.",
    a: "Recursion is when a function/method calls itself to solve a problem by breaking it into smaller sub-problems. Every recursive function needs a base case (stopping condition) to prevent infinite recursion.\nExample — factorial:\nfunction factorial(n: integer): integer;\nbegin\n  if n <= 1 then Result := 1\n  else Result := n * factorial(n - 1);\nend;",
  },

  // --- Internet & Network Technologies (networks) ---
  {
    id: 53,
    unit: "networks",
    q: "What is the difference between the Internet and the World Wide Web?",
    a: "The Internet is the global physical network infrastructure — the interconnected hardware (cables, routers, servers) that allows computers to communicate.\nThe World Wide Web (WWW) is a service that runs ON the Internet — a collection of websites and web pages accessed via HTTP/HTTPS using a browser. Other Internet services include email (SMTP), FTP, and VoIP.",
  },
  {
    id: 54,
    unit: "networks",
    q: "What is the TCP/IP protocol suite?",
    a: "TCP/IP is the standard set of communication protocols used on the Internet.\nTCP (Transmission Control Protocol): breaks data into packets, ensures reliable delivery and correct reassembly, error-checking.\nIP (Internet Protocol): addresses packets with source and destination IP addresses, routes them across the network.\nTogether they ensure data reaches its destination accurately.",
  },
  {
    id: 55,
    unit: "networks",
    q: "Explain the difference between HTTP and HTTPS.",
    a: "HTTP (HyperText Transfer Protocol): transfers web pages between servers and browsers. Data is sent in plain text — not secure.\nHTTPS (HTTP Secure): uses SSL/TLS encryption to encrypt data during transmission. Provides authentication (verifies the server's identity) and data integrity. Essential for banking, login pages, and any site handling sensitive data. Shown by a padlock icon in the browser.",
  },
  {
    id: 56,
    unit: "networks",
    q: "What is a firewall?",
    a: "A firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predefined security rules. It creates a barrier between a trusted internal network and untrusted external networks (the Internet). Can be hardware-based, software-based, or both. It filters packets and blocks unauthorised access.",
  },
  {
    id: 57,
    unit: "networks",
    q: "What is encryption and why is it important?",
    a: "Encryption is the process of converting readable data (plaintext) into an unreadable format (ciphertext) using an algorithm and a key. Only someone with the correct decryption key can convert it back. It is important for protecting sensitive data during transmission (e.g. online banking, emails) and storage (e.g. encrypted hard drives).",
  },
  {
    id: 58,
    unit: "networks",
    q: "What is phishing? How can you identify a phishing attempt?",
    a: "Phishing is a social engineering attack where criminals send fake emails/messages that appear to be from legitimate organisations to trick users into revealing personal information (passwords, banking details). Identify by: suspicious sender address, generic greeting, urgency/threats, spelling errors, suspicious links (hover to check URL), requests for personal information.",
  },
  {
    id: 59,
    unit: "networks",
    q: "Explain the difference between symmetric and asymmetric encryption.",
    a: "Symmetric encryption: uses the SAME key to encrypt and decrypt. Faster but the key must be shared securely. Examples: AES, DES.\nAsymmetric encryption: uses a pair of keys — a public key (shared) to encrypt and a private key (kept secret) to decrypt. Slower but more secure for key exchange. Examples: RSA. Used in HTTPS/SSL.",
  },
  {
    id: 60,
    unit: "networks",
    q: "What is malware? List the common types.",
    a: "Malware is malicious software designed to damage, disrupt, or gain unauthorised access to a computer.\nTypes: Virus (attaches to files, spreads when executed), Worm (self-replicating, spreads across networks), Trojan (disguised as legitimate software), Ransomware (encrypts files, demands payment), Spyware (secretly monitors activity), Adware (displays unwanted advertisements), Keylogger (records keystrokes).",
  },
  {
    id: 61,
    unit: "networks",
    q: "What are the characteristics of a strong password?",
    a: "A strong password should be: at least 8-12 characters long, contain a mix of uppercase and lowercase letters, include numbers and special characters (!@#$%), not be a dictionary word or personal information, unique for each account, changed regularly, and not shared with anyone.",
  },
  {
    id: 62,
    unit: "networks",
    q: "What is two-factor authentication (2FA)?",
    a: "2FA is a security method that requires two different types of verification to access an account:\n1. Something you know (password/PIN)\n2. Something you have (phone/token for OTP)\n3. Something you are (biometrics — fingerprint/face)\n2FA significantly reduces the risk of unauthorised access even if the password is compromised.",
  },

  // --- Social Implications & e-Communications (social) ---
  {
    id: 63,
    unit: "social",
    q: "What is the POPI Act (Protection of Personal Information Act)?",
    a: "POPI Act is South African legislation (effective 2020) that regulates how organisations collect, store, process, and share personal information. Key principles: data must be collected lawfully and with consent, used only for its stated purpose, stored securely, kept accurate and up-to-date, and individuals can access and correct their data. Non-compliance can result in fines up to R10 million.",
  },
  {
    id: 64,
    unit: "social",
    q: "What is the ECT Act (Electronic Communications and Transactions Act)?",
    a: "The ECT Act (Act 25 of 2002) is South African legislation that governs electronic communications and transactions. It covers: legal recognition of electronic documents and digital signatures, regulation of e-commerce, protection of consumer rights in online transactions, criminalisation of cybercrimes (hacking, data interception), and requirements for data retention.",
  },
  {
    id: 65,
    unit: "social",
    q: "What is the digital divide?",
    a: "The digital divide is the gap between people who have access to modern ICT (computers, internet, digital literacy) and those who do not. In South Africa, this divide exists between urban and rural areas, rich and poor, and young and old. It affects education, employment, and economic opportunities. Bridging the divide requires infrastructure development, affordable access, and digital skills training.",
  },
  {
    id: 66,
    unit: "social",
    q: "What are the environmental impacts of ICT?",
    a: "Negative: e-waste (toxic materials in discarded electronics), energy consumption of data centres, carbon footprint of manufacturing, short device lifecycles.\nPositive: reducing paper usage, enabling remote work (less commuting), smart systems for energy efficiency, online meetings replacing travel.\nMitigation: proper e-waste recycling, energy-efficient hardware, responsible disposal, using devices longer.",
  },
  {
    id: 67,
    unit: "social",
    q: "What is e-waste and how should it be handled?",
    a: "E-waste is discarded electronic equipment (computers, phones, printers, cables). It contains hazardous materials (lead, mercury, cadmium) that can contaminate soil and water if dumped. Proper handling: recycle through certified e-waste recyclers, donate working devices, remove personal data before disposal, support extended producer responsibility programmes.",
  },
  {
    id: 68,
    unit: "social",
    q: "What is cyberbullying and what should a victim do?",
    a: "Cyberbullying is using digital technology (social media, messaging, email) to harass, threaten, embarrass, or intimidate someone. Forms include: threatening messages, spreading rumours online, sharing private images without consent, impersonation, exclusion from online groups.\nVictims should: not retaliate, block and report the bully, save evidence (screenshots), tell a trusted adult, report to the platform and police if necessary.",
  },
  {
    id: 69,
    unit: "social",
    q: "What is copyright and how does Creative Commons differ?",
    a: "Copyright automatically protects original creative works (text, music, software, art) — the creator has exclusive rights to copy, distribute, and modify the work. Others need permission.\nCreative Commons (CC) licences allow creators to grant specific permissions while retaining copyright. Types include: CC BY (attribution only), CC BY-SA (share-alike), CC BY-NC (non-commercial), CC BY-ND (no derivatives).",
  },
  {
    id: 70,
    unit: "social",
    q: "What is a digital footprint and why does it matter?",
    a: "A digital footprint is the trail of data left by online activity.\nActive footprint: data you deliberately share (posts, comments, uploads, profiles).\nPassive footprint: data collected without your direct action (browsing history, cookies, IP logs, location tracking).\nIt matters because: it is almost permanent, employers and universities check it, it can be used for identity theft, and it affects your online reputation.",
  },
  {
    id: 71,
    unit: "social",
    q: "Explain the concept of digital citizenship.",
    a: "Digital citizenship is the responsible, ethical, legal, and safe use of technology. It includes: respecting intellectual property (copyright), protecting personal privacy, practicing good netiquette, reporting cyberbullying, being critical of online information, balancing screen time, being aware of one's digital footprint, and understanding the impact of technology on society.",
  },
  {
    id: 72,
    unit: "social",
    q: "What are the health risks associated with prolonged computer use?",
    a: "Physical: RSI (Repetitive Strain Injury) from keyboard/mouse use, back and neck pain from poor posture, eye strain and CVS (Computer Vision Syndrome) from screen glare, carpal tunnel syndrome.\nPsychological: internet/gaming addiction, social isolation, cyberbullying-related stress, sleep disruption from blue light.\nPrevention: ergonomic setup, regular breaks (20-20-20 rule), proper lighting, correct posture.",
  },
];

// ============================================================
// QUIZ DATA - Information Technology (Grade 12 CAPS)
// ============================================================
export const quizQuestions: QuizQuestion[] = [
  // --- Databases ---
  {
    id: 1,
    unit: "databases",

    question: "Which normal form eliminates transitive dependencies?",
    options: [
      "First Normal Form (1NF)",
      "Second Normal Form (2NF)",
      "Third Normal Form (3NF)",
      "Boyce-Codd Normal Form (BCNF)",
    ],
    correct: 2,
    explanation:
      "Third Normal Form (3NF) requires that all non-key fields depend directly on the primary key only, eliminating transitive dependencies (where a non-key field depends on another non-key field).",
  },
  {
    id: 2,
    unit: "databases",

    question:
      "What is the correct SQL to select all learners in Grade 12 sorted by surname?",
    options: [
      "SELECT * FROM Learners WHERE Grade = 12 SORT BY Surname;",
      "SELECT * FROM Learners WHERE Grade = 12 ORDER BY Surname;",
      "SELECT * FROM Learners HAVING Grade = 12 ORDER BY Surname;",
      "GET * FROM Learners WHERE Grade = 12 ORDER BY Surname;",
    ],
    correct: 1,
    explanation:
      "The correct SQL uses SELECT ... FROM ... WHERE ... ORDER BY. SORT BY is not valid SQL. HAVING is used with GROUP BY for aggregate conditions. GET is not a SQL keyword.",
  },
  {
    id: 3,
    unit: "databases",

    question: "A foreign key in a table refers to:",
    options: [
      "Any field in the same table",
      "The primary key of another table",
      "A unique index in the same table",
      "An auto-numbered field in another table",
    ],
    correct: 1,
    explanation:
      "A foreign key is a field in one table that references the primary key of another table, creating a relationship between the two tables and enforcing referential integrity.",
  },
  {
    id: 4,
    unit: "databases",

    question:
      "Which SQL statement would count the number of orders per customer?",
    options: [
      "SELECT CustomerID, COUNT(*) FROM Orders;",
      "SELECT CustomerID, COUNT(*) FROM Orders GROUP BY CustomerID;",
      "SELECT CustomerID, SUM(*) FROM Orders GROUP BY CustomerID;",
      "SELECT COUNT(CustomerID) FROM Orders ORDER BY CustomerID;",
    ],
    correct: 1,
    explanation:
      "COUNT(*) with GROUP BY CustomerID groups all orders by customer and counts the number of records in each group. Without GROUP BY, COUNT would return the total count for the entire table.",
  },
  {
    id: 5,
    unit: "databases",

    question: "What does referential integrity ensure?",
    options: [
      "That all primary keys are auto-numbered",
      "That foreign key values match existing primary key values in the related table",
      "That no two tables have the same field names",
      "That all fields contain unique values",
    ],
    correct: 1,
    explanation:
      "Referential integrity ensures that a foreign key value must either match an existing primary key value in the related table or be NULL. This prevents orphaned records and maintains consistent relationships.",
  },
  {
    id: 6,
    unit: "databases",

    question:
      "Which SQL clause is used for pattern matching with wildcards?",
    options: ["MATCH", "LIKE", "SIMILAR", "PATTERN"],
    correct: 1,
    explanation:
      "The LIKE clause is used in SQL WHERE conditions for pattern matching. It uses % (any number of characters) and _ (exactly one character) as wildcards. Example: WHERE Name LIKE 'J%' finds all names starting with J.",
  },

  // --- OOP ---
  {
    id: 7,
    unit: "oop",

    question:
      "Which OOP principle involves hiding internal data and providing access through methods?",
    options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
    correct: 2,
    explanation:
      "Encapsulation is the principle of bundling data (attributes) with methods that operate on that data, while hiding internal details. Private attributes are accessed only through public getter and setter methods, which can include validation logic to protect data integrity.",
  },
  {
    id: 8,
    unit: "oop",

    question:
      "In Delphi, what keyword is used in the parent class to allow a method to be overridden?",
    options: ["override", "abstract", "virtual", "inherited"],
    correct: 2,
    explanation:
      "In Delphi, the 'virtual' keyword is used in the parent class method declaration to indicate it can be overridden by child classes. The child class then uses 'override' to provide its own implementation.",
  },
  {
    id: 9,
    unit: "oop",

    question:
      "What is the correct Delphi syntax to create a child class that inherits from TAnimal?",
    options: [
      "TDog = class extends TAnimal",
      "TDog = class(TAnimal)",
      "TDog = class inherits TAnimal",
      "TDog = subclass(TAnimal)",
    ],
    correct: 1,
    explanation:
      "In Delphi, inheritance is declared using the syntax: TChildClass = class(TParentClass). The parent class name is placed in parentheses after the 'class' keyword.",
  },
  {
    id: 10,
    unit: "oop",

    question: "What is the purpose of a constructor?",
    options: [
      "To destroy an object and free memory",
      "To initialise an object's attributes when it is created",
      "To copy an object's attributes to another object",
      "To display the object's data on screen",
    ],
    correct: 1,
    explanation:
      "A constructor is a special method that is automatically called when an object is created (instantiated). Its purpose is to initialise the object's attributes with starting values. In Delphi, it is always named 'Create'.",
  },
  {
    id: 11,
    unit: "oop",

    question: "Polymorphism allows:",
    options: [
      "A child class to inherit from multiple parent classes",
      "Objects of different classes to respond differently to the same method call",
      "An object to change its class at runtime",
      "Methods to be declared without parameters",
    ],
    correct: 1,
    explanation:
      "Polymorphism means 'many forms'. It allows different classes to implement the same method name in different ways. For example, calcArea() works differently for TCircle and TRectangle but can be called on any TShape reference.",
  },
  {
    id: 12,
    unit: "oop",

    question:
      "Which access modifier should be used for attributes (fields) in a well-designed class?",
    options: ["public", "private", "protected", "published"],
    correct: 1,
    explanation:
      "Attributes should be declared as private to enforce encapsulation. This prevents direct external access and forces other code to use getter and setter methods, which can include validation logic to protect data integrity.",
  },

  // --- Systems ---
  {
    id: 13,
    unit: "systems",

    question:
      "Which component of the CPU performs arithmetic calculations and logical comparisons?",
    options: [
      "Control Unit (CU)",
      "Arithmetic Logic Unit (ALU)",
      "Cache Memory",
      "Registers",
    ],
    correct: 1,
    explanation:
      "The ALU (Arithmetic Logic Unit) is the part of the CPU that performs all arithmetic operations (addition, subtraction, multiplication, division) and logical comparisons (AND, OR, NOT, comparisons).",
  },
  {
    id: 14,
    unit: "systems",

    question: "What is the main advantage of an SSD over an HDD?",
    options: [
      "SSDs are cheaper per gigabyte",
      "SSDs have larger storage capacities",
      "SSDs have much faster read/write speeds and no moving parts",
      "SSDs use magnetic platters for reliability",
    ],
    correct: 2,
    explanation:
      "SSDs use flash memory chips with no moving parts, resulting in much faster read/write speeds, greater durability, silence, and lower power consumption compared to HDDs, which use spinning magnetic platters.",
  },
  {
    id: 15,
    unit: "systems",

    question: "What happens during the POST (Power-On Self-Test)?",
    options: [
      "The operating system is loaded into RAM",
      "The BIOS/UEFI checks that essential hardware components are functioning",
      "User files are backed up to the cloud",
      "Device drivers are installed for new hardware",
    ],
    correct: 1,
    explanation:
      "POST (Power-On Self-Test) is performed by BIOS/UEFI during boot-up. It checks that essential hardware (CPU, RAM, keyboard, storage devices) is present and functioning correctly before the OS is loaded.",
  },
  {
    id: 16,
    unit: "systems",

    question: "Virtual memory is:",
    options: [
      "A type of RAM that is twice as fast as normal RAM",
      "Hard drive space used as an extension of RAM when physical RAM is full",
      "Memory on a USB flash drive used by the OS",
      "Cloud-based storage used for running programs",
    ],
    correct: 1,
    explanation:
      "Virtual memory is a portion of the hard drive that the OS uses as extra RAM when physical RAM is full. Data is swapped between RAM and the hard drive (paging). It prevents crashes but is much slower than real RAM.",
  },
  {
    id: 17,
    unit: "systems",

    question: "Which is NOT a function of an operating system?",
    options: [
      "Memory management",
      "File management",
      "Word processing",
      "Device management",
    ],
    correct: 2,
    explanation:
      "Word processing is an application software function, not an OS function. The OS manages memory, files, devices (drivers), processor scheduling, security, and provides the user interface.",
  },
  {
    id: 18,
    unit: "systems",

    question: "Open-source software means:",
    options: [
      "The software has no copyright protection",
      "The source code is freely available, can be modified and distributed",
      "The software is always free of charge",
      "The software can only be used on open-source operating systems",
    ],
    correct: 1,
    explanation:
      "Open-source software has its source code freely available for anyone to view, modify, and redistribute. It is usually free but can be sold. Examples include Linux, LibreOffice, and Firefox.",
  },

  // --- Algorithms ---
  {
    id: 19,
    unit: "algorithms",

    question: "Binary Search requires the data to be:",
    options: [
      "In a linked list",
      "In random order",
      "Sorted in ascending or descending order",
      "Stored in a two-dimensional array",
    ],
    correct: 2,
    explanation:
      "Binary Search only works on sorted data. It repeatedly halves the search space by comparing the target with the middle element, which is only possible when data is in sorted order.",
  },
  {
    id: 20,
    unit: "algorithms",

    question: "What is the time complexity of Binary Search?",
    options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
    correct: 3,
    explanation:
      "Binary Search has O(log n) time complexity because it halves the search space with each comparison. For 1000 elements, it needs at most about 10 comparisons (log2 of 1000), compared to up to 1000 for linear search.",
  },
  {
    id: 21,
    unit: "algorithms",

    question:
      "In Bubble Sort, after the first complete pass through an array of n elements:",
    options: [
      "The smallest element is in the first position",
      "The largest element is in the last position",
      "The array is completely sorted",
      "Only the middle element is correctly placed",
    ],
    correct: 1,
    explanation:
      "In Bubble Sort (ascending order), each pass compares adjacent elements and swaps them if out of order. After the first pass, the largest element has 'bubbled up' to the last position in the array.",
  },
  {
    id: 22,
    unit: "algorithms",

    question: "A stack uses which principle?",
    options: [
      "FIFO (First In, First Out)",
      "LIFO (Last In, First Out)",
      "Random Access",
      "Priority-based",
    ],
    correct: 1,
    explanation:
      "A stack follows the LIFO (Last In, First Out) principle — the last element added (pushed) is the first one removed (popped). Like a stack of plates, you add and remove from the top only.",
  },
  {
    id: 23,
    unit: "algorithms",

    question: "What is the base case in a recursive function?",
    options: [
      "The first call to the function",
      "The condition that stops the recursion and returns a value directly",
      "The largest input the function can handle",
      "The recursive call within the function",
    ],
    correct: 1,
    explanation:
      "The base case is the condition that stops the recursion by returning a value directly without making another recursive call. Without a base case, the function would call itself infinitely, causing a stack overflow error.",
  },
  {
    id: 24,
    unit: "algorithms",

    question: "Which sorting algorithm generally performs the fewest swaps?",
    options: [
      "Bubble Sort",
      "Selection Sort",
      "Insertion Sort",
      "They all perform the same number",
    ],
    correct: 1,
    explanation:
      "Selection Sort performs at most n-1 swaps (one per pass) because it only swaps the minimum element with the first unsorted element. Bubble Sort potentially swaps on every comparison, making it perform significantly more swaps.",
  },

  // --- Networks ---
  {
    id: 25,
    unit: "networks",

    question: "What does HTTPS provide that HTTP does not?",
    options: [
      "Faster page loading",
      "Encryption, authentication, and data integrity",
      "Better search engine rankings only",
      "Access to more websites",
    ],
    correct: 1,
    explanation:
      "HTTPS (HTTP Secure) uses SSL/TLS to encrypt data during transmission, authenticate the server's identity via digital certificates, and ensure data integrity (data is not tampered with). HTTP sends data in plain text.",
  },
  {
    id: 26,
    unit: "networks",

    question: "A phishing attack is best described as:",
    options: [
      "A virus that spreads through email attachments",
      "A social engineering attack using fake communications to steal personal information",
      "A brute-force attack on passwords",
      "A denial-of-service attack on a web server",
    ],
    correct: 1,
    explanation:
      "Phishing is a social engineering attack where attackers send fraudulent emails, messages, or websites that appear to be from legitimate organisations to trick users into revealing sensitive information such as passwords and banking details.",
  },
  {
    id: 27,
    unit: "networks",

    question:
      "Which type of malware encrypts your files and demands payment?",
    options: ["Trojan", "Worm", "Ransomware", "Spyware"],
    correct: 2,
    explanation:
      "Ransomware encrypts the victim's files and demands a ransom payment (usually in cryptocurrency) to provide the decryption key. Examples include WannaCry and CryptoLocker.",
  },
  {
    id: 28,
    unit: "networks",

    question: "Two-factor authentication (2FA) requires:",
    options: [
      "Two different passwords",
      "Two different types of verification from different categories",
      "Authentication from two different devices",
      "Two different usernames",
    ],
    correct: 1,
    explanation:
      "2FA requires verification from two different categories: something you know (password), something you have (phone/token), or something you are (biometrics). Using two passwords is not 2FA because both are 'something you know'.",
  },
  {
    id: 29,
    unit: "networks",

    question: "What is the function of a firewall?",
    options: [
      "To speed up internet connection",
      "To monitor and control network traffic based on security rules",
      "To encrypt all data on the hard drive",
      "To scan for viruses in email attachments",
    ],
    correct: 1,
    explanation:
      "A firewall monitors and controls incoming and outgoing network traffic based on predefined security rules, creating a barrier between trusted internal networks and untrusted external networks. It filters packets and blocks unauthorised access.",
  },

  // --- Social ---
  {
    id: 30,
    unit: "social",

    question: "The POPI Act requires organisations to:",
    options: [
      "Share personal data freely with third parties for marketing",
      "Collect personal information lawfully, with consent, and use it only for its stated purpose",
      "Store all personal data on international servers",
      "Automatically delete personal data after 30 days",
    ],
    correct: 1,
    explanation:
      "The POPI Act (Protection of Personal Information Act) requires organisations to collect personal data lawfully and with consent, use it only for the stated purpose, store it securely, keep it accurate, and allow individuals to access and correct their information.",
  },
  {
    id: 31,
    unit: "social",

    question:
      "Which of the following is an example of a passive digital footprint?",
    options: [
      "Posting a photo on Instagram",
      "Sending an email to a friend",
      "A website tracking your browsing history via cookies",
      "Commenting on a YouTube video",
    ],
    correct: 2,
    explanation:
      "A passive digital footprint is data collected without the user's direct, deliberate action. Cookies tracking browsing history happens automatically. Active footprints are deliberately created — posts, comments, emails, and uploads.",
  },
  {
    id: 32,
    unit: "social",

    question: "E-waste is problematic because:",
    options: [
      "It takes up too much space in warehouses",
      "It contains hazardous materials that can contaminate soil and water",
      "It is too expensive to manufacture",
      "It cannot be recycled at all",
    ],
    correct: 1,
    explanation:
      "E-waste contains hazardous materials such as lead, mercury, and cadmium that leach into soil and water when improperly disposed of, causing environmental and health damage. E-waste can and should be recycled through certified recyclers.",
  },
  {
    id: 33,
    unit: "social",

    question: "The digital divide refers to:",
    options: [
      "The separation between hardware and software",
      "The gap between people with access to ICT and those without",
      "The difference between digital and analogue signals",
      "The division of the internet into separate networks",
    ],
    correct: 1,
    explanation:
      "The digital divide is the inequality in access to modern ICT between different groups — urban vs rural, wealthy vs poor, young vs old. In South Africa, many rural communities lack reliable internet and computer access, affecting education and economic opportunities.",
  },
  {
    id: 34,
    unit: "social",

    question: "A Creative Commons BY-NC licence means:",
    options: [
      "No one can use the work",
      "Anyone can use the work for any purpose",
      "Others can use the work with attribution but not for commercial purposes",
      "Others can modify the work but must use the same licence",
    ],
    correct: 2,
    explanation:
      "CC BY-NC (Attribution-NonCommercial) allows others to share and adapt the work, provided they give credit to the creator (BY = attribution) and do not use it for commercial purposes (NC = non-commercial).",
  },
  {
    id: 35,
    unit: "social",

    question: "Which is NOT an appropriate response to cyberbullying?",
    options: [
      "Save evidence by taking screenshots",
      "Retaliate by sending threatening messages back",
      "Block and report the bully on the platform",
      "Tell a trusted adult or report to the school",
    ],
    correct: 1,
    explanation:
      "Retaliating with threatening messages is inappropriate and can escalate the situation. It may also make you guilty of cyberbullying yourself. The correct responses are to save evidence, block and report the bully, and seek help from trusted adults.",
  },
];

// ============================================================
// FEYNMAN TOPICS - Information Technology (Grade 12 CAPS)
// ============================================================
export const feynmanTopics: FeynmanTopic[] = [
  {
    id: "1",
    title: "Database Normalisation & SQL",
    prompt:
      "Explain database normalisation through 1NF, 2NF, and 3NF, and how SQL is used to query and manipulate relational databases.",
    keyConcepts: [
      "Normalisation reduces redundancy and improves data integrity by organising tables",
      "1NF requires atomic values and no repeating groups in each cell",
      "2NF eliminates partial dependencies — non-key fields must depend on the entire primary key",
      "3NF eliminates transitive dependencies — non-key fields must depend only on the primary key",
      "Primary keys uniquely identify records and foreign keys create relationships between tables",
      "SQL SELECT uses FROM, WHERE, ORDER BY, and GROUP BY clauses to query data",
      "Aggregate functions COUNT, SUM, AVG, MIN, MAX perform calculations on groups of records",
      "INNER JOIN combines rows from two tables based on matching foreign key to primary key",
    ],
    examTip:
      "Normalisation questions often give you an unnormalised table and ask you to split it into 3NF. Look for repeating groups (1NF violation), partial dependencies (2NF violation), and fields that depend on other non-key fields (3NF violation). Always write complete SQL statements with correct syntax including semicolons.",
  },
  {
    id: "2",
    title: "Object-Oriented Programming Principles",
    prompt:
      "Explain the core principles of Object-Oriented Programming: encapsulation, inheritance, and polymorphism, and how classes and objects work in Delphi.",
    keyConcepts: [
      "A class is a blueprint with private attributes and public methods — an object is an instance of a class",
      "Encapsulation hides internal data using private access and exposes controlled access through getter and setter methods",
      "Inheritance allows a child class to reuse and extend the attributes and methods of a parent class",
      "Polymorphism allows different classes to respond differently to the same method call using virtual and override",
      "A constructor initialises an object's attributes — in Delphi it is always named Create",
      "The toString method returns a string representation of an object's attribute values",
      "Protected access allows child classes to access parent attributes while keeping them hidden from external code",
      "Abstract methods have no implementation in the parent and must be overridden in child classes",
    ],
    examTip:
      "Exam questions frequently ask you to write complete class declarations in Delphi with private fields, a constructor, getters/setters, and a toString method. Practice writing inheritance hierarchies with virtual/override methods. Know the difference between encapsulation, inheritance, and polymorphism with concrete examples.",
  },
  {
    id: "3",
    title: "System Technologies: Hardware & Software",
    prompt:
      "Explain the key hardware components of a computer system (CPU, memory, storage) and the role of system software including the operating system.",
    keyConcepts: [
      "The CPU consists of the ALU for calculations, CU for instruction control, registers for temporary storage, and cache for frequently used data",
      "The fetch-decode-execute cycle processes each instruction from RAM",
      "RAM is volatile and holds running programs while ROM is non-volatile and stores BIOS/UEFI firmware",
      "Virtual memory uses hard drive space as extra RAM through paging but is much slower",
      "SSDs use flash memory with no moving parts and are faster than HDDs which use spinning magnetic platters",
      "The OS manages processor scheduling, memory allocation, file systems, device drivers, and security",
      "Open-source software has freely available source code while proprietary software has closed source and requires licences",
      "CPU performance depends on clock speed, number of cores, cache size, bus speed, and word size",
    ],
    examTip:
      "You must be able to compare technologies clearly — HDD vs SSD, RAM vs ROM, open-source vs proprietary. For CPU questions, explain each component's role in the fetch-decode-execute cycle. Know what BIOS/UEFI does during boot-up including the POST process.",
  },
  {
    id: "4",
    title: "Sorting, Searching & Data Structures",
    prompt:
      "Explain the sorting algorithms (Bubble, Selection, Insertion), searching algorithms (Sequential, Binary), and data structures (stacks, queues) covered in Grade 12 IT.",
    keyConcepts: [
      "Bubble Sort compares adjacent elements and swaps them, with the largest bubbling to the end each pass",
      "Selection Sort finds the minimum unsorted element and swaps it to the correct position each pass",
      "Insertion Sort takes each element and inserts it into its correct position in the sorted portion",
      "Sequential Search checks each element one by one and works on unsorted data with O(n) complexity",
      "Binary Search requires sorted data and repeatedly halves the search space with O(log n) complexity",
      "A stack is LIFO — last in first out — with push and pop operations from the top only",
      "A queue is FIFO — first in first out — with enqueue at the rear and dequeue from the front",
      "Recursion is a function calling itself with a base case to stop and a recursive case to continue",
    ],
    examTip:
      "Be able to trace through sorting and searching algorithms step by step showing the state of the array after each pass. Write Delphi code for all three sorts and both searches. Know when to use each algorithm — Binary Search is faster but requires sorted data. Understand stack vs queue with real-world analogies.",
  },
  {
    id: "5",
    title: "Internet Technologies & Security",
    prompt:
      "Explain how the Internet works (TCP/IP, HTTP/HTTPS) and the key security concepts including encryption, firewalls, malware, and authentication.",
    keyConcepts: [
      "The Internet is the physical network infrastructure while the WWW is a service running on it accessed via HTTP/HTTPS",
      "TCP breaks data into packets and ensures reliable delivery while IP addresses and routes packets",
      "HTTPS uses SSL/TLS encryption to secure data transmission between browser and server",
      "A firewall monitors and controls network traffic based on security rules to block unauthorised access",
      "Encryption converts plaintext to ciphertext — symmetric uses one key, asymmetric uses a public-private key pair",
      "Malware types include viruses, worms, trojans, ransomware, spyware, adware, and keyloggers",
      "Phishing is a social engineering attack using fake communications to steal personal information",
      "Two-factor authentication combines two different verification types for stronger security",
    ],
    examTip:
      "Security is a high-frequency exam topic. Know the difference between each malware type and give examples. Understand how HTTPS encryption works conceptually. Be able to explain why 2FA is more secure than passwords alone. Identify phishing attempts from given examples.",
  },
  {
    id: "6",
    title: "Social Implications & Digital Citizenship",
    prompt:
      "Explain the social implications of ICT including legislation (POPI Act, ECT Act), the digital divide, e-waste, digital footprints, and responsible digital citizenship.",
    keyConcepts: [
      "The POPI Act regulates collection, storage, and processing of personal information with consent requirements",
      "The ECT Act governs electronic communications, e-commerce, digital signatures, and cybercrimes in South Africa",
      "The digital divide is the gap in ICT access between different socioeconomic and geographic groups",
      "E-waste contains hazardous materials and must be recycled responsibly through certified recyclers",
      "Digital footprints are either active (deliberately created) or passive (automatically collected)",
      "Copyright automatically protects original works while Creative Commons licences grant specific permissions",
      "Cyberbullying should be handled by saving evidence, blocking, reporting, and seeking adult help — never retaliating",
      "Digital citizenship involves responsible, ethical, legal, and safe use of technology",
    ],
    examTip:
      "Know the POPI Act principles and be able to apply them to scenarios (e.g. is a company compliant?). Understand the difference between active and passive digital footprints with examples. For e-waste questions, discuss both the environmental impact and proper disposal methods. Be ready to advise someone on how to handle cyberbullying.",
  },
];
