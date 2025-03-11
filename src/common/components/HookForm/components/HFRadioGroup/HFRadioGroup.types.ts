import type { FieldProps, RadioGroupProps, RadioProps } from "@fluentui/react-components";

/**
 * HFRadioGroup Props
 */
export type HFRadioGroupProps = Pick<FieldProps, 'label' | 'required' | 'hint'> & RadioGroupProps & {
    name: string
    options: RadioProps[]
};