
// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
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

import UserDetail from './Pages/UserDetail/UserDetail.js';
import PaymentDetails from './Pages/PaymentDetails/PaymentDetails'
import Navbar from './components/Navbar/Navbar.js';
import DeliPersonReqStatus from './Pages/DeliPersonReqStatus/DeliPersonReqStatus.js';

function App() {
  return (
    <div className="App">
      {/* <UserDetail/> */}
      {/* <Navbar/> */}
      <DeliPersonReqStatus/>
    </div>
  );
}

export default App;