import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Timeline.module.css';

const Timeline = ({ events }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="timeline" className={styles.timeline}>
            <div className={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    My Journey
                </motion.h2>

                <div className={styles.timelineWrapper} ref={containerRef}>
                    <div className={styles.mainLine}>
                        <motion.div
                            style={{ scaleY }}
                            className={styles.lineProgress}
                        />
                    </div>

                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`${styles.item} ${index % 2 === 0 ? styles.left : styles.right}`}
                        >
                            <div className={styles.content}>
                                <span className={styles.year}>{event.year}</span>
                                <h3 className={styles.title}>{event.title}</h3>
                                <h4 className={styles.org}>{event.organization}</h4>
                                <p className={styles.desc}>{event.description}</p>
                                <span className={styles.typeTag}>{event.type}</span>
                            </div>
                            <motion.div
                                animate={index === 0 ? {
                                    scale: [1, 1.3, 1],
                                    boxShadow: [
                                        "0 0 0 0px rgba(74, 144, 226, 0.4)",
                                        "0 0 0 12px rgba(74, 144, 226, 0)",
                                        "0 0 0 0px rgba(74, 144, 226, 0)"
                                    ]
                                } : {}}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className={styles.dot}
                            ></motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
