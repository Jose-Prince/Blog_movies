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

const secondRow: React.FC<ContainerProps> = ({
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
    
    const {movies} = useAPI()
    
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
        () => setIsEditOpen(true),
        handleOneClick,
        undefined,
        startLoading
    )
    
    const imageSource: string = Seat

    const imageElements: JSX.Element[] = []

    let leftp  = -237
    let topp = 115

    for (let i = 0; i < 32; i++) {
        if (i % 8 == 0 && i != 0) {
            topp += 85.7
            leftp = -237

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
                        width: '716px', 
                        height: '720px',
                        margin: '0 0px', // Reducir el espacio entre las imágenes
                    }} 
                />
                <button 
                style={{
                    position: 'fixed',
                    height: '176px',
                    width: '234px',
                    top: topp + 373+'px',
                    left: leftp + 241 +'px',
                    cursor: handleCursor(),
                    zIndex: '1',
                    backgroundColor: 'transparent',
                    borderColor: 'transparent'
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={hybridClick}
                ></button>
                
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
