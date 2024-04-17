interface ContainerProps { 
    setData: (data: boolean) => void
 }
const Cerrar: React.FC<ContainerProps> = ({setData}) => {
    return (
        <button style={{
            margin: '5px'
        }} onClick={() => setData(false)}>Cerrar</button>
    )
}

export default Cerrar