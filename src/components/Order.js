import React from 'react'
import "../styles/Order.css"

const Order = () => {
  return (
    <div class="container">
        <header>
            <h1>Order History</h1>
        </header>
        
        <main>
            <section class="order-history">
                <h2>Your Orders</h2>
                
                <div class="order-card">
                    <div class="order-header">
                        <span class="order-id">Order #123456</span>
                        <span class="order-date">September 15, 2024</span>
                    </div>
                    <div class="order-items">
                        <div class="item">
                            <img src="item1.jpg" alt="Item 1" />
                            <div class="item-details">
                                <h3>Item 1 Name</h3>
                                <p>Quantity: 2</p>
                                <p>Price: $20.00</p>
                            </div>
                        </div>
                        <div class="item">
                            <img src="item2.jpg" alt="Item 2" />
                            <div class="item-details">
                                <h3>Item 2 Name</h3>
                                <p>Quantity: 1</p>
                                <p>Price: $35.00</p>
                            </div>
                        </div>
                    </div>
                    <div class="order-footer">
                        <span class="total">Total: $75.00</span>
                        <button class="view-details">View Details</button>
                    </div>
                </div>
                
            </section>
        </main>

        <footer>
            <p>&copy; 2024 Your Company Name</p>
        </footer>
    </div>
  )
}

export default Order