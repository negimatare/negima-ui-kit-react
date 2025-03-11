import * as React from 'react';
import _ from 'lodash';
import {
    Button,
    Menu,
    MenuList,
    MenuPopover,
    MenuTrigger,
    Tooltip,
    useOverflowMenu,
} from '@fluentui/react-components';
import {
    bundleIcon,
    MoreHorizontalRegular,
    MoreHorizontalFilled,
} from "@fluentui/react-icons";

import type { BreadcrumbMenuProps } from './BreadcrumbMenu.types';
import { BreadcrumbMenuItem } from '../BreadcrumbMenuItem/BreadcrumbMenuItem';

const MoreHorizontal = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);

/**
 * BreadcrumbMenu component.
 */
export const BreadcrumbMenu: React.FC<BreadcrumbMenuProps> = ({
    startDisplayedItems,
    overflowItems = [],
    endDisplayedItems = []
}) => {
    const {
        ref,
        isOverflowing,
        overflowCount
    } = useOverflowMenu<HTMLButtonElement>();

    if (!isOverflowing && overflowItems && overflowItems.length === 0)
        return null;

    const overflowItemsCount = overflowItems
        ? overflowItems.length + overflowCount
        : overflowCount;

    const tooltipContent = overflowItemsCount > 3
        ? `${overflowItemsCount} items`
        :
        {
            children: !!overflowItems.length && overflowItems.reduce((preValue, curValue, _, array) => (
                <React.Fragment>
                    {preValue}
                    {array[0].name !== curValue.name && ' > '}
                    {curValue.name}
                </React.Fragment>
            ), <React.Fragment />),
            className: '',
        };

    return (
        <Menu hasIcons>
            <MenuTrigger disableButtonEnhancement>
                <Tooltip withArrow content={tooltipContent} relationship="label">
                    <Button
                        id="menu"
                        ref={ref}
                        appearance="subtle"
                        icon={<MoreHorizontal />}
                        aria-label={`${overflowItemsCount} more items`}
                        role="button"
                    />
                </Tooltip>
            </MenuTrigger>
            <MenuPopover>
                <MenuList>
                    {isOverflowing && _.map(startDisplayedItems, data => (
                        <BreadcrumbMenuItem key={data.id} {...data} />
                    ))}
                    {_.map(overflowItems, data => (
                        <BreadcrumbMenuItem key={data.id} {...data} />
                    ))}
                    {isOverflowing && _.map(endDisplayedItems, data => (
                        <BreadcrumbMenuItem key={data.id} {...data} />
                    ))}
                </MenuList>
            </MenuPopover>
        </Menu>
    );
}

BreadcrumbMenu.displayName = 'BreadcrumbMenu';