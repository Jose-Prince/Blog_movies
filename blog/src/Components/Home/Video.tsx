import React, { useEffect, useState } from 'react';
import video from '../../assets/Intro.mp4';
import MovieContent from './MovieContent';

interface ContainerProps { 
    index : number
 }

const Video : React.FC<ContainerProps> = ({index}) => {

    const [screenContent, setScreenContent] = useState(false)

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
                screenContent && <MovieContent index={index}/>
            }
        </>


    )
}

export default Video
