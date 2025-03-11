import * as React from 'react';
import { Button, Spinner } from '@fluentui/react-components';

import type { LoadingButtonProps } from './LoadingButton.types';
import { useLoadingButtonStyles } from './useLoadingButtonStyles';

/**
 * LoadingButton component.
 */
export const LoadingButton: React.FC<LoadingButtonProps> = ({
    isLoading = false,
    children,
    ...shards
}) => {
    const styles = useLoadingButtonStyles({ isLoading });

    return (
        <Button
            {...shards}
            className={`${styles.root} ${shards.className}`}
            disabledFocusable={isLoading}
            icon={isLoading ? <Spinner size="tiny" /> : shards.icon}
        >
            {children}
        </Button>
    );
};

LoadingButton.displayName = 'LoadingButton';