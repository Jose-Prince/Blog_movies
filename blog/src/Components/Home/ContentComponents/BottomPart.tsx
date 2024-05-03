import { Suspense, useEffect, useState } from "react"
import useAPI from "../../../Hooks/useAPI"
import BottomLoading from "../../LazyLoading/BottomLoading"

interface ContainerProps { 
    index: number
}

const Loader = () => <BottomLoading />

const BottomPart: React.FC<ContainerProps> = ({index}) => {
    return (
        <Suspense fallback={<Loader />}>
            <BottomPartContent index={index}/>
        </Suspense>
    )
}

const BottomPartContent: React.FC<ContainerProps> = ({ index })=> {
    const { people } = useAPI(index)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        const timer = setTimeout(()=> {
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return <Loader />
    }

    const NameAdjustment = (name : string) => {
        if (name.length > 16) {
            return name.substring(0,12) + '...'
        }

        return name
    }

    const RoleAdjustment = (role : string) => {
        if (role.length > 20) {
            return role.substring(0,16) + '...'
        }

        return role
    }

    return (
        <div style={{ display: 'flex'}}>
            {people.map((person) =>(
                <div style={{
                    width: '112.5px',
                    height: '150px',
                    marginLeft: '7px',
                    marginRight: '7px',
                    justifyContent: 'center'
                }}>
                    <h5 style={{margin: '0'}}>
                        {NameAdjustment(person.name)}
                    </h5>
                    <h6 style={{margin: '0'}}>
                        {RoleAdjustment(person.role)}
                    </h6>
                    <img src={person.picture} 
                        alt="Imagina una persona"
                        height='150'/>
                </div>
            ))}
        </div>
    )
}

export default BottomPart