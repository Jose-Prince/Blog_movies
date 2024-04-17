import Cerrar from "./Cerrar"
import Choose from "./Choose"

interface ContainerProps { 
    setData: (data: boolean) => void
 }

const Buttons: React.FC<ContainerProps> = ({setData}) => {
    return (
        <div className="buttonSelect">
            <Cerrar setData={setData}/>
            <Choose />
        </div>
    )
}

export default Buttons