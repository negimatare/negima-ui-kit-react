import { useTranslation } from 'react-i18next';
import { PATHS_MAIN } from '@negima/react-configs';
import { useRouter } from '@negima/react-utilities';
import { Button } from '@fluentui/react-components';
import { CampaignGrid, DatetimeColumn, PageTemplate } from '@negima/react-components';
import { LayerDiagonalRegular } from '@fluentui/react-icons';

export default function CampaignList() {
    const {
        t: transl
    } = useTranslation();

    const {
        replace
    } = useRouter();

    return (
        <PageTemplate
            heading={transl('campaign.campaign-list.heading')}
            caption={transl('campaign.campaign-list.caption')}
            icon={<LayerDiagonalRegular />}
            items={[
                { name: transl('homepage.navigation-item'), href: PATHS_MAIN.root },
                { name: transl('campaign.campaign-list.navigation-item') }
            ]}
            action={(
                <Button
                    appearance="primary"
                    size="large"
                    onClick={() => { replace(PATHS_MAIN.campaign.new); }}
                >
                    {transl('campaign.campaign-list.new-button-label')}
                </Button>
            )}
        >
            <CampaignGrid
                columns={[
                    { id: 'title', label: transl('campaign.campaign-form.title-label'), minWidth: 150, maxWidth: 250 },
                    { id: 'type', label: transl('campaign.campaign-form.type-label'), minWidth: 150, maxWidth: 250 },
                    { id: 'dailyEngagement', label: transl('campaign.campaign-form.daily-engagement-label'), minWidth: 150, maxWidth: 250 },
                    {
                        id: 'displayFrom',
                        label: transl('campaign.campaign-form.display-from-label'),
                        minWidth: 150,
                        renderCell: (item: { displayFrom: string }) => <DatetimeColumn value={item.displayFrom} />
                    },
                    {
                        id: 'displayTo',
                        label: transl('campaign.campaign-form.display-to-label'),
                        minWidth: 150,
                        renderCell: (item: { displayTo: string }) => <DatetimeColumn value={item.displayTo} />
                    }
                ]}
            />
        </PageTemplate>
    );
};