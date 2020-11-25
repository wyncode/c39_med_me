import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const MedicineCabinet = () => {
  const { currentUser } = useContext(AppContext);
  return (
    <div>
      <div>Medicine Cabinet</div>
      {currentUser?.medicineCabinet?.length > 0 ? (
        currentUser.medicineCabinet.map((medicine) => {
          return (
            <div style={{ backgroundColor: 'blue' }}>
              <div>{medicine.name}</div>
              <div>{medicine.quantity}</div>
              <div>{medicine.price}</div>
              <div>{medicine.description}</div>
              <img src={medicine.avatar} />
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
