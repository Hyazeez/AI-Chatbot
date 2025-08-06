import React from "react";
import "./Productcard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price}</p>

      {product.image && (
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      )}

      <iframe
        width="100%"
        height="300"
        src={product.video.replace("watch?v=", "embed/")}
        title={product.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default ProductCard;
