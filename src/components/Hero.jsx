import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../data';
import { ChevronDown, Cpu, Globe, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="section-padding relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 glass-card text-primary text-xs font-bold tracking-widest uppercase">
            Available for Enterprise Solutions
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            I craft complex <br />
            <span className="text-primary tracking-normal">
              <Typewriter
                words={HERO_CONTENT.roles}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
            {HERO_CONTENT.bio}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="px-8 py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-primary/25">
            View Case Studies
          </a>
          <a href="#contact" className="px-8 py-4 glass-card hover:bg-slate-700/60 transition-all rounded-xl font-bold">
            Start a Project
          </a>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Cpu, count: "50+", label: "Systems Deployed" },
         
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + (i * 0.1) }}
              className="glass-card p-6 flex items-center gap-4"
            >
              <stat.icon className="text-primary" size={32} />
              <div className="text-left">
                <div className="text-2xl font-bold">{stat.count}</div>
                <div className="text-slate-400 text-sm italic">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 cursor-pointer"
        onClick={() => {
           document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
