import * as React from 'react';
import { ToggleButton, Tooltip } from '@fluentui/react-components';
import {
    bundleIcon,
    ChevronLeftFilled,
    ChevronLeftRegular,
    ChevronRightFilled,
    ChevronRightRegular
} from '@fluentui/react-icons';

import type { SidebarTriggerProps } from './SidebarTrigger.types';

const ChevronL = bundleIcon(ChevronLeftFilled, ChevronLeftRegular);
const ChevronR = bundleIcon(ChevronRightFilled, ChevronRightRegular);

/**
 * SidebarTrigger component.
 */
export const SidebarTrigger: React.FC<SidebarTriggerProps> = ({
    on = false,
    trigger
}) => (
    <Tooltip content={on ? 'Open the SidebarTrigger' : 'Close the SidebarTrigger'} relationship="label">
        <ToggleButton
            appearance="transparent"
            checked={!on}
            icon={on ? <ChevronR /> : <ChevronL />}
            size="large"
            onClick={trigger}
            style={{ padding: 12, maxWidth: 48, maxHeight: 48 }}
        />
    </Tooltip>
);

SidebarTrigger.displayName = 'SidebarTrigger';