import './Clients.css';

const clients = [
  {
    name: 'Apex Metals',
    sector: 'Manufacturing',
    quote: 'Jupical cut our month-end close from 6 days to 1. Odoo is now the backbone of everything we do.',
    person: 'Rahul M., CFO',
    initials: 'AM',
    color: '#0075FA',
  },
  {
    name: 'Gujarat Forge',
    sector: 'Auto Components',
    quote: 'Production visibility went from zero to real-time. Our OEE jumped 18 points in the first quarter.',
    person: 'Disha P., VP Operations',
    initials: 'GF',
    color: '#7c3aed',
  },
  {
    name: 'Pinnacle Mfg',
    sector: 'FMCG',
    quote: 'We went live in 8 weeks. Jupical\'s team was hands-on throughout and the hypercare was exceptional.',
    person: 'Ankit S., MD',
    initials: 'PM',
    color: '#0891b2',
  },
  {
    name: 'HiTech Parts',
    sector: 'Engineering',
    quote: 'Multi-site, multi-currency, multi-language — Odoo handles it all. We\'ve scaled to 3 new countries.',
    person: 'Fatima R., IT Director',
    initials: 'HP',
    color: '#059669',
  },
  {
    name: 'StructureBuild',
    sector: 'Construction',
    quote: 'Material tracking in construction used to be a nightmare. Odoo\'s lot traceability changed everything.',
    person: 'Vikram C., Site Director',
    initials: 'SB',
    color: '#d97706',
  },
  {
    name: 'MedCore Labs',
    sector: 'Healthcare',
    quote: 'Batch recall readiness dropped from 3 days to 20 minutes. Regulatory compliance is now effortless.',
    person: 'Dr. Neha T., QA Head',
    initials: 'MC',
    color: '#dc2626',
  },
  {
    name: 'TradeBridge',
    sector: 'Distribution',
    quote: 'Inventory accuracy went from 78% to 99.4%. Dead stock reduced by ₹80L in the first year.',
    person: 'Sanjay B., COO',
    initials: 'TB',
    color: '#0075FA',
  },
  {
    name: 'EduNexus',
    sector: 'Education',
    quote: 'Odoo unified admissions, fees, payroll, and academics. We retired 4 legacy systems overnight.',
    person: 'Priya K., Principal',
    initials: 'EN',
    color: '#7c3aed',
  },
  {
    name: 'GrandStay Hotels',
    sector: 'Hospitality',
    quote: 'Front desk, housekeeping, F&B, accounting — one screen. Guest satisfaction up 31%.',
    person: 'Amir H., GM',
    initials: 'GS',
    color: '#059669',
  },
  {
    name: 'FinEdge Capital',
    sector: 'Finance',
    quote: 'Loan lifecycle management fully automated. NPAs identified 60% faster with real-time dashboards.',
    person: 'Rina M., CTO',
    initials: 'FC',
    color: '#d97706',
  },
  {
    name: 'ProPlex Realty',
    sector: 'Real Estate',
    quote: 'Property management, tenant billing, and maintenance tickets — all on one platform. Transformed.',
    person: 'Manish G., Director',
    initials: 'PR',
    color: '#0891b2',
  },
  {
    name: 'SwiftCargo',
    sector: 'Logistics',
    quote: 'Fleet, trips, invoicing, driver payroll — Jupical implemented it all in under 10 weeks.',
    person: 'Tejas V., Founder',
    initials: 'SC',
    color: '#dc2626',
  },
];

function ClientCard({ client, index }) {
  return (
    <div
      className="client-card"
      id={`client-card-${index}`}
      style={{ '--c': client.color }}
      title={`Hover to hear from ${client.name}`}
    >
      {/* Logo area */}
      <div className="client-card__logo">
        <div className="client-card__initials" style={{ background: client.color }}>
          {client.initials}
        </div>
        <div className="client-card__meta">
          <span className="client-card__name">{client.name}</span>
          <span className="client-card__sector">{client.sector}</span>
        </div>
      </div>

      {/* Quote — reveals on hover */}
      <div className="client-card__quote">
        <p>"{client.quote}"</p>
        <span className="client-card__person">— {client.person}</span>
      </div>

      <div className="client-card__hover-hint">hover to hear from the team →</div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="clients section-white" id="clients" aria-label="Trusted clients">
      <div className="container">
        <div className="clients__header">
          <div className="eyebrow">Trusted by Teams Worldwide</div>
          <h2 className="clients__title">
            Manufacturers and businesses that
            <br />chose Odoo with Jupical
          </h2>
          <p className="clients__sub">
            From single-plant manufacturers to multi-country conglomerates — across 12+ industries.
          </p>
        </div>

        <div className="clients__grid">
          {clients.map((c, i) => <ClientCard key={c.name} client={c} index={i} />)}
        </div>

        <div className="clients__cta">
          <a href="https://www.jupical.io/our-clients" target="_blank" rel="noopener noreferrer"
            id="clients-view-all-btn" className="btn-primary">
            View All Case Studies
          </a>
          <a href="https://www.jupical.io/success-stories-videos" target="_blank" rel="noopener noreferrer"
            id="clients-stories-btn" className="btn-secondary">
            Watch Success Stories
          </a>
        </div>
      </div>
    </section>
  );
}
