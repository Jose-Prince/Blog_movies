import { useEffect, useState } from "react";
import { addMovie, getAdmin, obtainMovies } from "../BackEnd/Controller/Controller";

function useAPI(title, trailer, image, content) {
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

    return { movies, admin, error, addMovie}
}

export default useAPI