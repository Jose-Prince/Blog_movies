import { useEffect, useState } from "react";
import { addMovie, getAdmin, obtainMovies, deleteMovie, obtainMoviesContent, modifyMovie, addPerson, getPeople} from "../BackEnd/Controller/Controller";

function useAPI(id : number) {
    const [movies, setMovies] = useState([])
    const [movieContent, setMovieContent] = useState({
        id: 0,
        title: '',
        trailer: '',
        image: '',
        content: '',
    })
    const [people, setPeople] = useState([])
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

                    const peopleData = await getPeople(ids[id])
                    setPeople(peopleData)
                }
                
            } catch (error) {
                setError(error)
            }
        }

        fetchData()
    }, [])

    return { movies, people, admin, movieContent, error, addMovie, deleteMovie, modifyMovie, addPerson}
}

export default useAPI