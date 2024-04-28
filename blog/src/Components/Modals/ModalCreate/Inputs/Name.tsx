import React from "react"
import '../modalStyle.css'

interface ContainerProps {  
    name : string
    setName: (name: string) => void
}

const Name: React.FC<ContainerProps> = ({ name, setName }) => {
    return (
        <div className="elementAlign">
            <p className="textIdentifier">Título: </p>
            <input 
                value={name}
                type="text" 
                className="inputText"
                maxLength={255}
                onChange={(e) => setName(e.target.value)}></input>   
        </div>
    )
}

export default Name