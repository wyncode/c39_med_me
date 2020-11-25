import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/Search/Searchbar';
import logo from '../../Images/logo.png';
import ShopImage from '../../Images/Shop.png';
import allergy from '../../Images/allergy.png';
import drugstore from '../../Images/drugstore.png';
import firstAid from '../../Images/firstAid.png';
import natural from '../../Images/natural.png';
import pain from '../../Images/pain.png';
import personal from '../../Images/personal.png';
import vitamin from '../../Images/vitamin.png';
import './shop.css';
import '../../components/Search/Searchbar.css';
import { AppContext } from '../../context/AppContext';

const Shop = () => {
  const { medicines, search } = useContext(AppContext);
  const filteredMedicines = medicines.filter((medicine) => {
    return medicine.toLowerCase().includes(search);
  });
  return (
    <div>
      <div className="homelogo">
        <img className="homelogo" src={logo} alt="logo" />
      </div>
      <div>
        <h1 className="pagegreeting">Let's Shop Pablo!</h1>
      </div>
      <div className="SearchContainer">
        <SearchBar />
      </div>
      <div className="mainimagecontainer">
        <img className="familyimage" src={ShopImage} />
      </div>
      <div>
        <div className="medicinesrow">
          <Link className="mymedicines">
            <div className="refillimagecontainer">
              <img className="refillimage" src={pain} alt="pain" />
            </div>
            <h2 className="hometext">Pain and Fever</h2>
          </Link>
          <Link className="calendar">
            <div className="calendarimagecontainer">
              <img className="calendarimage" src={allergy} alt="allergy" />
            </div>
            <h2 className="hometext">Allergy</h2>
          </Link>
          <Link className="calendar" to="/">
            <div className="calendarimagecontainer">
              <img className="calendarimage" src={firstAid} alt="firstAid" />
            </div>
            <h2 className="hometext">First Aid</h2>
          </Link>
        </div>
      </div>
      <div>
        <div className="dailylogrow">
          <Link className="dailylog">
            <div className="dailylogimagecontainer">
              <img className="dailylogimage" src={vitamin} alt="vitamin" />
            </div>
            <h2 className="hometext">Vitamins</h2>
          </Link>
          <Link className="shop">
            <div className="shopimagecontainer">
              <img className="shopimage" src={personal} alt="personal" />
            </div>
            <h2 className="hometext">Personal Care</h2>
          </Link>
          <Link className="shop">
            <div className="shopimagecontainer">
              <img className="shopimage" src={natural} alt="natural" />
            </div>
            <h2 className="hometext">Natural Remedies</h2>
          </Link>
        </div>
      </div>
      <div>
        <Link className="store">
          <div className="storeimagecontainer">
            <img className="storeimage" src={drugstore} alt="drugstore" />
          </div>
          <h2 className="seemoretext">See More</h2>
        </Link>
      </div>
    </div>
  );
};

export default Shop;
