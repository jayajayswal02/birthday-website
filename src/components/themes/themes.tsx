"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './themes.module.css';
import themeImage1 from '../../assets/theme/theme2.jpg';
import themeImage2 from '../../assets/theme/theme1.jpg';
import themeImage3 from '../../assets/theme/theme3.jpg';
import themeImage4 from '../../assets/theme/theme4.jpg';  

import type { StaticImageData } from 'next/image';

interface Theme {
  id: number;
  name: string;
  description: string;
  image: string | StaticImageData;
  price: string;
  features: string[];
  emoji: string;
}

const themes: Theme[] = [
  {
    id: 1,
    name: "Jungle Safari Adventure",
    description: "Transform your party into a wild adventure with jungle-themed decorations and exciting safari activities!",
    image: themeImage1,
    price: "Starting from ₹15,000",
    features: ["Animal-themed decorations", "Safari guide activities", "Face painting", "Treasure hunt"],
    emoji: "🦁"
  },
  {
    id: 2,
    name: "Royal Indian Safari",
    description: "Experience the grandeur of Indian royalty mixed with safari excitement!",
    image: themeImage2,
    price: "Starting from ₹20,000",
    features: ["Royal tent setup", "Traditional music", "Elephant rides", "Royal feast"],
    emoji: "🐘"
  },
  {
    id: 3,
    name: "Magical Forest Safari",
    description: "Step into an enchanted forest with magical creatures and mystical adventures!",
    image: themeImage3,
    price: "Starting from ₹18,000",
    features: ["Fairy lights setup", "Magic shows", "Forest creature costumes", "Enchanted games"],
    emoji: "🦒"
  },
  {
    id: 4,
    name: "Desert Safari Carnival",
    description: "Experience the thrill of desert adventures with carnival fun!",
    image: themeImage4,
    price: "Starting from ₹16,000",
    features: ["Desert tent setup", "Camel decoration", "Sand art", "Arabian nights theme"],
    emoji: "🐪"
  }
];

const ThemesSection = () => {
  const [activeTheme, setActiveTheme] = useState<number | null>(null);

  return (
    <section className={styles.themesSection}>
      <div className={styles.themesHeader}>
        <h2 className={styles.title}>
          <span className={styles.mainTitle}>Magical Theme Options</span>
          <span className={styles.subTitle}>Choose Your Safari Adventure</span>
        </h2>
        <p className={styles.description}>
          Discover our enchanting birthday themes that blend safari adventures with Indian magic
        </p>
      </div>

      <div className={styles.themesGrid}>
        {themes.map((theme) => (
          <div
            key={theme.id}
            className={`${styles.themeCard} ${activeTheme === theme.id ? styles.active : ''}`}
            onMouseEnter={() => setActiveTheme(theme.id)}
            onMouseLeave={() => setActiveTheme(null)}
          >
            <div className={styles.themeImageContainer}>
              <Image
                src={theme.image}
                alt={theme.name}
                width={400}
                height={300}
                className={styles.themeImage}
              />
              <span className={styles.themeEmoji}>{theme.emoji}</span>
            </div>

            <div className={styles.themeContent}>
              <h3 className={styles.themeName}>{theme.name}</h3>
              <p className={styles.themeDescription}>{theme.description}</p>
              
              <ul className={styles.themeFeatures}>
                {theme.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    ✨ {feature}
                  </li>
                ))}
              </ul>

              <div className={styles.themeFooter}>
                <span className={styles.price}>{theme.price}</span>
                <button className={styles.bookButton}>
                  Book This Theme
                  <span className={styles.buttonArrow}>→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThemesSection;