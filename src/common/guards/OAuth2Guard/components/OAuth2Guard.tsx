import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { useOAuth2Context, usePathname } from '@negima/react-utilities';
import { LoadingScreen } from '@negima/react-components';

import type { OAuth2GuardProps } from './OAuth2Guard.types';

/**
 * OAuth2Guard component.
 */
export const OAuth2Guard: React.FC<OAuth2GuardProps> = ({
    children,
    fallback
}) => {
    const {
        inProgress,
        isInitialized,
        isAuthenticated
    } = useOAuth2Context();

    const pathname = usePathname();

    const [redirectUrl, setRedirectUrl] = React.useState<string>();

    if (!isInitialized || inProgress) return <LoadingScreen />;

    if (!isAuthenticated) {
        if (pathname !== redirectUrl) setRedirectUrl(pathname);

        return fallback;
    }

    if (!!redirectUrl && pathname !== redirectUrl) {
        setRedirectUrl(undefined);

        return <Navigate to={redirectUrl} />;
    }

    return children;
}

OAuth2Guard.displayName = 'OAuth2Guard';