import React from 'react';

const Categories = ({ categories, filterItems, value }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          key={index}
          type="button"
          className={`filter-btn ${index === value ? 'filter-btn-active' : ''}`}
          onClick={() => filterItems(category, index)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
