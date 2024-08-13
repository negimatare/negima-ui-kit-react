/**
 * NavigationItem Type
 */
export type NavigationItemType = {
    headline: string;
    icon: JSX.Element;
    isCondense?: boolean | undefined;
    path: string;
};

/**
 * NavigationItem Props
 */
export type NavigationItemProps = NavigationItemType & {
    children?: NavigationItemType[] | undefined;
};