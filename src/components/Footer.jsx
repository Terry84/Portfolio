import React from 'react';
import { Github, Linkedin, Twitter, Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-800 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-2 text-slate-500 font-bold mb-8">
          <Terminal size={20} />
          <span>FULLSTACK DEVELOPER</span>
        </div>
        
        <div className="flex justify-center gap-6 mb-8 text-slate-400">
          <a href="https://github.com/Terry84" className="hover:text-primary transition-colors"><Github size={24} /></a> 
        </div>
        
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Terry Kibugi. Designed for Architecture Built for Performance.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
