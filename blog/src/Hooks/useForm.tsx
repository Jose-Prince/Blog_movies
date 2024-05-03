import ModalCreate from "../Components/Modals/ModalCreate/ModalCreate"
import ModalDelete from "../Components/Modals/ModalDelete/ModalDelete"
import ModalEdit from "../Components/Modals/ModalEdit/ModalEdit"

function useForm(index : number, setState : (state : boolean) => void) {
    const formCreate = <ModalCreate setIsCreateOpen={setState}/>
    const formDelete = <ModalDelete setIsDeleteOpen={setState}/>
    const formEdit = <ModalEdit index={index} setIsEditOpen={setState}/>

    return {formCreate, formDelete, formEdit}
}

export default useForm