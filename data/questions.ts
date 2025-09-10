export interface Question {
  id: number;
  question: string;
  correctAnswer: string;
  hint: string;
  explanation: string;
}

export const questions: Question[] = [
  // --- JavaScript ---
  {
    id: 1,
    question: "What will `typeof null` return in JavaScript?",
    correctAnswer: "object",
    hint: "It’s a historical bug in JavaScript.",
    explanation: "`typeof null` returns 'object' due to legacy reasons."
  },
  {
    id: 2,
    question: "What’s the difference between `==` and `===` in JavaScript?",
    correctAnswer: "== checks value, === checks value and type",
    hint: "One is loose, one is strict.",
    explanation: "`==` performs type coercion, while `===` does not."
  },
  {
    id: 3,
    question: "What’s the output of `console.log([...'hello'].length)`?",
    correctAnswer: "5",
    hint: "Spread turns a string into characters.",
    explanation: "`...'hello'` → ['h','e','l','l','o'], length is 5."
  },
  {
    id: 4,
    question: "Which array method removes the last element?",
    correctAnswer: "pop",
    hint: "It mutates the original array.",
    explanation: "`pop()` removes and returns the last element of an array."
  },
  {
    id: 5,
    question: "What is the default value of `this` in strict mode?",
    correctAnswer: "undefined",
    hint: "It’s not `window` anymore.",
    explanation: "In strict mode, functions called without context have `this = undefined`."
  },

  // --- React ---
  {
    id: 6,
    question: "Which hook replaces lifecycle methods like componentDidMount?",
    correctAnswer: "useEffect",
    hint: "Runs after render.",
    explanation: "`useEffect` allows side effects, like fetching or subscriptions."
  },
  {
    id: 7,
    question: "What’s the purpose of `useState` in React?",
    correctAnswer: "To add state to functional components",
    hint: "It returns a value and a setter.",
    explanation: "`useState` manages state variables in functional components."
  },
  {
    id: 8,
    question: "What does lifting state up mean in React?",
    correctAnswer: "Moving state to a common parent component",
    hint: "It’s about sharing data between children.",
    explanation: "When multiple children need access to the same state, move it up to their parent."
  },
  {
    id: 9,
    question: "What’s the purpose of React’s `key` prop?",
    correctAnswer: "Helps React identify list items",
    hint: "Used in rendering lists.",
    explanation: "`key` gives each list item a stable identity, improving diffing performance."
  },
  {
    id: 10,
    question: "What does React use under the hood to efficiently update the UI?",
    correctAnswer: "Virtual DOM",
    hint: "It’s not the real DOM.",
    explanation: "React maintains a lightweight Virtual DOM to optimize rendering."
  },

  // --- HTML/CSS ---
  {
    id: 11,
    question: "What does HTML stand for?",
    correctAnswer: "HyperText Markup Language",
    hint: "It’s not a programming language.",
    explanation: "HTML is the standard markup for web pages."
  },
  {
    id: 12,
    question: "What does CSS stand for?",
    correctAnswer: "Cascading Style Sheets",
    hint: "Used for styling web pages.",
    explanation: "CSS styles HTML elements."
  },
  {
    id: 13,
    question: "What’s the difference between inline, inline-block, and block?",
    correctAnswer: "Inline doesn’t break, block takes full width, inline-block mixes both",
    hint: "Think flow and width.",
    explanation: "`inline` flows with text, `block` spans full width, `inline-block` acts inline but allows block properties."
  },
  {
    id: 14,
    question: "What’s the difference between relative, absolute, and fixed positioning in CSS?",
    correctAnswer: "Relative to itself, absolute to parent, fixed to viewport",
    hint: "It’s about reference points.",
    explanation: "`relative` moves relative to itself, `absolute` relative to nearest positioned parent, `fixed` relative to viewport."
  },
  {
    id: 15,
    question: "Which CSS property controls text size?",
    correctAnswer: "font-size",
    hint: "Not font-weight.",
    explanation: "`font-size` sets the size of text."
  },

  // --- Computer Science Fundamentals ---
  {
    id: 16,
    question: "What is the time complexity of binary search?",
    correctAnswer: "O(log n)",
    hint: "Halves search space each step.",
    explanation: "Binary search runs in logarithmic time."
  },
  {
    id: 17,
    question: "What data structure uses FIFO order?",
    correctAnswer: "Queue",
    hint: "First In, First Out.",
    explanation: "Queues process items in FIFO order."
  },
  {
    id: 18,
    question: "What data structure uses LIFO order?",
    correctAnswer: "Stack",
    hint: "Think of a pile of plates.",
    explanation: "Stacks process items in LIFO order."
  },
  {
    id: 19,
    question: "Which sorting algorithm has average O(n log n) time?",
    correctAnswer: "Merge sort",
    hint: "Divide and conquer.",
    explanation: "Merge sort consistently runs in O(n log n)."
  },
  {
    id: 20,
    question: "What’s Big-O notation used for?",
    correctAnswer: "To describe algorithm complexity",
    hint: "Growth rate measure.",
    explanation: "Big-O expresses upper bound of runtime complexity."
  },

  // --- APIs & Networking ---
  {
    id: 21,
    question: "What does REST stand for?",
    correctAnswer: "Representational State Transfer",
    hint: "It’s an API style.",
    explanation: "REST is an architectural style for APIs."
  },
  {
    id: 22,
    question: "What does CRUD stand for?",
    correctAnswer: "Create, Read, Update, Delete",
    hint: "Database actions.",
    explanation: "CRUD represents basic database operations."
  },
  {
    id: 23,
    question: "Which HTTP method is used to update a resource?",
    correctAnswer: "PUT",
    hint: "There’s also PATCH.",
    explanation: "`PUT` replaces a resource, `PATCH` partially updates it."
  },
  {
    id: 24,
    question: "What does HTTP status 500 mean?",
    correctAnswer: "Internal Server Error",
    hint: "It’s the server’s fault.",
    explanation: "500 means a generic server error occurred."
  },
  {
    id: 25,
    question: "Which protocol does the web primarily use?",
    correctAnswer: "HTTP",
    hint: "Now often with S.",
    explanation: "HTTP (or HTTPS) is the primary web protocol."
  },

  // --- Databases ---
  {
    id: 26,
    question: "What does SQL stand for?",
    correctAnswer: "Structured Query Language",
    hint: "Used for databases.",
    explanation: "SQL is a language to manage relational databases."
  },
  {
    id: 27,
    question: "What’s the difference between SQL and NoSQL?",
    correctAnswer: "SQL is relational, NoSQL is non-relational",
    hint: "One uses tables, the other doesn’t.",
    explanation: "SQL uses structured tables, NoSQL uses flexible storage models."
  },
  {
    id: 28,
    question: "What SQL keyword is used to remove duplicates?",
    correctAnswer: "DISTINCT",
    hint: "Think unique.",
    explanation: "`DISTINCT` filters unique rows in SQL."
  },
  {
    id: 29,
    question: "Which SQL command retrieves data?",
    correctAnswer: "SELECT",
    hint: "It starts most queries.",
    explanation: "`SELECT` fetches data from a database."
  },
  {
    id: 30,
    question: "What does ACID stand for in databases?",
    correctAnswer: "Atomicity, Consistency, Isolation, Durability",
    hint: "Transaction properties.",
    explanation: "ACID ensures reliable transactions."
  },

  // --- Security ---
  {
    id: 31,
    question: "What does XSS stand for?",
    correctAnswer: "Cross-Site Scripting",
    hint: "Injecting scripts.",
    explanation: "XSS is a common web vulnerability."
  },
  {
    id: 32,
    question: "What does CSRF stand for?",
    correctAnswer: "Cross-Site Request Forgery",
    hint: "Unauthorized request trick.",
    explanation: "CSRF tricks users into making unwanted requests."
  },
  {
    id: 33,
    question: "What’s the difference between hashing and encryption?",
    correctAnswer: "Hashing is one-way, encryption is reversible",
    hint: "Passwords use one of them.",
    explanation: "Hashing produces irreversible values, encryption can be decrypted."
  },
  {
    id: 34,
    question: "What’s the most common hashing algorithm for passwords?",
    correctAnswer: "bcrypt",
    hint: "Stronger than MD5 or SHA1.",
    explanation: "bcrypt is widely used for secure password hashing."
  },
  {
    id: 35,
    question: "What does HTTPS stand for?",
    correctAnswer: "HyperText Transfer Protocol Secure",
    hint: "It uses TLS.",
    explanation: "HTTPS is the secure version of HTTP."
  },

  // --- Git & DevOps ---
  {
    id: 36,
    question: "What command initializes a Git repo?",
    correctAnswer: "git init",
    hint: "First command.",
    explanation: "`git init` creates a new Git repository."
  },
  {
    id: 37,
    question: "What command shows commit history?",
    correctAnswer: "git log",
    hint: "It lists commits.",
    explanation: "`git log` displays the commit history."
  },
  {
    id: 38,
    question: "What does CI/CD stand for?",
    correctAnswer: "Continuous Integration, Continuous Deployment",
    hint: "Automation pipeline.",
    explanation: "CI/CD automates testing and deployment."
  },
  {
    id: 39,
    question: "Which file tells Git which files to ignore?",
    correctAnswer: ".gitignore",
    hint: "Starts with a dot.",
    explanation: "`.gitignore` lists untracked files to ignore."
  },
  {
    id: 40,
    question: "What’s the default branch name in Git (new versions)?",
    correctAnswer: "main",
    hint: "Used to be master.",
    explanation: "GitHub and Git now default to `main` branch."
  },

  // --- Misc / General Tech ---
  {
    id: 41,
    question: "What does JSON stand for?",
    correctAnswer: "JavaScript Object Notation",
    hint: "Data format.",
    explanation: "JSON is a lightweight data format."
  },
  {
    id: 42,
    question: "What’s the difference between frontend and backend?",
    correctAnswer: "Frontend is client-side, backend is server-side",
    hint: "Think UI vs logic.",
    explanation: "Frontend handles UI, backend handles data & logic."
  },
  {
    id: 43,
    question: "What does OOP stand for?",
    correctAnswer: "Object-Oriented Programming",
    hint: "Classes & objects.",
    explanation: "OOP organizes code into objects with properties & methods."
  },
  {
    id: 44,
    question: "What is an API key used for?",
    correctAnswer: "Authentication and authorization",
    hint: "Controls API access.",
    explanation: "API keys identify and authenticate API consumers."
  },
  {
    id: 45,
    question: "What does DNS stand for?",
    correctAnswer: "Domain Name System",
    hint: "Phonebook of the web.",
    explanation: "DNS translates domain names to IP addresses."
  },
  {
    id: 46,
    question: "What does IP stand for?",
    correctAnswer: "Internet Protocol",
    hint: "Every device has one.",
    explanation: "IP uniquely identifies devices on a network."
  },
  {
    id: 47,
    question: "What’s the difference between TCP and UDP?",
    correctAnswer: "TCP is reliable, UDP is faster",
    hint: "Streaming uses one.",
    explanation: "TCP guarantees delivery, UDP trades reliability for speed."
  },
  {
    id: 48,
    question: "What’s the output of `Boolean('false')` in JavaScript?",
    correctAnswer: "true",
    hint: "Non-empty strings are truthy.",
    explanation: "Any non-empty string is `true` when converted to Boolean."
  },
  {
    id: 49,
    question: "What is the default port for HTTP?",
    correctAnswer: "80",
    hint: "HTTPS uses 443.",
    explanation: "HTTP uses port 80, HTTPS uses port 443."
  },
  {
    id: 50,
    question: "What’s the default port for MySQL?",
    correctAnswer: "3306",
    hint: "It’s not 5432.",
    explanation: "MySQL listens on port 3306 by default."
  }
];
