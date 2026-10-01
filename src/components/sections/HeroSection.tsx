import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { personal } from "@/data/cv";
import { useTypingEffect } from "@/hooks/useTypingEffect";

export const HeroSection = () => {
  const typingText = useTypingEffect();
  const headingRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !headingRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      headingRef.current.querySelectorAll(".word"),
      { yPercent: 105, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1, stagger: 0.09 }
    )
      .fromTo(subRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
      .fromTo(ctaRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");

    return () => { tl.kill(); };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-20 px-4 md:px-8"
    >
      {/* Mesh gradient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[700px] h-[700px] rounded-full top-[-200px] left-[-200px] opacity-50"
          style={{ background: "radial-gradient(circle, rgba(74,222,128,0.1) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full bottom-[-150px] right-[-150px] opacity-40"
          style={{ background: "radial-gradient(circle, rgba(56,189,248,0.09) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Cinematic Center hero — text flows full-width, max 2-3 lines */}
      <div className="relative z-10 w-full max-w-5xl text-center">

        {/* Role typing — above name */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-6 text-sm mono text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-[#4ADE80] min-w-[180px] text-right">{typingText}</span>
          <motion.span
            className="text-[#4ADE80]"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >_</motion.span>
          <span className="text-white/25">·</span>
          <span>LPU &middot; B.Tech CSE</span>
        </motion.div>

        {/* Main heading — clamp prevents 4+ lines */}
        <div ref={headingRef} aria-label="Nitesh Kumar">
          <h1
            className="display-text overflow-hidden"
            style={{ fontSize: "clamp(3.2rem, 8vw, 6.5rem)", lineHeight: 1, letterSpacing: "-0.03em" }}
          >
            {["Nitesh", "Kumar"].map((word) => (
              <span key={word} className="inline-block overflow-hidden mx-[0.06em]">
                <span className="word inline-block gradient-text-warm">{word}</span>
              </span>
            ))}
          </h1>
        </div>

        {/* Single-sentence description — 20 words max */}
        <p
          ref={subRef}
          className="mt-8 text-white/40 text-base md:text-lg leading-relaxed max-w-[52ch] mx-auto opacity-0"
        >
          I build production-grade real-time systems and AI-powered tools —
          from Kafka-backed chat to LangChain equity research.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
          <button onClick={() => scrollTo("projects")} className="btn-primary">
            View Projects
            <span className="btn-icon-circle"><ArrowRight size={13} /></span>
          </button>
          <button onClick={() => scrollTo("contact")} className="btn-ghost">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-px h-14 mx-auto"
          style={{ background: "linear-gradient(180deg, transparent, rgba(74,222,128,0.5))" }}
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};
