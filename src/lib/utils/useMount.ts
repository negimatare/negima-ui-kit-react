import { useRef, useEffect } from 'react';

/**
 * TODO: useMount
 */
export const useMount = () => {
    const isMounted = useRef(true);

    useEffect(() => () => {
        isMounted.current = false;
    }, []);

    return isMounted.current;
};