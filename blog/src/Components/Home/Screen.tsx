import React, { useEffect, useRef, useState } from 'react';
import './ComponentH.css';
import Video from './Video';

interface ContainerProps { 
  countdownState : boolean
  index: number
  screenContent: boolean
  setScreenContent : (screenContent: boolean) => void
  playVideo: boolean
}

const Screen: React.FC<ContainerProps> = ({
  countdownState, 
  index,
  setScreenContent,
  screenContent,
  playVideo
}) => {
  // Se ejecuta una vez al montar el componente

  return (
    <>
      {
        countdownState && <Video 
          index={index}
          playVideo={playVideo}
        />
      }
    </>
  );
};

export default Screen;
