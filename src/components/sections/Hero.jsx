import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import Magnetic from '../ui/Magnetic';
import Typewriter from '../ui/Typewriter';

const Hero = ({ profile }) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const getFontSize = (text) => {
        const length = text ? text.length : 0;
        if (length > 30) return 'clamp(2.2rem, 7vw, 3.5rem)'; // Long
        if (length > 20) return 'clamp(2.6rem, 8vw, 4.2rem)'; // Medium
        return 'clamp(3rem, 10vw, 5.5rem)';                 // Short
    };

    return (
        <section id="about" className={styles.hero}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={styles.content}
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className={styles.greeting}
                    >
                        Hi, I’m {profile.name.split(' ')[0]}
                    </motion.p>
                    <div className={styles.headlineWrapper}>
                        <motion.h1
                            animate={{
                                fontSize: getFontSize(profile.headline[currentIndex])
                            }}
                            transition={{ duration: 0.4 }}
                            className={styles.headline}
                        >
                            <Typewriter
                                phrases={profile.headline}
                                onIndexChange={setCurrentIndex}
                            />
                        </motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className={styles.subtext}
                    >
                        {profile.about}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className={styles.cta}
                    >
                        <Magnetic>
                            <a href="#projects" className={styles.primaryBtn}>
                                View Projects
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="#contact" className={styles.secondaryBtn}>
                                Get in Touch
                            </a>
                        </Magnetic>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                    className={styles.imageContainer}
                >
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className={styles.imageFrame}
                    >
                        <div className={styles.placeholderImg}>
                            {profile.image ? (
                                <img
                                    src={profile.image}
                                    alt={profile.name}
                                    className={styles.profileImg}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = '<span class="' + styles.photoHint + '">[Photo Not Found]</span>';
                                    }}
                                />
                            ) : (
                                <span className={styles.photoHint}>[Your Photo Here]</span>
                            )}
                        </div>
                        <motion.div
                            animate={{
                                rotate: [0, 8, 0],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className={styles.accentBox}
                        ></motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className={styles.scrollIndicator}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className={styles.scrollMouse}
                >
                    <div className={styles.scrollWheel}></div>
                </motion.div>
                <span>Scroll to explore</span>
            </motion.div>
        </section>
    );
};

export default Hero;
