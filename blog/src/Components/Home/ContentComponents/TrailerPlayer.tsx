import './ContentStyles.css'

import React, { useEffect, useRef, useState } from "react";

interface ContainerProps { 
  url: string
  setPlayVideo: (playVideo: boolean) => void
}

const TrailerPlayer: React.FC<ContainerProps> = ({url, setPlayVideo}) => {

  return (
    <>
        <div style={{
          position: "absolute",
          width: '100%',
          height: '1600px',
          backgroundColor: 'black',
          zIndex: '2',
          opacity: '0.5',
        }}
        onClick={() => setPlayVideo(false)}>
        </div>
        <div id='shadowEffect'>
        </div>
          <iframe 
            src={url}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            id="videoStyle"
          ></iframe>
    </>
  )
}

export default TrailerPlayer;
