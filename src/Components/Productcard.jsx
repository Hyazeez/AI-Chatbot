import React from "react";
import "./Productcard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price}</p>
      <a
        href={product.video}
        target="_blank"
        rel="noopener noreferrer"
        className="product-video-link"
      >
        Watch Video 🔗
      </a>
    </div>
  );
};

export default ProductCard;
