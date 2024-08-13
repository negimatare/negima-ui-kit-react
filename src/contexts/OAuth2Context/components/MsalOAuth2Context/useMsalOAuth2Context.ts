import { AuthenticationResult } from '@azure/msal-browser';
import { MsalGraphServiceClient } from '@negima/react-services';

export const useMsalOAuth2Context = () => {
    const getMe = async (authentication: AuthenticationResult) => {
        const serviceClient = MsalGraphServiceClient({ accessToken: authentication.accessToken });

        const {
            data
        } = await serviceClient.get('/me?$select=id,companyName,displayName,mail,jobTitle');

        return data;
    };

    const getMePhoto = async (authentication: AuthenticationResult) => {
        const serviceClient = MsalGraphServiceClient({ accessToken: authentication.accessToken });

        const {
            data
        } = await serviceClient.get('/me/photo/$value', { responseType: 'blob' });

        return data;
    };

    return {
        getMe,
        getMePhoto
    };
};