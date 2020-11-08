import React from 'react';
import Shuttle from './../../../assets/Shuttle.svg';

import './index.css';

export const SpaceShuttle = ({ className }) => {
  return <img src={Shuttle} className={`shuttle ${className}`} />;
};
