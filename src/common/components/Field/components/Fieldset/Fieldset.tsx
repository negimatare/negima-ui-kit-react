import * as React from 'react';
import { Body1, Divider, Subtitle1 } from '@fluentui/react-components';

import type { FieldsetProps } from './Fieldset.types';
// import { useLoadingButtonStyles } from './useLoadingButtonStyles';

/**
 * Fieldset component.
 */
export const Fieldset: React.FC<FieldsetProps> = ({
    heading,
    caption,
    children
}) => {
    return (
        <div className="tw:border tw:rounded-sm tw:shadow-xl">
            <div className="tw:p-6">
                <Subtitle1 block>{heading}</Subtitle1>
                {!!caption && <Body1 block>{caption}</Body1>}
            </div>
            <Divider />
            <div className="tw:flex tw:flex-col tw:gap-6 tw:p-6">
                {children}
            </div>
        </div>
    );
};

Fieldset.displayName = 'Fieldset';