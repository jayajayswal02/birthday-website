"use client";
import { useState } from 'react';
import styles from './contact.module.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h2 className={styles.title}>
            <span className={styles.mainTitle}>Get in Touch</span>
            <span className={styles.subTitle}>Plan Your Safari Adventure</span>
          </h2>
          
          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📞</span>
              <h3>Call Us</h3>
              <p>+91 98765 43210</p>
            </div>
            
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📧</span>
              <h3>Email Us</h3>
              <p>info@birthdaysafari.com</p>
            </div>
            
            <div className={styles.infoCard}>
              <span className={styles.infoIcon}>📍</span>
              <h3>Visit Us</h3>
              <p>123 Safari Street, Mumbai</p>
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
              />
              <span className={styles.inputIcon}>👤</span>
            </div>

            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
              <span className={styles.inputIcon}>✉️</span>
            </div>

            <div className={styles.formGroup}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
              />
              <span className={styles.inputIcon}>📱</span>
            </div>

            <div className={styles.formGroup}>
              <input
                type="date"
                name="eventDate"
                required
                value={formData.eventDate}
                onChange={handleChange}
                className={styles.input}
              />
              <span className={styles.inputIcon}>📅</span>
            </div>

            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Tell us about your dream safari party..."
                required
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
              />
              <span className={styles.inputIcon}>✨</span>
            </div>

            <button 
              type="submit" 
              className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <span className={styles.buttonIcon}>🚀</span>
            </button>

            {submitted && (
              <div className={styles.successMessage}>
                Thanks! We'll be in touch soon! 🎉
              </div>
            )}
          </form>
        </div>
      </div>

      <div className={styles.decorElements}>
        <span className={styles.decorItem}>🎪</span>
        <span className={styles.decorItem}>🦁</span>
        <span className={styles.decorItem}>🐘</span>
        <span className={styles.decorItem}>🦒</span>
      </div>
    </section>
  );
};

export default ContactSection;