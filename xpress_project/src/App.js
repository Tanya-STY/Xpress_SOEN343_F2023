
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'; // Import your Navbar component
import Navbar_SignedUp from './components/Navbar_SignedIn/Navbar_SignedIn';
import UserDetails from './Pages/UserDetails/UserDetails';
// import Navbar_SignedIn from './components/Navbar_SignedIn/Navbar_SignedIn'
import RequestPage from './components/RequestPage/RequestPage'
import {useJsApiLoader, GoogleMap } from '@react-google-maps/api'

function App() {

  

  return (
    <Router> 
      {/* <Navbar/> */}
      {/* <UserDetails/> */}
      {/*<Navbar_SignedUp/>*/}
      <RequestPage/>

    </Router>
  );
}

export default App;
