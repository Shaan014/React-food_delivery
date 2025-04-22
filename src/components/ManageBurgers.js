// src/components/ManageBurgers.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ManageBurgers() {
  const [burgers, setBurgers] = useState([]);

  const fetchBurgers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/burgers');
      setBurgers(response.data);
    } catch (error) {
      console.error('Error fetching burgers', error);
      alert('Failed to fetch burger data.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this burger?')) {
      try {
        await axios.delete(`http://localhost:3001/api/burgers/${id}`);
        fetchBurgers(); // Refresh the list after deleting
      } catch (error) {
        console.error('Error deleting burger', error);
        alert('Failed to delete burger');
      }
    }
  };

  useEffect(() => {
    fetchBurgers();
  }, []);

  return (
    <div>
      <h2>Manage Burgers</h2>
      <Link to="/addburger">Add New Burger</Link> {/* Link to the Add Burger page */}
      <ul>
        {burgers.length === 0 ? (
          <p>No burgers available</p>
        ) : (
          burgers.map((burger) => (
            <li key={burger._id}>
              <strong>{burger.name}</strong> - Rs. {burger.price}
              <Link to={`/edit-burger/${burger._id}`}>Edit</Link>
              <button onClick={() => handleDelete(burger._id)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ManageBurgers;
