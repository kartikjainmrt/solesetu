import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.brand}>
            <h2>SoleSetu</h2>

            <p>
              A B2B marketplace connecting retailers
              directly with verified factories.
            </p>
          </div>

          <div className={styles.column}>
            <h3>Marketplace</h3>

            <a href="/products">Products</a>
            <a href="/categories">Categories</a>
            <a href="/factories">Factories</a>
            <a href="/cities">Browse by City</a>
          </div>

          <div className={styles.column}>
            <h3>For Retailers</h3>

            <a href="/register">Create Account</a>
            <a href="/how-it-works">How It Works</a>
            <a href="/products">Browse Products</a>
          </div>

          <div className={styles.column}>
            <h3>For Factories</h3>

            <a href="/sell-with-us">Sell With Us</a>
            <a href="/register">Register Factory</a>
            <a href="/factory/login">Factory Login</a>
          </div>

          <div className={styles.column}>
            <h3>Company</h3>

            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/blog">Resources</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>
            © 2026 SoleSetu. All rights reserved.
          </span>

          <div>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}