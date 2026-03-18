import React, { useEffect, useRef, useState } from 'react';

const events = [
  {
    year: '1996',
    title: 'Los Comienzos',
    desc: 'Lucrecia y Carolina Ferrer fundan Palastra Deco con una visión clara: llevar belleza auténtica a cada hogar cordobés. Un pequeño local, grandes sueños.',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=85&fit=crop',
    // warm vintage living room
    side: 'left' as const,
  },
  {
    year: '2005',
    title: 'Cerro Las Rosas',
    desc: 'La apertura de la sucursal en Cerro Las Rosas marcó un hito. Un nuevo espacio lleno de luz, diseño y la calidez que nos caracteriza desde el primer día.',
    img: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1200&q=85&fit=crop',
    // elegant interior showroom
    side: 'right' as const,
  },
  {
    year: '2015',
    title: 'Expansión',
    desc: 'Múltiples locales, un solo espíritu. La familia Palastra creció y con ella nuestra colección: textiles, lámparas, objetos únicos y piezas de autor.',
    img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=85&fit=crop',
    // modern decor store interior
    side: 'left' as const,
  },
  {
    year: '2024',
    title: 'Era Digital',
    desc: 'Modernización total: pagos digitales, tienda online y atención personalizada por WhatsApp. El estilo de siempre, ahora al alcance de todo el país.',
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=85&fit=crop',
    // contemporary minimalist interior
    side: 'right' as const,
  },
];

const TimelineItem: React.FC<{ event: typeof events[0]; index: number }> = ({ event, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = event.side === 'left';

  return (
    <div
      ref={ref}
      className={`tl-item tl-item--${event.side}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateX(0)'
          : `translateX(${isLeft ? '-40px' : '40px'})`,
        transition: `opacity 0.75s ease ${index * 0.1}s, transform 0.75s ease ${index * 0.1}s`,
      }}
    >
      {/* Image side */}
      <div className="tl-img-wrap">
        <img src={event.img} alt={event.title} loading="lazy" />
        <div className="tl-img-overlay" />
        <div className="tl-year-badge">{event.year}</div>
      </div>

      {/* Content side */}
      <div className="tl-content">
        <div className="tl-content-inner">
          <span className="tl-eyebrow">{event.year}</span>
          <h3 className="tl-title">{event.title}</h3>
          <div className="tl-divider" />
          <p className="tl-desc">{event.desc}</p>
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  return (
    <section className="timeline-section">
      {/* Section header */}
      <div className="tl-header">
        <span className="catalog-eyebrow">Desde 1996</span>
        <h2 className="catalog-title">Nuestra Historia</h2>
        <p className="catalog-desc">
          Casi tres décadas transformando hogares con pasión, criterio y amor por el detalle.
        </p>
      </div>

      {/* Timeline items */}
      <div className="tl-list">
        {events.map((event, i) => (
          <TimelineItem key={event.year} event={event} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;