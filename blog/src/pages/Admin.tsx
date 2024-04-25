
import FirstRow from '../Components/Home/FirstRow'
import Login from '../Components/Home/Login'
import SecondRow from '../Components/Admin/SecondRow'
import './Admin.css'
import ButtonsA from '../Components/Admin/ButtonsA'
import { useState } from 'react'
import React from 'react'
import ModalCreate from '../Components/ModalCreate/ModalCreate'

const Admin: React.FC = () => {
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)

    return (
        <div className='admin'>
            <Login />
            <FirstRow />
            <SecondRow />
            <ButtonsA setIsCreateOpen={setIsCreateOpen} setIsDeleteOpen={setIsDeleteOpen}/>
            {isCreateOpen && <ModalCreate />}
            {}
        </div>
    )
}

export default Admin