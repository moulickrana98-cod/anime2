'use client';
import { useState } from 'react';
import { products, seriesFilters } from './products';
import type { Product } from './products';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import styles from './ProductsSection.module.css';

export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = activeFilter === 'all'
    ? products
    : products.filter((p) =>
        activeFilter === 'naruto' ? p.series === 'naruto' : p.series !== 'naruto'
      );

  return (
    <section className={styles.section} id="products">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>✦ Our Collection</div>
          <h2 className={styles.title}>Featured Merchandise</h2>
          <p className={styles.sub}>
            Official licensed anime merchandise — keychains, figures, and collectibles
            from the worlds you love.
          </p>
        </div>

        <div className={styles.filters}>
          {seriesFilters.map((f) => (
            <button
              key={f.key}
              className={`${styles.filterBtn} ${activeFilter === f.key ? styles.active : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
              <span className={styles.filterCount}>
                {f.key === 'all'
                  ? products.length
                  : f.key === 'naruto'
                  ? products.filter((p) => p.series === 'naruto').length
                  : products.filter((p) => p.series !== 'naruto').length}
              </span>
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={setSelectedProduct} />
          ))}
        </div>
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
}
