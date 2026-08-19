import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

/* ---- Company Dropdown - Left Column Items (Why Jupical Overview) ---- */
const whyJupicalLeftItems = [
  {
    title: 'Our Approach',
    sub: 'Simple. Scalable. Future-Ready.',
    href: '#about',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
  {
    title: 'Our Philosophy',
    sub: 'Simplicity. Scalability. Success.',
    href: '#philosophy',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1.3.5 2.5 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 21h4" />
      </svg>
    ),
  },
  {
    title: 'Our Clients',
    sub: 'Trusted by Growing Businesses.',
    href: '#clients',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

/* ---- Company Dropdown - Right Column Cards (5 Company Sections) ---- */
const companySections = [
  {
    num: '01',
    label: 'About Us',
    sub: 'Building Future-Ready Solutions',
    href: '#about',
    accent: '#2563EB',
    gradient: 'linear-gradient(135deg, #2563EB, #4F8CFF)',
    rgb: '37, 99, 235',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" />
        <path d="M6 12H4a2 2 0 0 0-2 2v8" />
        <path d="M18 9h2a2 2 0 0 1 2 2v11" />
        <path d="M10 6h4" />
        <path d="M10 10h4" />
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8" />
        <path d="M15 18h-5" />
      </svg>
    ),
  },
];

/* ---- Real Header Links ---- */
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
      { label: 'Shopify', sub: 'E-Commerce integration', href: '#shopify' },
      { label: 'WooCommerce', sub: 'E-Commerce integration', href: '#woo' },
      { label: 'QuickBooks', sub: 'Accounting bridge', href: '#qb' },
      { label: 'Xero', sub: 'Accounting bridge', href: '#xero' },
      { label: 'BambooHR', sub: 'HR & Payroll bridge', href: '#bamboo' },
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

/* ---- Theme Toggle Button ---- */
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
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccOpen, setMobileAccOpen] = useState(null);

  const navRef = useRef(null);

  // Scroll listener for sticky navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Outside click listener to close dropdowns
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Escape key listener to close dropdowns
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}${openDropdown ? ' navbar--active' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__inner container">

        {/* Brand Logo */}
        <a href="#" className="navbar__logo" id="nav-logo">
          <img src="/jupical-logo.png" alt="Jupical Technologies Logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">JUPICAL</span>
          <span className="navbar__logo-dot">.</span>
        </a>

        {/* Real Desktop Navigation Links: Company, Odoo ERPs, Odoo Connectors, Resources */}
        <ul className="navbar__links" role="menubar">
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`navbar__item ${item.isCompany ? 'navbar__item--company' : ''}`}
              role="none"
              onMouseEnter={() => setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                id={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={openDropdown === item.label}
                className={`navbar__link ${openDropdown === item.label ? 'navbar__link--active' : ''}`}
                onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
              >
                <span>{item.label}</span>
                <svg className={`navbar__chevron ${openDropdown === item.label ? 'navbar__chevron--rotated' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Special Mega-Dropdown for COMPANY */}
              {item.isCompany ? (
                <div
                  className={`company-mega-dropdown ${openDropdown === 'Company' ? 'company-mega-dropdown--open' : ''}`}
                  role="menu"
                  aria-label="Company Overview and Sections"
                >
                  <div className="company-mega__inner">
                    
                    {/* LEFT COLUMN: Why Jupical Overview (Clean design, no watermark background text!) */}
                    <div className="company-mega__left">
                      <div className="company-mega__eyebrow-wrap">
                        <span className="company-mega__eyebrow-line" />
                        <span className="company-mega__eyebrow-text">WHY JUPICAL</span>
                      </div>

                      <h3 className="company-mega__heading">
                        Everything You Need to Grow Smarter
                      </h3>

                      <p className="company-mega__desc">
                        Explore how Jupical combines Odoo expertise, industry knowledge and scalable technology to help businesses grow.
                      </p>

                      <div className="company-mega__left-list">
                        {whyJupicalLeftItems.map((lItem) => (
                          <a
                            key={lItem.title}
                            href={lItem.href}
                            className="company-left-item"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <div className="company-left-item__icon">
                              {lItem.icon}
                            </div>
                            <div className="company-left-item__content">
                              <div className="company-left-item__title-row">
                                <span className="company-left-item__title">{lItem.title}</span>
                                <svg className="company-left-item__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <line x1="5" y1="12" x2="19" y2="12" />
                                  <polyline points="12 5 19 12 12 19" />
                                </svg>
                              </div>
                              <span className="company-left-item__sub">{lItem.sub}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* CENTER DIVIDER */}
                    <div className="company-mega__divider" aria-hidden="true" />

                    {/* RIGHT COLUMN: 5 Company Sections (About Us, Why Jupical, Our Clients, Our Philosophy, Blog) */}
                    <div className="company-mega__right">
                      <div className="company-mega__right-header">
                        <span className="company-mega__right-badge">COMPANY SECTIONS</span>
                        <span className="company-mega__right-sub">Explore our vision, clients and insights</span>
                      </div>

                      <div className="company-sections-grid">
                        {companySections.map((sec) => (
                          <a
                            key={sec.num}
                            href={sec.href}
                            className="company-sec-card"
                            onClick={() => setOpenDropdown(null)}
                            style={{
                              '--sec-accent': sec.accent,
                              '--sec-gradient': sec.gradient,
                              '--sec-rgb': sec.rgb,
                            }}
                          >
                            <div className="company-sec-card__top">
                              <div className="company-sec-card__icon-box" style={{ background: sec.gradient }}>
                                {sec.icon}
                              </div>
                              <span className="company-sec-card__num">{sec.num}</span>
                            </div>

                            <div className="company-sec-card__body">
                              <div className="company-sec-card__title-row">
                                <span className="company-sec-card__title">{sec.label}</span>
                                <svg className="company-sec-card__arrow" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <line x1="7" y1="17" x2="17" y2="7" />
                                  <polyline points="7 7 17 7 17 17" />
                                </svg>
                              </div>
                              <span className="company-sec-card__sub">{sec.sub}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              ) : item.dropdown ? (
                /* Standard Dropdown for Odoo ERPs, Odoo Connectors, Resources */
                <div
                  className={`navbar__dropdown ${openDropdown === item.label ? 'navbar__dropdown--open' : ''}`}
                  role="menu"
                >
                  {item.dropdown.map((d) => (
                    <a
                      key={d.label}
                      href={d.href}
                      className="navbar__dropdown-item"
                      role="menuitem"
                      onClick={() => setOpenDropdown(null)}
                    >
                      <span className="navbar__dropdown-label">{d.label}</span>
                      <span className="navbar__dropdown-sub">{d.sub}</span>
                    </a>
                  ))}
                </div>
              ) : null}

            </li>
          ))}
        </ul>

        {/* Right CTA Button & Theme Toggle */}
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

      {/* Mobile Drawer */}
      <div className={`navbar__mobile${mobileOpen ? ' navbar__mobile--open' : ''}`}>
        <div className="navbar__mobile-inner">
          {navItems.map((item) => (
            <div key={item.label} className="navbar__mobile-group">
              {item.isCompany ? (
                <>
                  <button
                    className="navbar__mobile-heading-btn"
                    onClick={() => setMobileAccOpen(mobileAccOpen === 'Company' ? null : 'Company')}
                  >
                    <span>Company</span>
                    <svg className={`acc-chevron ${mobileAccOpen === 'Company' ? 'rotated' : ''}`} width="14" height="14" viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <div className={`navbar__mobile-acc-content ${mobileAccOpen === 'Company' ? 'open' : ''}`}>
                    {companySections.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        className="navbar__mobile-link navbar__mobile-link--company"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="mobile-num" style={{ color: c.accent }}>{c.num}</span>
                        <div className="mobile-text">
                          <span className="mobile-title">{c.label}</span>
                          <span className="mobile-sub">{c.sub}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </>
              ) : item.dropdown ? (
                <>
                  <button
                    className="navbar__mobile-heading-btn"
                    onClick={() => setMobileAccOpen(mobileAccOpen === item.label ? null : item.label)}
                  >
                    <span>{item.label}</span>
                    <svg className={`acc-chevron ${mobileAccOpen === item.label ? 'rotated' : ''}`} width="14" height="14" viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <div className={`navbar__mobile-acc-content ${mobileAccOpen === item.label ? 'open' : ''}`}>
                    {item.dropdown.map((d) => (
                      <a
                        key={d.label}
                        href={d.href}
                        className="navbar__mobile-link"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="mobile-title">{d.label}</span>
                        <span className="mobile-sub">{d.sub}</span>
                      </a>
                    ))}
                  </div>
                </>
              ) : null}
            </div>
          ))}

          <div className="navbar__mobile-footer">
            <ThemeToggle />
            <a href="#contact" className="btn-primary" onClick={() => setMobileOpen(false)}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
