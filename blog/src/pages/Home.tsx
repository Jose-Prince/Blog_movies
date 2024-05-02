import React, { useState } from 'react'
import FirstRow from '../Components/Home/FirstRow'
import Login from '../Components/Home/Login'
import SecondRow from '../Components/Home/SecondRow'
import './Home.css'

const home: React.FC = () => {
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [countdownState, setCountdownState] = useState(false)
    const [replay, setReplay] = useState(false)
    const [index, setIndex] = useState<number>(34)
    const [screenContent, setScreenContent] = useState(false)
    const [playVideo, setPlayVideo] = useState(false)

    return (
        <div className='home'>
            <Login />
            <FirstRow 
                index={index} 
                replay={replay} 
                countdownState={countdownState}
                screenContent={screenContent}
                setScreenContent={setScreenContent}
                playVideo={playVideo}
                setPlayVideo={setPlayVideo}
            />
            <SecondRow 
                index={index} 
                setIsEditOpen={setIsEditOpen} 
                setIndex={setIndex} 
                setReplay={setReplay} 
                setCountdownState={setCountdownState}
                setScreenContent={setScreenContent}
                setPlayVideo={setPlayVideo}
            />
        </div>
    )
}

export default home