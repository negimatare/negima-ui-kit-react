import * as React from 'react';

import type { DashboardLayoutProps } from './DashboardLayout.types';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';

/**
 * DashboardLayout component.
 */
export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
    children
}) => (
    <div className="tw:flex tw:flex-col tw:h-screen tw:overflow-hidden">
        <Header />

        <div className="tw:flex tw:flex-row tw:h-full tw:overflow-hidden">
            <Sidebar />

            {children}
        </div>
    </div>
);

DashboardLayout.displayName = 'DashboardLayout';