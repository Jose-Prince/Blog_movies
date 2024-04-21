import React from 'react'
import '../../ComponentH.css'
import Password from './Password'
import PasswordName from './PasswordName'

interface ContainerProps { 
    setPassword: (password: string) => void
 }

//Div for the password
const InputPassword: React.FC<ContainerProps> = ({setPassword}) => {
    return (
        <div className='inputsDivs'>
            <PasswordName />
            <Password setPassword={setPassword} />
        </div>
    )
}

export default InputPassword