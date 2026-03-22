import { motion } from "framer-motion";
import { Code2, Star, ExternalLink } from "lucide-react";
import { FadeInLeft, FadeInUp } from "@/components/animations/MotionWrapper";

const achievements = [
  {
    icon: <Code2 size={24} className="text-[#F97316]" />,
    iconBg: "bg-[#F97316]/10",
    title: "LeetCode",
    value: "100+ Problems Solved",
    description: "Consistent problem solving practice.",
    glowColor: "#F97316",
    link: "https://leetcode.com/u/nitesh_11/",
    linkText: "View Profile",
  },
  {
    icon: <Star size={24} className="text-[#4ADE80]" />,
    iconBg: "bg-[#4ADE80]/10",
    title: "HackerRank",
    value: "4-Star Java Rating",
    description: "Achieved persistent 4-star rating in Java problem solving.",
    glowColor: "#4ADE80",
    link: "https://www.hackerrank.com/profile/nitesh1123",
    linkText: "View Profile",
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

                {/* Value/Badge or Link Button */}
                <div className="mt-4 md:mt-0 md:ml-auto flex flex-col items-start md:items-end gap-3">
                  <span className="text-lg font-bold text-foreground font-mono tracking-tight">
                    {item.value}
                  </span>
                  {item.link && (
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm font-semibold rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.linkText}
                      <ExternalLink size={14} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
};
