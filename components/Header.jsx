'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'
import Link from 'next/link'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Header({ darkMode, toggleTheme, textEnter, textLeave }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/90 backdrop-blur-sm py-2 shadow-lg' : 'py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo - Left aligned */}
          <div className="flex-shrink-0">
            <Link 
              href="#home" 
              className="text-accent font-bold text-md sm:text-md md:text-lg"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              <span className="hidden sm:inline">C: Yamamoto</span>
              <span className="sm:hidden">CY</span>
            </Link>
          </div>

          {/* Centered Navigation */}
          <nav className="absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex space-x-4 md:space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm md:text-base hover:text-accent transition-colors"
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle - Right aligned */}
          <div className="flex-shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
              {darkMode ? (
                <FiSun className="text-accent" size={20} />
              ) : (
                <FiMoon className="text-accent" size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}