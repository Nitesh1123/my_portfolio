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
      "Cut message delivery latency by 70% with Socket.IO and Redis pub/sub",
      "Event-driven Kafka pipeline handling 1,000+ messages/min with zero message loss",
      "Improved system performance by 60% by decoupling database writes through an async Kafka consumer with Prisma",
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
    stack: ["Python", "LangChain", "FAISS", "Streamlit"],
    code: "https://github.com/Nitesh1123/equity-research-tool",
    live: "https://equity-research-tool-7kkour4wxz3wuccdakcuhi.streamlit.app/",
  },
  {
    title: "Intrusion Detection System",
    year: 2025,
    summary: "Classifying network traffic with machine learning",
    description:
      "Classifies network traffic anomalies on the 41-feature NSL-KDD benchmark dataset, from exploratory analysis through to a deployed web app.",
    points: [
      "Random Forest with balanced class weights: 99.76% validation accuracy",
      "EDA with correlation heatmaps, class distributions and statistical t-tests",
      "Streamlit app for batch CSV prediction, single-record inference and metrics",
    ],
    stack: ["Python", "scikit-learn", "Pandas", "NumPy", "Streamlit"],
    code: "https://github.com/Nitesh1123/Enhancing-Intrusion-Detection-Systems-Project",
  },
];

export const stack = [
  { label: "Languages", items: "Python, JavaScript, TypeScript, Java" },
  { label: "Backend", items: "Node.js, Express, Socket.IO, Kafka, Redis" },
  { label: "Data & ML", items: "Pandas, NumPy, scikit-learn, LangChain, Streamlit" },
  { label: "Databases", items: "PostgreSQL, MongoDB, Prisma" },
  { label: "Tools", items: "Git, VS Code, Excel, Power BI" },
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
