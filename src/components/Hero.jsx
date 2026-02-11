import { motion } from 'framer-motion';
import SplitText from './SplitText';
import SpotlightCard from './SpotlightCard';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <motion.div
                    className="hero-copy"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="eyebrow">React.js Developer , Generative AI Aspirant</p>
                    <SplitText
                        text="Sorab U Rajput"
                        className="hero-title-text"
                        delay={0.2}
                    />
                    <style>{`
            .hero-title-text {
              font-size: clamp(2.8rem, 6vw, 4.2rem);
              font-family: var(--font-serif);
              letter-spacing: 1px;
              margin-bottom: 18px;
              font-weight: 700;
              line-height: 1.1;
            }
          `}</style>

                    <p className="lead">
                        Motivated and tech-savvy graduate with a strong foundation in web development,
                        transitioning into Generative AI. I build clean, responsive UIs and love turning
                        ideas into products that feel fast, modern, and human.
                    </p>
                    <div className="hero-actions">
                        <a className="btn primary" href="mailto:sorabrajput9998@gmail.com">Email Me</a>
                        <a className="btn ghost" href="https://github.com/sorab0961" target="_blank" rel="noreferrer">GitHub</a>
                        <a className="btn ghost" href={`${import.meta.env.BASE_URL}resume.pdf`} download>Download Resume</a>
                    </div>
                    <div className="hero-meta">
                        <span>Gota, Ahmedabad</span>
                        <span>+91 7265028319</span>
                    </div>
                </motion.div>

                <SpotlightCard className="hero-card" spotlightColor="rgba(112, 243, 255, 0.25)">
                    <div className="card-inner">
                        <p className="card-title">Career Goal</p>
                        <p className="card-text">
                            Grow as a skilled React.js Developer, contribute to user-focused digital solutions,
                            and continuously enhance my technical expertise.
                        </p>
                        <div className="tags">
                            <span>ReactJS</span>
                            <span>Next.js</span>
                            <span>Python</span>
                            <span>UI Engineering</span>
                        </div>
                    </div>
                </SpotlightCard>
            </div>
        </section>
    );
};

export default Hero;

