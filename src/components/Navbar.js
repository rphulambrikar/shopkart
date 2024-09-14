import React from 'react';
import "../styles/Navbar.css";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('login');
  }


  return (
    <div className="navbar">
      <div className="logo">
        <img src='https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png' alt='Amazon' />
      </div>
      <button className="navbarButton"><i className="fas fa-map-marker-alt"></i> Change Location</button>
      <input placeholder='Search for products' />
      <button className="navbarButton"><i className="fas fa-globe"></i> EN</button>
      <button className="navbarButton"><i className="fas fa-user" onClick={handleLogin}></i> Login</button>
      <button className="navbarButton"><i className="fas fa-receipt"></i> Returns and Orders</button>
      <button className="navbarButton"><i className="fas fa-shopping-cart"></i> Cart</button>
    </div>
    
    
  ) 
}

export default Navbar