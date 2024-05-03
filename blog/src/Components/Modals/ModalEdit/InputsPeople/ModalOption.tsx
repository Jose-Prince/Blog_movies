import React from "react"
import '../editStyles.css'
import useAPI from "../../../../Hooks/useAPI"

interface ContainerProps { 
    setIsEditOpen: (isEditOpen: boolean) => void
    nameP: string
    setNameP: (nameP: string) => void
    imageP: string
    setImageP: (imageP: string) => void
    role: string
    setRole: (role: string) => void
    index: number
}


const ModalOption: React.FC<ContainerProps> = ({ 
    setIsEditOpen,
    nameP,
    setNameP,
    imageP,
    setImageP,
    role,
    setRole,
    index
}) => {

    const { addPerson } = useAPI()

    const handleClick = async () => {
        await addPerson(nameP,role, index,imageP)  
        setNameP('')
        setImageP('')
        setRole('')
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

export default ModalOption
