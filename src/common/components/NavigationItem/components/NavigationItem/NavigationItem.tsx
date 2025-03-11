import * as React from 'react';
import _ from 'lodash';
import { usePathname } from '@negima/react-utilities';

import type { NavigationItemProps } from './NavigationItem.types';
import { NavigationItemLink } from '../NavigationItemLink/NavigationItemLink';

/**
 * NavigationItem component.
 */
export const NavigationItem: React.FC<NavigationItemProps> = ({
    children = [],
    isCondense = false,
    ...shards
}) => {
    const __pathname = usePathname();
    const __isActive = __pathname === shards.path;
    const __isOpen = _.some(children, x => __pathname.includes(x.path));

    if (isCondense)
        return <NavigationItemLink isActive={__isActive || __isOpen} isCondense={isCondense} {...shards} />;

    return (
        <React.Fragment>
            <NavigationItemLink isActive={__isActive} isOpen={__isOpen} {...shards} />

            {__pathname.includes(shards.path) && !!children.length && _.map(children, entry => (
                <NavigationItemLink key={entry.heading} isActive={__pathname === entry.path} isChild {...entry} />
            ))}
        </React.Fragment>
    );
};

NavigationItem.displayName = 'NavigationItem';