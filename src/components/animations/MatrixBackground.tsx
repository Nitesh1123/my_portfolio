import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const keywords = [
  "model.fit()",
  "accuracy: 0.97",
  "gradient descent",
  "epoch 12/50",
  "loss: 0.042",
  "import tensorflow as tf",
  "df.head()",
  "np.array()",
  "from sklearn import svm",
  "val_loss: 0.051",
  "learning_rate: 1e-4",
  "batch_size: 32",
  "dropout(0.2)",
  "activation='relu'",
  "optimizer='adam'",
  "EarlyStopping(patience=5)",
  "precision: 0.95",
  "recall: 0.92",
  "f1_score: 0.93",
  "import keras",
  "import pandas as pd",
  "transform()",
  "predict()",
  "StandardScaler()"
];

export const MatrixBackground = () => {
  const [columns, setColumns] = useState<number>(0);

  useEffect(() => {
    // Determine how many columns to show based on screen width
    const handleResize = () => {
      setColumns(Math.floor(window.innerWidth / 150)); // One column every 150px
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.06] select-none">
      <div className="flex justify-between w-full h-full relative">
        {Array.from({ length: columns }).map((_, i) => (
          <MatrixColumn key={i} delay={i * 0.4} speed={15 + Math.random() * 20} />
        ))}
      </div>
    </div>
  );
};

// Internal component for an individual scrolling column
const MatrixColumn = ({ delay, speed }: { delay: number; speed: number }) => {
  // Generate a random string of keywords for this column
  const columnText = Array.from({ length: 15 })
    .map(() => keywords[Math.floor(Math.random() * keywords.length)])
    .join("\n\n");

  return (
    <div className="relative h-full flex flex-col w-[120px]">
      <motion.div
        className="absolute top-0 w-full text-primary font-mono text-sm whitespace-pre"
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          delay: delay,
        }}
        style={{ textShadow: "0 0 8px hsl(var(--primary))" }}
      >
        {columnText}
      </motion.div>
      <motion.div
        className="absolute top-0 w-full text-primary font-mono text-sm whitespace-pre"
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          delay: delay + speed / 2, // Offset the second block so it perfectly trails
        }}
        style={{ textShadow: "0 0 8px hsl(var(--primary))" }}
      >
        {columnText}
      </motion.div>
    </div>
  );
};
