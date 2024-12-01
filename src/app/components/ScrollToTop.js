'use client'
import { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '39px',
          right: '40px',
          backgroundColor: 'white',
          color: '#27272E',
          border: 'none',
          borderRadius: '50%',
          backgroundColor: 'white',
          color: '#27272E',
          border: 'none',
          borderRadius: '50%',
          padding: '25px 25px',
          fontSize: '0px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: '1000',
          transition: 'transform 0.3s ease',
        }}
        className="scroll-to-top-btn"
      >
        {/* <i className='bx bx-up-arrow-alt'></i> */}
      </button>
    )
  );
}
