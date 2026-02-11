import { motion } from 'framer-motion';

const Education = () => {
    return (
        <>
            <section id="education" className="section">
                <div className="container">
                    <motion.div
                        className="section-head"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="eyebrow">Education</p>
                        <h2>Academic foundation in computer applications.</h2>
                    </motion.div>

                    <div className="edu-grid">
                        {[
                            { title: "Bachelor of Computer Applications", subtitle: "Silver Oak College of Computer Application, Silver Oak University", meta: "CGPA 8.65 , 2024" },
                            { title: "H.S.C. , GSEB", subtitle: null, meta: "65.93% , 2020" },
                            { title: "S.S.C. , GSEB", subtitle: null, meta: "63.83% , 2018" }
                        ].map((edu, index) => (
                            <motion.div
                                className="edu-card"
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3>{edu.title}</h3>
                                {edu.subtitle && <p>{edu.subtitle}</p>}
                                <p className="muted">{edu.meta}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section alt">
                <div className="container">
                    <motion.div
                        className="section-head"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="eyebrow">Certifications</p>
                        <h2>Continuous learning in modern web stacks.</h2>
                    </motion.div>

                    <motion.div
                        className="pill-grid"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <span>MERN Stack Development , Tech Amdavad LLP</span>
                        <span>ReactJS & Front-End Development Courses</span>
                        <span>Odoo Basics Training</span>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Education;
