import React, { useState } from "react"
import '../editStyles.css'

interface ContainerProps {  
    trailer : string
    setTrailer: (trailer: string) => void
}

const Trailer: React.FC<ContainerProps> = ({ trailer,setTrailer }) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        setTrailer(e.target.value)
    }

    return (
        <div className="elementAlign">
            <p className="textIdentifier">Trailer: </p>
            <input 
                placeholder={trailer}
                type="text" 
                className="inputText"
                maxLength={255}
                onChange={handleChange}
                onClick={()=>setInputValue(trailer)}
                value={inputValue}
            ></input>   
        </div>
    )
}

export default Trailer