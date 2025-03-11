import * as React from 'react';
import { Body1Strong, Title3 } from '@fluentui/react-components';

import type { HeaderProps } from './Header.types';
import { useHeaderStyles } from './useHeaderStyles';

/**
 * Header component.
 */
export const Header: React.FC<HeaderProps> = ({
    heading,
    caption = undefined,
    icon = undefined,
    action = undefined
}) => {
    const styles = useHeaderStyles();

    return (
        <div className={styles.root}>
            {!!icon && (
                <div className={styles.icon}>{icon}</div>
            )}

            <div className={styles.body}>
                <Title3>{heading}</Title3>
                {!!caption && <Body1Strong>{caption}</Body1Strong>}
            </div>

            {!!action && <div className="tw:shrink-0">{action}</div>}
        </div>
    );
};

Header.displayName = 'Header';