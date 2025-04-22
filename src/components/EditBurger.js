import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ImageUploader from './ImageUploader';
import ToppingInput from './ToppingInput';

function EditBurger() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    bgColor: '#dcedc8',
    toppings: [],
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error message state

  // Fetch burger details for editing
  useEffect(() => {
    const fetchBurgerData = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/burgers/${id}`);
        
        console.log('****Fetched Burger Data:', res.data);
        const data = res.data;

        setFormData({
          name: data.name,
          description: data.description,
          price: data.price,
          imageUrl: data.imageUrl,
          bgColor: data.bgColor || '#dcedc8',
          toppings: data.toppings || [],
        });
        setImagePreview(data.imageUrl);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch burger data');
      }
    };

    fetchBurgerData();
  }, [id]);

  // Handle form input changes
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle topping addition
  const handleToppingsUpdate = topping => {
    setFormData(prev => ({
      ...prev,
      toppings: [...prev.toppings, topping],
    }));
  };

  // Handle image update
  const handleImageUpdate = (imageBase64, file) => {
    setFormData(prev => ({ ...prev, imageUrl: imageBase64 }));
    setImagePreview(imageBase64);
  };

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault();

    if (!formData.name || !formData.description || !formData.price) {
      setError('Please fill in all required fields.');
      return;
    }

    setIsLoading(true); // Set loading state

    try {
      const payload = {
        ...formData,
        price: parseInt(formData.price),
        toppings: formData.toppings.map(t => ({
          ...t,
          price: parseInt(t.price),
        })),
      };

      await axios.put(`http://localhost:3001/api/burgers/${id}`, payload);
      alert('Burger updated successfully!');
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Failed to update burger');
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="add-burger-container">
      <h2>Edit Burger</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="form-group">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Burger Name"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          name="bgColor"
          value={formData.bgColor}
          onChange={handleChange}
          placeholder="Background Color"
        />

        <ImageUploader onImageChange={handleImageUpdate} imagePreview={imagePreview} />
        <ToppingInput onAddTopping={handleToppingsUpdate} />

        {formData.toppings.length > 0 && (
          <ul className="toppings-list">
            {formData.toppings.map((top, idx) => (
              <li key={idx}>
                {top.name} - Rs.{top.price}
              </li>
            ))}
          </ul>
        )}

        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? 'Updating...' : 'Update Burger'}
        </button>
      </form>
    </div>
  );
}

export default EditBurger;
