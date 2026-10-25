export const profile = {
  name: "Nitesh Kumar",
  role: "Software Engineer",
  location: "Punjab, India",
  timeZone: "Asia/Kolkata",
  email: "knitesh1123@gmail.com",
  resume: "/CV.pdf",
  links: {
    github: "https://github.com/Nitesh1123",
    linkedin: "https://www.linkedin.com/in/nitesh-chandel/",
    leetcode: "https://leetcode.com/u/nitesh_11/",
    hackerrank: "https://www.hackerrank.com/profile/nitesh1123",
    gfg: "https://www.geeksforgeeks.org/user/knitesa5jr/",
  },
};

export type Project = {
  title: string;
  year: number;
  summary: string;
  description?: string;
  points?: string[];
  stack: string[];
  code: string;
  live?: string;
};

export const featured: Project[] = [
  {
    title: "SwiftChat",
    year: 2026,
    summary: "Real-time messaging platform",
    description:
      "One-to-one and group chat built to scale horizontally: messages are streamed through Kafka so any API node can accept a write, and Redis pub/sub fans presence and typing events out to every connected socket.",
    points: [
      "Kafka message pipeline decouples delivery from persistence",
      "Redis pub/sub for presence and typing across instances",
      "JWT auth, PostgreSQL via Prisma",
    ],
    stack: ["TypeScript", "React", "Node.js", "Socket.IO", "Kafka", "Redis", "PostgreSQL"],
    code: "https://github.com/Nitesh1123/SwiftChat",
    live: "https://swiftchat-app-nine.vercel.app",
  },
  {
    title: "EquityBot",
    year: 2026,
    summary: "Research assistant for listed companies",
    description:
      "Enter a ticker and EquityBot pulls live market data and recent news from Yahoo Finance, indexes it with any articles you add, and answers questions in a chat. Every answer links back to the passages it was built from.",
    points: [
      "Retrieval over FAISS with source citations on every answer",
      "Follow-up questions resolved against conversation history",
      "Sites that block scraping are skipped and reported, not fatal",
    ],
    stack: ["Python", "LangChain", "FAISS", "OpenAI", "Streamlit"],
    code: "https://github.com/Nitesh1123/equity-research-tool",
    live: "https://equity-research-tool-7kkour4wxz3wuccdakcuhi.streamlit.app/",
  },
  {
    title: "Demand Forecasting & Inventory Optimization",
    year: 2026,
    summary: "Forecast daily sales, then allocate constrained stock",
    description:
      "Forecasts daily sales for every store-item series in the Kaggle demand dataset, then allocates limited supply across stores by solving a linear program over expected shortage.",
    points: [
      "Spark feature pipeline: calendar, holiday, lag and rolling features",
      "LightGBM vs a 364-day seasonal-naive baseline, tracked in MLflow",
      "Safety stock and reorder points; allocation solved with PuLP/CBC",
    ],
    stack: ["Python", "PySpark", "LightGBM", "MLflow", "PuLP"],
    code: "https://github.com/Nitesh1123/demand-forecasting-inventory-optimization",
  },
  {
    title: "Document Intelligence Service",
    year: 2026,
    summary: "Exam papers in, structured questions out",
    description:
      "Upload PDFs or images of exam material and get back machine-readable questions with options, type, source pages and confidence, matched against answer-key entries. Processing runs asynchronously behind a documented API.",
    points: [
      "FastAPI with OAuth2 password flow and JWT",
      "Celery workers on Redis for background extraction",
      "Gemini vision for per-page OCR and structured output",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Celery", "Redis", "Docker"],
    code: "https://github.com/Nitesh1123/sample",
  },
  {
    title: "Chatify",
    year: 2026,
    summary: "Full-stack chat with voice and video calls",
    description:
      "A complete chat product rather than a demo: custom JWT auth, image messages, deletions synced to both users, peer-to-peer voice and video calls, and rate limiting on the API.",
    points: [
      "Socket.IO messaging with presence and typing indicators",
      "PeerJS calls, Cloudinary uploads, Resend emails",
      "Arcjet rate limiting, Helmet headers, input validation",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Zustand"],
    code: "https://github.com/Nitesh1123/ChatApplication",
    live: "https://chat-application-six-sooty.vercel.app",
  },
  {
    title: "Intrusion Detection System",
    year: 2025,
    summary: "Classifying network traffic on NSL-KDD",
    description:
      "A Random Forest classifier that separates normal from malicious network traffic, with preprocessing, EDA and evaluation, served through a Streamlit app for interactive predictions.",
    points: ["99.76% accuracy on the NSL-KDD test split", "Feature encoding and scaling pipeline", "Streamlit front end with visualisations"],
    stack: ["Python", "scikit-learn", "Pandas", "Streamlit"],
    code: "https://github.com/Nitesh1123/Enhancing-Intrusion-Detection-Systems-Project",
  },
];

export const archive: Project[] = [
  {
    title: "Safe Habits Challenge",
    year: 2026,
    summary: "Timed, three-level quiz on behaviour-based safety",
    stack: ["JavaScript", "HTML", "CSS"],
    code: "https://github.com/Nitesh1123/safe-habits-quiz",
    live: "https://nitesh1123.github.io/safe-habits-quiz/",
  },
  {
    title: "Persona Insights",
    year: 2026,
    summary: "Big Five personality assessment site",
    stack: ["JavaScript", "HTML", "CSS"],
    code: "https://github.com/Nitesh1123/persona-insights",
  },
  {
    title: "Retail Orders Analytics",
    year: 2026,
    summary: "Pandas ETL into SQL Server, T-SQL analysis, Power BI dashboard",
    stack: ["Python", "SQL Server", "Power BI"],
    code: "https://github.com/Nitesh1123/Retail-Orders-Analysis-with-SQL-Python",
  },
  {
    title: "Shared Expenses",
    year: 2026,
    summary: "Traceable expense tracker for flatmates",
    stack: ["React", "Express", "Prisma", "PostgreSQL"],
    code: "https://github.com/Nitesh1123/shared-expenses",
  },
  {
    title: "Music Habits & Student Focus",
    year: 2025,
    summary: "Predicting focus and grades from survey data (n=500)",
    stack: ["Python", "scikit-learn", "Jupyter"],
    code: "https://github.com/Nitesh1123/ML_PROJECT",
  },
  {
    title: "E-commerce with Recommendations",
    year: 2025,
    summary: "Store API with a TF-IDF product recommender on the Olist dataset",
    stack: ["Node.js", "MongoDB", "Flask", "scikit-learn"],
    code: "https://github.com/Nitesh1123/ecommerce-project",
  },
  {
    title: "Public Speaking Trainer",
    year: 2025,
    summary: "Feedback on tone, clarity and pacing from the browser mic",
    stack: ["FastAPI", "JavaScript"],
    code: "https://github.com/Nitesh1123/Chatbot",
  },
  {
    title: "DEVdrive",
    year: 2024,
    summary: "Student hub with LeetCode leaderboard, exams and messaging",
    stack: ["Next.js", "MongoDB", "Socket.IO"],
    code: "https://github.com/Nitesh1123/DEVdrive",
  },
  {
    title: "Hospital Appointment Allocation",
    year: 2024,
    summary: "Hackathon prototype for doctor availability and booking",
    stack: ["HTML", "CSS"],
    code: "https://github.com/Nitesh1123/Hackathon",
  },
];

export const stack = [
  { label: "Languages", items: "TypeScript, JavaScript, Python, Java, SQL" },
  { label: "Backend", items: "Node.js, Express, FastAPI, Socket.IO, Kafka, Redis, Celery" },
  { label: "Data & ML", items: "Pandas, scikit-learn, LightGBM, PySpark, MLflow, LangChain, FAISS" },
  { label: "Frontend", items: "React, Next.js, Tailwind CSS" },
  { label: "Storage", items: "PostgreSQL, MongoDB, SQL Server, Prisma" },
  { label: "Tooling", items: "Git, Docker, Power BI" },
];

export const education = [
  { title: "B.Tech, Computer Science & Engineering", place: "Lovely Professional University", detail: "CGPA 8.19", period: "2023 – 2027" },
  { title: "Class XII", place: "Doon Valley Public School", detail: "83.6%", period: "2023" },
];

export const certifications = [
  {
    title: "OCI 2025 AI Foundations Associate",
    place: "Oracle",
    period: "2025",
    url: "https://drive.google.com/file/d/1ZmVdY_pEeg6Jiglz07B8CIhU3HXigEoa/view?usp=sharing",
  },
  {
    title: "Social Networks",
    place: "NPTEL",
    period: "2025",
    url: "https://drive.google.com/file/d/1K-ql5cmu_fDHi_w1z0ziSgWxR_-NXtX8/view?usp=drive_link",
  },
  {
    title: "Machine Learning Training",
    place: "CipherSchools",
    period: "2025",
    url: "https://drive.google.com/file/d/1R_3JUlNB9x-YXQUk0oEiekiCbygCIGsd/view?usp=drive_link",
  },
  {
    title: "Generative AI",
    place: "NASSCOM",
    period: "2025",
    url: "https://drive.google.com/file/d/18bN-y8d3EqR8YE9H2sTFw24AFLXUiv6R/view?usp=sharing",
  },
];

export const profiles = [
  { label: "LeetCode", detail: "100+ solved", url: profile.links.leetcode },
  { label: "HackerRank", detail: "4★ Java", url: profile.links.hackerrank },
  { label: "GeeksforGeeks", detail: "100+ solved", url: profile.links.gfg },
];
