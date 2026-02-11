import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="section alt">
            <div className="container">
                <motion.div
                    className="section-head"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="eyebrow">Experience</p>
                    <h2>Hands-on internship building real-world systems.</h2>
                </motion.div>

                <motion.div
                    className="timeline"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div>
                            <h3>Website Handling Intern , Jainwell Pvt. LLP</h3>
                            <p className="muted">45 Days</p>
                            <p>Managed website content using Odoo ERP, improved layout and functionality, and learned ERP module handling with a focus on user-friendly design.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
