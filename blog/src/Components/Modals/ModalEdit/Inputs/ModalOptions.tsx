import React, { useEffect, useState } from "react"
import '../editStyles.css'
import useAPI from "../../../../Hooks/useAPI"

interface ContainerProps { 
    setIsEditOpen: (isEditOpen: boolean) => void
    name: string
    trailer: string
    image: string
    content: string
    index: number
}


const ModalOptions: React.FC<ContainerProps> = ({ 
    setIsEditOpen,
    name,
    trailer,
    image,
    content,
    index
}) => {

    const { modifyMovie } = useAPI()

    const handleClick = async () => {
        await modifyMovie(name,trailer,image,content, index)  
        setIsEditOpen(false)
    }

    return (
        <div className="buttonDisplay">
            <button className="buttons"
                onClick={() => setIsEditOpen(false)}
            >Cerrar</button>
            <button className="buttons"
                onClick={handleClick}
            >Modificar</button>
        </div>
    )
}

export default ModalOptions
