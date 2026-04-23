import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const Icon = project.icon;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-card overflow-hidden group flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60" />
        <div className="absolute top-4 left-4 glass-card px-3 py-1 text-xs font-bold text-primary flex items-center gap-1">
          <Icon size={14} />
          {project.category}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-6 flex-1">
          {project.description}
        </p>
        
        <div className="space-y-2 mb-6">
          {project.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-300 text-xs">
              <CheckCircle2 size={12} className="text-primary flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 text-[10px] uppercase font-bold text-slate-400 bg-slate-900 border border-slate-700 rounded-md">
              {t}
            </span>
          ))}
        </div>
        
        <button className="mt-6 w-full py-3 glass-card text-sm font-semibold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
          Explore Architecture
          <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
