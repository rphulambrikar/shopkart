import React from 'react';
import "../styles/Navbar.css";


const Navbar = () => {
  return (
    <>
    
    <div className="Navbar">
      <h1>Amazon</h1>
      <button>Change Location</button>
      <input placeholder='Search for products'/>
      <button>EN</button>
      <button>Login</button>
      <button>Returns and Orders</button>
      <button>Cart</button>
    </div>
    </>
  ) 
}

export default Navbar