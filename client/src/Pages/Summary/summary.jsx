import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMapGL from 'react-map-gl';
import './summary.css';

const Summary = () => {
  const [viewport, setViewport] = useState({
    latitude: 25.801354,
    longitude: -80.203173,
    zoom: 13,
    bearing: 0,
    pitch: 0
  });

  return (
    <>
      <div>
        <div className="mapbox-react">
          <ReactMapGL
            {...viewport}
            width="375px"
            height="375px"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          />
        </div>
      </div>

      <div>
        <div className="ordersumcontainer">
          <div className="ordersum">
            <div className="prep">Your order is being prepared.</div>
            <div className="driver">
              Driver will appear on the map when order has shipped.
            </div>
            <div className="thank">Thank you for shopping with us!</div>
            <div className="confirm">Your order confirmation: WJ19768303.</div>
          </div>
        </div>
        <div className="homechat">
          <div className="sumhome">
            <Link to="/home">
              <h2>Home</h2>
            </Link>
          </div>
          <div className="sumchat">
            <Link to="/chat">
              <h2>Chat With Pharmacist</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
