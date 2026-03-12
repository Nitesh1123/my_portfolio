import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal, ArrowRight } from "lucide-react";

export const LiveDemoWidget = () => {
  const [inputText, setInputText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{ label: string; confidence: number; color: string } | null>(null);

  // Simple hardcoded mock logic for instant UI feedback without loading heavy ML models
  const analyzeSentiment = (text: string) => {
    setIsAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      const lowerText = text.toLowerCase();
      
      const positiveWords = ["good", "great", "awesome", "excellent", "love", "happy", "amazing", "best", "cool"];
      const negativeWords = ["bad", "terrible", "awful", "hate", "sad", "worst", "poor", "boring"];
      
      let score = 0;
      positiveWords.forEach(word => { if (lowerText.includes(word)) score += 1; });
      negativeWords.forEach(word => { if (lowerText.includes(word)) score -= 1; });

      // Add some random noise to confidence so it looks like a real model output
      const baseConfidence = 70 + Math.random() * 25; 

      if (score > 0 || (score === 0 && text.length > 10 && !lowerText.includes("not"))) {
        setResult({ label: "Positive", confidence: Math.min(99.9, baseConfidence + 10), color: "bg-primary text-primary" });
      } else if (score < 0) {
        setResult({ label: "Negative", confidence: Math.min(99.9, baseConfidence + 5), color: "bg-destructive text-destructive" });
      } else if (text.length === 0) {
         setResult(null);
      } else {
        setResult({ label: "Neutral", confidence: Math.max(40, baseConfidence - 20), color: "bg-secondary text-secondary" });
      }
      
      setIsAnalyzing(false);
    }, 800); // Artificial delay to simulate processing
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) analyzeSentiment(inputText);
  };

  return (
    <motion.div 
      className="glass border border-primary/30 rounded-2xl p-6 md:p-8 relative overflow-hidden group max-w-2xl mx-auto w-full mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ boxShadow: "0 0 30px hsl(var(--primary) / 0.15)" }}
    >
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-[60px] pointer-events-none group-hover:bg-primary/30 transition-colors duration-500" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/20 rounded-full blur-[60px] pointer-events-none group-hover:bg-accent/30 transition-colors duration-500" />

      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Terminal size={20} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">NLP Sentiment Analyzer</h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Live Demo — Running in Browser
            </p>
          </div>
        </div>
        <div className="hidden sm:flex text-xs font-mono text-muted-foreground bg-background/50 px-3 py-1.5 rounded-md border border-border/50">
          Model: DistilBERT-mini (Simulated)
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="relative z-10 mb-6">
        <div className="relative">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a sentence to analyze sentiment..."
            className="w-full bg-background/50 border border-border/50 text-foreground rounded-xl pl-4 pr-12 py-3.5 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
            disabled={isAnalyzing}
          />
          <button
            type="submit"
            disabled={!inputText.trim() || isAnalyzing}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 disabled:opacity-50 disabled:hover:bg-primary/10 transition-colors"
          >
            {isAnalyzing ? (
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                <Sparkles size={18} />
              </motion.div>
            ) : (
              <ArrowRight size={18} />
            )}
          </button>
        </div>
      </form>

      {/* Results Area */}
      <div className="h-20 relative z-10 bg-background/30 rounded-xl border border-border/30 p-4 flex flex-col justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {!result && !isAnalyzing && (
            <motion.p 
              key="empty"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="text-muted-foreground text-sm text-center"
            >
              Waiting for input...
            </motion.p>
          )}

          {isAnalyzing && (
            <motion.div 
              key="analyzing"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex items-center justify-center gap-2 text-primary text-sm font-mono"
            >
              <span className="animate-bounce">Tokenizing</span>
              <span className="animate-bounce" style={{ animationDelay: "0.1s" }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: "0.3s" }}>.</span>
            </motion.div>
          )}

          {result && !isAnalyzing && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              className="flex flex-col gap-2 w-full"
            >
              <div className="flex justify-between items-center text-sm font-bold">
                <span className={result.color.split(" ")[1]}>Output: {result.label}</span>
                <span className="text-muted-foreground font-mono">{result.confidence.toFixed(1)}% Confidence</span>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                <motion.div 
                  className={`h-full rounded-full ${result.color.split(" ")[0]}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${result.confidence}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ boxShadow: `0 0 10px var(--tw-bg-opacity, 1)` }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
