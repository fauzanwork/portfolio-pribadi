import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = ({ profile }) => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.info}>
                        <h2 className={styles.title}>Let's connect</h2>
                        <p className={styles.desc}>Currently based in {profile.location}. Open to freelance opportunities and technical discussions.</p>
                    </div>
                    <div className={styles.socials}>
                        <a href={`mailto:${profile.email}`} title="Email"><Mail /></a>
                        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" title="LinkedIn"><Linkedin /></a>
                        <a href={profile.socials.github} target="_blank" rel="noreferrer" title="Github"><Github /></a>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
