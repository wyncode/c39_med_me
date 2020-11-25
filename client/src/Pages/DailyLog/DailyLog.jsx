import React from 'react';
import './DailyLog.css';
import Group from '../../images/Group.png';
import MedMe from '../../images/MedMe.png';
import Vector from '../../images/Vector.png';
import Ellipse from '../../images/Ellipse.png';
import Rectangle from '../../images/Rectangle.png';
import { Link } from 'react-router-dom';

function DailyLog() {
  return (
    <div className="container">
      <div>
        <img src={Group} alt="" className="lady" />
      </div>
      <Link to="">
        <img src={MedMe} alt="" className="logo" />
      </Link>
      <Link to="">
        <img src={Vector} alt="" className="vector" />
      </Link>
      <div className="form">
        <div className="dailylog">
          <h1>Daily log</h1>
          <h2>Tell us how you are feeling today.</h2>
        </div>
        <div className="symptoms">
          <div>
            <ul className="symbar">
              <li>Symptoms</li>
              <li>Allergies</li>
              <li>Activites</li>
            </ul>
          </div>
          <div className="pain">
            <ul className="painlvl">
              <li>None</li>
              <li>Mild</li>
              <li>Mid</li>
              <li>Severe</li>
            </ul>
          </div>
          <div className="feedback">
            <div>
              <h2>Dizziness</h2>
            </div>
            <img src={Ellipse} className="circleclicky" alt="" />
            <img src={Rectangle} className="rectangleclicky" alt="" />
          </div>
          <div className="drowsiness">
            <div>
              <h2>Drowsiness</h2>
            </div>
            <img src={Ellipse} className="circleclicky" alt="" />
            <img src={Rectangle} className="rectangleclicky" alt="" />
          </div>
          <div className="fatigue">
            <div>
              <h2>Fatigue</h2>
            </div>
            <img src={Ellipse} className="circleclicky" alt="" />
            <img src={Rectangle} className="rectangleclicky" alt="" />
          </div>
          <div className="heart">
            <div>
              <h2>Heart issues</h2>
            </div>
            <img src={Ellipse} className="circleclicky" alt="" />
            <img src={Rectangle} className="rectangleclicky" alt="" />
          </div>
          <div className="hives">
            <div>
              <h2>Hives</h2>
            </div>
            <img src={Ellipse} className="circleclicky" alt="" />
            <img src={Rectangle} className="rectangleclicky" alt="" />
          </div>
          <div className="rash">
            <div>
              <h2>Rash</h2>
            </div>
            <img src={Ellipse} className="circleclicky" alt="" />
            <img src={Rectangle} className="rectangleclicky" alt="" />
          </div>
          <div className="nausea">
            <div>
              <h2>Nausea</h2>
            </div>
            <img src={Ellipse} className="circleclicky" alt="" />
            <img src={Rectangle} className="rectangleclicky" alt="" />
          </div>
          <div className="vomiting">
            <div>
              <h2>Vomiting</h2>
            </div>
            <img src={Ellipse} className="circleclicky" alt="" />
            <img src={Rectangle} className="rectangleclicky" alt="" />
          </div>
          <div className="stomach">
            <div>
              <h2>Upset stomach</h2>
            </div>
            <img src={Ellipse} className="circleclicky" alt="" />
            <img src={Rectangle} className="rectangleclicky" alt="" />
          </div>
        </div>
        <div className="textzone">
          <h2>Is there anything we missed?</h2>
          <input type="text"></input>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default DailyLog;
