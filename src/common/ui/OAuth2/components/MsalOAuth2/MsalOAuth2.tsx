import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { bundleIcon, PersonLockFilled, PersonLockRegular } from '@fluentui/react-icons';
import { Button, Spinner, Title3 } from '@fluentui/react-components';
import { useOAuth2Context } from '@negima/react-utilities';

const PersonLockIcon = bundleIcon(PersonLockFilled, PersonLockRegular);

/**
 * MsalOAuth2 authentication component.
 */
export const MsalOAuth2: React.FC = () => {
    const {
        inProgress,
        signIn
    } = useOAuth2Context();

    const { t: transl } = useTranslation();

    return (
        <div className="t-flex t-flex-col t-gap-6 t-items-center">
            <Title3>{transl('oauth2.heading')}</Title3>

            {!inProgress
                ?
                <Button
                    appearance="primary"
                    icon={<PersonLockIcon />}
                    size="large"
                    onClick={signIn}
                >
                    {transl('oauth2.loading-button-label')}
                </Button>
                :
                <Spinner
                    appearance="primary"
                    label={transl('oauth2.loading-progress-label')}
                    labelPosition="below"
                    size="huge"
                />
            }
        </div>
    );
};

MsalOAuth2.displayName = 'MsalOAuth2';