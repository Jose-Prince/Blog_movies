import React, { useState } from "react"

interface ContainerProps { 
    music : string
    setMusic: (music: string) => void
}

const Music: React.FC<ContainerProps> = ({music, setMusic}) => {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        setMusic(e.target.value)
    }

    return (
        <div className="elementAlign">
            <p className="textIdentifier">Soundtrack: </p>
            <input 
                placeholder={music}
                type="text" 
                className="inputText"
                maxLength={255}
                onChange={handleChange}
                onClick={()=>setInputValue(music)}
                value={inputValue}
            ></input>   
        </div>
    )
}

export default Music