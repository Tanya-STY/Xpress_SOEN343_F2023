
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
import SignUp from './Pages/SignUp/SignUp.js';
import SignIn from './Pages/SignIn/SignIn.js';

function App() {
  return (
    <div className="App">
      {/* <UserDetail/> */}
      {/* <PaymentDetails/> */}
      {/* <Navbar/> */}
      {/* <DeliPersonReqStatus/> */}
      {/* <Home/> */}
      {/* <SignIn/> */}
      <SignUp/>
    </div>
  );
}

export default App;

