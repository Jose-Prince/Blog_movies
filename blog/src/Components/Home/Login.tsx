import { useState } from 'react'
import './ComponentH.css'
import Data from './Data'

interface ContainerProps {  }

const Login: React.FC<ContainerProps> = () => {

    const [onHover, setOnHover] = useState(false)
    const [data, setData] = useState(false)

    const color = onHover ? "blue" : "white"

    return (
        <div id="loginview">
                <p 

                    onMouseEnter={() =>setOnHover(true)} 
                    onMouseLeave={() =>setOnHover(false)}
                    id='logButton'
                    style={{
                        color: onHover ? "blue" : "white",
                        border: '1px solid '+color
                }}
                    onClick={() => setData(true)}
                >Escoger nombre</p>
                { data && <Data setData={setData}/>}
        </div>
    )
}

export default Login