import { motion } from "framer-motion";
import { ShoppingCart, Bot, HardDrive, Github, ExternalLink } from "lucide-react";
import { FadeInLeft } from "@/components/animations/MotionWrapper";
import { AnimatedCard } from "@/components/animations/AnimatedCard";

const projects = [
  {
    icon: ShoppingCart,
    title: "AI-Powered E-commerce",
    description:
      "A full-stack fashion e-commerce platform featuring personalized product recommendations powered by TensorFlow and Python. Built with MERN stack for scalable backend architecture and seamless user experience.",
    technologies: ["Python", "TensorFlow", "MERN", "ML"],
    github: "#",
    demo: "#",
  },
  {
    icon: Bot,
    title: "Butler / Sarcastic Chatbot",
    description:
      "An intelligent chatbot with a witty personality built using Google's Gemini API. Developed with TypeScript for type safety and modern JavaScript practices, delivering humorous and engaging conversational experiences.",
    technologies: ["TypeScript", "Gemini API", "AI", "Node.js"],
    github: "#",
    demo: "#",
  },
  {
    icon: HardDrive,
    title: "Disk Scheduling Simulator",
    description:
      "An interactive web-based simulator for visualizing operating system disk scheduling algorithms including FCFS, SCAN, C-SCAN, and more. Features real-time algorithm visualization and performance metrics.",
    technologies: ["JavaScript", "HTML/CSS", "Algorithms"],
    github: "#",
    demo: "#",
  },
];

export const ProjectsSection = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedCard
              key={project.title}
              index={index}
              hoverEffect="glow"
              className="glass rounded-2xl p-6 card-hover group"
            >
              {/* Icon */}
              <motion.div
                className="text-primary text-4xl mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <project.icon size={40} />
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
                  className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  href={project.demo}
                  className="w-10 h-10 rounded-full bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
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
