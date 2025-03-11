import { makeStyles, mergeClasses, tokens } from '@fluentui/react-components';

import type { HeaderStyles } from './Header.types';

const componentClassNames = {
    root: 'ngm-Header',
    icon: 'ngm-Header__icon',
    body: 'ngm-Header__body',
};

const useRootStyles = makeStyles({
    root: {
        backgroundColor: tokens.colorNeutralBackground1,
        display: 'flex',
        flexDirection: 'row',
        gap: '12px'
    }
});

const useIconStyles = makeStyles({
    root: {
        color: tokens.colorBrandBackground,
        fontSize: '52px'
    }
});

const useBodyStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
    }
});

/**
 * Apply styling to the Header based on the component state.
 */
export const useHeaderStyles = (): HeaderStyles => {
    const rootStyles = useRootStyles();
    const iconStyles = useIconStyles();
    const bodyStyles = useBodyStyles();

    return {
        root: mergeClasses(
            componentClassNames.root,
            rootStyles.root
        ),
        icon: mergeClasses(
            componentClassNames.icon,
            iconStyles.root
        ),
        body: mergeClasses(
            componentClassNames.body,
            bodyStyles.root
        )
    };
};