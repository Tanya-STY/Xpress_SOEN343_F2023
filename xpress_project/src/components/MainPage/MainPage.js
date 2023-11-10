import React from 'react';
import './MainPage.css';
import deliveryGuyImage from '../images/delivery_guy.png';

function MainPage() {
  return (
    <div className="main-page">
      <div className="left-content">
        <h1>
          <span className="orange-text">Fast</span> Delivery
        </h1>
        <p className="quote">Delivering joy, one package at a time.</p>
        <button className="order-button">Order Now</button>
      </div>
      <div className="right-content">
              <img src={deliveryGuyImage} alt="Delivery Guy" /> {/* Use the imported image */}
            </div>
    </div>
  );
}

export default MainPage;
