import * as React from 'react';
import {
    Avatar,
    Button,
    Caption1,
    Caption1Strong,
    Subtitle2Stronger
} from '@fluentui/react-components';
import { useOAuth2Context } from '../../../../../lib/utils';

import { useAccountPopoverSurfaceStyles } from './useAccountPopoverSurfaceStyles';

/**
 * AccountPopoverSurface component.
 */
export const AccountPopoverSurface: React.FC = () => {
    const {
        account,
        signOut
    } = useOAuth2Context();

    const styles = useAccountPopoverSurfaceStyles();

    return (
        <div className={styles.root}>
            <div className={styles.body}>
                <Avatar image={{ src: account?.photo }} size={96} />

                <div className="t-flex t-flex-col t-gap-2">
                    <Subtitle2Stronger>{account?.displayName}</Subtitle2Stronger>
                    <Caption1>{account?.jobTitle}</Caption1>
                    <Caption1>{account?.mail}</Caption1>
                </div>
            </div>
            <div className={styles.footer}>
                <Caption1Strong>{account?.companyName}</Caption1Strong>

                <Button appearance="subtle" className={styles.signoutButton} onClick={signOut}>
                    Sign out
                </Button>
            </div>
        </div>
    );
};

AccountPopoverSurface.displayName = 'AccountPopoverSurface';