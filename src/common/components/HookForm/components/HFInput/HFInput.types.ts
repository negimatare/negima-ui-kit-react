import type { FieldProps, InputProps } from "@fluentui/react-components";

/**
 * HFInput Props
 */
export type HFInputProps = Pick<FieldProps, 'label' | 'required' | 'hint'> & InputProps & {
    name: string
};