
/**
 * ContextualMenuItem Type
 */
export type ContextualMenuItemType = {
    key: string;
    icon: React.ReactNode;
    text: string;
    disabled?: boolean;
    onClick: () => void;
};

/**
 * ContextualMenuItem Props
 */
export type ContextualMenuColumnProps = {
    menuItems: ContextualMenuItemType[];
};