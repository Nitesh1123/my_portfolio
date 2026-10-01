import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills } from "@/data/cv";

gsap.registerPlugin(ScrollTrigger);

// 6 groups, 3-col grid, grid-flow-dense
// Spans: [2,1, 1,2, 2,1] = perfectly fills 3 cols x 2 rows with no gaps
const SPANS = [
  "col-span-2",  // Languages — wide
  "col-span-1",  // Frontend
  "col-span-1",  // Backend — tall
  "col-span-2",  // AI / ML — wide
  "col-span-1",  // Databases
  "col-span-2",  // Tools — wide
];

const COLORS: Record<string, string> = {
  Languages: "#4ADE80",
  Frontend: "#38BDF8",
  Backend: "#F97316",
  "AI / ML": "#A855F7",
  Databases: "#FBBF24",
  Tools: "#6B7280",
};

export const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // GSAP: pin title left while skills grid scrolls — per gpt-taste scroll-pinning rule
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Scrubbing word-opacity reveal on skills pills
      const pills = gsap.utils.toArray<HTMLElement>(".skill-pill");
      gsap.fromTo(
        pills,
        { opacity: 0.1, y: 10 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          ease: "none",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-32 md:py-48 relative">
      <div className="divider" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20">
        <motion.h2
          ref={titleRef}
          className="display-text gradient-text-warm mb-14"
          style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)", lineHeight: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          Tech I use
        </motion.h2>

        {/* Gapless bento — grid-flow-dense guarantees zero empty cells */}
        <div
          ref={gridRef}
          className="grid grid-cols-3 grid-flow-dense gap-3"
        >
          {skills.map((group, i) => {
            const color = COLORS[group.category] ?? "#4ADE80";
            return (
              <div
                key={group.category}
                className={`${SPANS[i]} card-bezel group`}
              >
                <div
                  className="card-inner p-5 h-full relative overflow-hidden"
                  style={{ minHeight: "120px" }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${color}18, transparent 70%)`, filter: "blur(12px)" }}
                  />

                  {/* Category */}
                  <p
                    className="mono text-[10px] font-bold uppercase tracking-[0.2em] mb-3"
                    style={{ color }}
                  >
                    {group.category}
                  </p>

                  {/* Compact pill row */}
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="skill-pill px-2.5 py-1 rounded-md text-xs font-medium mono text-white/55"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
