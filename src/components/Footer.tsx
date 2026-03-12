import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="py-10 border-t border-border/30 text-center flex flex-col items-center justify-center relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Social Links */}
      <div className="flex gap-4 mb-6">
        <a href="https://github.com/Nitesh1123" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all duration-300 group">
          <Github size={18} className="group-hover:scale-110 transition-transform" />
        </a>
        <a href="https://www.linkedin.com/in/nitesh-chandel/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all duration-300 group">
          <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
        </a>
        <a href="mailto:knitesh1123@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(74,222,128,0.4)] transition-all duration-300 group">
          <Mail size={18} className="group-hover:scale-110 transition-transform" />
        </a>
      </div>

      <p className="text-muted-foreground text-sm">
        Designed & Built by{" "}
        <span className="text-primary font-semibold">Nitesh Kumar</span>
      </p>
      
      <p className="text-muted-foreground/60 text-xs mt-2 mb-4">
        © {currentYear}
      </p>
      
      {/* Status Indicator */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-muted-foreground text-xs uppercase tracking-wider font-medium">
          Open to opportunities
        </span>
      </div>
    </motion.footer>
  );
};
