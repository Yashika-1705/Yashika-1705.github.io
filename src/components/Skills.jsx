import { useState } from 'react'

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      icon: '💻',
      tech: ['Python', 'Java', 'JavaScript', 'HTML/CSS', 'C++', 'RISC-V Assembly'],
      color: 'from-cs-blue to-cs-purple',
    },
    {
      category: 'Frameworks/ML',
      icon: '🌐',
      tech: ['React', 'Flask', 'FastAPI', 'LangChain', 'PyTorch', 'TensorFlow', 'Vertex AI'],
      color: 'from-cs-green to-cs-blue',
    },
    {
      category: 'Tools/Cloud/DB',
      icon: '☁️',
      tech: ['Git', 'Docker', 'Linux', 'GCP', 'AWS', 'Kubernetes', 'MySQL', 'ChromaDB', 'FAISS', 'OpenSearch'],
      color: 'from-cs-blue to-cs-green',
    },
  ]

  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="code-block inline-block mb-4">
            <span className="text-cs-green">$ </span>
            <span className="text-white">cat skills.txt</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-mono">
            &lt;Skills/&gt;
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 hover:border-cs-blue-dark/50 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{skill.icon}</span>
                <h3 className="text-xl font-bold text-gray-800 font-mono">
                  {skill.category}
                </h3>
              </div>
              
              <div className="space-y-2">
                {skill.tech.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className={`inline-block mr-2 mb-2 px-3 py-1 rounded-full text-xs font-mono border transition-all ${
                      hoveredIndex === index
                        ? `bg-gradient-to-r ${skill.color} text-white border-transparent`
                        : 'bg-cs-dark/50 border-cs-gray-800 text-gray-800'
                    }`}
                    style={{
                      transitionDelay: `${techIndex * 50}ms`,
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills

