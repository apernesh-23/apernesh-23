import React from 'react';
import Slider from 'react-slick';
import './HeroSection.css';

// Import the slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
  };

  const images = [
    { src: '/images/image1.jpg', alt: 'Product 1', caption: 'Latest Fashion Collection' },
    { src: '/images/image2.jpg', alt: 'Product 2', caption: 'Trending Electronics' },
    { src: '/images/image3.jpg', alt: 'Product 3', caption: 'Home Essentials' },
  ];

  return (
    <section className="hero-section">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image.src} alt={image.alt} className="slide-image" />
            <div className="caption">{image.caption}</div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
