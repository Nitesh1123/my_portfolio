import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal, ArrowRight } from "lucide-react";

export const LiveDemoWidget = () => {
  const [inputText, setInputText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<{ label: string; confidence: number; color: string; emoji: string } | null>(null);

  // Proper keyword-based sentiment scoring system
  const analyzeSentiment = (text: string) => {
    setIsAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      const lowerText = text.toLowerCase();
      
      const negativeWords = ['failed', 'wrong', 'terrible', 'bad', 'awful', 'horrible', 'disappointing', 'unreliable', 'poor', 'worst', 'useless', 'broken', 'error', 'crash', 'hate', 'slow', 'ugly', 'stupid', 'annoying', 'boring', 'difficult', 'impossible', 'never', 'problem', 'issue', 'bug', 'fail', 'miss', 'loss', 'hurt', 'damage'];
      const positiveWords = ['love', 'great', 'excellent', 'amazing', 'good', 'best', 'awesome', 'fantastic', 'brilliant', 'passionate', 'happy', 'excited', 'beautiful', 'perfect', 'wonderful', 'incredible', 'outstanding', 'superb', 'enjoy', 'like', 'success', 'achieve', 'build', 'solve', 'improve', 'learn', 'grow', 'win', 'smart', 'fast'];
      
      let positiveScore = 0;
      let negativeScore = 0;
      
      positiveWords.forEach(word => { 
        if (lowerText.includes(word)) positiveScore += 1; 
      });
      negativeWords.forEach(word => { 
        if (lowerText.includes(word)) negativeScore += 1; 
      });

      let sentiment: { label: string; confidence: number; color: string; emoji: string };

      if (positiveScore > negativeScore) {
        const confidence = Math.min(98, 70 + (positiveScore * 5));
        sentiment = { 
          label: "Positive", 
          confidence, 
          color: "#4ADE80",
          emoji: "✅"
        };
      } else if (negativeScore > positiveScore) {
        const confidence = Math.min(98, 70 + (negativeScore * 5));
        sentiment = { 
          label: "Negative", 
          confidence, 
          color: "#EF4444",
          emoji: "❌"
        };
      } else {
        sentiment = { 
          label: "Neutral", 
          confidence: 85, 
          color: "#9CA3AF",
          emoji: "⚪"
        };
      }
      
      setResult(sentiment);
      setIsAnalyzing(false);
    }, 800);
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
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{result.emoji}</span>
                  <span 
                    className="text-xl font-bold"
                    style={{ color: result.color }}
                  >
                    {result.label}
                  </span>
                </div>
                <span className="text-muted-foreground font-mono text-sm">{result.confidence.toFixed(1)}% Confidence</span>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full rounded-full"
                  style={{ backgroundColor: result.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${result.confidence}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
