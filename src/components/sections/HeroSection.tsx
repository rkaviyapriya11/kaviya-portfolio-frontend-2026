import { motion } from 'framer-motion';
import profileImage from '../../assets/images/profile-illustration.svg';
import { heroContent } from '../../data/portfolio';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection} id="home" aria-labelledby="hero-heading">
      <div className={styles.heroGrid}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className={styles.eyebrow}>Available for freelance & full-time roles</span>
          <h1 id="hero-heading" className={styles.title}>
            Hi, I&apos;m <span>{heroContent.name}</span>
          </h1>
          <p className={styles.subtitle}>{heroContent.title}</p>
          <p className={styles.intro}>{heroContent.intro}</p>

          <div className={styles.actions}>
            <a className={styles.primaryButton} href={heroContent.resumeUrl} download>
              Download Resume
            </a>
            <a className={styles.secondaryButton} href="#projects">
              View Projects
            </a>
            <a className={styles.ghostButton} href="mailto:rkaviyapriya11@gmail.com">
              Hire Me
            </a>
          </div>

          <ul className={styles.socialList} aria-label="Social links">
            {heroContent.socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.ariaLabel}
                  className={styles.socialLink}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

        </motion.div>

        <motion.div
          className={styles.visualPanel}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <div className={styles.imageCard}>
            <img src={profileImage} alt="Illustrated portrait of Kaviyapriya" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
