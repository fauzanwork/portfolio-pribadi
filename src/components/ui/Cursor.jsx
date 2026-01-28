import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import styles from './Cursor.module.css';

const Cursor = () => {
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX - 10);
            mouseY.set(e.clientY - 10);
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            className={styles.cursor}
            style={{
                x: mouseX,
                y: mouseY,
            }}
        />
    );
};

export default Cursor;
