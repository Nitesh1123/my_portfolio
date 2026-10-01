import { motion } from "framer-motion";
import { achievements } from "@/data/cv";

export const AchievementsSection = () => (
  <section id="achievements" className="py-32 relative">
    <div className="divider mb-0" />
    <div className="max-w-7xl mx-auto px-4 md:px-8">

      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-heading gradient-text-warm">Competitive Programming</h2>
        <p className="mt-3 text-white/35 text-sm mono">Consistent problem-solving across platforms</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          <motion.a
            key={item.platform}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-bezel group cursor-pointer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -4 }}
          >
            <div
              className="card-inner p-8 h-full flex flex-col gap-4 relative overflow-hidden"
              style={{ borderColor: `${item.color}18` }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 30% 30%, ${item.color}10, transparent 70%)` }}
              />

              {/* Platform */}
              <span
                className="text-xs font-bold mono uppercase tracking-[0.2em]"
                style={{ color: item.color }}
              >
                {item.platform}
              </span>

              {/* Value */}
              <div
                className="display-text text-6xl leading-none"
                style={{ color: item.color }}
              >
                {item.value}
              </div>

              {/* Label */}
              <p className="text-white/45 text-sm">{item.label}</p>

              {/* Arrow */}
              <div
                className="mt-auto w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: `${item.color}15`, color: item.color }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
