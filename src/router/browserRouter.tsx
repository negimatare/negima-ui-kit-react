import { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { DashboardLayout, GuestGuard, OAuth2Guard } from '@negima/react-components';

import { withSuspense } from './withSuspense';

// ** AUTH
const OAuth2Page = withSuspense(lazy(() =>
    import('../pages/OAuth2Page/OAuth2Page'))
);
// ** MAIN
const Homepage = withSuspense(lazy(() =>
    import('../pages/Homepage/Homepage'))
);

export const browserRouter = createBrowserRouter([
    {
        path: 'oauth2',
        children: [
            { element: <Navigate to="authorize" replace />, index: true },
            {
                path: 'authorize',
                element: (
                    <GuestGuard>
                        <OAuth2Page />
                    </GuestGuard>
                )
            }
        ]
    },
    {
        path: 'd',
        element: (
            <OAuth2Guard fallback={<OAuth2Page />}>
                <DashboardLayout />
            </OAuth2Guard>
        ),
        children: [
            { element: <Homepage />, index: true },
            { path: 'settings', element: <Homepage />, index: true }
        ]
    },
    { path: '*', element: <Navigate to="/oauth2" replace />, index: true },
]);