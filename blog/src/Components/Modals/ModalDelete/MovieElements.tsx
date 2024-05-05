import React from "react"
import useAPI from "../../../Hooks/useAPI"
import './ModalDelete.css'

interface ContainerProps { 
    selectMovie: string
    setSelectMovie: (selectMovie: string) => void
 }

const MovieElements: React.FC<ContainerProps> = ({selectMovie, setSelectMovie}) => {
    const { movies } = useAPI(null)

    return (
        <div className="displaymentMovies">
            {
               movies.map((movie) => (
                <p>
                    <label>
                        <input 
                            type="radio" 
                            value={movie.title} 
                            onChange={(event) => setSelectMovie(event.target.value)}
                            name="movie"
                            checked={selectMovie === movie.title}
                        /> {movie.title}
                    </label>
                </p>
               ))
            }
        </div>
    )
}

export default MovieElements
