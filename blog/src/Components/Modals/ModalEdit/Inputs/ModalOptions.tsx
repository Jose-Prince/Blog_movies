import React, { useEffect, useState } from "react"
import '../editStyles.css'
import useAPI from "../../../../Hooks/useAPI"

interface ContainerProps { 
    setIsEditOpen: (isEditOpen: boolean) => void
    name: string
    trailer: string
    image: string
    content: string
    music: string
    index: number
}


const ModalOptions: React.FC<ContainerProps> = ({ 
    setIsEditOpen,
    name,
    trailer,
    image,
    content,
    music,
    index
}) => {

    const { modifyMovie } = useAPI()

    useEffect(()=>{
        
        console.log(index);
        
    },[])

    const handleClick = async () => {
        await modifyMovie(name,trailer,image,music,content, index)  
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
