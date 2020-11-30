import React, { useState, useContext } from 'react';
import './LogIn.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { AppContext } from '../../context/AppContext';
import logo from '../../Images/logo.png';

const LogIn = ({ history }) => {
  const { setCurrentUser } = useContext(AppContext);
  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      setCurrentUser(response.data);
      sessionStorage.setItem('user', response.data);
      history.push('/home');
    } catch (error) {
      swal(`Oops!`, 'Invalid email or password.');
    }
  };

  return (
    <div className="iphone">
      <div className="fullview">
        <form className="signincontainer" onSubmit={handleLogin}>
          <div className="loginlogocontainer">
            <img className="loginlogoimage" src={logo} alt="logo" />
          </div>
          <div className="menucontainer">
            <div className="signinblue">Sign In</div>
            <div className="signupbuttoncontainer">
              <Link to="/signup" className="signup">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="dataformcontainer">
            <h2>Email</h2>
            <input type="text" name="email" onChange={handleChange} />
          </div>
          <div className="dataformcontainer">
            <h2>Password</h2>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <div className="createaccountcontainer">
            <div className="buttoncontainer">
              <button className="createaccountbutton" onClick={handleLogin}>
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
