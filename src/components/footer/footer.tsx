"use client";
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <div className={styles.brandSection}>
            <h2 className={styles.brandName}>
              <span className={styles.logo}>🎪</span>
              Birthday Safari
            </h2>
            <p className={styles.tagline}>Making Birthdays Wild & Wonderful</p>
          </div>
        </div>

        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/themes">Party Themes</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/packages">Packages</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>Our Services</h3>
            <ul>
              <li>Theme Decoration</li>
              <li>Birthday Planning</li>
              <li>Custom Cakes</li>
              <li>Entertainment</li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>Contact Info</h3>
            <ul>
              <li>📞 +91 98765 43210</li>
              <li>📧 info@birthdaysafari.com</li>
              <li>📍 123 Safari Street, Mumbai</li>
              <li>🕒 Mon-Sat: 10AM - 7PM</li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h3>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}><FaFacebook /></a>
              <a href="#" className={styles.socialLink}><FaInstagram /></a>
              <a href="#" className={styles.socialLink}><FaTwitter /></a>
              <a href="#" className={styles.socialLink}><FaWhatsapp /></a>
            </div>
            <div className={styles.newsletter}>
              <h4>Subscribe to Newsletter</h4>
              <div className={styles.subscribeForm}>
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <p>&copy; 2025 Birthday Safari. All rights reserved.</p>
          <div className={styles.footerLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>

      <div className={styles.decorElements}>
        {['🦁', '🐘', '🦒', '🎈', '✨'].map((emoji, index) => (
          <span key={index} className={styles.decorItem} style={{
            animationDelay: `${index * 0.5}s`
          }}>{emoji}</span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;