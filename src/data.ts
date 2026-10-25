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
  description: string;
  points: string[];
  stack: string[];
  code: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "SwiftChat",
    year: 2026,
    summary: "Real-time chat application",
    description:
      "A real-time chat system split into three microservices (API, Socket and Consumer) so each part scales on its own. Messages flow through Kafka, and Redis pub/sub carries delivery and presence across socket servers.",
    points: [
      "Cut message delivery latency by ~70% with Socket.IO and Redis pub/sub",
      "Event-driven Kafka pipeline handling 1,000+ messages/min with zero message loss",
      "Improved system performance by ~60% by decoupling database writes through an async Kafka consumer with Prisma",
    ],
    stack: ["TypeScript", "React", "Express", "Socket.IO", "Kafka", "Redis", "PostgreSQL"],
    code: "https://github.com/Nitesh1123/SwiftChat",
    live: "https://swiftchat-app-nine.vercel.app",
  },
  {
    title: "EquityBot",
    year: 2026,
    summary: "AI research assistant",
    description:
      "A research tool that answers company- and sector-specific questions with cited sources, replacing hours of manual secondary research.",
    points: [
      "End-to-end retrieval pipeline with LangChain and FAISS for ingestion, indexing and semantic search",
      "Turns unstructured financial news into a searchable knowledge base",
      "Ingestion layer pulls and parses articles from news URLs and APIs to keep research current",
    ],
    stack: ["Python", "LangChain", "Google Gemini", "FAISS", "Streamlit"],
    code: "https://github.com/Nitesh1123/equity-research-tool",
    live: "https://equity-research-tool-7kkour4wxz3wuccdakcuhi.streamlit.app/",
  },
  {
    title: "Retail Sales Analytics",
    year: 2026,
    summary: "End-to-end pipeline and BI dashboard",
    description:
      "An ETL and analytics pipeline on a 9,994-row retail orders dataset: raw data is cleaned and enriched in Python, loaded into SQL Server, queried with T-SQL and presented in Power BI.",
    points: [
      "Engineered discount, sale-price and profit features, then modelled and loaded a SQL Server table with Pandas",
      "9 T-SQL queries using CTEs, ROW_NUMBER() and conditional aggregation for revenue, regional and YoY questions",
      "Power BI dashboards that turn sales and profitability trends into views for non-technical stakeholders",
    ],
    stack: ["Python", "Pandas", "SQL Server", "T-SQL", "Power BI", "DAX"],
    code: "https://github.com/Nitesh1123/Retail-Orders-Analysis-with-SQL-Python",
  },
];

export const stack = [
  { label: "Languages", items: "Python, JavaScript, TypeScript, SQL, Java" },
  { label: "Web & backend", items: "React, Node.js, Express, FastAPI, Socket.IO, Kafka" },
  { label: "Databases", items: "PostgreSQL, MySQL, MongoDB, Redis" },
  { label: "Tools", items: "Git, Docker, Prisma, LangChain, Power BI" },
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
