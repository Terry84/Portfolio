import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">
            Technical <span className="text-primary">Ecosystem</span>
          </h2>
          <p className="text-slate-400 mb-8 max-w-lg leading-relaxed">
            Building complex systems requires more than just coding. It requires a deep understanding of data flows, operational logic, and high-concurrency architectures.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {['Reliability', 'Scalability', 'Integrity', 'Precision'].map((text) => (
               <div key={text} className="flex items-center gap-2 text-sm font-medium text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {text}
               </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <Icon className="text-primary" size={18} />
                    <span className="font-semibold text-slate-200">{skill.name}</span>
                  </div>
                  <span className="text-primary text-sm font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-accent"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
