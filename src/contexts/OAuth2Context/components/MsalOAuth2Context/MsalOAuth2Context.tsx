import * as React from 'react';
import { InteractionStatus } from '@azure/msal-browser';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { MSAL_SETTINGS } from '@negima/react-configs';
import type { OAuth2ContextValue, OAuth2ProviderProps } from '@negima/react-contexts';

import type { MsalOAuth2Actions, MsalOAuth2ContextValue } from './MsalOAuth2Context.types';
import { MsalOAuth2Types } from './MsalOAuth2Context.types';
import { useMsalOAuth2Context } from './useMsalOAuth2Context';

/**
 * @internal
 */
const defaultContextValue: OAuth2ContextValue = {
    inProgress: false,
    isAuthenticated: false,
    isInitialized: false,
    account: null
};

/**
 * @internal
 */
const oauthReducer = (state: OAuth2ContextValue, action: MsalOAuth2Actions) => {
    if (action.type === MsalOAuth2Types.init) {
        const {
            account,
            inProgress,
            isAuthenticated
        } = action.payload;

        return {
            ...state,
            inProgress,
            isAuthenticated,
            isInitialized: true,
            account
        };
    }

    return state;
};

/**
 * @internal
 * Contexts should default to undefined
 */
export const MsalOAuth2Context: React.Context<MsalOAuth2ContextValue | undefined> =
    React.createContext<MsalOAuth2ContextValue | undefined>(undefined);

/**
 * @internal
 */
export const MsalOAuth2Provider: React.FC<OAuth2ProviderProps> = ({
    children
}) => {
    const {
        inProgress,
        instance
    } = useMsal();

    const {
        getMe,
        getMePhoto
    } = useMsalOAuth2Context();

    const [state, dispatch] = React.useReducer(oauthReducer, defaultContextValue);

    const acquireToken = (scopes: string[]) => {
        const activeAccount = instance.getActiveAccount();

        if (!activeAccount) {
            throw Error('No active account! Verify a user has been signed in and setActiveAccount has been called.');
        }

        return instance.acquireTokenSilent({
            scopes,
            account: activeAccount
        });
    };

    const signIn = () => instance.loginRedirect({ scopes: MSAL_SETTINGS.SCOPES });

    const signOut = () => instance.logoutRedirect();

    const initAccount = async () => {
        const authenticationResult = await acquireToken(MSAL_SETTINGS.GRAPH_API_SCOPES);
        const accountInfo = await getMe(authenticationResult);
        const photo = await getMePhoto(authenticationResult);

        const windowURL = window.URL || window.webkitURL;

        dispatch({
            type: MsalOAuth2Types.init,
            payload: {
                account: {
                    ...accountInfo,
                    photo: windowURL.createObjectURL(photo)
                },
                inProgress: inProgress !== InteractionStatus.None,
                isAuthenticated: true
            }
        });
    }

    const isAuthenticated = useIsAuthenticated();

    React.useEffect(() => {
        if (isAuthenticated && inProgress === InteractionStatus.None) {
            initAccount();
        }
        else {
            dispatch({
                type: MsalOAuth2Types.init,
                payload: {
                    account: null,
                    inProgress: inProgress !== InteractionStatus.None,
                    isAuthenticated: false
                }
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated, inProgress]);

    return (
        <MsalOAuth2Context.Provider value={{
            ...state,
            method: 'msal-react',
            acquireToken,
            signIn,
            signOut
        }}>

            {children}
        </MsalOAuth2Context.Provider>
    );
};

MsalOAuth2Provider.displayName = 'MsalOAuth2Provider';