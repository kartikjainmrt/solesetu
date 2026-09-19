import styles from "./ProductCard.module.css";

interface ProductCardProps {
  name: string;
  category: string;
  factory: string;
  city: string;
  moq: number;
  price: string;
  href: string;
}

export default function ProductCard({
  name,
  category,
  factory,
  city,
  moq,
  price,
  href,
}: ProductCardProps) {
  return (
    <a href={href} className={styles.card}>
      <div className={styles.image}>
        <span>Product</span>
      </div>

      <div className={styles.content}>
        <p className={styles.category}>{category}</p>

        <h3>{name}</h3>

        <p className={styles.factory}>{factory}</p>

        <p className={styles.city}>{city}</p>

        <div className={styles.bottom}>
          <div>
            <span className={styles.label}>MOQ</span>
            <strong>{moq} pcs</strong>
          </div>

          <div className={styles.price}>
            <span>From</span>
            <strong>{price}</strong>
          </div>
        </div>
      </div>
    </a>
  );
}