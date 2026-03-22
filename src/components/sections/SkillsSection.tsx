import { motion } from "framer-motion";
import {
  FileCode,
  Braces,
  Coffee,
  Cpu,
  Atom,
  Server,
  Palette,
  Layout,
  FlaskConical,
  Code,
  Table,
  BrainCircuit,
  BarChart3,
  AppWindow,
  Search,
  Bot,
  GitBranch,
  Database,
  Server as MongoIcon,
  PieChart,
  Code2,
  FileSpreadsheet,
} from "lucide-react";
import { FadeInLeft } from "@/components/animations/MotionWrapper";

// 3 out of 5 = 3 filled, 2 empty
// 2 out of 5 = 2 filled, 3 empty
// 4 out of 5 = 4 filled, 1 empty

const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "Python", rating: 3, icon: FileCode },
      { name: "JavaScript", rating: 3, icon: Braces },
      { name: "Java", rating: 3, icon: Coffee },
      { name: "C/C++", rating: 2, icon: Cpu },
    ],
  },
  {
    category: "Web & Frameworks",
    skills: [
      { name: "React.js", rating: 3, icon: Atom },
      { name: "Node.js", rating: 2, icon: Server },
      { name: "Tailwind", rating: 3, icon: Palette },
      { name: "HTML/CSS", rating: 3, icon: Layout },
      { name: "Flask", rating: 2, icon: FlaskConical },
      { name: "PHP", rating: 2, icon: Code },
    ],
  },
  {
    category: "Data Science & ML",
    skills: [
      { name: "Pandas", rating: 3, icon: Table },
      { name: "Scikit-Learn", rating: 3, icon: BrainCircuit },
      { name: "Matplotlib", rating: 3, icon: BarChart3 },
      { name: "Streamlit", rating: 2, icon: AppWindow },
      { name: "EDA", rating: 3, icon: Search },
      { name: "ML Models", rating: 3, icon: Bot },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git/GitHub", rating: 3, icon: GitBranch },
      { name: "MySQL", rating: 3, icon: Database },
      { name: "MongoDB", rating: 2, icon: MongoIcon },
      { name: "Power BI", rating: 2, icon: PieChart },
      { name: "VS Code", rating: 4, icon: Code2 },
      { name: "Excel", rating: 2, icon: FileSpreadsheet },
    ],
  },
];

const DotRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-[3px]">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-[5px] h-[5px] rounded-full transition-all duration-300 ${
            i < rating
              ? "bg-[#4ADE80] shadow-[0_0_4px_rgba(74,222,128,0.8)]"
              : "bg-border/30"
          }`}
        />
      ))}
    </div>
  );
};

const SkillPill = ({
  skill,
  index,
  groupIndex,
}: {
  skill: (typeof skillGroups)[0]["skills"][0];
  index: number;
  groupIndex: number;
}) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: groupIndex * 0.1 + index * 0.03,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.05,
        borderColor: "rgba(74, 222, 128, 0.4)",
        boxShadow: "0 0 20px rgba(74, 222, 128, 0.15)",
      }}
      className="flex items-center gap-2 px-3 py-2 rounded-lg glass border border-border/20 bg-background/40 cursor-default"
    >
      <Icon size={14} className="text-[#4ADE80]/80" />
      <span className="text-xs font-medium text-foreground/90 whitespace-nowrap">
        {skill.name}
      </span>
      <DotRating rating={skill.rating} />
    </motion.div>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, hsl(0 0% 10% / 0.3) 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FadeInLeft>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="section-number">03.</span>
            Skills & Technologies
          </h2>
        </FadeInLeft>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.15, duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60 mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                  <SkillPill
                    key={skill.name}
                    skill={skill}
                    index={index}
                    groupIndex={groupIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-6 text-xs text-muted-foreground/50"
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-[2px]">
              <div className="w-[4px] h-[4px] rounded-full bg-[#4ADE80]" />
              <div className="w-[4px] h-[4px] rounded-full bg-[#4ADE80]" />
              <div className="w-[4px] h-[4px] rounded-full bg-[#4ADE80]" />
              <div className="w-[4px] h-[4px] rounded-full bg-border/30" />
              <div className="w-[4px] h-[4px] rounded-full bg-border/30" />
            </div>
            <span>Familiar</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-[2px]">
              <div className="w-[4px] h-[4px] rounded-full bg-[#4ADE80]" />
              <div className="w-[4px] h-[4px] rounded-full bg-[#4ADE80]" />
              <div className="w-[4px] h-[4px] rounded-full bg-[#4ADE80]" />
              <div className="w-[4px] h-[4px] rounded-full bg-[#4ADE80]" />
              <div className="w-[4px] h-[4px] rounded-full bg-border/30" />
            </div>
            <span>Proficient</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
