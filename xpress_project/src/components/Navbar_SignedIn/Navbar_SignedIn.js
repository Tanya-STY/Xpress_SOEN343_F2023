import React from 'react';
import './Navbar_SignedIn.css'; // Import the converted CSS
import { Link } from 'react-router-dom'; // Use the standard Link component
import logo from '../images/Xpress_logo.png';
import profile from '../images/profilePic.png';


const Navbar = () => {



    return (
        <nav className="nav">
            <Link to="/">
                <div className="navbar-logo" >
                    <img src={logo} alt="Logo" />
                </div>
            </Link>
            <i className="fa-bars"></i>
            <div className="nav-menu" style={{ fontFamily:"Poppins" }}>
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
            {/* <div className="nav-btn">
        <Link to="profile" className="nav-btn-link">
          <img src={profile} alt="Profile" style={{ width: '50px', marginRight:'5px' }}/>
        </Link>
      </div> */}
            <div className="nav-btn">
                <Link to="profile" className="nav-btn-link">
                    <div className="profile-container">
                        <img src={profile} alt="Profile" style={{ width: '50px', marginRight: '5px' }} />
                        <div class="dropdown-menu">
                            <Link to="/option1">Delivery Requests</Link>
                            <Link to="/option2">Updates</Link>
                            <Link to="/option3">Log Out</Link>
                        </div>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;