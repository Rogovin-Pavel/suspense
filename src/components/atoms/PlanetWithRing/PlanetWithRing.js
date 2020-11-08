import React from 'react';
import Planet from './../../../assets/Planet.svg';

import './index.css';

export const PlanetWithRing = ({ className }) => {
  return <img src={Planet} className={`planet ${className}`} />;
};
