import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './Home.css';
import '../../Images/refills.png';
import { Link } from 'react-router-dom';
import refills from '../../Images/refills.png';
import calendar from '../../Images/calendar.png';
import dailylog from '../../Images/dailylog.png';
import shop from '../../Images/Shop.png';
import family from '../../Images/family.png';
import cloud from '../../Images/cloud.png';
import logo from '../../Images/medmelogo.png';

const Home = () => {
  const { currentUser } = useContext(AppContext);
  return (
    <div>
      <div className="homelogo">
        <img className="homelogo" src={logo} alt="logo" />
      </div>
      <div>
        <h1 className="pagegreeting">Hello, {currentUser?.user.name}!</h1>
      </div>
      <div className="mainimagecontainer">
        <img className="familyimage" src={family} />
      </div>
      <div>
        <div className="medicinesrow">
          <Link className="mymedicines">
            <div className="refillimagecontainer">
              <img className="refillimage" src={refills} alt="refills" />
            </div>
            <h2 className="hometext">My Medicines</h2>
          </Link>
          <Link className="calendar">
            <div className="calendarimagecontainer">
              <img className="calendarimage" src={calendar} alt="calendar" />
            </div>
            <h2 className="hometext">Calendar</h2>
          </Link>
        </div>
        <div className="dailylogrow">
          <Link className="dailylog">
            <div className="dailylogimagecontainer">
              <img className="dailylogimage" src={dailylog} alt="dailylog" />
            </div>
            <h2 className="hometext">Daily Log</h2>
          </Link>
          <Link className="shop">
            <div className="shopimagecontainer">
              <img className="shopimage" src={shop} alt="shop" />
            </div>
            <h2 className="hometext">Shop</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
