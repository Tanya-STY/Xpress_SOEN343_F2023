import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SecurityPage = () => {
  const [securityCode, setSecurityCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSecurityCodeChange = (e) => {
    setSecurityCode(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (securityCode === '123go') {
      // Redirect to HomePage if the security code is valid
      navigate('/HomePage');
    } else {
      // Display an error message if the security code is invalid
      setErrorMessage('Invalid security code. Please try again.');
    }
  };

  return (
    <div style={{ backgroundColor: '#f5f5dc', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Security Page</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="securityCode">Enter Security Code:</label>
          <input
            type="password"
            id="securityCode"
            value={securityCode}
            onChange={handleSecurityCodeChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    </div>
  );
};

export default SecurityPage;