"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrollPosition > 50 ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoContainer}>
          <div className={styles.logo}>
            <span className={styles.logoEmoji}>🎪</span>
            <div className={styles.logoText}>
              <span className={styles.brandName}>Birthday Safari</span>
              <span className={styles.tagline}>Magical Celebrations</span>
            </div>
          </div>
        </Link>

        <div className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
          <Link href="/themes" className={styles.navLink}>
            <span className={styles.linkIcon}>🎨</span>
            Themes
          </Link>
          <Link href="/gallery" className={styles.navLink}>
            <span className={styles.linkIcon}>📸</span>
            Gallery
          </Link>
          <Link href="/packages" className={styles.navLink}>
            <span className={styles.linkIcon}>🎁</span>
            Packages
          </Link>
          <Link href="/contact" className={styles.navLink}>
            <span className={styles.linkIcon}>📞</span>
            Contact
          </Link>
          <button className={styles.bookButton}>
            Book Now
            <span className={styles.buttonSparkle}>✨</span>
          </button>
        </div>

        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;