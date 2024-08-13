import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Get current location path name
 * @requires react-router-dom
 */
export const usePathname = () => {
    const { pathname } = useLocation();

    return useMemo(() => pathname, [pathname]);
};