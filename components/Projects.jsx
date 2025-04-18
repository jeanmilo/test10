import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'

const projects = [
  {
    title: 'Code Learning Platform',
    description: 'Working on a free platform for kids (and anyone else) to learn how to code. It\'s still in early development, and is my latest personal project.',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'MySQL'],
    github: 'https://github.com/jeanmilo/coder-diaries/',
    image: '/images/project1.jpg',
  },
  {
    title: 'Guitar Web App',
    description: 'Inspired by my own needs/wants, I built an all-in-one web app for guitarists. It includes a metronome, customizable guitar tuner, and a chord library.',
    tags: ['React.js', 'Tailwind CSS'],
    github: 'https://github.com/jeanmilo/guitar-and-me',
    image: '/images/project2.jpg',
  },
  {
    title: 'My Curriculums',
    description: 'The coding curriculums that I designed, hosted on my blog. They are designed to be fun and engaging, while also teaching students the fundamentals of coding.',
    tags: ['Scratch', 'Python', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/jeanmilo/jeanmilo.github.io',
    live: 'https://claudias.online/cresources',
    image: '/images/project3.jpg',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-text mr-4">Projects</h2>
          <div className="flex-1 h-px bg-[var(--text-secondary)]/30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gray-300 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--text-secondary)] overflow-hidden mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text hover:text-accent transition-colors"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text hover:text-accent transition-colors"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
