async function obtainMovies(){
    const data = await fetch('http://127.0.0.1:4500/posts',
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
    const blogs = await data.json()
    return blogs
}

async function getAdmin(){
    const data = await fetch('http://127.0.0.1:4500/admin',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    const admin = await data.json()
    return admin
}

async function addMovie(title: string, trailer: string, image: string, content: string){
    const object = {
        title: title,
        trailer: trailer,
        image: image,
        content: content
    }
    const data = await fetch('http://127.0.0.1:4500/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        }
    )
}

async function deleteMovie(id){
    const data = await fetch(`http://127.0.0.1:4500/posts/${id}`,
    {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export {
    obtainMovies, 
    getAdmin,
    addMovie,
    deleteMovie,
}