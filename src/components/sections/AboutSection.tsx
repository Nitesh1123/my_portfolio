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

        <div className="max-w-3xl">
          <FadeInUp delay={0.1}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a passionate{" "}
              <span className="text-primary font-semibold">Data Scientist & ML Practitioner</span>{" "}
              with a strong foundation in Computer Science. Currently pursuing my B.Tech at Lovely Professional University, 
              I'm deeply fascinated by the intersection of data, algorithms, and artificial intelligence.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              My expertise lies in building{" "}
              <span className="text-primary font-semibold">scalable backend systems</span> and developing 
              AI-powered applications that solve real-world problems. I enjoy working with Python, TensorFlow, 
              and modern web technologies to create solutions that are both efficient and impactful.
            </p>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <motion.div
              className="flex items-center gap-3 text-muted-foreground"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin className="text-secondary" size={20} />
              <span>Based in Nalagarh, India</span>
            </motion.div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};
