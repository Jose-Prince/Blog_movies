import { useEffect, useState } from 'react'
import './ComponentH.css'
import Data from './Data'
import React from 'react'

interface ContainerProps {  }

const Login: React.FC<ContainerProps> = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [nameUser, setNameUser] = useState('')
    const [onHover, setOnHover] = useState(false)
    const [data, setData] = useState(false)

    const color = onHover ? "blue" : "white"

    useEffect(() => {
        const fakeUser = localStorage.getItem('fakeUser')
        if (fakeUser != null) {
            const parsedUser = JSON.parse(fakeUser)
            setNameUser(parsedUser.name)
        }
    }, [])


    if (nameUser != ''){
        return (
            <div id="loginview">
                <p 
                    onMouseEnter={() =>setOnHover(true)} 
                    onMouseLeave={() =>setOnHover(false)}
                    id='nameButton'
                    style={{
                        color: onHover ? "blue" : "white",
                    }}
                    onClick={() => setData(true)}
                ><strong> {nameUser} </strong></p>
                { data && <Data user={user} setNameUser={setNameUser} setData={setData} setUser={setUser} password={password} setPassword={setPassword}/>}
            </div>
        )
    } else {
        return (
            <div id="loginview">
                <p 
                    onMouseEnter={() =>setOnHover(true)} 
                    onMouseLeave={() =>setOnHover(false)}
                    id='logButton'
                    style={{
                        color: onHover ? "blue" : "white",
                        border: '1px solid '+color,
                        fontSize: '16px',
                        textAlign: 'center'
                }}
                    onClick={() => setData(true)}
                >Escoger nombre</p>
                { data && <Data user={user} setNameUser={setNameUser} setData={setData} setUser={setUser} password={password} setPassword={setPassword}/>}
            </div>
        )
    }

}

export default Login