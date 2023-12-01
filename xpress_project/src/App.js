
import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar'; // Import your Navbar component
import Reviews from './Pages/Reviews/Reviews'; // Import your Reviews component for the page
// here is where the BrowseRouter will be defined by importing a Route and Routes component
import { Route, Routes } from 'react-router-dom'
// import UserDetail from './Pages/UserDetail/UserDetail';
import FAQ from './Pages/FAQ/FAQ';
import SendMessage from './Pages/SendMessage/SendMessage';

function App() {
  return (
    <>
      <Navbar />

      {/*"Routes" is one big section for all the different routes of the pages with the value "Route"*/}
      <Routes>
        <Route path="/Reviews" element={<Reviews />} />

        {/*the pages to be added below (comments inside children section of tag should be placed inside brackets)*/}
        <Route path="/" />
        <Route path="/Home" />
        <Route path="/Quotation" />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/profile" />
        {/* <Route path="/paymentDetail" element={<UserDetail />} /> */}
        <Route path="/Contact" element={<SendMessage />} />

      </Routes>
    </>
  );
}

export default App;
