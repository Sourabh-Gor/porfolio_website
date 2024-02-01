import React from 'react';
import Image from 'next/image';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import About from './components/About';
import ProjectsSection from './components/ProjectSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import AchievementsSection from './components/AchievementsSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <style>{`
        html {
          scroll-behavior: smooth;
          
        }
      `}</style>
      <Navbar />
      <div className='container mx-auto px-12 py-4 mt-24'>
        <HeroSection />
        <AchievementsSection/>
        <About/>
        <ProjectsSection/>
        <EmailSection/>
        <Footer/>
      </div>
    </main>
  );
}
