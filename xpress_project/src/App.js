
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
import Navbar from './components/Navbar/Navbar';
import Quotation from './components/Quotation/Quotation';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <UserDetail /> */}
      {/* <Quotation/> */}

      <Router>
      <Routes>
        <Route path="/" element={<Quotation/>}/>
        {/* <Route path="/x" element={<x/>}/>
        <Route path="/y" element={<y/>}/>
        <Route path="/z" element={<z/>}/>
        <Route path="/*" element={<NotFound/>}/> */}
      </Routes>
    </Router>


    </div>
  );
}

export default App;