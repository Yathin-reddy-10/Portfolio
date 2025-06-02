import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGitAlt, faPython, faJava, faAws, faDocker, faJenkins, faGithub, faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCloud, faCogs, faAward, faCertificate, faBrain, faFlask, faLaptopCode, faPenNib } from '@fortawesome/free-solid-svg-icons';
import '../styles/About.css';

const skills = [
  { icon: faPython, name: 'Python' },
  { icon: faReact, name: 'ReactJS' },
  { icon: faJava, name: 'Java' },
  { icon: faNodeJs, name: 'Node.js' },
  { icon: faHtml5, name: 'HTML5' },
  { icon: faCss3Alt, name: 'CSS3' },
  { icon: faJs, name: 'JavaScript' },
  { icon: faDatabase, name: 'SQL/MySQL' },
  { icon: faDocker, name: 'Docker' },
  { icon: faJenkins, name: 'Jenkins' },
  { icon: faCloud, name: 'Cloud/AWS' },
  { icon: faGitAlt, name: 'Git' },
  { icon: faCogs, name: 'DevOps' },
];

const certifications = [
  "Udemy - Java Script (2024)",
  "Generative AI By NVIDIA (2024)",
  "Udemy - Django Framework (2024)",
  "CISCO - Programming essential in C++ (2023)",
  "Python - Coursera (2023)",
  "AWS Cloud Foundations - AWS (2023)",
  "CORE JAVA BASICS - UPGRAD (2023)"
];

const awards = [
  "ROOKIE OF THE BATCH (PUBLICIS SAPIENT TRAINING) 2025"
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="about" id="about">
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants}>About Me</motion.h2>
          <motion.div variants={itemVariants} className="bio">
            <p>
              I am a passionate Junior Software Engineer with a strong focus on backend and full stack development. I love building robust, scalable, and user-centric web applications using Python (Django), Java, Node.js, and SQL. My experience spans designing RESTful APIs, integrating cloud services, and delivering clean, maintainable code.
            </p>
            <p>
              On the frontend, I enjoy translating ideas into intuitive and modern interfaces with React.js and best UI/UX practices. I thrive in collaborative environments, value teamwork, and am always eager to learn new technologies and contribute to impactful projects.
            </p>
            <p>
              <b>GitHub:</b> <a href="https://github.com/Yathin-reddy-10" target="_blank" rel="noopener noreferrer">Yathin-reddy-10</a> &nbsp;|&nbsp;
              <b>LinkedIn:</b> <a href="https://www.linkedin.com/in/yathin-reddy-048120215" target="_blank" rel="noopener noreferrer">yathin-reddy-048120215</a>
            </p>
          </motion.div>

          {/* What I'm Doing Section */}
          <motion.div variants={itemVariants} className="what-im-doing" style={{ margin: '3rem 0' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary-color)' }}>What I'm Doing</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              <div className="doing-card" style={{ background: 'var(--background-glass)', borderRadius: 18, padding: '2rem', boxShadow: '0 4px 24px #7f5af022', color: 'var(--text-color)' }}>
                <span style={{ fontSize: 32, color: '#fbbf24', marginBottom: 12, display: 'inline-block' }}><FontAwesomeIcon icon={faLaptopCode} /></span>
                <h4 style={{ fontWeight: 700, marginBottom: 8 }}>Web Development</h4>
                <p>Delivering modern, user-centric web solutions with a focus on clean design, seamless functionality, and cutting-edge technology for an exceptional online experience.</p>
              </div>
              <div className="doing-card" style={{ background: 'var(--background-glass)', borderRadius: 18, padding: '2rem', boxShadow: '0 4px 24px #7f5af022', color: 'var(--text-color)' }}>
                <span style={{ fontSize: 32, color: '#fbbf24', marginBottom: 12, display: 'inline-block' }}><FontAwesomeIcon icon={faBrain} /></span>
                <h4 style={{ fontWeight: 700, marginBottom: 8 }}>Machine Learning & Artificial Intelligence (AI)</h4>
                <p>Building intelligent systems powered by advanced machine learning algorithms and AI, transforming complex data into actionable insights and innovative solutions.</p>
              </div>
              <div className="doing-card" style={{ background: 'var(--background-glass)', borderRadius: 18, padding: '2rem', boxShadow: '0 4px 24px #7f5af022', color: 'var(--text-color)' }}>
                <span style={{ fontSize: 32, color: '#fbbf24', marginBottom: 12, display: 'inline-block' }}><FontAwesomeIcon icon={faFlask} /></span>
                <h4 style={{ fontWeight: 700, marginBottom: 8 }}>Research And Development (R&D)</h4>
                <p>Driving innovation through in-depth research and groundbreaking projects, advancing technology to create impactful, real-world applications.</p>
              </div>
              <div className="doing-card" style={{ background: 'var(--background-glass)', borderRadius: 18, padding: '2rem', boxShadow: '0 4px 24px #7f5af022', color: 'var(--text-color)' }}>
                <span style={{ fontSize: 32, color: '#fbbf24', marginBottom: 12, display: 'inline-block' }}><FontAwesomeIcon icon={faPenNib} /></span>
                <h4 style={{ fontWeight: 700, marginBottom: 8 }}>Technical Writing & Publications</h4>
                <p>Crafting clear, insightful technical documentation and research publications that effectively communicate complex ideas to diverse audiences.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={skill.icon} />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="certifications">
            <h3><FontAwesomeIcon icon={faCertificate} /> Certifications</h3>
            <ul>
              {certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="awards">
            <h3><FontAwesomeIcon icon={faAward} /> Awards</h3>
            <ul>
              {awards.map((award, idx) => (
                <li key={idx}>{award}</li>
              ))}
            </ul>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div variants={itemVariants} className="testimonials-section" style={{ margin: '3rem 0' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary-color)' }}>Testimonials</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
              <div className="testimonial-card" style={{ background: 'var(--background-glass)', borderRadius: 18, padding: '2rem', boxShadow: '0 4px 24px #7f5af022', color: 'var(--text-color)' }}>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>Ravi</div>
                <div style={{ color: '#fbbf24', fontWeight: 600, marginBottom: 6 }}>Senior Python Developer, Varsity</div>
                <div style={{ fontStyle: 'italic', color: 'var(--gray-600)' }}>'Yathin is a quick learner and a reliable teammate. His backend and automation skills are top-notch.'</div>
              </div>
              <div className="testimonial-card" style={{ background: 'var(--background-glass)', borderRadius: 18, padding: '2rem', boxShadow: '0 4px 24px #7f5af022', color: 'var(--text-color)' }}>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>Mohan</div>
                <div style={{ color: '#fbbf24', fontWeight: 600, marginBottom: 6 }}>Frontend React Developer, Varsity</div>
                <div style={{ fontStyle: 'italic', color: 'var(--gray-600)' }}>'He brings UI ideas to life with React and always helps the team with frontend best practices.'</div>
              </div>
              <div className="testimonial-card" style={{ background: 'var(--background-glass)', borderRadius: 18, padding: '2rem', boxShadow: '0 4px 24px #7f5af022', color: 'var(--text-color)' }}>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>Mohan</div>
                <div style={{ color: '#fbbf24', fontWeight: 600, marginBottom: 6 }}>Backend Developer (Django), Varsity</div>
                <div style={{ fontStyle: 'italic', color: 'var(--gray-600)' }}>'Yathin's API and integration work is robust and well-documented.'</div>
              </div>
              <div className="testimonial-card" style={{ background: 'var(--background-glass)', borderRadius: 18, padding: '2rem', boxShadow: '0 4px 24px #7f5af022', color: 'var(--text-color)' }}>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>Surya</div>
                <div style={{ color: '#fbbf24', fontWeight: 600, marginBottom: 6 }}>Publicis Sapient</div>
                <div style={{ fontStyle: 'italic', color: 'var(--gray-600)' }}>'Rookie of the batch! Yathin gives 100%, is always first to demo, and shares knowledge with the team.'</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 