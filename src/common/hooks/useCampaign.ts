import * as React from 'react';
import { useTranslation } from 'react-i18next';
import type { Campaign, CampaignCollectionResult } from '@negima/react-apis';
import { CampaignApiService } from '@negima/react-services';
import { useOAuth2Context } from '@negima/react-utilities';
import type { HookCallbackParams } from '@negima/react-components';

/**
 * TODO: useCampaign
 */
export const useCampaign = () => {
    const {
        i18n
    } = useTranslation();

    const {
        acquireToken
    } = useOAuth2Context();

    type ListParams = {
        skip?: number | undefined;
        take?: number | undefined;
    }

    const [campaigns, setCampaigns] = React.useState<CampaignCollectionResult>({ count: 0, items: [] });
    const [campaignsLoading, setCampaignsLoading] = React.useState<boolean>(false);

    const listCampaigns = async (params: ListParams) => {
        setCampaignsLoading(true);

        const authenticationResult = await acquireToken();
        const serviceClient = CampaignApiService({
            accessToken: authenticationResult.accessToken,
            contentLanguage: i18n.language
        });

        serviceClient.listCampaigns(params.skip, params.take)
            .then((response) => {
                setCampaigns(response.data)
            })
            .catch((reason) => {
                console.error(reason);
            })
            .finally(() => {
                setCampaignsLoading(false);
            });
    };

    type CreateParams = Partial<HookCallbackParams> & {
        campaign: Campaign;
    }

    const [isCreating, setIsCreating] = React.useState<boolean>(false);

    const createCampaign = async (params: CreateParams) => {
        setIsCreating(true);

        const authenticationResult = await acquireToken();
        const serviceClient = CampaignApiService({
            accessToken: authenticationResult.accessToken,
            contentLanguage: i18n.language
        });

        serviceClient.createCampaign(params.campaign)
            .then((_) => {
                params.onSuccess && params.onSuccess();
            })
            .catch((reason) => {
                console.error(reason);
                params.onError && params.onError(reason);
            })
            .finally(() => {
                setIsCreating(false);
                params.onAlways && params.onAlways();
            });
    };

    type GetParams = {
        id: number;
    }

    const [campaign, setCampaign] = React.useState<Campaign>();
    const [campaignLoading, setCampaignLoading] = React.useState<boolean>(false);

    const getCampaign = async (params: GetParams) => {
        setCampaignLoading(true);

        const authenticationResult = await acquireToken();
        const serviceClient = CampaignApiService({
            accessToken: authenticationResult.accessToken,
            contentLanguage: i18n.language
        });

        serviceClient.getCampaign(params.id)
            .then((response) => {
                setCampaign(response.data)
            })
            .catch((reason) => {
                console.error(reason);
            })
            .finally(() => {
                setCampaignLoading(false);
            });
    };

    type UpdateParams = Partial<HookCallbackParams> & {
        id: number;
        campaign: Campaign;
    }

    const [isUpdating, setIsUpdating] = React.useState<boolean>(false);

    const updateCampaign = async (params: UpdateParams) => {
        setIsUpdating(true);

        const authenticationResult = await acquireToken();
        const serviceClient = CampaignApiService({
            accessToken: authenticationResult.accessToken,
            contentLanguage: i18n.language
        });

        serviceClient.updateCampaign(params.id, params.campaign)
            .then((_) => {
                params.onSuccess && params.onSuccess();
            })
            .catch((reason) => {
                console.error(reason);
                params.onError && params.onError(reason);
            })
            .finally(() => {
                setIsUpdating(false);
                params.onAlways && params.onAlways();
            });
    };

    type DeleteParams = Partial<HookCallbackParams> & {
        id: number;
    }

    const [isDeleting, setIsDeleting] = React.useState<boolean>(false);

    const deleteCampaign = async (params: DeleteParams) => {
        setIsDeleting(true);

        const authenticationResult = await acquireToken();
        const serviceClient = CampaignApiService({
            accessToken: authenticationResult.accessToken,
            contentLanguage: i18n.language
        });

        serviceClient.deleteCampaign(params.id)
            .then((_) => {
                params.onSuccess && params.onSuccess();
            })
            .catch((reason) => {
                console.error(reason);
                params.onError && params.onError(reason);
            })
            .finally(() => {
                setIsDeleting(false);
                params.onAlways && params.onAlways();
            });
    };

    return {
        listCampaigns,
        campaigns,
        campaignsLoading,
        createCampaign,
        isCreating,
        getCampaign,
        campaign,
        campaignLoading,
        updateCampaign,
        isUpdating,
        deleteCampaign,
        isDeleting
    };
};