import { useState } from "react"
import './ButtonStyle.css'

interface ContainerProps { 
    setIsDeleteOpen: (isDeleteOpen: boolean) => void
}

const DeleteButton:React.FC<ContainerProps> = ({setIsDeleteOpen}) => {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const handleDeleteClick = () => {
        setIsDeleteOpen(true)
    }

    return (
        <p onClick={handleDeleteClick} 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="buttonStyle"
        style={{
            color: isHovered ? 'blue' : 'white',
        }}>Eliminar</p>
    )
}

export default DeleteButton