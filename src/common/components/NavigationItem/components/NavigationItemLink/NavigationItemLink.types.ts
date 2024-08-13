import { NavigationItemType } from '@negima/react-components';

/**
 * NavigationItemLink Props
 */
export type NavigationItemLinkProps = NavigationItemType & {
    isActive?: boolean | undefined;
    isChild?: boolean | undefined;
    isOpen?: boolean | undefined;
};

/**
 * NavigationItemLink State
 */
export type NavigationItemLinkState = {
    isActive?: boolean | undefined;
    isChild?: boolean | undefined;
    isOpen?: boolean | undefined;
};

/**
 * NavigationItemLink Styles
 */
export type NavigationItemLinkStyles = {
    root: string;
    body: string;
    icon: string;
};