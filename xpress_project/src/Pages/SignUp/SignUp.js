import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    pwd: '',
  });

  const signUp = (e) => {
    e.preventDefault();

    const { fname, lname, email, pwd } = formData;

    let storedData = JSON.parse(localStorage.getItem('formData')) || [];

    const exist = storedData.some(
      (data) =>
        data.fname.toLowerCase() === fname.toLowerCase() &&
        data.lname.toLowerCase() === lname.toLowerCase()
    );

    if (!exist) {
      storedData.push({ fname, lname, email, pwd });
      localStorage.setItem('formData', JSON.stringify(storedData));
      setFormData({ fname: '', lname: '', email: '', pwd: '' });
      alert('Account Created.\n\nPlease Sign In using the link below.');
    } else {
      alert('Ooopppssss... Duplicate found!!!\nYou have already signed up');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='signUpContainer'>
      <h2>SIGN UP FORM</h2>
      <form role="form" onSubmit={signUp} autoComplete="off">
        <div className="form-group">
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="First Name"
            value={formData.fname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lname"
            id="lname"
            placeholder="Last Name"
            value={formData.lname}
            onChange={handleChange}
            required
          />
        </div>
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
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <p>
        Already a member? <a href="/signin">Sign In</a>
      </p>
    </div>
  );
};

export default SignUp;
