import Link from "next/link";
import styles from "./PromoBanner.module.css";

export default function PromoBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <p className={styles.label}>
          SOLESETU COLLECTION
        </p>

        <h2>
          Comfort that
          <br />
          moves with you.
        </h2>

        <p className={styles.description}>
          Discover footwear made for your everyday journey.
        </p>

        <Link
          href="/products"
          className={styles.button}
        >
          Shop Collection
        </Link>
      </div>
    </section>
  );
}