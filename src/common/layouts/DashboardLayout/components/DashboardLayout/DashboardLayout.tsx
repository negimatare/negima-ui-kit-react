import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';

/**
 * DashboardLayout component.
 */
export const DashboardLayout: React.FC = () => (
    <div className="t-flex t-flex-col t-h-screen t-overflow-hidden">
        <Header />

        <div className="t-flex t-flex-row t-h-full t-overflow-hidden">
            <Sidebar />

            <Outlet />
        </div>
    </div>
);

DashboardLayout.displayName = 'DashboardLayout';