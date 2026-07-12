import { motion } from 'framer-motion';
import styles from './SkillsSection.module.css';

type SkillGroup = {
  title: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Flutter', 'Responsive Design'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Authentication', 'Authorization'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Cursor', 'Postman'],
  },
  {
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Team Collaboration', 'Quick Learner', 'Adaptability', 'Communication', 'Time Management'],
  },
];

const SkillsSection = () => {
  return (
    <section className={styles.skillsSection} id="skills" aria-labelledby="skills-heading">
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>MY SKILLS</p>
        <h2 id="skills-heading" className={styles.title}>
          Technologies &amp; Tools I Work With
        </h2>
        <p className={styles.description}>
          I build modern web applications with a strong focus on clean architecture, performance, and user-centered experiences.
        </p>
      </div>

      <div className={styles.skillsGrid}>
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            className={styles.skillCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }}
          >
            <h3 className={styles.cardTitle}>{group.title}</h3>
            <div className={styles.badgeList}>
              {group.skills.map((skill) => (
                <span key={skill} className={styles.badge}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
