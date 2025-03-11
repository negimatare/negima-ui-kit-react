import { ReactNode } from 'react';
import type { DialogProps as FluentDialogProps } from '@fluentui/react-components';

/**
 * DialogProps Props
 */
export type DialogProps = Omit<FluentDialogProps, "children"> & {
    title: string;
    content: ReactNode;
    actions: ReactNode;
};