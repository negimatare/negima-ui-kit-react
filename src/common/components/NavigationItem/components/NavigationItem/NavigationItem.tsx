import * as React from 'react';
import _ from 'lodash';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { usePathname } from '@negima/react-utilities';
import type { NavigationItemProps } from './NavigationItem.types';
import { NavigationItemLink } from '../NavigationItemLink/NavigationItemLink';

/**
 * NavigationItem component.
 */
export const NavigationItem: ForwardRefComponent<NavigationItemProps> = React.forwardRef(({
    children = [],
    isCondense = false,
    ...remains
}, ref) => {
    const __pathname = usePathname();
    const __isActive = __pathname === remains.path;
    const __isOpen = _.some(children, x => __pathname.includes(x.path));

    if (isCondense)
        return <NavigationItemLink ref={ref} isActive={__isActive || __isOpen} isCondense={isCondense} {...remains} />;

    return (
        <React.Fragment>
            <NavigationItemLink ref={ref} isActive={__isActive} isOpen={__isOpen} {...remains} />

            {__pathname.includes(remains.path) && !!children.length && _.map(children, entry => (
                <NavigationItemLink isActive={__pathname === entry.path} isChild {...entry} />
            ))}
        </React.Fragment>
    );
});

NavigationItem.displayName = 'NavigationItem';