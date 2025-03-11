import type { FieldProps, TextareaProps } from "@fluentui/react-components";

/**
 * HFInput Props
 */
export type HFTextareaProps = Pick<FieldProps, 'label' | 'required' | 'hint'> & TextareaProps & {
    name: string
};