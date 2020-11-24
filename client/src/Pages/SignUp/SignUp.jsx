import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="fullview">
      <form className="formcontainer">
        <div className="menucontainer">
          <h1>
            <Link to="/login" className="signin">
              Sign In
            </Link>
            <div className="signupblue">Sign Up</div>
          </h1>
        </div>
        <div className="datacontainer">
          <h2>Name</h2>
          <input type="text" name="name" />
        </div>
        <div className="datacontainer">
          <h2>Email</h2>
          <input type="text" name="name" />
        </div>
        <div className="datacontainer">
          <h2>Password</h2>
          <input type="text" name="name" />
        </div>
        <div className="datacontainer">
          <h2>Date of Birth</h2>
          <input type="text" name="name" />
        </div>
        <div className="datacontainer">
          <h2>Address</h2>
          <input type="text" name="name" />
        </div>
      </form>
      <div className="createaccountcontainer">
        <div className="buttoncontainer">
          <button className="createaccountbutton">Create Account</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
