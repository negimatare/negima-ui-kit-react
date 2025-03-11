import { ReactNode } from 'react';
import type { BreadcrumbProps, HeaderProps } from '@negima/react-components';

/**
 * PageTemplate Props
 */
export type PageTemplateProps = Partial<BreadcrumbProps> & HeaderProps & {
    children: ReactNode;
};

/**
 * PageTemplate Styles
 */
export type PageTemplateStyles = {
    root: string;
    body: string;
};