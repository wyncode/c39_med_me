import React from 'react';
import './Home.css';
import '../../Images/refills.png';
import { Link } from 'react-router-dom';
import refills from '../../Images/refills.png';
import calendar from '../../Images/calendar.png';
import dailylog from '../../Images/dailylog.png';
import shop from '../../Images/shop.png';
import family from '../../Images/family.png';
import cloud from '../../Images/cloud.png';

const Home = () => {
  return (
    <div>
      <div>
        <h1>Hello, Pablo</h1>
      </div>
      <div className="mainimagecontainer">
        <img className="familyimage" src={family} />
      </div>
      <div>
        <div className="medicinesrow">
          <Link className="mymedicines">
            <div className="refillimage">
              <img src={refills} alt="refills" />
            </div>
            <h1>My Medicines</h1>
          </Link>
          <Link className="calendar">
            <div className="calendarimage">
              <img src={calendar} alt="calendar" />
            </div>
            <h1>Calendar</h1>
          </Link>
        </div>
        <div className="dailylogrow">
          <Link className="dailylog">
            <div className="dailylogimage">
              <img src={dailylog} alt="dailylog" />
            </div>
            <h1>Daily Log</h1>
          </Link>
          <Link className="shop">
            <div className="shopimage">
              <img src={shop} alt="shop" />
            </div>
            <h1>Shop</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
