import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  { value: 400 },
  { value: 300 },
  { value: 550 },
  { value: 450 },
  { value: 700 },
  { value: 600 },
  { value: 800 },
];

export const MiniLineChart = () => {
  return (
    <div className="w-16 h-12 bg-card/50 rounded-md p-1 border border-border/50">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#4ADE80"
            strokeWidth={2}
            dot={false}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
