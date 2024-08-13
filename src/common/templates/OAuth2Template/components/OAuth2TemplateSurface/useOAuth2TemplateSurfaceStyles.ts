import { makeStyles, mergeClasses, shorthands } from '@fluentui/react-components';
import { VFX_SETTINGS } from '@negima/react-configs';

import type { OAuth2TemplateSurfaceStyles } from './OAuth2TemplateSurface.types';

const componentClassNames = {
    root: 'ngm-OAuth2TemplateSurface',
    backdrop: 'ngm-OAuth2TemplateSurface__backdrop',
    video: 'ngm-OAuth2TemplateSurface__video'
};

const useRootStyles = makeStyles({
    root: {
        ...shorthands.overflow('hidden'),
        position: 'relative',
        width: '100%',
        height: '100%',
        ['@media screen and (max-width: 1024px)']: {
            ...shorthands.inset(0),
            position: 'absolute'
        }
    }
});

const useBackdropStyles = makeStyles({
    root: {
        ...shorthands.inset(0),
        position: 'absolute',
        backgroundImage: VFX_SETTINGS.BACKDROP_FILTER,
        opacity: .45
    }
});

const useVideoStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        ['@media screen and (max-width: 1024px)']: {
            display: 'none'
        }
    }
});

/**
 * Apply styling to the OAuth2TemplateSurface based on the component state.
 */
export const useOAuth2TemplateSurfaceStyles = (): OAuth2TemplateSurfaceStyles => {
    const rootStyles = useRootStyles();
    const backdropStyles = useBackdropStyles();
    const videoStyles = useVideoStyles();

    return {
        root: mergeClasses(
            componentClassNames.root,
            rootStyles.root
        ),
        backdrop: mergeClasses(
            componentClassNames.backdrop,
            backdropStyles.root
        ),
        video: mergeClasses(
            componentClassNames.video,
            videoStyles.root
        )
    };
};