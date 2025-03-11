import type { BreadcrumbProps as FUIBreadcrumbProps } from '@fluentui/react-components';
import type { BreadcrumbItemProps } from '../BreadcrumbItem/BreadcrumbItem.types';

/**
 * Breadcrumb Props
 */
export type BreadcrumbProps = Pick<FUIBreadcrumbProps, "focusMode" | "size"> & {
    items: BreadcrumbItemProps[];
};