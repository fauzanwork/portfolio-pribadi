import React from 'react';
import { motion } from 'framer-motion';
import styles from './AmbientBackground.module.css';

const AmbientBackground = () => {
    return (
        <div className={styles.container}>
            <motion.div
                animate={{
                    x: [0, 120, 0],
                    y: [0, 60, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className={styles.blob1}
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 120, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className={styles.blob2}
            />
            <motion.div
                animate={{
                    x: [0, 60, 0],
                    y: [0, -90, 0],
                    scale: [1, 1.25, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className={styles.blob3}
            />
        </div>
    );
};

export default AmbientBackground;
