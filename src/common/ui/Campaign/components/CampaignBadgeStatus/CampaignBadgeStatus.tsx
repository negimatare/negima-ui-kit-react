import * as React from 'react';
import moment from 'moment';
import { Badge } from '@fluentui/react-components';
import {
    CheckmarkCircleRegular,
    DismissCircleRegular,
    SubtractCircleRegular
} from '@fluentui/react-icons';

import type { CampaignBadgeStatusProps } from './CampaignBadgeStatus.types';

/**
 * CampaignBadgeStatus component.
 */
export const CampaignBadgeStatus: React.FC<CampaignBadgeStatusProps> = ({
    displayFrom = undefined,
    displayTo = undefined,
    size
}) => {
    if (moment().isBefore(displayFrom)) {
        return (
            <Badge
                appearance="tint"
                color='warning'
                icon={<SubtractCircleRegular />}
                size={size}
                shape="rounded"
            >
                Pending
            </Badge>
        );
    }
    if (moment().isAfter(displayTo)) {
        return (
            <Badge
                appearance="tint"
                color='danger'
                icon={<DismissCircleRegular />}
                size={size}
                shape="rounded"
            >
                Expired
            </Badge>
        );
    }

    return (
        <Badge
            appearance="tint"
            color='success'
            icon={<CheckmarkCircleRegular />}
            size={size}
            shape="rounded"
        >
            Active
        </Badge>
    );
};

CampaignBadgeStatus.displayName = 'CampaignBadgeStatus';