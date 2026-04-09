import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.tagline}>✦ Official Licensed Merchandise</div>
          <h1 className={styles.title}>
            Your Anime<br />
            <span className={styles.accent}>Treasury</span><br />
            Awaits
          </h1>
          <p className={styles.desc}>
            Premium collectibles, chibi keychains, and official merchandise
            from your favourite anime series — curated with love by Moulick Rana.
          </p>
          <div className={styles.actions}>
            <a href="#products" className={styles.btnPrimary}>Shop Now</a>
            <a href="#about" className={styles.btnSecondary}>Learn More</a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>50+</span>
              <span className={styles.statLbl}>Products</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>12+</span>
              <span className={styles.statLbl}>Anime Series</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLbl}>Licensed</span>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.logoGlow} />
          <div className={styles.logoFloat}>
            <Image
              src="/images/logo.png"
              alt="Anime Treasury"
              width={320}
              height={320}
              className={styles.logoImg}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
