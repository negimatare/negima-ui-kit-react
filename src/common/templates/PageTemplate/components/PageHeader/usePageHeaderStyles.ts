import { makeStyles, mergeClasses, shorthands, tokens } from '@fluentui/react-components';

import type { PageHeaderStyles } from './PageHeader.types';

const componentClassNames = {
    root: 'ngm-PageHeader',
    icon: 'ngm-PageHeader__icon',
    body: 'ngm-PageHeader__body',
};

const useRootStyles = makeStyles({
    root: {
        ...shorthands.padding('12px', '24px'),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '12px',
        backgroundColor: tokens.colorNeutralBackground1
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
 * Apply styling to the PageHeader based on the component state.
 */
export const usePageHeaderStyles = (): PageHeaderStyles => {
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