import { useCallback, useRef } from 'react';

export const useDoubleClick = (doubleClick: (event: any) => void | undefined, click: (event: any) => void, timeout = 200, loading: boolean) => {
    // Usamos useRef para almacenar el timeout y recordarlo en useCallback
    const clickTimeout = useRef<NodeJS.Timeout | undefined>();

    const clearClickTimeout = () => {
        // Limpiamos el timeout y establecemos clickTimeout.current en undefined
        if (clickTimeout.current) {
            clearTimeout(clickTimeout.current);
            clickTimeout.current = undefined;
        }
    };

    // Retornamos una versión memorizada de la función de devolución de llamada que solo cambia si una de las dependencias ha cambiado
    return useCallback((event: { detail: number }) => {
        clearClickTimeout();
        if (!loading && click && event.detail === 1) {
            // Verificamos si clickTimeout.current es un número antes de configurar el nuevo timeout
            clickTimeout.current = setTimeout(() => {
                click(event);
            }, timeout) as NodeJS.Timeout;
        }
        // Llamamos a la función de doble clic si event.detail es par
        if (!loading && event.detail % 2 === 0) {
            doubleClick(event);
        }
    }, [click, doubleClick, timeout, loading]); // Agrega 'loading' a la lista de dependencias
};
