import { makeStyles, mergeClasses, tokens } from '@fluentui/react-components';

import type { LoadingButtonState, LoadingButtonStyles } from './LoadingButton.types';

const componentClassNames = {
    root: 'ngm-LoadingButton'
};

const useRootBaseStyles = makeStyles({
    root: {},
    loading: {
        backgroundColor: tokens.colorNeutralBackground1,
        border: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke1}`,
        color: tokens.colorNeutralForeground1,
        cursor: 'default',
        pointerEvents: 'none'
    }
});

/**
 * Apply styling to the LoadingButton based on the component transition state.
 */
export const useLoadingButtonStyles = (state: LoadingButtonState): LoadingButtonStyles => {
    const rootBaseStyles = useRootBaseStyles();

    return {
        root: mergeClasses(
            componentClassNames.root,
            rootBaseStyles.root,
            (state.isLoading) && rootBaseStyles.loading,
        ),
    };
};