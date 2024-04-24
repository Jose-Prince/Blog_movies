import CreateButton from './Buttons/CreateButton'
import DeleteButton from './Buttons/DeleteButton'
import './adminStyles.css'

interface ContainerProps { 
    setIsCreateOpen: (isCreateOpen: boolean) => void
    setIsDeleteOpen: (isDeleteOpen: boolean) => void
}

const Buttons: React.FC<ContainerProps> = ({setIsCreateOpen, setIsDeleteOpen}) => {
    return (
        <div className="buttonsDesign">
            <CreateButton setIsCreateOpen={setIsCreateOpen}/>
            <div className='separator'>|</div>
            <DeleteButton setIsDeleteOpen={setIsDeleteOpen} />
        </div>
    )
}

export default Buttons