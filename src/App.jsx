import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, Cpu, Code2, Mail, ExternalLink, ChevronDown, User, Briefcase, FileText } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Sections from './components/Sections';

function App() {
    const [activeSection, setActiveSection] = useState('hero');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="relative min-h-screen bg-cyber-bg selection:bg-cyber/30 selection:text-cyber-light">
            {/* Cinematic Background */}
            <div
                className="fixed inset-0 z-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: 'url(/cyber_bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <div className="fixed inset-0 z-10 bg-gradient-to-b from-sky-950/20 via-cyber-bg to-cyber-bg pointer-events-none" />

            {/* HUD Lines Overlay */}
            <div className="fixed inset-0 z-20 pointer-events-none opacity-10">
                <div className="absolute top-0 left-0 w-full h-px bg-cyber" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-cyber" />
                <div className="absolute left-[5%] top-0 w-px h-full bg-cyber" />
                <div className="absolute right-[5%] top-0 w-px h-full bg-cyber" />
            </div>

            <AnimatePresence>
                {isLoaded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="relative z-30"
                    >
                        <Hero activeSection={activeSection} setActiveSection={setActiveSection} />
                        <Sections activeSection={activeSection} />

                        {/* Global Navigation - HUD Style */}
                        <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 p-2 glass rounded-2xl z-50">
                            {[
                                { id: 'hero', icon: Terminal, label: 'Home' },
                                { id: 'about', icon: User, label: 'About' },
                                { id: 'work', icon: Briefcase, label: 'Work' },
                                { id: 'contact', icon: Mail, label: 'Contact' }
                            ].map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveSection(item.id);
                                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${activeSection === item.id
                                            ? 'bg-cyber text-cyber-bg scale-105 shadow-[0_0_15px_rgba(0,212,255,0.5)]'
                                            : 'text-white/60 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <item.icon size={18} />
                                    <span className="hidden md:block text-xs font-bold uppercase tracking-widest">{item.label}</span>
                                </button>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
