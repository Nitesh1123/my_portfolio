import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { FadeInLeft } from "@/components/animations/MotionWrapper";
import { AnimatedCard } from "@/components/animations/AnimatedCard";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "knitesh1123@gmail.com",
    href: "mailto:knitesh1123@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nalagarh, India",
    href: null,
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "+91-7876413487",
    href: "tel:+91-7876413487",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Nitesh1123", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nitesh-chandel/", label: "LinkedIn" },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, hsl(0 0% 10% / 0.3) 0%, transparent 100%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <FadeInLeft>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
            <span className="section-number">04.</span>
            Get In Touch
          </h2>
        </FadeInLeft>

        <div className="max-w-5xl mx-auto">
          <motion.p
            className="text-muted-foreground text-lg leading-relaxed mb-12 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Feel free to reach out!
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10 items-start">
            
            {/* CTA Card - Let's Connect */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-8 relative overflow-hidden flex flex-col items-center text-center"
            >
              <h3 className="text-3xl font-bold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-sm">
                Feel free to reach out via email or any platform below.
              </p>
              <motion.a
                href="mailto:knitesh1123@gmail.com"
                className="px-8 py-4 bg-[#4ADE80] text-background font-bold rounded-xl shadow-[0_0_20px_rgba(74,222,128,0.4)] hover:shadow-[0_0_30px_rgba(74,222,128,0.6)] transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={20} />
                Send me an Email
              </motion.a>
            </motion.div>

            {/* Contact Info & Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col justify-center h-full gap-6"
            >
              {/* Contact Cards */}
              <div className="flex flex-col gap-4">
                {contactInfo.map((info, index) => (
                  <AnimatedCard
                    key={info.label}
                    index={index}
                    hoverEffect="lift"
                    className="glass rounded-2xl p-6 relative group overflow-hidden"
                  >
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 pointer-events-none" />

                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <info.icon className="text-primary" size={24} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-muted-foreground text-xs uppercase tracking-wider font-semibold mb-1">
                          {info.label}
                        </span>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground text-lg font-bold hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-foreground text-lg font-bold">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-4 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full glass border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm"
                    whileHover={{ y: -5, scale: 1.1, boxShadow: "0 10px 25px hsl(var(--primary)/0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    aria-label={social.label}
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
