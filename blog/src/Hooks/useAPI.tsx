import { useEffect, useState } from "react";
import { addMovie, getAdmin, obtainMovies, deleteMovie } from "../BackEnd/Controller/Controller";

function useAPI() {
    const [movies, setMovies] = useState([])
    const [admin, setAdmin] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {

                const moviesData = await obtainMovies()
                setMovies(moviesData)

                const adminData = await getAdmin()
                setAdmin(adminData)

            } catch (error) {
                setError(error)
            }
        }

        fetchData()
    }, [])

    return { movies, admin, error, addMovie, deleteMovie}
}

export default useAPI