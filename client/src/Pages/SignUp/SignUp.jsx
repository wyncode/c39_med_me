import './SignUp.css';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import swal from 'sweetalert';
import logo from '../../Images/logo.png';

const SignUp = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/me', formData);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data.user);
      history.push('/');
    } catch (error) {
      swal('SignUp Error: ', error.toString());
    }
  };
  return (
    <div className="fullview">
      <form className="formcontainer" onSubmit={handleSignUp}>
        <div className="signuplogocontainer">
          <img className="loginlogoimage" src={logo} alt="logo" />
        </div>
        <div className="menucontainer">
          <Link to="/" className="signin">
            Sign In
          </Link>
          <div className="signupblue">Sign Up</div>
        </div>
        <div className="datacontainer">
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="First, Last"
          />
        </div>
        <div className="datacontainer">
          <h2>Email</h2>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="hello@email.com"
          />
        </div>
        <div className="datacontainer">
          <h2>Password</h2>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Minimmum 6 characters."
          />
        </div>
        <div className="datacontainer">
          <h2>Date of Birth</h2>
          <input
            type="text"
            name="dob"
            onChange={handleChange}
            placeholder="DD/MM/YY"
          />
        </div>
        <div className="datacontainer">
          <h2>Gender</h2>
          <input
            type="text"
            name="gender"
            onChange={handleChange}
            placeholder="...?"
          />
        </div>
        <div className="datacontainer">
          <h2>Address</h2>
          <input
            type="text"
            name="address"
            onChange={handleChange}
            placeholder="Street,City,State,ZipCode"
          />
        </div>
        <div className="datacontainer">
          <h2>Phone</h2>
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            placeholder="888-888-8888"
          />
        </div>

        <div className="createaccountcontainer">
          <div className="buttoncontainer">
            <button className="createaccountbutton" type="submit">
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
