import { motion } from "framer-motion";
import { ExternalLink, GraduationCap, Award } from "lucide-react";
import { education, certifications, training } from "@/data/cv";

export const EducationSection = () => (
  <section id="education" className="py-32 relative">
    <div className="divider mb-0" />
    <div className="max-w-7xl mx-auto px-4 md:px-8">

      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading gradient-text-warm">Education &amp; Credentials</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Education */}
        <div>
          <h3 className="text-xs mono uppercase tracking-[0.2em] text-white/30 mb-8 flex items-center gap-2">
            <GraduationCap size={14} className="text-[#4ADE80]" />
            Education
          </h3>

          <div className="flex flex-col gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution + edu.degree}
                className="card-bezel"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={`card-inner p-6 relative overflow-hidden ${edu.current ? "border-[#4ADE80]/20" : ""}`}>
                  {edu.current && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ADE80] opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4ADE80]" />
                      </span>
                      <span className="text-[10px] text-[#4ADE80] mono">Current</span>
                    </div>
                  )}
                  <p className="text-white/30 text-xs mono mb-1">{edu.period}</p>
                  <h4 className="text-white/90 font-bold text-base mb-0.5">{edu.institution}</h4>
                  <p className="text-white/45 text-sm mb-3">{edu.degree}</p>
                  <div className="flex items-center gap-2">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold mono"
                      style={{ background: "rgba(74,222,128,0.1)", color: "#4ADE80", border: "1px solid rgba(74,222,128,0.2)" }}
                    >
                      {edu.grade}
                    </span>
                    <span className="text-white/25 text-xs">{edu.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Certifications */}
        <div>
          <h3 className="text-xs mono uppercase tracking-[0.2em] text-white/30 mb-8 flex items-center gap-2">
            <Award size={14} className="text-[#38BDF8]" />
            Certifications
          </h3>

          <div className="flex flex-col gap-3">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-bezel group cursor-pointer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="card-inner p-5 flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-white/80 text-sm font-semibold truncate">{cert.name}</p>
                    <p className="text-white/35 text-xs mt-0.5 mono">{cert.issuer} · {cert.period}</p>
                    {cert.details && (
                      <p className="text-white/25 text-[11px] mt-1 leading-relaxed">{cert.details}</p>
                    )}
                  </div>
                  <ExternalLink
                    size={14}
                    className="flex-shrink-0 text-white/25 group-hover:text-[#38BDF8] transition-colors mt-0.5"
                  />
                </div>
              </motion.a>
            ))}

            {/* Training entry */}
            <motion.div
              className="card-bezel"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: certifications.length * 0.1 }}
            >
              <div className="card-inner p-5 border-[#4ADE80]/10">
                <p className="text-[#4ADE80] text-[11px] mono uppercase tracking-wider mb-1">Training</p>
                <p className="text-white/80 text-sm font-semibold">{training.role}</p>
                <p className="text-white/35 text-xs mono">{training.institution} · {training.period}</p>
                <p className="text-white/30 text-[11px] mt-1 leading-relaxed">{training.description}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
