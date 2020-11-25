import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/Search/Searchbar';
import MedMe from '../../Images/MedMe.png';
import Shop from '../../Images/Shop.png';
import allergy from '../../Images/allergy.png';
import drugstore from '../../Images/drugstore.png';
import firstAid from '../../Images/firstAid.png';
import natural from '../../Images/natural.png';
import pain from '../../Images/pain.png';
import personal from '../../Images/personal.png';
import vitamin from '../../Images/vitamin.png';
import './shop.css';
import '../../components/Search/Searchbar.css';

const shop = () => {
  return (
    <div>
      <div className="logo">
        <img src={MedMe} alt="logo"></img>
      </div>
      <div className="shopHead">
        <h1 id="welcome">Hi,</h1>
        <h2 id="shopTitle">Shop</h2>
      </div>
      <div className="SearchContainer">
        <SearchBar className="search" />
        <img id="Shop" src={Shop} alt="onlineShop"></img>
      </div>
      <div className="tilesrow">
        <div className="tilescolumn">
          <Link to="/">
            <img src={pain} alt="pain"></img>
            Pain & Fever
          </Link>
          <Link to="/">
            <img src={allergy} alt="allergy"></img>
            Allergies
          </Link>
          <Link to="/">
            <img src={firstAid} alt="first aid"></img>
            First Aid
          </Link>
        </div>
        <div className="tilescolumn">
          <Link to="/">
            <img src={vitamin} alt="vitamins"></img>
            Vitamins
          </Link>
          <Link to="/">
            <img src={personal} alt="personal"></img>
            Personal Care
          </Link>
          <Link to="/">
            <img src={natural} alt="natural"></img>
            Natural & Organic
          </Link>
        </div>
      </div>
      <div>
        <Link to="/">
          <img className="Shop" src={drugstore} alt="drug store"></img>
          Drug Store
        </Link>
      </div>
    </div>
  );
};

export default shop;
