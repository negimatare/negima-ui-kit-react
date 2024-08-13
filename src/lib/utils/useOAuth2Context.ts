import { useContext } from 'react';
import { OAuth2Context } from "@negima/react-contexts";

/**
 * TODO: useOAuth2Context
 */
export const useOAuth2Context = () => {
    const context = useContext(OAuth2Context);

    if (!context) throw new Error('OAuth2Context must be use inside OAuth2Provider');

    return context;
};