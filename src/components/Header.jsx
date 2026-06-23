import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      // If we are not on the home page, we can't scroll to the section.
      window.location.href = '/#/';
    }
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'var(--bg-glass)', backdropFilter: 'blur(12px)', padding: '1.5rem 0', borderBottom: '1px solid var(--border-glass)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>
          <span className="gradient-text">Toby Yeung</span>
        </Link>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <button onClick={() => scrollToSection('experience')} style={{ fontFamily: 'var(--font-casual)', color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.25rem', fontWeight: '700', transition: 'color 0.2s' }}>Experience</button>
          <button onClick={() => scrollToSection('projects')} style={{ fontFamily: 'var(--font-casual)', color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.25rem', fontWeight: '700', transition: 'color 0.2s' }}>Projects</button>
          <button onClick={() => scrollToSection('education')} style={{ fontFamily: 'var(--font-casual)', color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.25rem', fontWeight: '700', transition: 'color 0.2s' }}>Education</button>
          <button onClick={() => scrollToSection('skills')} style={{ fontFamily: 'var(--font-casual)', color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.25rem', fontWeight: '700', transition: 'color 0.2s' }}>Skills</button>
          <a href="mailto:tobycyeung@gmail.com" className="btn btn-primary" style={{ marginLeft: '0', padding: '0.6rem 1.25rem' }}>Contact Me</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
