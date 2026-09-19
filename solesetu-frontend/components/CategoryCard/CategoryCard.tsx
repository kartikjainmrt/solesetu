import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  name: string;
  description: string;
  href: string;
}

export default function CategoryCard({
  name,
  description,
  href,
}: CategoryCardProps) {
  return (
    <a href={href} className={styles.card}>
      <div className={styles.imagePlaceholder}>
        {name.charAt(0)}
      </div>

      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}