import React from 'react'
import './ComponentH.css'
import Seat from '../../assets/Seat.svg'

interface ContainerProps {
    setCountdownState : (countdownState : boolean) => void
}
const SecondRow: React.FC<ContainerProps> = ({setCountdownState}) => {

    const imageSource: string = Seat

    const imageElements: JSX.Element[] = []

    let leftp  = -237
    let topp = 146

    for (let i = 0; i < 32; i++) {
        if (i % 8 == 0 && i != 0) {
            topp += 85.7
            leftp = -237
        }

        imageElements.push(
            <div key={i}>
                <img 
                    src={imageSource}
                    style={{ 
                        position: 'fixed',
                        top: topp +'px',
                        left: leftp + 'px',
                        width: '716px', 
                        height: '720px',
                        margin: '0 0px', // Reducir el espacio entre las imágenes
                    }} 
                />
                <div 
                style={{
                    position: 'fixed',
                    height: '176px',
                    width: '234px',
                    top: topp + 373+'px',
                    left: leftp + 241 +'px',
                    cursor: 'pointer',
                    zIndex: '1'
                }}></div>
                
            </div>
        )
        leftp += 240
    }

    return <>{imageElements}</>
}

export default SecondRow
