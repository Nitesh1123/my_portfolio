import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { NeuralNetworkBackground } from "@/components/animations/NeuralNetworkBackground";
import { TerminalStatCard } from "@/components/animations/TerminalStatCard";
import { TopTicker } from "@/components/animations/TopTicker";

export const HeroSection = () => {
  const typingText = useTypingEffect();

  const handleScrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative pt-32 pb-10 overflow-hidden">
      {/* Neural Network Interactive Background */}
      <NeuralNetworkBackground />

      <div className="absolute top-[80px] left-0 w-full z-40">
        <TopTicker />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Greeting */}
          <motion.p
            className="text-primary text-lg font-medium mb-2 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-4 gradient-text-light leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Nitesh Kumar
          </motion.h1>

          {/* Typing Effect */}
          <motion.div
            className="text-3xl md:text-4xl font-bold mb-6 min-h-[3rem] md:min-h-[3.5rem] flex items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="gradient-text">{typingText}</span>
            <motion.span
              className="text-primary ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            B.Tech Computer Science (3rd Year) at LPU specializing in Data Science & ML. I build AI models that solve real problems—from predictive systems to scalable backend architectures. Passionate about turning complex data into actionable insights.
          </motion.p>

          {/* Key Metrics */}
          <motion.div
            className="flex flex-nowrap md:flex-wrap gap-4 md:gap-6 mb-10 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            <div className="snap-center shrink-0 min-w-[75vw] md:min-w-0">
              <TerminalStatCard
                finalText="5+"
                label="ML Projects"
                colorClass="text-primary"
                delayMs={600}
              />
            </div>
            <div className="snap-center shrink-0 min-w-[75vw] md:min-w-0">
              <TerminalStatCard
                finalText="Python"
                label="Expert Level"
                colorClass="text-secondary"
                delayMs={800}
              />
            </div>
            <div className="snap-center shrink-0 min-w-[75vw] md:min-w-0">
              <TerminalStatCard
                finalText="DS & ML"
                label="Core Focus"
                colorClass="text-accent"
                delayMs={1000}
              />
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              onClick={handleScrollToContact}
              className="btn-gradient px-8 py-4 text-primary-foreground flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
              <ArrowRight size={18} />
            </motion.button>
            <motion.button
              onClick={handleScrollToProjects}
              className="btn-outline-gradient px-8 py-4 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="text-muted-foreground cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={handleScrollToProjects}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
};
