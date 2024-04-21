import React from "react"

interface ContainerProps { 
    setPassword: (password: string) => void
}

//Input for the password
const Password : React.FC<ContainerProps> = ({ setPassword }) => {
    return (
        <input 
        onChange={(e) => setPassword(e.target.value)}
        type="password"></input>
    )
}

export default Password

