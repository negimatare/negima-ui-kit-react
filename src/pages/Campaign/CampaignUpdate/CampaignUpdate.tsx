import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Campaign } from '@negima/react-apis';
import { PATHS_MAIN } from '@negima/react-configs';
import { useRouter } from '@negima/react-utilities';
import {
    useCampaign,
    FieldsetSkeleton,
    PageTemplate,
    CampaignForm,
    CampaignBadgeStatus,
} from '@negima/react-components';
import { LayerDiagonalSparkleFilled } from '@fluentui/react-icons';

export default function CampaignUpdate() {
    const {
        t: transl
    } = useTranslation();

    const {
        getCampaign,
        campaign,
        campaignLoading,
        updateCampaign,
        isUpdating
    } = useCampaign();

    const {
        replace
    } = useRouter();

    const { id } = useParams();

    React.useEffect(() => {
        if (!!id) getCampaign({ id: Number(id) });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const onSubmit = (campaign: Campaign) => {
        updateCampaign({
            id: Number(id),
            campaign,
            onSuccess: () => { replace(PATHS_MAIN.campaign.root); }
        });
    };

    return (
        <PageTemplate
            heading={transl('campaign.campaign-update.heading')}
            caption={transl('campaign.campaign-update.caption')}
            icon={<LayerDiagonalSparkleFilled />}
            items={[
                { name: transl('homepage.navigation-item'), href: PATHS_MAIN.root },
                { name: transl('campaign.campaign-list.navigation-item'), href: PATHS_MAIN.campaign.list },
                { name: campaign?.title || transl('campaign.campaign-update.heading') },
            ]}
            action={campaign && (
                <CampaignBadgeStatus
                    size="extra-large"
                    displayFrom={campaign.displayFrom}
                    displayTo={campaign.displayTo}
                />
            )}
        >
            {campaignLoading
                ? <FieldsetSkeleton />
                : <CampaignForm campaign={campaign} isEdit isLoading={isUpdating} onSubmit={onSubmit} />
            }
        </PageTemplate>
    );
};