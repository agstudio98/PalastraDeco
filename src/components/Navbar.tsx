import React, { useEffect, useState } from 'react';

interface NavbarProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: 'home',    label: 'Inicio' },
  { id: 'catalog', label: 'Catálogo' },
  { id: 'soporte', label: 'Soporte' },
];

const PalastraLogo: React.FC = () => (
  <svg
    viewBox="0 0 220 52"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Palastra Deco"
    style={{ height: 44, width: 'auto', display: 'block' }}
  >
    {/* Monograma PD — bloque izquierdo */}
    <g>
      {/* P */}
      <path
        d="M8 10 L8 42 M8 10 Q22 10 22 19 Q22 28 8 28"
        stroke="#B5253C"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* D */}
      <path
        d="M30 10 L30 42 M30 10 Q48 10 48 26 Q48 42 30 42"
        stroke="#5C1A47"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </g>

    {/* Separador decorativo */}
    <line x1="58" y1="12" x2="58" y2="40" stroke="#EAE0E5" strokeWidth="1" />

    {/* Logotipo de texto */}
    <g fontFamily="'Cormorant Garamond', Georgia, serif">
      {/* PALASTRA — display grande */}
      <text
        x="68"
        y="28"
        fontSize="20"
        fontWeight="400"
        letterSpacing="3"
        fill="#2A1A22"
      >
        PALASTRA
      </text>
      {/* DECO — debajo, más pequeño, rose */}
      <text
        x="69"
        y="42"
        fontSize="10"
        fontWeight="300"
        letterSpacing="7"
        fill="#B5253C"
      >
        DECO
      </text>
    </g>

    {/* Ornamento floral mínimo — estrellita */}
    <circle cx="205" cy="16" r="1.5" fill="#E8638A" opacity="0.7" />
    <circle cx="212" cy="26" r="1"   fill="#E8638A" opacity="0.4" />
    <circle cx="205" cy="36" r="1.5" fill="#E8638A" opacity="0.7" />
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ currentSection, onSectionChange }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <button
          className="nav-logo-btn"
          onClick={() => onSectionChange('home')}
          aria-label="Ir al inicio"
        >
          <PalastraLogo />
        </button>

        <ul className="nav-list">
          {navItems.map(item => (
            <li key={item.id}>
              <button
                className={`nav-link${currentSection === item.id ? ' active' : ''}`}
                onClick={() => onSectionChange(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;