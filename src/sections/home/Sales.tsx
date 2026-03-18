import React from 'react';

const Sales: React.FC = () => {
  const promotions = [
    {
      name: 'Decor Hogar',
      desc: 'Accesorios y textiles seleccionados para el living.',
      oldPrice: '$5.999',
      newPrice: '$4.799',
      discount: '20% OFF',
      category: 'Hogar',
      img: 'https://images.pexels.com/photos/20030014/pexels-photo-20030014.jpeg?auto=compress&cs=tinysrgb&w=800',
      attribution: 'tiago alves on Pexels',
    },
    {
      name: 'Pack Interiorismo',
      desc: 'Kit completo curado por nuestras diseñadoras.',
      oldPrice: '$12.999',
      newPrice: '$9.999',
      discount: '23% OFF',
      category: 'Pack',
      img: 'https://images.unsplash.com/photo-1765862835193-3c37388a409e?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800',
      attribution: 'Puscas Adryan on Unsplash',
    },
    {
      name: 'Oferta Flash — Lámparas',
      desc: 'Iluminación decorativa por tiempo limitado.',
      oldPrice: '$1.999',
      newPrice: '$1.499',
      discount: '25% OFF',
      category: 'Flash',
      img: 'https://images.pexels.com/photos/11281576/pexels-photo-11281576.jpeg?auto=compress&cs=tinysrgb&w=800',
      attribution: 'Abdullah Alsaibaie on Pexels',
    },
  ];

  return (
    <section className="sales-section">
      <div className="catalog-section-header">
        <span className="catalog-eyebrow">Promociones</span>
        <h2 className="catalog-title">Ofertas Destacadas</h2>
        <p className="catalog-desc">
          Precios especiales por tiempo limitado en nuestras piezas más queridas.
        </p>
      </div>

      <div className="catalog-cards-grid">
        {promotions.map((promo, index) => (
          <article key={index} className="catalog-card catalog-card--sale">
            <div className="catalog-card-img-wrap">
              <img src={promo.img} alt={promo.name} />
              <span className="catalog-card-discount">{promo.discount}</span>
              <span className="catalog-card-badge">{promo.category}</span>
            </div>
            <div className="catalog-card-body">
              <h3 className="catalog-card-name">{promo.name}</h3>
              <p className="catalog-card-desc">{promo.desc}</p>
              <div className="catalog-card-footer">
                <div className="catalog-card-pricing">
                  <span className="catalog-card-old-price">{promo.oldPrice}</span>
                  <span className="catalog-card-sale-price">{promo.newPrice}</span>
                </div>
                <button className="catalog-card-btn catalog-card-btn--buy">Comprar</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Sales;
