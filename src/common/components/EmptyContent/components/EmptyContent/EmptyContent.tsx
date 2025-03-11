import * as React from 'react';
import { Body1, Subtitle2 } from '@fluentui/react-components';

import type { EmptyContentProps } from './EmptyContent.types';

/**
 * EmptyContent component.
 */
export const EmptyContent: React.FC<EmptyContentProps> = ({
    heading,
    caption = undefined
}) => (
    <div className="tw:flex tw:flex-col tw:justify-center tw:items-center tw:gap-2 tw:p-3">
        <img alt={heading} src="/assets/ics/ic-content.svg" className="tw:h-48" />
        <Subtitle2 block>{heading}</Subtitle2>
        {!!caption && <Body1 block>{caption}</Body1>}
    </div>
);

EmptyContent.displayName = 'EmptyContent';