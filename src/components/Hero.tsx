import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";

const Typewriter = ({ text, delay = 100 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, delay);

    return () => clearInterval(typingInterval);
  }, [text, delay]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="text-primary font-medium">
      {displayedText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

const Hero = () => {
  // Floating particles
  const particles = Array.from({ length: 6 }, (_, i) => i);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16">
      {/* Animated background glow */}
      <motion.div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none rounded-full blur-3xl"
        style={{ background: "hsl(var(--primary) / 0.3)" }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.25, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating particles */}
      {particles.map((i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        return (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/30 pointer-events-none"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
            }}
            animate={{
              y: [0, -100 - Math.random() * 50],
              x: [(Math.random() - 0.5) * 50, (Math.random() - 0.5) * 100],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        );
      })}
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-muted-foreground mb-2"
            >
              Hello, It's Me
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4"
            >
              <motion.span 
                className="text-gradient"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Yashika Jain
              </motion.span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-6"
            >
              <p className="text-lg md:text-xl text-foreground">
                And I am a{" "}
                <Typewriter text="AI Engineer" delay={150} />
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
            >
              I'm a third-year Computer Science undergraduate at the University of Toronto focused on building applied 
              AI systems - from retrieval pipelines to evaluation frameworks. 
              I turn unstructured data into reliable intelligence.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-4 mb-8 justify-center lg:justify-start"
            >
              {[
                { href: "https://github.com/Yashika-1705", icon: Github, delay: 0 },
                { href: "https://www.linkedin.com/in/yashika-jain-1705/", icon: Linkedin, delay: 0.1 },
                { href: "mailto:hello@example.com", icon: Mail, delay: 0.2 },
              ].map(({ href, icon: Icon, delay }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.7 + delay, 
                    type: "spring", 
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 5,
                    boxShadow: "0 0 20px hsl(var(--primary) / 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.5, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Icon className="w-5 h-5 relative z-10" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#experience"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px hsl(var(--primary) / 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">View Experience</span>
              </motion.a>
              <motion.a
                href="/images/Yashika_Jain.pdf"
                download="Yashika_Jain_Resume.pdf"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "hsl(var(--primary))",
                  boxShadow: "0 0 20px hsl(var(--primary) / 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 border border-border rounded-lg font-medium hover:border-primary hover:text-primary transition-all relative overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-primary/5"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
                <span className="relative z-10">Resume</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: 0,
              y: [0, -10, 0]
            }}
            transition={{ 
              delay: 0.2, 
              duration: 0.6,
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="flex justify-center lg:justify-end"
          >
            {/* Circular frame with subtle glow */}
            <div className="relative">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 blur-xl scale-110"
                animate={{
                  scale: [1.1, 1.15, 1.1],
                  opacity: [0.3, 0.4, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-primary/30 p-1 bg-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Rotating border gradient */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, hsl(var(--primary) / 0.3), transparent, hsl(var(--primary) / 0.3))",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    padding: "2px",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-full"
                  animate={{
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;