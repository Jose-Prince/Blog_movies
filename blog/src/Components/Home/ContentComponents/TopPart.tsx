import React, { useEffect, useState } from "react"
import './ContentStyles.css'
import TitleContent from "./TitleContent"
import useAPI from "../../../Hooks/useAPI"

interface ContainerProps { 
    index : number
}

const TopPart : React.FC<ContainerProps> = ({index}) => {

    const { movies } = useAPI()
    const {movieContent} = useAPI(index) 

    return (
        <div className="topPart">
            <button>{
                movieContent.title
            }</button>
            <TitleContent title={movieContent.title} content={movieContent.content}/>
        </div>
    )
}

export default TopPart