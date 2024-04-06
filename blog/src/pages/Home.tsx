import FirstRow from '../Components/Home/FirstRow'
import SecondRow from '../Components/Home/SecondRow'
import './Home.css'

const home: React.FC = () => {
    return (
        <div className='home'>
            <FirstRow />
            <SecondRow />
        </div>
    )
}

export default home