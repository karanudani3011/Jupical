import { useState } from 'react';
import './Services.css';

const services = [
  {
    letter: 'A',
    label: 'Implementation',
    title: 'End-to-End Odoo Implementation',
    desc: 'Full-cycle ERP deployment tailored to your manufacturing workflows — from gap analysis and configuration to go-live and hypercare. We\'ve implemented Odoo for 100+ manufacturers across 32 countries.',
    tags: ['Manufacturing', 'Finance', 'Inventory'],
    bullets: [
      'Business process mapping & gap analysis',
      'Module configuration and data setup',
      'User acceptance testing (UAT)',
      'Go-live support and hypercare period',
      'Post-implementation performance audit',
    ],
  },
  {
    letter: 'B',
    label: 'Customisation',
    title: 'Bespoke Odoo Customisation',
    desc: 'When standard Odoo isn\'t enough, our developers build custom modules, fields, reports, and workflows that match your exact operational requirements without breaking upgrade paths.',
    tags: ['Custom Modules', 'Workflows', 'Reports'],
    bullets: [
      'Custom module development in Python/OWL',
      'Advanced reporting with QWeb & Jasper',
      'Automated workflow and approval engine',
      'Mobile-first UI customisation',
      'Performance-optimised database queries',
    ],
  },
  {
    letter: 'C',
    label: 'Integration',
    title: 'Seamless System Integration',
    desc: 'Connect Odoo with your existing ecosystem — Shopify, WooCommerce, QuickBooks, Xero, BambooHR, payment gateways, IoT sensors, and custom APIs — for a single source of truth.',
    tags: ['E-Commerce', 'Accounting', 'IoT'],
    bullets: [
      'REST & JSON-RPC API connectors',
      'E-commerce platform sync (Shopify, WooCommerce)',
      'Accounting integrations (QuickBooks, Xero, Zoho)',
      'HR system bridges (BambooHR, Gusto)',
      'Real-time webhook & event-driven pipelines',
    ],
  },
  {
    letter: 'D',
    label: 'Migration',
    title: 'Safe Odoo Version Migration',
    desc: 'Upgrade from legacy Odoo versions (v8–v16) to the latest release without data loss, downtime, or broken customisations. Our structured migration process is battle-tested across 60+ projects.',
    tags: ['Data Migration', 'Code Migration', 'Upgrade'],
    bullets: [
      'Version gap analysis and risk assessment',
      'Automated data migration scripts',
      'Custom module porting and rewriting',
      'Zero-downtime cutover strategy',
      'Full regression testing and sign-off',
    ],
  },
  {
    letter: 'E',
    label: 'Support',
    title: 'On-Demand Odoo Support',
    desc: 'SLA-backed functional and technical support with a dedicated account manager. Bug fixes, performance tuning, security patches, and training updates — all under one retainer.',
    tags: ['SLA', 'Bug Fixes', 'Maintenance'],
    bullets: [
      'Tiered SLA with 4-hour critical response',
      'Dedicated Odoo consultant per account',
      'Monthly performance and security reports',
      'Proactive module update management',
      'Helpdesk via Odoo, Slack, or email',
    ],
  },
  {
    letter: 'F',
    label: 'Training',
    title: 'Odoo User & Admin Training',
    desc: 'Role-based training programs for end-users, super-users, and IT administrators. Available online or on-site, with custom course material and recorded sessions for future onboarding.',
    tags: ['End-Users', 'Administrators', 'Online'],
    bullets: [
      'Role-based training curriculum design',
      'Live virtual and on-site sessions',
      'Custom video library for your Odoo instance',
      'Train-the-trainer programs for scale',
      'Ongoing knowledge base and documentation',
    ],
  },
];

/* Left sticky image/illustration */
function ServiceVisual({ service }) {
  return (
    <div className="services__visual" aria-hidden="true">
      <div className="services__visual-card">
        <div className="svc-visual-letter">{service.letter}</div>
        <div className="svc-visual-label">{service.label}</div>
        <div className="svc-visual-tags">
          {service.tags.map((t) => (
            <span key={t} className="svc-tag">{t}</span>
          ))}
        </div>
        <ul className="svc-visual-bullets">
          {service.bullets.map((b) => (
            <li key={b}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="#0075FA" strokeWidth="1.2"/>
                <path d="M4.5 7l2 2 3-3" stroke="#0075FA" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  const [activeRow, setActiveRow] = useState(0);

  return (
    <section className="services section-white" id="services" aria-label="Services">
      <div className="container services__container">
        {/* Header */}
        <div className="services__header">
          <div className="eyebrow">What We Do</div>
          <h2 className="services__title">
            Everything your Odoo ERP
            <br />project needs, under one roof
          </h2>
          <p className="services__subtitle">
            From first consultation to long-term support, we cover every phase
            of your ERP journey with certified Odoo expertise.
          </p>
        </div>

        <div className="services__body">
          {/* Sticky visual */}
          <div className="services__left">
            <div className="services__sticky">
              <ServiceVisual service={services[activeRow]} />
            </div>
          </div>

          {/* List */}
          <div className="services__right">
            {services.map((svc, i) => (
              <div
                key={svc.letter}
                id={`service-row-${svc.letter.toLowerCase()}`}
                className={`svc-row${activeRow === i ? ' svc-row--active' : ''}`}
                onMouseEnter={() => setActiveRow(i)}
                onClick={() => setActiveRow(i)}
              >
                <div className="svc-row__letter">{svc.letter}</div>
                <div className="svc-row__content">
                  <div className="svc-row__header">
                    <h3 className="svc-row__title">{svc.title}</h3>
                    <div className="svc-row__tags">
                      {svc.tags.map((t) => <span key={t} className="svc-tag svc-tag--sm">{t}</span>)}
                    </div>
                  </div>
                  <p className="svc-row__desc">{svc.desc}</p>
                </div>
                <div className="svc-row__arrow">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
