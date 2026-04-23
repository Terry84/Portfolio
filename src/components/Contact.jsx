import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin, Briefcase } from 'lucide-react';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_7ivbovf",        // replace
      "template_gfenuop",       // replace
      {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message,
      },
      "Xg-BocnQvbMqhKWO_"         // replace
    )
    .then(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // reset button after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    })
    .catch((error) => {
      console.error("Email error:", error);
      alert("Failed to send message. Try again.");
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="glass-card p-8 md:p-16 max-w-5xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px]" />
        
        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">
              Let's build a <span className="text-primary">System</span>
            </h2>

            <p className="text-slate-400 mb-10 leading-relaxed">
              Seeking specialized development for your MLM, POS, or educational platform? I'm available for full-cycle development and architectural consulting.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Mail, text: "terrydaniels4184@gmail.com", label: "Email" },
                { icon: Briefcase, text: "Available for Fixed-Price / Monthly", label: "Availability" },
                { icon: MapPin, text: "Nairobi, Kenya", label: "Location" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 glass-card flex items-center justify-center text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-bold">{item.label}</div>
                    <div className="text-slate-200">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input 
                required
                type="text" 
                placeholder="FULL NAME"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full h-14 px-6 bg-slate-900/50 border border-slate-700 rounded-xl focus:border-primary outline-none transition-colors"
              />
            </div>

            <div>
              <input 
                required
                type="email" 
                placeholder="BUSINESS EMAIL"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full h-14 px-6 bg-slate-900/50 border border-slate-700 rounded-xl focus:border-primary outline-none transition-colors"
              />
            </div>

            <div>
              <textarea 
                required
                rows={5}
                placeholder="Project Requirements (Systems Focus)"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full p-6 bg-slate-900/50 border border-slate-700 rounded-xl focus:border-primary outline-none transition-colors resize-none"
              />
            </div>

            <button 
              type="submit"
              disabled={submitted}
              className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                submitted ? 'bg-green-500' : 'bg-primary hover:bg-blue-600'
              }`}
            >
              {submitted ? "Requirements Received!" : "Initialize Project"}
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
