import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Tools from './components/Tools'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white" style={{ width: '1920px', margin: '0 auto' }}>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Tools />
      <Contact />
    </div>
  )
}
