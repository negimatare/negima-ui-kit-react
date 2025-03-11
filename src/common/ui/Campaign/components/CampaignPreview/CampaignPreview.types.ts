import type { OverlayDrawerProps } from '@fluentui/react-drawer';
import type { CampaignType } from '@negima/react-apis';

/**
 * CampaignPreview Props
 */
export type CampaignPreviewProps = Pick<OverlayDrawerProps, "open"> & {
    type: CampaignType;
    resourceUrl?: string | undefined;
    followupUrl?: string | undefined;
    onChange: VoidFunction;
};