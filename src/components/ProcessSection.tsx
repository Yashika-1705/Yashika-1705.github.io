import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
}

const steps: ProcessStep[] = [
  {
    id: "data",
    number: "01",
    title: "Understand the Data",
    description: "Before modeling, I invest time understanding the data's structure, quality, and limitations.",
    details: [
      "Exploratory analysis: distributions, correlations, missing patterns",
      "Domain context: what does each feature actually represent?",
      "Data provenance: how was it collected? What biases might exist?",
      "Define success: what metric matters for this problem?",
    ],
  },
  {
    id: "baseline",
    number: "02",
    title: "Establish Baselines",
    description: "Simple solutions first. Complex models earn their place by beating meaningful baselines.",
    details: [
      "Start with heuristics or rule-based approaches",
      "Implement simple statistical models (linear, tree-based)",
      "Measure baseline performance on held-out data",
      "Document assumptions and failure modes",
    ],
  },
  {
    id: "iterate",
    number: "03",
    title: "Iterate with Purpose",
    description: "Each experiment should test a specific hypothesis. Track everything.",
    details: [
      "Form hypothesis before running experiments",
      "Change one variable at a time when possible",
      "Log experiments: parameters, metrics, observations",
      "Analyze failures—they're often more informative than successes",
    ],
  },
  {
    id: "evaluate",
    number: "04",
    title: "Evaluate Honestly",
    description: "Metrics lie if you let them. Build evaluation that reflects real-world performance.",
    details: [
      "Test on data that represents production distribution",
      "Consider multiple metrics: accuracy alone is rarely enough",
      "Analyze error patterns: where and why does the model fail?",
      "Stress test: edge cases, adversarial inputs, distribution shift",
    ],
  },
  {
    id: "deploy",
    number: "05",
    title: "Deploy & Monitor",
    description: "A model in production is never done. Build for observability and iteration.",
    details: [
      "Define serving constraints: latency, throughput, cost",
      "Implement monitoring: prediction distributions, feature drift",
      "Plan for rollback and gradual rollout",
      "Set up feedback loops for continuous improvement",
    ],
  },
];

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState<string | null>("data");

  return (
    <section id="process" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="tag font-mono text-xs mb-4 inline-block">03</span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">How I Think</h2>
          <p className="text-muted-foreground max-w-2xl">
            My approach to ML problems. Not a rigid framework—more like principles 
            that guide experimentation and decision-making.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8">
          {/* Step list */}
          <div className="space-y-2">
            {steps.map((step) => (
              <motion.button
                key={step.id}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                  activeStep === step.id
                    ? "bg-primary/10 border border-primary/30"
                    : "hover:bg-secondary/50 border border-transparent"
                }`}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-baseline gap-3">
                  <span className={`font-mono text-sm ${
                    activeStep === step.id ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {step.number}
                  </span>
                  <div>
                    <h3 className={`font-medium ${
                      activeStep === step.id ? "text-foreground" : "text-foreground/80"
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 hidden md:block">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Details panel */}
          <div className="card-elevated p-6 md:p-8 min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeStep ? (
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {(() => {
                    const step = steps.find((s) => s.id === activeStep);
                    if (!step) return null;
                    return (
                      <>
                        <div className="flex items-baseline gap-3 mb-4">
                          <span className="text-primary font-mono text-lg">{step.number}</span>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-6">{step.description}</p>
                        <ul className="space-y-3">
                          {step.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start gap-3 text-sm"
                            >
                              <span className="text-primary mt-0.5">→</span>
                              <span className="text-foreground/90">{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </>
                    );
                  })()}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full flex items-center justify-center text-muted-foreground"
                >
                  Select a step to explore
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;