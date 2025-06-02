import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faReact, faPython, faNodeJs, faJava, faAws } from '@fortawesome/free-brands-svg-icons';
import '../styles/Home.css';

const typewriterTexts = [
  'Full Stack Developer',
  'DevOps Enthusiast',
  'Cloud & Automation',
  'AI/ML Explorer',
  'Open Source Contributor'
];

const techIcons = [faReact, faPython, faNodeJs, faJava, faAws];

const Home = () => {
  const [typeIndex, setTypeIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 80;
  const pause = 1200;

  useEffect(() => {
    let timeout;
    if (!deleting && charIndex < typewriterTexts[typeIndex].length) {
      timeout = setTimeout(() => {
        setDisplayed(typewriterTexts[typeIndex].substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(typewriterTexts[typeIndex].substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed / 2);
    } else if (!deleting && charIndex === typewriterTexts[typeIndex].length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTypeIndex((typeIndex + 1) % typewriterTexts.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, typeIndex]);

  return (
    <section className="home">
      <div className="container">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="profile-avatar floating-avatar"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, y: [0, -20, 0] }}
            transition={{ delay: 0.2, duration: 3, type: 'spring', repeat: Infinity, repeatType: 'reverse' }}
          >
            <img src="./IMG_2771.jpg" alt="Illuru Yathin Reddy" loading="eager" decoding="async" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Hi, I'm <span className="highlight">Illuru Yathin Reddy</span>
          </motion.h1>
          <motion.h2
            className="typewriter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            {displayed}
            <span className="type-cursor">|</span>
          </motion.h2>
          <motion.p
            className="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
          >
            Passionate about building robust, scalable, and user-centric solutions. Experienced in Python, Django, React, Java, Node.js, DevOps, and cloud. Always learning, always building.
          </motion.p>
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
            <a
              href="https://github.com/Yathin-reddy-10"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yathin-reddy-048120215"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="animated-bg"></div>
      <div className="svg-wave">
        <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#waveGradient)" fillOpacity="1" d="M0,80 C360,180 1080,0 1440,100 L1440,180 L0,180 Z" />
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7f5af0" />
              <stop offset="1" stopColor="#2cb67d" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Home; 