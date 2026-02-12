import { motion } from 'framer-motion';
import { Code2, Shield, Cpu, Terminal, Sparkles, Globe, Laptop, Smartphone, Database, Box } from 'lucide-react';
import { useState } from 'react';

const Sections = ({ activeSection }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoUrl = `mailto:kissbranel@gmail.com?subject=${encodeURIComponent(formData.subject || 'Contact Portfolio')}&body=${encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoUrl;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 pb-40 space-y-32 md:space-y-40">
            {/* About Section */}
            <section id="about" className="relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-[2px] w-8 bg-cyber" />
                            <h2 className="text-3xl font-bold uppercase tracking-widest">A propos de moi</h2>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-6 md:p-8 rounded-3xl space-y-6"
                        >
                            <p className="text-base md:text-lg text-white/80 leading-relaxed text-justify md:text-left">
                                Étudiant en MIA, passionné par le full stack, la cybersécurité, la robotique et l'électronique.
                                Autodidacte, curieux et rapide à apprendre. J'étudie aussi l'anglais pour mieux maîtriser les ressources tech.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <InfoItem label="Localisation" value="Gbegamey lot 605" />
                                <InfoItem label="Langues" value="Français, Anglais" />
                                <InfoItem label="Spécialité" value="Innovation Tech" />
                                <InfoItem label="Objectif" value="Solutions Utiles" />
                            </div>
                        </motion.div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-[2px] w-8 bg-cyber" />
                            <h2 className="text-3xl font-bold uppercase tracking-widest">Parcours</h2>
                        </div>
                        <div className="space-y-4">
                        <TimelineItem
                                year="2026"
                                title="Développement Mobile – Niveau Avancé"
                                subtitle="Organisation Internationale de la Francophonie (OIF) – D-CLIC"
                                detail="Formation professionnalisante de 60h en Flutter & Dart (UI avancées, Firebase, API REST, gestion d’état, optimisation, tests). Attestation obtenue le 3 février 2026."
                            />
                            <TimelineItem
                                year="2025"
                                title="NASA International Space Apps Challenge – Galactic Problem Solver"
                                subtitle="NASA Space Apps Challenge"
                                detail="Certificat de participation pour contribution exceptionnelle. Global Nominee au niveau international (October 4–5, 2025)."
                            />

                            <TimelineItem
                                year="2025"
                                title="Initiation à la Programmation Python & Machine Learning"
                                subtitle="Bénin Excellence / Fondation Vallet"
                                detail="Formation au laboratoire d’intelligence artificielle : bases Python, manipulation de données, introduction au Machine Learning. Octobre 2024 – Juin 2025."
                            />


                            <TimelineItem
                                year="2025"
                                title="Bac + 1 Maths Info Appliquée"
                                subtitle="Université d'Abomey-Calavi"
                                detail="FACULTE DES SCIENCES ET TECHNIQUES"
                            />
                              <TimelineItem
                                year="2025"
                                title="Bac + 1 ANGLAIS"
                                subtitle="Université d'Abomey-Calavi"
                                detail="FACULTE DES LETTRES LANGUES ARTS ET COMMUNICATION"
                            />
                            <TimelineItem
                                year="2023"
                                title="Bac C Mention Abien"
                                subtitle="Baccalauréat Scientifique"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Grid */}
            <section id="skills">
                <div className="flex items-center gap-3 mb-12">
                    <span className="h-[2px] w-8 bg-cyber" />
                    <h2 className="text-3xl font-bold uppercase tracking-widest text-center">Insignes de Compétences</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <SkillCard
                        icon={Code2}
                        title="Dev Web & Apps"
                        skills={["HTML", "CSS", "JS","C", "React", "Python", "Flutter"]}
                        color="text-blue-400"
                    />
                    <SkillCard
                        icon={Shield}
                        title="Cybersécurité"
                        skills={["Hacking Éthique", "Linux", "Réseaux", "Sécurité"]}
                        color="text-emerald-400"
                    />
                    <SkillCard
                        icon={Cpu}
                        title="Robotique"
                        skills={["Arduino", "Électronique", "IoT", "Capteurs"]}
                        color="text-purple-400"
                    />
                </div>
            </section>

            {/* Work Section */}
            <section id="work">
                <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-3">
                        <span className="h-[2px] w-8 bg-cyber" />
                        <h2 className="text-3xl font-bold uppercase tracking-widest">Projets Majeurs</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ProjectCard
                        title="SPAGIA"
                        tags={["Robotics", "IoT", "C++"]}
                        desc="Système intelligent de détection d'incendie/gaz avec alerte instantanée."
                        icon={Sparkles}
                    />
                    <ProjectCard
                        title="Mini-apps Web & Mobile"
                        tags={["React", "Flutter", "Python"]}
                        desc="Série d'applications utilitaires développées en autodidacte."
                        icon={Smartphone}
                    />
                    <ProjectCard
                        title="Maintenance & Réparations"
                        tags={["Hardware", "OS", "Diagnostic"]}
                        desc="Expertise en diagnostic et réparation hardware/software composants."
                        icon={Laptop}
                    />
                    <ProjectCard
                        title="IA & Automatisation"
                        tags={["Python", "ML", "Git"]}
                        desc="Analyse de données et automatisation de tâches avec l'IA."
                        icon={Database}
                    />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="relative overflow-hidden px-2 md:px-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10 max-w-2xl mx-auto glass p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border-2 border-white/5"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-black mb-4">LANCER UNE CONNEXION</h2>
                        <p className="text-white/40 text-sm md:text-base">Disponible pour des projets innovants et collaborations technologiques.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <HUDInput 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="NOM" 
                                required
                            />
                            <HUDInput 
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="VOTRE EMAIL" 
                                required
                            />
                        </div>
                        <HUDInput 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="SUJET" 
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-white/10 p-4 md:p-6 rounded-2xl focus:border-cyber outline-none min-h-[120px] md:min-h-[150px] transition-all text-sm"
                            placeholder="MESSAGE DE TRANSMISSION..."
                            required
                        />
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full bg-white text-black py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-cyber transition-all text-sm md:text-base"
                        >
                            Envoyer Message
                        </motion.button>
                    </form>
                </motion.div>
            </section>
        </div>
    );
};

const InfoItem = ({ label, value }) => (
    <div>
        <p className="text-[10px] uppercase tracking-widest font-bold text-cyber mb-1">{label}</p>
        <p className="text-white font-medium">{value}</p>
    </div>
);

const TimelineItem = ({ year, title, subtitle, detail }) => (
    <div className="glass p-6 rounded-2xl border-l-4 border-l-cyber">
        <span className="text-cyber font-mono font-bold">{year}</span>
        <h3 className="text-xl font-bold mt-1 uppercase tracking-tight">{title}</h3>
        <p className="text-white/60 text-sm mt-1">{subtitle}</p>
        {detail && <p className="text-white/40 text-[10px] font-mono mt-2 uppercase">{detail}</p>}
    </div>
);

const SkillCard = ({ icon: Icon, title, skills, color }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
        viewport={{ once: true }}
        className="glass p-6 md:p-8 rounded-[2rem] border-b-4 border-b-transparent hover:border-b-cyber transition-all duration-500"
    >
        <Icon className={`${color} mb-4 md:mb-6`} size={32} md:size={40} />
        <h3 className="text-lg md:text-xl font-black uppercase tracking-widest mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map(s => (
                <span key={s} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] md:text-xs font-mono text-white/50">{s}</span>
            ))}
        </div>
    </motion.div>
);

const ProjectCard = ({ title, tags, desc, icon: Icon }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        viewport={{ once: true }}
        className="group relative glass p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-cyber/30 transition-all duration-500"
    >
        <div className="absolute top-0 right-0 p-4 md:p-8 text-white/5 group-hover:text-cyber/20 transition-all">
            <Icon size={80} md:size={120} />
        </div>
        <div className="relative z-10">
            <div className="flex gap-2 mb-4">
                {tags.map(t => (
                    <span key={t} className="text-[8px] px-2 py-1 border border-white/20 rounded-full font-mono uppercase text-white/40">{t}</span>
                ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-black mb-3">{title}</h3>
            <p className="text-sm md:text-base text-white/50 leading-relaxed mb-6">{desc}</p>
            <button className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-cyber">
                Détails Projet <Terminal size={14} />
            </button>
        </div>
    </motion.div>
);

const HUDInput = (props) => (
    <input
        {...props}
        className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl focus:border-cyber outline-none transition-all font-mono text-sm"
    />
);

export default Sections;
