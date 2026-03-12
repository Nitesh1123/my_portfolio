import { motion } from "framer-motion";
import { Github, ExternalLink, ShieldAlert, MessageSquare } from "lucide-react";
import { FadeInLeft } from "@/components/animations/MotionWrapper";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { LiveDemoWidget } from "@/components/animations/LiveDemoWidget";
import { AnimatedBadge } from "@/components/animations/AnimatedBadge";
import { MiniBarChart } from "@/components/animations/MiniBarChart";

const projects = [
  {
    iconComponent: (
      <div className="p-3 bg-primary/10 rounded-2xl w-fit drop-shadow-[0_0_15px_hsl(var(--primary)_/_0.3)]">
        <ShieldAlert size={36} className="text-primary" />
      </div>
    ),
    title: "Intrusion Detection System",
    description:
      "A machine learning-based IDS using Random Forest to classify network traffic as normal or anomalous, trained on the NSL-KDD dataset. Features data preprocessing, EDA, and a Streamlit web app for interactive predictions.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "Streamlit", "Matplotlib"],
    github: "https://github.com/Nitesh1123/Enhancing-Intrusion-Detection-Systems-Project",
    demo: "#",
    badgeComponent: <AnimatedBadge targetNumber={99.76} suffix="% Accuracy" />,
  },
  {
    iconComponent: (
      <div className="p-3 bg-accent/10 rounded-2xl w-fit drop-shadow-[0_0_15px_hsl(var(--accent)_/_0.3)]">
        <MessageSquare size={36} className="text-accent" />
      </div>
    ),
    title: "Real-Time Chat Application",
    description:
      "A secure real-time chat app with user authentication, role-based access, one-to-one and group messaging via WebSockets, with online status, typing indicators, and message timestamps.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "WebSockets"],
    github: "https://github.com/Nitesh1123/ChatApplication",
    demo: "#",
  },
  {
    iconComponent: <MiniBarChart />,
    title: "Disk Scheduling Simulator",
    description:
      "An interactive web-based simulator for visualizing operating system disk scheduling algorithms including FCFS, SCAN, C-SCAN, and more. Features real-time algorithm visualization and performance metrics.",
    technologies: ["JavaScript", "HTML/CSS", "Algorithms"],
    github: "https://github.com/rai-kriti/OS",
    demo: "https://rai-kriti.github.io/OS/",
  },
];

export const ProjectsSection = () => {
  const handleGithubClick = (githubUrl: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (githubUrl && githubUrl !== "#") {
      window.open(githubUrl, "_blank");
    }
  };

  const handleDemoClick = (demoUrl: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (demoUrl && demoUrl !== "#") {
      window.open(demoUrl, "_blank");
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, hsl(0 0% 10% / 0.3) 0%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FadeInLeft>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="section-number">02.</span>
            Featured Projects
          </h2>
        </FadeInLeft>

        {/* Live Demo Widget */}
        <LiveDemoWidget />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedCard
              key={project.title}
              index={index}
              hoverEffect="glow"
              className="glass rounded-2xl p-6 card-hover group relative"
            >
              {/* Badge */}
              {(project as any).badge && (
                <div className="absolute top-6 right-6 bg-primary/10 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-bold drop-shadow-[0_0_10px_hsl(var(--primary)_/_0.5)] z-20">
                  {(project as any).badge}
                </div>
              )}
              {(project as any).badgeComponent && (
                <div className="absolute top-6 right-6 z-20">
                  {(project as any).badgeComponent}
                </div>
              )}

              {/* Icon / Visualization */}
              <motion.div
                className="mb-8"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {project.iconComponent}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-4">{project.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <motion.a
                  href={project.github}
                  onClick={(e) => handleGithubClick(project.github, e)}
                  className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-pointer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  href={project.demo}
                  onClick={(e) => handleDemoClick(project.demo, e)}
                  className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-pointer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={18} />
                </motion.a>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
