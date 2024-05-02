import React, { useState } from "react"
import '../editStyles.css'

interface ContainerProps {  
    nameP : string
    setNameP: (nameP: string) => void
}

const NameP: React.FC<ContainerProps> = ({ nameP, setNameP }) => {

    return (
        <div className="elementAlign">
            <p className="textIdentifier">Nombre: </p>
            <input 
                placeholder={nameP}
                type="text" 
                className="inputText"
                maxLength={255}
                onChange={(e)=> setNameP(e.target.value)}
                value={nameP}
            ></input>   
        </div>
    )
}

export default NameP