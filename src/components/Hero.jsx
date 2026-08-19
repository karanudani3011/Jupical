import './Hero.css';

/* ---- Factory Background with Overlays & Tech Accents ---- */
function HeroBackground() {
  return (
    <div className="hero__bg" aria-hidden="true">
      {/* High-res Manufacturing Engineer Background Image */}
      <div
        className="hero__bg-img"
        style={{ backgroundImage: `url('/hero_bg.png')` }}
      />

      {/* Dark/Light Gradient Overlay for crystal clear readability */}
      <div className="hero__bg-overlay" />

      {/* Subtle Dot Grid Pattern */}
      <svg className="hero__bg-dots" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <pattern id="dot-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="var(--hero-dot-color)"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)"/>
      </svg>

      {/* Glow Orbs */}
      <div className="hero__bg-glow hero__bg-glow--1"/>
      <div className="hero__bg-glow hero__bg-glow--2"/>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero section-white" id="hero" aria-label="Hero section">
      <HeroBackground />

      <div className="container hero__container">
        {/* Full Hero Text Content */}
        <div className="hero__text">
          <div className="eyebrow fade-in">🏭 Certified Odoo Gold Partner</div>

          <h1 className="hero__headline fade-in fade-in-delay-1">
            Certified Odoo ERP
            <br />
            Partner Helping
            <br />
            Manufacturers
            <br />
            <span className="hero__headline-blue">Automate Operations</span>
            <br />
            Globally.
          </h1>

          <p className="hero__sub fade-in fade-in-delay-2">
            A certified Odoo ERP partner and specialist in Manufacturing, Construction,
            and Finance, Jupical helps businesses across 32+ countries streamline
            operations through expert Odoo implementation and custom development.
          </p>

          <div className="hero__actions fade-in fade-in-delay-3">
            <a href="#contact" id="hero-cta-primary" className="btn-primary hero__cta">
              Contact Us
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#case-studies" id="hero-cta-secondary" className="btn-secondary">
              View Case Studies
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="hero__badges fade-in fade-in-delay-4">
            <div className="hero__badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1l1.8 3.6L14 5.6l-3 2.9.7 4.1L8 10.4l-3.7 2.2.7-4.1L2 5.6l4.2-.9L8 1z" fill="#0075FA"/>
              </svg>
              Odoo Gold Partner
            </div>
            <div className="hero__badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="#22c55e" strokeWidth="1.5"/>
                <path d="M5 8l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              ISO-certified Processes
            </div>
            <div className="hero__badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2C5 2 3 4 3 6c0 3.5 5 8 5 8s5-4.5 5-8c0-2-2-4-5-4z" stroke="#f59e0b" strokeWidth="1.5"/>
                <circle cx="8" cy="6" r="1.5" fill="#f59e0b"/>
              </svg>
              32+ Countries Served
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-dot"/>
      </div>
    </section>
  );
}
