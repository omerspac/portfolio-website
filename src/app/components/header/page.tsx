'use client'

import Link from "next/link";
import Logo from "@/app/images/omerworks_logo.svg";
import { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Header() {
  // ScrollToTop function (same logic as in ScrollToTopButton)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This enables smooth scroll
    });
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-child">
          {/* Logo */}
          <li className="logo">
            <Link href="/">
              <Logo className="logo-svg" />
            </Link>
          </li>

          {/* Home Button */}
          <li className="nav-elements">
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
          <li className="nav-elements">
            <Link href="#services-section">Services</Link>
          </li>

          <li className="nav-elements">
            <Link href="/">Case Study</Link>
          </li>

          <li className="nav-elements">
            <Link href="/">Portfolio</Link>
          </li>

          <li className="nav-elements">
            <Link href="/">FAQs</Link>
          </li>

          <li className="nav-elements">
            <Link href="/">
              <button className="nav-btn">
                <p className="nav-btn-text">Inquire</p>
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
