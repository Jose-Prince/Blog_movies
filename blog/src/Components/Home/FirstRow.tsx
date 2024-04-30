import React from 'react'
import Screen from './Screen'

interface ContainerProps { 
    countdownState : boolean
    replay: boolean
    index: number
}

const firstRow: React.FC<ContainerProps> = ({index, countdownState}) => {
    return (
        <div className='position'>
            <Screen index={index} countdownState={countdownState}/>
        </div>
    )
}

export default firstRow