import React from 'react';
import "../styles/Navbar.css";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Logout from "./Logout";


const Navbar = () => {

  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  const handleLogin = () => {
    navigate('login');
  }

  const handleCart = () => {
    navigate('cart');
  }

  const handleOrder = () => {
    navigate('order');
  }


  return (
    <div className="navbar">
      <div className="logo">
        <img src='https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png' alt='Amazon' />
      </div>
      <button className="navbarButton"><i className="fas fa-map-marker-alt"></i> Change Location</button>
      <input placeholder='Search for products' />
      <button className="navbarButton"><i className="fas fa-globe"></i> EN</button>
      

      {isLoggedIn ? (
        <Logout /> // Show Logout if logged in
      ) : (
        <button className="navbarButton" onClick={handleLogin}><i className="fas fa-user"></i> Login</button> // Show Login if not logged in
      )}


      <button className="navbarButton" onClick={handleOrder}><i className="fas fa-receipt"></i> Returns and Orders</button>
      <button className="navbarButton" onClick={handleCart}><i className="fas fa-shopping-cart"></i> Cart</button>
    </div>
    
    
  ) 
}

export default Navbar