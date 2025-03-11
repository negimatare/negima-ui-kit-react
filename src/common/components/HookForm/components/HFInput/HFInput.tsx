import * as React from 'react';
import _ from 'lodash';
import { Controller, useFormContext } from "react-hook-form";
import { Field, Input } from "@fluentui/react-components";

import type { HFInputProps } from './HFInput.types';

/**
 * HFInput component.
 * @requires react-hook-form
 */
export const HFInput: React.FC<HFInputProps> = ({
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
                    <Input
                        {...propValues}
                        onChange={(_, data) => propValues.onChange(data.value)}
                        {...shards}
                    />
                </Field>
            )}
        />
    );
};

HFInput.displayName = 'HFInput';