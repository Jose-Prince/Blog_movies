import React from "react"
import Cerrar from "./Cerrar"
import Choose from "./Choose"

interface ContainerProps { 
    setData: (data: boolean) => void
    user: string
    password: string
    setNameUser: (nameUser: string) => void
 }

const Buttons: React.FC<ContainerProps> = ({setData, user, password,setNameUser}) => {
    return (
        <div className="buttonSelect">
            <Cerrar setData={setData}/>
            <Choose user={user} setData={setData} setNameUser={setNameUser} password={password}/>
        </div>
    )
}

export default Buttons