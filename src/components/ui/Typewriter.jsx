import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Typewriter = ({ phrases, speed = 100, wait = 2000, onIndexChange }) => {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (onIndexChange) {
            onIndexChange(index);
        }
    }, [index, onIndexChange]);

    useEffect(() => {
        const currentPhrase = phrases[index];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                setDisplayText(currentPhrase.substring(0, displayText.length + 1));

                if (displayText.length === currentPhrase.length) {
                    setTimeout(() => setIsDeleting(true), wait);
                }
            } else {
                // Deleting
                setDisplayText(currentPhrase.substring(0, displayText.length - 1));

                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, index, phrases, speed, wait]);

    return (
        <span>
            {displayText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "steps(2)" }}
                style={{ borderRight: '3px solid var(--accent-color)', marginLeft: '4px' }}
            />
        </span>
    );
};

export default Typewriter;
