import React from 'react';
import Navbar from './component/Navbar/Navbar';
import HeroSection from './component/HeroSection/HeroSection';
import FeaturedCategories from './component/FeaturedCategories/FeaturedCategories';
import TrendingProducts from './component/TrendingProducts/TrendingProducts';
import LimitedTimeDeals from './component/LimitedTimeDeals/LimitedTimeDeals';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <FeaturedCategories />
      <TrendingProducts />
      <LimitedTimeDeals />

      <main>
        {/* Other components or content */}
        <h1>Welcome to ShopEase</h1>
      </main>
    </div>
  );
}

export default App;

