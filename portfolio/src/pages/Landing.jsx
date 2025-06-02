import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useRef, useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faPython, faJs, faGithub, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faCloud, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import '../styles/Landing.css';
import portfolioImage from '../assets/3d-portfolio.png';

// Matrix rain effect as a full-page canvas overlay (subtle)
function MatrixRain() {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    const fontSize = 18;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);
    function draw() {
      ctx.fillStyle = 'rgba(10, 18, 10, 0.10)'; // more subtle
      ctx.fillRect(0, 0, width, height);
      ctx.font = fontSize + 'px monospace';
      ctx.fillStyle = '#00ff41cc';
      for (let i = 0; i < drops.length; i++) {
        // Use binary numbers (0 or 1) instead of Chinese letters
        const text = Math.random() > 0.5 ? '0' : '1';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > height && Math.random() > 0.985) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return <canvas ref={canvasRef} className="matrix-rain-canvas" />;
}

// Animated code lines for the laptop screen
const codeLines = [
  'const user = "Illuru Yathin Reddy";',
  'function buildPortfolio() {',
  '  return (',
  '    <ProLevelDeveloper',
  '      skills={["React", "Three.js", "Node.js", "Python"]}',
  '      projects={myProjects}',
  '      hireMeNow',
  '    />',
  '  );',
  '}',
  'console.log("Welcome to my portfolio!");',
];

function AnimatedCode({}) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % codeLines.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="laptop-code-overlay">
      {Array(7).fill(0).map((_, i) => {
        const line = codeLines[(offset + i) % codeLines.length];
        return (
          <div key={i} className="code-line">{line}</div>
        );
      })}
    </div>
  );
}

function AnimatedBGImage({ textureUrl }) {
  const group = useRef();
  const texture = useLoader(TextureLoader, portfolioImage);
  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    // Subtle floating and parallax
    group.current.position.y = Math.sin(t) * 0.08;
    group.current.rotation.x = -0.12 + (mouse.y * 0.08);
    group.current.rotation.y = (mouse.x * 0.12);
  });
  return (
    <group ref={group}>
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[8, 2.8]} />
        <meshStandardMaterial map={texture} transparent />
      </mesh>
    </group>
  );
}

// Animated SVG wave overlay
function AnimatedWave() {
  return (
    <svg className="landing-svg-wave" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="waveGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7f5af0" />
          <stop offset="1" stopColor="#2cb67d" />
        </linearGradient>
      </defs>
      <path fill="url(#waveGradient)" fillOpacity="0.18" d="M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z" />
    </svg>
  );
}

// Floating tech icons (FontAwesome SVGs)
const techIcons = [
  faReact, faNodeJs, faPython, faJs, faGithub, faHtml5, faCss3Alt, faCloud, faLaptopCode
];
function FloatingTechIcons() {
  return (
    <div className="floating-tech-icons">
      {techIcons.map((icon, i) => (
        <span
          key={i}
          className={`floating-tech-icon floating-tech-icon-${i}`}
          style={{ left: `${10 + i * 9}%`, top: `${10 + (i % 2) * 60}%` }}
        >
          <FontAwesomeIcon icon={icon} />
        </span>
      ))}
    </div>
  );
}

const Landing = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);
  return (
    <section className={`landing landing-bg3d${darkMode ? ' dark' : ''}`}>
      <div className="landing-bg3d-canvas">
        <Canvas camera={{ position: [0, 0, 4.5], fov: 38 }} style={{ position: 'absolute', inset: 0, width: '100vw', height: '100vh', zIndex: 1, pointerEvents: 'none' }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 4, 2]} intensity={1.2} />
          <AnimatedBGImage textureUrl={"3d-portfolio.png"} />
        </Canvas>
        <div className="landing-bg-blur" />
        <MatrixRain />
        <AnimatedWave />
        <FloatingTechIcons />
      </div>
      <div className="landing-bg3d-content">
        <div className="landing-glass-card glass-card landing-glass-minimal landing-fadein">
          <h1 className="landing-title landing-fadein">
            Welcome to my <span className="landing-highlight">Portfolio</span>
          </h1>
          <h2 className="landing-subtitle landing-fadein">
            Hi, I'm <span className="landing-highlight">Illuru Yathin Reddy</span>
          </h2>
          <button
            className="btn btn-primary landing-btn landing-fadein"
            onClick={() => navigate('/home')}
          >
            View Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing; 