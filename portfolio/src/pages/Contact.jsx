import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone, faUser, faEnvelope as faEnvelopeSolid, faCommentDots, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 2500);
  };

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

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants}>Get In Touch</motion.h2>
          <motion.p variants={itemVariants} className="contact-intro">
            Have a question or want to work together? Feel free to reach out!
          </motion.p>

          <div className="contact-row">
            <div className="info-item card">
              <FontAwesomeIcon icon={faEnvelope} />
              <div>
                <h3>Email</h3>
                <a href="mailto:yathinreddy101110@gmail.com" className="contact-link">yathinreddy101110@gmail.com</a>
              </div>
            </div>
            <div className="info-item card">
              <FontAwesomeIcon icon={faPhone} />
              <div>
                <h3>Phone</h3>
                <a href="tel:+917013906088" className="contact-link">+91 7013906088</a>
                <span style={{ margin: '0 8px' }}>|</span>
                <a href="https://wa.me/917013906088" className="contact-link whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
            </div>
            <div className="info-item card">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <div>
                <h3>Location</h3>
                <a href="https://www.google.com/maps/place/Hyderabad,+Telangana" className="contact-link" target="_blank" rel="noopener noreferrer">Hyderabad, Telangana, India</a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {sent && (
              <div className="contact-popup">
                <span role="img" aria-label="success" style={{ fontSize: 28, marginRight: 10 }}>✅</span>
                Thanks for contacting! Will get back to you soon.
              </div>
            )}
            <motion.div variants={itemVariants} className="contact-form">
              <form onSubmit={handleSubmit} autoComplete="off">
                <div className="form-group input-icon-group">
                  <FontAwesomeIcon icon={faUser} className="input-icon" />
                  <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Full name" />
                </div>
                <div className="form-group input-icon-group">
                  <FontAwesomeIcon icon={faEnvelopeSolid} className="input-icon" />
                  <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} placeholder="Email address" />
                </div>
                <div className="form-group input-icon-group">
                  <FontAwesomeIcon icon={faCommentDots} className="input-icon" />
                  <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Your Message" />
                </div>
                <button type="submit" className="btn btn-primary form-send-btn">
                  <FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: 8 }} /> Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 