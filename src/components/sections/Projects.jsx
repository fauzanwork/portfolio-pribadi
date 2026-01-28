import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText } from 'lucide-react';
import styles from './Projects.module.css';

const Projects = ({ projects }) => {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Selected Works
                </motion.h2>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 80,
                                damping: 15,
                                delay: index * 0.15
                            }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={styles.card}
                        >
                            <div className={styles.imageWrapper}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className={styles.imagePlaceholder}
                                >
                                    <span>{project.title}</span>
                                </motion.div>
                            </div>

                            <div className={styles.info}>
                                <span className={styles.category}>{project.category}</span>
                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.desc}>{project.description}</p>

                                <div className={styles.tags}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>

                                <div className={styles.links}>
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" rel="noreferrer" title="Github">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.links.demo && (
                                        <a href={project.links.demo} target="_blank" rel="noreferrer" title="Live Demo">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                    {project.links.docs && (
                                        <a href={project.links.docs} target="_blank" rel="noreferrer" title="Documentation">
                                            <FileText size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
