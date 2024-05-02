import useAPI from "../../../Hooks/useAPI"

interface ContainerProps { 
    index: number
}


const BottomPart: React.FC<ContainerProps> = ({index}) => {

    const { people } = useAPI(index)

    return (
        <div style={{ display: 'flex'}}>
            {people.map((person) =>(
                <div style={{
                    width: '112.5px',
                    height: '150px',
                    marginLeft: '7px',
                    marginRight: '7px'
                }}>
                    <h5 style={{margin: '0'}}>
                        {person.name}
                    </h5>
                    <h6 style={{margin: '0'}}>
                        {person.role}
                    </h6>
                    <img src={person.picture} 
                        alt="IMagina una persona"
                        height='150'/>
                </div>
            ))}
        </div>
    )
}

export default BottomPart