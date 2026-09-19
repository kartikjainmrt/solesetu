import styles from "./CityCard.module.css";

interface CityCardProps {
  city: string;
  category: string;
  href: string;
}

export default function CityCard({
  city,
  category,
  href,
}: CityCardProps) {
  return (
    <a href={href} className={styles.card}>
      <div className={styles.image}>
        {city.charAt(0)}
      </div>

      <div className={styles.content}>
        <h3>{city}</h3>
        <p>{category}</p>
        <span>Explore factories →</span>
      </div>
    </a>
  );
}