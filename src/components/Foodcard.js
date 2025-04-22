import axios from 'axios';
import React, { useState } from 'react';
import './Foodcard.css';

function FoodCard({ name, description, price, imageUrl, bgColor, toppings, category }) {
  const [quantity, setQuantity] = useState(0);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [showToppings, setShowToppings] = useState(false);

  // Handle adding the item
  const handleAdd = () => {
    if (quantity === 0) setShowToppings(true);
    setQuantity(quantity + 1);
  };

  // Handle removing the item
  const handleRemove = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
      setShowToppings(false); // Hide toppings when quantity is 0
      setSelectedToppings([]); // Reset toppings
    }
  };

  // Handle topping selection
  const handleToppingChange = (topping, isChecked) => {
    if (isChecked) {
      setSelectedToppings([...selectedToppings, topping]);
    } else {
      setSelectedToppings(selectedToppings.filter(t => t.name !== topping.name));
    }
  };

  // Calculate total price
  const totalToppingsPrice = selectedToppings.reduce((total, topping) => total + topping.price, 0);
  const totalPrice = quantity > 0 ? (price * quantity) + totalToppingsPrice : 0;

  // Add to cart API call
  const handleAddToCart = async () => {
    const cartItem = {
      name,
      imageUrl,
      category, // important
      price,
      quantity,
      toppings: selectedToppings,
      totalPrice
    };

    try {
      await axios.post('http://localhost:3001/api/cart', cartItem);
      alert("✅ Item added to cart!");
      setQuantity(0);
      setSelectedToppings([]);
      setShowToppings(false);
    } catch (error) {
      console.error("❌ Failed to add to cart", error);
      alert("Failed to add item to cart");
    }
  };

  return (
    <div className="food-card" style={{ backgroundColor: bgColor }}>
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: {price} LKR</p>

      {showToppings && toppings && toppings.length > 0 && (
        <div className="toppings">
          <h3>Select Toppings:</h3>
          {toppings.map((topping, index) => (
            <div key={index} className="topping-option">
              <input
                type="checkbox"
                id={`topping-${index}`}
                checked={selectedToppings.some(t => t.name === topping.name)}
                onChange={(e) => handleToppingChange(topping, e.target.checked)}
              />
              <label htmlFor={`topping-${index}`}>
                {topping.name} (+{topping.price} LKR)
              </label>
            </div>
          ))}
        </div>
      )}

      <div className="quantity-controls">
        {showToppings ? (
          <>
            <button className="round-button" onClick={handleRemove}>-</button>
            <span>{quantity}</span>
            <button className="round-button" onClick={handleAdd}>+</button>
          </>
        ) : (
          <button className="add-button" onClick={handleAdd}>Add</button>
        )}
      </div>

      {quantity > 0 && (
        <>
          <p>Total: {totalPrice} LKR</p>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </>
      )}
    </div>
  );
}

export default FoodCard;


