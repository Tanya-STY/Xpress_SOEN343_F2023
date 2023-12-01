import React, { useState } from 'react';
import './SignIn.css';
import { useNavigate } from "react-router-dom";


const SignIn = ({ setSignedIn }) => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    pwd: '',
  });

  const signIn = (e) => {
    e.preventDefault();
    // let history = useHistory();

    const { email, pwd } = formData;
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];

    const exist = storedData.some(
      (data) => data.email.toLowerCase() === email.toLowerCase() && data.pwd.toLowerCase() === pwd.toLowerCase()
    );

    if (!exist) {
      alert('Incorrect login credentials');
    } else {
      // Redirect or perform other actions on successful login
      alert('Login successful!');
      setSignedIn(true); // Update the authentication status
      navigate('/Quotation');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='signInContainer'>
      <h2>SIGN IN FORM</h2>
      <form role="form" onSubmit={signIn} autoComplete="off">
        <div className="form-group">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="pwd"
            id="pwd"
            placeholder="Password"
            value={formData.pwd}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Sign In</button>
        </div>
      </form>
      <p>
        Don't have an account? <a href="/SignUp">Sign Up</a> here
      </p>
    </div>
  );
};

export default SignIn;