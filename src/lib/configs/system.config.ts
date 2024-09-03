export const APP_NAME = 'Negima UI Kit';
export const PKG_NAME = import.meta.env.VITE_PKG_NAME;
export const PKG_VERSION = import.meta.env.VITE_PKG_VERSION;

// ** VFX
export const VFX_SETTINGS = {
    // Generate palette from the following link: https://mycolor.space/
    BACKDROP_FILTER: 'linear-gradient(to right top, #2F1E4F, #783063, #BA4D65, #E97B5D, #FFB758, #F9F871)',
    VARIANT: import.meta.env.VITE_VFX_VARIANT
};

// ** MSAL OAUTH2
export const MSAL_SETTINGS = {
    AUTHORITY: import.meta.env.VITE_MSAL_AUTHORITY,
    CLIENT_ID: import.meta.env.VITE_MSAL_CLIENT_ID,
    SCOPES: [
        `api://${import.meta.env.VITE_MSAL_CLIENT_ID}/user_impersonation`
    ],
    GRAPH_API_SCOPES: [
        'User.Read'
    ],
    GRAPH_API_URL: 'https://graph.microsoft.com/v1.0'
};

// ** WEB API
export const WEB_API_SETTINGS = {
    WEB_API_URL: import.meta.env.VITE_WEB_API_URL
};