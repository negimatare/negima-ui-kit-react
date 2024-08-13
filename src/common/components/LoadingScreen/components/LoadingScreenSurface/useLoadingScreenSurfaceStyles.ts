import { makeStyles, mergeClasses, shorthands, tokens } from '@fluentui/react-components';
import { VFX_SETTINGS } from '@negima/react-configs';

import type { LoadingScreenSurfaceStyles } from './LoadingScreenSurface.types';

const componentClassNames = {
    root: 'ngm-LoadingScreenSurface',
    backdrop: 'ngm-LoadingScreenSurface__backdrop',
    logo: 'ngm-LoadingScreenSurface__logo',
    progressBar: 'ngm-LoadingScreenSurface__progressBar'
};

const useRootBaseStyles = makeStyles({
    root: {
        ...shorthands.inset('0px'),
        position: 'fixed',
        transitionDuration: tokens.durationGentle,
        transitionTimingFunction: tokens.curveLinear,
        transitionProperty: 'opacity',
        willChange: 'opacity',
        opacity: 0
    }
});

const useBackdropStyles = makeStyles({
    root: {
        ...shorthands.inset(0),
        position: 'fixed',
        backgroundImage: VFX_SETTINGS.BACKDROP_FILTER,
        opacity: .45
    }
});

const useLogoStyles = makeStyles({
    root: {
        ...shorthands.inset('unset', '24px', '24px', 'unset'),
        ...shorthands.margin('auto'),
        ...shorthands.padding(0),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
        color: tokens.colorBrandBackground,
        position: 'fixed'
    }
});

const useProgressBarStyles = makeStyles({
    root: {
        position: 'fixed',
        top: 0
    }
});

/**
 * Apply styling to the LoadingScreenSurface based on the component transition state.
 */
export const useLoadingScreenSurfaceStyles = (): LoadingScreenSurfaceStyles => {
    const rootBaseStyles = useRootBaseStyles();
    const backdropStyles = useBackdropStyles();
    const logoStyles = useLogoStyles();
    const progressBarStyles = useProgressBarStyles();

    return {
        root: mergeClasses(
            componentClassNames.root,
            rootBaseStyles.root
        ),
        backdrop: mergeClasses(
            componentClassNames.backdrop,
            backdropStyles.root
        ),
        logo: mergeClasses(
            componentClassNames.logo,
            logoStyles.root
        ),
        progressBar: mergeClasses(
            componentClassNames.progressBar,
            progressBarStyles.root
        )
    };
};