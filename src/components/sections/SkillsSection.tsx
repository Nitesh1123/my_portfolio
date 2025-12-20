import { motion } from "framer-motion";
import { Code2, Brain, BarChart3, Globe } from "lucide-react";
import { FadeInLeft } from "@/components/animations/MotionWrapper";
import { AnimatedCard } from "@/components/animations/AnimatedCard";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    skills: ["TensorFlow", "ML Algorithms", "Neural Networks"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    skills: ["Power BI", "Data Visualization", "Data Analysis"],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    skills: ["React", "Node.js", "MongoDB", "Express"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, hsl(0 0% 10% / 0.3) 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FadeInLeft>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="section-number">03.</span>
            Skills & Technologies
          </h2>
        </FadeInLeft>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedCard
              key={category.title}
              index={index}
              hoverEffect="lift"
              className="glass rounded-2xl p-6 skill-card-hover"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="text-secondary" size={24} />
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-3 px-3 py-2 rounded-xl bg-muted/30 border border-border/30 transition-all hover:bg-primary/10 hover:border-primary/30 hover:translate-x-1"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 + 0.3 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground font-medium text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
