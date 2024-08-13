import * as React from 'react';
import type { MotionImperativeRef } from '@fluentui/react-components';
import { createMotionComponent, motionTokens } from '@fluentui/react-components';

import type { LoadingScreenProps } from './LoadingScreen.types';
import { LoadingScreenSurface } from '../LoadingScreenSurface/LoadingScreenSurface';

const LoadingScreenMotion = createMotionComponent({
    duration: motionTokens.durationGentle,
    easing: motionTokens.curveLinear,
    keyframes: [{ opacity: 0 }, { opacity: 1 }]
});

/**
 * LoadingScreen component.
 */
export const LoadingScreen: React.FC<LoadingScreenProps> = () => {
    const motionRef = React.useRef<MotionImperativeRef>();

    return <LoadingScreenMotion imperativeRef={motionRef}><LoadingScreenSurface /></LoadingScreenMotion>;
}

LoadingScreen.displayName = 'LoadingScreen';