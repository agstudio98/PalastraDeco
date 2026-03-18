import React, { useState, useMemo, useRef, useEffect } from 'react';

/* ─── Data ─── */
const allProducts = [
  { id: 1,  name: 'Lámpara Deco Rosa',   price: 2999,  category: 'Lámparas', tag: 'Nuevo',    img: 'https://images.pexels.com/photos/10531005/pexels-photo-10531005.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2,  name: 'Cojín Carmín Lux',    price: 1499,  category: 'Cojines',  tag: '',          img: 'https://images.pexels.com/photos/8634414/pexels-photo-8634414.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3,  name: 'Florero Púrpura',     price: 899,   category: 'Floreros', tag: 'Oferta',   img: 'https://images.pexels.com/photos/29432556/pexels-photo-29432556.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 4,  name: 'Mesa Interior',        price: 8999,  category: 'Muebles',  tag: 'Premium',  img: 'https://images.pexels.com/photos/21345932/pexels-photo-21345932.png?auto=compress&cs=tinysrgb&w=800' },
  { id: 5,  name: 'Lámpara Modern',       price: 3499,  category: 'Lámparas', tag: '',          img: 'https://images.pexels.com/photos/16769172/pexels-photo-16769172.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 6,  name: 'Set Cojines',          price: 2799,  category: 'Cojines',  tag: '',          img: 'https://images.pexels.com/photos/8634412/pexels-photo-8634412.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 7,  name: 'Florero Grande',       price: 1299,  category: 'Floreros', tag: '',          img: 'https://images.pexels.com/photos/31399032/pexels-photo-31399032.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 8,  name: 'Silla Deco',           price: 4499,  category: 'Muebles',  tag: 'Nuevo',    img: 'https://images.unsplash.com/photo-1768209198274-01dd8d79cd1e?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800' },
  { id: 9,  name: 'Lámpara Púrpura',      price: 2199,  category: 'Lámparas', tag: 'Oferta',   img: 'https://images.pexels.com/photos/15352967/pexels-photo-15352967.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 10, name: 'Cojín Rosa',           price: 999,   category: 'Cojines',  tag: '',          img: 'https://images.pexels.com/photos/8634412/pexels-photo-8634412.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const CATEGORIES = ['Todos', 'Lámparas', 'Cojines', 'Floreros', 'Muebles'];
const PRICE_RANGES = [
  { label: 'Todos los precios', min: 0,    max: Infinity },
  { label: 'Hasta $1.000',      min: 0,    max: 1000 },
  { label: '$1.000 – $5.000',   min: 1000, max: 5000 },
  { label: 'Más de $5.000',     min: 5000, max: Infinity },
];

const fmt = (n: number) =>
  '$' + n.toLocaleString('es-AR');

/* ─── Modal de contacto ─── */
const ContactModal: React.FC<{
  product: typeof allProducts[0] | null;
  onClose: () => void;
}> = ({ product, onClose }) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="cat-modal-backdrop" onClick={onClose}>
      <div className="cat-modal" onClick={e => e.stopPropagation()}>
        <button className="cat-modal-close" onClick={onClose} aria-label="Cerrar">✕</button>
        <div className="cat-modal-img">
          <img src={product.img} alt={product.name} />
        </div>
        <div className="cat-modal-body">
          {product.tag && <span className="cat-card-tag">{product.tag}</span>}
          <span className="cat-modal-cat">{product.category}</span>
          <h2 className="cat-modal-name">{product.name}</h2>
          <p className="cat-modal-price">{fmt(product.price)}</p>
          <div className="cat-modal-divider" />
          <p className="cat-modal-desc">
            Pieza seleccionada por nuestro equipo de diseño. Disponible para entrega en Córdoba y envíos a todo el país.
          </p>
          <div className="cat-modal-actions">
            <a
              className="cat-modal-btn cat-modal-btn--primary"
              href={`https://wa.me/5493513000000?text=Hola!%20Me%20interesa%20el%20producto%3A%20${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Consultar por WhatsApp
            </a>
            <a
              className="cat-modal-btn cat-modal-btn--ghost"
              href="mailto:info@palastradeco.com"
            >
              Enviar email
            </a>
          </div>
          <p className="cat-modal-payments">Aceptamos MercadoPago · Naranja · Mastercard · Visa</p>
        </div>
      </div>
    </div>
  );
};

/* ─── Card ─── */
const CatalogCard: React.FC<{
  product: typeof allProducts[0];
  onClick: () => void;
  index: number;
}> = ({ product, onClick, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="cat-card"
      onClick={onClick}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.55s ease ${(index % 4) * 0.07}s, transform 0.55s ease ${(index % 4) * 0.07}s`,
      }}
    >
      <div className="cat-card-img">
        <img src={product.img} alt={product.name} loading="lazy" />
        {product.tag && <span className="cat-card-tag">{product.tag}</span>}
        <div className="cat-card-hover-overlay">
          <span className="cat-card-cta">Ver producto</span>
        </div>
      </div>
      <div className="cat-card-body">
        <span className="cat-card-cat">{product.category}</span>
        <h3 className="cat-card-name">{product.name}</h3>
        <div className="cat-card-footer">
          <span className="cat-card-price">{fmt(product.price)}</span>
          <button className="cat-card-btn" tabIndex={-1}>Consultar</button>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Catalog ─── */
const Catalog: React.FC = () => {
  const [query, setQuery]       = useState('');
  const [category, setCategory] = useState('Todos');
  const [priceIdx, setPriceIdx] = useState(0);
  const [selected, setSelected] = useState<typeof allProducts[0] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = useMemo(() => {
    const { min, max } = PRICE_RANGES[priceIdx];
    return allProducts.filter(p => {
      const matchQ   = p.name.toLowerCase().includes(query.toLowerCase());
      const matchCat = category === 'Todos' || p.category === category;
      const matchP   = p.price > min && p.price <= max;
      return matchQ && matchCat && matchP;
    });
  }, [query, category, priceIdx]);

  const clearAll = () => {
    setQuery(''); setCategory('Todos'); setPriceIdx(0);
    inputRef.current?.focus();
  };

  const hasFilters = query !== '' || category !== 'Todos' || priceIdx !== 0;

  return (
    <section className="cat-section">
      {/* Header */}
      <div className="cat-header">
        <span className="catalog-eyebrow">Catálogo completo</span>
        <h2 className="catalog-title">Encontrá tu pieza</h2>
        <p className="catalog-desc">
          Explorá nuestra colección y encontrá la decoración perfecta para tu espacio.
        </p>
      </div>

      {/* Search bar */}
      <div className="cat-search-wrap">
        <div className="cat-search-box">
          <svg className="cat-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            ref={inputRef}
            className="cat-search-input"
            type="text"
            placeholder="Buscar por nombre…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {query && (
            <button className="cat-search-clear" onClick={() => setQuery('')} aria-label="Limpiar búsqueda">✕</button>
          )}
        </div>
      </div>

      {/* Filters row */}
      <div className="cat-filters">
        {/* Category chips */}
        <div className="cat-chips">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`cat-chip ${category === cat ? 'cat-chip--active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Price select */}
        <div className="cat-price-wrap">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
            <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/>
          </svg>
          <select
            className="cat-price-select"
            value={priceIdx}
            onChange={e => setPriceIdx(Number(e.target.value))}
          >
            {PRICE_RANGES.map((r, i) => (
              <option key={i} value={i}>{r.label}</option>
            ))}
          </select>
        </div>

        {/* Results count + clear */}
        <div className="cat-meta">
          <span className="cat-count">
            {filtered.length} {filtered.length === 1 ? 'resultado' : 'resultados'}
          </span>
          {hasFilters && (
            <button className="cat-clear" onClick={clearAll}>
              Limpiar filtros
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="cat-grid">
          {filtered.map((p, i) => (
            <CatalogCard key={p.id} product={p} index={i} onClick={() => setSelected(p)} />
          ))}
        </div>
      ) : (
        <div className="cat-empty">
          <div className="cat-empty-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </div>
          <p className="cat-empty-title">Sin resultados</p>
          <p className="cat-empty-desc">Probá con otros términos o</p>
          <button className="cat-clear cat-clear--lg" onClick={clearAll}>limpiá los filtros</button>
        </div>
      )}

      {/* Modal */}
      {selected && <ContactModal product={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Catalog;