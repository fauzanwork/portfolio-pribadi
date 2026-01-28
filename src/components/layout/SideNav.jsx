import React, { useEffect, useState } from 'react';
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
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
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
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.sideNav}>
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
        </div>
    );
};

export default SideNav;
