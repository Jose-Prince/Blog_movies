import React, { useState } from "react"
import '../editStyles.css'

interface ContainerProps { 
    content : string
    setContent: (content: string) => void
 }

const Content: React.FC<ContainerProps> = ({content, setContent}) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        setContent(e.target.value)
    }

    return (
        <div className="elementsDisplay">
            <p className="textIdentifier">Contenido: </p>
            <textarea
                className="contentArea"
                placeholder={content}
                onChange={(e) => setContent(e.target.value)}
                onClick={() => setInputValue(content)}
                value={inputValue}
            ></textarea>  
        </div>
    )
}

export default Content