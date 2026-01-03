import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const ContactSection = () => {
  const links = [
    {
      label: "GitHub",
      href: "https://github.com",
      icon: Github,
      description: "Code & projects",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
      description: "Professional profile",
    },
    {
      label: "Resume",
      href: "#",
      icon: FileText,
      description: "PDF download",
    },
    {
      label: "Email",
      href: "mailto:hello@example.com",
      icon: Mail,
      description: "Get in touch",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="tag font-mono text-xs mb-4 inline-block">05</span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Open to research collaborations, internship opportunities, and 
            conversations about ML systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="card-elevated p-6 text-center hover:border-primary/50 transition-all duration-300 group"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <link.icon className="w-6 h-6 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
              <p className="font-medium text-sm mb-1">{link.label}</p>
              <p className="text-xs text-muted-foreground">{link.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;