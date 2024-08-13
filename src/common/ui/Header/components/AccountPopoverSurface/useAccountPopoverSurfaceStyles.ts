import { makeStyles, mergeClasses, shorthands } from '@fluentui/react-components';

import type { AccountPopoverSurfaceStyles } from './AccountPopoverSurface.types';

const componentClassNames = {
    root: 'ngm-AccountPopoverSurface',
    body: 'ngm-AccountPopoverSurface__body',
    footer: 'ngm-AccountPopoverSurface__footer',
    signoutButton: 'ngm-AccountPopoverSurface__signoutButton',
};

const useRootStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    }
});

const useBodyStyles = makeStyles({
    root: {
        ...shorthands.padding('12px'),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '12px',
    }
});

const useFooterStyles = makeStyles({
    root: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '12px'
    }
});

const useSignoutButtonStyles = makeStyles({
    root: {
        ...shorthands.border('0px'),
        ...shorthands.borderRadius('0px'),
        ...shorthands.padding('12px')
    }
});

/**
 * Apply styling to the AccountPopoverSurface based on the component state.
 */
export const useAccountPopoverSurfaceStyles = (): AccountPopoverSurfaceStyles => {
    const rootStyles = useRootStyles();
    const bodyStyles = useBodyStyles();
    const footerStyles = useFooterStyles();
    const signoutButtonStyles = useSignoutButtonStyles();

    return {
        root: mergeClasses(
            componentClassNames.root,
            rootStyles.root
        ),
        body: mergeClasses(
            componentClassNames.body,
            bodyStyles.root
        ),
        footer: mergeClasses(
            componentClassNames.footer,
            footerStyles.root
        ),
        signoutButton: mergeClasses(
            componentClassNames.signoutButton,
            signoutButtonStyles.root
        )
    };
};