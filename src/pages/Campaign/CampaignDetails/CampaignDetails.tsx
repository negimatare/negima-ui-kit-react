import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { PATHS_MAIN } from '@negima/react-configs';
import {
    useCampaign,
    CampaignBadgeStatus,
    CampaignView,
    FieldsetSkeleton,
    PageTemplate,
} from '@negima/react-components';
import { LayerDiagonalFilled } from '@fluentui/react-icons';

export default function CampaignDetails() {
    const {
        t: transl
    } = useTranslation();

    const {
        getCampaign,
        campaign,
        campaignLoading,
    } = useCampaign();

    const { id } = useParams();

    React.useEffect(() => {
        if (!!id) getCampaign({ id: Number(id) });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return (
        <PageTemplate
            heading={`${transl('campaign.campaign-details.heading')}: ${campaign?.title}`}
            caption={transl('campaign.campaign-details.caption')}
            icon={<LayerDiagonalFilled />}
            items={[
                { name: transl('homepage.navigation-item'), href: PATHS_MAIN.root },
                { name: transl('campaign.campaign-list.navigation-item'), href: PATHS_MAIN.campaign.list },
                { name: campaign?.title || transl('campaign.campaign-details.heading') },
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
                : <CampaignView campaign={campaign} />
            }
        </PageTemplate>
    );
};