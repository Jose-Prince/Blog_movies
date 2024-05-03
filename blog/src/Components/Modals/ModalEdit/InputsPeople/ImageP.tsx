import React from "react";
import '../editStyles.css';

interface ContainerProps { 
    imageP: string;
    setImageP: (imageP: string) => void;
    setImgBase64P: (imgBase64P: string) => void;
}

const ImageP: React.FC<ContainerProps> = ({imageP, setImageP, setImgBase64P}) => {

    const handleFileUpload = (event) => {
        const file = event.target.files[0]
        console.log('Archivo seleccionado:', file);

        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                if (reader.result) {
                    console.log(reader.result.toString())
                    setImageP(file.name)
                    setImgBase64P(reader.result.toString())
                }
            }
            reader.readAsDataURL(file)
        }

        const imageUrl = URL.createObjectURL(file)
        console.log('URL de la imagen:',imageUrl)
        
    }
    const onChangeLink =  (e: React.ChangeEvent<HTMLInputElement>) => {
        setImageP(e.target.value);
        setImgBase64P(e.target.value);
    };

    return (
        <div className="elementAlign">
            <p className="textIdentifier">Imagen: </p>
            <input 
                placeholder={imageP}
                type="text" 
                className="inputText"
                maxLength={255}
                onChange={onChangeLink}
                value={imageP}
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
    );
};

export default ImageP;
