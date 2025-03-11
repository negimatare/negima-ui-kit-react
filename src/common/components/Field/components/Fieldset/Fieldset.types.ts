import { ReactNode } from 'react';

/**
 * Fieldset Props
 */
export type FieldsetProps = {
    heading: string;
    caption?: string | undefined;
    children: ReactNode;
};

/**
 * Fieldset Styles
 */
export type FieldsetStyles = {
    root: string;
};