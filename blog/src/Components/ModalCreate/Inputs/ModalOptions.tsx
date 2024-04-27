import React from "react"
import '../../ModalCreate/modalStyle.css'
import useAPI from "../../../Hooks/useAPI"

interface ContainerProps { 
    setIsCreateOpen: (isCreateOpen: boolean) => void
    name: string
    setName: (name: string) => void
    trailer: string
    setTrailer: (trailer: string) => void
    image: string
    setImage: (image: string) => void
    content: string
    setContent: (content: string) => void
}


const ModalOptions: React.FC<ContainerProps> = ({ 
    setIsCreateOpen,
    name,
    setName,
    trailer,
    setTrailer,
    image,
    setImage,
    content,
    setContent
}) => {

    const { addMovie } = useAPI()

    const handleClick = async () => {
z        
        setName('')
        setTrailer('')
        setImage('')
        setContent('')
    }

    return (
        <div className="buttonDisplay">
            <button className="buttons"
                onClick={() => setIsCreateOpen(false)}
            >Cerrar</button>
            <button className="buttons"
                onClick={handleClick}
            >Grabar</button>
        </div>
    )
}

export default ModalOptions
