import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BurgerList.css';

function BurgerList() {
  const [burgers, setBurgers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBurgers();
  }, []);

  const fetchBurgers = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/burgers');
      setBurgers(res.data);
    } catch (err) {
      setError('Failed to load burgers');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this burger?')) return;
    try {
      await axios.delete(`http://localhost:3001/api/burgers/${id}`);
      fetchBurgers(); // Refresh list
    } catch (err) {
      console.error(err);
      setError('Failed to delete burger');
    }
  };

  return (
    <div className="burger-list-container">
      <h2>All Burgers</h2>
      {error && <p className="error">{error}</p>}
      {burgers.length === 0 ? (
        <p>No burgers found</p>
      ) : (
        <ul className="burger-list">
          {burgers.map((burger) => (
            <li key={burger._id} className="burger-item">
              <img
                src={`http://localhost:3001${burger.imageUrl}`}
                alt={burger.name}
                style={{ width: '100px', height: '80px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <div style={{ flex: 1, marginLeft: '1rem' }}>
                <h3>{burger.name}</h3>
                <p>{burger.description}</p>
                <p><strong>Rs.{burger.price}</strong></p>
              </div>
              <div className="actions">
                <button onClick={() => navigate(`/edit-burger/${burger._id}`)} className="edit-btn">
                  Edit
                </button>
                <button onClick={() => handleDelete(burger._id)} className="delete-btn">
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

export default BurgerList;
