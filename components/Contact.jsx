import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiFeather, FiBook, FiInstagram } from 'react-icons/fi'


export default function Contact({ textEnter, textLeave }) {
  
  return (
    <section id="contact" className="py-20 bg-secondary/30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-text mr-4">Contact</h2>
          <div className="flex-1 h-px bg-[var(--text-secondary)]/30"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
          <div 
            className='titlee'
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}> 
            <h3 className="text-2xl font-bold text-[var(--accent-secondary)] mb-4">
            <div style={{ textDecorationLine: 'line-through' }}>Hello, World!</div>
            Hello, Dia!
            </h3>
          </div>
            <p className="text-[var(--text-secondary)] mb-8">
              Whether you have a question or just want to say hi, 
              I'll do my best to get back to you!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:claudia.parlee@gmail.com"
                className="flex items-center text-[var(--text)]hover:text-[var(--accent)] transition-colors"
              >
                <FiMail className="mr-3" size={20} />
                email me 
              </a>
              <a 
                href="https://claudias.online/"
                className="flex items-center text-[var(--text)] hover:text-[var(--accent-secondary)] transition-colors"
              >
                <FiFeather className="mr-3" size={20} />
                check out my blog
              </a>
              <a 
                href="https://claudias.online/"
                className="flex items-center text-[var(--text)] hover:text-[var(--accent)] transition-colors"
              >
                <FiBook className="mr-3" size={20} />
                view my resume here
              </a>
            </div>

            <div onMouseEnter = {textEnter} onMouseLeave={textLeave} className="inline-flex space-x-4 mt-8">
              {[
                {
                  icon: <FiGithub size={24} />,
                  url: 'https://github.com/jeanmilo',
                },
                {
                  icon: <FiLinkedin size={24} />,
                  url: 'https://linkedin.com/in/claudia-yamamoto',
                },
                {
                  icon: <FiInstagram size={24} />,
                  url: 'https://instagram.com/adoni.x',
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text)]hover:text-saccent transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}