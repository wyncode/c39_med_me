import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import home from '../../Images/home.png';
import profile from '../../Images/profile.png';
import shop from '../../Images/shop-1.png';
import chat from '../../Images/chat.png';

const Navigation = () => {
  return (
    <div className="fullpagecontainer">
      <div className="navigationcontainer">
        <Link to="/home">
          <div className="home">
            <img src={home} className="homeimage" alt="home" />
            Home
          </div>
        </Link>
        <Link to="/mymeds">
          <div className="mymeds">
            <img src={profile} className="profileimage" alt="profile" />
            Profile
          </div>
        </Link>
        <Link to="/shop">
          <div className="shopnav">
            <img src={shop} className="shopimagenav" alt="shop" />
            Shop
          </div>
        </Link>
        <Link to="/chat">
          <div className="chat">
            <img src={chat} className="chatimage" alt="chat" />
            Chat
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
