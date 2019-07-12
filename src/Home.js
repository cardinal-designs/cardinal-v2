import React from 'react';
import Hero from './Hero';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
