import React from 'react';
import { PROJECTS, EXPERIENCE } from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

function App() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <Navbar />
      
      <Hero />

      {/* Projects Section */}
      <section id="projects" className="section-padding overflow-hidden">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Industrial Grade <span className="text-primary">Systems</span></h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Battle-tested architectures built to process millions of records and handle complex business logic without downtime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-slate-900/30">
        <h2 className="text-4xl font-bold mb-16 text-center">Development <span className="text-primary">Timeline</span></h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-[1fr,2px,2fr] gap-10 items-center">
                <div className="md:text-right text-primary font-bold">{exp.title}</div>
                <div className="hidden md:block w-full h-full bg-slate-800 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-slate-900" />
                </div>
                <div className="glass-card p-6">
                  <div className="text-lg font-bold mb-1">{exp.project}</div>
                  <div className="text-slate-500 font-medium mb-3">{exp.TechStack}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Skills />
      
      <Contact />

      <Footer />
    </main>
  );
}

export default App;
