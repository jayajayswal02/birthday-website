"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './gallery.module.css';
import galleryImage1 from '../../assets/gallery/gallery1.jpg';
import galleryImage2 from '../../assets/gallery/gallery2.webp';
import galleryImage3 from '../../assets/gallery/gallery3.jpg';
import galleryImage4 from '../../assets/gallery/gallery4.jpg';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: galleryImage1.src,
    title: "Jungle Safari Celebration",
    category: "Safari Parties"
  },
  {
    id: 2,
    src: galleryImage2.src,
    title: "Royal Indian Safari",
    category: "Royal Themes"
  },
  {
    id: 3,
    src: galleryImage3.src,
    title: "Enchanted Forest Party",
    category: "Magical Themes"
  },
  {
    id: 4,
    src: galleryImage4.src,
    title: "Desert Safari Adventure",
    category: "Desert Themes"
  },
  // Add more images as needed
];

const categories = ["All", "Safari Parties", "Royal Themes", "Magical Themes", "Desert Themes"];

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section className={styles.gallerySection}>
      <div className={styles.galleryHeader}>
        <h2 className={styles.title}>
          <span className={styles.mainTitle}>Magical Moments</span>
          <span className={styles.subTitle}>Gallery of Safari Adventures</span>
        </h2>
        <div className={styles.categoryFilter}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                selectedCategory === category ? styles.active : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.galleryGrid}>
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className={styles.galleryItem}
            onClick={() => setSelectedImage(image)}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={image.src}
                alt={image.title}
                width={400}
                height={300}
                className={styles.image}
              />
              <div className={styles.imageOverlay}>
                <h3 className={styles.imageTitle}>{image.title}</h3>
                <span className={styles.imageCategory}>{image.category}</span>
                <button className={styles.viewButton}>
                  View Details
                  <span className={styles.viewIcon}>🔍</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={() => setSelectedImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton}
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              width={800}
              height={600}
              className={styles.modalImage}
            />
            <div className={styles.modalInfo}>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;