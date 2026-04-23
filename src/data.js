import { 
  Building2, 
  ShoppingCart, 
  Network, 
  Database, 
  ShieldCheck, 
  Code2, 
  Layout, 
  Server,
  Layers
} from 'lucide-react';

export const HERO_CONTENT = {
  name: "Terry Kibugi",
  roles: [
    "Systems Architect",
    "MLM Logic Specialist",
    "Full-Stack Developer",
    "POS Expert",
    "LMS Engineer"
  ],
  bio: "Engineering high-availability, scalable systems architecture for complex business operations. Expert in multi-level compensation logic, real-time inventory synchronization, and distributed educational platforms."
};

export const PROJECTS = [
  {
    id: 1,
    title: "Global MLM Engine 2.0",
    category: "MLM Systems",
    description: "A robust multi-level marketing platform featuring dynamic compensation plan engine supporting Binary, Unilevel, and Matrix structures.",
    features: [
      "Real-time commission calculations",
      "Interactive genealogical tree view",
      "Automated e-wallet withdrawals",
      "Lead management & landing pages"
    ],
    image: " https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["Python + FastAPI", "PostgreSQL", "React", "WebSockets"],
    icon: Network
  },
  {
    id: 2,
    title: "ShuleSmart LMS",
    category: "School Systems",
    description: "A Learning Management System (LMS) designed specifically for the Kenyan Competency-Based Curriculum (CBC) to support students, teachers, and mentors with digital learning, assessments, and skill development.",
    features: [
      "Course Management",
      "CBC competency Tracking",
      "Assessment and Quizzes",
      "Students Perfomance Analytics",
      "Mentorship Module.",
      "Digital Skills Learning"
    ],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "PostgreSQL", "Flask", "AWS"],
    icon: Building2
  },
  {
    id: 3,
    title: "Carwash system",
    category: "POS Systems",
    description: "Cloud-native Point of Sale system with offline-first capabilities for retail and restaurant franchises.",
    features: [
      "Multi-store inventory sync",
      "Offline transactions with auto-sync",
      "Kitchen Display System (KDS)",
      "Employee performance analytics"
    ],
    image: "https://images.unsplash.com/photo-1647427017067-8f33ccbae493?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["React Native", "Firebase", "Node.js", "Redux"],
    icon: ShoppingCart
  }
];

export const SKILLS = [
  { name: "System Architecture", level: 95, icon: Layers },
  { name: "Backend Logic (Node/flask)", level: 90, icon: Server },
  { name: "Database Optimization", level: 88, icon: Database },
  { name: "Security Protocols", level: 85, icon: ShieldCheck },
  { name: "API Development", level: 92, icon: Code2 },
  { name: "UI/UX for Enterprise", level: 80, icon: Layout }
];

export const EXPERIENCE = [
  {
    id: 1,
    title: "LMS Platform Design",
    project: "ShuleSmart LMS",
    date: "Present"
  },
  {
    id: 2,
    title: "Full-Stack Web Application",
    project: "Expense Tracker",
    TechStack: "React, Flask, PostgreSQL",
    date: "2026"
  },
  {
    id: 3,
    title: "Business Management System",
    project: "Carwash system",
    TechStack: "HTML/CSS/JS, Flask, MySQL",
    date: "2025"
  }
];