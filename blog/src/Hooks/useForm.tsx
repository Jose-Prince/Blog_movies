import ModalCreate from "../Components/Modals/ModalCreate/ModalCreate"
import ModalDelete from "../Components/Modals/ModalDelete/ModalDelete"
import ModalEdit from "../Components/Modals/ModalEdit/ModalEdit"

interface ContainerProps { 
    type : string
    index: number,
    setState : (state: boolean) => void
 }

function useForm(type : string, index : number, setState : (state : boolean) => void) {
    if (type == 'create') {
        return <ModalCreate setIsCreateOpen={setState}/>
    } else if (type == 'delete') {
        return <ModalDelete setIsDeleteOpen={setState}/>
    } else if (type == 'modify') {
        return <ModalEdit index={index} setIsEditOpen={setState}/>
    }
}

export default useForm