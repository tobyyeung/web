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
    <header style={{ padding: '2rem 0', borderBottom: '1px solid var(--border-glass)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>
          <span className="gradient-text">Toby Yeung</span>
        </Link>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <button onClick={() => scrollToSection('experience')} style={{ color: 'var(--text-secondary)', fontWeight: '500', transition: 'color 0.2s' }}>Experience</button>
          <button onClick={() => scrollToSection('projects')} style={{ color: 'var(--text-secondary)', fontWeight: '500', transition: 'color 0.2s' }}>Projects</button>
          <button onClick={() => scrollToSection('education')} style={{ color: 'var(--text-secondary)', fontWeight: '500', transition: 'color 0.2s' }}>Education</button>
          <button onClick={() => scrollToSection('skills')} style={{ color: 'var(--text-secondary)', fontWeight: '500', transition: 'color 0.2s' }}>Skills</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
