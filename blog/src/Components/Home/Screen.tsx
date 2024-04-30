import React, { useEffect, useRef, useState } from 'react';
import './ComponentH.css';
import Video from './Video';

interface ContainerProps { 
  countdownState : boolean
  index: number
}

const Screen: React.FC<ContainerProps> = ({countdownState, index}) => {
  // Se ejecuta una vez al montar el componente

  return (
    <>
      {
        countdownState && <Video index={index}/>
      }
    </>
  );
};

export default Screen;
