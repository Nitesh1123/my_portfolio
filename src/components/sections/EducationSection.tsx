import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { FadeInUp } from "@/components/animations/MotionWrapper";

const educationEntries = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech Computer Science & Engineering",
    details: "CGPA: 8.19",
    period: "Aug 2023 – Present",
    location: "Phagwara, Punjab",
    icon: GraduationCap,
    iconColor: "text-primary",
    iconBg: "bg-primary/10",
    badgeColor: "bg-primary/10 text-primary",
  },
  {
    institution: "Doon Valley Public School",
    degree: "Intermediate",
    details: "83.6%",
    period: "Apr 2022 – Mar 2023",
    location: "Nalagarh, Himachal Pradesh",
    icon: GraduationCap,
    iconColor: "text-secondary",
    iconBg: "bg-secondary/10",
    badgeColor: "bg-secondary/10 text-secondary",
  },
  {
    institution: "Doon Valley Public School",
    degree: "Matriculation",
    details: "78.6%",
    period: "Apr 2020 – Mar 2021",
    location: "Nalagarh, Himachal Pradesh",
    icon: GraduationCap,
    iconColor: "text-accent",
    iconBg: "bg-accent/10",
    badgeColor: "bg-accent/10 text-accent",
  },
];

const certifications = [
  {
    name: "Git and GitHub — CipherSchools",
    period: "Jun 2023 – Jun 2024",
    url: "https://drive.google.com/file/d/1Qjv3bPWWnEli4UBjvi6CN1c4k4osamt9/view",
  },
  {
    name: "Social Networks — NPTEL",
    period: "Jul 2025 – Nov 2025",
    url: "https://drive.google.com/file/d/1K-ql5cmu_fDHi_w1z0ziSgWxR_-NXtX8/view",
  },
  {
    name: "Gen AI — NASSCOM / SFJ Skill Development Program",
    period: "Feb 2025",
    url: "https://drive.google.com/file/d/18bN-y8d3EqR8YE9H2sTFw24AFLXUiv6R/view",
  },
  {
    name: "Training in Machine Learning — CipherSchools",
    period: "Jun 2025 – Jul 2025",
    details: "Covered Regression, Decision Trees, Random Forest, SVM, K-Means, PCA, NLP, CNN",
    url: "https://drive.google.com/file/d/1R_3JUlNB9x-YXQUk0oEiekiCbygCIGsd/view",
  },
];

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
          
        {/* Education Cards */}
          {educationEntries.map((edu, index) => (
            <FadeInUp key={edu.institution + edu.degree} delay={0.1 * (index + 1)}>
              <div className="glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 relative overflow-hidden border border-border/50 group card-hover">
                <div className={`p-4 rounded-2xl shrink-0 ${edu.iconBg}`}>
                  <edu.icon size={32} className={edu.iconColor} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium mb-1">
                    {edu.degree}
                  </p>
                  <p className="text-muted-foreground/70 text-xs">
                    {edu.location}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono mt-3">
                    <span className={`px-2 py-1 rounded-md ${edu.badgeColor}`}>{edu.details}</span>
                    <span className={`px-2 py-1 rounded-md ${edu.badgeColor}`}>{edu.period}</span>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}

          {/* Certifications Container */}
          <div>
            <FadeInUp delay={0.2}>
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Award size={20} className="text-secondary" />
                Certifications
              </h3>
            </FadeInUp>

            <div className="flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <FadeInUp key={index} delay={0.3 + index * 0.1}>
                  <motion.a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start gap-1 px-4 py-3 border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8] text-sm font-medium rounded-xl cursor-pointer hover:bg-[#38BDF8]/20 transition-colors max-w-md"
                    whileHover={{ scale: 1.02, y: -2, boxShadow: "0 0 20px rgba(56, 189, 248, 0.4)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{cert.name}</span>
                      <ExternalLink size={14} />
                    </div>
                    <span className="text-xs text-[#38BDF8]/70">{cert.period}</span>
                    {cert.details && (
                      <span className="text-xs text-[#38BDF8]/60 leading-tight">{cert.details}</span>
                    )}
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
