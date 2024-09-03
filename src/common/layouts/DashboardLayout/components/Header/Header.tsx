import * as React from 'react';
import { Logo } from '@negima/react-components';
import { AccountPopover, LocalePopover, ThemeModeAction } from '@negima/react-components';

import { useHeaderStyles } from './useHeaderStyles';

/**
 * Header component.
 */
export const Header: React.FC = () => {
    const styles = useHeaderStyles();

    return (
        <div className={styles.root}>
            <Logo asLink asType="full" width={128} />

            <div className="t-flex-grow" />

            <div className={styles.actionBar}>
                <LocalePopover />
                <ThemeModeAction />
                <AccountPopover />
            </div>
        </div>
    );
};

Header.displayName = 'Header';