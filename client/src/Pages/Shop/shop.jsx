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
  const { currentUser } = useContext(AppContext);
  const { medicines, search } = useContext(AppContext);
  const [isActive, setisActive] = useState(false);

  const filteredMedicines =
    medicines &&
    medicines?.filter((medicine) => {
      if  (medicine.name.toLowerCase().includes(search)){
        return (medicine)
      }
    });

  return (
    <div>
      <div className="homelogo">
        <img className="homelogo" src={logo} alt="logo" />
      </div>
      <div>
        <h1 className="pagegreeting">Let's Shop {currentUser?.name}</h1>
      </div>
      <div className="searchContainer">
        <SearchBar />
      </div>
      {search &&
        filteredMedicines.map((med) => {
          return<>
          <Link to= {`/medicine/${med._id}`}>
          <div>{med.name}</div></Link>
          <div>{med.avatar}</div>
          </>;
        })}
      <div className="mainimagecontainer">
        <img className="familyimage" src={ShopImage} alt="onlineShop" />
      </div>
      <div>
        <div>
          <Link to="/pain">
            <div className="drugimagecontainer">
              <img className="livepix" src={pain} alt="pain" />
            </div>
            <h2 className="shoptext">Pain and Fever</h2>
          </Link>
          <Link>
            <div className="drugimagecontainer">
              <img className="livepix" src={allergy} alt="allergy" />
            </div>
            <h2 className="shoptext">Allergy</h2>
          </Link>
          <Link to="/firstaid">
            <div className="drugimagecontainer">
              <img className="livepix" src={firstAid} alt="firstAid" />
            </div>
            <h2 className="shoptext">First Aid</h2>
          </Link>
          <Link to="/vitamins">
            <div className="drugimagecontainer">
              <img className="livepix" src={vitamin} alt="vitamin" />
            </div>
            <h2 className="shoptext">Vitamins</h2>
          </Link>
          <Link to="/personal">
            <div className="drugimagecontainer">
              <img className="livepix" src={personal} alt="personal" />
            </div>
            <h2 className="shoptext">Personal Care</h2>
          </Link>
          <Link to="/natural">
            <div className="drugimagecontainer">
              <img className="livepix" src={natural} alt="natural" />
            </div>
            <h2 className="shoptext">Natural Remedies</h2>
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
