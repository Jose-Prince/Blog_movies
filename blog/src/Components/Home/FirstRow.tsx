import Screen from './Screen'

interface ContainerProps {  }

const firstRow: React.FC<ContainerProps> = () => {
    return (
        <div className='position'>
            <Screen />
        </div>
    )
}

export default firstRow