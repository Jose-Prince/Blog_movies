import React from "react"
import '../modalStyle.css'

interface ContainerProps { 
    image : string
    setImage: (image: string) => void
    setImgBase64: (imgBase64: string) => void
 }

const Image: React.FC<ContainerProps> = ({image, setImage, setImgBase64}) => {

    const handleFileUpload = (event) => {
        const file = event.target.files[0]
        console.log('Archivo seleccionado:', file);

        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                if (reader.result) {
                    console.log(reader.result.toString())
                    setImage(file.name)
                    setImgBase64(reader.result.toString())
                }
            }
            reader.readAsDataURL(file)
        }

        const imageUrl = URL.createObjectURL(file)
        console.log('URL de la imagen:',imageUrl)
        
    }

    const onChangeLink = (e) => {
        setImage(e.target.value)
        setImgBase64(e.target.value)
    }

    return (
        <div className="elementAlign">
            <p className="textIdentifier">Imagen: </p>
            <input 
                value={image}
                type="text" 
                className="inputText"
                maxLength={255}
                onChange={onChangeLink}
            ></input>   
            <div>
                <input
                    type="file"
                    accept="image/*"
                    style={{ cursor: "pointer", fontSize: '23px', width: '100%'}}
                    onChange={handleFileUpload}
                ></input>
            </div>
        </div>
    )
}

export default Image