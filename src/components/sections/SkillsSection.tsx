import { motion } from "framer-motion";
import { Code2, Brain, BarChart3, Globe } from "lucide-react";
import { FadeInLeft } from "@/components/animations/MotionWrapper";
import { AnimatedCard } from "@/components/animations/AnimatedCard";
import { SkillRing } from "@/components/animations/SkillRing";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages & Core",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "SQL", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
    ],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    skills: [
      { name: "TensorFlow/Keras", level: "Advanced" },
      { name: "ML Algorithms", level: "Advanced" },
      { name: "Neural Networks", level: "Intermediate" },
      { name: "Data Preprocessing", level: "Advanced" },
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    skills: [
      { name: "Pandas/NumPy", level: "Advanced" },
      { name: "Data Visualization", level: "Advanced" },
      { name: "Statistical Analysis", level: "Intermediate" },
      { name: "Power BI", level: "Intermediate" },
    ],
  },
  {
    icon: Globe,
    title: "Web & Backend",
    skills: [
      { name: "React", level: "Intermediate" },
      { name: "Node.js/Express", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "REST APIs", level: "Intermediate" },
    ],
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
                {category.skills.map((skill, skillIndex) => {
                  const skillItem = typeof skill === "string" ? { name: skill, level: "Intermediate" } : skill;
                  
                  let levelColor = "hsl(var(--accent))"; // #A855F7
                  let percentage = 40;
                  
                  if (skillItem.level === "Expert") {
                    levelColor = "hsl(var(--primary))"; // #4ADE80
                    percentage = 90;
                  } else if (skillItem.level === "Advanced") {
                    levelColor = "hsl(var(--primary))"; // Advanced acts like Expert/High-tier
                    percentage = 80;
                  } else if (skillItem.level === "Intermediate") {
                    levelColor = "hsl(var(--secondary))"; // #38BDF8
                    percentage = 65;
                  }

                  return (
                    <motion.div
                      key={skillItem.name}
                      className="flex items-center justify-between px-3 py-2 rounded-xl bg-muted/30 border border-border/30 transition-all hover:bg-primary/10 hover:border-primary/30"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 + 0.3 }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-muted-foreground font-medium text-sm">{skillItem.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-muted-foreground/50">{skillItem.level}</span>
                        <SkillRing percentage={percentage} color={levelColor} size={28} strokeWidth={3} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
