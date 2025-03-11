import * as React from 'react';
import { VFX_SETTINGS } from '@negima/react-configs';

import type { OAuth2TemplateSurfaceProps } from './OAuth2TemplateSurface.types';
import { useOAuth2TemplateSurfaceStyles } from './useOAuth2TemplateSurfaceStyles';

/**
 * OAuth2TemplateSurface component.
 */
export const OAuth2TemplateSurface: React.FC<OAuth2TemplateSurfaceProps> = () => {
    const styles = useOAuth2TemplateSurfaceStyles();

    return (
        <div className={styles.root}>
            <div className={styles.backdrop} />

            <video
                autoPlay
                loop
                muted
                poster={`/themes/${VFX_SETTINGS.THEME}/background.webp`}
                preload="none"
                className={`${styles.video} tw:object-cover`}
            >
                <source src={`/themes/${VFX_SETTINGS.THEME}/background.mp4`} type="video/mp4" />
            </video>
        </div>
    );
};

OAuth2TemplateSurface.displayName = 'OAuth2TemplateSurface';