import React from 'react';

interface Filters {
  category: string;
  price: string;
}

interface CatalogGridProps {
  filters: Filters;
}

const allProducts = [
  {
    id: 1,
    name: 'Lámpara Deco Rosa',
    price: '$2.999',
    category: 'Lámparas',
    img: 'https://images.pexels.com/photos/10531005/pexels-photo-10531005.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    name: 'Cojín Carmín Lux',
    price: '$1.499',
    category: 'Cojines',
    img: 'https://images.pexels.com/photos/8634414/pexels-photo-8634414.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    name: 'Florero Púrpura',
    price: '$899',
    category: 'Floreros',
    img: 'https://images.pexels.com/photos/29432556/pexels-photo-29432556.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    name: 'Mesa Interior',
    price: '$8.999',
    category: 'Muebles',
    img: 'https://images.pexels.com/photos/21345932/pexels-photo-21345932.png?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 5,
    name: 'Lámpara Modern',
    price: '$3.499',
    category: 'Lámparas',
    img: 'https://images.pexels.com/photos/16769172/pexels-photo-16769172.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 6,
    name: 'Set Cojines',
    price: '$2.799',
    category: 'Cojines',
    img: 'https://images.pexels.com/photos/8634412/pexels-photo-8634412.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 7,
    name: 'Florero Grande',
    price: '$1.299',
    category: 'Floreros',
    img: 'https://images.pexels.com/photos/31399032/pexels-photo-31399032.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 8,
    name: 'Silla Deco',
    price: '$4.499',
    category: 'Muebles',
    img: 'https://images.unsplash.com/photo-1768209198274-01dd8d79cd1e?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=800',
  },
  {
    id: 9,
    name: 'Lámpara Púrpura',
    price: '$2.199',
    category: 'Lámparas',
    img: 'https://images.pexels.com/photos/15352967/pexels-photo-15352967.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 10,
    name: 'Cojín Rosa',
    price: '$999',
    category: 'Cojines',
    img: 'https://images.pexels.com/photos/8634412/pexels-photo-8634412.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const CatalogGrid: React.FC<CatalogGridProps> = ({ filters }) => {
  const filteredProducts = allProducts.filter(product => {
    const matchCategory =
      filters.category === 'all' || product.category === filters.category;
    const numericPrice = parseInt(product.price.replace('$', '').replace('.', ''));
    const matchPrice =
      filters.price === 'all' ||
      (filters.price === '< $1.000' && numericPrice < 1000) ||
      (filters.price === '$1.000 - $5.000' && numericPrice >= 1000 && numericPrice <= 5000) ||
      (filters.price === '> $5.000' && numericPrice > 5000);
    return matchCategory && matchPrice;
  });

  const handleContact = (name: string) => {
    alert(`¡Contactar por ${name}! Usa MercadoPago, Naranja o MasterCard. Email: info@palastradeco.com`);
  };

  return (
    <div className="catalog-grid products-grid">
      {filteredProducts.map(product => (
        <div key={product.id} className="product-card" onClick={() => handleContact(product.name)}>
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p className="price">{product.price}</p>
        </div>
      ))}
      {filteredProducts.length === 0 && (
        <p className="no-results">No hay productos con estos filtros.</p>
      )}
    </div>
  );
};

export default CatalogGrid;
