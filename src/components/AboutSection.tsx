import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-b from-card/30 to-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag font-mono text-xs mb-4 inline-block">01</span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Background</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a third-year Computer Science undergraduate with a focus on machine learning 
                systems and applied AI. My interest lies at the intersection of ML 
                engineering and infrastructure—building systems that are not just accurate 
                but reliable, observable, and maintainable.
              </p>
              <p>
                Currently exploring retrieval-augmented generation, evaluation frameworks 
                for LLM applications, and the operational challenges of deploying ML in 
                production environments.
              </p>
              <p>
                I prefer depth over breadth: understanding why something works (or doesn't) 
                matters more than chasing the latest model release. Most of my learning 
                happens through building and breaking things.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Interests */}
            <div>
              <h3 className="text-sm font-mono text-muted-foreground mb-4">
                Current Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "RAG Systems",
                  "LLM Evaluation",
                  "ML Infrastructure",
                  "Vector Databases",
                  "Feature Engineering",
                  "Experiment Tracking",
                ].map((interest) => (
                  <span key={interest} className="tag tag-primary">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-sm font-mono text-muted-foreground mb-4">
                Tools I Use
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-foreground/60 mb-1">Languages</p>
                  <p className="text-foreground">Python, TypeScript, SQL</p>
                </div>
                <div>
                  <p className="text-foreground/60 mb-1">ML/Data</p>
                  <p className="text-foreground">PyTorch, scikit-learn, Pandas</p>
                </div>
                <div>
                  <p className="text-foreground/60 mb-1">Infrastructure</p>
                  <p className="text-foreground">Docker, PostgreSQL, Redis</p>
                </div>
                <div>
                  <p className="text-foreground/60 mb-1">MLOps</p>
                  <p className="text-foreground">W&B, MLflow, DVC</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-sm font-mono text-muted-foreground mb-4">
                Education
              </h3>
              <div className="card-elevated p-4">
                <p className="font-medium">B.S. Computer Science</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Third Year · Focus: Machine Learning & Systems
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;