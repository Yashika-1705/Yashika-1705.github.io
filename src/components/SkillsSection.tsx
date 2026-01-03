import { motion } from "framer-motion";

interface SkillCategory {
  name: string;
  skills: { name: string; level: "core" | "proficient" | "familiar" }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Python", level: "core" },
      { name: "TypeScript", level: "proficient" },
      { name: "SQL", level: "proficient" },
      { name: "C++", level: "familiar" },
    ],
  },
  {
    name: "ML & Data",
    skills: [
      { name: "PyTorch", level: "core" },
      { name: "scikit-learn", level: "core" },
      { name: "Pandas", level: "core" },
      { name: "NumPy", level: "core" },
      { name: "Hugging Face", level: "proficient" },
      { name: "LangChain", level: "proficient" },
    ],
  },
  {
    name: "Infrastructure",
    skills: [
      { name: "PostgreSQL", level: "proficient" },
      { name: "Docker", level: "proficient" },
      { name: "Redis", level: "familiar" },
      { name: "FastAPI", level: "proficient" },
      { name: "Git", level: "core" },
    ],
  },
  {
    name: "MLOps & Tools",
    skills: [
      { name: "Weights & Biases", level: "proficient" },
      { name: "MLflow", level: "familiar" },
      { name: "pgvector", level: "proficient" },
      { name: "FAISS", level: "familiar" },
    ],
  },
  {
    name: "AI/ML Domains",
    skills: [
      { name: "RAG Systems", level: "core" },
      { name: "LLM Evaluation", level: "proficient" },
      { name: "Vector Search", level: "proficient" },
      { name: "NLP", level: "proficient" },
      { name: "Feature Engineering", level: "proficient" },
    ],
  },
];

const getLevelStyle = (level: string) => {
  switch (level) {
    case "core":
      return "bg-primary/15 text-primary border-primary/30";
    case "proficient":
      return "bg-secondary text-foreground border-border";
    case "familiar":
      return "bg-secondary/50 text-muted-foreground border-border/50";
    default:
      return "bg-secondary text-foreground border-border";
  }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-gradient-to-b from-background to-card/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="tag font-mono text-xs mb-4 inline-block">03</span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Skills</h2>
          <p className="text-muted-foreground max-w-2xl">
            Technologies and tools I work with. Highlighted items are core competencies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="card-elevated p-6"
            >
              <h3 className="font-mono text-sm text-muted-foreground mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 rounded-md text-sm border ${getLevelStyle(skill.level)}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-6 text-sm"
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-primary/30 border border-primary/50" />
            <span className="text-muted-foreground">Core</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-secondary border border-border" />
            <span className="text-muted-foreground">Proficient</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-secondary/50 border border-border/50" />
            <span className="text-muted-foreground">Familiar</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
