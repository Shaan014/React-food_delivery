// src/components/Noodles.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from './Foodcard';

function Noodles() {
  const [noodleItems, setNoodleItems] = useState([]);

  useEffect(() => {
    const fetchNoodles = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/noodles');
        setNoodleItems(response.data);
      } catch (error) {
        console.error('Error fetching noodle data:', error);
      }
    };

    fetchNoodles();
  }, []);

  return (
    <div className="container">
      <h1>Noodles Menu</h1>
      <div className="menu-item-list">
        {noodleItems.map((item, index) => (
          <FoodCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Noodles;

