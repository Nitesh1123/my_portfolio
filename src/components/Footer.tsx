import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="py-8 border-t border-border/30 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <p className="text-muted-foreground text-sm">
        Designed & Built by{" "}
        <span className="text-primary font-semibold">Nitesh Kumar</span>
      </p>
      <p className="text-muted-foreground/60 text-xs mt-1">
        © {currentYear}
      </p>
    </motion.footer>
  );
};
