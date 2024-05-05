import React, { useEffect, useState } from 'react'
import './ComponentH.css'
import Seat from '../../assets/Seat.svg'
import { useDoubleClick } from '../../Hooks/useDoubleCLick'
import useAPI from '../../Hooks/useAPI'

interface ContainerProps {
    setCountdownState: (countdownState : boolean) => void
    setReplay: (countdownState : boolean) => void
    index: number | null
    setIndex: (index: number) => void
    setScreenContent: (screenContent : boolean) => void
    setPlayVideo: (playVideo: boolean) => void
}
const SecondRow: React.FC<ContainerProps> = ({
    index, 
    setIndex, 
    setReplay,
    setCountdownState, 
    setScreenContent,
    setPlayVideo,
}) => {

    const [startLoading, setStartLoading] = useState(false)
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })
    const [timeoutId, setTimeoutId] = useState<number | null>(null)
    const [, setCursor] = useState(false)
    
    const {movies} = useAPI(null)
    
    useEffect(() => {
        const mouseMove = (e: { clientX: number; clientY: number }) => {
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
    
    
    const handleMouseLeave = () => {
        setStartLoading(false)
        if (timeoutId) {
            window.clearTimeout(timeoutId)
            setTimeoutId(null)
        }
    }

    const handleOneClick = () => {
        setScreenContent(false)
        setPlayVideo(true)
    }
    
    const hybridClick = useDoubleClick(
        () => console.log(''),
        handleOneClick,
        undefined,
        startLoading
    )

    const imageSource: string = Seat

    const imageElements: JSX.Element[] = []

    let leftp  = -3
    let topp = 511

    for (let i = 0; i < 32; i++) {
        if (i % 8 == 0 && i != 0) {
            topp += 90
            leftp = -3

        }

        const handleCursor = () => {
            if (i != index && i < movies.length){
                return 'none'
            } else if (i >= movies.length) {
                return 'auto'
            } else {
                return 'pointer'
            }
        }
    

        const handleMouseEnter = () => {
            if (i != index && i < movies.length) {
                setCursor(false)
                setStartLoading(true)
                setReplay(true)
                if (!timeoutId) {
                    const id = window.setTimeout(() => {
                        setCountdownState(false)
                        setStartLoading(false)
                        setReplay(false)
                        setTimeoutId(null)
                        console.log(i)
                        setIndex(i)
                        setCursor(true)
                        setTimeout(() => {
                            setCountdownState(true)
                        }, 500);
                    }, 3000)
                    setTimeoutId(id)
                }
            } else {
                setCursor(true)
            }

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
                        width: '246px', 
                        margin: '0 0px', // Reducir el espacio entre las imágenes
                    }} 
                />
                <button 
                style={{
                    position: 'fixed',
                    height: '176px',
                    width: '239px',
                    top: topp +'px',
                    left: leftp+3+'px',
                    cursor: handleCursor(),
                    zIndex: '1',
                    backgroundColor: 'transparent',
                    borderColor: 'transparent'
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={hybridClick}
                >
                </button>
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
            left: mousePosition.x-18,    
        }}/>}
    {imageElements}</>
}

export default SecondRow
