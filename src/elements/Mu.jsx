import React from 'react';
import Image from '../assets/images/muicon.png'
export const MuIcon = () => {
  return (
    <div>
      <img src={Image} width={40} style={{borderRadius: 100}} alt="My Image" />
    </div>
  );
};
