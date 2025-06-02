import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faCertificate, faBriefcase, faGraduationCap, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/Resume.css';

const summary = `Now I'm a passionate Junior Software Engineer with a strong inclination toward backend development and crafting intuitive web experiences. I have hands-on experience with technologies like Python (Django, WebAPI), Java, Node.js, and SQL, which I've used to build scalable backend systems and RESTful APIs. My work also involves integrating cloud-based services for storage, databases, and deployment.

On the frontend, I enjoy translating ideas into clean and user-friendly designs using React.js and modern UI principles. I'm equally comfortable working across the stack, having built full-fledged projects combining backend logic, frontend interfaces, and DevOps workflows.

I've also gained practical knowledge in Docker, Jenkins, Kubernetes, and ServiceNow, and applied these through capsule projects simulating real-world environments. My journey has been shaped by a strong foundation in SDLC, Agile practices, and DevOps, as well as soft skills like collaboration, business storytelling, and presentation techniques.

This blend of technical and soft skills continues to fuel my drive to create impactful, efficient, and well-designed software solutions.`;

const education = [
  {
    degree: 'Bachelors',
    university: 'Dayanand Sagar Academy of Technology and Management',
    branch: 'Information Science and Engineering',
    cgpa: '8.7',
    year: '2020 - 2024',
    details: `I interned at Compsoft Technologies, developing a Health and Wellness Blog aimed at improving the online presence and engagement of individuals through captivating design and advanced functionality.\n1. Compsoft Technologies - Bangalore, India (Aug 2023 - Sep 2023)`
  },
  {
    degree: 'Intermediate',
    university: 'Sri Chaitanya JR Clg',
    branch: 'MPC (Math, Physics and Chemistry)',
    cgpa: '88.4%',
    year: '2018 - 2020',
    details: 'Hyderabad'
  },
  {
    degree: 'Board of Secondary Education',
    university: 'Sri Chaitanya School',
    cgpa: '10 CGPA',
    year: '2018',
    details: ''
  }
];

const workExperience = [
  {
    company: 'Publicis Sapient',
    location: 'Bangalore, India',
    period: 'March 2025 - Current Organization',
    role: '',
    description: 'Currently working with React, Java Spring Boot, microservices architecture, monitoring tools, and CI/CD pipelines.'
  },
  {
    company: 'Varsity Education Management Pvt. Ltd.',
    location: 'Hyderabad, India',
    period: 'August 2024 - February 2025',
    role: 'Junior Software Engineer',
    description: 'As a Junior Software Engineer at Varsity Education Management Pvt. Ltd., I develop web applications using Django for backend services and create RESTful APIs. I actively contribute to testing and fixing bugs to ensure high-quality software delivery. Currently, I am focused on enhancing my knowledge in AI and ML technologies through research and continuous learning.'
  },
  {
    company: 'Compsoft Technologies',
    location: 'Bangalore, India',
    period: 'August 2023 - Sep 2023',
    role: 'Intern',
    description: 'Interned at Compsoft Technologies, built a Health Blog to enhance online presence.'
  }
];

const softSkills = [
  'Collaboration', 'Communication', 'Business Storytelling', 'Email Etiquette', 'Presentation', 'Teamwork', 'Problem-solving', 'Analysis and Insight', 'SDE'
];

const technologies = [
  'Python', 'Java', 'Node.js', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Cloud', 'Linux', 'GitHub', 'ServiceNow', 'Confluence', 'Numpy', 'Pandas', 'Matplotlib', 'Docker', 'Kubernetes', 'Jenkins', 'Prometheus', 'Grafana', 'Loki', 'MySQL', 'MongoDB', 'WebAPI', 'Nodemailer', 'NGINX', 'Airtel APIs'
];

const frameworks = [
  'ReactJS', 'Django Framework', 'Express.js', 'Bootstrap', 'Spring Boot', 'Redux'
];

const certifications = [
  'Udemy - Java Script (2024)',
  'Generative AI By NVIDIA (2024)',
  'Udemy - Django Framework (2024)',
  'CISCO - Programming essential in C++ (2023)',
  'Python - Coursera (2023)',
  'AWS Cloud Foundations - AWS (2023)',
  'CORE JAVA BASICS - UPGRAD (2023)'
];

const awards = [
  {
    name: 'ROOKIE OF THE BATCH (PUBLICIS SAPIENT TRAINING)',
    year: '2025',
    images: ['/IMG_20250525_151410.jpg', '/IMG_5182.JPG'],
    description: 'Recognized for proactively taking diverse tasks, embracing change, and creatively addressing challenges.'
  }
];

const Resume = () => {
  const [darkMode, setDarkMode] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Toggle dark mode (for demonstration, you can move this to App for global effect)
  const handleToggleDark = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <section className={`resume${darkMode ? ' dark' : ''}`} id="resume">
      {/* Animated background placeholder */}
      <div className="animated-bg"></div>
      <div className="container">
        <motion.div
          className="resume-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Resume & Achievements
          </motion.h2>

          <motion.div variants={itemVariants} className="bio">
            <h3>Summary</h3>
            <p style={{ whiteSpace: 'pre-line', color: 'var(--gray-700)' }}>{summary}</p>
          </motion.div>

          <motion.div variants={itemVariants} className="work-experience-section">
            <h3><FontAwesomeIcon icon={faBriefcase} /> Work Experience</h3>
            <div className="timeline">
              {workExperience.map((exp, idx) => (
                <div className="timeline-item" key={idx}>
                  <h4>{exp.company} – {exp.location} <span style={{ float: 'right', fontWeight: 500 }}>{exp.period}</span></h4>
                  {exp.role && <h5>{exp.role}</h5>}
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="education-section">
            <h3>
              <FontAwesomeIcon icon={faGraduationCap} /> Education
            </h3>
            <div className="timeline">
              {education.map((edu, idx) => (
                <div className="timeline-item" key={idx}>
                  <h4>{edu.degree}</h4>
                  <h5>{edu.university}</h5>
                  {edu.branch && <div><b>Branch:</b> {edu.branch}</div>}
                  {edu.cgpa && <div><b>Score:</b> {edu.cgpa}</div>}
                  <p className="date">{edu.year}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="skills">
            <h3>Skills & Technologies</h3>
            <div className="skills-group">
              <div>
                <h4>Soft Skills</h4>
                <div className="skills-grid">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="skill-item"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h4>Technologies</h4>
                <div className="skills-grid">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={index}
                      className="skill-item"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <h4>Frameworks & Libraries</h4>
                <div className="skills-grid">
                  {frameworks.map((fw, index) => (
                    <motion.div
                      key={index}
                      className="skill-item"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{fw}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="certifications-section">
            <h3>
              <FontAwesomeIcon icon={faCertificate} /> Certifications
            </h3>
            <div className="certifications-grid">
              {certifications.map((cert, idx) => (
                <div className="cert-item" key={idx}>{cert}</div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="awards-section">
            <h3>
              <FontAwesomeIcon icon={faAward} /> Awards
            </h3>
            <div className="awards-grid">
              {awards.map((award, idx) => (
                <div className="award-item" key={idx}>
                  <div className="award-images">
                    {award.images.map((img, i) => (
                      <img src={img} alt={award.name} className="award-image" key={i} />
                    ))}
                  </div>
                  <div className="award-content">
                    <h4>{award.name}</h4>
                    <h5>{award.year}</h5>
                    <p className="date">{award.year}</p>
                    <p>{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 