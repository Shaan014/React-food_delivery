// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Burger from './components/Burger';
import Drinks from './components/Drinks';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Noodles from './components/Noodles';
import Pizza from './components/Pizza';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
