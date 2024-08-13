import * as React from 'react';
import {
    Avatar,
    Popover,
    PopoverSurface,
    PopoverTrigger
} from '@fluentui/react-components';
import { useOAuth2Context } from '../../../../../lib/utils';

import { AccountPopoverSurface } from '../AccountPopoverSurface/AccountPopoverSurface';

/**
 * AccountPopover component.
 */
export const AccountPopover: React.FC = () => {
    const {
        account
    } = useOAuth2Context();

    return (
        <Popover positioning="below-end">
            <PopoverTrigger disableButtonEnhancement>
                <Avatar image={{ src: account?.photo }} name={account?.displayName} />
            </PopoverTrigger>
            <PopoverSurface tabIndex={-1} style={{ padding: 0 }}>
                <AccountPopoverSurface />
            </PopoverSurface>
        </Popover>
    );
};

AccountPopover.displayName = 'AccountPopover';