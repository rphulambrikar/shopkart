import React from 'react';
import "../styles/Payment.css";

const Payment = () => {
  // Retrieve cart items and total price from session storage
  const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  const totalPrice = sessionStorage.getItem('totalPrice') || '0.00';

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
          <form>
            <label htmlFor="name">Name on Card</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="card-number">Card Number</label>
            <input type="text" id="card-number" name="card-number" required />

            <label htmlFor="expiry-date">Expiry Date</label>
            <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required />

            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" required />

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
