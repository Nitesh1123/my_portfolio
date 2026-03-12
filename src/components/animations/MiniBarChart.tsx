import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";
import { motion } from "framer-motion";

const data = [
  { value: 40 },
  { value: 70 },
  { value: 50 },
  { value: 90 },
  { value: 60 },
];

export const MiniBarChart = () => {
  return (
    <motion.div 
      className="w-16 h-12 bg-card/50 rounded-md p-1 border border-border/50"
      whileHover={{ scale: 1.05 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <Bar dataKey="value" radius={[2, 2, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#38BDF8" className="animate-pulse" style={{ animationDelay: `${index * 150}ms` }} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};
