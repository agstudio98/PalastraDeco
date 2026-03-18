import React from 'react';

interface FooterProps {
  onSectionChange?: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onSectionChange }) => {
  const navigate = (section: string) => {
    onSectionChange?.(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">

          {/* ── Brand ── */}
          <div className="footer-brand">
            <svg viewBox="0 0 200 52" className="footer-logo" aria-label="Palastra Deco">
              <text x="0" y="38" fontFamily="'Cormorant Garamond', serif" fontSize="34"
                fill="white" fontWeight="300" letterSpacing="-0.5">Palastra</text>
              <text x="138" y="38" fontFamily="'Josefin Sans', sans-serif" fontSize="14"
                fill="white" fontWeight="600" letterSpacing="4">DECO</text>
            </svg>
            <p>
              Diseño de interiores con alma cordobesa. Piezas únicas, materiales
              seleccionados y más de 28 años transformando espacios.
            </p>
            <div className="footer-social">
              <a
                href="https://instagram.com"
                className="footer-social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Instagram icon */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                className="footer-social-link"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Facebook icon */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                className="footer-social-link"
                aria-label="Pinterest"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Pinterest icon */}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.76 1.22-5.14 1.22-5.14s-.31-.62-.31-1.54c0-1.45.84-2.53 1.88-2.53.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.09-2.36 3.09-5.15 0-2.13-1.44-3.62-3.5-3.62-2.38 0-3.78 1.79-3.78 3.64 0 .72.28 1.49.62 1.91.07.08.08.15.06.23-.06.26-.2.83-.23.95-.04.15-.13.18-.3.11-1.12-.52-1.82-2.17-1.82-3.49 0-2.84 2.07-5.45 5.96-5.45 3.13 0 5.56 2.23 5.56 5.21 0 3.11-1.96 5.61-4.67 5.61-.91 0-1.77-.47-2.07-1.03l-.56 2.1c-.2.78-.75 1.75-1.12 2.35.84.26 1.73.4 2.65.4 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Secciones ── */}
          <div>
            <p className="footer-col-title">Secciones</p>
            <ul className="footer-col-list">
              <li><button onClick={() => navigate('home')}>Inicio</button></li>
              <li><button onClick={() => navigate('catalog')}>Catálogo</button></li>
              <li><button onClick={() => navigate('soporte')}>Soporte</button></li>
              <li><button onClick={() => navigate('home')}>Sobre Nosotras</button></li>
            </ul>
          </div>

          {/* ── Información ── */}
          <div>
            <p className="footer-col-title">Información</p>
            <ul className="footer-col-list">
              <li><a href="mailto:info@palastradeco.com">info@palastradeco.com</a></li>
              <li><span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.83rem', fontFamily: 'var(--font-ui)' }}>Av. Rafael Núñez 371</span></li>
              <li><span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.83rem', fontFamily: 'var(--font-ui)' }}>Cerro Las Rosas, Córdoba</span></li>
              <li><span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.83rem', fontFamily: 'var(--font-ui)' }}>Lun–Vie: 10 – 19 h</span></li>
            </ul>
          </div>

          {/* ── Legal ── */}
          <div>
            <p className="footer-col-title">Legal</p>
            <ul className="footer-col-list">
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Términos</a></li>
              <li><a href="#">Envíos</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <p className="footer-credit">
            © 2026 Palastra Deco · Fundada en 1996 por Lucrecia y Carolina Ferrer ·
            Hecho con amor en Córdoba por <strong style={{ color: 'rgba(255,255,255,0.38)' }}>Ag Studio</strong>
          </p>
          <div className="footer-payments">
            <span className="footer-payment-label">Medios de pago</span>
            {/* MasterCard */}
            <svg className="payment-icon" viewBox="0 0 48 32" aria-label="MasterCard">
              <rect width="48" height="32" rx="4" fill="#252525"/>
              <circle cx="18" cy="16" r="10" fill="#EB001B" opacity="0.9"/>
              <circle cx="30" cy="16" r="10" fill="#F79E1B" opacity="0.9"/>
              <path d="M24 8.27a10 10 0 0 1 0 15.46A10 10 0 0 1 24 8.27z" fill="#FF5F00" opacity="0.85"/>
            </svg>
            {/* Naranja */}
            <svg className="payment-icon" viewBox="0 0 48 32" aria-label="Naranja">
              <rect width="48" height="32" rx="4" fill="#FF6C00"/>
              <text x="24" y="21" textAnchor="middle" fontSize="10" fill="white"
                fontFamily="'Josefin Sans', sans-serif" fontWeight="700" letterSpacing="1">NARANJA</text>
            </svg>
            {/* Mercado Pago */}
            <svg className="payment-icon" viewBox="0 0 48 32" aria-label="Mercado Pago">
              <rect width="48" height="32" rx="4" fill="#009EE3"/>
              <text x="24" y="21" textAnchor="middle" fontSize="11" fill="white"
                fontFamily="'Josefin Sans', sans-serif" fontWeight="700" letterSpacing="1">MP</text>
            </svg>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
