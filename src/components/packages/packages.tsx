"use client";
import { useState } from 'react';
import styles from './packages.module.css';

interface Package {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
}

const packages: Package[] = [
  {
    id: 1,
    name: "Safari Adventure Basic",
    price: "₹25,000",
    description: "Perfect for intimate celebrations with essential safari-themed decorations",
    features: [
      "3-hour party duration",
      "Basic safari decorations",
      "Birthday cake (1kg)",
      "Games coordinator",
      "10 guest capacity",
      "Basic photo session"
    ],
    popular: false,
    icon: "🦒"
  },
  {
    id: 2,
    name: "Royal Safari Deluxe",
    price: "₹45,000",
    description: "Our most popular package with premium decorations and activities",
    features: [
      "4-hour party duration",
      "Premium safari decorations",
      "Custom theme cake (2kg)",
      "Professional photographer",
      "25 guest capacity",
      "Face painting station",
      "Safari costume rentals",
      "Themed party favors"
    ],
    popular: true,
    icon: "🐘"
  },
  {
    id: 3,
    name: "Grand Safari Ultimate",
    price: "₹75,000",
    description: "The ultimate safari celebration with all premium features",
    features: [
      "6-hour party duration",
      "Luxury safari decorations",
      "Custom theme cake (3kg)",
      "Professional photo & video",
      "50 guest capacity",
      "Live entertainment",
      "Safari costume rentals",
      "Premium party favors",
      "Themed food station",
      "VIP guest services"
    ],
    popular: false,
    icon: "🦁"
  }
];

const PackagesSection = () => {
  const [hoveredPackage, setHoveredPackage] = useState<number | null>(null);

  return (
    <section className={styles.packagesSection}>
      <div className={styles.packagesHeader}>
        <h2 className={styles.title}>
          <span className={styles.mainTitle}>Safari Adventure Packages</span>
          <span className={styles.subTitle}>Choose Your Perfect Celebration</span>
        </h2>
        <p className={styles.description}>
          Discover our carefully crafted packages for an unforgettable birthday safari experience
        </p>
      </div>

      <div className={styles.packagesGrid}>
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`${styles.packageCard} ${pkg.popular ? styles.popular : ''} ${
              hoveredPackage === pkg.id ? styles.hovered : ''
            }`}
            onMouseEnter={() => setHoveredPackage(pkg.id)}
            onMouseLeave={() => setHoveredPackage(null)}
          >
            {pkg.popular && (
              <span className={styles.popularBadge}>
                Most Popular
                <span className={styles.badgeIcon}>⭐</span>
              </span>
            )}
            
            <div className={styles.packageHeader}>
              <span className={styles.packageIcon}>{pkg.icon}</span>
              <h3 className={styles.packageName}>{pkg.name}</h3>
              <p className={styles.packagePrice}>
                <span className={styles.currency}>₹</span>
                {pkg.price.replace('₹', '')}
              </p>
              <p className={styles.packageDescription}>{pkg.description}</p>
            </div>

            <ul className={styles.featuresList}>
              {pkg.features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <span className={styles.featureIcon}>✨</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button className={styles.bookButton}>
              Book This Package
              <span className={styles.buttonArrow}>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackagesSection;