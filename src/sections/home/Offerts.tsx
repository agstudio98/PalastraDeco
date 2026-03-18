import React from 'react';

const Offerts: React.FC = () => {
  const products = [
    {
      name: 'Lámpara Deco Rosa',
      price: '$2.999',
      category: 'Iluminación',
      desc: 'Diseño artesanal en tonos rosados con acabado mate.',
      img: 'https://images.pexels.com/photos/10531005/pexels-photo-10531005.jpeg?auto=compress&cs=tinysrgb&w=800',
      attribution: 'Em Hopper on Pexels',
    },
    {
      name: 'Cojines Carmín',
      price: '$1.499',
      category: 'Textiles',
      desc: 'Set de dos almohadones en terciopelo carmín con bordado.',
      img: 'https://images.pexels.com/photos/8634414/pexels-photo-8634414.jpeg?auto=compress&cs=tinysrgb&w=800',
      attribution: 'Kate Branch on Pexels',
    },
    {
      name: 'Floreros Púrpura',
      price: '$899',
      category: 'Decoración',
      desc: 'Cerámica artesanal esmaltada en tonos violeta profundo.',
      img: 'https://images.pexels.com/photos/29432556/pexels-photo-29432556.jpeg?auto=compress&cs=tinysrgb&w=800',
      attribution: 'Roman Biernacki on Pexels',
    },
  ];

  return (
    <section className="offerts-section">
      <div className="catalog-section-header">
        <span className="catalog-eyebrow">Catálogo</span>
        <h2 className="catalog-title">Destacados</h2>
        <p className="catalog-desc">
          Una selección de piezas únicas para transformar cada rincón de tu hogar.
        </p>
      </div>

      <div className="catalog-cards-grid">
        {products.map((product, index) => (
          <article key={index} className="catalog-card">
            <div className="catalog-card-img-wrap">
              <img src={product.img} alt={product.name} />
              <span className="catalog-card-badge">{product.category}</span>
            </div>
            <div className="catalog-card-body">
              <h3 className="catalog-card-name">{product.name}</h3>
              <p className="catalog-card-desc">{product.desc}</p>
              <div className="catalog-card-footer">
                <span className="catalog-card-price">{product.price}</span>
                <button className="catalog-card-btn">Contactar</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Offerts;
