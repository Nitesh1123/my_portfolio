import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: "0 0 20px hsl(var(--primary)/0.6)",
            borderColor: "hsl(var(--primary))"
          }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full glass border border-primary/50 text-primary shadow-[0_0_15px_rgba(74,222,128,0.3)] flex items-center justify-center cursor-pointer overflow-hidden group"
          aria-label="Back to top"
        >
          {/* Subtle hover background fill */}
          <span className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          <ArrowUp size={24} className="relative z-10 font-bold" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
