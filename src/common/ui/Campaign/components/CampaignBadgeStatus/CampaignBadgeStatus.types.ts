import { BadgeProps } from '@fluentui/react-components';

/**
 * CampaignBadgeStatus Props
 */
export type CampaignBadgeStatusProps = Pick<BadgeProps, "size"> & {
    displayFrom?: string | undefined;
    displayTo?: string | undefined;
};