import { Campaign } from '@negima/react-apis';

/**
 * CampaignForm Props
 */
export type CampaignFormProps = {
    campaign?: Campaign | undefined;
    isEdit?: boolean | undefined;
    isLoading?: boolean | undefined;
    onSubmit: (campaign: Campaign) => void;
};

/**
 * FormValue Props
 */
export type FormValueProps = Partial<Campaign> & {
    fromDate?: Date | null | undefined;
    toDate?: Date | null | undefined;
};