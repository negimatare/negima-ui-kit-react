import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { PATHS_MAIN } from '@negima/react-configs';
import { useRouter } from '@negima/react-utilities';
import { Grid, useCampaign } from '@negima/react-components';

import type { CampaignGridProps } from './CampaignGrid.types';

/**
 * CampaignGrid component.
 */
export const CampaignGrid: React.FC<CampaignGridProps> = ({
    columns
}) => {
    const {
        t: transl
    } = useTranslation();

    const {
        replace
    } = useRouter();

    const {
        listCampaigns,
        campaigns,
        campaignsLoading
    } = useCampaign();

    React.useEffect(() => {
        listCampaigns({});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Grid
            items={campaigns.items ?? []}
            columns={columns}
            loading={campaignsLoading}
            renderActions={(data) => {
                replace(PATHS_MAIN.campaign.edit(`${data.id}`))
            }}
            emptyContentLabel={transl('campaign.campaign-grid.empty-content-heading')}
        />
    );
};

CampaignGrid.displayName = 'CampaignGrid';