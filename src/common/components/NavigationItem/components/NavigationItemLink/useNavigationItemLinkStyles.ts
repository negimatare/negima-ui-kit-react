import { makeStyles, mergeClasses, shorthands, tokens } from '@fluentui/react-components';
import type { NavigationItemLinkState, NavigationItemLinkStyles } from './NavigationItemLink.types';

const componentClassNames = {
    root: 'ngm-NavigationItemLink',
    body: 'ngm-NavigationItemLink__body',
    icon: 'ngm-NavigationItemLink__icon'
};

const useRootBaseStyles = makeStyles({
    root: {
        ...shorthands.padding('12px'),
        backgroundColor: tokens.colorNeutralBackground3,
        color: tokens.colorNeutralForeground2,
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '12px',
        [':hover']: {
            backgroundColor: tokens.colorNeutralBackground3Hover,
            color: tokens.colorNeutralForeground2Hover,
            cursor: 'pointer'
        },
        [':hover:active']: {
            backgroundColor: tokens.colorNeutralBackground3Pressed,
            color: tokens.colorNeutralForeground2Pressed,
            outlineStyle: 'none'
        }
    },
    active: {
        backgroundColor: tokens.colorNeutralBackground3Pressed,
        color: tokens.colorNeutralForeground2Pressed,
        outlineStyle: 'none'
    }
});

const useRootStyles = makeStyles({
    root: {
        backgroundColor: tokens.colorNeutralBackground5
    }
});

const useBodyStyles = makeStyles({
    root: {
        ...shorthands.overflow('hidden'),
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    }
});

const useIconStyles = makeStyles({
    root: {
        fontSize: '24px',
        height: '24px',
        width: '24px',
        color: tokens.colorBrandBackground,
        [':hover']: {
            color: tokens.colorBrandBackgroundHover
        },
        [':hover:active']: {
            color: tokens.colorBrandBackgroundPressed
        },
        ['::before']: {
            ...shorthands.inset(0, 'auto', 0, 0),
            content: '""',
            width: tokens.strokeWidthThicker,
            position: 'absolute',
            backgroundColor: tokens.colorTransparentBackground,
            transitionDuration: tokens.durationFaster,
            transitionProperty: 'background',
            transitionTimingFunction: tokens.curveEasyEase,
        }
    },
    active: {
        color: tokens.colorBrandBackgroundPressed,
        ['::before']: {
            backgroundColor: tokens.colorBrandBackground
        }
    },
    open: {
        ['::before']: {
            backgroundColor: tokens.colorBrandBackground2
        }
    }
});

/**
 * Apply styling to the NavigationItemLink based on the component state.
 */
export const useNavigationItemLinkStyles = (state: NavigationItemLinkState): NavigationItemLinkStyles => {
    const rootBaseStyles = useRootBaseStyles();
    const rootStyles = useRootStyles();
    const bodyStyles = useBodyStyles();
    const iconStyles = useIconStyles();

    return {
        root: mergeClasses(
            componentClassNames.root,
            rootBaseStyles.root,
            (state.isChild || state.isOpen) && rootStyles.root,
            (state.isActive) && rootBaseStyles.active
        ),
        body: mergeClasses(
            componentClassNames.body,
            bodyStyles.root
        ),
        icon: mergeClasses(
            componentClassNames.icon,
            iconStyles.root,
            (state.isChild || state.isOpen) && iconStyles.open,
            (state.isActive) && iconStyles.active
        )
    };
};