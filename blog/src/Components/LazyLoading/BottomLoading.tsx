import './Loading.css'
import PeopleLoading from './PeopleLoading'

interface ContainerProps {  }

const BottomLoading: React.FC<ContainerProps> = () => {
    return (
        <div id='bottomLoader'>
            <PeopleLoading />
            <PeopleLoading />
            <PeopleLoading />
            <PeopleLoading />
            <PeopleLoading />
            <PeopleLoading />
            <PeopleLoading />
            <PeopleLoading />
        </div>
    )
}

export default BottomLoading