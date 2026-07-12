import { motion } from "framer-motion";
import styles from "./AboutSection.module.css";

const personalInfo = [
  { label: "Name", value: "Kaviyapriya R" },
  { label: "Location", value: "Erode, India" },
  { label: "Email", value: "rkaviyapriya11@gmail.com" },
{ label: "Education", value: "B.Sc. Computer Science" },
  { label: "Experience", value: "1+ Year" },
];

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "5+", label: "Projects Completed" },
  { value: "Frontend", label: "Development" },
  { value: "Backend", label: "Development" },
];

const AboutSection = () => {
  return (
    <section
      className={styles.aboutSection}
      id="about"
      aria-labelledby="about-heading"
    >
      <div className={styles.aboutGrid}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className={styles.eyebrow}>ABOUT ME</p>
          <h2 id="about-heading" className={styles.title}>
            Passionate Frontend & Node.js Developer
          </h2>

          <p className={styles.intro}>
            I am a Software Developer with 1 year of professional experience
            building scalable, responsive, and user-centric web applications. My
            expertise includes React.js, Node.js, Express.js, JavaScript,
            TypeScript, MySQL, and MongoDB, with a strong focus on developing
            clean, maintainable, and high-performance applications that deliver
            seamless user experiences.
          </p>

          <p className={styles.intro}>
            I enjoy transforming business requirements into reliable software
            solutions by following modern development practices, writing clean
            and reusable code, and collaborating effectively within agile teams.
          </p>

          <div className={styles.objectiveCard}>
            <h3>Career Objective</h3>
            <p>
              To contribute to innovative software solutions while growing as a skilled Software Engineer.
            </p>
          </div>
        </motion.div>

        <motion.div
          className={styles.statsColumn}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>

          <div className={styles.infoGrid}>
            {personalInfo.map((item) => (
              <div key={item.label} className={styles.infoItem}>
                <span className={styles.infoLabel}>{item.label}</span>
                <span className={styles.infoValue}>{item.value}</span>
              </div>
            ))}
          </div>

          <a className={styles.contactButton} href="#contact">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
