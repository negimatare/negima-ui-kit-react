import type { AuthenticationResult } from '@azure/msal-browser';
import type { ActionMap, OAuth2Account, OAuth2ContextValue } from '@negima/react-contexts';

export enum MsalOAuth2Types {
    init = 'INIT'
};

export type MsalOAuth2Payload = {
    [MsalOAuth2Types.init]: {
        inProgress: boolean;
        isAuthenticated: boolean;
        account: OAuth2Account;
    };
};

export type MsalOAuth2Actions = ActionMap<MsalOAuth2Payload>[keyof ActionMap<MsalOAuth2Payload>];

export type MsalOAuth2ContextValue = OAuth2ContextValue & {
    method: 'msal-react';
    acquireToken: (scopes: string[]) => Promise<AuthenticationResult>;
    signIn: VoidFunction;
    signOut: VoidFunction;
};