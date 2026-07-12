import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ContactSection.module.css';
import api from '../../middleware/axios-api';

type FormFields = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const contactCards = [
  { label: 'Email', value: 'rkaviyapriya11@gmail.com', href: 'mailto:rkaviyapriya11@gmail.com' },
  { label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { label: 'Location', value: 'Erode, India', href: '#' },
  { label: 'Availability', value: 'Open to opportunities', href: '#' },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
  { label: 'Email', href: 'mailto:rkaviyapriya11@gmail.com', icon: '@' },
];

const initialForm: FormFields = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactSection = () => {
  const [form, setForm] = useState<FormFields>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = (values: FormFields) => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) nextErrors.name = 'Full name is required.';
    if (!values.email.trim()) nextErrors.email = 'Email address is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) nextErrors.email = 'Enter a valid email address.';
    if (!values.subject.trim()) nextErrors.subject = 'Subject is required.';
    if (!values.message.trim()) nextErrors.message = 'Message is required.';

    return nextErrors;
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      await api.post('/v1/user/create-contact', {
        userName: form.name,
        userMail: form.email,
        subject: form.subject,
        message: form.message,
      });

      setSubmitted(true);
      setForm(initialForm);
    } catch (error: any) {
      setSubmitError(error?.response?.data?.message || 'Unable to send your message right now.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contactSection} id="contact" aria-labelledby="contact-heading">
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>CONTACT</p>
        <h2 id="contact-heading" className={styles.title}>
          Let&apos;s Work Together
        </h2>
        <p className={styles.description}>
          I&apos;m available for product-focused projects, full-time roles, and professional collaborations. Reach out to discuss how we can build modern, scalable applications together.
        </p>
      </div>

      <div className={styles.contactGrid}>
        <motion.div
          className={styles.infoColumn}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className={styles.contactCards}>
            {contactCards.map((card) => (
              <div key={card.label} className={styles.contactCard}>
                <span className={styles.contactLabel}>{card.label}</span>
                <a className={styles.contactValue} href={card.href}>
                  {card.value}
                </a>
              </div>
            ))}
          </div>

          <div className={styles.socialSection}>
            <p className={styles.socialTitle}>Find me online</p>
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
        </motion.div>

        <motion.form
          className={styles.formColumn}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
          onSubmit={handleSubmit}
          noValidate
        >
          <div className={styles.formGrid}>
            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={styles.input}
                placeholder="Your full name"
              />
              {errors.name ? <p className={styles.errorText}>{errors.name}</p> : null}
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="you@example.com"
              />
              {errors.email ? <p className={styles.errorText}>{errors.email}</p> : null}
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={styles.input}
                placeholder="Project inquiry"
              />
              {errors.subject ? <p className={styles.errorText}>{errors.subject}</p> : null}
            </div>

            <div className={styles.fieldGroupFull}>
              <label className={styles.label} htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Tell me about your project, timeline, and goals."
                rows={5}
              />
              {errors.message ? <p className={styles.errorText}>{errors.message}</p> : null}
            </div>
          </div>

          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {submitError ? <p className={styles.errorText}>{submitError}</p> : null}
        </motion.form>
      </div>

      {submitted ? (
        <motion.div
          className={styles.toast}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          Thank you! Your message has been received.
        </motion.div>
      ) : null}
    </section>
  );
};

export default ContactSection;
