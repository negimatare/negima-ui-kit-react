import * as React from 'react';
import _ from 'lodash';
import { Controller, useFormContext } from "react-hook-form";
import { useId } from "@fluentui/react-utilities";
import { Field, Radio, RadioGroup } from "@fluentui/react-components";

import type { HFRadioGroupProps } from './HFRadioGroup.types';

/**
 * HFRadioGroup component.
 * @requires react-hook-form
 */
export const HFRadioGroup: React.FC<HFRadioGroupProps> = ({
    name,
    hint,
    label,
    options,
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
                    <RadioGroup
                        {...propValues}
                        onChange={(_, data) => propValues.onChange(data.value)}
                        {...shards}
                    >
                        {_.map(options, entry => <Radio key={useId('ngm-')} {...entry} />)}
                    </RadioGroup>
                </Field >
            )}
        />
    );
};

HFRadioGroup.displayName = 'HFRadioGroup';