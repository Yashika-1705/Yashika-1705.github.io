import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission - you can integrate with a service like EmailJS or a backend
    window.location.href = `mailto:yashika1705@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`
  }

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Yashika-1705', icon: '💻' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yashika-jain', icon: '💼' },
    { name: 'Email', url: 'mailto:yashika1705@gmail.com', icon: '📧' },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-white/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="code-block inline-block mb-4">
            <span className="text-cs-green">$ </span>
            <span className="text-white">connect()</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 font-mono">
            &lt;Contact/&gt;
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-cs-blue-dark font-mono text-sm mb-2">
                  $ name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/80 border border-cs-blue-dark/40 rounded-lg text-gray-800 font-mono focus:border-cs-blue-dark focus:outline-none focus:ring-2 focus:ring-cs-blue-dark/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-cs-blue-dark font-mono text-sm mb-2">
                  $ email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-white/80 border border-cs-blue-dark/40 rounded-lg text-gray-800 font-mono focus:border-cs-blue-dark focus:outline-none focus:ring-2 focus:ring-cs-blue-dark/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-cs-blue-dark font-mono text-sm mb-2">
                  $ message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/80 border border-cs-blue-dark/40 rounded-lg text-gray-800 font-mono focus:border-cs-blue-dark focus:outline-none focus:ring-2 focus:ring-cs-blue-dark/50 transition-all resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-cs-blue to-cs-purple text-white rounded-lg font-mono hover:shadow-lg hover:shadow-cs-blue/50 transition-all transform hover:scale-105"
              >
                $ send_message()
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 font-mono mb-6">
                <span className="text-cs-green"></span> Get in touch
              </h3>
              <div className="space-y-4 text-gray-700/90 font-mono">
                <div className="flex items-start space-x-4">
                  <span className="text-cs-blue-dark">📍</span>
                  <div>
                    <div className="text-cs-blue-dark mb-1 font-semibold">Location</div>
                    <div>Toronto, Ontario, Canada</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-cs-green">📧</span>
                  <div>
                    <div className="text-cs-blue-dark mb-1 font-semibold">Email</div>
                    <a href="mailto:yashika1705@gmail.com" className="hover:text-cs-blue-dark transition-colors">
                      yashika1705@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 font-mono mb-6">
                <span className="text-cs-green"></span> Social Links
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white/60 border border-cs-blue-dark/40 rounded-lg hover:border-cs-blue-dark hover:bg-cs-blue-dark/10 transition-all group"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <span className="text-gray-800 font-mono group-hover:text-cs-blue-dark transition-colors">
                      {link.name}
                    </span>
                    <svg className="w-5 h-5 ml-auto text-cs-blue-dark/60 group-hover:text-cs-blue-dark transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

