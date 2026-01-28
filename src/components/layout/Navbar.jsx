import React from 'react';
import styles from './Navbar.module.css';
import { motion } from 'framer-motion';
import Magnetic from '../ui/Magnetic';

const Navbar = ({ profile }) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Magnetic strength={0.2}>
                    <div className={styles.logo}>
                        {profile.name} <span className={styles.dot}>.</span>
                    </div>
                </Magnetic>
                <ul className={styles.navLinks}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#timeline">Timeline</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li>
                        <Magnetic strength={0.2}>
                            <a href="#contact" className={styles.contactBtn}>Contact</a>
                        </Magnetic>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
