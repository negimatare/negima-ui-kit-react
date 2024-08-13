import * as React from 'react';
import {
    AuthenticationResult,
    EventMessage,
    EventType,
    PublicClientApplication
} from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import type { OAuth2ProviderProps } from '@negima/react-contexts';
import { MSAL_SETTINGS, PATHS_AUTH } from '@negima/react-configs';

import { MsalOAuth2Provider as OAuth2Provider } from './MsalOAuth2Context';

/**
 * @internal
 * Account selection logic is app dependent. Adjust as needed for different use cases.
 */
const pca = new PublicClientApplication({
    auth: {
        authority: MSAL_SETTINGS.AUTHORITY,
        clientId: MSAL_SETTINGS.CLIENT_ID,
        navigateToLoginRequestUrl: true,
        redirectUri: `${window.location.origin}${PATHS_AUTH.oauth2}`,
        postLogoutRedirectUri: PATHS_AUTH.oauth2
    }
});

const accounts = pca.getAllAccounts();

if (accounts.length > 0) pca.setActiveAccount(accounts[0]);

pca.addEventCallback((event: EventMessage) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
        const payload = event.payload as AuthenticationResult;
        pca.setActiveAccount(payload.account);
    }
});

/**
 * @internal
 * MsalOAuth2Provider Provider wrapper.
 */
export const MsalOAuth2Provider: React.FC<OAuth2ProviderProps> = ({
    children
}) => (
    <MsalProvider instance={pca}>
        <OAuth2Provider>
            {children}
        </OAuth2Provider>
    </MsalProvider>
);

MsalOAuth2Provider.displayName = 'MsalOAuth2Provider';