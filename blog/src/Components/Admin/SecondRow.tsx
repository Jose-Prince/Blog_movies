import React, { useEffect, useState } from "react"
import Seat from '../../assets/Seat.svg'
import useAPI from "../../Hooks/useAPI"
import { useDoubleClick } from "../../Hooks/useDoubleCLick"

interface ContainerProps { 
    setCountdownState: (countdownState : boolean) => void
    setReplay: (countdownState : boolean) => void
    index: number | null
    setIndex: (index: number) => void
    setIsEditOpen: (isEditOpen: boolean) => void
    setScreenContent: (screenContent : boolean) => void
    setPlayVideo: (playVideo: boolean) => void
}

const SecondRow: React.FC<ContainerProps> = ({
    index, 
    setIndex, 
    setReplay,
    setCountdownState, 
    setIsEditOpen,
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

    const imageSource: string = Seat

    const imageElements: JSX.Element[] = []

    for (let i = 0; i < 32; i++) {

        const handleCursor = () => {
            if (i != index && i < movies.length){
                return 'none'
            } else if (i >= movies.length) {
                return 'auto'
            } else {
                return 'pointer'
            }
        }

        const handleOneClick = () => {
            if (i === index) {
                setScreenContent(false)
                setPlayVideo(true)
            }
        }

        const handleDoubleClick = () => {
            if (i === index) {
                setIsEditOpen(true)
            }
        }
        
        const hybridClick = useDoubleClick(
            handleDoubleClick,
            handleOneClick,
            undefined,
            startLoading
        )
    

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
            <div key={i} style={{ position: 'relative', width: '100%', height: '100%' }}>
                <img 
                    src={imageSource}
                    style={{ 
                        position: 'absolute',
                        top: -34,
                        left: -2.5,
                        width: '105%', 
                        zIndex: 0,
                    }} 
                />
                <button 
                    style={{
                        position: 'absolute',
                        top: -34,
                        left: -5,
                        width: '95%',
                        height: '95%',
                        cursor: handleCursor(),
                        zIndex: 1,
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
    }

    return <>
    {startLoading && <div 
        className="loader" 
        style={{
            position: 'fixed', 
            top: mousePosition.y -15,
            left: mousePosition.x-18,    
        }}/>}
        <div id='seatDisplayment'>
            {imageElements}
        </div>
    </>
}

export default SecondRow
