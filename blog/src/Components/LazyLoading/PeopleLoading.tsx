import './Loading.css'

interface ContainerProps {  }

const PeopleLoading: React.FC<ContainerProps> = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginLeft: '2px',
            marginRight: '2px'
        }}>
            <div className='textLoad'></div>
            <div className='textLoad'></div>
            <div className='pictureLoad'></div>
        </div>
    )
}

export default PeopleLoading