import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedBadgeProps {
  targetNumber: number;
  suffix: string;
}

export const AnimatedBadge = ({ targetNumber, suffix }: AnimatedBadgeProps) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 1500; // 1.5 second count up

    const animateNumber = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCurrentNumber(targetNumber * easeOut);

      if (progress < 1) {
        requestAnimationFrame(animateNumber);
      } else {
        setCurrentNumber(targetNumber);
      }
    };

    requestAnimationFrame(animateNumber);
  }, [isInView, targetNumber]);

  return (
    <div 
      ref={ref}
      className="bg-primary/10 text-primary border border-primary/30 px-3 py-1.5 rounded-full text-xs font-bold drop-shadow-[0_0_10px_hsl(var(--primary)_/_0.5)] flex items-center justify-center gap-2"
    >
      {/* Pulse Dot Indicator */}
      <span className="relative flex h-2 w-2 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
      </span>
      
      {/* Animated Number */}
      <span className="font-mono pt-0.5 tracking-wide">
        {currentNumber.toFixed(2)}{suffix}
      </span>
    </div>
  );
};
