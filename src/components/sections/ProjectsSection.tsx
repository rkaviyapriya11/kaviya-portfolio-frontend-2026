import { motion } from 'framer-motion';
import styles from './ProjectsSection.module.css';

type ProfessionalProject = {
  title: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
};

type PersonalProject = {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
};

const professionalProjects: ProfessionalProject[] = [
  {
    title: 'CRM System',
    description: 'Delivered a customer relationship management experience tailored for internal operations and sales workflows.',
    responsibilities: [
      'Built responsive dashboards and data-heavy interfaces.',
      'Integrated business modules with secure backend APIs.',
      'Improved usability and workflow efficiency across the platform.',
    ],
    technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'MySQL'],
  },
  {
    title: 'FinTech Platform',
    description: 'Supported the development of a fintech platform focused on secure flows and polished business interfaces.',
    responsibilities: [
      'Implemented dashboard and transaction-related interfaces.',
      'Assisted with authorization and data integrity logic.',
      'Helped optimize performance for smoother user experience.',
    ],
    technologies: ['React.js', 'TypeScript', 'Express.js', 'JWT Authentication', 'MySQL'],
  },
];

const personalProjects: PersonalProject[] = [
  {
    title: 'SkillGrow (E-Learning Platform)',
    description: 'A modern e-learning platform designed for skill-based learning experiences.',
    technologies: ['React.js', 'TypeScript', 'Vite', 'CSS3','Nodejs','Expressjs','MongoDB'],
    liveUrl: 'https://skillsgrow-elearning.netlify.app/',
  },
  {
    title: 'iPhone Landing Page Clone',
    description: 'A visually rich product showcase inspired by iPhone-style interfaces.',
    technologies: ['React.js', 'TypeScript', 'CSS3', 'Vite'],
    liveUrl: 'https://iphonedummy.vercel.app/',
  },
];

const ProjectsSection = () => {
  return (
    <section className={styles.projectsSection} id="projects" aria-labelledby="projects-heading">
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>PROJECTS</p>
        <h2 id="projects-heading" className={styles.title}>
          Featured Projects
        </h2>
        <p className={styles.description}>
          A blend of professional work and personal builds focused on performance, usability, and modern web experiences.
        </p>
      </div>

      <div className={styles.categoryBlock}>
        <h3 className={styles.categoryTitle}>Professional Experience</h3>
        <div className={styles.projectsGrid}>
          {professionalProjects.map((project, index) => (
            <motion.article
              key={`${project.title}-${index}`}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }}
            >
              <div className={styles.cardBody}>
                <div className={styles.cardTopRow}>
                  <h4 className={styles.projectTitle}>{project.title}</h4>
                  <span className={styles.badge}>Professional Project</span>
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.listBlock}>
                  <p className={styles.listLabel}>Responsibilities</p>
                  <ul className={styles.list}>
                    {project.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.techWrap}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.privateNote}>
                  <span className={styles.privateBadge}>Private Company Project</span>
                  <p>Source code and live demo are not publicly available due to company confidentiality.</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className={styles.categoryBlock}>
        <h3 className={styles.categoryTitle}>Personal Projects</h3>
        <div className={styles.projectsGrid}>
          {personalProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }}
            >
              <div className={styles.cardBody}>
                <div className={styles.cardTopRow}>
                  <h4 className={styles.projectTitle}>{project.title}</h4>
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.techWrap}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techBadge}>
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  className={styles.liveButton}
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
