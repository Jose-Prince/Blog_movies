
import FirstRow from '../Components/Home/FirstRow'
import Login from '../Components/Home/Login'
import SecondRow from '../Components/Admin/SecondRow'
import './Admin.css'
import ButtonsA from '../Components/Admin/ButtonsA'
import { useState } from 'react'
import React from 'react'
import ModalCreate from '../Components/Modals/ModalCreate/ModalCreate'
import ModalDelete from '../Components/Modals/ModalDelete/ModalDelete'

const Admin: React.FC = () => {
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const [countdownState, setCountdownState] = useState(false)
    const [replay, setReplay] = useState(false)
    const [index, setIndex] = useState<number>(34)

    return (
        <div className='admin'>
            <Login />
            <FirstRow index={index} replay={replay} countdownState={countdownState}/>
            <SecondRow index={index} setIndex={setIndex} setReplay={setReplay} setCountdownState={setCountdownState}/>
            <ButtonsA setIsCreateOpen={setIsCreateOpen} setIsDeleteOpen={setIsDeleteOpen}/>
            {isCreateOpen && <ModalCreate setIsCreateOpen={setIsCreateOpen}/>}
            {isDeleteOpen && <ModalDelete setIsDeleteOpen={setIsDeleteOpen}/>}
        </div>
    )
}

export default Admin