// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pizza">Pizza</Link>
        </li>
        <li>
          <Link to="/burger">Burger</Link>
        </li>
        <li>
          <Link to="/drinks">Drinks</Link>
        </li>
        <li>
          <Link to="/noodles">Noodles</Link>
        </li>
        
        {/* <li>
          <Link to="/addburger">AddBurger</Link>
        </li>

        <li>
          <Link to="/burgers">BurgerList</Link>

        </li>

        <li>
          <Link to="/noodelslist">Noodelslist</Link>
          
        </li>
        <li>
          <Link to="/AddNoodels">addNoodelList</Link>
          
        </li>
         */}
        <li>
          <Link to="/admin">Admin</Link>
          
        </li>
        <li>
          <Link to="/cart">Card</Link>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
