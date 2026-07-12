import { useEffect, useState } from 'react';
import styles from './FooterSection.module.css';

type LinkItem = {
  label: string;
  href: string;
};

const quickLinks: LinkItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
  { label: 'Email', href: 'mailto:rkaviyapriya11@gmail.com', icon: '@' },
];

const contactInfo = [
  { label: 'Email', value: 'rkaviyapriya11@gmail.com' },
  { label: 'Phone', value: '+91 98765 43210' },
  { label: 'Location', value: 'Erode, India' },
];

const FooterSection = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerGrid}>
        <div className={styles.brandBlock}>
          <div className={styles.logo}>RK</div>
          <p className={styles.tagline}>
            Building modern, responsive and scalable web applications using React.js, Node.js and TypeScript.
          </p>
          <div className={styles.socialWrap}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                className={styles.socialLink}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.linksBlock}>
          <h3 className={styles.columnTitle}>Quick Links</h3>
          <ul className={styles.linkList}>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={styles.linkItem}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.contactBlock}>
          <h3 className={styles.columnTitle}>Contact</h3>
          <ul className={styles.contactList}>
            {contactInfo.map((item) => (
              <li key={item.label} className={styles.contactItem}>
                <span className={styles.contactLabel}>{item.label}</span>
                <span className={styles.contactValue}>{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© 2026 R. Kaviyapriya. All Rights Reserved.</p>
        <p>Designed &amp; Developed with ❤️ using React, TypeScript and Vite.</p>
      </div>

      {showBackToTop ? (
        <button type="button" className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top">
          ↑
        </button>
      ) : null}
    </footer>
  );
};

export default FooterSection;
