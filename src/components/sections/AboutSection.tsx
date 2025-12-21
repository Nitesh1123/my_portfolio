import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { FadeInUp, FadeInLeft } from "@/components/animations/MotionWrapper";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, hsl(0 0% 10% / 0.3) 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FadeInLeft>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="section-number">01.</span>
            About Me
          </h2>
        </FadeInLeft>

        <div className="max-w-4xl">
          <FadeInUp delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a data-driven engineer focused on building{" "}
              <span className="text-primary font-semibold">machine learning systems</span> that create measurable impact.
              As a B.Tech Computer Science student at Lovely Professional University (3rd Year), I combine strong fundamentals in algorithms and data structures with practical experience in ML engineering.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              <span className="text-primary font-semibold">Technical Expertise:</span> I specialize in Python for ML, deep learning with TensorFlow, data processing & analysis, and building scalable systems. I've developed multiple end-to-end ML projects including predictive models, visualization dashboards, and web applications with React + Node.js.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.25}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              <span className="text-primary font-semibold">What I Value:</span> I'm passionate about solving real-world problems with data, writing clean and maintainable code, continuous learning, and collaborating with teams to deliver production-ready solutions.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <motion.div
              className="flex items-center gap-3 text-muted-foreground"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin className="text-secondary" size={20} />
              <span>Based in Nalagarh, India • Open to opportunities</span>
            </motion.div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};
