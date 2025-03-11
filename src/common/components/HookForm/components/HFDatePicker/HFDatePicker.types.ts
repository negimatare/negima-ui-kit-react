import type { FieldProps } from '@fluentui/react-components';
import type { DatePickerProps } from '@fluentui/react-datepicker-compat';

/**
 * HFDatePicker Props
 */
export type HFDatePickerProps = Pick<FieldProps, 'label' | 'required' | 'hint'> & DatePickerProps & {
    name: string
};