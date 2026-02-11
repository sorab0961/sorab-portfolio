import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        "JavaScript", "Python", "C", "C++", "HTML", "CSS", "Bootstrap", "jQuery",
        "ReactJS", "Next.js", "Flutter", "Supabase", "WordPress", "Odoo", "Git", "GitHub"
    ];

    return (
        <section id="skills" className="section alt">
            <div className="container">
                <motion.div
                    className="section-head"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="eyebrow">Skills</p>
                    <h2>Tools I use to ship fast, polished products.</h2>
                </motion.div>

                <motion.div
                    className="pill-grid"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {skills.map((skill, index) => (
                        <span key={index}>{skill}</span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

