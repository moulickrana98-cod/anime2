import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.imgCol}>
            <div className={styles.imgWrap}>
              <Image
                src="/images/logo.png"
                alt="Anime Treasury"
                width={280}
                height={280}
                className={styles.img}
              />
            </div>
            <div className={styles.glow} />
          </div>
          <div className={styles.content}>
            <div className={styles.label}>✦ Our Story</div>
            <h2 className={styles.title}>Passion for Anime,<br />Delivered to You</h2>
            <p className={styles.desc}>
              Anime Treasury was born from a deep love of anime culture. Founded by{' '}
              <strong>Moulick Rana</strong>, we bring fans officially licensed merchandise
              from their favourite series — sourced with authenticity and delivered with care.
            </p>
            <p className={styles.desc}>
              Every product in our collection is carefully curated to ensure quality,
              authenticity, and that special feeling only true anime fans understand.
              From iconic characters to rare collectibles — this is your treasury.
            </p>
            <div className={styles.pillRow}>
              {['Official Licensed', '100% Authentic', 'Fan Curated', 'Fast Shipping'].map((p) => (
                <span key={p} className={styles.pill}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
