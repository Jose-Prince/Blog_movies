import React, { useEffect, useState } from "react"
import Seat from '../../assets/Seat.svg'

interface ContainerProps {  }

const secondRow: React.FC<ContainerProps> = () => {

    const [startLoading, setStartLoading] = useState(false)
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

    useEffect(() => {
        let timeoutId
        if (startLoading) {
            timeoutId = setTimeout(() => {
                console.log('Aqui estoy')
                setStartLoading(false)
            }, 3000)
        }

        return () => {
            clearTimeout(timeoutId)
        }
    }, [startLoading])

    const imageSource: string = Seat

    const imageElements: JSX.Element[] = []

    let leftp  = -237
    let topp = 115

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
                        zIndex: '0',
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
                    cursor: 'none',
                    zIndex: '1',
                }}
                onMouseEnter={() => setStartLoading(true)}
                onMouseLeave={() => setStartLoading(false)}></div>
                
            </div>
        )
        leftp += 240
    }

    return <>
    {startLoading && <div 
        className="loader" 
        style={{
            position: 'fixed', 
            top: mousePosition.y -15,
            left: mousePosition.x-18    
        }}/>}
    {imageElements}</>
}

export default secondRow
