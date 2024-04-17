import FirstRow from '../Components/Home/FirstRow'
import Login from '../Components/Home/Login'
import SecondRow from '../Components/Home/SecondRow'
import './Home.css'

const home: React.FC = () => {
    return (
        <div className='home'>
            <Login />
            <FirstRow />
            <SecondRow />
        </div>
    )
}

export default home