'use client';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logoWrap}>
            <Image src="/images/logo.png" alt="Anime Treasury" width={40} height={40} className={styles.logo} />
          </div>
          <div>
            <span className={styles.brandName}>ANIME TREASURY</span>
            <span className={styles.brandSub}>by Moulick Rana</span>
          </div>
        </div>
        <div className={styles.links}>
          <a href="#products" className={styles.link}>Shop</a>
          <a href="#about" className={styles.link}>About</a>
          <a href="#contact" className={styles.cta}>Contact Us</a>
        </div>
      </div>
    </nav>
  );
}
