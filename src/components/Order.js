import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Order.css";

const Order = () => {
  // Retrieve cart items and total price from session storage
  const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  const totalPrice = parseFloat(sessionStorage.getItem('totalPrice')) || 0;
  
  const shippingCost = 5.00;
  const finalTotal = (totalPrice + shippingCost).toFixed(2);
  
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Navigate back to the cart or home page
    navigate('/');
  };

  return (
    <div className="orderContainer">
      <header>
        <h1>Order Confirmation</h1>
      </header>
      
      <section className="orderSummary">
        <h2>Your Order Summary</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.title} - ${(item.price || 0).toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
          <li>Shipping - ${shippingCost.toFixed(2)}</li>
          <li><strong>Total - ${finalTotal}</strong></li>
        </ul>
      </section>

      <button className="goBackButton" onClick={handleGoBack}>Go Back to Shopping</button>

      <footer>
        <p>&copy; 2024 Your Company Name</p>
      </footer>
    </div>
  );
};

export default Order;
