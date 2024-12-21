'use client'

import Link from "next/link";
import Logo from "@/app/images/omerworks_logo.svg";
import styles from "@/app/components/header/page.module.css";
import { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles['nav-child']}>
          {/* Logo */}
          <li className={styles.logo}>
            <Link href="/">
              <Logo className={styles['logo-svg']} />
            </Link>
          </li>

          {/* Home Button */}
          <li className={styles['nav-elements']}>
            <button 
              onClick={scrollToTop} 
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                color: 'inherit',
                fontSize: 'inherit',
              }}
            >
              Home
            </button>
          </li>

          {/* Other Navigation Links */}
          <li className={styles['nav-elements']}>
            <Link href="#services-section">Services</Link>
          </li>

          <li className={styles['nav-elements']}>
            <Link href="#blog-section">Blog</Link>
          </li>

          <li className={styles['nav-elements']}>
            <Link href="#portfolio-section">Portfolio</Link>
          </li>

          <li className={styles['nav-elements']}>
            <Link href="#faqs-section">FAQs</Link>
          </li>

          <li className={styles['nav-elements']}>
            <Link href="#inquire-section">
              <button className={styles['nav-btn']}>
                <p className={styles['nav-btn-text']}>Inquire</p>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
