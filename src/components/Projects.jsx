import { useState } from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'EduGuideBot',
      description: 'An intelligent chatbot that provides personalized academic guidance using OpenAI LLM, LangChain, FAISS, and Vector DB. Built with Python and Streamlit, it delivers accurate, real-time responses through retrieval-augmented generation.',
      tech: ['Python', 'OpenAI', 'LangChain', 'FAISS', 'Streamlit', 'Vector DB'],
      image: '/images/eduguidebot.png',
      github: 'https://github.com/Yashika-1705',
      color: 'from-cs-blue to-cs-purple',
    },
    {
      title: 'MeetingMind',
      description: 'AI-powered meeting assistant that transforms audio into actionable insights. Leverages Google Cloud\'s Vertex AI and Natural Language API to convert meeting audio into concise summaries, extract tasks, and analyze participant sentiment.',
      tech: ['Python', 'Google Cloud', 'Vertex AI', 'NLP API', 'Audio Processing'],
      image: '/images/meetingmindlogo.jpg',
      github: 'https://github.com/Yashika-1705',
      color: 'from-cs-purple to-cs-green',
    }
  ]

  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="projects" className="py-20 px-6 bg-cs-dark/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="code-block inline-block mb-4">
            <span className="text-cs-green">$ </span>
            <span className="text-white">ls projects/</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-mono">
            &lt;Projects /&gt;
          </h2>
          <p className="text-white/60 font-mono text-sm">
            // Code that solves real-world problems
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass rounded-2xl overflow-hidden transition-all duration-500 transform ${
                hoveredIndex === index ? 'scale-105 border-cs-blue/50' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative overflow-hidden h-64 md:h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                </div>

                {/* Project Details */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-cs-green font-mono text-sm">#</span>
                      <h3 className="text-2xl font-bold text-white font-mono">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-white/70 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-cs-dark/50 border border-cs-blue/30 rounded-full text-xs font-mono text-cs-blue"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-lg font-mono hover:shadow-lg hover:shadow-cs-blue/50 transition-all w-fit`}
                  >
                    <span>$ git clone</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

