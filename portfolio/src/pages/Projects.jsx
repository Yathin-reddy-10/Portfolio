import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Ticket Management System',
    image: './Screenshot 2025-06-02 154716.png',
    description: 'Enterprise-grade solution for IT ticketing, built with a mix of Node.js and Java microservices, Docker, Prometheus, Jenkins, Linux scripting, NGINX for LAN deployment, and advanced monitoring (Prometheus, Grafana, Loki). Features robust CI/CD, alerting (Nodemailer, Teams Webhooks), and a modern frontend. This project demonstrates a full DevOps lifecycle and a wide toolkit of modern technologies.',
    features: [
      'Microservices architecture (Java, Node.js backend, React frontend)',
      'AI-powered chatbot and live chat',
      'Automatic escalation logic and real-time notifications',
      'Containerized with Docker, deployed via Kubernetes',
      'Monitoring with Prometheus, Grafana, Loki',
      'Audit logging, report generation, CI/CD with Jenkins',
      'Linux scripting for automation',
      'DevOps best practices, Agile delivery',
      'LAN deployment with NGINX',
      'Alerting with Nodemailer and Teams Webhooks'
    ],
    tech: ['Java', 'Node.js', 'ReactJS', 'Docker', 'Kubernetes', 'Jenkins', 'Prometheus', 'Grafana', 'Loki', 'NGINX', 'Webhooks', 'Nodemailer', 'Linux', 'Teams Webhooks'],
    toolkit: 'Java microservices, Node.js microservices, Docker, Kubernetes, Jenkins, Prometheus, Grafana, Loki, NGINX, Nodemailer, Teams Webhooks, Linux scripting, React',
    github: '',
    live: '',
    details: 'This project is a full-stack Ticket Management System leveraging Java and Node.js microservices, containerized with Docker and orchestrated via Kubernetes. Automation is achieved through custom Linux scripts and CI/CD pipelines in Jenkins. Monitoring and observability are implemented using Prometheus, Grafana, and Loki. The system supports real-time notifications, smart escalation, robust audit logging, and is deployed in the local LAN using NGINX. Alerts are sent via Nodemailer and Teams Webhooks, providing a complete DevOps and monitoring solution.',
    demos: [
      { src: 'https://www.linkedin.com/posts/yathin-reddy-048120215_microservices-javadevelopment-springboot-activity-7335260209331769345-rQZT?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZM_jgBlHaW7I1YEj8X5mXnJBrlcEOycYg', summary: 'End-to-end workflow, code structure, and microservices (Node.js & Java) overview (see full backend walkthrough on LinkedIn)' },
      { src: 'https://www.linkedin.com/posts/yathin-reddy-048120215_reactjs-frontenddevelopment-publicissapient-activity-7335260317578403842-mKLb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZM_jgBlHaW7I1YEj8X5mXnJBrlcEOycYg', summary: 'Frontend UI Demo: Ticket Management System (see full experience on LinkedIn)' },
      { src: './Screen Recording 2025-06-02 152619.mp4', summary: 'Monitoring, Alerts (Prometheus, Grafana, Loki, Nodemailer, Teams Webhooks)' }
    ],
    screenshots: [
      { src: './shared image (1).jpg', caption: 'Deployed in Publicis Sapient LAN using NGINX, accessible on multiple devices.' },
      { src: './Screenshot 2025-06-02 153425.png', caption: 'Docker Hub: Microservice images (Java/Node.js) pushed for deployment.' },
      { src: './Jenkins.png', caption: 'CI/CD pipeline in Jenkins: Automated build, test, and deployment of all microservices.' },
      { src: './Screenshot 2025-06-02 220413.png', caption: 'Grafana Alert in Teams' },
      { src: './Screenshot 2025-06-02 220506.png', caption: 'Grafana Alert in Gmail' }
    ],
    linkedin: 'https://www.linkedin.com/posts/yathin-reddy-048120215_devops-monitoring-prometheus-activity-7335260317750370304-pa_G?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZM_jgBlHaW7I1YEj8X5mXnJBrlcEOycYg',
  },
  {
    title: 'Asset Management System and Finance Tracker',
    image: './Screenshot 2025-06-02 154746.png',
    description: 'Comprehensive asset management and finance tracking tool for educational institutions.',
    features: [
      'Manage physical and digital assets',
      'Track financial activities: income, expenses, budget forecasting',
      'Django + MySQL backend, JavaScript frontend',
      'RESTful APIs, secure resource monitoring',
      'User-friendly interface, production-ready code'
    ],
    tech: ['Python', 'Django', 'MySQL', 'JavaScript', 'Cloud'],
    techHighlight: 'Django, Python, MySQL, JavaScript',
    github: 'https://github.com/Yathin-reddy-10/Assest_management_backend',
    live: 'https://scapps.net/auth/login',
    details: 'Developed and deployed a full-stack web platform for asset and finance management, with RESTful APIs and thorough documentation.'
  },
  {
    title: 'CRM for Educational Institution (Sri Chaitanya)',
    image: './download (3).jpg',
    description: 'Custom CRM platform to manage student inquiries, track admissions, and improve lead conversion by 25%.',
    features: [
      'Real-time chat and call features (Airtel APIs)',
      'Django REST backend, React.js frontend',
      'Centralized dashboard for admission teams',
      'Lead categorization, status tracking, role-based access',
      'Smooth deployment, clean code, full documentation'
    ],
    tech: ['Python', 'Django', 'ReactJS', 'MySQL', 'Airtel APIs'],
    techHighlight: 'Django, ReactJS, MySQL, Airtel APIs',
    github: 'https://github.com/Yathin-reddy-10/Crm_Django_Api',
    github2: 'https://github.com/Yathin-reddy-10/Crm_Frontend_React',
    live: 'https://srichaitanyacrm.com/login',
    details: 'Built backend services and React dashboards, integrated chat/call, managed deployment, and maintained clean, documented code.'
  },
  {
    title: 'Ticket and Network Management System',
    image: './Network-Management.jpg',
    description: 'Dual-purpose platform for support ticketing and network monitoring in educational and enterprise environments.',
    features: [
      'Ticketing module for tracking/resolving issues',
      'Network management with one-click ping check',
      'Django backend, React frontend, Python automation',
      'Alert systems, MySQL database, modular code'
    ],
    tech: ['Python', 'Django', 'ReactJS', 'MySQL', 'Automation'],
    techHighlight: 'Django, ReactJS, Python, MySQL',
    details: `The Ticket and Network Management System is a robust, dual-purpose platform designed for both support ticketing and real-time network monitoring in educational and enterprise environments. The system features a comprehensive ticketing module for tracking and resolving IT issues, as well as a network management module that enables one-click ping checks and real-time monitoring of network health. Built with a Django backend and React frontend, the platform leverages Python automation for alert systems and integrates a MySQL database for secure, scalable data storage. The modular codebase ensures easy maintenance and extensibility, while the alert system provides instant notifications for critical events. This solution streamlines IT support workflows, enhances network reliability, and provides actionable insights through custom dashboards and automated reporting.\n\nRole & Responsibilities: Developed backend APIs for ticket and network management, implemented custom ping check logic, built React dashboards for real-time monitoring, and designed alert systems for proactive issue resolution. Maintained a modular, well-documented codebase and collaborated with cross-functional teams to ensure seamless deployment and user adoption.`,
    github: 'https://github.com/Yathin-reddy-10/network_backend',
    github2: 'https://github.com/Yathin-reddy-10/Network_Frontend',
    live: 'https://sctickets.in/',
    screenshots: ['./Screenshot 2025-05-26 000537.png'],
    demo: './Networking.mp4'
  },
  {
    title: 'Academic Reports System',
    image: './student-management-software-500x500.webp',
    description: 'Robust system used by 900+ schools to manage, generate, and visualize student performance reports.',
    features: [
      'Real-time data entry and advanced filtering',
      'Customizable report generation',
      'Dynamic data visualizations',
      'Django backend, MySQL database',
      'RESTful APIs, scalable models, QA validation'
    ],
    tech: ['Python', 'Django', 'MySQL', 'ReactJS', 'Data Visualization'],
    techHighlight: 'Django, ReactJS, MySQL',
    details: `The Academic Reports System is a scalable platform adopted by over 900 schools to manage, generate, and visualize student performance data. The system supports real-time data entry, advanced filtering, and customizable report generation, enabling educators to track academic progress and identify trends. Dynamic data visualizations provide actionable insights, while the Django backend and MySQL database ensure secure, efficient data management. RESTful APIs facilitate integration with other educational tools, and the platform's scalable models support large-scale deployments. Rigorous QA validation ensures data accuracy and system reliability.\n\nRole & Responsibilities: Designed and implemented backend logic for data processing and report generation, integrated advanced data visualization tools, and developed scalable models for large user bases. Collaborated with QA teams to validate data integrity and worked closely with educators to refine user experience and reporting features.`,
    github: 'https://github.com/Yathin-reddy-10/Academic_reports_backend',
    live: '',
    screenshots: [],
    demo: false
  },
  {
    title: 'Health and Wellness Blog Application',
    image: './istockphoto-1363588189-612x612.jpg',
    description: 'Responsive blog platform for health and wellness content, built during internship at Compsoft Technologies.',
    features: [
      'User login, article browsing, categorization',
      'Admin control for posts/users',
      'React.js frontend, Node.js/Express backend',
      'MongoDB storage, authentication, mobile-friendly UI'
    ],
    tech: ['ReactJS', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
    techHighlight: 'Django, ReactJS, Node.js, MongoDB',
    details: `The Health and Wellness Blog Application is a responsive platform developed to promote health and wellness through engaging content and interactive features. Users can register, log in, browse articles by category, and interact with content in a secure environment. The admin panel allows for efficient management of posts and users. Built with a React.js frontend and Node.js/Express backend, the application leverages MongoDB for flexible data storage and includes robust authentication for user security. The mobile-friendly UI ensures accessibility across devices, making it easy for users to stay informed and engaged.\n\nRole & Responsibilities: Designed and developed the frontend using React.js, implemented RESTful APIs and backend logic with Node.js/Express, and integrated MongoDB for data management. Developed authentication flows, created admin controls, and ensured a seamless, responsive user experience across platforms.`,
    github: '',
    live: '',
    screenshots: [],
    demo: false
  }
];

const professionalProjects = [
  {
    title: 'Ticket Management System',
    image: './Screenshot 2025-06-02 154716.png',
    description: 'Enterprise-grade solution for IT ticketing, built with a mix of Node.js and Java microservices, Docker, Prometheus, Jenkins, Linux scripting, NGINX for LAN deployment, and advanced monitoring (Prometheus, Grafana, Loki). Features robust CI/CD, alerting (Nodemailer, Teams Webhooks), and a modern frontend. This project demonstrates a full DevOps lifecycle and a wide toolkit of modern technologies.',
    features: [
      'Microservices architecture (Java, Node.js backend, React frontend)',
      'AI-powered chatbot and live chat',
      'Automatic escalation logic and real-time notifications',
      'Containerized with Docker, deployed via Kubernetes',
      'Monitoring with Prometheus, Grafana, Loki',
      'Audit logging, report generation, CI/CD with Jenkins',
      'Linux scripting for automation',
      'DevOps best practices, Agile delivery',
      'LAN deployment with NGINX',
      'Alerting with Nodemailer and Teams Webhooks'
    ],
    tech: ['Java', 'Node.js', 'ReactJS', 'Docker', 'Kubernetes', 'Jenkins', 'Prometheus', 'Grafana', 'Loki', 'NGINX', 'Webhooks', 'Nodemailer', 'Linux', 'Teams Webhooks'],
    toolkit: 'Java microservices, Node.js microservices, Docker, Kubernetes, Jenkins, Prometheus, Grafana, Loki, NGINX, Nodemailer, Teams Webhooks, Linux scripting, React',
    github: '',
    live: '',
    details: 'This project is a full-stack Ticket Management System leveraging Java and Node.js microservices, containerized with Docker and orchestrated via Kubernetes. Automation is achieved through custom Linux scripts and CI/CD pipelines in Jenkins. Monitoring and observability are implemented using Prometheus, Grafana, and Loki. The system supports real-time notifications, smart escalation, robust audit logging, and is deployed in the local LAN using NGINX. Alerts are sent via Nodemailer and Teams Webhooks, providing a complete DevOps and monitoring solution.',
    demos: [
      { src: 'https://www.linkedin.com/posts/yathin-reddy-048120215_microservices-javadevelopment-springboot-activity-7335260209331769345-rQZT?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZM_jgBlHaW7I1YEj8X5mXnJBrlcEOycYg', summary: 'End-to-end workflow, code structure, and microservices (Node.js & Java) overview (see full backend walkthrough on LinkedIn)' },
      { src: 'https://www.linkedin.com/posts/yathin-reddy-048120215_reactjs-frontenddevelopment-publicissapient-activity-7335260317578403842-mKLb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZM_jgBlHaW7I1YEj8X5mXnJBrlcEOycYg', summary: 'Frontend UI Demo: Ticket Management System (see full experience on LinkedIn)' },
      { src: './Screen Recording 2025-06-02 152619.mp4', summary: 'Monitoring, Alerts (Prometheus, Grafana, Loki, Nodemailer, Teams Webhooks)' }
    ],
    screenshots: [
      { src: './shared image (1).jpg', caption: 'Deployed in Publicis Sapient LAN using NGINX, accessible on multiple devices.' },
      { src: './Screenshot 2025-06-02 153425.png', caption: 'Docker Hub: Microservice images (Java/Node.js) pushed for deployment.' },
      { src: './Jenkins.png', caption: 'CI/CD pipeline in Jenkins: Automated build, test, and deployment of all microservices.' },
      { src: './Screenshot 2025-06-02 220413.png', caption: 'Grafana Alert in Teams' },
      { src: './Screenshot 2025-06-02 220506.png', caption: 'Grafana Alert in Gmail' }
    ],
    linkedin: 'https://www.linkedin.com/posts/yathin-reddy-048120215_devops-monitoring-prometheus-activity-7335260317750370304-pa_G?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZM_jgBlHaW7I1YEj8X5mXnJBrlcEOycYg',
  },
  {
    title: 'Asset Management System and Finance Tracker',
    image: './Screenshot 2025-06-02 154746.png',
    description: 'Comprehensive asset management and finance tracking tool for educational institutions.',
    features: [
      'Manage physical and digital assets',
      'Track financial activities: income, expenses, budget forecasting',
      'Django + MySQL backend, JavaScript frontend',
      'RESTful APIs, secure resource monitoring',
      'User-friendly interface, production-ready code'
    ],
    tech: ['Python', 'HTML/CSS/JS', 'Automation', 'Microservices/API', 'Cloud', 'Cloud Ops'],
    techHighlight: 'Django, Python, MySQL, JavaScript',
    details: `Developed a comprehensive asset management system integrated with a finance tracking tool tailored for educational institutions. The platform helps manage physical and digital assets, while also tracking financial activities such as income, expenses, and budget forecasting. Built using Django and MySQL on the backend and JavaScript for dynamic front-end interactions, the system ensures secure and efficient resource and budget monitoring.\n\nRole & Responsibilities: Developed and deployed a full-stack web platform using Django and MySQL to manage assets and track finances for educational institutions. The system included a financial module for monitoring income, expenses, and budget forecasts, with a user-friendly interface built using JavaScript. Created RESTful APIs for smooth communication between modules, ensured end-to-end functionality through thorough testing, and maintained proper documentation while publishing clean, production-ready code to GitHub.`,
    github: 'https://github.com/Yathin-reddy-10/Assest_management_backend',
    live: 'https://scapps.net/auth/login',
    screenshots: ['./Screenshot 2025-05-25 235639.png'],
    demo: 'Demo not possible as the website contains sensitive organization data.'
  },
  {
    title: 'CRM for Educational Institution (Sri Chaitanya)',
    image: './download (3).jpg',
    description: 'Custom CRM platform to manage student inquiries, track admissions, and improve lead conversion by 25%.',
    features: [
      'Real-time chat and call features (Airtel APIs)',
      'Django REST backend, React.js frontend',
      'Centralized dashboard for admission teams',
      'Lead categorization, status tracking, role-based access',
      'Smooth deployment, clean code, full documentation'
    ],
    tech: ['Python', 'ReactJS', 'DevOps'],
    techHighlight: 'Django, ReactJS, MySQL, Airtel APIs',
    details: `Developed a custom CRM platform for educational institutions to manage student inquiries, track admissions, and improve lead conversion by 25%. Integrated real-time chat and call features using Airtel APIs for direct counselor-student communication. Built with Django (backend), React.js (frontend), and MySQL, the system provides a smooth, centralized dashboard experience for admission teams.\n\nRole & Responsibilities: Built and integrated backend services using Django REST Framework to manage student inquiries and admissions, while developing React.js-based dashboards for lead tracking and analytics. Implemented real-time chat and call features via Airtel APIs, along with lead tracking and analytics.`,
    github: 'https://github.com/Yathin-reddy-10/Crm_Django_Api',
    github2: 'https://github.com/Yathin-reddy-10/Crm_Frontend_React',
    live: 'https://srichaitanyacrm.com/login',
    screenshots: [],
    demo: false
  },
  {
    title: 'Ticket and Network Management System',
    image: './Network-Management.jpg',
    description: 'Dual-purpose platform for support ticketing and network monitoring in educational and enterprise environments.',
    features: [
      'Ticketing module for tracking/resolving issues',
      'Network management with one-click ping check',
      'Django backend, React frontend, Python automation',
      'Alert systems, MySQL database, modular code'
    ],
    tech: ['Python', 'Django', 'ReactJS', 'MySQL', 'Automation'],
    techHighlight: 'Django, ReactJS, Python, MySQL',
    details: 'Developed backend APIs, custom ping check, React dashboards, alert systems, and maintained modular, documented code.',
    github: 'https://github.com/Yathin-reddy-10/network_backend',
    github2: 'https://github.com/Yathin-reddy-10/Network_Frontend',
    live: 'https://sctickets.in/',
    screenshots: ['./Screenshot 2025-05-26 000537.png'],
    demo: './Networking.mp4'
  },
  {
    title: 'Academic Reports System',
    image: './student-management-software-500x500.webp',
    description: 'Robust system used by 900+ schools to manage, generate, and visualize student performance reports.',
    features: [
      'Real-time data entry and advanced filtering',
      'Customizable report generation',
      'Dynamic data visualizations',
      'Django backend, MySQL database',
      'RESTful APIs, scalable models, QA validation'
    ],
    tech: ['Python', 'Django', 'MySQL', 'ReactJS', 'Data Visualization'],
    techHighlight: 'Django, ReactJS, MySQL',
    details: 'Designed backend logic, integrated data visualization, enabled custom report generation, and supported 900+ institutions.',
    github: 'https://github.com/Yathin-reddy-10/Academic_reports_backend',
    live: '',
    screenshots: [],
    demo: false
  },
  {
    title: 'Health and Wellness Blog Application',
    image: './istockphoto-1363588189-612x612.jpg',
    description: 'Responsive blog platform for health and wellness content, built during internship at Compsoft Technologies.',
    features: [
      'User login, article browsing, categorization',
      'Admin control for posts/users',
      'React.js frontend, Node.js/Express backend',
      'MongoDB storage, authentication, mobile-friendly UI'
    ],
    tech: ['ReactJS', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
    techHighlight: 'Django, ReactJS, Node.js, MongoDB',
    details: 'Designed responsive frontend, built RESTful APIs, integrated MongoDB, implemented authentication, and ensured mobile-friendly UX.',
    github: '',
    live: '',
    screenshots: [],
    demo: false
  }
];

const personalProjects = [
  {
    title: 'Telegram Bot',
    github: 'https://github.com/Yathin-reddy-10/telegrambot',
  },
  {
    title: 'Number detection Model',
    github: 'https://github.com/Yathin-reddy-10/tensorflow',
  },
  {
    title: 'Ecommerce-Website',
    github: 'https://github.com/Yathin-reddy-10/Ecommerce-Website',
  },
  { title: 'First Aid App' },
  { title: 'Rural Food Grains Delivery Database Management System' },
  { title: 'File Structure mini project Ration Distribution using File Structure' },
  { title: 'Attendance using face reorganization (using Python and deep learning)' },
];

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

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.h2 className="section-title">My Projects</motion.h2>
        <motion.p className="section-subtitle">Click on a project to see more details</motion.p>
        <h3>PROFESSIONAL AND LIVE PROJECTS:</h3>
        <motion.div className="projects-grid">
          {professionalProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card glass-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.03 }}
              onClick={() => navigate(`/projects/${index}`, { state: { project } })}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.title}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={e => e.stopPropagation()}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={e => e.stopPropagation()}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      <span>Live Website</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <h3 style={{marginTop: '3rem'}}>PERSONAL PROJECTS:</h3>
        <motion.div className="projects-grid">
          {personalProjects.map((project, index) => (
            <div className="project-card glass-card" key={index}>
              <div className="project-content">
                <h3>{project.title}</h3>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FontAwesomeIcon icon={faGithub} /> <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 