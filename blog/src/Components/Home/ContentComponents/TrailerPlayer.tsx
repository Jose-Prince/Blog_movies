import React from "react"
import ReactPlayer from "react-player";

interface ContainerProps { 
  url: string
}

const TrailerPlayer = ({url}) => {

  return (
    <iframe 
    style={{position: "absolute"}}
      width="910" 
      height="510" 
      src={url}
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen
    ></iframe>
  );
};


export default TrailerPlayer