async function obtainMovies(){
    const data = await fetch('http://172.233.155.162:4500/posts',
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
    const data = await fetch('http://172.233.155.162:4500/admin',
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
    await fetch('http://172.233.155.162:4500/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        }
    )
}

async function addPerson(name: string, role: string, id : number, picture: string) {
    const object = {
        name: name,
        role: role,
        id: id,
        picture: picture
    }
    
    await fetch(`http://172.233.155.162:4500/people`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        }
    )
}

async function getPeople(id : number) {
    const data = await fetch(`http://172.233.155.162:4500/people/${id}`,
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        }
    )
    const people = await data.json()
    return people
}

async function deleteMovie(id : number){
    await fetch(`http://172.233.155.162:4500/posts/${id}`,
    {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    })
}

async function obtainMoviesContent(id : number){
    const data = await fetch(`http://172.233.155.162:4500/posts/${id}`,
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
    const blog = await data.json()
    return blog
}

async function modifyMovie(title: string, trailer: string, image: string, content: string, id: number){
    const body = {
        title: title,
        trailer: trailer,
        image: image,
        content: content
    }
    await fetch(`http://172.233.155.162:4500/posts/${id}`,
    {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    console.log(body);
    
}

export {
    obtainMovies, 
    getAdmin,
    addMovie,
    deleteMovie,
    obtainMoviesContent,
    modifyMovie,
    addPerson,
    getPeople
}