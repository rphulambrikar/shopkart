import React from 'react'
import "../styles/Payment.css"

const Payment = () => {
  return (
    <div class="container">
    <header>
        <h1>Checkout</h1>
    </header>
    
    <div>
        <section class="order-summary">
            <h2>Order Summary</h2>
            <ul>
                <li>Item 1 - $20.00</li>
                <li>Item 2 - $35.00</li>
                <li>Shipping - $5.00</li>
                <li><strong>Total - $60.00</strong></li>
            </ul>
        </section>

        <section class="payment-details">
            <h2>Payment Information</h2>
            <form>
                <label for="name">Name on Card</label>
                <input type="text" id="name" name="name" required />

                <label for="card-number">Card Number</label>
                <input type="text" id="card-number" name="card-number" required />

                <label for="expiry-date">Expiry Date</label>
                <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required />

                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" required />

                <button type="submit">Pay Now</button>
            </form>
        </section>
    </div>

    <footer>
        <p>&copy; 2024 Your Company Name</p>
    </footer>
</div>
  )
}

export default Payment