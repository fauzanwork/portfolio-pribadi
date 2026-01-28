import React from 'react';
import Navbar from './components/layout/Navbar';
import SideNav from './components/layout/SideNav';
import AmbientBackground from './components/layout/AmbientBackground';
import Cursor from './components/ui/Cursor';
import Hero from './components/sections/Hero';
import Timeline from './components/sections/Timeline';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Footer from './components/layout/Footer';
import portfolioData from './config/portfolio.json';

function App() {
  return (
    <div className="app">
      <Cursor />
      <SideNav />
      <AmbientBackground />
      <Navbar profile={portfolioData.profile} />
      <Hero profile={portfolioData.profile} />
      <Timeline events={portfolioData.timeline} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Footer profile={portfolioData.profile} />
    </div>
  );
}

export default App;
