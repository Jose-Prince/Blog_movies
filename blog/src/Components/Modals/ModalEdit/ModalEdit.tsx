import { useEffect, useState } from 'react'
import '../ModalEdit/editStyles.css'
import React from 'react'
import Name from './Inputs/Name'
import Trailer from './Inputs/Trailer'
import Content from './Inputs/Content'
import Image from './Inputs/Image'
import ModalOptions from './Inputs/ModalOptions'
import useAPI from '../../../Hooks/useAPI'
import Music from './Inputs/Music'
import NameP from './InputsPeople/NameP'
import Role from './InputsPeople/Role'
import ImageP from './InputsPeople/ImageP'
import ModalOption from './InputsPeople/ModalOption'

interface ContainerProps { 
    setIsEditOpen: (isEditOpen: boolean) => void
    index: number
}

const ModalEdit: React.FC<ContainerProps> = ({index, setIsEditOpen}) => {
    const {movieContent} = useAPI(index)

    const [moviePerson, setMoviePerson] = useState(false)

    //Movie creation hooks
    const [name, setName] = useState('')
    const [trailer, setTrailer] = useState('')
    const [image, setImage] = useState('')
    const [imgBase64, setImgBase64] = useState('')
    const [content, setContent] = useState('')
    const [music, setMusic] = useState('')
    const [id, setId] = useState(0)

    //Person creation hooks
    const [nameP, setNameP] = useState('')
    const [role, setRole] = useState('')
    const [imageP, setImageP] = useState('')
    const [imgBase64P, setImgBase64P] = useState('')

    useEffect(() => {
        setName(movieContent.title || '');
        setTrailer(movieContent.trailer || '');
        setImage(movieContent.image || '');
        setImgBase64(movieContent.image || '')
        setMusic(movieContent.music || '');
        setContent(movieContent.content || '');
        setId(movieContent.id || 0)
        console.log(movieContent);
        
    }, [movieContent]);

    return (
        <div id='shadow'>
            <div className='contentDiv'>
            <div style={{width: '100%'}}>
                    <button 
                        className='buttonsOptionsCreate'
                        onClick={()=>setMoviePerson(false)}>Película</button>
                    <button 
                        className='buttonsOptionsCreate'
                        onClick={()=>setMoviePerson(true)}
                    >Personas</button>
                </div>
                {
                    !moviePerson && <>
                        <Name name={movieContent.title} setName={setName}/>
                        <Trailer trailer={movieContent.trailer} setTrailer={setTrailer}/>
                        <Image image={movieContent.image} setImage={setImage} setImgBase64={setImgBase64}/>
                        <Music music={movieContent.music} setMusic={setMusic}/>
                        <Content content={content} setContent={setContent}/>
                        <ModalOptions 
                            setIsEditOpen={setIsEditOpen}
                            name={name}
                            trailer={trailer}
                            image={imgBase64}
                            content={content}
                            music={music}
                            index={id}/>
                        </>
                }
                {
                    moviePerson &&
                    <>
                        <NameP nameP={nameP} setNameP={setNameP} />
                        <Role role={role} setRole={setRole}/>
                        <ImageP imageP={imageP} setImageP={setImageP} setImgBase64P={setImgBase64P}/>
                        <ModalOption 
                            nameP={nameP}  
                            setNameP={setNameP}
                            imageP={imageP}
                            setImageP={setImageP}
                            role={role}
                            setRole={setRole}
                            index={id}
                            setIsEditOpen={setIsEditOpen}/>
                    </>
                }
            </div>
        </div>
    )
}

export default ModalEdit