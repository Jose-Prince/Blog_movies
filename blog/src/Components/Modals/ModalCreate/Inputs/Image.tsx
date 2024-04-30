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

    const onChangeLink = async (e) => {
        setImage(e.target.value)
        const base64 = await fetch(e.target.value)
        .then(response => response.blob())
        .then(blob => {
            const reader = new FileReader()
            reader.readAsDataURL(blob)
            return new Promise((res) => {
                reader.onloadend = () => {
                    res(reader.result)
                }
            })
        })
        

        if (typeof base64 === 'string') {
            setImgBase64(base64);
        } else {
            console.error('El valor de base64 no es una cadena.');
        }
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