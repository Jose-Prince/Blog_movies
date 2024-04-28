import React, { useState } from "react"
import './ModalDelete.css'
import MovieElements from "./MovieElements"
import DeleteOptions from "./DeleteOptions"

interface ContainerProps { 
    setIsDeleteOpen: (isCreateOpen: boolean) => void
}

const ModalDelete: React.FC<ContainerProps> = ({setIsDeleteOpen}) => {

    const [selectMovie, setSelectMovie] = useState('')
    
    return (
        <div id="shadow">
            <div id='deleteDiv'>
                <h2>Escoja la película a eliminar</h2>
                <MovieElements selectMovie={selectMovie} setSelectMovie={setSelectMovie} />
                <DeleteOptions setIsDeleteOpen={setIsDeleteOpen} selectMovie={selectMovie}/>
            </div>
        </div>
    )
}

export default ModalDelete