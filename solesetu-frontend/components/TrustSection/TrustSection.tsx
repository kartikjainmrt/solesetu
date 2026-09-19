import styles from "./TrustSection.module.css";

const trustPoints = [
  {
    number: "01",
    title: "Verified Factories",
    description:
      "Connect with factories that have completed platform verification.",
  },
  {
    number: "02",
    title: "Transparent Pricing",
    description:
      "See MOQ and wholesale slab pricing before placing your order.",
  },
  {
    number: "03",
    title: "Low MOQ",
    description:
      "Source directly from manufacturers without traditional large MOQs.",
  },
  {
    number: "04",
    title: "Order Tracking",
    description:
      "Track your order from factory confirmation through dispatch and delivery.",
  },
];

export default function TrustSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <p>WHY SOLESETU</p>

          <h2>
            Built to make B2B sourcing simpler.
          </h2>

          <span>
            Discover suppliers, understand pricing and manage
            your sourcing journey from one platform.
          </span>
        </div>

        <div className={styles.grid}>
          {trustPoints.map((point) => (
            <div className={styles.card} key={point.number}>
              <span className={styles.number}>
                {point.number}
              </span>

              <h3>{point.title}</h3>

              <p>{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}