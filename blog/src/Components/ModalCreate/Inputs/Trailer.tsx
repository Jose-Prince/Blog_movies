import React from "react"
import '../../ModalCreate/modalStyle.css'

interface ContainerProps {  
    trailer : string
    setTrailer: (trailer: string) => void
}

const Trailer: React.FC<ContainerProps> = ({ trailer,setTrailer }) => {
    return (
        <div className="elementAlign">
            <p className="textIdentifier">Trailer: </p>
            <input 
                value={trailer}
                type="text" 
                className="inputText"
                maxLength={255}
                onChange={(e) => setTrailer(e.target.value)}
            ></input>   
        </div>
    )
}

export default Trailer