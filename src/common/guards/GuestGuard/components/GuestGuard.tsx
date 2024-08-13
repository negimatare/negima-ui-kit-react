import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { PATHS_MAIN } from '@negima/react-configs';
import { useOAuth2Context } from '@negima/react-utilities';

import type { GuestGuardProps } from './GuestGuard.types';

/**
 * GuestGuard component.
 */
export const GuestGuard: React.FC<GuestGuardProps> = ({
    children
}) => {
    const {
        isAuthenticated
    } = useOAuth2Context();

    if (isAuthenticated) return <Navigate to={PATHS_MAIN.root} />;

    return children;
};

GuestGuard.displayName = 'GuestGuard';