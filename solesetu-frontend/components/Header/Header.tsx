"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      {" "}
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          SoleSetu
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/factories">Factories</Link>
          <Link href="/cities">Cities</Link>
          <Link href="/how-it-works">How It Works</Link>
        </nav>

        {/* Desktop Actions */}
        <div className={styles.actions}>
          <Link href="/login">Login</Link>

          <Link href="/register" className={styles.register}>
            Register
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className={`${styles.menuButton} ${
            menuOpen ? styles.menuButtonOpen : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>

            <Link href="/products" onClick={closeMenu}>
              Products
            </Link>

            <Link href="/factories" onClick={closeMenu}>
              Factories
            </Link>

            <Link href="/cities" onClick={closeMenu}>
              Cities
            </Link>

            <Link href="/how-it-works" onClick={closeMenu}>
              How It Works
            </Link>
          </nav>

          <div className={styles.mobileActions}>
            <Link href="/login" onClick={closeMenu}>
              Login
            </Link>

            <Link
              href="/register"
              className={styles.mobileRegister}
              onClick={closeMenu}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
