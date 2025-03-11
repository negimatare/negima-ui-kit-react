import * as React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Field, Label, Slider } from '@fluentui/react-components';

import type { HFSliderProps } from './HFSlider.types';

/**
 * HFSlider component.
 * @requires react-hook-form
 */
export const HFSlider: React.FC<HFSliderProps> = ({
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
                    <div className="tw:flex tw:items-center">
                        {(shards.min ?? -1) >= 0 && <Label aria-hidden>{shards.min}</Label>}
                        <Slider
                            {...propValues}
                            className="tw:flex-1"
                            onChange={(_, data) => propValues.onChange(data.value)}
                            {...shards}
                        />
                        {(shards.max ?? -1) >= 0 && <Label aria-hidden>{shards.max}</Label>}
                    </div>
                </Field>
            )}
        />
    );
};

HFSlider.displayName = 'HFSlider';