// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddBurger from './components/addburger';
import AddDrinks from './components/AddDrinks';
import AddNoodles from './components/AddNoodels';
import AddPizza from './components/AddPizza';
import AdminPage from './components/AdminPage';
import Burger from './components/Burger';
import BurgerList from './components/BurgerList';
import Cart from './components/Cart';


import Drinks from './components/Drinks';
import DrinksList from './components/DrinksList';
import EditBurger from './components/EditBurger';
import EditDrinks from './components/EditDrinks';
import EditNoodles from './components/EditNoodles';
import EditPizza from './components/EditPizza';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Noodles from './components/Noodles';
import NoodleList from './components/NoodlesList';
import Pizza from './components/Pizza';
import PizzaList from './components/PizzaList';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/burger" element={<Burger />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/noodles" element={<Noodles />} />

          
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/addburger" element={<AddBurger />} />
          <Route path="/burgers" element={<BurgerList />} />
          <Route path="/edit-burger/:id" element={<EditBurger />} />
          <Route path="/noodelslist" element={<NoodleList />} />
          <Route path="/AddNoodels" element={<AddNoodles />} />
          <Route path="/edit-noodle/:id" element={<EditNoodles />} />
          <Route path="/addpizza" element={<AddPizza />} />
          <Route path="/editpizza" element={<EditPizza />} />
          <Route path="/pizzalist" element={<PizzaList />} />
          <Route path="/drinkslist" element={<DrinksList />} />
          <Route path="/addrinks" element={<AddDrinks/>} />
          <Route path="/edit-drinks/:id" element={<EditDrinks/>} />
          <Route path="cart" element={<Cart/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
