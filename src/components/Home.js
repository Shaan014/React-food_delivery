// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="title">Delicious Food Delivered to You</h1>
          <p>
            Choose from a wide variety of delicious meals and have them
            delivered straight to your door.
          </p>
          <Link to="/menu" className="cta-button">
            Order Now
          </Link>
        </div>
      </header>
      <section className="category-container">
        <h2>Our Categories</h2>
        <div className="category-grid">
          <div className="category-card pizza">
            <Link to="/pizza">
              <img src="/images/Pizza15.jpg" alt="Pizza" />
              <h3>Pizza</h3>
            </Link>
          </div>
          <div className="category-card burger">
            <Link to="/burger">
              <img src="/images/burger0012.avif" alt="Burger" />
              <h3>Burger</h3>
            </Link>
          </div>
          <div className="category-card noodles">
            <Link to="/noodles">
              <img src="/images/chow mein.jpg" alt="Noodles" />
              <h3>Noodles</h3>
            </Link>
          </div>
          <div className="category-card drinks">
            <Link to="/drinks">
              <img src="/images/pepsiii.jpg" alt="Drinks" />
              <h3>Drinks</h3>
            </Link>
          </div>
          <div className="category-card noodles">
            <Link to="/noodles">
              <img src="/images/chow mein.jpg" alt="Noodles" />
              <h3>Noodles</h3>
            </Link>
          </div>
          <div className="category-card drinks">
            <Link to="/drinks">
              <img src="/images/Fresh Juice.jpg" alt="Drinks" />
              <h3>Cool Drinks</h3>
            </Link>
          </div>
         
        </div>
      </section>
      <section className="featured-items">
        <div className="featured-grid">{/* Add featured items here */}</div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: contact@fooddelivery.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com">Facebook</a>
              <a href="https://twitter.com">Twitter</a>
              <a href="https://instagram.com">Instagram</a>
            </div>
          </div>
          <div className="footer-section">
            <h3>About Us</h3>
            <p>
              We deliver delicious meals right to your door. Our food is
              prepared with the freshest ingredients to ensure you enjoy every
              bite.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
