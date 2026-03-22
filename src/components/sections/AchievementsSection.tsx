import { motion } from "framer-motion";
import { Code2, Star } from "lucide-react";
import { FadeInLeft, FadeInUp } from "@/components/animations/MotionWrapper";

const achievements = [
  {
    icon: <Code2 size={24} className="text-primary" />,
    iconBg: "bg-primary/10",
    title: "100+ Problems Solved",
    value: "100+",
    description: "on LeetCode, HackerRank, and GeeksforGeeks.",
    glowColor: "hsl(var(--primary))",
  },
  {
    icon: <Star size={24} className="text-[#F59E0B]" />,
    iconBg: "bg-[#F59E0B]/10",
    title: "4-Star Java Rating",
    value: "4 Star",
    description: "on HackerRank.",
    glowColor: "var(--color-yellow-500)",
  },
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, hsl(0 0% 10% / 0.3) 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-5xl">
        <FadeInLeft>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="section-number">03.5</span>
            Achievements
          </h2>
        </FadeInLeft>

        <div className="flex flex-col gap-6">
          {achievements.map((item, index) => (
            <FadeInUp key={item.title} delay={0.1 * index}>
              <motion.div
                className="glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative group overflow-hidden border border-border/50"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Hover Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: item.glowColor }}
                />

                <div className="flex items-center gap-6">
                  {/* Icon Container */}
                  <div className={`p-4 rounded-2xl shrink-0 ${item.iconBg}`}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Value/Badge */}
                <div className="mt-4 md:mt-0 md:ml-auto">
                  <span className="text-2xl font-bold text-foreground font-mono tracking-tight bg-background/50 px-4 py-2 rounded-xl border border-border/50 inline-block">
                    {item.value}
                  </span>
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};
