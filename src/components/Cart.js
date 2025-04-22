import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/cart');
        const { items } = response.data;
        setCartItems(Array.isArray(items) ? items : []);
        calculateGrandTotal(items);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const calculateGrandTotal = (items) => {
    const total = items.reduce((sum, item) => sum + item.totalPrice, 0);
    setGrandTotal(total);
  };

  const handleRemoveItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/cart/${id}`);
      const updatedItems = cartItems.filter(item => item._id !== id);
      setCartItems(updatedItems);
      calculateGrandTotal(updatedItems);
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const handlePlaceOrder = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.address) errors.address = 'Address is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Order placed successfully!');
      setShowForm(false);
      setFormData({ name: '', email: '', address: '' });
    }
  };

  return (
    <div className="cart-container">
      <div className="cart-card">
        <h2>Your Cart</h2>

        {cartItems.length > 0 ? (
          cartItems.map(item => (
            <div key={item._id} className="cart-item">
              <img src={item.imageUrl} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.category}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total Price: {item.totalPrice} LKR</p>
                <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
              </div>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}

        <div className="cart-footer">
          <h3>Grand Total: {grandTotal} LKR</h3>
          <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
        </div>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-form">
            <h3>Checkout</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {formErrors.name && <span className="error">{formErrors.name}</span>}

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && <span className="error">{formErrors.email}</span>}

              <textarea
                name="address"
                placeholder="Delivery Address"
                value={formData.address}
                onChange={handleInputChange}
              />
              {formErrors.address && <span className="error">{formErrors.address}</span>}

              <div className="button-group">
  <button type="submit" className="submit-btn">Confirm Order</button>
  <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>Cancel</button>
</div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
