import * as React from 'react';
import moment from 'moment';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { PATHS_MAIN } from '@negima/react-configs';
import { useRouter } from '@negima/react-utilities';
import { Button } from '@fluentui/react-components';
import { FieldReadonly, Fieldset } from '@negima/react-components';

import type { CampaignViewProps } from './CampaignView.types';

/**
 * CampaignView component.
 */
export const CampaignView: React.FC<CampaignViewProps> = ({
    campaign
}) => {
    const {
        i18n,
        t: transl
    } = useTranslation();

    const {
        replace
    } = useRouter();

    if (!campaign) return null;

    return (
        <div className="tw:grid tw:grid-cols-6">
            <div className="tw:col-span-4 tw:col-start-2 tw:flex tw:flex-col tw:gap-6">
                <Fieldset
                    heading={transl('campaign.campaign-form.details-fieldset-heading')}
                    caption={transl('campaign.campaign-form.details-fieldset-caption')}
                >
                    <div className="tw:grid tw:grid-cols-1 tw:gap-6">
                        <FieldReadonly
                            label={transl('campaign.campaign-form.title-label')}
                            value={campaign.title}
                        />
                        <FieldReadonly
                            label={transl('campaign.campaign-form.sub-description-label')}
                            value={campaign.subDescription}
                        />
                    </div>
                </Fieldset>
                <Fieldset
                    heading={transl('campaign.campaign-form.properties-fieldset-heading')}
                    caption={transl('campaign.campaign-form.properties-fieldset-caption')}
                >
                    <div className="tw:grid tw:grid-cols-2 tw:gap-6">
                        <FieldReadonly
                            label={transl('campaign.campaign-form.resource-url-label')}
                            value={campaign.resourceUrl}
                        />
                        <FieldReadonly
                            label={transl('campaign.campaign-form.followup-url-label')}
                            value={campaign.followupUrl}
                        />
                        <FieldReadonly
                            label={transl('campaign.campaign-form.display-from-label')}
                            value={moment(campaign.displayFrom).locale(i18n.language).format('LL')}
                        />
                        <FieldReadonly
                            label={transl('campaign.campaign-form.display-to-label')}
                            value={moment(campaign.displayTo).locale(i18n.language).format('LL')}
                        />
                        <FieldReadonly
                            label={transl('campaign.campaign-form.daily-engagement-label')}
                            value={campaign.dailyEngagement}
                        />
                    </div>
                </Fieldset>

                <div className="tw:flex tw:justify-end tw:gap-6 tw:py-6">
                    <Button
                        appearance="secondary"
                        size="large"
                        onClick={() => { replace(PATHS_MAIN.campaign.root); }}
                    >
                        {transl('campaign.campaign-form.back-button-label')}
                    </Button>
                </div>
            </div>
        </div>
    );
};

CampaignView.displayName = 'CampaignView';