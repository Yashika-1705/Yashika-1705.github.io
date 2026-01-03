import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Github, Briefcase, GraduationCap } from "lucide-react";

interface DiagramNode {
  id: string;
  label: string;
  description: string;
  details: string[];
}

const magiNodes: DiagramNode[] = [
  {
    id: "ingest",
    label: "Data Ingestion",
    description: "Multi-format document processing",
    details: ["PDF, Markdown, and HTML parsing", "Metadata extraction", "Semantic chunking"],
  },
  {
    id: "embed",
    label: "Embeddings",
    description: "Dense vector representations",
    details: ["text-embedding-3-large", "Dimension reduction", "Batch processing"],
  },
  {
    id: "retrieve",
    label: "Retrieval",
    description: "Context-aware fetching",
    details: ["Hybrid dense + sparse", "Cross-encoder re-ranking", "Dynamic top-k"],
  },
  {
    id: "generate",
    label: "Generation",
    description: "LLM response synthesis",
    details: ["Structured prompts", "Citation tracking", "Streaming responses"],
  },
];

interface Experience {
  id: string;
  type: "work" | "project";
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  stack?: string[];
  links?: { github?: string; demo?: string };
  isFeatured?: boolean;
}

const experiences: Experience[] = [
  {
    id: "magi",
    type: "project",
    title: "MAGI - GenAI System",
    organization: "Personal Project",
    period: "2024",
    description: "A retrieval-augmented generation system designed to answer questions over large document corpora.",
    highlights: [
      "Built end-to-end RAG pipeline from ingestion to evaluation",
      "Implemented hybrid retrieval with cross-encoder re-ranking",
      "Designed evaluation framework for retrieval and generation quality",
    ],
    stack: ["Python", "PostgreSQL", "pgvector", "OpenAI API", "FastAPI"],
    links: { github: "https://github.com" },
    isFeatured: true,
  },
  {
    id: "research-intern",
    type: "work",
    title: "ML Research Intern",
    organization: "University AI Lab",
    period: "Summer 2024",
    description: "Contributed to research on evaluation frameworks for language models.",
    highlights: [
      "Developed automated evaluation pipeline for LLM outputs",
      "Implemented multi-dimensional scoring metrics",
      "Co-authored internal technical report",
    ],
    stack: ["Python", "PyTorch", "Weights & Biases"],
  },
  {
    id: "ta",
    type: "work",
    title: "Teaching Assistant",
    organization: "CS Department",
    period: "2023 - Present",
    description: "TA for Introduction to Machine Learning course.",
    highlights: [
      "Conducted weekly office hours and review sessions",
      "Graded assignments and provided detailed feedback",
      "Created supplementary learning materials",
    ],
  },
];

const ExperienceSection = () => {
  const [expandedId, setExpandedId] = useState<string | null>("magi");
  const [activeNode, setActiveNode] = useState<string>("retrieve");

  const activeNodeData = magiNodes.find((n) => n.id === activeNode);

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="tag font-mono text-xs mb-4 inline-block">02</span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl">
            Research, internships, and significant projects in applied ML and AI systems.
          </p>
        </motion.div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated overflow-hidden"
            >
              <button
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                className="w-full p-6 text-left"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 mt-1">
                      {exp.type === "work" ? (
                        <Briefcase className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        {exp.isFeatured && (
                          <span className="tag tag-primary text-xs">Featured</span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {exp.organization} · {exp.period}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {expandedId === exp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-border pt-4">
                      <p className="text-foreground/80 mb-4">{exp.description}</p>
                      
                      {/* MAGI System Diagram */}
                      {exp.id === "magi" && (
                        <div className="mb-6 p-4 bg-secondary/30 rounded-lg">
                          <p className="text-xs font-mono text-muted-foreground mb-4">System Architecture</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {magiNodes.map((node) => (
                              <button
                                key={node.id}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveNode(node.id);
                                }}
                                className={`px-3 py-2 rounded-md text-sm transition-all ${
                                  activeNode === node.id
                                    ? "bg-primary/20 border border-primary/40 text-primary"
                                    : "bg-secondary border border-transparent text-muted-foreground hover:border-border"
                                }`}
                              >
                                {node.label}
                              </button>
                            ))}
                          </div>
                          {activeNodeData && (
                            <motion.div
                              key={activeNodeData.id}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="text-sm"
                            >
                              <p className="text-foreground/80 mb-2">{activeNodeData.description}</p>
                              <ul className="space-y-1">
                                {activeNodeData.details.map((d, i) => (
                                  <li key={i} className="text-muted-foreground flex items-start gap-2">
                                    <span className="text-primary">·</span> {d}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </div>
                      )}

                      <div className="mb-4">
                        <h4 className="text-xs font-mono text-muted-foreground mb-2">Key Contributions</h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((h, i) => (
                            <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                              <span className="text-primary mt-0.5">→</span> {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {exp.stack && (
                        <div className="mb-4">
                          <h4 className="text-xs font-mono text-muted-foreground mb-2">Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.stack.map((tech) => (
                              <span key={tech} className="tag text-xs">{tech}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {exp.links && (
                        <div className="flex gap-3">
                          {exp.links.github && (
                            <a
                              href={exp.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              <Github className="w-4 h-4" /> Code
                            </a>
                          )}
                          {exp.links.demo && (
                            <a
                              href={exp.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" /> Demo
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;