const Experience = () => {
  const experiences = [
    {
      title: 'Lead Agentic AI Engineer',
      company: 'Vegas Consulting',
      location: 'Toronto · Remote',
      period: 'Apr 2025 - Present',
      type: 'Contract Part-time',
      responsibilities: [
        'Designed and implemented a multi-agent architecture that transforms high-level requirements into scalable, production-ready AI workflows.',
        'Built a full-stack AI application using Flask and Streamlit on the backend with a ReactJS frontend, including secure Stripe integration.',
        'Developed optimized RAG pipelines using Vertex AI, ChromaDB, and SentenceTransformers, enabling instant document Q&A and reducing projected deployment costs by 40%.',
        'Led LLMOps efforts with Docker and Google Kubernetes Engine (GKE), contributing to CI/CD pipelines through Cloud Build, Git, and Artifact Registry.',
        'Integrated the AI assistant into existing ERP systems via REST APIs and participated in testing cycles to ensure stability, reliability, and performance.',      ],
      skills: ['Agentic AI', 'Google Cloud Platform (GCP)', 'Python', 'ReactJS', 'Docker', 'Kubernetes', 'RAG', 'LLMOps'],
      image: '/images/vegas.jpg',
      color: 'from-cs-green to-cs-blue',
    },
    {
      title: 'Blockchain Software Intern',
      company: 'Collabera',
      location: 'Toronto',
      period: 'May 2022 - Jul 2022',
      type: 'Internship',
      responsibilities: [
        'Mastered AWS Cloud stack, Linux, Go programming, Docker, and Blockchain/IoT concepts through hands-on development',
        'Designed and architected Blockchain & IoT use cases for cloud deployment, contributing innovative solutions to technical discussions',
        'Gained comprehensive understanding of healthcare business requirements and revenue cycle management workflows',
        'Led design of Healthcare Revenue Cycle Management MVP as a key team contributor, translating business needs into technical specifications',
        'Developed and deployed the MVP on AWS Managed Blockchain Cloud Environment, demonstrating end-to-end cloud architecture skills'
      ],
      skills: [],
      image: '/images/collabera.png',
      color: 'from-cs-purple to-cs-green',
    },
    {
      title: 'Mathnasium Instructor',
      company: 'Mathnasium',
      location: 'Toronto',
      period: 'Jul 2023 - Nov 2023',
      type: 'Part-time',
      responsibilities: [
        'Taught foundational and advanced math concepts to 40+ students; developed individualized strategies to improve problem-solving and logical thinking'
    ],
      skills: [],
      image: '/images/Mathnasium_Logo.jpg',
      color: 'from-cs-blue to-cs-purple',
    },
  ]

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="code-block inline-block mb-4">
            <span className="text-cs-green">$ </span>
            <span className="text-white">cat experience.json</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-mono">
            &lt;Experience/&gt;
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden hover:border-cs-blue-dark/50 transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-12 gap-0">
                {/* Image Section */}
                <div className="md:col-span-3 relative h-48 md:h-full overflow-hidden bg-cs-dark/50">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-9 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl font-bold text-gray-800 font-mono">
                        {exp.title}
                      </h3>
                    </div>
                    <span className="text-cs-blue-dark/70 font-mono text-xs px-3 py-1 bg-cs-blue-dark/15 rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  
                  <p className="text-cs-blue-dark font-mono text-sm mb-2 font-semibold">
                    {exp.company}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-xs text-cs-purple font-mono mb-4">
                    <span>{exp.period}</span>
                    {exp.location && <span className="text-black">📍 {exp.location}</span>}
                  </div>
                  
                  {exp.description && (
                    <p className="text-gray-700/90 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                  )}

                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-cs-black font-mono text-sm mb-2 font-semibold">Key Responsibilities & Accomplishments:</h4>
                      <ul className="space-y-2 text-gray-700/90 text-sm">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-cs-black mr-2">-</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="px-3 py-1 bg-white/60 border border-cs-blue-dark/40 rounded-full text-xs font-mono text-cs-blue-dark"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fun CS Reference */}
        <div className="mt-12 text-center">
          <div className="code-block inline-block">
            <span className="text-cs-green">$ </span>
            <span className="text-gray-300/80">echo "Always learning, always building"</span>
            <br />
            <span className="text-white ml-4">Always learning, always building</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

