import React, { useEffect } from "react"
import { comparePasswords, hashPassword } from '../../../BackEnd/Hashing/PasswordHash'
import useAPI from "../../../Hooks/useAPI"
import Admin from "../../Admin/SecondRow"
import { NavLink } from "react-router-dom"

interface ContainerProps { 
    user: string
    password: string
    setNameUser: (nameUser: string) => void
    setData : (data: boolean) => void
 }

const Choose: React.FC<ContainerProps> = ({user, password,setNameUser, setData}) => {
    const { admin } = useAPI()


    const handleClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
        event?.preventDefault()
        event?.stopPropagation()
        const usuario : {
            name : string,
            contraseña: string
        } = {
            name: user,
            contraseña: password
        }

        const hashedPassword = await hashPassword(password)
        console.log(hashedPassword)

        localStorage.setItem('fakeUser', JSON.stringify(usuario))

        setNameUser(user)
        setData(false)

        if (admin != null && password != '') {
            console.log(await comparePasswords(password, admin.password))
            console.log(user === admin.name)
            if (admin.name === user && await comparePasswords(password, admin.password)){
                window.location.href = '/Admin'
            }
        }
    }

    return (
        <NavLink
            onClick={handleClick} 
            to={window.location.pathname}
            id="myButton">
                Escoger nombre
        </NavLink>
    )
}

export default Choose