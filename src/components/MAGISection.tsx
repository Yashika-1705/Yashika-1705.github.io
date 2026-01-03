import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

interface DiagramNode {
  id: string;
  label: string;
  description: string;
  details: string[];
}

const nodes: DiagramNode[] = [
  {
    id: "ingest",
    label: "Data Ingestion",
    description: "Multi-format document processing",
    details: [
      "PDF, Markdown, and HTML parsing",
      "Metadata extraction and tagging",
      "Chunking strategy: semantic + fixed-size hybrid",
    ],
  },
  {
    id: "embed",
    label: "Embeddings",
    description: "Dense vector representations",
    details: [
      "Model: text-embedding-3-large",
      "Dimension reduction for efficiency",
      "Batch processing pipeline",
    ],
  },
  {
    id: "vector",
    label: "Vector Store",
    description: "Similarity search infrastructure",
    details: [
      "PostgreSQL + pgvector",
      "HNSW indexing for ANN",
      "Metadata filtering support",
    ],
  },
  {
    id: "retrieve",
    label: "Retrieval",
    description: "Context-aware document fetching",
    details: [
      "Hybrid: dense + sparse retrieval",
      "Re-ranking with cross-encoder",
      "Dynamic top-k selection",
    ],
  },
  {
    id: "generate",
    label: "Generation",
    description: "LLM-powered response synthesis",
    details: [
      "Structured prompting templates",
      "Citation tracking & grounding",
      "Streaming response handling",
    ],
  },
  {
    id: "eval",
    label: "Evaluation",
    description: "Quality & relevance metrics",
    details: [
      "Retrieval precision/recall",
      "Answer faithfulness scoring",
      "A/B testing framework",
    ],
  },
];

const MAGISection = () => {
  const [activeNode, setActiveNode] = useState<string | null>("retrieve");

  const activeData = nodes.find((n) => n.id === activeNode);

  return (
    <section id="magi" className="py-24 md:py-32">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="tag font-mono text-xs mb-4 inline-block">Flagship Project</span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">MAGI</h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            A retrieval-augmented generation system designed to answer questions 
            over large document corpora. Built to explore the full RAG pipeline—from 
            ingestion to evaluation.
          </p>
        </motion.div>

        {/* Interactive Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card-elevated p-6 md:p-8 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Pipeline visualization */}
            <div className="flex-1">
              <p className="text-xs font-mono text-muted-foreground mb-6">
                Click a node to explore
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {nodes.map((node, index) => (
                  <motion.button
                    key={node.id}
                    onClick={() => setActiveNode(node.id)}
                    className={`diagram-node text-left relative ${
                      activeNode === node.id ? "border-primary bg-primary/5" : ""
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-xs font-mono text-muted-foreground block mb-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium text-sm block mb-1">{node.label}</span>
                    <span className="text-xs text-muted-foreground line-clamp-2">
                      {node.description}
                    </span>
                    {activeNode === node.id && (
                      <motion.div
                        layoutId="active-indicator"
                        className="absolute -right-1 top-1/2 -translate-y-1/2"
                      >
                        <ChevronRight className="w-4 h-4 text-primary" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Details panel */}
            <div className="lg:w-80 lg:border-l lg:border-border lg:pl-8">
              {activeData ? (
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-semibold text-lg mb-2">{activeData.label}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {activeData.description}
                  </p>
                  <ul className="space-y-2">
                    {activeData.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">·</span>
                        <span className="text-foreground/80">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <p className="text-muted-foreground text-sm">
                  Select a component to see details
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg text-sm font-medium transition-colors"
          >
            <Github className="w-4 h-4" />
            View Source
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:border-primary/50 rounded-lg text-sm font-medium transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Technical Write-up
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MAGISection;