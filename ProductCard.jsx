import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.images[0]} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.price} SEK</p>
      <p>{product.category}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;