import React from 'react'
import Screen from './Screen'

interface ContainerProps { 
    countdownState : boolean
    replay: boolean
    index: number
    screenContent: boolean
    setScreenContent : (screenContent: boolean) => void
    playVideo: boolean
}

const firstRow: React.FC<ContainerProps> = ({
    index, 
    countdownState,
    screenContent,
    setScreenContent,
    playVideo
}) => {
    return (
        <div className='position'>
            <Screen 
                index={index} 
                countdownState={countdownState}
                screenContent={screenContent}
                setScreenContent={setScreenContent}
                playVideo={playVideo}/>
        </div>
    )
}

export default firstRow