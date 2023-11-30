
// import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar/Navbar'; // Import your Navbar component


// function App() {
//   return (
//     <Router> 
//       <Navbar/>
//     </Router>
//   );
// }

// export default App;

import UserDetail from './Pages/UserDetail/UserDetail'; // Adjust the import path as needed
import Home from './components/MainPage/MainPage'
import Navbar from './components/Navbar_SignedIn/Navbar_SignedIn';
 import Quote from './components/Quote/Quote';
import RequestPage from './components/RequestPage/RequestPage';
// import Reviews from './components/Reviews/Reviews';
import PaymentDetails from './Pages/PaymentDetails/PaymentDetails';
import UserOrderHistory from './components/User/UserOrderHistory';
import DeliveryRequestStatus from './components/User/DeliveryRequestStatus';
import HomePage from './components/DeliveryPerson/HomePage';
import RequestStatus from './components/DeliveryPerson/RequestStatus';
import Reviews from './Pages/SubmitReview/CustomerReviewForm';
// import {useJsApiLoader, GoogleMap } from '@react-google-maps/api' 

function App() {
  return (
    <div className="App">
    

      <Navbar/>
      
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Quotation" element={<RequestPage/>}/>
        <Route path="/Quote" element={<Quote/>}/>
        <Route path="/Reviews" element={<Reviews/>}/>
        {/* <Route path="/FAQ" element={<Reviews/>}/> */}
        <Route path="/userDetails" element={<UserDetail/>}/>
        <Route path="/PaymentDetails" element={<PaymentDetails/>}/>
        <Route path="/UserOrderHistory" element={<UserOrderHistory/>}/>
        <Route path="/delivery-status/:requestNumber" element={<DeliveryRequestStatus/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/request-status/:requestNumber" element={<RequestStatus/>}/>
        {/* <Route path="/*" element={<NotFound/>}/>  */}
      </Routes>


    </div>
  );
}

export default App;