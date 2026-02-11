import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingLines from './components/FloatingLines';

function App() {
  return (
    <>
      <div className="ambient">
        <FloatingLines
          linesGradient={['#ff4d4d', '#F44336']}
          lineCount={[3, 4, 3]}
          lineDistance={[3, 2, 2]}
        />
      </div>

      <Navbar />

      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
