import React from 'react';
import './Navbar.css';
import { FaShoppingCart, FaUserCircle, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="navbar-logo">ShopEase</h2>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          className="navbar-search"
          placeholder="Search for products, brands, and more"
        />
        <button className="navbar-search-btn">
          <FaSearch />
        </button>
      </div>
      <div className="navbar-right">
        <div className="navbar-link">Login</div>
        <div className="navbar-link">Become a Seller</div>
        <div className="navbar-link">
          <FaUserCircle /> Profile
        </div>
        <div className="navbar-link">
          <FaShoppingCart /> Cart
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
