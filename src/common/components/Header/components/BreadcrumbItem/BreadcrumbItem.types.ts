import type { BreadcrumbButtonProps } from '@fluentui/react-components';

/**
 * BreadcrumbItem Props
 */
export type BreadcrumbItemProps = BreadcrumbButtonProps & {
    name: string;
    href?: string | undefined;
};