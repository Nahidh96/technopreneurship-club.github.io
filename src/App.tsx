import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Events } from './components/Events';
import { Team } from './components/Team';
import { Resources } from './components/Resources';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Events />
        <Team />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>;
}