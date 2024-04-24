
import FirstRow from '../Components/Home/FirstRow'
import Login from '../Components/Home/Login'
import SecondRow from '../Components/Admin/SecondRow'
import './Admin.css'
import Buttons from '../Components/Admin/Buttons'

const Admin: React.FC = () => {
    return (
        <div className='admin'>
            <Login />
            <FirstRow />
            <SecondRow />
            <Buttons />
        </div>
    )
}

export default Admin