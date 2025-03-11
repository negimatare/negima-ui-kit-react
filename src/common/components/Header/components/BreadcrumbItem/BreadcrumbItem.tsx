import * as React from 'react';
import {
    BreadcrumbButton,
    BreadcrumbDivider,
    BreadcrumbItem as FUIBreadcrumbItem,
    Tooltip,
    isTruncatableBreadcrumbContent,
    truncateBreadcrumbLongName,
} from '@fluentui/react-components';

import type { BreadcrumbItemProps } from './BreadcrumbItem.types';
import { Link } from 'react-router-dom';

/**
 * BreadcrumbItem component.
 */
export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
    name = '',
    href = undefined,
    ...shards
}) => {
    const isTruncatable = isTruncatableBreadcrumbContent(name, 30);

    const __renderBreadcrumbButton = () => {
        if (shards.current) {
            return (
                <BreadcrumbButton {...shards}>
                    {isTruncatable ? truncateBreadcrumbLongName(name) : name}
                </BreadcrumbButton>
            );
        }

        return (
            <Link to={href || '#'}>
                <BreadcrumbButton {...shards}>
                    {isTruncatable ? truncateBreadcrumbLongName(name) : name}
                </BreadcrumbButton>
            </Link>
        );
    }

    return (
        <React.Fragment>
            {isTruncatable
                ?
                <FUIBreadcrumbItem>
                    <Tooltip withArrow content={name} relationship="label">
                        {__renderBreadcrumbButton()}
                    </Tooltip>
                </FUIBreadcrumbItem>
                :
                <FUIBreadcrumbItem>
                    {__renderBreadcrumbButton()}
                </FUIBreadcrumbItem>
            }

            {!shards.current && <BreadcrumbDivider />}
        </React.Fragment>
    );
};

BreadcrumbItem.displayName = 'BreadcrumbItem';