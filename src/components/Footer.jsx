const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4 font-mono">
              &lt;YashikaJain /&gt;
            </h3>
            <p className="text-white/60 font-mono text-sm">
              Building the future, one line of code at a time.
            </p>
          </div>
          <div>
            <h4 className="text-cs-blue font-mono mb-4">Quick Links</h4>
            <ul className="space-y-2 font-mono text-sm text-white/60">
              <li>
                <a href="#home" className="hover:text-cs-blue transition-colors">Home</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cs-blue transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cs-blue transition-colors">Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cs-blue transition-colors">Experience</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-cs-blue font-mono mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Yashika-1705"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-cs-blue transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/yashika-jain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-cs-blue transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="code-block text-center">
            <span className="text-cs-green">$ </span>
            <span className="text-white">echo "© {currentYear} Yashika Jain"</span>
            <br />
            <span className="text-cs-blue ml-4">
              © {currentYear} Yashika Jain. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

