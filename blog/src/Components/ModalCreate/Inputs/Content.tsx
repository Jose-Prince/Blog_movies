import React from "react"
import '../../ModalCreate/modalStyle.css'

interface ContainerProps { 
    content : string
    setContent: (content: string) => void
 }

const Content: React.FC<ContainerProps> = ({content, setContent}) => {
    return (
        <div className="elementsDisplay">
            <p className="textIdentifier">Contenido: </p>
            <textarea
                value={content}
                className="contentArea"
                placeholder="Descripción de la pelicula..."
                onChange={(e) => setContent(e.target.value)}
            ></textarea>  
        </div>
    )
}

export default Content