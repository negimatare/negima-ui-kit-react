import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Field } from '@fluentui/react-components';
import { DatePicker } from '@fluentui/react-datepicker-compat';

import type { HFDatePickerProps } from './HFDatePicker.types';

/**
 * HFDatePicker component.
 * @requires react-hook-form
 */
export const HFDatePicker: React.FC<HFDatePickerProps> = ({
    name,
    hint,
    label,
    required,
    className,
    ...shards
}) => {
    const {
        control
    } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: propValues, fieldState: { error } }) => (
                <Field
                    label={label}
                    hint={hint}
                    required={required}
                    validationMessage={error?.message}
                    className={className}
                >
                    <DatePicker
                        {...propValues}
                        onSelectDate={(date) => propValues.onChange(date)}
                        {...shards}
                    />
                </Field>
            )}
        />
    );
};

HFDatePicker.displayName = 'HFDatePicker';