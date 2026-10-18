import { useState } from 'react';
import styles from './Nav.module.css';

const pages = [
  { name: 'About', to: '#aboutme' },
  { name: 'Experience', to: '#experience' },
  { name: 'Qualifications', to: '#qualifications' },
  { name: 'Projects', to: '#projects' },
  { name: 'Contact', to: '#contactme' },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.NavBar}>
      <div className={styles.NavInner}>
        <a className={styles.Brand} href="#home" onClick={() => setMenuOpen(false)}>
          <span className={styles.BrandMark}>GR</span>
          <span>Gregor Ritchie</span>
        </a>
        <button
          className={styles.MenuButton}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="site-navigation"
          className={`${styles.NavLinks} ${menuOpen ? styles.Open : ''}`}
          aria-label="Main navigation"
        >
          {pages.map((page) => (
            <a key={page.to} href={page.to} onClick={() => setMenuOpen(false)}>
              {page.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;