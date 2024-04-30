import React, { useState } from "react"
import '../editStyles.css'

interface ContainerProps {  
    name : string
    setName: (name: string) => void
}

const Name: React.FC<ContainerProps> = ({ name, setName }) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        setName(e.target.value)
    }

    return (
        <div className="elementAlign">
            <p className="textIdentifier">Título: </p>
            <input 
                placeholder={name}
                type="text" 
                className="inputText"
                maxLength={255}
                onChange={handleChange}
                onClick={() => setInputValue(name)}
                value={inputValue}
            ></input>   
        </div>
    )
}

export default Name