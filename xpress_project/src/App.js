// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import { BrowserRouter as Router } from 'react-router-dom';

// function App() {
//   return (
//     // <Router>
//     //    <Navbar/>
//     // <Router/>
//     <Router>
//       <Navbar/>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'; // Import your Navbar component
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
  <div className="app">
    <Router>
      <Navbar/>
      <MainPage/>
    </Router>
     </div>
  );
}

export default App;
