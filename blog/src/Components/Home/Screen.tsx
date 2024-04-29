import React, { useEffect, useRef } from 'react';
import './ComponentH.css';
import video from '../../assets/Intro.mp4';

const Screen: React.FC = () => {
  // Se ejecuta una vez al montar el componente

  return (
      <video  width='100%' height='100%' autoPlay id='screen'>
        <source src={video} type='video/mp4' />
      </video>
  );
};

export default Screen;
