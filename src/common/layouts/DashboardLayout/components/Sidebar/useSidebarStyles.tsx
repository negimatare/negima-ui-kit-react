import { makeStyles, mergeClasses, tokens } from '@fluentui/react-components';

import type { SidebarState, SidebarStyles } from './Sidebar.types';

const componentClassNames = {
    root: 'ngm-Sidebar',
    body: 'ngm-Sidebar__body',
    footer: 'ngm-Sidebar__footer'
};

const useRootStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        height: '100%',
        backgroundColor: tokens.colorNeutralBackground3,
        boxShadow: tokens.shadow16,
        transitionDuration: tokens.durationGentle,
        transitionProperty: 'width',
        transitionTimingFunction: tokens.curveEasyEase,
        width: '320px'
    },
    condensed: { width: '48px' }
});

const useBodyStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
    }
});

const useFooterStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    condensed: { flexDirection: 'column' }
});

/**
 * Apply styling to the Sidebar based on the component state.
 */
export const useSidebarStyles = (state: SidebarState): SidebarStyles => {
    const rootStyles = useRootStyles();
    const bodyStyles = useBodyStyles();
    const footerStyles = useFooterStyles();

    return {
        root: mergeClasses(
            componentClassNames.root,
            rootStyles.root,
            state.on && rootStyles.condensed
        ),
        body: mergeClasses(
            componentClassNames.body,
            bodyStyles.root
        ),
        footer: mergeClasses(
            componentClassNames.footer,
            footerStyles.root,
            state.on && footerStyles.condensed
        )
    };
};
