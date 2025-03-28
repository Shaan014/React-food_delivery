// src/components/Burger.js
import React from 'react';
import FoodCard from './Foodcard';

function Burger() {
  const burgerItems = [
    {
      name: 'Classic Burger',
      description: 'Beef patty with lettuce, tomato, and cheese',
      price: 600,
      imageUrl: '/images/beef burger.jpg',
      bgColor: '#dcedc8',
      toppings: [
        { name: 'Cheese', price: 50 },
        { name: 'Bacon', price: 70 },
        { name: 'Avocado', price: 80 }
      ],
    },
    {
      name: 'Chicken Burger',
      description: 'Crispy chicken fillet with mayo and lettuce',
      price: 700,
      imageUrl: '/images/chicken burger.jpeg',
      bgColor: '#dcedc8',
      toppings: [
        { name: 'Cheese', price: 50 },
        { name: 'Bacon', price: 70 },
        { name: 'Jalapenos', price: 40 }
      ],
    },
    {
      name: 'Veggie Burger',
      description: 'Crispy veg patty filled',
      price: 700,
      imageUrl: '/images/veg burger.jpg',
      bgColor: '#dcedc8',
      toppings: [
        { name: 'Cheese', price: 50 },
        { name: 'veg', price: 70 },
        { name: 'Jalapenos', price: 40 }
      ],
    },
    
    // Add more burger items as needed
  ];

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
