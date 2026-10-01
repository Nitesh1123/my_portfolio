import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { personal } from "@/data/cv";

// ALL social/profile links live here and only here
const PROFILES = [
  { label: "GitHub", href: personal.github, handle: "@Nitesh1123" },
  { label: "LinkedIn", href: personal.linkedin, handle: "nitesh-chandel" },
  { label: "LeetCode", href: personal.leetcode, handle: "nitesh_11" },
  { label: "HackerRank", href: personal.hackerrank, handle: "nitesh1123" },
  { label: "GeeksForGeeks", href: personal.gfg, handle: "knitesa5jr" },
];

export const ContactSection = () => (
  <section id="contact" className="py-32 md:py-48 relative">
    <div className="divider" />

    <div
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse, rgba(74,222,128,0.06) 0%, transparent 70%)" }}
    />

    <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 relative z-10">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
      >
        <h2
          className="display-text gradient-text-warm"
          style={{ fontSize: "clamp(2.4rem, 4vw, 3.8rem)", lineHeight: 1.05 }}
        >
          Let's talk
        </h2>
        <p className="mt-4 text-white/30 text-sm max-w-[42ch]">
          Open to full-time roles, internships, and project collabs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">

        {/* CTA email card */}
        <motion.div
          className="card-bezel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="card-inner p-8 h-full flex flex-col gap-5 relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 0% 0%, rgba(74,222,128,0.07), transparent 65%)" }}
            />
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[rgba(74,222,128,0.1)] flex items-center justify-center">
                <Mail size={15} className="text-[#4ADE80]" />
              </div>
              <div>
                <p className="mono text-[10px] text-white/25 uppercase tracking-wider">Email</p>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-white/70 text-sm hover:text-[#4ADE80] transition-colors"
                >
                  {personal.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center">
                <MapPin size={15} className="text-white/30" />
              </div>
              <div>
                <p className="mono text-[10px] text-white/25 uppercase tracking-wider">Location</p>
                <p className="text-white/55 text-sm">{personal.location}</p>
              </div>
            </div>

            <a
              href={`mailto:${personal.email}`}
              className="btn-primary w-fit mt-auto"
            >
              Send a message
              <span className="btn-icon-circle"><ArrowRight size={13} /></span>
            </a>
          </div>
        </motion.div>

        {/* All profile links — consolidated here only */}
        <motion.div
          className="card-bezel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card-inner p-6 h-full flex flex-col gap-1">
            <p className="mono text-[10px] text-white/25 uppercase tracking-wider mb-4">Profiles</p>
            {PROFILES.map(({ label, href, handle }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-3 border-b border-white/5 last:border-0 hover:px-2 transition-all duration-300"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: i === 0 ? "#4ADE80" : i === 1 ? "#38BDF8" : i === 2 ? "#F97316" : i === 3 ? "#4ADE80" : "#A855F7" }}
                  />
                  <span className="text-white/60 text-sm group-hover:text-white transition-colors">{label}</span>
                </div>
                <span className="mono text-[11px] text-white/25 group-hover:text-[#4ADE80] transition-colors">{handle}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
