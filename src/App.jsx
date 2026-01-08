import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
