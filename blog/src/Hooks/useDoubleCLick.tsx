//Custom Hook obtenido de Medium para implementar el uso de doble click
//Se hicieron modificaciones para pasa rel código de JS a TS

import { useCallback, useRef } from 'react';

export const useDoubleClick = (doubleClick, click, timeout = 200, loading : boolean) => {
    // Usamos useRef para almacenar el timeout y recordarlo en useCallback
    const clickTimeout = useRef<number | undefined>();

    const clearClickTimeout = () => {
        // Limpiamos el timeout y establecemos clickTimeout.current en undefined
        if (clickTimeout.current) {
            clearTimeout(clickTimeout.current);
            clickTimeout.current = undefined;
        }
    };

    // Retornamos una versión memorizada de la función de devolución de llamada que solo cambia si una de las dependencias ha cambiado
    return useCallback((event) => {
        clearClickTimeout();
        if (!loading && click && event.detail === 1) {
            // Verificamos si clickTimeout.current es un número antes de configurar el nuevo timeout
            clickTimeout.current = setTimeout(() => {
                click(event);
            }, timeout);
        }
        // Llamamos a la función de doble clic si event.detail es par
        if (!loading && event.detail % 2 === 0) {
            doubleClick(event);
        }
    }, [click, doubleClick, timeout]);
};
