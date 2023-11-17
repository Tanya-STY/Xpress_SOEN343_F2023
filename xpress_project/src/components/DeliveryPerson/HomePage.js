//// HomePage.js
//
//import React from 'react';
//import './HomePage.css';
//
//const HomePage = () => {
//  const deliveryData = [
//    { id: 1, pickup: '123 Main St', dropoff: '456 Oak Ave', date: '2023-01-01', number: '001', status: 'Started' },
//    { id: 2, pickup: '789 Elm St', dropoff: '012 Pine Ave', date: '2023-01-02', number: '002', status: 'Processed' },
//    { id: 3, pickup: '345 Cedar St', dropoff: '678 Maple Ave', date: '2023-01-03', number: '003', status: 'Picked Up' },
//    { id: 4, pickup: '901 Birch St', dropoff: '234 Walnut Ave', date: '2023-01-04', number: '004', status: 'In-Transit' },
//    { id: 5, pickup: '567 Pine St', dropoff: '890 Cedar Ave', date: '2023-01-05', number: '005', status: 'Delivered' },
//  ];
//
//  return (
//    <div className="home-page-container">
//      <h1 className="page-title">Today's Deliveries</h1>
//      <table className="delivery-table">
//        <thead>
//          <tr>
//            <th>Pick-Up Address</th>
//            <th>Drop-Off Address</th>
//            <th>Date</th>
//            <th>Delivery Number</th>
//            <th>Status</th>
//          </tr>
//        </thead>
//        <tbody>
//          {deliveryData.map((delivery) => (
//            <tr key={delivery.id}>
//              <td className="delivery-bubble">
//                <span className="truck-icon">🚚</span>
//                {delivery.pickup}
//              </td>
//              <td className="delivery-bubble">{delivery.dropoff}</td>
//              <td className="delivery-bubble">{delivery.date}</td>
//              <td className="delivery-bubble delivery-number">{delivery.number}</td>
//              <td className="delivery-bubble">{delivery.status}</td>
//            </tr>
//          ))}
//        </tbody>
//      </table>
//    </div>
//  );
//};
//
//export default HomePage;


import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const deliveryData = [
    { id: 1, pickup: '123 Main St', dropoff: '456 Oak Ave', date: '2023-01-01', number: '001', status: 'Started' },
    { id: 2, pickup: '789 Elm St', dropoff: '012 Pine Ave', date: '2023-01-02', number: '002', status: 'Processed' },
    { id: 3, pickup: '345 Cedar St', dropoff: '678 Maple Ave', date: '2023-01-03', number: '003', status: 'Picked Up' },
    { id: 4, pickup: '901 Birch St', dropoff: '234 Walnut Ave', date: '2023-01-04', number: '004', status: 'In-Transit' },
    { id: 5, pickup: '567 Pine St', dropoff: '890 Cedar Ave', date: '2023-01-05', number: '005', status: 'Delivered' },
  ];

  return (
    <div className="home-page-container">
      <h1 className="page-title">Today's Deliveries</h1>
      <table className="delivery-table">
        <thead>
          <tr>
            <th>Pick-Up Address</th>
            <th>Drop-Off Address</th>
            <th>Date</th>
            <th>Delivery Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {deliveryData.map((delivery) => (
            <tr key={delivery.id}>
              <td className="delivery-bubble">
                <span className="truck-icon">🚚</span>
                {delivery.pickup}
              </td>
              <td className="delivery-bubble">{delivery.dropoff}</td>
              <td className="delivery-bubble">{delivery.date}</td>
              <td className="delivery-bubble">
                <Link to={`/request-status/${delivery.number}`}>{delivery.number}</Link>
              </td>
              <td className="delivery-bubble">{delivery.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
