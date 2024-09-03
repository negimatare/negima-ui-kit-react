import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Use React Router navigation utilities
 * @requires react-router-dom
 */
export function useRouter() {
    const navigate = useNavigate();

    return useMemo(
        () => ({
            back: () => navigate(-1),
            forward: () => navigate(1),
            reload: () => window.location.reload(),
            push: (path: string) => navigate(path),
            replace: (path: string) => navigate(path, { replace: true }),
        }),
        [navigate]
    );
}