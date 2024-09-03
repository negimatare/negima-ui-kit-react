import * as React from 'react';
import { useTranslation } from 'react-i18next';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { Subtitle2, ProgressBar } from '@fluentui/react-components';
import { Logo } from '@negima/react-components';

import type { LoadingScreenSurfaceProps } from './LoadingScreenSurface.types';
import { useLoadingScreenSurfaceStyles } from './useLoadingScreenSurfaceStyles';

/**
 * LoadingScreenSurface component represents the visual part of a `LoadingScreen` as a whole,
 * it contains everything that should be visible.
 */
export const LoadingScreenSurface: ForwardRefComponent<LoadingScreenSurfaceProps> = React.forwardRef(({ }, ref) => {
    const styles = useLoadingScreenSurfaceStyles();

    const { t: transl } = useTranslation();

    return (
        <div ref={ref} className={`${styles.root} t-backdrop-blur`}>
            <div className={styles.backdrop} />

            <ProgressBar thickness="large" className={styles.progressBar} />

            <div className={`${styles.logo} t-animate-bounce`}>
                <Logo width={28} />

                <Subtitle2>{transl('loading-screen.now-loading-label')}</Subtitle2>
            </div>
        </div>
    );
});

LoadingScreenSurface.displayName = 'LoadingScreenSurface';