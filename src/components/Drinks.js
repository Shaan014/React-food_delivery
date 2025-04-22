// src/components/Drinks.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from './Foodcard';

function Drinks() {

  const [drinksItems, setDrinksItems] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/drinks');
        setDrinksItems(response.data);
      } catch (error) {
        console.error('Error fetching drink data:', error);
      }
    };

    fetchDrinks();
  }, []);
 

  return (
    <div className="container">
      <h1>Drinks Menu</h1>
      <div className="menu-item-list">
        {drinksItems.map((item, index) => (
          <FoodCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Drinks;



 // const drinksItems = [
  //   {
  //     name: 'Coca Cola',
  //     description: 'Classic refreshing cola drink',
  //     price: 150,
  //     imageUrl: '/images/cc.jpg',
  //     bgColor: '#bbdefb',
  //   },
  //   {
  //     name: 'Orange Juice',
  //     description: 'Freshly squeezed orange juice',
  //     price: 200,
  //     imageUrl: '/images/oj.jpg',
  //     bgColor: '#bbdefb',
  //   },
  //   {
  //     name: 'Pespsi',
  //     description: 'Classic refreshing cola drink',
  //     price: 150,
  //     imageUrl: '/images/pepsi.jpg',
  //     bgColor: '#bbdefb',
  //   },
  //   {
  //     name: 'Sprite',
  //     description: 'Classic refreshing cool drink',
  //     price: 150,
  //     imageUrl: '/images/sprite.jpg',
  //     bgColor: '#bbdefb',
  //   },
    
    
  //   // Add more drinks items as needed
  // ];