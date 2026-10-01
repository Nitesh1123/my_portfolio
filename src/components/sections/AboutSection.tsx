import { motion } from "framer-motion";
import { personal } from "@/data/cv";

// Journey starts when Nitesh joined LPU — 2023
const TIMELINE = [
  { year: "Aug 2023", label: "Joined Lovely Professional University — B.Tech CSE begins" },
  { year: "2024", label: "Shipped SwiftChat — Kafka, Redis, Socket.IO in production" },
  { year: "Jun 2025", label: "CipherSchools ML Training — RF, SVM, PCA, NLP, CNNs" },
  { year: "Aug 2025", label: "Oracle OCI AI Foundations certified · NPTEL Social Networks" },
  { year: "Sep 2025", label: "Built EquityBot — LangChain + FAISS equity research tool" },
];

export const AboutSection = () => (
  <section id="about" className="py-32 md:py-48 relative">
    <div className="divider" />

    <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-start">

        {/* Left column */}
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <h2
              className="display-text gradient-text-warm mb-8"
              style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)", lineHeight: 1.05 }}
            >
              About me
            </h2>
            <p className="text-white/45 leading-relaxed mb-5 text-[15px]">
              Third-year CSE student at LPU (CGPA 8.19). I focus on two things:
              real-time backend systems and AI tooling — and I try to ship both
              to production, not just demos.
            </p>
            <p className="text-white/35 leading-relaxed text-[15px]">
              My stack is Node.js + Kafka + Redis on the backend,
              LangChain + Scikit-learn on the ML side, and React for the
              front. Clean code, working software.
            </p>

            <div className="mt-10 mono text-xs text-white/25 flex flex-col gap-2">
              <span>{personal.location}</span>
              <a href={`mailto:${personal.email}`} className="hover:text-[#4ADE80] transition-colors">
                {personal.email}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right column — timeline from 2023 only */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="mono text-[11px] uppercase tracking-[0.22em] text-white/25 mb-10">
              Since joining LPU
            </p>

            <div className="relative">
              {/* Vertical timeline line */}
              <div
                className="absolute left-[44px] top-2 bottom-0 w-px"
                style={{ background: "linear-gradient(180deg, rgba(74,222,128,0.5) 0%, rgba(56,189,248,0.12) 80%, transparent 100%)" }}
              />

              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  className="flex items-start gap-6 pb-10 last:pb-0"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
                >
                  {/* Year */}
                  <div className="flex-shrink-0 w-[88px] flex flex-col items-end gap-1.5 pt-[2px]">
                    <span className="mono text-[11px] font-semibold text-[#4ADE80]">{item.year}</span>
                    <div
                      className="w-2.5 h-2.5 rounded-full border-2 border-[#4ADE80] bg-background ml-auto"
                      style={{ boxShadow: "0 0 8px rgba(74,222,128,0.4)" }}
                    />
                  </div>

                  {/* Event label */}
                  <p className="text-white/55 text-[14px] leading-relaxed pt-0.5 flex-1">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
