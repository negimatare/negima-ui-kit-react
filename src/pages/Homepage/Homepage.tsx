import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useOAuth2Context } from '@negima/react-utilities';
import { PageTemplate } from '@negima/react-components';
import { BoardFilled } from '@fluentui/react-icons';

export default function Homepage() {
    const {
        t: transl
    } = useTranslation();

    const {
        account
    } = useOAuth2Context();

    return (
        <PageTemplate
            heading={`${transl('homepage.heading')} ${account?.displayName} 👋`}
            caption={transl('homepage.caption')}
            icon={<BoardFilled />}
        >
            <React.Fragment />
        </PageTemplate>
    );
};