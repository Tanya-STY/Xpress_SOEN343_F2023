import React from 'react';
import './Navbar.css'; // Import the converted CSS
import { Link } from 'react-router-dom'; // Use the standard Link component
import logo from '../images/Xpress_logo.png';


const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/">
            <div className="navbar-logo" >
                <img src={logo} alt="Logo" />
            </div>
      </Link>
      <i className="fa-bars"></i>
      <div className="nav-menu">
        <Link to="/Home" className="nav-link" activeStyle={{ color: '#15cdfc' }}>
          Home
        </Link>
        <Link to="/Quotation" className="nav-link" activeStyle={{ color: '#15cdfc' }}>
          Quotation
        </Link>
        <Link to="/Reviews" className="nav-link" activeStyle={{ color: '#15cdfc' }}>
          Reviews
        </Link>
        <Link to="/FAQ" className="nav-link" activeStyle={{ color: '#15cdfc' }}>
          FAQ
        </Link>
      </div>
      <div className="nav-btn">
        <Link to="signin" className="nav-btn-link">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
