import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SideNav.module.css';

const sections = [
    { id: 'about', label: 'About' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
];

const SideNav = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // Show Nav
            setIsVisible(true);

            // Clear existing timeout
            if (timeoutRef.current) clearTimeout(timeoutRef.current);

            // Hide after 2 seconds of inactivity
            timeoutRef.current = setTimeout(() => {
                setIsVisible(false);
            }, 2000);

            // Logic for active section
            const scrollPosition = window.scrollY + 200;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Initial check for mobile/hover
        const handleMouseMove = (e) => {
            if (e.clientX > window.innerWidth - 100) {
                setIsVisible(true);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className={styles.sideNav}
                    onMouseEnter={() => {
                        setIsVisible(true);
                        if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    }}
                    onMouseLeave={() => {
                        timeoutRef.current = setTimeout(() => setIsVisible(false), 2000);
                    }}
                >
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            className={`${styles.navItem} ${activeSection === section.id ? styles.active : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <span className={styles.dot}></span>
                            <span className={styles.label}>{section.label}</span>
                        </a>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SideNav;
