import { useState } from "react"
import './ButtonStyle.css'

interface ContainerProps { 
    setIsCreateOpen: (isCreateOpen: boolean) => void
}

const CreateButton: React.FC<ContainerProps> = ({setIsCreateOpen}) => {
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const handleCreateClick = () => {
        setIsCreateOpen(true)
    }
    
    return (
        <p onClick={handleCreateClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="buttonStyle"
            style={{
                color: isHovered ? 'blue' : 'white',
        }}>Crear</p>
    )
}

export default CreateButton