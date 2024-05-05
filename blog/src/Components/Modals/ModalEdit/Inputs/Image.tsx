import React, { useState } from "react";
import '../editStyles.css';

interface ContainerProps { 
    image: string;
    setImage: (image: string) => void;
    setImgBase64: (imgBase64: string) => void;
}

const Image: React.FC<ContainerProps> = ({image, setImage, setImgBase64}) => {
    const [inputValue, setInputValue] = useState('');

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => { // Se especifica el tipo de evento
        const file = event.target.files?.[0]; // Se agrega la validación de nullish
        console.log('Archivo seleccionado:', file);

        if (file instanceof Blob) { // Verificamos si file es un Blob válido
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.result) {
                    console.log(reader.result.toString());
                    setImage(file.name);
                    setImgBase64(reader.result.toString());
                }
            };
            reader.readAsDataURL(file);
        } else {
            console.log('No se seleccionó ningún archivo.');
        }

        if (file) { // Agregamos la lógica adicional solo si file no es nulo
            const imageUrl = URL.createObjectURL(file);
            console.log('URL de la imagen:', imageUrl);
        }
    };

    const onChangeLink =  (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setImage(e.target.value);
        setImgBase64(e.target.value);
    };

    const handleClick = () => {
        setInputValue(image); // Establece el valor del input como el valor del placeholder al hacer clic
    };

    return (
        <div className="elementAlign">
            <p className="textIdentifier">Imagen: </p>
            <input 
                placeholder={image}
                type="text" 
                className="inputText"
                maxLength={255}
                onChange={onChangeLink}
                onClick={handleClick} // Maneja el clic en el input
                value={inputValue}
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

export default Image;
