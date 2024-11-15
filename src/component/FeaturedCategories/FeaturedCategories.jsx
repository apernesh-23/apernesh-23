import React from 'react';
import './FeaturedCategories.css';

const categories = [
  { name: 'Fashion', description: 'Latest trends in fashion.', image: '/images/th1.jpg', link: '/fashion' },
  { name: 'Electronics', description: 'Newest gadgets and electronics.', image: '/images/th2.jpg', link: '/electronics' },
  { name: 'Home Decor', description: 'Stylish decor for your home.', image: '/images/curtains.jpg', link: '/home-decor' },
];

const FeaturedCategories = () => {
  return (
    <section className="featured-categories">
      <h2 className="section-title">Featured Categories</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <a href={category.link}>
              <img src={category.image} alt={category.name} className="category-image" />
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
