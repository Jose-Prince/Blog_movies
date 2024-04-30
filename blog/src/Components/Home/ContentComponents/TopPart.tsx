import React, { useEffect, useState } from "react"
import './ContentStyles.css'
import TitleContent from "./TitleContent"
import useAPI from "../../../Hooks/useAPI"

interface ContainerProps { 
    index : number
}

const TopPart : React.FC<ContainerProps> = ({index}) => {

    const {movieContent} = useAPI(index) 

    return (
        <div className="topPart">
            <img 
                src={movieContent.image} 
                alt="Imagina una imagen para esta peli"
                height='280'/>
            <TitleContent title={movieContent.title} content={movieContent.content}/>
        </div>
    )
}

export default TopPart