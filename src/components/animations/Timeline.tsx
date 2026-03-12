import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BrainCircuit, Code, Target } from "lucide-react";

const timelineData = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Started B.Tech CS at LPU. Mastered core Data Structures.",
    year: "2022",
  },
  {
    icon: BrainCircuit,
    title: "First ML Project",
    description: "Built and deployed an AI-powered prediction model.",
    year: "2023",
  },
  {
    icon: Code,
    title: "Key Skills Acquired",
    description: "Deepened expertise in Python, TensorFlow, and full-stack integration.",
    year: "2024",
  },
  {
    icon: Target,
    title: "Current Focus",
    description: "Solving real problems with scalable Data Science architectures.",
    year: "Present",
  },
];

export const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative pl-8 md:pl-0">
      {/* Background Line */}
      <div className="absolute left-8 md:left-[50%] top-0 bottom-0 w-[2px] bg-border/50 -translate-x-[1px]" />

      {/* Animated Glowing Line */}
      <motion.div
        className="absolute left-8 md:left-[50%] top-0 w-[2px] bg-primary -translate-x-[1px]"
        style={{ height: lineHeight, filter: "drop-shadow(0 0 8px hsl(var(--primary)))" }}
      />

      <div className="flex flex-col gap-12">
        {timelineData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={item.title} className="relative flex items-center md:justify-center">
              {/* Timeline Node */}
              <motion.div
                className="absolute left-8 md:left-[50%] w-4 h-4 rounded-full bg-background border-2 border-primary -translate-x-2 flex items-center justify-center z-10"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.2 }}
                style={{
                  boxShadow: "0 0 15px hsl(var(--primary) / 0.5)",
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  isEven ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12 md:text-left"
                }`}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className={`flex items-center gap-3 mb-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                  <span className="text-secondary font-mono text-sm">{item.year}</span>
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <item.icon size={18} />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
