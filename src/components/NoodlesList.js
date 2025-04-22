import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NoodleList.css';

function NoodleList() {
  const [noodles, setNoodles] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchNoodles();
  }, []);

  const fetchNoodles = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/noodles');
      setNoodles(res.data);
    } catch (err) {
      setError('Failed to load noodles');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this noodle?')) return;
    try {
      await axios.delete(`http://localhost:3001/api/noodles/${id}`);
      fetchNoodles(); // Refresh list
    } catch (err) {
      console.error(err);
      setError('Failed to delete noodle');
    }
  };

  return (
    <div className="noodle-list-container">
      <h2>All Noodles</h2>
      {error && <p className="error">{error}</p>}
      {noodles.length === 0 ? (
        <p>No noodles found</p>
      ) : (
        <ul className="noodle-list">
          {noodles.map((noodle) => (
            <li key={noodle._id} className="noodle-item">
              <img
                src={`http://localhost:3001${noodle.imageUrl}`}
                alt={noodle.name}
                style={{ width: '100px', height: '80px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <div style={{ flex: 1, marginLeft: '1rem' }}>
                <h3>{noodle.name}</h3>
                <p>{noodle.description}</p>
                <p><strong>Rs.{noodle.price}</strong></p>
              </div>
              <div className="actions">
                <button onClick={() => navigate(`/edit-noodle/${noodle._id}`)} className="edit-btn">
                  Edit
                </button>
                <button onClick={() => handleDelete(noodle._id)} className="delete-btn">
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

export default NoodleList;
