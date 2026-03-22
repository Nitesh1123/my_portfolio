import { motion } from "framer-motion";
import { MapPin, Brain, Code2, Rocket } from "lucide-react";
import { FadeInUp, FadeInLeft } from "@/components/animations/MotionWrapper";
import { Timeline } from "@/components/animations/Timeline";

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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Timeline */}
          <div className="md:col-span-5 hidden md:block">
            <Timeline />
          </div>

          {/* Right Column: Text Content */}
          <div className="md:col-span-7 space-y-8">
            {/* Mobile Timeline (Shows on small screens only) */}
            <div className="md:hidden mb-12">
               <Timeline />
            </div>

            <FadeInUp delay={0.1}>
              <div className="glass p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Rocket size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Mission & Impact</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  B.Tech CSE student at Lovely Professional University (CGPA: 8.19), passionate about Machine Learning, Data Science, and Full-Stack Development. I build systems that turn complex data into measurable real-world impact.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="glass p-6 rounded-2xl border border-secondary/20 hover:border-secondary/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                    <Brain size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Technical Approach</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Trained in ML at CipherSchools covering Regression, Decision Trees, Random Forest, SVM, K-Means, PCA, NLP, and CNNs. Skilled in Python, React, Node.js, and ML frameworks for end-to-end development.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <div className="glass p-6 rounded-2xl border border-accent/20 hover:border-accent/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Code2 size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Core Values</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate about building ML-powered solutions and full-stack applications. Focused on clean architecture, continuous learning, and turning complex data into actionable insights through collaborative development.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <motion.div
                className="inline-flex items-center gap-3 text-muted-foreground px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm"
                whileHover={{ x: 5, backgroundColor: "hsl(var(--secondary) / 0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="text-secondary" size={18} />
                <span className="text-sm font-medium">Based in Nalagarh, India • Open to opportunities</span>
              </motion.div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
};
