import React, { useState, useEffect } from 'react';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=85&fit=crop',
    eyebrow: 'Colección Otoño',
    title: 'Transforma tu Hogar',
    desc: 'Ambientes cálidos con piezas que cuentan una historia.',
    cta: 'Ver Colección',
    isSale: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=85&fit=crop',
    eyebrow: 'Diseño Exclusivo',
    title: 'Estilo con Alma',
    desc: 'Cada detalle elegido con pasión y criterio artesanal.',
    cta: 'Explorar',
    isSale: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1600&q=85&fit=crop',
    eyebrow: 'Ofertas Especiales',
    title: 'Hasta 25% OFF',
    oldPrice: 'Antes $5.999',
    newPrice: '$4.499',
    cta: 'Ver Ofertas',
    isSale: true,
  },
];

const Carrousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = (index: number) => {
    if (index === current || fading) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [current, fading]);

  const slide = slides[current];

  return (
    <section className="carrousel-section">
      {/* Background layers — crossfade */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="carrousel-bg"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${s.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.8s ease',
            zIndex: 0,
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(58,14,45,0.35) 0%, rgba(58,14,45,0.55) 60%, rgba(58,14,45,0.78) 100%)',
          zIndex: 1,
        }}
      />

      {/* Slide content */}
      <div
        className="carrousel-content"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          minHeight: '560px',
          paddingBottom: '80px',
          paddingTop: '80px',
        }}
      >
        <div
          className="slide-content-inner"
          style={{
            opacity: fading ? 0 : 1,
            transform: fading ? 'translateY(10px)' : 'translateY(0)',
            transition: 'opacity 0.45s ease, transform 0.45s ease',
            textAlign: 'center',
            maxWidth: '440px',
            width: '100%',
          }}
        >
          <span className="slide-eyebrow">{slide.eyebrow}</span>
          <h2>{slide.title}</h2>

          {slide.isSale ? (
            <>
              <span className="slide-old-price">{slide.oldPrice}</span>
              <span className="slide-new-price">{slide.newPrice}</span>
            </>
          ) : (
            <p className="slide-desc">{slide.desc}</p>
          )}

          <button className="slide-btn">{slide.cta}</button>
        </div>
      </div>

      {/* Dots */}
      <div className="carrousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carrousel-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carrousel;