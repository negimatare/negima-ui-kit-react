import * as React from 'react';
import moment from 'moment';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next';
import { CampaignType } from '@negima/react-apis';
import { Button } from '@fluentui/react-components';
import {
    Fieldset,
    HFDatePicker,
    HFInput,
    HFProvider,
    HFRadioGroup,
    HFSlider,
    HFTextarea,
    LoadingButton
} from '@negima/react-components';

import type { CampaignFormProps, FormValueProps } from './CampaignForm.types';
import { CampaignPreview } from '../CampaignPreview/CampaignPreview';

/**
 * CampaignForm component.
 */
export const CampaignForm: React.FC<CampaignFormProps> = ({
    campaign,
    isEdit = false,
    isLoading = false,
    onSubmit
}) => {
    const {
        t: transl
    } = useTranslation();

    const validationSchema = z.object({
        title: z.string().trim().nonempty({ message: transl('campaign.campaign-form.title-required') }),
        type: z.nativeEnum(CampaignType),
        resourceUrl: z.string().url({ message: transl('campaign.campaign-form.resource-url-required') }),
        followupUrl: z.string().optional(),
        dailyEngagement: z.number().positive({ message: transl('campaign.campaign-form.daily-engagement-required') }),
        fromDate: z.date({ message: transl('campaign.campaign-form.display-from-required') }),
        toDate: z.date({ message: transl('campaign.campaign-form.display-to-required') }),
    }).superRefine((val, ctx) => {
        if (val.type === CampaignType.Image && !val.followupUrl) {
            ctx.addIssue({
                path: ['followupUrl'],
                code: z.ZodIssueCode.custom,
                message: transl('campaign.campaign-form.followup-url-required'),
            });
        }
    });

    const defaultValues = React.useMemo(
        () => ({
            title: campaign?.title || '',
            subDescription: campaign?.subDescription || '',
            type: campaign?.type || CampaignType.Image,
            resourceUrl: campaign?.resourceUrl || '',
            followupUrl: campaign?.followupUrl || '',
            dailyEngagement: campaign?.dailyEngagement || 1,
            fromDate: !!campaign?.displayFrom
                ? new Date(campaign?.displayFrom)
                : null,
            toDate: !!campaign?.displayTo
                ? new Date(campaign?.displayTo)
                : null,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [campaign]
    );

    const methods = useForm<FormValueProps>({
        resolver: zodResolver(validationSchema),
        defaultValues
    });

    const {
        handleSubmit,
        reset,
        watch,
        formState: { isSubmitting },
    } = methods;

    const formValues = watch();

    React.useEffect(() => {
        if (isEdit && campaign) reset(defaultValues);
        if (!isEdit) reset(defaultValues);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdit, campaign]);

    const __onSubmit = async ({ fromDate, toDate, ...shards }: FormValueProps) => {
        onSubmit({
            ...campaign,
            ...shards,
            title: shards.title!,
            type: shards.type!,
            resourceUrl: shards.resourceUrl!,
            followupUrl: shards.followupUrl || undefined,
            dailyEngagement: shards.dailyEngagement!,
            displayFrom: moment(fromDate)
                .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
                .toISOString(),
            displayTo: moment(toDate)
                .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
                .toISOString(),
        });
    };

    const [isPreviewVisible, setPreviewVisible] = React.useState<boolean>(false);

    const submitting = isLoading || isSubmitting;

    return (
        <HFProvider methods={methods} onSubmit={handleSubmit(__onSubmit)}>
            <div className="tw:grid tw:grid-cols-6">
                <div className="tw:col-span-4 tw:col-start-2 tw:flex tw:flex-col tw:gap-6">
                    <Fieldset
                        heading={transl('campaign.campaign-form.details-fieldset-heading')}
                        caption={transl('campaign.campaign-form.details-fieldset-caption')}
                    >
                        <HFInput
                            name="title"
                            label={transl('campaign.campaign-form.title-label')}
                            placeholder={transl('campaign.campaign-form.title-placeholder')}
                            size="large"
                            required
                            disabled={submitting}
                        />
                        <HFTextarea
                            name="subDescription"
                            label={transl('campaign.campaign-form.sub-description-label')}
                            placeholder={transl('campaign.campaign-form.sub-description-placeholder')}
                            size="large"
                            disabled={submitting}
                        />
                    </Fieldset>
                    <Fieldset
                        heading={transl('campaign.campaign-form.properties-fieldset-heading')}
                        caption={transl('campaign.campaign-form.properties-fieldset-caption')}
                    >
                        <HFRadioGroup
                            name="type"
                            label={transl('campaign.campaign-form.type-label')}
                            required
                            disabled={submitting}
                            options={[
                                { label: 'Image', value: CampaignType.Image },
                                { label: 'Video', value: CampaignType.Video },
                            ]}
                            layout="horizontal"
                        />

                        <div className="tw:grid tw:grid-cols-2 tw:gap-6">
                            <HFInput
                                name="resourceUrl"
                                label={transl('campaign.campaign-form.resource-url-label')}
                                placeholder={transl('campaign.campaign-form.resource-url-placeholder')}
                                size="large"
                                required
                                disabled={submitting}
                                className="tw:auto-rows-min"
                            />
                            <HFInput
                                name="followupUrl"
                                label={transl('campaign.campaign-form.followup-url-label')}
                                placeholder={transl('campaign.campaign-form.followup-url-placeholder')}
                                size="large"
                                disabled={(
                                    formValues.type === CampaignType.Video ||
                                    submitting
                                )}
                                className="tw:auto-rows-min"
                            />
                            <HFDatePicker
                                name="fromDate"
                                label={transl('campaign.campaign-form.display-from-label')}
                                placeholder={transl('campaign.campaign-form.display-from-placeholder')}
                                size="large"
                                required
                                disabled={submitting}
                                className="tw:auto-rows-min"
                            />
                            <HFDatePicker
                                name="toDate"
                                label={transl('campaign.campaign-form.display-to-label')}
                                placeholder={transl('campaign.campaign-form.display-to-placeholder')}
                                size="large"
                                required
                                disabled={submitting}
                                className="tw:auto-rows-min"
                            />
                        </div>

                        <HFSlider
                            name="dailyEngagement"
                            label={transl('campaign.campaign-form.daily-engagement-label')}
                            disabled={submitting}
                            step={1} min={0} max={10}
                        />
                    </Fieldset>

                    <div className="tw:flex tw:justify-end tw:gap-6 tw:py-6">
                        <Button
                            appearance="secondary"
                            size="large"
                            disabled={submitting}
                            onClick={() => setPreviewVisible(true)}
                        >
                            {transl('campaign.campaign-form.preview-button-label')}
                        </Button>
                        <LoadingButton
                            type="submit"
                            appearance="primary"
                            size="large"
                            isLoading={submitting}
                        >
                            {!isEdit
                                ? transl('campaign.campaign-form.create-button-label')
                                : transl('campaign.campaign-form.update-button-label')
                            }
                        </LoadingButton>
                    </div>
                </div>
            </div>

            <CampaignPreview
                type={formValues.type || CampaignType.Image}
                resourceUrl={formValues.resourceUrl}
                followupUrl={formValues.followupUrl || '#'}
                open={isPreviewVisible}
                onChange={() => setPreviewVisible(!isPreviewVisible)}
            />
        </HFProvider>
    );
};

CampaignForm.displayName = 'CampaignForm';