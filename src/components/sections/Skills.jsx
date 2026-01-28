import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';
import Magnetic from '../ui/Magnetic';

const Skills = ({ skills }) => {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Expertise
                </motion.h2>

                <div className={styles.grid}>
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={styles.skillCard}
                        >
                            <h3 className={styles.groupName}>{skillGroup.name}</h3>
                            <div className={styles.skillList}>
                                {skillGroup.items.map(skill => (
                                    <Magnetic key={skill} strength={0.2}>
                                        <span className={styles.skillItem}>{skill}</span>
                                    </Magnetic>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
