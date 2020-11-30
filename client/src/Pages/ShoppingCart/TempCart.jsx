import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pain from '../../Images/pain.png';
import Aleve from '../../Images/aleve.png';
import Tylenol from '../../Images/tylenol.png';
import Navigation from '../../components/Navigation/Navigation';
import './Cart.css';
import applepay from '../../Images/apple.png';
import paypal from '../../Images/paypal.png';

const Cart = () => {
  const [countTylenol, setCountTylenol] = useState(1);
  const [countMotrin, setCountMotrin] = useState(1);
  const [countAleve, setCountAleve] = useState(1);

  const totalTylenol = countTylenol * 15.0;
  const totalMotrin = countMotrin * 10.0;
  const totalAleve = countAleve * 12.0;

  // const [total, setTotal] = useState(countTylenol+countMotrin+countAleve)

  // function setTotal(){
  //     setTotal(countTylenol+countMotrin+countAleve)
  // }

  return (
    <div>
      <div className="carttext">
        Cart
        <p className="pleasemakesure">
          Please verify all items in cart are correct.
        </p>
      </div>
      <div className="cartcontainer">
        <div className="itemcontainer">
          <div className="tylenolcontainer">
            <div className="tylenolbox">
              <img src={Tylenol} alt="tylenol" />
            </div>
            <div className="tylenollabel">
              <div>
                <b>Tylenol</b> x {countTylenol}
              </div>
              <div>${totalTylenol}</div>
            </div>
            <div className="buttoncontainer">
              <button
                className="decrementbutton"
                onClick={() => {
                  setCountTylenol(countTylenol - 1);
                }}
              >
                -
              </button>
            </div>
            <div className="buttoncontainer">
              <button
                button
                className="incrementbutton"
                onClick={() => {
                  setCountTylenol(countTylenol + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="itemcontainer">
          <div className="motrincontainer">
            <div className="motrinbox">
              <img src={Pain} alt="motrin" />
            </div>
            <div className="motrinlabel">
              <div>
                <b>Motrin</b> x {countMotrin}
              </div>
              <div>${totalMotrin}</div>
            </div>
            <div className="buttoncontainer">
              <button
                className="decrementbutton"
                onClick={() => {
                  setCountMotrin(countMotrin - 1);
                }}
              >
                -
              </button>
            </div>
            <div className="buttoncontainer">
              <button
                button
                className="incrementbutton"
                onClick={() => {
                  setCountMotrin(countMotrin + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="itemcontainer">
          <div className="alevecontainer">
            <div className="alevebox">
              <img src={Aleve} alt="aleve" />
            </div>
            <div className="alevelabel">
              <div>
                <b>Aleve</b> x {countAleve}
              </div>
              <div>${totalAleve}</div>
            </div>
            <div className="buttoncontainer">
              <button
                className="decrementbutton"
                onClick={() => {
                  setCountAleve(countAleve - 1);
                }}
              >
                -
              </button>
            </div>
            <div className="buttoncontainer">
              <button
                className="incrementbutton"
                onClick={() => {
                  setCountAleve(countAleve + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="totalamountcontainer">
          Total Amount:<b>${totalTylenol + totalAleve + totalMotrin}</b>
        </div>
        <div className="applepay">
          <Link to="/summary">
            <img className="applepaybutton" src={applepay} alt="applepay" />
          </Link>
        </div>
        <div className="paypal">
          <img className="paypalbutton" src={paypal} alt="paypal" />
        </div>
        <Navigation className="navbar" />
      </div>
    </div>
  );
};
export default Cart;
