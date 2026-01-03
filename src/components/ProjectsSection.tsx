import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink, Github } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  tradeoffs: string;
  stack: string[];
  links: { github?: string; demo?: string };
}

const projects: Project[] = [
  {
    id: "embeddings-eval",
    title: "Embedding Model Evaluation Framework",
    category: "Research",
    summary: "Systematic comparison of embedding models for domain-specific retrieval tasks.",
    problem: "Off-the-shelf embeddings underperform on technical documentation. Needed a way to benchmark models on custom datasets.",
    approach: "Built a pipeline to generate synthetic query-document pairs, evaluate retrieval metrics (MRR, NDCG), and compare fine-tuned vs. base models.",
    tradeoffs: "Fine-tuning improved precision by 15% but increased inference latency. Opted for quantized models in production.",
    stack: ["Python", "sentence-transformers", "FAISS", "Weights & Biases"],
    links: { github: "https://github.com" },
  },
  {
    id: "ml-pipeline",
    title: "Streaming ML Feature Pipeline",
    category: "Infrastructure",
    summary: "Real-time feature computation for fraud detection model serving.",
    problem: "Batch feature computation caused 15-minute staleness in fraud signals. Needed sub-second feature freshness.",
    approach: "Designed a Kafka-based streaming pipeline with Redis for feature serving. Implemented sliding window aggregations.",
    tradeoffs: "Chose eventual consistency over strong consistency to reduce latency. Added reconciliation jobs for drift detection.",
    stack: ["Apache Kafka", "Redis", "Python", "Docker"],
    links: { github: "https://github.com" },
  },
  {
    id: "llm-eval",
    title: "LLM Output Evaluation Suite",
    category: "Tooling",
    summary: "Automated evaluation framework for measuring LLM response quality.",
    problem: "Manual evaluation of LLM outputs doesn't scale. Needed systematic quality metrics beyond just accuracy.",
    approach: "Implemented multi-dimensional scoring: faithfulness, relevance, coherence. Used LLM-as-judge with calibration.",
    tradeoffs: "LLM-based eval is expensive. Added rule-based pre-filters to reduce evaluation calls by 60%.",
    stack: ["Python", "OpenAI API", "PostgreSQL", "Streamlit"],
    links: { github: "https://github.com", demo: "#" },
  },
  {
    id: "doc-search",
    title: "Semantic Documentation Search",
    category: "Product",
    summary: "Search interface for internal engineering documentation using hybrid retrieval.",
    problem: "Keyword search failed on conceptual queries. Engineers couldn't find relevant docs for implementation patterns.",
    approach: "Combined BM25 with dense retrieval. Added query expansion using LLM-generated related terms.",
    tradeoffs: "Hybrid retrieval increased recall but required careful weight tuning. Built A/B testing for optimization.",
    stack: ["TypeScript", "Next.js", "Elasticsearch", "pgvector"],
    links: { demo: "#" },
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="card-elevated overflow-hidden"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <span className="tag font-mono text-xs mb-3 inline-block">
              {project.category}
            </span>
            <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm">{project.summary}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="mt-1"
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-4 border-t border-border pt-4">
              <div>
                <h4 className="text-xs font-mono text-muted-foreground mb-1">Problem</h4>
                <p className="text-sm text-foreground/90">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-xs font-mono text-muted-foreground mb-1">Approach</h4>
                <p className="text-sm text-foreground/90">{project.approach}</p>
              </div>
              <div>
                <h4 className="text-xs font-mono text-muted-foreground mb-1">Tradeoffs</h4>
                <p className="text-sm text-foreground/90">{project.tradeoffs}</p>
              </div>
              <div>
                <h4 className="text-xs font-mono text-muted-foreground mb-2">Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-gradient-to-b from-background to-card/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="tag font-mono text-xs mb-4 inline-block">04</span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            Selected work focused on ML infrastructure and applied AI systems. 
            Click to expand for reasoning and tradeoffs.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;