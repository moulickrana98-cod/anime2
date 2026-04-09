import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.brandName}>ANIME TREASURY</span>
            <p className={styles.tagline}>
              Official anime merchandise, curated with passion.<br />
              By fans, for fans.
            </p>
          </div>
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Shop</h4>
            <a href="#products" className={styles.link}>All Products</a>
            <a href="#products" className={styles.link}>Naruto Collection</a>
            <a href="#products" className={styles.link}>New Arrivals</a>
          </div>
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <a href="#about" className={styles.link}>About Us</a>
            <a href="#contact" className={styles.link}>Contact</a>
          </div>
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contact Us</h4>

            <p className={styles.contactLine}>📧 animetreasury44@gmail.com</p>

            {/* Instagram Section */}
            <div className={styles.instaBox}>
              <img 
                src="/animetreasury44_qr.png" 
                alt="Instagram QR" 
                className={styles.qr}
              />
              <p className={styles.contactLine}>
                📱 <a 
                  href="https://instagram.com/animetreasury44" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.instaLink}
                >
                  @animetreasury44
                </a>
              </p>
            </div>

            <p className={styles.contactLine}>🇮🇳 India</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>© {new Date().getFullYear()} Anime Treasury. All rights reserved. Owned by Moulick Rana.</p>
          <p className={styles.disclaimer}>All anime characters & trademarks belong to their respective owners.</p>
        </div>
      </div>
    </footer>
  );
}
