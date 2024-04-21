import User from "./User"
import UserName from "./UserName"
import '../../ComponentH.css'

interface ContainerProps { 
    setUser: (user: string) => void
 }

//Style for the input display
const InputUser: React.FC<ContainerProps> = ({setUser}) => {
    return (
        <div className="inputsDivs">
            <UserName />
            <User setUser={setUser}/>    
        </div>
    )
}

export default InputUser