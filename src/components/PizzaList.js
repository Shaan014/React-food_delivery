import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PizzaList.css';

function PizzaList() {
  const [pizza, setPizza] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchPizza();
  }, []);

  const fetchPizza = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/pizza');
      setPizza(res.data);
    } catch (err) {
      setError('Failed to load Pizza');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this Pizza?')) return;
    try {
      await axios.delete(`http://localhost:3001/api/pizza/${id}`);
      fetchPizza(); // Refresh list
    } catch (err) {
      console.error(err);
      setError('Failed to delete pizza');
    }
  };

  return (
    <div className="pizza-list-container">
      <h2>All Pizza</h2>
      {error && <p className="error">{error}</p>}
      {pizza.length === 0 ? (
        <p>No Pizzas found</p>
      ) : (
        <ul className="pizza-list">
          {pizza.map((pizza) => (
            <li key={pizza._id} className="pizza-item">
              <img
                src={`http://localhost:3001${pizza.imageUrl}`}
                alt={pizza.name}
                style={{ width: '100px', height: '80px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <div style={{ flex: 1, marginLeft: '1rem' }}>
                <h3>{pizza.name}</h3>
                <p>{pizza.description}</p>
                <p><strong>Rs.{pizza.price}</strong></p>
              </div>
              <div className="actions">
                <button onClick={() => navigate(`/edit-pizza/${pizza._id}`)} className="edit-btn">
                  Edit
                </button>
                <button onClick={() => handleDelete(pizza._id)} className="delete-btn">
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

export default PizzaList;
