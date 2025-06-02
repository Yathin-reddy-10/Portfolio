import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';
import { DarkModeContext } from '../App';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const handleToggleDark = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Yathin Reddy
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Dark Mode Toggle */}
        <button
          className="btn btn-secondary dark-toggle-btn"
          onClick={handleToggleDark}
          aria-label="Toggle dark mode"
          style={{ marginLeft: '1rem' }}
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <Link to="/" onClick={toggleMenu}>Home</Link>
              <Link to="/about" onClick={toggleMenu}>About</Link>
              <Link to="/projects" onClick={toggleMenu}>Projects</Link>
              <Link to="/resume" onClick={toggleMenu}>Resume</Link>
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
              <button
                className="btn btn-secondary dark-toggle-btn"
                onClick={() => { handleToggleDark(); toggleMenu(); }}
                aria-label="Toggle dark mode"
                style={{ marginTop: '1rem' }}
              >
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                {darkMode ? ' Light' : ' Dark'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar; 