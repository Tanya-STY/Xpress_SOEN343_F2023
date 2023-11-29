import React, { Component } from 'react';
import './PaymentDetails.css';

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NameOnCard: '',
      cardNumber: '',
      ExpiryDate: '',
      CCVnumber: '',
      cardNumberValid: true,
      ExpiryDateValid: true,
      CCVnumberValid: true,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      switch (name) {
        case 'cardNumber':
          this.validateCardNumber();
          break;
        case 'ExpiryDate':
          this.validateExpiryDate();
          break;
        case 'CCVnumber':
          this.validateCCVnumber();
          break;
        default:
          break;
      }
    });
  };

  validateCardNumber() {
    const cardNumberRegex = /^\d{16}$/;
    const isValid = cardNumberRegex.test(this.state.cardNumber);
    this.setState({ cardNumberValid: isValid });
  }

  validateExpiryDate() {
    const expiryDateRegex = /^(0[1-9]|1[0-2])(2[4-9]|[3-9]\d)$/;
    const isValid = expiryDateRegex.test(this.state.ExpiryDate);
    this.setState({ ExpiryDateValid: isValid });
  }

  validateCCVnumber() {
    const ccvRegex = /^\d{3}$/;
    const isValid = ccvRegex.test(this.state.CCVnumber);
    this.setState({ CCVnumberValid: isValid });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.cardNumberValid && this.state.ExpiryDateValid && this.state.CCVnumberValid) {
      console.log('Valid details:', this.state);
      // Proceed with your logic here
    } else {
      console.log('Invalid details');
      // Display an error message
      alert('Please enter valid details.');
    }
  };

  render() {
    return (
      <div className="page-content">
        <div className="user-details">
          <form onSubmit={this.handleSubmit}>
          <h1>Payment Details</h1>

            <div>
              <label htmlFor="NameOnCard">Name on card:</label>
              <input
                type="text"
                id="NameOnCard"
                name="NameOnCard"
                value={this.state.NameOnCard}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="cardNumber">Card Number:
                {this.state.cardNumberValid ? null : (
                <span className="error"> (please enter a valid card number)</span>
                )}
              </label>
              <input
                type="tel"
                id="cardNumber"
                name="cardNumber"
                value={this.state.cardNumber}
                onChange={this.handleChange}
                required
                className={this.state.cardNumberValid ? '' : 'error-input'}
              />
            </div>
            
            <div>
              <label htmlFor="ExpiryDate">ExpiryDate:
                {this.state.ExpiryDateValid ? null : (
                <span className="error"> (please enter a valid expiry date)</span>
                )}
              </label>
              <input
                type="text"
                id="ExpiryDate"
                name="ExpiryDate"
                value={this.state.ExpiryDate}
                onChange={this.handleChange}
                placeholder="MMYY"
                required
                className={this.state.ExpiryDateValid ? '' : 'error-input'}
              />
            </div>
        
            <div>
              <label htmlFor="CCVnumber">CCV:
                {this.state.CCVnumberValid ? null : (
                <span className="error"> (please enter a valid CCV number)</span>
                )}
              </label>
              <input
                type="text"
                id="CCVnumber"
                name="CCVnumber"
                value={this.state.CCVnumber}
                onChange={this.handleChange}
                required
                className={this.state.CCVnumberValid ? '' : 'error-input'}
              />
            </div>
            
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default UserDetail;
