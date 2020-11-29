import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pain from '../../Images/pain.png';
import Aleve from '../../Images/aleve.png';
import Tylenol from '../../Images/tylenol.png';

const Cart = () => {
  const [countTylenol, setCountTylenol] = useState(1);
  const [countMotrin, setCountMotrin] = useState(1);
  const [countAleve, setCountAleve] = useState(1);

  const totalTylenol = countTylenol * 10.0;
  const totalMotrin = countMotrin * 10.0;
  const totalAleve = countAleve * 10.0;

  // const [total, setTotal] = useState(countTylenol+countMotrin+countAleve)

  // function setTotal(){
  //     setTotal(countTylenol+countMotrin+countAleve)
  // }

  return (
    <div>
      <div>
        <img className="tylenolbox" src={Tylenol} />
        <div>Tylenol</div>
        <div>${totalTylenol}</div>
        <p>{countTylenol}</p>
        <button
          onClick={() => {
            setCountTylenol(countTylenol - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCountTylenol(countTylenol + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <img className="motrinbox" src={Pain} />
        <div>Motrin</div>
        <div>${totalMotrin}</div>
        <p>{countMotrin}</p>
        <button
          onClick={() => {
            setCountMotrin(countMotrin - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCountMotrin(countMotrin + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <img className="alevebox" src={Aleve} />
        <div>Aleve</div>
        <div>${totalAleve}</div>
        <p>{countAleve}</p>
        <button
          onClick={() => {
            setCountAleve(countAleve - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setCountAleve(countAleve + 1);
          }}
        >
          +
        </button>
      </div>
      <div>Total Amount: ${totalTylenol + totalAleve + totalMotrin}</div>
      <div>
        <Link to="/summary">
          <button>Checkout Checkout</button>
        </Link>
      </div>
    </div>
  );
};
export default Cart;
