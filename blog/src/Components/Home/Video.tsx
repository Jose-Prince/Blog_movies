import React, { useEffect, useState } from 'react';
import video from '../../assets/Intro.mp4';
import MovieContent from './MovieContent';
import TrailerPlayer from './ContentComponents/TrailerPlayer';
import useAPI from '../../Hooks/useAPI';
import MusicPlayer from './ContentComponents/MusicPlayer';

interface ContainerProps { 
    index : number
    playVideo: boolean
    setPlayVideo: (playVideo: boolean) => void
}

const Video : React.FC<ContainerProps> = ({index, playVideo, setPlayVideo}) => {

    const [screenContent, setScreenContent] = useState(false)
    const {movieContent} = useAPI(index)

    useEffect(() => {
        setTimeout(() => {
            setScreenContent(true)
        }, 5500);
    })

    return (
        <>
            {
                !screenContent && <video  width='100%' height='100%' autoPlay  id='screen'>
                    <source src={video} type='video/mp4' />
                </video>
            }
            {
                screenContent && !playVideo && <MovieContent index={index}/>
            }
            {
                playVideo && <TrailerPlayer url={movieContent.trailer} setPlayVideo={setPlayVideo}/>
            }
            {
                screenContent && !playVideo && <MusicPlayer index={index}/>
                
            }
        </>


    )
}

export default Video
