import * as React from 'react';
import { Link } from 'react-router-dom';
import { Body1, Tooltip } from '@fluentui/react-components';
import type { NavigationItemLinkProps } from './NavigationItemLink.types';
import { useNavigationItemLinkStyles } from './useNavigationItemLinkStyles';

/**
 * NavigationItemLink component.
 */
export const NavigationItemLink: React.FC<NavigationItemLinkProps> = ({
    headline,
    icon,
    path,
    isActive,
    isChild = false,
    isCondense = false,
    isOpen= false
}) => {
    const styles = useNavigationItemLinkStyles({ isActive, isChild, isOpen });

    if (isCondense) {
        return (
            <Tooltip content={headline} relationship="label">
                <Link to={path} className={styles.root} aria-label={headline}>
                    <div className={styles.icon}>
                        {icon}
                    </div>
                </Link>
            </Tooltip>
        );
    }

    return (
        <Link to={path} className={styles.root}>
            <div className={styles.icon}>
                {icon}
            </div>
            <Body1 className={styles.body}>
                {headline}
            </Body1>
        </Link>
    );
};

NavigationItemLink.displayName = 'NavigationItemLink';