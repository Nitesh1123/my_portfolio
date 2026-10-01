// ============================================================
// CV DATA - Single source of truth - Nitesh Kumar Portfolio
// ============================================================

export const personal = {
  name: "Nitesh Kumar",
  tagline: "Full-Stack Developer building real-time systems & AI-powered tools",
  email: "knitesh1123@gmail.com",
  phone: "+91-7876413487",
  location: "Nalagarh, Himachal Pradesh, India",
  github: "https://github.com/Nitesh1123",
  linkedin: "https://www.linkedin.com/in/nitesh-chandel/",
  leetcode: "https://leetcode.com/u/nitesh_11/",
  hackerrank: "https://www.hackerrank.com/profile/nitesh1123",
  gfg: "https://www.geeksforgeeks.org/user/knitesa5jr/",
  resumeUrl: "/CV.pdf",
  openToOpportunities: true,
};

export const education = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech Computer Science & Engineering",
    grade: "CGPA: 8.19",
    period: "Aug 2023 - Present",
    location: "Phagwara, Punjab",
    current: true,
  },
  {
    institution: "Doon Valley Public School",
    degree: "Intermediate (12th Grade)",
    grade: "83.6%",
    period: "2022 - 2023",
    location: "Nalagarh, Himachal Pradesh",
    current: false,
  },
  {
    institution: "Doon Valley Public School",
    degree: "Matriculation (10th Grade)",
    grade: "78.6%",
    period: "2020 - 2021",
    location: "Nalagarh, Himachal Pradesh",
    current: false,
  },
];

export const certifications = [
  {
    name: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
    issuer: "Oracle",
    period: "Aug - Sep 2025",
    url: "https://drive.google.com/file/d/1ZmVdY_pEeg6Jiglz07B8CIhU3HXigEoa/view?usp=sharing",
  },
  {
    name: "Social Networks",
    issuer: "NPTEL",
    period: "Jul - Nov 2025",
    url: "https://drive.google.com/file/d/1K-ql5cmu_fDHi_w1z0ziSgWxR_-NXtX8/view?usp=drive_link",
  },
  {
    name: "Training in Machine Learning",
    issuer: "CipherSchools",
    period: "Jun - Jul 2025",
    details: "Regression, Decision Trees, Random Forest, SVM, K-Means, PCA, NLP, CNNs",
    url: "https://drive.google.com/file/d/1R_3JUlNB9x-YXQUk0oEiekiCbygCIGsd/view?usp=drive_link",
  },
  {
    name: "Generative AI",
    issuer: "NASSCOM / SFJ Skill Development Program",
    period: "Feb 2025",
    url: "https://drive.google.com/file/d/18bN-y8d3EqR8YE9H2sTFw24AFLXUiv6R/view?usp=sharing",
  },
];

export const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "Java"] },
  { category: "Frontend", items: ["React.js", "HTML / CSS", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express.js", "Socket.IO", "Kafka", "Redis"] },
  { category: "AI / ML", items: ["Pandas", "NumPy", "Scikit-learn", "LangChain", "FAISS", "Streamlit"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Prisma"] },
  { category: "Tools", items: ["Git / GitHub", "Power BI", "Excel"] },
];

export const projects = [
  {
    id: "swiftchat",
    title: "SwiftChat",
    subtitle: "Real-Time Messaging Platform",
    description:
      "Production-grade chat platform with Kafka message streaming, Redis pub/sub for presence, and Socket.IO WebSockets. Supports one-to-one and group chats, typing indicators, JWT auth, and online presence at scale.",
    technologies: ["React", "Node.js", "TypeScript", "Socket.IO", "Kafka", "Redis", "PostgreSQL", "Prisma"],
    github: "https://github.com/Nitesh1123/SwiftChat",
    demo: "https://swiftchat-app-nine.vercel.app/auth",
    highlight: "Kafka + Redis",
    accentColor: "#4ADE80",
  },
  {
    id: "equitybot",
    title: "EquityBot",
    subtitle: "AI Equity Research Tool",
    description:
      "LangChain-powered equity analysis assistant with FAISS vector search over financial documents. Enables natural-language Q&A on live stock data, extracting insights no traditional screener can surface.",
    technologies: ["Python", "LangChain", "FAISS", "Streamlit", "OpenAI API"],
    github: "https://github.com/Nitesh1123/equity-research-tool",
    demo: "https://equity-research-tool-7kkour4wxz3wuccdakcuhi.streamlit.app/",
    highlight: "LangChain + FAISS",
    accentColor: "#38BDF8",
  },
  {
    id: "ids",
    title: "Intrusion Detection System",
    subtitle: "ML-Powered Network Security",
    description:
      "Network intrusion detection model on the NSL-KDD benchmark dataset. Fine-tuned Random Forest classifier achieving 99.76% accuracy in classifying malicious vs. benign traffic, deployed via Streamlit.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
    github: "https://github.com/Nitesh1123/Enhancing-Intrusion-Detection-Systems-Project/tree/main/IDS%20PROJECT",
    demo: null,
    highlight: "99.76% Accuracy",
    accentColor: "#A855F7",
  },
];

export const achievements = [
  {
    platform: "LeetCode",
    value: "100+",
    label: "Problems Solved",
    link: "https://leetcode.com/u/nitesh_11/",
    color: "#F97316",
  },
  {
    platform: "HackerRank",
    value: "4-Star",
    label: "Java Rating",
    link: "https://www.hackerrank.com/profile/nitesh1123",
    color: "#4ADE80",
  },
  {
    platform: "GeeksforGeeks",
    value: "100+",
    label: "Problems Solved",
    link: "https://www.geeksforgeeks.org/user/knitesa5jr/",
    color: "#38BDF8",
  },
];

export const training = {
  institution: "CipherSchools",
  role: "Machine Learning Training",
  period: "Jun - Jul 2025",
  description:
    "Hands-on ML training: Regression, Decision Trees, Random Forest, SVM, K-Means Clustering, PCA, NLP, and CNNs.",
  certificateUrl: "https://drive.google.com/file/d/1R_3JUlNB9x-YXQUk0oEiekiCbygCIGsd/view?usp=drive_link",
};