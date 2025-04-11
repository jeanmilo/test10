'use client'
import { useCallback } from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import { useTheme } from '@/components/ThemeProvider'

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  
  const textEnter = useCallback(() => {
    document.body.style.cursor = 'none'
  }, [])
  
  const textLeave = useCallback(() => {
    document.body.style.cursor = 'auto'
  }, [])

  return (
    <div className={theme}>
      <Cursor />
      <Head>
        <title>Claudia Yamamoto</title>
        <meta name="description" content="Portfolio" />
      </Head>

      <Header 
        textEnter={textEnter}
        textLeave={textLeave}
        toggleTheme={toggleTheme}
      />
      
      <main>
        <Hero textEnter={textEnter} textLeave={textLeave} />
        <Projects />
        <About textEnter={textEnter} textLeave={textLeave} />
        <Contact textEnter={textEnter} textLeave={textLeave} />
      </main>

      <Footer />
    </div>
  )
}