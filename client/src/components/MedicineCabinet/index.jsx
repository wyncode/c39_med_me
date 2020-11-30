import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const MedicineCabinet = () => {
  const { currentUser, medicines } = useContext(AppContext);
  return (
    <div>
      <div>
        <strong>Medicine Cabinet</strong>
      </div>
      {currentUser?.user?.medicineCabinet?.length > 0 ? (
        medicines.map((medicine) => {
          return (
            <div key={medicine._id} style={{ backgroundColor: 'gray' }}>
              <div>Medicine: {medicine.name}</div>
              <div>Quantity: {medicine.quantity}</div>
              <div>Price: $ {medicine.price}</div>
              <div>Description: {medicine.description}</div>
              <img src={medicine.avatar} alt="" />
            </div>
          );
        })
      ) : (
        <div>You have no medicine.</div>
      )}
    </div>
  );
};

export default MedicineCabinet;
