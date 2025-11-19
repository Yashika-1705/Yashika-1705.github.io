import { useState, useEffect } from 'react'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Hello, World! I'm Yashika Jain"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setShowCursor(false)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Terminal Style Text */}
          <div className="space-y-6">
            <div className="code-block">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-white text-xs font-mono">terminal</span>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div>
                  <span className="text-cs-green">$ </span>
                  <span className="text-white">whoami</span>
                </div>
                <div className="text-white ml-4">
                  {typedText}
                  {showCursor && <span className="terminal-cursor text-cs-blue-dark">|</span>}
                </div>
                <div className="mt-4">
                  <span className="text-cs-green">$ </span>
                  <span className="text-white">cat about.txt</span>
                </div>
                <div className="text-white/80 ml-4 leading-relaxed">
                  <p className="mt-2">
                    I'm a <span className="text-cs-blue-dark font-semibold">third-year Computer Science and Statistics student</span> at the{' '}
                    <span className="text-cs-purple font-semibold">University of Toronto</span> with a passion for solving challenges through technology.
                  </p>
                  <p className="mt-2">
                    I specialize in <span className="text-cs-green font-semibold">AI, Machine Learning</span>, and hands-on projects, blending innovation with creativity.
                  </p>
                </div>
                <div className="mt-4">
                  <span className="text-cs-green">$ </span>
                  <span className="text-white">ls skills/</span>
                </div>
                <div className="text-cs-yellow ml-4">
                  ai ml python react javascript cloud aws
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/images/Yashika_Jain.pdf"
                download
                className="px-6 py-3 bg-gradient-to-r from-cs-blue to-cs-purple text-white rounded-lg font-mono hover:shadow-lg hover:shadow-cs-blue/50 transition-all transform hover:scale-105"
              >
                $ download resume.pdf
              </a>
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 border-2 border-cs-blue-dark text-cs-blue-dark rounded-lg font-mono hover:bg-cs-blue-dark/10 transition-all"
              >
                $ view experience
              </button>
            </div>
          </div>

          {/* Right: Profile Image with Code Animation */}
          <div className="relative">
            <div className="relative z-10">
              <div className="glass rounded-2xl p-4 relative overflow-hidden">
                <img
                  src="/images/grad.jpeg"
                  alt="Yashika Jain"
                  className="rounded-xl w-full h-auto shadow-2xl"
                />
              </div>
            </div>
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cs-blue/20 via-cs-purple/20 to-cs-green/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

