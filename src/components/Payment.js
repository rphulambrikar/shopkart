import React, {useState} from 'react';
import "../styles/Payment.css";
import { useNavigate } from 'react-router-dom';
import {users} from "../UserData/User";

const Payment = () => {
  // Retrieve cart items and total price from session storage
  const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  const totalPrice = sessionStorage.getItem('totalPrice') || '0.00';
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    const user = users.find(u => u.cardDetails.cardNumber === cardNumber && 
                                  u.cardDetails.expiryDate === expiryDate && 
                                  u.cardDetails.cvv === cvv);
    if (user) {
      navigate('/order');
    } else {
      alert('Invalid card details');
    }
  };

  // Generate order summary
  const orderSummary = cartItems.map(item => (
    <li key={item.id}>{item.title} - ${(item.price || 0).toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</li>
  ));

  return (
    <div className="container">
      <header>
        <h1>Checkout</h1>
      </header>
      
      <div>
        <section className="order-summary">
          <h2>Order Summary</h2>
          <ul>
            {orderSummary}
            <li>Shipping - $5.00</li>
            <li><strong>Total - ${totalPrice + 5.00}</strong></li>
          </ul>
        </section>

        <section className="payment-details">
          <h2>Payment Information</h2>
          <form onSubmit={handlePayment}>

            <label htmlFor="card-number">Card Number</label>
            <input type="text" value={cardNumber} onChange={e => setCardNumber(e.target.value)} placeholder="Card Number" required />

            <label htmlFor="expiry-date">Expiry Date</label>
            <input type="text" value={expiryDate} onChange={e => setExpiryDate(e.target.value)} placeholder="Expiry Date" required />

            <label htmlFor="cvv">CVV</label>
            <input type="text" value={cvv} onChange={e => setCvv(e.target.value)} placeholder="CVV" required />

            <button type="submit">Pay Now</button>
          </form>
        </section>
      </div>

      <footer>
        <p>&copy; 2024 Your Company Name</p>
      </footer>
    </div>
  );
}

export default Payment;
