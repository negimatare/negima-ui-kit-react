import * as React from 'react';
import _ from 'lodash';
import { Controller, useFormContext } from "react-hook-form";
import { Field, Input } from "@fluentui/react-components";

import type { HFNumberProps } from './HFNumber.types';
import { NumericFormat } from 'react-number-format';

/**
 * HFNumber component.
 * @requires react-hook-form
 */
export const HFNumber: React.FC<HFNumberProps> = ({
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
                    <NumericFormat
                        name={propValues.name}
                        value={propValues.value}
                        onBlur={propValues.onBlur}
                        onChange={propValues.onChange}
                        {...shards}
                        customInput={Input}
                        getInputRef={propValues.ref}
                    />
                </Field>
            )}
        />
    );
};

HFNumber.displayName = 'HFNumber';