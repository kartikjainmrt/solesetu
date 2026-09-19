import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Logo */}

        <Link href="/" className={styles.logo}>
          SoleSetu
        </Link>

        {/* Navigation */}

        <nav className={styles.nav}>
          <Link href="/">
            Home
          </Link>

          <Link href="/products">
            Products
          </Link>

          <Link href="/factories">
            Factories
          </Link>

          <Link href="/cities">
            Cities
          </Link>

          <Link href="/how-it-works">
            How It Works
          </Link>
        </nav>

        {/* Actions */}

        <div className={styles.actions}>
          <Link href="/login">
            Login
          </Link>

          <Link
            href="/register"
            className={styles.register}
          >
            Register
          </Link>
        </div>

      </div>
    </header>
  );
}