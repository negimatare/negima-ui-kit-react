import * as React from 'react';
import { Body1, Body1Strong } from '@fluentui/react-components';

import type { FieldReadonlyProps } from './FieldReadonly.types';

/**
 * FieldReadonly component.
 */
export const FieldReadonly: React.FC<FieldReadonlyProps> = ({
    label,
    value,
    className
}) => (
    <div className={`tw:flex tw:flex-col tw:gap-2 ${className}`}>
        <Body1Strong>{label}</Body1Strong>
        {typeof value === 'string' ? <Body1>{value}</Body1> : value}
    </div>
);

FieldReadonly.displayName = 'FieldReadonly';