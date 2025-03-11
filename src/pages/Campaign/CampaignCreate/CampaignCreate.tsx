import { useTranslation } from 'react-i18next';
import { Campaign } from '@negima/react-apis';
import { PATHS_MAIN } from '@negima/react-configs';
import { useRouter } from '@negima/react-utilities';
import {
    useCampaign,
    PageTemplate,
    CampaignForm,
} from '@negima/react-components';
import { LayerDiagonalAddFilled } from '@fluentui/react-icons';

export default function CampaignCreate() {
    const {
        t: transl
    } = useTranslation();

    const {
        createCampaign,
        isCreating
    } = useCampaign();

    const {
        replace
    } = useRouter();

    const onSubmit = (campaign: Campaign) => {
        createCampaign({
            campaign,
            onSuccess: () => { replace(PATHS_MAIN.campaign.root); }
        });
    };

    return (
        <PageTemplate
            heading={transl('campaign.campaign-create.heading')}
            caption={transl('campaign.campaign-create.caption')}
            icon={<LayerDiagonalAddFilled />}
            items={[
                { name: transl('homepage.navigation-item'), href: PATHS_MAIN.root },
                { name: transl('campaign.campaign-list.navigation-item'), href: PATHS_MAIN.campaign.list },
                { name: transl('campaign.campaign-create.heading') },
            ]}
        >
            <CampaignForm isLoading={isCreating} onSubmit={onSubmit} />
        </PageTemplate>
    );
};