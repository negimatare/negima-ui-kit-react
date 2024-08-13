import * as React from 'react';
import { Body1Strong, Title3 } from '@fluentui/react-components';

import type { PageHeaderProps } from './PageHeader.types';
import { usePageHeaderStyles } from './usePageHeaderStyles';

/**
 * PageHeader component.
 */
export const PageHeader: React.FC<PageHeaderProps> = ({
    headline,
    icon = undefined,
    caption = undefined
}) => {
    const styles = usePageHeaderStyles();

    return (
        <div className={styles.root}>
            {!!icon && (
                <div className={styles.icon}>{icon}</div>
            )}

            <div className={styles.body}>
                <Title3>{headline}</Title3>
                <Body1Strong>{caption}</Body1Strong>
            </div>
        </div>
    );
};

PageHeader.displayName = 'PageHeader';