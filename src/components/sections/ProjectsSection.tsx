import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/cv";

gsap.registerPlugin(ScrollTrigger);

export const ProjectsSection = () => {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !wrapRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;

        // Pin each card at viewport top
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cards[cards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });

        // Scale + fade as next card scrolls in — card stacking from gpt-taste
        gsap.to(card, {
          scale: 0.94,
          opacity: 0.45,
          yPercent: -3,
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="py-32 md:py-48 relative">
      <div className="divider" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 mb-16">
        <motion.h2
          className="display-text gradient-text-warm"
          style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)", lineHeight: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          Selected work
        </motion.h2>
        <p className="mt-4 text-white/30 text-sm mono max-w-[44ch]">
          Three projects shipped to production
        </p>
      </div>

      {/* Sticky stack */}
      <div ref={wrapRef} className="relative">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="project-card sticky top-0 min-h-[100dvh] flex items-center justify-center px-4 md:px-8 py-16"
            style={{
              zIndex: 10 + i,
              backgroundColor: "#060608",
            }}
          >
            {/* Per-card ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 55% 40% at 50% 55%, ${project.accentColor}0C 0%, transparent 70%)`,
              }}
            />

            <div className="relative z-10 w-full max-w-4xl">
              <div className="card-bezel">
                <div className="card-inner overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* Left: text panel */}
                    <div className="p-8 md:p-10 flex flex-col gap-6">

                      {/* Index + category */}
                      <div className="flex items-center gap-3">
                        <span className="mono text-[11px] text-white/25">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="mono text-[11px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full"
                          style={{ color: project.accentColor, background: `${project.accentColor}12`, border: `1px solid ${project.accentColor}28` }}
                        >
                          {project.subtitle}
                        </span>
                      </div>

                      <div>
                        <h3 className="display-text text-3xl md:text-4xl text-white leading-tight mb-3">
                          {project.title}
                        </h3>
                        <p className="text-white/45 text-sm leading-relaxed max-w-[38ch]">
                          {project.description}
                        </p>
                      </div>

                      {/* Tech pills — compact */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-3 mt-auto pt-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-ghost !text-xs !px-4 !py-2 !gap-2"
                        >
                          <Github size={13} />
                          Code
                        </a>
                        {project.demo ? (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary !text-xs !px-4 !py-2"
                            style={{ background: project.accentColor }}
                          >
                            Live
                            <span className="btn-icon-circle">
                              <ExternalLink size={11} />
                            </span>
                          </a>
                        ) : (
                          <span className="mono text-[11px] text-white/20">No live demo</span>
                        )}
                      </div>
                    </div>

                    {/* Right: visual panel with highlight stat */}
                    <div
                      className="hidden md:flex flex-col items-center justify-center p-10 relative"
                      style={{
                        background: `linear-gradient(135deg, ${project.accentColor}0A 0%, transparent 60%)`,
                        borderLeft: `1px solid ${project.accentColor}12`,
                      }}
                    >
                      {/* Highlight badge — the one real data point */}
                      <div
                        className="display-text text-center"
                        style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", color: project.accentColor, lineHeight: 1.1 }}
                      >
                        {project.highlight}
                      </div>
                      <p className="mono text-[11px] text-white/25 mt-3 uppercase tracking-[0.18em]">
                        {project.subtitle}
                      </p>

                      {/* Tech count */}
                      <div
                        className="mt-8 mono text-xs text-white/20 px-3 py-1.5 rounded-full"
                        style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        {project.technologies.length} technologies
                      </div>

                      {/* Ambient light */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: `radial-gradient(circle at 70% 30%, ${project.accentColor}10, transparent 60%)` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress dots */}
              <div className="flex justify-center gap-2 mt-5">
                {projects.map((_, j) => (
                  <div
                    key={j}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: j === i ? "20px" : "5px",
                      height: "5px",
                      background: j === i ? project.accentColor : "rgba(255,255,255,0.12)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
