import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const navItems = [
  {
    label: 'Company',
    href: '#company',
    dropdown: [
      { label: 'About Us', sub: 'Building Future-Ready Solutions', href: '#about' },
      { label: 'Why Jupical', sub: 'Your Growth, Our Mission', href: '#why' },
      { label: 'Our Clients', sub: 'Happy Clients of Jupical', href: '#clients' },
      { label: 'Our Philosophy', sub: 'Simplicity. Scalability. Success.', href: '#philosophy' },
    ],
  },
  {
    label: 'Odoo ERPs',
    href: '#odoo-erps',
    dropdown: [
      { label: 'Manufacturing ERP', sub: 'Automate production & shop floor', href: '#manufacturing' },
      { label: 'Construction ERP', sub: 'Protecting materials with precision', href: '#construction' },
      { label: 'Healthcare ERP', sub: 'Open-Source Healthcare ERP', href: '#healthcare' },
      { label: 'Education ERP', sub: 'Open Source Education ERP', href: '#education' },
      { label: 'Hotel ERP', sub: 'Open Source ERP for Hospitality', href: '#hotel' },
      { label: 'Loan Management', sub: 'Open-Source Loan Management', href: '#lms' },
    ],
  },
  {
    label: 'Odoo Connectors',
    href: '#connectors',
    dropdown: [
      { label: 'Shopify', sub: 'E-Commerce', href: '#shopify' },
      { label: 'WooCommerce', sub: 'E-Commerce', href: '#woo' },
      { label: 'QuickBooks', sub: 'Accounting', href: '#qb' },
      { label: 'Xero', sub: 'Accounting', href: '#xero' },
      { label: 'BambooHR', sub: 'HR', href: '#bamboo' },
    ],
  },
  {
    label: 'Resources',
    href: '#resources',
    dropdown: [
      { label: 'Blogs', sub: 'Insights on ERP & Tech', href: '#blogs' },
      { label: 'Case Studies', sub: 'Real-world success stories', href: '#case-studies' },
      { label: 'Success Stories', sub: 'Video testimonials', href: '#success' },
    ],
  },
];

/* ---- Sun Icon ---- */
function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

/* ---- Moon Icon ---- */
function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

/* ---- Theme Toggle ---- */
function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      id="theme-toggle-btn"
      className="theme-toggle"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <span className={`theme-toggle__track${isDark ? ' theme-toggle__track--dark' : ''}`}>
        <span className="theme-toggle__thumb">
          <span className={`theme-toggle__icon theme-toggle__icon--sun${!isDark ? ' theme-toggle__icon--active' : ''}`}>
            <SunIcon />
          </span>
          <span className={`theme-toggle__icon theme-toggle__icon--moon${isDark ? ' theme-toggle__icon--active' : ''}`}>
            <MoonIcon />
          </span>
        </span>
      </span>
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar__inner container">

        {/* Logo */}
        <a href="#" className="navbar__logo" id="nav-logo">
          <img src="/jupical-logo.png" alt="Jupical Technologies Logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">JUPICAL</span>
          <span className="navbar__logo-dot">.</span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="navbar__links" role="menubar">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="navbar__item"
              role="none"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                id={`nav-${item.label.toLowerCase().replace(/\s/g, '-')}`}
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={openDropdown === item.label}
                className={`navbar__link${activeItem === item.label ? ' navbar__link--active' : ''}`}
                onClick={() => setActiveItem(item.label)}
              >
                {activeItem === item.label
                  ? `[ ${item.label.toUpperCase()} ]`
                  : item.label}
                <svg className="navbar__chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {item.dropdown && (
                <div
                  className={`navbar__dropdown${openDropdown === item.label ? ' navbar__dropdown--open' : ''}`}
                  role="menu"
                >
                  {item.dropdown.map((d) => (
                    <a key={d.label} href={d.href} className="navbar__dropdown-item" role="menuitem">
                      <span className="navbar__dropdown-label">{d.label}</span>
                      <span className="navbar__dropdown-sub">{d.sub}</span>
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right — Theme toggle + CTA + Hamburger */}
        <div className="navbar__cta">
          <ThemeToggle />
          <a href="#contact" id="nav-contact-btn" className="btn-primary navbar__contact-btn">
            Contact Us
          </a>
          <button
            className={`navbar__hamburger${mobileOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            id="nav-hamburger"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${mobileOpen ? ' navbar__mobile--open' : ''}`}>
        {navItems.map((item) => (
          <div key={item.label} className="navbar__mobile-group">
            <span className="navbar__mobile-heading">{item.label}</span>
            {item.dropdown?.map((d) => (
              <a key={d.label} href={d.href} className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
                {d.label}
              </a>
            ))}
          </div>
        ))}
        <div className="navbar__mobile-footer">
          <ThemeToggle />
          <a href="#contact" className="btn-primary" onClick={() => setMobileOpen(false)}>
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
