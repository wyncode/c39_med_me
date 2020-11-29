import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './Home.css';
import '../../Images/refills.png';
import { Link } from 'react-router-dom';
import refills from '../../Images/refills.png';
import calendar from '../../Images/calendar.png';
import dailylog from '../../Images/dailylog.png';
import shop from '../../Images/shop.png';
import family from '../../Images/family.png';
import logo from '../../Images/medmelogo.png';
import Navigation from '../../components/Navigation/Navigation';

const Home = () => {
  const { currentUser } = useContext(AppContext);

  return (
    <div className="fullview">
      <div className="homecontainer">
        <div className="homelogo">
          <img className="homelogo" src={logo} alt="logo" />
        </div>
        <div className="pagegreetingcontainer">
          <h1 className="pagegreeting">Hello, {currentUser?.name}!</h1>
        </div>
        <div className="mainimagecontainer">
          <img className="familyimage" src={family} />+
        </div>
        <div>
          <div className="medicinesrow">
            <div className="mymedicines">
              <Link className="refillimagecontainer">
                <img className="refillimage" src={refills} alt="refills" />
              </Link>
              <Link className="hometext">My Medicines</Link>
            </div>
            <div className="calendarhome">
              <Link to="/calendar" className="calendarimagecontainer">
                <img className="calendarimage" src={calendar} alt="calendar" />
              </Link>
              <Link to="/calendar" className="hometext">
                Calendar
              </Link>
            </div>
          </div>
          <div className="dailylogrow">
            <div className="dailylog">
              <Link to="/dailylog" className="dailylogimagecontainer">
                <img className="dailylogimage" src={dailylog} alt="dailylog" />
              </Link>
              <Link to="/dailylog" className="hometext">
                Daily Log
              </Link>
            </div>
            <div className="shop">
              <Link to="/shop" className="shopimagecontainer">
                <img className="shopimage" src={shop} alt="shop" />
              </Link>
              <Link to="/shop" className="hometext">
                Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
};

export default Home;
