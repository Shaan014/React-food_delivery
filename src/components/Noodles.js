// src/components/Noodles.js
import React from 'react';
import FoodCard from './Foodcard';

function Noodles() {
  const noodlesItems = [
    {
      name: 'Chow Mein',
      description: 'Stir-fried noodles with vegetables and chicken',
      price: 500,
      imageUrl: '/images/chow mein.jpg',
      bgColor: '#f8bbd0',
      toppings: [
        { name: 'Extra Chicken', price: 100 },
        { name: 'Shrimp', price: 120 },
        { name: 'Vegetables', price: 70 }
      ],
    },
    {
      name: 'Spaghetti Bolognese',
      description: 'Spaghetti with rich meat sauce',
      price: 650,
      imageUrl: '/images/spaghetti.avif',
      bgColor: '#f8bbd0',
      toppings: [
        { name: 'Extra Meat', price: 100 },
        { name: 'Parmesan', price: 50 },
        { name: 'Garlic Bread', price: 80 }
      ],
    },
    {
      name: 'Pasta',
      description: 'Spicy and cheesy pasta only made for you',
      price: 1650,
      imageUrl: '/images/pasta.jpg',
      bgColor: '#f8bbd0',
      toppings: [
        { name: 'Extra Meat', price: 100 },
        { name: 'cheese', price: 50 },
        { name: 'Garlic Bread', price: 80 }
      ],
    },
    // Add more noodles items as needed
  ];

  return (
    <div className="container">
      <h1>Noodles Menu</h1>
      <div className="menu-item-list">
        {noodlesItems.map((item, index) => (
          <FoodCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Noodles;
