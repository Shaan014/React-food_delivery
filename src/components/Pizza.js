// src/components/Pizza.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FoodCard from './Foodcard';

function Pizza() {


  const [pizzaItems, setPizzaItems] = useState([]);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/pizza');
        setPizzaItems(response.data);
      } catch (error) {
        console.error('Error fetching Pizza data:', error);
      }
    };

    fetchPizza();
  }, []);

  return (
    <div className="container">
      <h1>Pizza Menu</h1>
      <div className="menu-item-list">
        {pizzaItems.map((item, index) => (
          <FoodCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Pizza;

  // sample testing json data for pizza

  // const pizzaItems = [
  //   {
  //     name: 'Margherita',
  //     description: 'A classic delight with 100% real mozzarella cheese',
  //     price: 800,
  //     imageUrl: '/images/Pizza15.jpg',
  //     bgColor: '#ffe0b2',
  //     toppings: [
  //       { name: 'Extra Cheese', price: 100 },
  //       { name: 'Olives', price: 50 },
  //       { name: 'Mushrooms', price: 70 }
  //     ],
  //   },
  //   {
  //     name: 'Pepperoni',
  //     description: 'Topped with pepperoni & extra cheese',
  //     price: 950,
  //     imageUrl: '/images/Pizza01.jpg',
  //     bgColor: '#ffe0b2',
  //     toppings: [
  //       { name: 'Extra Cheese', price: 100 },
  //       { name: 'Jalapenos', price: 60 },
  //       { name: 'Bacon', price: 80 }
  //     ],
  //   },
  //   {
  //     name: 'Cheese Pizza',
  //     description: 'A wonderful combo of cheese with 100% real mozzarella cheese',
  //     price: 1200,
  //     imageUrl: '/images/Pizza09.jpg',
  //     bgColor: '#ffe0b2',
  //     toppings: [
  //       { name: 'Extra Cheese', price: 100 },
  //       { name: 'Olives', price: 50 },
  //       { name: 'Mushrooms', price: 70 }
  //     ],
  //   },
  //   {
  //     name: 'Italian',
  //     description: 'A classic delight with 100% real mozzarella cheese',
  //     price: 1800,
  //     imageUrl: '/images/Pizza06.jpg',
  //     bgColor: '#ffe0b2',
  //     toppings: [
  //       { name: 'Extra Cheese', price: 100 },
  //       { name: 'Olives', price: 50 },
  //       { name: 'Mushrooms', price: 70 }
  //     ],
  //   },
  //   // Add more pizza items as needed
  // ];



