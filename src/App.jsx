import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading for terminal effect
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-cs-dark flex items-center justify-center">
        <div className="text-center">
          <div className="code-block inline-block mb-4">
            <span className="text-cs-green">$ </span>
            <span className="text-cs-blue">loading portfolio...</span>
            <span className="terminal-cursor"></span>
          </div>
          <div className="text-cs-blue/50 text-sm font-mono">
            Initializing system...
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cs-dark">
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

