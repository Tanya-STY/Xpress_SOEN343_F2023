

import React, { Component } from 'react';
import './UserDetail.css';
import userDetails from '../../components/images/UserDetails.png';
// import Navbar from '../../components/Navbar/Navbar'; // Import the Navbar component

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      phoneNumberValid: true, // Default to true
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      if (name === 'phoneNumber') {
        this.validatePhoneNumber();
      }
    });
  };

  validatePhoneNumber() {
    const phoneNumberRegex = /^\d{10}$/; // Matches exactly 10 digits
    const isValid = phoneNumberRegex.test(this.state.phoneNumber);
    this.setState({ phoneNumberValid: isValid });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.phoneNumberValid) {
      // The phone number is valid; you can proceed with your logic here
      console.log('Valid phone number:', this.state.phoneNumber);
    } else {
      // The phone number is not valid; you can display an error message
      console.log('Invalid phone number');
      alert('Please enter a valid phone number with 10 digits.');
    }
  };

  render() {
    return (
      
      <div className="page-content">
      {/* <Navbar /> */}
      <h1>Payment Details</h1>

      <div className="user-details">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              required
            />
          </div>
          
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:
            {this.state.phoneNumberValid ? null : (
            <span className="error"> (please enter a valid phone number)</span>
          )}
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              required
              className={this.state.phoneNumberValid ? '' : 'error-input'}
            />
          </div>
          
          <button type="submit">Submit</button>
        </form>
        
        <div className='UserDetailsImg'> 
        <img src={userDetails} alt="userDetails" />
      </div>

      </div>

     

      </div>
    );
  }
}

export default UserDetail;
