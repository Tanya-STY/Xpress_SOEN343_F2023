import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Navbar_SignedIn from './components/Navbar_SignedIn/Navbar_SignedIn';
import Home from './components/MainPage/MainPage';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import Quote from './components/Quote/Quote';
import RequestPage from './components/RequestPage/RequestPage';
import UserDetail from './Pages/UserDetail/UserDetail';
import PaymentDetails from './Pages/PaymentDetails/PaymentDetails';
import UserOrderHistory from './components/User/UserOrderHistory';
import DeliveryRequestStatus from './components/User/DeliveryRequestStatus';
import HomePage from './components/DeliveryPerson/HomePage';
import RequestStatus from './components/DeliveryPerson/RequestStatus';
import Reviews from './Pages/SubmitReview/CustomerReviewForm';

function App() {
  const [isSignedIn, setSignedIn] = useState(false);

  useEffect(() => {
    // Simulate an authentication check using localStorage
    const token = localStorage.getItem('token');
    setSignedIn(!!token);
  }, []);

  return (
    <div className="App">
      {isSignedIn ? <Navbar_SignedIn /> : <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/SignIn" element={<SignIn setSignedIn={setSignedIn} />} />
        <Route path="/SignUp" element={<SignUp setSignedIn={setSignedIn} />} />
        <Route path="/Quotation" element={<RequestPage />} />
        <Route path="/Quote" element={<Quote />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/userDetails" element={<UserDetail />} />
        <Route path="/PaymentDetails" element={<PaymentDetails />} />
        <Route path="/UserOrderHistory" element={<UserOrderHistory />} />
        <Route path="/delivery-status/:requestNumber" element={<DeliveryRequestStatus />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/request-status/:requestNumber" element={<RequestStatus />} />
        {/* <Route path="/*" element={<NotFound/>}/> */}
      </Routes>
    </div>
  );
}

export default App;