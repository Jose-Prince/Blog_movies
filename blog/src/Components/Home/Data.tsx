import React from 'react'
import './ComponentH.css'
import Buttons from './DataComponents/Buttons'
import InputPassword from './DataComponents/Password/InputPassword'
import InputUser from './DataComponents/Username/InputUser'

interface ContainerProps { 
    setData: (data: boolean) => void
    setUser: (user: string) => void
    user: string
    password: string
    setPassword: (password: string) => void
    setNameUser: (nameUser: string) => void
 }

 //User inserts its data
const Data : React.FC<ContainerProps> = ({setData, setUser, user, setNameUser, setPassword, password}) => {

    return (
        <div className="overlay">
            <InputUser setUser={setUser}/>
            <InputPassword setPassword={setPassword}/>
            <Buttons user={user} setNameUser={setNameUser} setData={setData} password={password}/>
        </div>
    )
}

export default Data