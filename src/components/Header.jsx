import { useState, useEffect } from 'react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-cs-blue/20' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-mono font-bold">
            <span className="text-cs-blue">&lt;</span>
            <span className="text-gradient">YashikaJain</span>
            <span className="text-cs-blue">/&gt;</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-cs-blue transition-colors font-mono text-sm relative group"
                >
                  <span className="text-cs-green"># </span>
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cs-blue group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-cs-blue focus:outline-none"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-cs-blue transition-colors font-mono text-sm w-full text-left"
                >
                  <span className="text-cs-green"># </span>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header

