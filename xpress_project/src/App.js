
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

import UserDetail from './Pages/UserDetail/UserDetail'; // Adjust the import path as needed
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <UserDetail />
    </div>
  );
}

export default App;