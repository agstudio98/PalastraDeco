import React, { useEffect, useRef, useState } from 'react';

/* ─── Hero Logo — versión grande, coherente con Navbar ─── */
const HeroLogo: React.FC = () => (
  <svg
    viewBox="0 0 420 110"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Palastra Deco"
    className="hero-logo-svg"
  >
    {/* ── Monograma PD — mismo estilo que Navbar, escala ~2× ── */}

    {/* P */}
    <path
      d="M12 16 L12 86 M12 16 Q36 16 36 38 Q36 60 12 60"
      stroke="#fff"
      strokeOpacity="0.95"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* D */}
    <path
      d="M54 16 L54 86 M54 16 Q88 16 88 51 Q88 86 54 86"
      stroke="rgba(242,180,200,0.85)"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Separador vertical */}
    <line
      x1="104" y1="20" x2="104" y2="88"
      stroke="rgba(255,255,255,0.15)"
      strokeWidth="1"
    />

    {/* ── Texto principal ── */}

    {/* PALASTRA */}
    <text
      x="120"
      y="54"
      fontFamily="'Cormorant Garamond', Georgia, serif"
      fontSize="44"
      fontWeight="300"
      letterSpacing="6"
      fill="#fff"
      fillOpacity="0.97"
    >
      PALASTRA
    </text>

    {/* DECO */}
    <text
      x="122"
      y="78"
      fontFamily="'Cormorant Garamond', Georgia, serif"
      fontSize="18"
      fontWeight="300"
      letterSpacing="16"
      fill="rgba(242,180,200,0.8)"
    >
      DECO
    </text>

    {/* ── Subtítulo — solo en hero ── */}
    <text
      x="122"
      y="100"
      fontFamily="'Josefin Sans', sans-serif"
      fontSize="9"
      fontWeight="400"
      letterSpacing="3.5"
      fill="rgba(255,255,255,0.3)"
    >
      DECORACIONES E INTERIORISMO DESDE 1996
    </text>

    {/* Ornamentos — mismos puntos que Navbar, escala 2× */}
    <circle cx="400" cy="28" r="2.5" fill="rgba(232,99,138,0.5)" />
    <circle cx="410" cy="52" r="1.5" fill="rgba(232,99,138,0.3)" />
    <circle cx="400" cy="76" r="2.5" fill="rgba(232,99,138,0.5)" />
  </svg>
);

/* ─── Stat badge animado ─── */
const StatBadge: React.FC<{ number: string; label: string; delay?: number }> = ({
  number, label, delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="hero-stat"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <span className="hero-stat-number">{number}</span>
      <span className="hero-stat-label">{label}</span>
    </div>
  );
};

/* ─── Main Hero ─── */
const Main: React.FC = () => {
  return (
    <section className="main-hero">
      {/* Fondo orgánico */}
      <div className="hero-bg" />

      <div className="hero-content">
        {/* Columna izquierda — texto */}
        <div className="hero-text">
          <span className="hero-eyebrow">Córdoba, Argentina</span>

          {/* Logo hero */}
          <HeroLogo />

          <div className="hero-bio">
            <p>
              Fundada por <strong>Lucrecia y Carolina Ferrer</strong>, Palastra Deco
              es sinónimo de elegancia, calidez y diseño auténtico desde hace casi
              tres décadas.
            </p>
            <p>
              Visitanos en nuestra sucursal principal:{' '}
              <strong>Av. Rafael Nuñez 371, Cerro Las Rosas</strong>.
            </p>
          </div>

          <div className="hero-cta">
            <button className="btn btn-primary">Ver catálogo</button>
            <button className="btn btn-outline">Contactar</button>
          </div>
        </div>

        {/* Columna derecha — visual + stats */}
        <div className="hero-media">
          <div className="hero-img-frame">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=85&fit=crop"
              alt="Interiorismo Palastra Deco"
              className="hero-img"
            />
            {/* Tarjeta superpuesta */}
            <div className="hero-card-overlay">
              <span className="hero-card-eyebrow">Nueva colección</span>
              <span className="hero-card-title">Otoño 2024</span>
            </div>
          </div>

          {/* Stats flotantes */}
          <div className="hero-stats">
            <StatBadge number="28+" label="Años de experiencia" delay={0}   />
            <StatBadge number="4"   label="Sucursales"          delay={100} />
            <StatBadge number="∞"   label="Piezas únicas"       delay={200} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;