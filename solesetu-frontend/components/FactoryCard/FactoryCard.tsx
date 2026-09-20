import styles from "./FactoryCard.module.css";

interface FactoryCardProps {
  name: string;
  city: string;
  categories: string;
  products: number;
  moq: string;
  verified: boolean;
  href: string;
}

export default function FactoryCard({
  name,
  city,
  categories,
  products,
  moq,
  verified,
  href,
}: FactoryCardProps) {
  return (
    <a href={href} className={styles.card}>
      <div className={styles.top}>
        <div className={styles.logo}>{name.charAt(0)}</div>

        {verified && <span className={styles.verified}>✓ Verified</span>}
      </div>

      <div className={styles.content}>
        <h3>{name}</h3>

        <p className={styles.city}>📍 {city}</p>

        <p className={styles.categories}>{categories}</p>

        <div className={styles.details}>
          <div>
            <span>Products</span>
            <strong>{products}+</strong>
          </div>

          <div>
            <span>MOQ</span>
            <strong>{moq}</strong>
          </div>
        </div>
      </div>

      <div className={styles.footer}>View factory →</div>
    </a>
  );
}
