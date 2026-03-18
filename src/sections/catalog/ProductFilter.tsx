import React from 'react';

interface Filters {
  category: string;
  price: string;
}

interface ProductFilterProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ filters, onFilterChange }) => {
  const categories = ['all', 'Lámparas', 'Cojines', 'Floreros', 'Muebles'];
  const prices = ['all', '< $1.000', '$1.000 - $5.000', '> $5.000'];

  const handleChange = (key: keyof Filters, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="filter-bar">
      <select value={filters.category} onChange={(e) => handleChange('category', e.target.value)} className="filter-select">
        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
      </select>
      <select value={filters.price} onChange={(e) => handleChange('price', e.target.value)} className="filter-select">
        {prices.map(price => <option key={price} value={price}>{price}</option>)}
      </select>
      <button className="clear-filters" onClick={() => onFilterChange({ category: 'all', price: 'all' })}>
        Limpiar
      </button>
    </div>
  );
};

export default ProductFilter;

