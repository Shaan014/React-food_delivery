// src/components/FoodCard.js
import React, { useState } from 'react';
import './Foodcard.css';

function FoodCard({ name, description, price, imageUrl, bgColor, toppings }) {
  const [quantity, setQuantity] = useState(0);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [showToppings, setShowToppings] = useState(false);

  const handleAdd = () => {
    setShowToppings(true);
    setQuantity(quantity + 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleToppingChange = (topping, isChecked) => {
    if (isChecked) {
      setSelectedToppings([...selectedToppings, topping]);
    } else {
      setSelectedToppings(selectedToppings.filter(t => t.name !== topping.name));
    }
  };

  const totalPrice = price * quantity + selectedToppings.reduce((total, topping) => total + topping.price * quantity, 0);

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
      <p>Total: {totalPrice} LKR</p>
    </div>
  );
}

export default FoodCard;

