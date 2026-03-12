import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Mouse position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the trailing outer circle
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(mouseX, springConfig);
  const cursorYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Simple heuristic to detect if hovering over clickable/interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, input, textarea, .card-hover, .group, [role='button']");
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer trailing circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full border border-primary mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 64 : 32,
          height: isHovering ? 64 : 32,
          borderColor: isHovering ? "hsl(var(--accent))" : "hsl(var(--primary)/0.5)",
          backgroundColor: isHovering ? "hsl(var(--accent)/0.1)" : "transparent",
          boxShadow: isHovering ? "0 0 20px hsl(var(--accent)/0.5)" : "0 0 10px hsl(var(--primary)/0.2)",
        }}
        animate={{
          width: isHovering ? 64 : 32,
          height: isHovering ? 64 : 32,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[100] w-2 h-2 rounded-full bg-primary"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 10px hsl(var(--primary))",
        }}
      />
    </>
  );
};
