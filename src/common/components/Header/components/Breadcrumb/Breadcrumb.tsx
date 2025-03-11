import * as React from 'react';
import _ from 'lodash';
import {
    Breadcrumb as FUIBreadcrumb,
    PartitionBreadcrumbItems,
    partitionBreadcrumbItems,
} from '@fluentui/react-components';

import type { BreadcrumbProps } from './Breadcrumb.types';
import type { BreadcrumbItemProps } from '../BreadcrumbItem/BreadcrumbItem.types';
import { BreadcrumbItem } from '../BreadcrumbItem/BreadcrumbItem';
import { BreadcrumbMenu } from '../BreadcrumbMenu/BreadcrumbMenu';

/**
 * Breadcrumb component.
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
    items,
    ...shards
}) => {
    const __breadcrumbItems = React.useMemo(
        () => _.map(items, (data, index) => ({ id: `ngm-Breadcrumb__item_${index}`, ...data })),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [items]
    );

    const {
        startDisplayedItems,
        overflowItems,
        endDisplayedItems,
    }: PartitionBreadcrumbItems<BreadcrumbItemProps> = partitionBreadcrumbItems({
        items: __breadcrumbItems,
        maxDisplayedItems: 3,
    });

    const __currentId = __breadcrumbItems[__breadcrumbItems.length - 1].id;

    return (
        <FUIBreadcrumb {...shards} aria-label="breadcrumb">
            {_.map(startDisplayedItems, data => (
                <BreadcrumbItem key={data.id} {...data} current={data.id === __currentId} />
            ))}
            {!!overflowItems && (
                <BreadcrumbMenu
                    startDisplayedItems={startDisplayedItems}
                    overflowItems={overflowItems}
                    endDisplayedItems={endDisplayedItems}
                />
            )}
            {_.map(endDisplayedItems, data => (
                <BreadcrumbItem key={data.id} {...data} current={data.id === __currentId} />
            ))}
        </FUIBreadcrumb>
    );
};

Breadcrumb.displayName = 'Breadcrumb';