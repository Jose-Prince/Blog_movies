async function obtainMovies(){
    const data = await fetch('http://127.0.0.1:3000/posts',
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
    const data = await fetch('http://127.0.0.1:3000/admin',
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

export {
    obtainMovies, 
    getAdmin,
}