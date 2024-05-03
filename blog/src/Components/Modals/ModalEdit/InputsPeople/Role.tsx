import React from "react"
import '../editStyles.css'

interface ContainerProps {  
    role : string
    setRole: (nameP: string) => void
}

const Role: React.FC<ContainerProps> = ({ role, setRole }) => {

    return (
        <div className="elementAlign">
            <p className="textIdentifier">Papel: </p>
            <input 
                placeholder={role}
                type="text" 
                className="inputText"
                maxLength={255}
                onChange={(e)=> setRole(e.target.value)}
                value={role}
            ></input>   
        </div>
    )
}

export default Role