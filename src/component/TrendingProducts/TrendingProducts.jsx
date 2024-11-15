import React from 'react';
import './TrendingProducts.css';

const products = [
  {
    name: 'Smartphone',
    image: '/images/Smartphone.jpg',
    price: '$699',
    link: '/product/Smartphone',
  },
  {
    name: 'Laptop',
    image: '/images/laptop.jpg',
    price: '$999',
    link: '/product/laptop',
  },
  {
    name: 'Headphones',
    image: '/images/headphones.jpg',
    price: '$199',
    link: '/product/headphones',
  },
  {
    name: 'Watch',
    image: '/images/watch.jpg',
    price: '$129',
    link: '/product/watch',
  },
];

const TrendingProducts = () => {
  return (
    <section className="trending-products">
      <h2 className="section-title">Trending Products</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <a href={product.link} className="add-to-cart-btn">Add to Cart</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
