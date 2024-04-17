import { useState } from 'react'
import './ComponentH.css'
import { Link } from 'react-router-dom'

interface ContainerProps {  }

const Login: React.FC<ContainerProps> = () => {

    const [onHover, setOnHover] = useState(false)

    const color = onHover ? "blue" : "white"

    const onMosueEnter = () => {
        setOnHover(true)
    }

    const onMouseLeave = () => {
        setOnHover(false)
    }

    return (
        <div id="loginview">
                <Link 
                    to='/Admin' 
                    onMouseEnter={onMosueEnter} 
                    onMouseLeave={onMouseLeave}
                    id='logButton'
                    style={{
                        color: onHover ? "blue" : "white",
                        border: '1px solid '+color
                }}>Escoger nombre</Link>
        </div>
    )
}

export default Login