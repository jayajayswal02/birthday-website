"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './hero.module.css';
import heroImage from '../../assets/hero/hero1.jpg';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className={`${styles.heroSection} ${isLoaded ? styles.loaded : ''}`}>
      <div className={styles.heroContainer}>
        <div className={styles.contentSection}>
          <h1 className={styles.title}>
            <span className={styles.mainTitle}>Magical Birthday</span>
            <span className={styles.subTitle}>Safari Animals</span>
            <span className={styles.indianText}>Happy Birthday Babu❤</span>
          </h1>
          
          <p className={styles.description}>
            Experience the most enchanting birthday celebrations with our unique 
            safari-themed parties blended with magical Indian elements
          </p>

          <div className={styles.features}>
            {['🎪 Themed Decorations', '🎭 Face Painting', '🎨 Art Activities', '🎂 Custom Cakes'].map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                {feature}
              </div>
            ))}
          </div>

          <div className={styles.ctaSection}>
            <button className={styles.primaryButton}>
              Start Your Adventure
              <span className={styles.buttonIcon}>🦁</span>
            </button>
            <button className={styles.secondaryButton}>
              Watch Our Magic
              <span className={styles.buttonIcon}>✨</span>
            </button>
          </div>
        </div>

        <div className={styles.visualSection}>
          <div className={styles.mainImage}>
            <Image
              src={heroImage}
              alt="Safari Birthday Celebration"
              width={500}
              height={500}
              priority
              className={styles.heroImage}
            />
          </div>
          
          <div className={styles.floatingElements}>
            {['🐘', '🦒', '🦁', '🎈', '🎪', '✨'].map((emoji, index) => (
              <span 
                key={index} 
                className={styles.floatingEmoji}
                // style={{ 
                //   animationDelay: `${index * 0.5}s`,
                //   top: `${Math.random() * 80}%`,
                //   left: `${Math.random() * 80}%`
                // }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}></div>
        <span>Scroll to Explore More</span>
      </div>
    </section>
  );
};

export default Hero;