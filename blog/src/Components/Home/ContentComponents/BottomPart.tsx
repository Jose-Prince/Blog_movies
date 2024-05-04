import { Suspense, useEffect, useRef, useState } from "react"
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

    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        const timer = setTimeout(()=> {
            setIsLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    useEffect(()=>{
        const container = containerRef.current
        if (!container) return

        const handleWheel = (event: WheelEvent) => {
            event.preventDefault()
            container.scrollBy({
                left: event.deltaY < 0 ? -30 : 30,
            })
        }

        container.addEventListener("wheel", handleWheel)
        return () => {
            container.removeEventListener("wheel",handleWheel)
        }
    },[people])

    if (isLoading) {
        return <Loader />
    }

    const NameAdjustment = (name : string) => {
        if (name.length >= 14) {
            return name.substring(0,10) + '...'
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
        <div
            id='container'
            ref={containerRef} 
            style={{ 
                display: 'flex',
                overflowX: 'auto',
                overflowY: 'hidden',
            }}
        >
            {people.map((person, index) => (
                <div key={index} style={{  // Usamos el índice como key
                    maxWidth: '112.5px',
                    width: 'calc(13vw)',
                    height: '75%',
                    marginLeft: '7px',
                    marginRight: '7px',
                    justifyContent: 'center'
                }}>
                    <h5 style={{ margin: '0' }}>
                        {NameAdjustment(person.name)}
                    </h5>
                    <h6 style={{ margin: '0' }}>
                        {RoleAdjustment(person.role)}
                    </h6>
                    <img 
                        src={person.picture} 
                        alt="Imagina una persona"
                        height='150'
                        className="pictureStyle"
                    />
                </div>
            ))}
        </div>
    )    
}

export default BottomPart