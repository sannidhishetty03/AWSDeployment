
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Internships />
      <Projects />
      <Activities />
      <Footer />
    </div>
  );
}

export default App;
