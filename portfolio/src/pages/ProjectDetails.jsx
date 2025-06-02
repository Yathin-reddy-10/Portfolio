import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faExternalLinkAlt, faPlayCircle, faImages } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Projects.css';

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  if (!project) {
    return (
      <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <h2>Project not found</h2>
        <button className="btn btn-secondary" onClick={() => navigate(-1)} style={{marginTop: '2rem'}}>Back</button>
      </div>
    );
  }

  return (
    <section className="projects" style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '4rem' }}>
      <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
        <button className="btn btn-secondary" onClick={() => navigate(-1)} style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: 8 }}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
        <motion.div
          className="modal-content glass-card"
          style={{ width: '100%', maxWidth: '100%', margin: '0 auto', textAlign: 'left', padding: '2.5rem 2rem' }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
        >
          <h2 style={{ color: 'var(--primary-color)', fontWeight: 800, fontSize: '2.5rem', marginBottom: '1.5rem', textAlign: 'center' }}>{project.title}</h2>
          <img src={project.image} alt={project.title} className="modal-image" style={{ display: 'block', margin: '0 auto 2rem auto', maxWidth: '500px', width: '100%' }} />
          <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Project Overview</h3>
          <p style={{ fontSize: '1.15rem', marginBottom: '1.5rem' }}>{project.details}</p>
          <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Key Features</h3>
          <ul style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
            {project.features.map((f, i) => (
              <li key={i} style={{ marginBottom: 8 }}>• {f}</li>
            ))}
          </ul>
          <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Tech Stack</h3>
          <div className="project-tech" style={{ marginBottom: 24 }}>
            {project.tech.map((tech, i) => (
              <span key={i} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
          <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Screenshots</h3>
          <div style={{ minHeight: 120, marginBottom: 24, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {project.screenshots && project.screenshots.length > 0 ? (
              project.screenshots.map((img, i) => {
                const src = typeof img === 'string' ? img : img.src;
                const caption = typeof img === 'object' && img.caption ? img.caption : null;
                return (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: 260 }}>
                    <img src={src} alt={`Screenshot ${i + 1}`} style={{ width: 220, height: 140, objectFit: 'contain', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }} />
                    {caption && <div style={{ marginTop: 8, fontSize: '0.98rem', color: '#7f5af0', textAlign: 'center' }}>{caption}</div>}
                  </div>
                );
              })
            ) : (
              <div style={{ color: '#aaa', fontStyle: 'italic' }}>Screenshots coming soon...</div>
            )}
          </div>
          <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Demo Video{project.demos && project.demos.length > 1 ? 's' : ''}</h3>
          <div style={{ minHeight: 180, marginBottom: 24 }}>
            {/* Support multiple demo videos with summaries or external links */}
            {Array.isArray(project.demos) && project.demos.length > 0 ? (
              project.demos.map((demo, idx) => (
                <div key={idx} style={{ marginBottom: 32 }}>
                  <div style={{ fontWeight: 600, marginBottom: 8, color: '#2cb67d', fontSize: '1.08rem' }}>{demo.summary}</div>
                  {typeof demo.src === 'string' && demo.src.endsWith('.mp4') ? (
                    <video controls style={{ width: '100%', maxWidth: 600, borderRadius: 12 }}>
                      <source src={demo.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <a
                      href={demo.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ display: 'inline-block', marginTop: 8 }}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginRight: 8 }} />
                      View Demo on LinkedIn
                    </a>
                  )}
                </div>
              ))
            ) : (
              <>
                {project.demoSummary && (
                  <div style={{ fontWeight: 600, marginBottom: 8, color: '#2cb67d', fontSize: '1.08rem' }}>{project.demoSummary}</div>
                )}
                {!project.demoSummary && project.demo && typeof project.demo === 'string' && project.demo.endsWith('.mp4') && (
                  <div style={{ fontWeight: 600, marginBottom: 8, color: '#2cb67d', fontSize: '1.08rem' }}>Demo: Ticket Management System - End-to-End Workflow</div>
                )}
                {typeof project.demo === 'string' && project.demo.endsWith('.mp4') ? (
                  <video controls style={{ width: '100%', maxWidth: 600, borderRadius: 12 }}>
                    <source src={project.demo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : typeof project.demo === 'string' ? (
                  <div style={{ color: '#aaa', fontStyle: 'italic' }}>{project.demo}</div>
                ) : (
                  <div style={{ color: '#aaa', fontStyle: 'italic' }}>Demo video coming soon...</div>
                )}
              </>
            )}
          </div>
          <div className="project-links" style={{ marginTop: 24 }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>Code</span>
              </a>
            )}
            {project.github2 && (
              <a
                href={project.github2}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>Frontend</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                <span>Live Website</span>
              </a>
            )}
            {project.linkedin && (
              <a
                href={project.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                style={{ color: '#0A66C2', fontWeight: 600 }}
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                <span>LinkedIn Post</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails; 