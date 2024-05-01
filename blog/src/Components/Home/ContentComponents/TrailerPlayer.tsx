import React from "react"
import ReactPlayer from "react-player";

interface ContainerProps { 
  url: string
}

const TrailerPlayer = ({url}) => {

  return (
    <iframe 
      src={url}
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen
      style={{
        maxHeight: '508px',
        height: 'calc(100vw / 1.78)',
        maxWidth: '910px',
        width: '100%',
        marginRight: '10px',
        marginLeft: '10px'
      }}
    ></iframe>
  )
}


export default TrailerPlayer