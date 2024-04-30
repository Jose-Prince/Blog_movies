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

interface ContainerProps { 
    setIsEditOpen: (isEditOpen: boolean) => void
    index: number
}

const ModalEdit: React.FC<ContainerProps> = ({index, setIsEditOpen}) => {
    const {movieContent} = useAPI(index)

    const [name, setName] = useState('')
    const [trailer, setTrailer] = useState('')
    const [image, setImage] = useState('')
    const [imgBase64, setImgBase64] = useState('')
    const [content, setContent] = useState('')
    const [music, setMusic] = useState('')
    const [id, setId] = useState(0)

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
            </div>
        </div>
    )
}

export default ModalEdit