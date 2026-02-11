import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <motion.div
                    className="section-head"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="eyebrow">About</p>
                    <h2>Design-forward developer with a builder mindset.</h2>
                </motion.div>

                <motion.div
                    className="about-grid"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p>
                        I am a BCA graduate with hands-on experience building React apps, web clones, and
                        full-stack projects. I care about clean UI, meaningful animations, and delivering
                        intuitive experiences. I am currently deepening my AI knowledge to merge smart
                        systems with beautiful interfaces.
                    </p>
                    <div className="stat-grid">
                        <div className="stat">
                            <h3>8.65</h3>
                            <p>CGPA (BCA)</p>
                        </div>
                        <div className="stat">
                            <h3>45 Days</h3>
                            <p>Internship at Jainwell</p>
                        </div>
                        <div className="stat">
                            <h3>4+</h3>
                            <p>Featured Projects</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
