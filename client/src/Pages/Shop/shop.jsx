import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/Search/Searchbar';
import logo from '../../Images/logo.png';
import ShopImage from '../../Images/shop.png';
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
  const { currentUser } = useContext(AppContext);
  const { medicines, search } = useContext(AppContext);
  const [isActive, setisActive] = useState(false);

  const filteredMedicines =
    medicines &&
    medicines?.filter((medicine) => {
      if (medicine.name.toLowerCase().includes(search)) {
        return medicine;
      }
    });

  return (
    <div className="containershop">
      <div className="homelogo3">
        <img className="homelogo2" src={logo} alt="logo" />
      </div>
      <div className="pagegreet3">
        <h1 className="pagegreet4">Let's Shop {currentUser?.name}!</h1>
      </div>
      <div className="searchContainer">
        <SearchBar />
      </div>
      {search &&
        filteredMedicines.map((med) => {
          return (
            <>
             <div>
              <Link to={`/medicine/${med._id}`}>
                <img src={med.avatar} alt= "tylenol"/>
              </Link>
              </div>
            </>
          );
        })}
      <div className="mainimagecontainer2">
        <img className="familyimage2" src={ShopImage} alt="onlineShop" />
      </div>

      <div className="drugdrug">
        <div className="drugrow1">
          <Link to="/pain">
            <div className="drugimagecontainer1">
              <img className="livepix1" src={pain} alt="pain" />
            </div>
            <div className="shoptext1">
              <h2>Pain and Fever</h2>
            </div>
          </Link>
          <Link>
            <div className="drugimagecontainer2">
              <img className="livepix2" src={allergy} alt="allergy" />
            </div>
            <div className="shoptext2">
              <h2>Allergy</h2>
            </div>
          </Link>
        </div>
        <div className="drugrow2">
          <Link to="/firstaid">
            <div className="drugimagecontainer3">
              <img className="livepix3" src={firstAid} alt="firstAid" />
            </div>
            <div className="shoptext3">
              <h2>First Aid</h2>
            </div>
          </Link>
          <Link to="/vitamins">
            <div className="drugimagecontainer4">
              <img className="livepix4" src={vitamin} alt="vitamin" />
            </div>
            <div className="shoptext4">
              <h2>Vitamins</h2>
            </div>
          </Link>
        </div>
        <div className="drugrow3">
          <Link to="/personal">
            <div className="drugimagecontainer5">
              <img className="livepix5" src={personal} alt="personal" />
            </div>
            <div className="shoptext5">
              <h2>Personal Care</h2>
            </div>
          </Link>
          <Link to="/natural">
            <div className="drugimagecontainer6">
              <img className="livepix6" src={natural} alt="natural" />
            </div>
            <div className="shoptext6">
              <h2>Natural Remedies</h2>
            </div>
          </Link>
        </div>
        <div className="drugrow4">
          <Link>
            <div className="drugimagecontainer7">
              <img className="livepix7" src={drugstore} alt="drugstore" />
            </div>
            <div className="shoptext7">
              <h2>See More</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;
