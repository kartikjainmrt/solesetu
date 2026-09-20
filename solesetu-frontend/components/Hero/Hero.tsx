import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>
            B2B Footwear & Apparel Marketplace
          </span>

          <h1>
            Source Directly From
            <span> Verified Factories</span>
          </h1>

          <p>
            Discover footwear and apparel manufacturers across India, compare
            products, connect with factories, and order at low MOQs.
          </p>

          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="Search products, categories or factories..."
            />

            <button>Search</button>
          </div>

          <div className={styles.quickLinks}>
            <span>Popular:</span>
            <a href="/products?category=footwear">Footwear</a>
            <a href="/products?category=sports">Sports Shoes</a>
            <a href="/products?category=sandals">Sandals</a>
            <a href="/factories">Factories</a>
          </div>
        </div>
      </div>
    </section>
  );
}
