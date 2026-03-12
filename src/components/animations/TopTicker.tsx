import { motion } from "framer-motion";

export const TopTicker = () => {
  const text = "⚡ Currently Building: Real-Time Chat Application — WebSockets · React · Node.js · MongoDB ⚡";
  
  // Clone the text multiple times to ensure seamless infinite scrolling
  const tickerContent = Array(10).fill(text).join("        ");

  return (
    <div className="w-full bg-background/80 backdrop-blur-md border-y border-border/50 py-2 overflow-hidden flex items-center group">
      <motion.div
        className="text-primary font-mono text-xs sm:text-sm whitespace-nowrap"
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{ animationPlayState: "paused" }} // Tries to pause, but Framer Motion handles it inherently differently sometimes. 
        // A better approach for framer motion hover pause is to use a slightly more complex setup, but simple CSS animation might be better here for the pause.
        // I will use tailwind + CSS for the pause effect to ensure compatibility.
      >
        {/* We use inline style for standard css animation to easily support play-state pause on hover */}
        <div className="animate-ticker inline-block group-hover:[animation-play-state:paused] cursor-default">
          {tickerContent}
        </div>
      </motion.div>
    </div>
  );
};
