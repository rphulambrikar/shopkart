import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirecting to payment page
import "../styles/Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProduct = JSON.parse(sessionStorage.getItem('selectedProduct'));
    if (storedProduct) {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find(item => item.id === storedProduct.id);
        if (existingItem) {
          return prevItems.map(item =>
            item.id === storedProduct.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevItems, { ...storedProduct, quantity: 1 }];
        }
      });
      sessionStorage.removeItem('selectedProduct');
    }
  }, []);

  useEffect(() => {
    // Save cartItems and totalPrice in session storage when cartItems changes
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    sessionStorage.setItem('totalPrice', calculateTotalPrice());
  }, [cartItems]);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price || 0) * item.quantity, 0).toFixed(2);
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter(item => item.id !== id)
    );
  };

  const handleIncreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  };

  const handleCheckout = () => {
    navigate('/payment'); // Redirect to payment page
  };

  return (
    <div className="cartContainer">
      <h1>Cart</h1>
      <div className="cartItems">
        {cartItems.length === 0 ? (
          <div className='cartItem'>
            <p>No items in the cart.</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cartItem">
              <img src={item.image} alt={item.title} className="cartItemImage" />
              <div className="cartItemDetails">
                <h3>{item.title}</h3>
                <p>Price: ${item.price || 'N/A'}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="cartItemActions">
                  <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                  <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                  <button onClick={() => handleRemoveFromCart(item.id)} className="removeButton">Remove</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cartSummary cartItem">
        <h2>Total Price: ${calculateTotalPrice()}</h2>
        <button onClick={handleCheckout}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Cart;
