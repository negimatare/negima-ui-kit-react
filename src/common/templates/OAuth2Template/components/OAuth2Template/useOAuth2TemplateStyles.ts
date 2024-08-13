import { makeStyles, mergeClasses, shorthands, tokens } from '@fluentui/react-components';

import type { OAuth2TemplateStyles } from './OAuth2Template.types';

const componentClassNames = {
    root: 'ngm-OAuth2Template',
    children: 'ngm-OAuth2Template__children'
};

const useRootStyles = makeStyles({
    root: {
        backgroundColor: tokens.colorNeutralBackground1,
        position: 'relative',
        minHeight: '100vh',
        ['@media screen and (max-width: 1024px)']: {
            ...shorthands.padding('25px'),
            display: 'block'
        }
    }
});

const useChildrenStyles = makeStyles({
    root: {
        ...shorthands.margin('auto'),
        ...shorthands.padding('24px'),
        backgroundColor: tokens.colorNeutralBackground1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '48px',
        ['@media screen and (max-width: 1024px)']: {
            ...shorthands.borderRadius(tokens.borderRadiusMedium),
            boxShadow: tokens.shadow64,
            marginTop: '56px',
            maxWidth: '480px',
            position: 'relative'
        }
    }
});

/**
 * Apply styling to the OAuth2Template based on the component state.
 */
export const useOAuth2TemplateStyles = (): OAuth2TemplateStyles => {
    const rootStyles = useRootStyles();
    const childrenStyles = useChildrenStyles();

    return {
        root: mergeClasses(
            componentClassNames.root,
            rootStyles.root
        ),
        children: mergeClasses(
            componentClassNames.children,
            childrenStyles.root
        )
    };
};