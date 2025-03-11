import { ReactNode } from 'react';

/**
 * Header Props
 */
export type HeaderProps = {
    heading: string;
    caption?: string | undefined;
    icon?: JSX.Element | undefined;
    action?: ReactNode | undefined;
};

/**
 * Header Styles
 */
export type HeaderStyles = {
    root: string;
    icon: string;
    body: string;
};