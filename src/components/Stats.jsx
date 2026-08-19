import { useRef, useEffect, useState } from 'react';
import './Stats.css';

const stats = [
  { value: '100+', label: 'Projects Completed', icon: '🚀', desc: 'Successfully delivered ERP projects worldwide' },
  { value: '28M+', label: 'Users Worldwide', icon: '👥', desc: 'People using our products and implementations daily' },
  { value: '32+', label: 'Countries Served', icon: '🌍', desc: 'Global reach across manufacturing hubs' },
  { value: '12+', label: 'Industries Covered', icon: '🏭', desc: 'From manufacturing to healthcare and construction' },
  { value: '40+', label: 'ERP Professionals', icon: '💼', desc: 'Dedicated team of Odoo developers and consultants' },
  { value: '10+', label: 'Certified Experts', icon: '🏆', desc: 'Odoo certified professionals on every project' },
];

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    const num = parseInt(target.replace(/[^0-9]/g, ''));
    if (isNaN(num)) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ stat, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const num = useCountUp(stat.value, 1600, visible);
  const suffix = stat.value.replace(/[0-9]/g, '').trim();

  return (
    <div
      ref={ref}
      className="stat-card"
      id={`stat-card-${index}`}
      style={{ '--i': index }}
    >
      <div className="stat-card__icon">{stat.icon}</div>
      <div className="stat-card__value">
        {visible ? `${num}${suffix}` : stat.value}
      </div>
      <div className="stat-card__label">{stat.label}</div>
      <div className="stat-card__desc">{stat.desc}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats section-gray" id="stats" aria-label="Company statistics">
      <div className="container">
        <div className="stats__header">
          <div className="eyebrow">By the Numbers</div>
          <h2 className="stats__title">
            Delivering successful Odoo ERP
            <br />
            implementations across the globe
          </h2>
        </div>
        <div className="stats__grid">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
