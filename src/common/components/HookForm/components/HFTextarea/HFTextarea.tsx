import * as React from 'react';
import _ from 'lodash';
import { Controller, useFormContext } from "react-hook-form";
import { Field, Textarea } from "@fluentui/react-components";

import type { HFTextareaProps } from './HFTextarea.types';

/**
 * HFTextarea component.
 * @requires react-hook-form
 */
export const HFTextarea: React.FC<HFTextareaProps> = ({
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
                    <Textarea
                        {...propValues}
                        onChange={(_, data) => propValues.onChange(data.value)}
                        {...shards}
                    />
                </Field>
            )}
        />
    );
};

HFTextarea.displayName = 'HFTextarea';