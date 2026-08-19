import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const companyDropdownItems = [
  {
    num: '01',
    label: 'About Us',
    sub: 'Building Future-Ready Solutions',
    href: '#about',
    accent: '#2563EB',
    gradient: 'linear-gradient(135deg, #2563EB, #4F8CFF)',
    rgb: '37, 99, 235',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
        <path d="M6 12H4a2 2 0 0 0-2 2v8" />
        <path d="M18 9h2a2 2 0 0 1 2 2v11" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
        <path d="M10 14h4" />
      </svg>
    ),
  },
  {
    num: '02',
    label: 'Why Jupical',
    sub: 'Your Growth, Our Mission',
    href: '#why',
    accent: '#7C3AED',
    gradient: 'linear-gradient(135deg, #7C3AED, #9F67FF)',
    rgb: '124, 58, 237',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    num: '03',
    label: 'Our Clients',
    sub: 'Trusted by Growing Businesses',
    href: '#clients',
    accent: '#0F9F9A',
    gradient: 'linear-gradient(135deg, #0F9F9A, #22C7BE)',
    rgb: '15, 159, 154',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 15h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2" />
        <path d="M18 11V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v7" />
        <path d="M7 15l-3 3a2 2 0 0 0 0 2.83l.17.17a2 2 0 0 0 2.83 0l3.5-3.5" />
      </svg>
    ),
  },
  {
    num: '04',
    label: 'Our Philosophy',
    sub: 'Simplicity. Scalability. Success.',
    href: '#philosophy',
    accent: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
    rgb: '245, 158, 11',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.5 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 21h4" />
      </svg>
    ),
  },
  {
    num: '05',
    label: 'Blog',
    sub: 'Ideas, Trends & Technology',
    href: '#blogs',
    accent: '#F97316',
    gradient: 'linear-gradient(135deg, #F97316, #FB923C)',
    rgb: '249, 115, 22',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8" />
        <path d="M15 18h-5" />
      </svg>
    ),
  },
];

const navItems = [
  {
    label: 'Company',
    href: '#company',
    isCompany: true,
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

/* ---- Company Dropdown Item Card inside Navbar Mega Menu ---- */
function NavbarCompanyCard({ item, onClose }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <a
      href={item.href}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={onClose}
      className="nav-company-card"
      style={{
        '--nav-card-accent': item.accent,
        '--nav-card-gradient': item.gradient,
        '--nav-card-rgb': item.rgb,
      }}
    >
      <div className="nav-company-card__spotlight" aria-hidden="true" />
      <div className="nav-company-card__top">
        <div className="nav-company-card__icon" style={{ background: item.gradient }}>
          {item.icon}
        </div>
        <span className="nav-company-card__num">{item.num}</span>
      </div>
      <div className="nav-company-card__content">
        <div className="nav-company-card__title-row">
          <span className="nav-company-card__title">{item.label}</span>
          <svg className="nav-company-card__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
        <span className="nav-company-card__sub">{item.sub}</span>
      </div>
    </a>
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
              className={`navbar__item ${item.isCompany ? 'navbar__item--company' : ''}`}
              role="none"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={item.href}
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
              </a>

              {/* Special Mega-Dropdown for Company */}
              {item.isCompany ? (
                <div
                  className={`navbar__dropdown navbar__dropdown--company ${
                    openDropdown === 'Company' ? 'navbar__dropdown--open' : ''
                  }`}
                  role="menu"
                >
                  <div className="nav-company-dropdown__header">
                    <span className="nav-company-dropdown__badge-line" />
                    <span className="nav-company-dropdown__badge-text">EXPLORE JUPICAL</span>
                  </div>
                  <div className="nav-company-dropdown__grid">
                    {companyDropdownItems.map((cItem) => (
                      <NavbarCompanyCard
                        key={cItem.num}
                        item={cItem}
                        onClose={() => setOpenDropdown(null)}
                      />
                    ))}
                  </div>
                </div>
              ) : item.dropdown ? (
                /* Standard Dropdown for other items */
                <div
                  className={`navbar__dropdown ${
                    openDropdown === item.label ? 'navbar__dropdown--open' : ''
                  }`}
                  role="menu"
                >
                  {item.dropdown.map((d) => (
                    <a key={d.label} href={d.href} className="navbar__dropdown-item" role="menuitem">
                      <span className="navbar__dropdown-label">{d.label}</span>
                      <span className="navbar__dropdown-sub">{d.sub}</span>
                    </a>
                  ))}
                </div>
              ) : null}
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
        <div className="navbar__mobile-group">
          <span className="navbar__mobile-heading">Company</span>
          {companyDropdownItems.map((c) => (
            <a key={c.label} href={c.href} className="navbar__mobile-link navbar__mobile-link--company" onClick={() => setMobileOpen(false)}>
              <span className="mobile-num" style={{ color: c.accent }}>{c.num}</span>
              <div className="mobile-text">
                <span className="mobile-title">{c.label}</span>
                <span className="mobile-sub">{c.sub}</span>
              </div>
            </a>
          ))}
        </div>

        {navItems.filter(i => !i.isCompany).map((item) => (
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
