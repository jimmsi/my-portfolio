import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import CV from './components/CV';
import Contact from './components/Contact';
import HeroSection from './components/HeroSection';

const App: React.FC = () => {
    return (
        <div className="scroll-smooth">
            <Navbar />
            <section id="hero-section">
                <HeroSection />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="cv">
                <CV />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
};

export default App;


