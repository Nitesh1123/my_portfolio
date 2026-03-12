import { motion } from "framer-motion";

interface SkillRingProps {
  percentage: number;
  color: string;
  size?: number;
  strokeWidth?: number;
}

export const SkillRing = ({ percentage, color, size = 24, strokeWidth = 3 }: SkillRingProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center pointer-events-none" style={{ width: size, height: size }}>
      {/* Background Ring */}
      <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
          className="opacity-50"
        />
        {/* Animated Progress Ring */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </svg>
    </div>
  );
};
