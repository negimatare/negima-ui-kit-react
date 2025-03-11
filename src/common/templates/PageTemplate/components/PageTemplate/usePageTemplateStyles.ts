import { makeStyles, mergeClasses, shorthands, tokens } from '@fluentui/react-components';

import type { PageTemplateStyles } from './PageTemplate.types';

const componentClassNames = {
    root: 'ngm-PageTemplate',
    body: 'ngm-PageTemplate__body'
};

const useRootStyles = makeStyles({
    root: {
        ...shorthands.padding('12px', '24px'),
        backgroundColor: tokens.colorNeutralBackground1,
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        gap: '12px',
    }
});

const useBodyStyles = makeStyles({
    root: {
        flexGrow: 1,
        overflowY: 'auto',
        paddingTop: '12px'
    }
});

/**
 * Apply styling to the PageTemplate based on the component state.
 */
export const usePageTemplateStyles = (): PageTemplateStyles => {
    const rootStyles = useRootStyles();
    const bodyStyles = useBodyStyles();

    return {
        root: mergeClasses(
            componentClassNames.root,
            rootStyles.root
        ),
        body: mergeClasses(
            componentClassNames.body,
            bodyStyles.root
        )
    };
};