
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'; // Import your Navbar component
// import Navbar_SignedIn from './components/Navbar_SignedIn/Navbar_SignedIn'

function App() {
  return (
    <Router> 
      <Navbar/>
    </Router>
  );
}

export default App;
