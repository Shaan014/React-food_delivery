import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'; // Add custom styles

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="card-container">
        <div className="card">
          <h3>Pizza</h3>
          <Link to="/addpizza">Add Pizza</Link>
          <Link to="/pizzalist">Pizza List</Link>
        </div>
        <div className="card">
          <h3>Noodles</h3>
          <Link to="/AddNoodels">Add Noodles</Link>
          <Link to="/noodelslist ">Noodles List</Link>
        </div>
        <div className="card">
          <h3>Burger</h3>
          <Link to="/addburger">Add Burger</Link>
          <Link to="/burgers">Burger List</Link>
        </div>
        <div className="card">
          <h3>Drinks</h3>
          <Link to="/addrinks">Add Drinks</Link>
          <Link to="/drinkslist">Drinks List</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
