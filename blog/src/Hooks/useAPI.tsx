import { useEffect, useState } from "react";
import { addMovie, getAdmin, obtainMovies, deleteMovie, obtainMoviesContent, modifyMovie, addPerson, getPeople} from "../BackEnd/Controller/Controller";

interface AdminData {
    name: string
    password: string
}

interface MovieData {
    id: number
    title: string
    trailer: string
    image: string
    content: string
}

interface PeopleData {
    name: string
    role: string
    picture: string
}

function useAPI(id : number | null) {
    const [movies, setMovies] = useState<Array<MovieData>>([])
    const [movieContent, setMovieContent] = useState<MovieData>({
        id: 0,
        title: '',
        trailer: '',
        image: '',
        content: '',
    })
    const [people, setPeople] = useState<Array<PeopleData>>([])
    const [admin, setAdmin] = useState<AdminData | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {

                const moviesData = await obtainMovies()
                setMovies(moviesData)

                const adminData = await getAdmin()
                setAdmin(adminData)

                const ids = moviesData.map((element: { id: number; }) => element.id)
                if (id != null){
                    if (id < moviesData.length){
                        const movieContentData = await obtainMoviesContent(ids[id])
                        setMovieContent(movieContentData)
    
                        const peopleData = await getPeople(ids[id])
                        setPeople(peopleData)
                    }
                }
                
            } catch (error) {
                console.log(error);
                
            }
        }

        fetchData()
    }, [id])

    return { movies, people, admin, movieContent, addMovie, deleteMovie, modifyMovie, addPerson}
}

export default useAPI