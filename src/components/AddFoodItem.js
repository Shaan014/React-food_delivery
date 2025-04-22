import axios from 'axios';
import React, { useState } from 'react';
import ImageUploader from './ImageUploader';
import ToppingInput from './ToppingInput';
import './addFoodItem.css';

function AddFoodItem({ category }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    bgColor: '#dcedc8',
    toppings: [],
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleToppingsUpdate = topping => {
    setFormData(prev => ({
      ...prev,
      toppings: [...prev.toppings, topping],
    }));
  };

  const handleImageUpdate = (imageBase64, file) => {
    setFormData(prev => ({ ...prev, imageUrl: imageBase64 }));
    setImagePreview(imageBase64);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        price: parseInt(formData.price),
        toppings: formData.toppings.map(t => ({
          ...t,
          price: parseInt(t.price),
        })),
      };

      await axios.post(`http://localhost:3001/api/${category}`, payload);
      alert(`${category.charAt(0).toUpperCase() + category.slice(1)} added!`);
      setFormData({
        name: '',
        description: '',
        price: '',
        imageUrl: '',
        bgColor: '#dcedc8',
        toppings: [],
      });
      setImagePreview(null);
    } catch (err) {
      console.error(err);
      alert('Failed to add food item');
    }
  };

  return (
    <div className="add-food-item-container">
      <h2>Add {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <input name="name" placeholder={`${category.charAt(0).toUpperCase() + category.slice(1)} Name`} value={formData.name} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input name="bgColor" placeholder="Background Color" value={formData.bgColor} onChange={handleChange} />

        <ImageUploader onImageChange={handleImageUpdate} imagePreview={imagePreview} />

        {category === 'burger' ||category === 'pizza' || category === 'noodles' ?  (
          <ToppingInput onAddTopping={handleToppingsUpdate} />
        ) : null}

        {formData.toppings.length > 0 && (
          <ul className="toppings-list">
            {formData.toppings.map((top, idx) => (
              <li key={idx}>{top.name} - Rs.{top.price}</li>
            ))}
          </ul>
        )}

        <button type="submit" className="submit-btn">Submit {category.charAt(0).toUpperCase() + category.slice(1)}</button>
      </form>
    </div>
  );
}

export default AddFoodItem;
