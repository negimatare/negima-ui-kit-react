import * as React from 'react';
import _ from 'lodash';
import { Divider } from '@fluentui/react-components';
import { NavigationItem } from '@negima/react-components';
import { useToggle } from '../../../../../lib/utils';

import type { SidebarProps } from './Sidebar.types';
import { SIDEBAR_SETTINGS } from './Sidebar.config';
import { useSidebarStyles } from './useSidebarStyles';
import { SidebarTrigger } from '../SidebarTrigger/SidebarTrigger';

/**
 * Sidebar component.
 */
export const Sidebar: React.FC<SidebarProps> = () => {
    const [isCondense, toggleCondense] = useToggle(true);

    const styles = useSidebarStyles({ on: isCondense });

    const { key: footerKey, ...footerItem } = SIDEBAR_SETTINGS.footerItem;

    return (
        <div className={styles.root}>
            <div className={styles.body}>
                {_.map(SIDEBAR_SETTINGS.navigationItems, ({ key, ...shards }) => (
                    <NavigationItem key={key} {...shards} isCondense={isCondense} />
                ))}
            </div>

            <Divider inset style={{ flexGrow: 'unset' }} />

            <div className={styles.footer}>
                <div className="tw:flex-grow">
                    <NavigationItem key={footerKey} {...footerItem} isCondense={isCondense} />
                </div>

                <SidebarTrigger on={isCondense} trigger={toggleCondense} />
            </div>
        </div>
    );
};

Sidebar.displayName = 'Sidebar';