import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const Greet = () => {
  const { currentUser } = useContext(AppContext);

  return <h1>Hi {currentUser?.user?.name || 'stranger'}</h1>;
};

export default Greet;
