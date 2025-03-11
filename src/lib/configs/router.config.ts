const ROOT_AUTH = '/oauth2';
const ROOT_MAIN = '/d';

// **  AUTH PATHS
export const PATHS_AUTH = {
    oauth2: `${ROOT_AUTH}/authorize`
};

// **  MAIN PATHS
export const PATHS_MAIN = {
    root: ROOT_MAIN,
    campaign: {
        root: `${ROOT_MAIN}/campaigns`,
        list: `${ROOT_MAIN}/campaigns/list`,
        view: (id: string) => `${ROOT_MAIN}/campaigns/${id}`,
        edit: (id: string) => `${ROOT_MAIN}/campaigns/${id}/edit`,
        new: `${ROOT_MAIN}/campaigns/new`,
    },
    settings: `${ROOT_MAIN}/settings`
};