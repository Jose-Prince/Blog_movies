import './Loading.css'

interface ContainerProps {  }

const TopLoading: React.FC<ContainerProps> = () => {
    return (
        <div id='topLoader'>
            <div className='imageLoad'></div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width:'100%'
            }}>
                <div className='titleLoad'></div>
                <div className='contentLoad'></div>
                <div className='contentLoad'></div>
                <div className='contentLoad'></div>
                <div className='contentLoad'></div>
                <div className='contentLoad'></div>
                <div className='contentLoad'></div>
                <div className='contentLoad'></div>
            </div>
        </div>
    )
}

export default TopLoading