import * as React from 'react';
import { MenuItem, useIsOverflowItemVisible } from '@fluentui/react-components';

import type { BreadcrumbMenuItemProps } from './BreadcrumbMenuItem.types';

/**
 * BreadcrumbMenuItem component.
 */
export const BreadcrumbMenuItem: React.FC<BreadcrumbMenuItemProps> = ({
    id,
    name
}) => {
    const isVisible = useIsOverflowItemVisible(id!);

    if (isVisible) return null;

    return <MenuItem>{name}</MenuItem>;
}

BreadcrumbMenuItem.displayName = 'BreadcrumbMenuItem';