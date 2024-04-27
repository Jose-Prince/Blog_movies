import React, { useState } from 'react'
import './modalStyle.css'
import Name from './Inputs/Name'
import Image from './Inputs/Image'
import Trailer from './Inputs/Trailer'
import Content from './Inputs/Content'
import ModalOptions from './Inputs/ModalOptions'

interface ContainerProps { 
    setIsCreateOpen: (isCreateOpen: boolean) => void
}

const ModalCreate: React.FC<ContainerProps> = ({ setIsCreateOpen }) => {

    const [name, setName] = useState('')
    const [trailer, setTrailer] = useState('')
    const [image, setImage] = useState('')
    const [content, setContent] = useState('')

    return (
        <div id="shadow">
            <div className="contentDiv">
                <Name name={name} setName={setName}/>
                <Trailer trailer={trailer} setTrailer={setTrailer}/>
                <Image image={image} setImage={setImage}/>
                <Content content={content} setContent={setContent}/>
                <ModalOptions setIsCreateOpen={setIsCreateOpen}
                    name={name}
                    setName={setName}
                    trailer={trailer}
                    setTrailer={setTrailer}
                    image={image}
                    setImage={setImage}
                    content={content}
                    setContent={setContent}/>
            </div> 
        </div>
    ) 
}

export default ModalCreate