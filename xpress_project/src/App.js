
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
import Navbar from './components/Navbar_SignedIn/Navbar_SignedIn';
import Quotation from './components/Quotation/Quotation';
import RequestPage from './components/RequestPage/RequestPage';
import Reviews from './components/Reviews/Reviews';
// import {useJsApiLoader, GoogleMap } from '@react-google-maps/api' 

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <UserDetail /> */}
      {/* <Quotation/> */}

      <Navbar/>
      
      {/* <Router> */}
      <Routes>
        {/* <Route path="/" element={<Navbar/>}/> */}
        <Route path="/Quotation" element={<Quotation/>}/>
        <Route path="/Reviews" element={<RequestPage/>}/>
        <Route path="/FAQ" element={<Reviews/>}/>
        {/* <Route path="/*" element={<NotFound/>}/>  */}
      </Routes>
    {/* </Router> */}


    </div>
  );
}

export default App;