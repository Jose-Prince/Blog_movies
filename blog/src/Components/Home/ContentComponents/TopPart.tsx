import React, { Suspense, useEffect, useState } from "react";
import './ContentStyles.css';
import TitleContent from "./TitleContent";
import useAPI from "../../../Hooks/useAPI";
import TopLoading from "../../LazyLoading/TopLoading";

interface ContainerProps {
    index: number;
}

// Componente de suspensión personalizado para mostrar un indicador de carga
const Loader = () => <TopLoading />;

const TopPart: React.FC<ContainerProps> = ({ index }) => {
    return (
        <Suspense fallback={<Loader />}>
            <TopPartContent index={index} />
        </Suspense>
    );
};

const TopPartContent: React.FC<ContainerProps> = ({ index }) => {
    const { movieContent } = useAPI(index);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulamos la carga de datos aquí, podrías ajustar esto según tus necesidades reales
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="topPart">
            <img
                src={movieContent.image}
                height='280'
            />
            <TitleContent title={movieContent.title} content={movieContent.content} />
        </div>
    );
};

export default TopPart;
