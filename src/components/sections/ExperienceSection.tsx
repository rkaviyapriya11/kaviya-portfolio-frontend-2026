import { motion } from "framer-motion";
import styles from "./ExperienceSection.module.css";

const responsibilities = [
  "Developed responsive and user-friendly web applications using React.js.",
  "Built scalable backend APIs using Node.js and Express.js.",
  "Integrated MySQL and MongoDB databases.",
  "Implemented Authentication and Authorization using JWT.",
  "Developed RESTful APIs for frontend-backend communication.",
  "Fixed bugs and optimized application performance.",
  "Collaborated with team members using Git and GitHub.",
  "Participated in feature development, testing, and deployment.",
];

const technologies = [
  "React.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Dart",
  "Flutter",
  "MySQL",
  "MongoDB",
  "REST APIs",
  "JWT Authentication",
  "Authentication",
  "Authorization",
  "Git",
  "GitHub",
];

const ExperienceSection = () => {
  return (
    <section
      className={styles.experienceSection}
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>EXPERIENCE</p>
        <h2 id="experience-heading" className={styles.title}>
          My Professional Journey
        </h2>
        <p className={styles.description}>
          My experience has centered on delivering reliable web solutions with
          modern frontend and backend technologies.
        </p>
      </div>

      <div className={styles.timeline}>
        <motion.article
          className={styles.experienceCard}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.timelineMarker} aria-hidden="true" />
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.role}>Software Programmer</p>
                <p className={styles.company}>
                  Professional Software Development Experience
                </p>
              </div>
              <span className={styles.duration}>1 Year</span>
            </div>

            <ul className={styles.responsibilities}>
              {responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className={styles.techWrap}>
              {technologies.map((tech) => (
                <span key={tech} className={styles.techBadge}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default ExperienceSection;
