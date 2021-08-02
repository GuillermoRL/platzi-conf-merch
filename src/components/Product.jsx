import React from 'react';

const Product = ({ product, handleAddToCart }) => (
    <div className="Products-item">
        <img src={`http://localhost:1337${product.image[0].url}`} alt={product.title} />
        <div className="Products-item-info">
            <h2>{product.title}</h2>
            <span>$ {product.price}</span>
            <p>{product.description}</p>
        </div>
        <button type="button" onClick={handleAddToCart(product)}>Comprar</button>
    </div>
)

export default Product;