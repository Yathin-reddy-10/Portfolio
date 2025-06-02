import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './styles/App.css';
import { createContext, useState, useMemo, useEffect } from 'react';
import Particles from '@tsparticles/react';

export const DarkModeContext = createContext();

function AppContent() {
  const location = useLocation();
  return (
    <>
      {/* Only show Navbar if not on landing page */}
      {location.pathname !== '/' && <Navbar />}
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

function App() {
  // Force dark mode on initial load
  const [darkMode, setDarkMode] = useState(true);
  const value = useMemo(() => ({ darkMode, setDarkMode }), [darkMode]);

  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

  return (
    <DarkModeContext.Provider value={value}>
      <Router>
        <div className={darkMode ? 'app dark-mode' : 'app'}>
          <Particles
            id="tsparticles"
            options={{
              background: { color: { value: darkMode ? '#18181b' : '#f8fafc' } },
              fpsLimit: 60,
              interactivity: {
                events: {
                  onClick: { enable: true, mode: 'push' },
                  onHover: { enable: true, mode: 'repulse' },
                  resize: true
                },
                modes: {
                  push: { quantity: 2 },
                  repulse: { distance: 80, duration: 0.4 }
                }
              },
              particles: {
                color: { value: darkMode ? '#06b6d4' : '#6366f1' },
                links: {
                  color: darkMode ? '#06b6d4' : '#6366f1',
                  distance: 120,
                  enable: true,
                  opacity: 0.3,
                  width: 1.2
                },
                collisions: { enable: true },
                move: {
                  direction: 'none',
                  enable: true,
                  outModes: { default: 'bounce' },
                  random: false,
                  speed: 1.2,
                  straight: false
                },
                number: { density: { enable: true, area: 800 }, value: 40 },
                opacity: { value: 0.4 },
                shape: { type: 'circle' },
                size: { value: { min: 2, max: 5 } }
              },
              detectRetina: true
            }}
            style={{ position: 'fixed', zIndex: 0 }}
          />
          <AppContent />
        </div>
      </Router>
    </DarkModeContext.Provider>
  );
}

export default App;
