import { useEffect, useState } from "react";

interface TerminalStatCardProps {
  finalText: string;
  label: string;
  colorClass: string;
  delayMs?: number;
}

export const TerminalStatCard = ({ finalText, label, colorClass, delayMs = 500 }: TerminalStatCardProps) => {
  const [displayText, setDisplayText] = useState("");
  const isNumber = /^\d+\+?$/.test(finalText); // matches "5", "5+", "100", etc.

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    const startAnimation = () => {
      if (isNumber) {
        // Number counting animation
        const targetNum = parseInt(finalText.replace(/\D/g, ""));
        const suffix = finalText.replace(/\d/g, "");
        let currentNum = 0;
        
        intervalId = setInterval(() => {
          currentNum += Math.ceil(targetNum / 20) || 1;
          if (currentNum >= targetNum) {
            currentNum = targetNum;
            clearInterval(intervalId);
          }
          setDisplayText(currentNum + suffix);
        }, 40);
      } else {
        // Text scrambling animation
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_\\/[]{}—=+*^?#";
        let iteration = 0;
        
        intervalId = setInterval(() => {
          setDisplayText(
            finalText
              .split("")
              .map((letter, index) => {
                if (index < iteration || letter === " ") return finalText[index];
                return characters[Math.floor(Math.random() * characters.length)];
              })
              .join("")
          );
          
          if (iteration >= finalText.length) {
            clearInterval(intervalId);
          }
          
          iteration += 1 / 2; // Speed of deciphering
        }, 30);
      }
    };

    // Initial placeholder before delay kicks in
    if (isNumber) {
      setDisplayText("0" + finalText.replace(/\d/g, ""));
    } else {
      setDisplayText("".padStart(finalText.length, "_"));
    }

    timeoutId = setTimeout(startAnimation, delayMs);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [finalText, delayMs, isNumber]);

  return (
    <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-black/40 p-4 min-w-[150px] group transition-all duration-300 hover:border-primary/50 hover:bg-black/60">
      {/* Scanline Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay"
        style={{
          background: "linear-gradient(to bottom, transparent 50%, #4ADE80 50%)",
          backgroundSize: "100% 4px"
        }}
      />
      
      <div className="flex flex-col relative z-10">
        <span className={`text-2xl md:text-3xl font-mono font-bold tracking-tight ${colorClass}`}>
          {displayText}
        </span>
        <span className="text-xs font-mono text-primary/70 uppercase tracking-widest mt-1">
          {label}
        </span>
      </div>
      
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};
