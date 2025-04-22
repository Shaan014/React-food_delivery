import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DrinkList.css';

function DrinksList() {
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchDrinks();
  }, []);

  const fetchDrinks = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/drinks');
      setDrinks(res.data);
    } catch (err) {
      setError('Failed to load drinks');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this drinks?')) return;
    try {
      await axios.delete(`http://localhost:3001/api/drinks/${id}`);
      fetchDrinks(); // Refresh list
    } catch (err) {
      console.error(err);
      setError('Failed to delete drinks');
    }
  };

  return (
    <div className="drinks-list-container">
      <h2>All Drinks</h2>
      {error && <p className="error">{error}</p>}
      {drinks.length === 0 ? (
        <p>No Drinks found</p>
      ) : (
        <ul className="drinks-list">
          {drinks.map((drinks) => (
            <li key={drinks._id} className="drinks-item">
              <img
                src={`http://localhost:3001${drinks.imageUrl}`}
                alt={drinks.name}
                style={{ width: '100px', height: '80px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <div style={{ flex: 1, marginLeft: '1rem' }}>
                <h3>{drinks.name}</h3>
                <p>{drinks.description}</p>
                <p><strong>Rs.{drinks.price}</strong></p>
              </div>
              <div className="actions">
                <button onClick={() => navigate(`/edit-drinks/${drinks._id}`)} className="edit-btn">
                  Edit
                </button>
                <button onClick={() => handleDelete(drinks._id)} className="delete-btn">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DrinksList;