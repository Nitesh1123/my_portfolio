import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter, Send, CheckCircle } from "lucide-react";
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
];

const socialLinks = [
  { icon: Github, href: "https://github.com/Nitesh1123", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/nitesh-chandel/", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const ContactSection = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/your_formspree_endpoint", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        setFormStatus("success");
        form.reset();
        // Reset success message after 5 seconds
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

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
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-8 relative overflow-hidden"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10 w-full">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="bg-background/50 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all w-full"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="bg-background/50 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all w-full"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={4}
                    className="bg-background/50 border border-border/50 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none w-full"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="btn-gradient px-8 py-3.5 mt-2 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed text-primary-foreground font-semibold"
                >
                  <AnimatePresence mode="wait">
                    {formStatus === "success" ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle size={18} />
                        Message Sent
                      </motion.div>
                    ) : formStatus === "submitting" ? (
                      <motion.div
                        key="submitting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Sending...
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        Send Message
                        <Send size={18} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
                {formStatus === "error" && (
                  <p className="text-red-500 text-sm mt-2 text-center">Something went wrong. Please try again.</p>
                )}
              </form>
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
