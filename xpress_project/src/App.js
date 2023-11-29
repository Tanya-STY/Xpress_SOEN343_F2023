//import React from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
//import './App.css';
//import Navbar from './components/Navbar/Navbar'; // Import your Navbar component
//import MainPage from './components/MainPage/MainPage';
//import HomePage from './components/DeliveryPerson/HomePage';
//import RequestStatus from './components/DeliveryPerson/RequestStatus';
////import DeliveryRequestStatus from './components/User/DeliveryRequestStatus';
////import UserOrderHistory from './components/User/UserOrderHistory';
//import StatusBar from './components/StatusBar/StatusBar';
//
//function App() {
//  return (
//  <div className="app">
//    <Router>
//        <HomePage/>
//
//    </Router>
//     </div>
//  );
//}
//
//export default App;

//// App.js
//import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import HomePage from './components/DeliveryPerson/HomePage';
//import RequestStatus from './components/DeliveryPerson/RequestStatus';
//
//function App() {
//  return (
//    <div className="app">
//      <Router>
//        <Routes>
//          <Route path="/" element={<HomePage />} />
//          <Route path="/request-status/:requestNumber" element={<RequestStatus />} />
//        </Routes>
//      </Router>
//    </div>
//  );
//}
//
//export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserOrderHistory from './components/User/UserOrderHistory';
import DeliveryRequestStatus from './components/User/DeliveryRequestStatus';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<UserOrderHistory />} />
          <Route path="/delivery-status/:requestNumber" element={<DeliveryRequestStatus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
