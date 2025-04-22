import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from './Foodcard';

function Burger() {
  const [burgerItems, setBurgerItems] = useState([]);

  useEffect(() => {
    const fetchBurgers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/burgers');
        setBurgerItems(response.data);
      } catch (error) {
        console.error('Error fetching burger data:', error);
      }
    };

    fetchBurgers();
  }, []);

  return (
    <div className="container">
      <h1>Burger Menu</h1>
      <div className="menu-item-list">
        {burgerItems.map((item, index) => (
          <FoodCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Burger;

