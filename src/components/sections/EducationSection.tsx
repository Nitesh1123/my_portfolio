import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { FadeInUp } from "@/components/animations/MotionWrapper";

const certifications = [
  {
    name: "Machine Learning — CipherSchools (2025)",
    url: "https://drive.google.com/file/d/1R_3JUlNB9x-YXQUk0oEiekiCbygCIGsd/view",
  },
  {
    name: "Git & GitHub — CipherSchools (2025)",
    url: "https://drive.google.com/file/d/1TxveYZxpLxoKiQNqm72JwZvl7c9NvRy0/view",
  },
  {
    name: "Social Networks — NPTEL (2025)",
    url: "https://drive.google.com/file/d/1K-ql5cmu_fDHi_w1z0ziSgWxR_-NXtX8/view",
  }
];

// Let me use exact paths for URL if the user specified them literally, or just "#" if they didn't provide the distinct file IDs. 
// Re-reading the prompt: "Git and GitHub — CipherSchools: Set the link to open the Google Drive PDF: https://drive.google.com/file/d/NITESH_KUMAR(2).pdf — replace with the actual shareable Drive link" 
// It looks like the user meant I should literally put the string "https://drive.google.com/file/d/NITESH_KUMAR(2).pdf" as a placeholder for them to replace later, or maybe they think that is the link structure. I will inject those exact strings.

export const EducationSection = () => {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-5xl">
        
        {/* Education Header */}
        <FadeInUp>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-primary">03.75</span>
            Education & Certifications
          </h2>
        </FadeInUp>

        <div className="flex flex-col gap-8">
          
          {/* Degree Card */}
          <FadeInUp delay={0.1}>
            <div className="glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 relative overflow-hidden border border-border/50 group card-hover">
              <div className="p-4 rounded-2xl shrink-0 bg-primary/10">
                <GraduationCap size={32} className="text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  Lovely Professional University
                </h3>
                <p className="text-muted-foreground text-sm font-medium mb-1">
                  B.Tech Computer Science & Engineering
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-primary mt-3">
                  <span className="px-2 py-1 bg-primary/10 rounded-md">CGPA: 8.2</span>
                  <span className="px-2 py-1 bg-primary/10 rounded-md">2023 – Present</span>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Certifications Container */}
          <div>
            <FadeInUp delay={0.2}>
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Award size={20} className="text-secondary" />
                Certifications
              </h3>
            </FadeInUp>

            <div className="flex flex-wrap gap-4">
              {certifications.map((cert, index) => (
                <FadeInUp key={index} delay={0.3 + index * 0.1}>
                  <motion.a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium rounded-full cursor-pointer hover:bg-secondary/20 transition-colors"
                    whileHover={{ scale: 1.05, y: -2, boxShadow: "0 0 15px hsl(var(--secondary)/0.5)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {cert.name}
                    <ExternalLink size={14} />
                  </motion.a>
                </FadeInUp>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
