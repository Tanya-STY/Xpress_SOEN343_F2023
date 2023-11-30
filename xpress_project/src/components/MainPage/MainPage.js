import React from 'react';
import './MainPage.css';
import Request from '../RequestPage/RequestPage';
import deliveryGuyImage from '../images/delivery_guy.png';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className="main-page">
      <div className="left-content">
        <h1>
          <span className="orange-text">Fast</span> Delivery
        </h1>
        <p className="quote">Delivering joy, one package at a time.</p>
        <Link to="/SignIn">
        <button className="order-button">Order Now</button>
        </Link>
      </div>
      <div className="right-content">
              <img src={deliveryGuyImage} alt="Delivery Guy" /> {/* Use the imported image */}
            </div>
    </div>
  );
}

export default MainPage;