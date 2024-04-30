import { useEffect, useState } from "react";
import { addMovie, getAdmin, obtainMovies, deleteMovie, obtainMoviesContent } from "../BackEnd/Controller/Controller";

function useAPI(id : number) {
    const [movies, setMovies] = useState([])
    const [movieContent, setMovieContent] = useState({
        title: '',
        trailer: '',
        image: '',
        content: ''
    })
    const [admin, setAdmin] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {

                const moviesData = await obtainMovies()
                setMovies(moviesData)

                const adminData = await getAdmin()
                setAdmin(adminData)

                const ids = moviesData.map(element => element.id)

                if (id < moviesData.length){
                    const movieContentData = await obtainMoviesContent(ids[id])
                    setMovieContent(movieContentData)
                }
                
            } catch (error) {
                setError(error)
            }
        }

        fetchData()
    }, [])

    return { movies, admin, movieContent, error, addMovie, deleteMovie}
}

export default useAPI