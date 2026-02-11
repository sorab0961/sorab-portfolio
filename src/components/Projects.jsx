import { motion } from 'framer-motion';
import ElectricBorder from './ElectricBorder';

const Projects = () => {
    const projects = [
        {
            title: "Weather App",
            tag: "ReactJS",
            desc: "Dynamic weather forecast app consuming OpenWeather APIs.",
            link: "#contact", // Original link
            isExternal: false
        },
        {
            title: "Tic-Tac-Toe Game",
            tag: "HTML / CSS / JS",
            desc: "Interactive browser-based game with animations and logic.",
            link: "#contact",
            isExternal: false
        },
        {
            title: "OTT Website Clone",
            tag: "Front-End",
            desc: "Modern OTT landing clone with layout and UI interactions.",
            link: "https://github.com/sorab0961/PROJECT2.git",
            isExternal: true
        },
        {
            title: "Chat Application",
            tag: "React + Node",
            desc: "Real-time messaging app built with Rocket.Chat integration.",
            link: "#contact",
            isExternal: false
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.div
                    className="section-head"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="eyebrow">Projects</p>
                    <h2>Selected work focused on clean UI and real-time experiences.</h2>
                </motion.div>

                <div className="cards">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ height: '100%' }}
                        >
                            <ElectricBorder
                                className="project-card"
                                borderRadius={18}
                                color="#70F3FF" // Cyan to match theme
                            >
                                <div className="project-top">
                                    <h3>{project.title}</h3>
                                    <span className="chip">{project.tag}</span>
                                </div>
                                <p>{project.desc}</p>
                                <a
                                    className="link"
                                    href={project.link}
                                    target={project.isExternal ? "_blank" : undefined}
                                    rel={project.isExternal ? "noreferrer" : undefined}
                                >
                                    {project.isExternal ? "GitHub repo" : "View project"}
                                </a>
                            </ElectricBorder>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
