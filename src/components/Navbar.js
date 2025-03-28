// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pizza">Pizza</Link></li>
        <li><Link to="/burger">Burger</Link></li>
        <li><Link to="/drinks">Drinks</Link></li>
        <li><Link to="/noodles">Noodles</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
