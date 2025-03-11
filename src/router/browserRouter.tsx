import { lazy, Suspense } from 'react';
import { Outlet, Navigate, createBrowserRouter } from 'react-router-dom';
import {
    DashboardLayout,
    GuestGuard,
    LoadingScreen,
    OAuth2Guard,
} from '@negima/react-components';

// ** AUTH
const OAuth2Page = lazy(() => import('../pages/OAuth2Page/OAuth2Page'));
// ** MAIN
const Homepage = lazy(() => import('../pages/Homepage/Homepage'));
const CampaignCreate = lazy(() => import('../pages/Campaign/CampaignCreate/CampaignCreate'));
const CampaignDetails = lazy(() => import('../pages/Campaign/CampaignDetails/CampaignDetails'));
const CampaignList = lazy(() => import('../pages/Campaign/CampaignList/CampaignList'));
const CampaignUpdate = lazy(() => import('../pages/Campaign/CampaignUpdate/CampaignUpdate'));
const SettingsPage = lazy(() => import('../pages/Settings/Settings'));

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
                <DashboardLayout>
                    <Suspense fallback={<LoadingScreen />}>
                        <Outlet />
                    </Suspense>
                </DashboardLayout>
            </OAuth2Guard>
        ),
        children: [
            { element: <Homepage />, index: true },
            {
                path: 'campaigns',
                children: [
                    { element: <Navigate to="list" replace />, index: true },
                    { path: 'list', element: <CampaignList /> },
                    { path: ':id', element: <CampaignDetails /> },
                    { path: ':id/edit', element: <CampaignUpdate /> },
                    { path: 'new', element: <CampaignCreate /> },
                ]
            },
            { path: 'settings', element: <SettingsPage /> }
        ]
    },
    { path: '*', element: <Navigate to="/oauth2" replace />, index: true },
]);