import React from "react"
import useAPI from "../../../Hooks/useAPI"

interface ContainerProps { 
    setIsDeleteOpen: (isCreateOpen: boolean) => void
    selectMovie: string
}

const DeleteOptions : React.FC<ContainerProps> = ({selectMovie, setIsDeleteOpen}) => {

    const {movies, deleteMovie} = useAPI(null)

    const handleClickDelete = (event: { preventDefault: () => void }) => {
        event.preventDefault()
        const movie = movies.find(objeto => objeto.title === selectMovie)
        if (movie != undefined)
            deleteMovie(movie.id)

        setIsDeleteOpen(false)
    }

    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <button 
                onClick={() => setIsDeleteOpen(false)}
            >Cerrar</button>
            <button
                onClick={handleClickDelete}
            >Eliminar</button>
        </div>
    )
}

export default DeleteOptions