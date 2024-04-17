import './ComponentH.css'
import Buttons from './DataComponents/Buttons'

interface ContainerProps { 
    setData: (data: boolean) => void
 }

const Data : React.FC<ContainerProps> = ({setData}) => {
    return (
        <div className="overlay">
            <Buttons setData={setData}/>
        </div>
    )
}

export default Data