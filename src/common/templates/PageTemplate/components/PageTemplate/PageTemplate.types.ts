import { ReactNode } from 'react';

/**
 * PageTemplate Props
 */
export type PageTemplateProps = {
    headline: string;
    icon?: JSX.Element | undefined;
    caption?: string | undefined;
    children: ReactNode;
};

/**
 * PageTemplate Styles
 */
export type PageTemplateStyles = {
    root: string;
    body: string;
};