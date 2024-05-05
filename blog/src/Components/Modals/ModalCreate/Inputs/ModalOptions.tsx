import React from "react"
import '../modalStyle.css'
import useAPI from "../../../../Hooks/useAPI"

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

    const { addMovie } = useAPI(null)

    const handleClick = async () => {
        console.log(name)  
        console.log(trailer)  
        console.log(image)  
        console.log(content)      
        await addMovie(name,trailer,image,content)  
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
