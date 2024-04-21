interface ContainerProps { 
    setUser: (user: string) => void
}

//User inserts its username
const User : React.FC<ContainerProps> = ({ setUser }) => {
    return (
        <input
        onChange={(e) => setUser(e.target.value)}></input>
    )
}

export default User