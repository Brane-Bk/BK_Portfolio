import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Shield, Cpu, Code2 } from 'lucide-react';
import { useRef } from 'react';

const Hero = ({ activeSection, setActiveSection }) => {
    const containerRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth movement for parallax
    const springConfig = { damping: 25, stiffness: 150 };
    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), springConfig);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-20 px-4 md:px-8 overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={containerRef}
        >
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center lg:text-left"
                >
                    <div className="mb-6 flex items-center justify-center lg:justify-start gap-3">
                        <span className="h-[2px] w-12 bg-cyber" />
                        <span className="text-cyber font-mono text-xs md:text-sm tracking-[0.3em] uppercase">System Online // v2.0.26</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black mb-6 leading-none tracking-tighter">
                        BRANEL<br />
                        <span className="text-gradient drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">ACCROMBESSY</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-white/60 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Créateur technologique autodidacte. Spécialisé en
                        <span className="text-white font-bold px-1">Web Fullstack</span>,
                        <span className="text-white font-bold px-1">Cybersécurité</span> et
                        <span className="text-white font-bold px-1">Robotique</span>.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                setActiveSection('work');
                                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-cyber text-cyber-bg px-6 md:px-8 py-3 md:py-4 rounded-full font-bold uppercase tracking-widest flex items-center gap-3 text-sm md:text-base"
                        >
                            Explorer les Projets
                            <Cpu size={20} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-white/20 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold uppercase tracking-widest flex items-center gap-3 text-sm md:text-base"
                        >
                            CV / Profile
                            <Shield size={20} />
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                    style={{ rotateX, rotateY, perspective: 1000 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    {/* Main Visual - Interactive Effect */}
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
                        <motion.div
                            whileHover={{ rotate: 180, scale: 1.1 }}
                            className="absolute inset-0 border-2 border-dashed border-cyber/30 rounded-full transition-colors duration-500 group-hover:border-cyber/60"
                        />
                        <motion.div
                            whileHover={{ rotate: -180, scale: 1.15 }}
                            className="absolute -inset-4 border border-cyber/10 rounded-full"
                        />

                        <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-cyber/50 p-2 glow-shadow bg-cyber-bg/50">
                            <img
                                src="images/me.jpg"
                                alt="Branel Accrombessy"
                                className="w-full h-full object-cover rounded-full mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 group-hover:scale-105"
                                onError={(e) => {
                                    e.target.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800";
                                }}
                            />
                            {/* Scanning line triggers only on hover */}
                            <motion.div
                                initial={{ top: "-10%" }}
                                whileHover={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-1 bg-cyber/50 shadow-[0_0_15px_rgba(0,212,255,1)] z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                            />
                        </div>

                        {/* Interactive floating items - move with parallax */}
                        <FloatingBadge icon={Shield} text="Security" className="-top-4 -left-4" mouseX={mouseX} mouseY={mouseY} factor={-0.1} />
                        <FloatingBadge icon={Code2} text="Code" className="bottom-0 -right-4 md:-right-8" mouseX={mouseX} mouseY={mouseY} factor={0.15} />
                        <FloatingBadge icon={Cpu} text="Robotics" className="top-1/2 -right-8 md:-right-12" mouseX={mouseX} mouseY={mouseY} factor={0.08} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const FloatingBadge = ({ icon: Icon, text, className, mouseX, mouseY, factor = 0.1 }) => {
    const tx = useSpring(useTransform(mouseX, [-300, 300], [-30 * factor, 30 * factor]));
    const ty = useSpring(useTransform(mouseY, [-300, 300], [-30 * factor, 30 * factor]));

    return (
        <motion.div
            style={{ x: tx, y: ty }}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            className={`absolute glass p-3 md:p-4 rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-3 z-20 cursor-pointer ${className}`}
        >
            <div className="bg-cyber/20 p-1.5 md:p-2 rounded-lg">
                <Icon size={18} className="text-cyber" />
            </div>
            <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold font-mono text-white/80">{text}</span>
        </motion.div>
    );
};

export default Hero;
