
import FirstRow from '../Components/Home/FirstRow'
import Login from '../Components/Home/Login'
import SecondRow from '../Components/Admin/SecondRow'
import './Admin.css'
import ButtonsA from '../Components/Admin/ButtonsA'
import { useEffect, useState } from 'react'
import React from 'react'
import useAPI from '../Hooks/useAPI'
import useForm from '../Hooks/useForm'

const Admin: React.FC = () => {

    const { admin } = useAPI(null)
    
    const [isCreateOpen, setIsCreateOpen] = useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [countdownState, setCountdownState] = useState(false)
    const [replay, setReplay] = useState(false)
    const [index, setIndex] = useState<number>(34)
    const [screenContent, setScreenContent] = useState(false)
    const [playVideo, setPlayVideo] = useState(false)
    
    const {formCreate} = useForm(index, setIsCreateOpen)
    const {formDelete} = useForm(index, setIsDeleteOpen)
    const {formEdit} = useForm(index, setIsEditOpen)

    useEffect(() => {
        const fakeUser = localStorage.getItem('fakeUser');
        if (fakeUser != null && admin != null) {
            const parsedUser = JSON.parse(fakeUser);
            const isAdminPasswordCorrect = parsedUser.password !== '' && parsedUser.password === admin.password;
            if (!isAdminPasswordCorrect && parsedUser.name != admin.name) {
                window.location.href = '/Home';
            }
        }
    }, [admin]);
    

    return (
        <div className='admin'>
            <Login />
            <FirstRow 
                index={index} 
                replay={replay} 
                countdownState={countdownState}
                screenContent={screenContent}
                setScreenContent={setScreenContent}
                playVideo={playVideo}
                setPlayVideo={setPlayVideo}
            />
            <SecondRow 
                index={index} 
                setIsEditOpen={setIsEditOpen} 
                setIndex={setIndex} 
                setReplay={setReplay} 
                setCountdownState={setCountdownState}
                setScreenContent={setScreenContent}
                setPlayVideo={setPlayVideo}
            />
            <ButtonsA 
                setIsCreateOpen={setIsCreateOpen} 
                setIsDeleteOpen={setIsDeleteOpen}
            />
            {isCreateOpen && formCreate}
            {isDeleteOpen && formDelete}
            {isEditOpen && formEdit}

        </div>
    )
}

export default Admin