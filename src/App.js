import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Portfolio_preview from './components/portfolio/Portfolio_preview';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';




function App() {
  return (
    <div className="App">

      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section >
        <Parallax />
      </section>

      <section id="Services">
        <Services />
      </section>

      <section id="Portfolio">
      <Parallax />
        {/* <Portfolio_preview /> */}
      </section>

      <Portfolio />

      <section id="About">
        <About />
      </section>

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
