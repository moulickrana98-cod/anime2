'use client';
import Image from 'next/image';
import { useState } from 'react';
import type { Product } from './products';
import styles from './ProductCard.module.css';

interface Props {
  product: Product;
  onOpen: (p: Product) => void;
}

export default function ProductCard({ product, onOpen }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`${styles.card} ${hovered ? styles.hovered : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onOpen(product)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(product)}
      aria-label={`View details for ${product.name}`}
    >
      <div className={styles.imgWrap}>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className={styles.img}
        />
        {product.badge && (
          <span className={`${styles.badge} ${product.badge === 'Sale' ? styles.badgeSale : product.badge === 'Official' ? styles.badgeOfficial : ''}`}>
            {product.badge}
          </span>
        )}
        {product.isNew && <span className={styles.badgeNew}>New</span>}
        <div className={styles.overlay}>
          <span className={styles.overlayBtn}>View Details</span>
        </div>
      </div>
      <div className={styles.info}>
        <span className={styles.series}>{product.seriesLabel}</span>
        <h3 className={styles.name}>{product.name}</h3>
        <div className={styles.priceRow}>
          <span className={styles.price}>₹{product.price}</span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>₹{product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}
