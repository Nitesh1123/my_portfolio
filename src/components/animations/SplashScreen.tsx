import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const SplashScreen = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Only show once per session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (!hasSeenSplash) {
      setShow(true);
      sessionStorage.setItem("hasSeenSplash", "true");
      
      // Total duration ~2 seconds before starting upwards exit
      const timer = setTimeout(() => {
        setShow(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center">
            {/* Glowing NK Logo */}
            <motion.h1 
              className="text-6xl md:text-8xl font-black text-[#4ADE80] mb-8 tracking-tighter"
              initial={{ scale: 0.5, opacity: 0, textShadow: "0 0 0px #4ADE80" }}
              animate={{ 
                scale: [0.5, 1.1, 1],
                opacity: [0, 1, 1],
                textShadow: [
                  "0 0 0px #4ADE80", 
                  "0 0 60px #4ADE80", 
                  "0 0 20px #4ADE80"
                ]
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              NK
            </motion.h1>

            {/* Loading Bar Container */}
            <div className="w-48 md:w-64 h-1 md:h-1.5 bg-white/10 rounded-full overflow-hidden">
              {/* Animated Fill */}
              <motion.div 
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #4ADE80, #38BDF8, #A855F7)",
                  boxShadow: "0 0 10px #4ADE80"
                }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
