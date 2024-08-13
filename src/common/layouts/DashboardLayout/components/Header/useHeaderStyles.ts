import { makeStyles, mergeClasses, shorthands, tokens } from '@fluentui/react-components';

import type { HeaderStyles } from './Header.types';

const componentClassNames = {
    root: 'ngm-Header',
    actionBar: 'ngm-Header__actionBar'
};

const useRootStyles = makeStyles({
    root: {
        ...shorthands.padding('12px'),
        backgroundColor: tokens.colorNeutralBackground1,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
    }
});

const useActionBarStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '12px'
    }
});

/**
 * Apply styling to the Header based on the component state.
 */
export const useHeaderStyles = (): HeaderStyles => {
    const rootStyles = useRootStyles();
    const actionBarStyles = useActionBarStyles();
    
    return {
        root: mergeClasses(
            componentClassNames.root,
            rootStyles.root
        ),
        actionBar: mergeClasses(
            componentClassNames.actionBar,
            actionBarStyles.root
        )
    };
};