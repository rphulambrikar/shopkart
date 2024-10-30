import React, { useState } from 'react';
import "../styles/Navbar.css";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logout from "./Logout";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  const handleToggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleLogin = () => {
    navigate('login');
  };

  const handleCart = () => {
    navigate('cart');
  };

  const handleOrder = () => {
    navigate('order');
  };

  const handleSearch = (event) => {
    console.log('Search for:', event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src='https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png' alt='Amazon' />
      </div>
      <button className="navbarToggle" onClick={handleToggleMenu}>
        {menuOpen ? 'Close Menu' : 'Menu'}
      </button>
      <div className={`navbarMenu ${menuOpen ? 'open' : ''}`}>
        <button className="navbarButton" aria-label="Change Location">
          <i className="fas fa-map-marker-alt"></i> Change Location
        </button>
        <input 
          type="text" 
          placeholder='Search for products' 
          onChange={handleSearch} 
          aria-label="Search Products"
        />
        <button className="navbarButton" aria-label="Change Language">
          <i className="fas fa-globe"></i> EN
        </button>

        {isLoggedIn ? (
          <Logout />
        ) : (
          <button className="navbarButton" onClick={handleLogin} aria-label="Login">
            <i className="fas fa-user"></i> Login
          </button>
        )}

        <button className="navbarButton" onClick={handleOrder} aria-label="View Returns and Orders">
          <i className="fas fa-receipt"></i> Returns and Orders
        </button>
        <button className="navbarButton" onClick={handleCart} aria-label="View Cart">
          <i className="fas fa-shopping-cart"></i> Cart
        </button>
      </div>
    </nav>
  ); 
}

export default Navbar;
