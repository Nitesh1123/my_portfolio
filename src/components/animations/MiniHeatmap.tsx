import { motion } from "framer-motion";

export const MiniHeatmap = () => {
  // Simple 3x3 grid simulation
  const grid = Array.from({ length: 9 }).map((_, i) => i);
  
  // Opacities for a "confusion matrix" look
  const opacities = [1, 0.2, 0.1, 0.3, 0.9, 0.2, 0.1, 0.1, 0.8];

  return (
    <div className="w-12 h-12 grid grid-cols-3 gap-0.5 bg-card/50 p-1 border border-border/50 rounded-md">
      {grid.map((index) => (
        <motion.div
          key={index}
          className="bg-[#A855F7] rounded-[1px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: opacities[index] }}
          transition={{ duration: 1, delay: index * 0.1 }}
          whileHover={{ opacity: 1 }}
        />
      ))}
    </div>
  );
};
