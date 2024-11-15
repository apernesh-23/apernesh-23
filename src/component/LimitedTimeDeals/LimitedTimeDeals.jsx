import React, { useState, useEffect } from 'react';
import './LimitedTimeDeals.css';

// Helper function to calculate time remaining
const calculateTimeLeft = (endTime) => {
  const now = new Date().getTime();
  const distance = endTime - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

const LimitedTimeDeals = () => {
  const [timeLeft, setTimeLeft] = useState({});

  const dealEndTime = new Date().getTime() + 86400000; // 24 hours from now (for example)

  useEffect(() => {
    const timer = setInterval(() => {
      const timeRemaining = calculateTimeLeft(dealEndTime);
      setTimeLeft(timeRemaining);
    }, 1000);

    // Cleanup on component unmount
    return () => clearInterval(timer);
  }, [dealEndTime]);

  const products = [
    {
      name: 'Smartwatch',
      image: '/images/watch.jpg',
      originalPrice: '$299',
      discountPrice: '$199',
      link: '/product/smartwatch',
    },
    {
      name: 'Wireless Earbuds',
      image: '/images/headphones.jpg',
      originalPrice: '$129',
      discountPrice: '$89',
      link: '/product/earbuds',
    },
  ];

  return (
    <section className="limited-time-deals">
      <h2 className="section-title">Limited-Time Deals</h2>
      <div className="deals-grid">
        {products.map((product, index) => (
          <div key={index} className="deal-card">
            <img src={product.image} alt={product.name} className="deal-image" />
            <div className="deal-info">
              <h3>{product.name}</h3>
              <p className="deal-price">
                <span className="original-price">{product.originalPrice}</span>
                <span className="discount-price">{product.discountPrice}</span>
              </p>
              <div className="timer">
                <span>{timeLeft.days}d </span>
                <span>{timeLeft.hours}h </span>
                <span>{timeLeft.minutes}m </span>
                <span>{timeLeft.seconds}s </span>
              </div>
              <a href={product.link} className="shop-now-btn">Shop Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LimitedTimeDeals;
