import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.div
                    className="contact-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div>
                        <p className="eyebrow">Let's Connect</p>
                        <h2>Open for React and AI-focused opportunities.</h2>
                        <p className="lead">Reach out for collaborations, internships, or freelance work.</p>
                    </div>
                    <div className="contact-actions">
                        <form className="contact-form" action="https://formspree.io/f/mwvqgazr" method="post">
                            <div className="form-row">
                                <input type="text" name="name" placeholder="Your name" required />
                                <input type="email" name="email" placeholder="Email address" required />
                            </div>
                            <input type="text" name="subject" placeholder="Subject" />
                            <textarea name="message" rows="4" placeholder="Tell me about your project..." required></textarea>
                            <button className="btn primary" type="submit">Send Message</button>
                        </form>
                        <div className="contact-links">
                            <a className="btn ghost" href="mailto:sorabrajput9998@gmail.com">sorabrajput9998@gmail.com</a>
                            <a className="btn ghost" href="tel:+917265028319">Call: +91 7265028319</a>
                            <a className="btn ghost" href="https://github.com/sorab0961" target="_blank" rel="noreferrer">GitHub</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
