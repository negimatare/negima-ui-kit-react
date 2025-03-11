import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { CampaignType } from '@negima/react-apis';
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerHeaderTitle
} from '@fluentui/react-components';
import { EmptyContent } from '@negima/react-components';

import type { CampaignPreviewProps } from './CampaignPreview.types';

/**
 * CampaignPreview component.
 */
export const CampaignPreview: React.FC<CampaignPreviewProps> = ({
    type,
    resourceUrl = undefined,
    followupUrl = undefined,
    open = false,
    onChange
}) => {
    const {
        t: transl
    } = useTranslation();

    const composeVideoUrl = () =>
        type === CampaignType.Video && !!resourceUrl
            ? `https://www.youtube.com/embed/${resourceUrl.split("?v=")[1]}?controls=0`
            : resourceUrl;

    return (
        <Drawer
            size="full"
            position="start"
            open={open}
            onOpenChange={onChange}
        >
            <DrawerHeader>
                <DrawerHeaderTitle
                    action={
                        <Button
                            appearance="secondary"
                            size="large"
                            aria-label={transl('campaign.campaign-preview.cancel-button-label')}
                            onClick={onChange}
                        >
                            {transl('campaign.campaign-preview.cancel-button-label')}
                        </Button>
                    }
                >
                    {transl('campaign.campaign-preview.heading')}
                </DrawerHeaderTitle>
            </DrawerHeader>
            <DrawerBody>
                <div className="tw:grid tw:grid-cols-6">
                    <div className="tw:col-span-4 tw:col-start-2 tw:p-6">
                        {!!resourceUrl
                            ?
                            <div className="tw:rounded-md tw:shadow-xl tw:overflow-hidden">
                                {type === CampaignType.Image
                                    ?
                                    <a href={followupUrl || '#'} target="_blank">
                                        <img src={resourceUrl} className="tw:w-full" />
                                    </a>
                                    :
                                    <object data={composeVideoUrl()} className="tw:w-full tw:h-[512px]" />
                                }
                            </div>
                            :
                            <EmptyContent
                                heading={transl('campaign.campaign-preview.empty-content-heading')}
                                caption={transl('campaign.campaign-preview.empty-content-caption')}
                            />
                        }
                    </div>
                </div>
            </DrawerBody>
        </Drawer>
    );
};

CampaignPreview.displayName = 'CampaignPreview';