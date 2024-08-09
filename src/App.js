import React from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';




function App() {
  return (
    <div className="App">
      <section id="Homepage">
        <Navbar/>
        <Hero/>
      </section>

      <section id="Services">
        <Parallax />
      </section>

      <section>
        <Services />
      </section>

      <Portfolio id="Portfolio"/>

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
