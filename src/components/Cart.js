import React from 'react'
import "../styles/Cart.css"

const Cart = () => {
  return (
    <div class="cart-container">
    <h1>Your Shopping Cart</h1>
    <div class="cart-item">
        <img src="https://via.placeholder.com/100" alt="Item Image"/>
        <div class="item-details">
            <h2>Item Name</h2>
            <p>Quantity: 1</p>
            <p>$29.99</p>
        </div>
        <button class="remove-btn">Remove</button>
    </div>
    <div class="cart-item">
        <img src="https://via.placeholder.com/100" alt="Item Image"/>
        <div class="item-details">
            <h2>Another Item</h2>
            <p>Quantity: 2</p>
            <p>$49.99</p>
        </div>
        <button class="remove-btn">Remove</button>
    </div>
    <div class="cart-summary">
        <p>Total: $79.98</p>
        <button class="checkout-btn">Proceed to Checkout</button>
    </div>
</div>
  )
}

export default Cart