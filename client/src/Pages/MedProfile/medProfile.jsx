import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MedProfile = () => {
  const { medicineid } = useParams();
  const [medicineProfile, setMedicineProfile] = useState(null);

  useEffect(() => {
    const url = `/api/medicine/${medicineid}`;
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        console.log(res.medicine);
        setMedicineProfile(res.medicine);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [medicineid]);
  return (
    <div>
      Medicine Page
      {medicineProfile && (
        <>
          <div>{medicineProfile?.name}</div>
          <div>{medicineProfile?.price}</div>
          <div>{medicineProfile?.dosage}</div>
          <img src={medicineProfile.avatar} alt={medicineProfile.name} />
        </>
      )}
    </div>
  );
};

export default MedProfile;
