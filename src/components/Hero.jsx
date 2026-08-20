import HeroVisual from './HeroVisual';
import Clients from './Clients';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Hero section">
      {/* Clean soft gradient backdrop */}
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__glow hero__glow--blue" />
        <div className="hero__glow hero__glow--cyan" />
        <div className="hero__grid-pattern" />
      </div>

      <div className="container hero__container">
        <div className="hero__grid">
          {/* LEFT SIDE CONTENT */}
          <div className="hero__left">
            {/* Certification Badge */}
            <div className="hero__eyebrow">
              <svg className="hero__shield-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L2 3.5V7.5C2 11.2 4.6 14.6 8 15.5C11.4 14.6 14 11.2 14 7.5V3.5L8 1Z" stroke="#0075FF" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M5.5 7.5L7 9L10.5 5.5" stroke="#0075FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>CERTIFIED ODOO ERP PARTNER</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero__title">
              Building Smarter
              <br />
              Operations.
              <br />
              Driving <span className="hero__title-highlight">Real Growth.</span>
            </h1>

            {/* Subtitle Description */}
            <p className="hero__description">
              Jupical helps manufacturers, construction, and finance businesses automate, integrate, and scale with expert Odoo ERP implementation and custom development.
            </p>

            {/* Action Buttons */}
            <div className="hero__actions">
              <a href="#solutions" className="hero__btn hero__btn--primary" id="hero-btn-explore">
                <span>Explore Solutions</span>
                <span className="hero__btn-icon">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>

              <a href="#contact" className="hero__btn hero__btn--secondary" id="hero-btn-contact">
                <span>Contact Us</span>
                <span className="hero__btn-icon hero__btn-icon--outline">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Trust Flags & Social Proof */}
            <div className="hero__trust-wrapper">
              <div className="hero__country-chips">
                <span className="hero__country-chip"><span className="chip-flag">🇺🇸</span> USA</span>
                <span className="hero__country-chip"><span className="chip-flag">🇮🇳</span> INDIA</span>
                <span className="hero__country-chip"><span className="chip-flag">🇬🇧</span> UK</span>
                <span className="hero__country-chip"><span className="chip-flag">🇦🇪</span> UAE</span>
                <span className="hero__country-chip"><span className="chip-flag">🇨🇦</span> CANADA</span>
              </div>
              <div className="hero__trust-sub">
                Trusted by <strong>5000+ Businesses</strong> across <strong>32+ Countries</strong>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — INTERACTIVE 3D ODOO ERP ECOSYSTEM / DASHBOARD */}
          <div className="hero__right">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* OUR CLIENTS SHOWCASE — PLACED RIGHT NEXT TO / BELOW THE HERO DASHBOARD */}
      <Clients />

      {/* STATISTICS CARDS BAR AT BOTTOM */}
      <div className="hero__stats-bar">
        <div className="container hero__stats-container">
          <div className="hero__stat-card">
            <div className="hero__stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0075FF" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            </div>
            <div className="hero__stat-content">
              <div className="hero__stat-number">32+</div>
              <div className="hero__stat-label">Countries Served</div>
            </div>
          </div>

          <div className="hero__stat-card">
            <div className="hero__stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0075FF" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <div className="hero__stat-content">
              <div className="hero__stat-number">5000+</div>
              <div className="hero__stat-label">Happy Clients</div>
            </div>
          </div>

          <div className="hero__stat-card">
            <div className="hero__stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0075FF" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
            </div>
            <div className="hero__stat-content">
              <div className="hero__stat-number">1000+</div>
              <div className="hero__stat-label">Successful Implementations</div>
            </div>
          </div>

          <div className="hero__stat-card">
            <div className="hero__stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0075FF" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            </div>
            <div className="hero__stat-content">
              <div className="hero__stat-number">98%</div>
              <div className="hero__stat-label">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
