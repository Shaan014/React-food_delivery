import React, { useState } from 'react';

function ToppingInput({ onAddTopping }) {
  const [topping, setTopping] = useState({ name: '', price: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setTopping(prev => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    if (topping.name && topping.price) {
      onAddTopping({ ...topping, price: parseInt(topping.price) });
      setTopping({ name: '', price: '' });
    }
  };

  return (
    <div>
      <h4 className="toppings-header">Add Toppings</h4>
      <input name="name" placeholder="Topping Name" value={topping.name} onChange={handleChange} />
      <input name="price" placeholder="Topping Price" type="number" value={topping.price} onChange={handleChange} />
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  );
}

export default ToppingInput;
