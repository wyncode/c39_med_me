import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../MedProfile/medProfile.css';
import { Link } from 'react-router-dom';
import vitamin from '../../Images/vitamin.png';
import pain from '../../Images/pain.png';

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
        setMedicineProfile(res.medicine);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [medicineid]);
  return (
    <div>
      <div className="mainimage1">
        {medicineProfile && (
          <>
            <div className="mainimage1container">
              <img
                className="mainimageimage"
                src={medicineProfile.avatar}
                alt={medicineProfile.name}
              />
            </div>

            <div className="mainimageimagename">{medicineProfile?.name}</div>
            <div className="mainimageimageprice">
              {' '}
              ${medicineProfile?.price}
            </div>
            <div className="mainimageimagedosage">
              {medicineProfile?.dosage}
            </div>
            <div className="mainimageimagedescription">
              {medicineProfile?.description}
            </div>
          </>
        )}
        <div>
          <Link to="/cart" className="mainimageimageaddtocart">
            <h2>Add to cart</h2>
          </Link>
        </div>
        <div className="mainimageimageyoumay">
          <h2>You might also like....</h2>
        </div>
        <div className="mainimageyoumay2">
          <div className="mainimageyoumay2image">
            <img
              src={vitamin}
              alt=""
              className="mainimageyoumay2imageimage"
            ></img>
          </div>
          <div className="mainimageyoumay2disc">
            <h2>Sundown Naturals Vitamin</h2>
            <div className="mainimageyoumay2price">
              <h2>$4.54</h2>
            </div>
            <div className="mainimageyoumay2cart">
              <h2>Add to cart</h2>
            </div>
          </div>
        </div>
        <div className="mainimageyoumay3">
          <div className="mainiamgeyoumay4image">
            <img src={pain} alt="" className="mainimageyoumay3imageimage"></img>
          </div>
          <div className="mainimageyoumay3disc">
            <h2>Motrin Pain Relief</h2>
            <div className="mainimageyoumay3price">
              <h2>$10.00</h2>
            </div>
            <div className="mainimageyoumay2cart">
              <h2>Add to cart</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedProfile;
