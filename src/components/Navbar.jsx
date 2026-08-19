import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

/* ---- 3 Left Column Items ---- */
const leftColumnItems = [
  {
    title: 'Our Approach',
    sub: 'Simple. Scalable. Future-Ready.',
    href: '#about',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

/* ---- 7 Industry Solutions Items ---- */
const industryItems = [
  {
    num: '01',
    title: 'Healthcare',
    sub: 'Open-Source Healthcare ERP',
    href: '#healthcare',
    gradient: 'linear-gradient(135deg, #2563EB, #06B6D4)',
    accentRgb: '37, 99, 235',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M12 9v6" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'PMS',
    sub: 'Property Management Solutions',
    href: '#pms',
    gradient: 'linear-gradient(135deg, #0F9F9A, #10B981)',
    accentRgb: '15, 159, 154',
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
    num: '03',
    title: 'Maintenance',
    sub: 'Smart Maintenance Management',
    href: '#maintenance',
    gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
    accentRgb: '139, 92, 246',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Hotel',
    sub: 'Open-Source ERP for Hospitality',
    href: '#hotel',
    gradient: 'linear-gradient(135deg, #F97316, #FB923C)',
    accentRgb: '249, 115, 22',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 22v-65a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v65" />
        <path d="M2 22h20" />
        <path d="M6 10H4a2 2 0 0 0-2 2v10" />
        <path d="M20 10h-2" />
        <path d="M18 22V12a2 2 0 0 1 2-2h2v12" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 6h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'LMS',
    sub: 'Learning Management Solutions',
    href: '#lms',
    gradient: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
    accentRgb: '99, 102, 241',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Construction',
    sub: 'Construction ERP & Material Management',
    href: '#construction',
    gradient: 'linear-gradient(135deg, #06B6D4, #3B82F6)',
    accentRgb: '6, 182, 212',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m2 22 1-1h3l1 1" />
        <path d="M14 6 8 12" />
        <path d="M2 13h10" />
        <path d="m18 22 1-1h3l1 1" />
        <path d="M15 13a4 4 0 0 1 8 0v9H15z" />
        <path d="M3 22V8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v14" />
      </svg>
    ),
  },
  {
    num: '07',
    title: 'Education',
    sub: 'Education Management ERP',
    href: '#education',
    gradient: 'linear-gradient(135deg, #EC4899, #8B5CF6)',
    accentRgb: '236, 72, 153',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

/* ---- Header Navigation Items ---- */
const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Why Jupical', href: '#why', isMega: true },
  { label: 'Our Clients', href: '#clients' },
  { label: 'Our Philosophy', href: '#philosophy' },
  { label: 'Blog', href: '#blogs' },
  { label: 'Contact Us', href: '#contact' },
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
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileWhyOpen, setMobileWhyOpen] = useState(false);

  const navRef = useRef(null);

  // Scroll listener for sticky navbar background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Outside click listener to close mega menu
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  // Escape key listener to close mega menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}${megaOpen ? ' navbar--mega-active' : ''}`}
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

        {/* Desktop Header Links */}
        <ul className="navbar__links" role="menubar">
          {navLinks.map((item) => {
            if (item.isMega) {
              return (
                <li
                  key={item.label}
                  className="navbar__item navbar__item--why"
                  role="none"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    id="nav-why-jupical"
                    role="menuitem"
                    aria-haspopup="true"
                    aria-expanded={megaOpen}
                    className={`navbar__link navbar__link--mega ${megaOpen ? 'navbar__link--active-mega' : ''}`}
                    onClick={() => setMegaOpen(!megaOpen)}
                  >
                    <span>{item.label}</span>
                    <svg className={`navbar__chevron ${megaOpen ? 'navbar__chevron--rotated' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* Mega Dropdown Menu Container */}
                  <div
                    className={`mega-dropdown ${megaOpen ? 'mega-dropdown--open' : ''}`}
                    role="menu"
                    aria-label="Why Jupical Industry Solutions"
                  >
                    <div className="mega-dropdown__inner">
                      
                      {/* LEFT COLUMN: Why Jupical Overview */}
                      <div className="mega-left">
                        <div className="mega-left__eyebrow-wrap">
                          <span className="mega-left__eyebrow-line" />
                          <span className="mega-left__eyebrow-text">WHY JUPICAL</span>
                        </div>

                        <h3 className="mega-left__heading">
                          Everything You Need to Grow Smarter
                        </h3>

                        <p className="mega-left__desc">
                          Explore how Jupical combines Odoo expertise, industry knowledge and scalable technology to help businesses grow.
                        </p>

                        <div className="mega-left__list">
                          {leftColumnItems.map((lItem) => (
                            <a
                              key={lItem.title}
                              href={lItem.href}
                              className="mega-left-item"
                              onClick={() => setMegaOpen(false)}
                            >
                              <div className="mega-left-item__icon">
                                {lItem.icon}
                              </div>
                              <div className="mega-left-item__content">
                                <div className="mega-left-item__title-row">
                                  <span className="mega-left-item__title">{lItem.title}</span>
                                  <svg className="mega-left-item__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                  </svg>
                                </div>
                                <span className="mega-left-item__sub">{lItem.sub}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* CENTER DIVIDER: Animated SVG Data-Flow Line */}
                      <div className="mega-divider" aria-hidden="true">
                        <svg className="mega-flow-svg" width="30" height="340" viewBox="0 0 30 340" fill="none">
                          {/* Curved Background Line */}
                          <path
                            d="M 15 10 C 28 80, 2 170, 15 250 C 22 290, 15 330, 15 330"
                            stroke="rgba(37, 99, 235, 0.15)"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                          />
                          {/* Traveling Glowing Dots along path */}
                          <circle className="flow-dot flow-dot--1" r="3.5" fill="#2563EB">
                            <animateMotion
                              path="M 15 10 C 28 80, 2 170, 15 250 C 22 290, 15 330, 15 330"
                              dur="4s"
                              repeatCount="indefinite"
                            />
                          </circle>
                          <circle className="flow-dot flow-dot--2" r="2.5" fill="#06B6D4">
                            <animateMotion
                              path="M 15 10 C 28 80, 2 170, 15 250 C 22 290, 15 330, 15 330"
                              dur="4s"
                              begin="2s"
                              repeatCount="indefinite"
                            />
                          </circle>
                        </svg>
                      </div>

                      {/* RIGHT COLUMN: Industry Solutions Grid */}
                      <div className="mega-right">
                        <div className="mega-right__header">
                          <h4 className="mega-right__heading">INDUSTRY SOLUTIONS</h4>
                          <span className="mega-right__subheading">Purpose-built ERP solutions for every business.</span>
                        </div>

                        <div className="mega-industry-grid">
                          {industryItems.map((ind, idx) => (
                            <a
                              key={ind.title}
                              href={ind.href}
                              className="mega-ind-card"
                              onClick={() => setMegaOpen(false)}
                              style={{
                                '--ind-gradient': ind.gradient,
                                '--ind-rgb': ind.accentRgb,
                                '--ind-delay': `${120 + idx * 40}ms`,
                              }}
                            >
                              <div className="mega-ind-card__spotlight" aria-hidden="true" />
                              
                              <div className="mega-ind-card__header">
                                <div className="mega-ind-card__icon-box" style={{ background: ind.gradient }}>
                                  {ind.icon}
                                </div>
                                <span className="mega-ind-card__num">{ind.num}</span>
                              </div>

                              <div className="mega-ind-card__body">
                                <div className="mega-ind-card__title-row">
                                  <span className="mega-ind-card__title">{ind.title}</span>
                                  <svg className="mega-ind-card__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                  </svg>
                                </div>
                                <span className="mega-ind-card__sub">{ind.sub}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* BOTTOM CTA STRIP */}
                    <div className="mega-cta-strip">
                      <div className="mega-cta-strip__left">
                        <span className="mega-cta-strip__icon">💡</span>
                        <span className="mega-cta-strip__text">
                          One ERP platform. Solutions built for every industry.
                        </span>
                      </div>
                      <a href="#services" className="mega-cta-strip__link" onClick={() => setMegaOpen(false)}>
                        <span>Explore All Solutions</span>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </a>
                    </div>
                  </div>

                </li>
              );
            }

            return (
              <li key={item.label} className="navbar__item" role="none">
                <a
                  href={item.href}
                  id={`nav-${item.label.toLowerCase().replace(/\s/g, '-')}`}
                  className="navbar__link"
                  role="menuitem"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Action Controls — Theme Toggle + Get In Touch CTA */}
        <div className="navbar__cta">
          <ThemeToggle />
          <a href="#contact" id="nav-get-in-touch-btn" className="btn-primary navbar__contact-btn">
            <span>Get In Touch</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <button
            className={`navbar__hamburger${mobileOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile navigation menu"
            id="nav-hamburger"
          >
            <span /><span /><span />
          </button>
        </div>

      </div>

      {/* Mobile Accordion Menu */}
      <div className={`navbar__mobile${mobileOpen ? ' navbar__mobile--open' : ''}`}>
        <div className="navbar__mobile-inner">
          <a href="#about" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
            About Us
          </a>

          {/* Mobile Accordion for Why Jupical */}
          <div className="navbar__mobile-accordion">
            <button
              className={`navbar__mobile-acc-btn ${mobileWhyOpen ? 'active' : ''}`}
              onClick={() => setMobileWhyOpen(!mobileWhyOpen)}
            >
              <span>Why Jupical</span>
              <svg className={`acc-chevron ${mobileWhyOpen ? 'rotated' : ''}`} width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={`navbar__mobile-acc-content ${mobileWhyOpen ? 'open' : ''}`}>
              <div className="mobile-acc-section">
                <span className="mobile-acc-title">Approach & Philosophy</span>
                {leftColumnItems.map((l) => (
                  <a key={l.title} href={l.href} className="mobile-acc-sublink" onClick={() => setMobileOpen(false)}>
                    <span className="mobile-acc-icon">{l.icon}</span>
                    <span className="mobile-acc-label">{l.title}</span>
                  </a>
                ))}
              </div>

              <div className="mobile-acc-section">
                <span className="mobile-acc-title">Industry Solutions</span>
                {industryItems.map((ind) => (
                  <a key={ind.title} href={ind.href} className="mobile-acc-sublink" onClick={() => setMobileOpen(false)}>
                    <span className="mobile-acc-num" style={{ color: `rgb(${ind.accentRgb})` }}>{ind.num}</span>
                    <div className="mobile-acc-text">
                      <span className="mobile-acc-label">{ind.title}</span>
                      <span className="mobile-acc-sub">{ind.sub}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="#clients" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
            Our Clients
          </a>
          <a href="#philosophy" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
            Our Philosophy
          </a>
          <a href="#blogs" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
            Blog
          </a>
          <a href="#contact" className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
            Contact Us
          </a>

          <div className="navbar__mobile-footer">
            <ThemeToggle />
            <a href="#contact" className="btn-primary" onClick={() => setMobileOpen(false)}>
              Get In Touch →
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
