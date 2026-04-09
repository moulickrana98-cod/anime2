'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import type { Product } from './products';
import styles from './ProductModal.module.css';

interface Props {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleKey);
    if (product) document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal aria-label={product.name}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>
        <div className={styles.body}>
          <div className={styles.imgWrap}>
            <Image
              src={product.image}
              alt={product.name}
              width={480}
              height={480}
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <span className={styles.series}>{product.seriesLabel}</span>
            <h2 className={styles.name}>{product.name}</h2>
            <div className={styles.priceRow}>
              <span className={styles.price}>₹{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className={styles.originalPrice}>₹{product.originalPrice}</span>
                  <span className={styles.discount}>
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>
            <p className={styles.desc}>{product.description}</p>
            <div className={styles.details}>
              <h4 className={styles.detailsTitle}>What's included</h4>
              <ul className={styles.detailsList}>
                {product.details.map((d, i) => (
                  <li key={i} className={styles.detailItem}>
                    <span className={styles.tick}>✦</span> {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.actions}>
              <button className={styles.btnBuy}>Add to Cart</button>
              <button className={styles.btnWish}>♡ Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
