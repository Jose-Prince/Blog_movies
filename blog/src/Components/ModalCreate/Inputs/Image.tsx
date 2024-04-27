import React from "react"
import '../../ModalCreate/modalStyle.css'

interface ContainerProps { 
    image : string
    setImage: (image: string) => void
 }

const Image: React.FC<ContainerProps> = ({image, setImage}) => {

    const handleFileUpload = (event) => {
        const file = event.target.files[0]
        console.log('Archivo seleccionado:', file);

        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                if (reader.result) {
                    console.log(reader.result.toString())
                }
            }
            reader.readAsDataURL(file)
        }

        const imageUrl = URL.createObjectURL(file)
        console.log('URL de la imagen:',imageUrl)
        
    }

    return (
        <div className="elementAlign">
            <p className="textIdentifier">Imagen: </p>
            <input 
                value={image}
                type="text" 
                className="inputText"
                maxLength={255}
                onChange={(e) => setImage(e.target.value)}
            ></input>   
            <div>
                <input
                    type="file"
                    accept="image/*"
                    style={{ cursor: "pointer"}}
                    onChange={handleFileUpload}
                ></input>
            </div>
        </div>
    )
}

export default Image