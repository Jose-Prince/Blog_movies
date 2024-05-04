import React from "react"
import './ComponentH.css'
import TopPart from "./ContentComponents/TopPart"
import BottomPart from "./ContentComponents/BottomPart"

interface ContainerProps { 
    index: number
 }

const MovieContent : React.FC<ContainerProps> = ({index}) => {

    return (
        <div 
            className="MovieContentDisplay"
            style={{
                maxHeight: '508px',
                height: 'calc(100vw / 1.78)',
                maxWidth: '910px',
                width: '95vw',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <TopPart index={index}/>
            <BottomPart index={index}/>
        </div>
    )
}

export default MovieContent

