import React from 'react';
import logo from '../../Images/logo.png';
import cabinet from '../../Images/cabinet.png';
import '../MyMedicines/MyMedicines.css';

const MyMeds = () => {
  return (
    <div>
      <header className="bluebox">
        <div className="logorow">
          <img className="logomymeds" src={logo} alt="medmelogo" />
        </div>
        <div className="cabinetlogorow">
          <img className="cabinetlogo" src={cabinet} alt="cabinetlogo" />
        </div>
      </header>
    </div>
  );
};

export default MyMeds;
